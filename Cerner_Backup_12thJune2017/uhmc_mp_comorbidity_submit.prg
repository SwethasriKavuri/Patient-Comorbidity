/*****************************************************************************
	Source: uhmc_mp_comorbidity_submit.prg
	Author: Neil Mendoza
	Date: 03/02/2015
	Purpose: Called to commit data from the Co-Morbidity MPage
******************************************************************************/
 
drop program uhmc_mp_comorbidity_submit:dba go
create program uhmc_mp_comorbidity_submit:dba
 
prompt
	"Output to File/Printer/MINE = " = "MINE"
	,"Person Id = " = 0.0
	,"Encntr Id = " = 0.0
	,"Prsnl Id = " = 0.0
	,"Computed Co-Morbidities = " = ""
	,"Other Co-Morbidities = " = ""
 
with outdev, personid, encntrid, prsnlid, ccomorb, ocomorb
 
declare CR = c1 with constant(char(13)),protect
declare CURDTTM = dq8 with constant(cnvtdatetime(curdate,curtime3))
declare CURDTTMVC = vc with constant(format(cnvtdatetime(curdate,curtime3),"YYYYMMDDhhmmss;;d"))
declare cnt = i4
declare cnt1 = i4
declare obxcnt = vc
declare patientname = vc
declare providerstr = vc
declare mrn = vc
declare encntr = vc
declare tmpstr = vc
 
free record JSON
record JSON
(
	1 data = vc
)
 
free record temp
record temp
(
	1 successful = i2
	1 msg = vc
)
 
free record temp1
record temp1
(
	1 cccnt = i4
	1 cc[*]
		2 comorb = vc
		2 type = vc
		2 header = vc
		2 results = vc
	1 occnt = i4
	1 oc[*]
		2 comorb = vc
		2 type = vc
		2 header = vc
		2 results = vc
)
 
set temp->successful = 0
set temp->msg = "Error creating Co-Morbidity HL7."
 
select into "nl:"
from person p, person_alias pa
plan p where p.person_id = cnvtreal($personid)
	and p.active_ind = 1
join pa where pa.person_id = p.person_id
	and pa.alias_pool_cd = 309692.00	;UHMCSB MRN
	and pa.end_effective_dt_tm > cnvtdatetime(curdate,curtime3)
	and pa.beg_effective_dt_tm < cnvtdatetime(curdate,curtime3)
	and pa.active_ind = 1
detail
	patientname = build(p.name_last,"^",p.name_first)
	mrn = trim(pa.alias,3)
with nocounter
 
select into "nl:"
from encntr_alias ea
where ea.encntr_id = cnvtreal($encntrid)
	and ea.encntr_alias_type_cd = 844.00	;ENC NBR
	and ea.end_effective_dt_tm > cnvtdatetime(curdate,curtime3)
	and ea.beg_effective_dt_tm < cnvtdatetime(curdate,curtime3)
	and ea.active_ind = 1
detail
	encntr = trim(ea.alias,3)
with nocounter
 
select into "nl:"
from prsnl p, prsnl_alias pa
plan p where p.person_id = cnvtreal($prsnlid)
	and p.active_ind = 1
join pa where pa.person_id = outerjoin(p.person_id)
	and pa.prsnl_alias_type_cd = outerjoin(852.00)		;ORGANIZATION DOCTOR
	and pa.end_effective_dt_tm > outerjoin(cnvtdatetime(curdate,curtime3))
	and pa.beg_effective_dt_tm < outerjoin(cnvtdatetime(curdate,curtime3))
	and pa.active_ind = outerjoin(1)
detail
	providerstr = build(pa.alias,"^",p.name_last,"^",p.name_first)
with nocounter
 
set cnt = 2
set cnt1 = 0
while (piece($ccomorb,"~",cnt,"NOMORE") != "NOMORE")
	set cnt1 = cnt1 + 1
	set stat = alterlist(temp1->cc,cnt1)
	set tmpstr = trim(piece(piece($ccomorb,"~",cnt,""),"^",1,""),3)
	set temp1->cc[cnt1].header = tmpstr
	set temp1->cc[cnt1].comorb = trim(piece(tmpstr,":",1,tmpstr),3)
	set temp1->cc[cnt1].type = trim(piece(tmpstr,":",2,""),3)
	set tmpstr = trim(piece(piece($ccomorb,"~",cnt,""),"^",2,""),3)
	set temp1->cc[cnt1].results = trim(substring(2,size(tmpstr),tmpstr),3)
	set cnt = cnt + 1
endwhile
set temp1->cccnt = cnt1
 
set cnt = 2
set cnt1 = 0
while (piece($ocomorb,"~",cnt,"NOMORE") != "NOMORE")
	set cnt1 = cnt1 + 1
	set stat = alterlist(temp1->oc,cnt1)
	if (trim(piece($ocomorb,"~",cnt,""),3) = "*Sepsis for the following reasons:*")
		set temp1->oc[cnt1].comorb = "Sepsis for the following reasons"
		set temp1->oc[cnt1].header = "Sepsis for the following reasons"
		set temp1->oc[cnt1].type = ""
		set temp1->oc[cnt1].results = trim(replace(trim(piece($ocomorb,"~",cnt,""),3),"Sepsis for the following reasons:","",1),3)
	elseif (trim(piece($ocomorb,"~",cnt,""),3) = "*Other CoMorbidities:*")
		set temp1->oc[cnt1].comorb = "Other CoMorbidities"
		set temp1->oc[cnt1].header = "Other CoMorbidities"
		set temp1->oc[cnt1].type = ""
		set temp1->oc[cnt1].results = trim(replace(trim(piece($ocomorb,"~",cnt,""),3),"Other CoMorbidities:","",1),3)
	else
		set tmpstr = trim(piece($ocomorb,"~",cnt,""),3)
		set temp1->oc[cnt1].header = tmpstr
		set temp1->oc[cnt1].comorb = trim(piece(tmpstr,":",1,tmpstr),3)
		set temp1->oc[cnt1].type = trim(piece(tmpstr,":",2,""),3)
	endif
	set cnt = cnt + 1
endwhile
set temp1->occnt = cnt1
 
for (cnt = 1 to temp1->cccnt)
	INSERT into CUST_COMORBIDITY
	SET active_ind = 1
		,active_dt_tm = cnvtdatetime(CURDTTM)
		,person_id = cnvtreal($personid)
		,encntr_id = cnvtreal($encntrid)
		,provider_id = cnvtreal($prsnlid)
		,poa_ind = 0
		,computed_ind = 1
		,comorb = temp1->cc[cnt].comorb
		,comorb_type = temp1->cc[cnt].type
		,header = temp1->cc[cnt].header
		,results = temp1->cc[cnt].results
		,updt_id = cnvtreal($prsnlid)
		,updt_dt_tm = cnvtdatetime(CURDTTM)
	with nocounter
endfor
if (temp1->cccnt = 0 or curqual > 0)
	for (cnt = 1 to temp1->occnt)
		INSERT into CUST_COMORBIDITY
		SET active_ind = 1
			,active_dt_tm = cnvtdatetime(CURDTTM)
			,person_id = cnvtreal($personid)
			,encntr_id = cnvtreal($encntrid)
			,provider_id = cnvtreal($prsnlid)
			,poa_ind = 0
			,computed_ind = 0
			,comorb = temp1->oc[cnt].comorb
			,comorb_type = temp1->oc[cnt].type
			,header = temp1->oc[cnt].header
			,results = temp1->oc[cnt].results
			,updt_id = cnvtreal($prsnlid)
			,updt_dt_tm = cnvtdatetime(CURDTTM)
		with nocounter
	endfor
 
	if (temp1->occnt = 0 or curqual > 0)
		set temp->successful = 1
		set temp->msg = "Successfully saved Co-Morbidity into database."
 
		COMMIT
	else
		set temp->successful = 0
		set temp->msg = "Error encountered while saving Co-Morbidity into database."
	endif
else
	set temp->successful = 0
	set temp->msg = "Error encountered while saving Co-Morbidity into database."
endif
 
if (temp->successful = 1)
	declare emailbody = vc
	set emailbody = build("MRN:",mrn,",ENC:",encntr,",PID:",$prsnlid,"-",providerstr,",CC:",$ccomorb,",OC:",$ocomorb)
	call uar_send_mail(nullterm("neil.mendoza@stonybrookmedicine.edu"),
							   nullterm("Co-Morbidity Submissions"),
							   nullterm(emailbody),
							   nullterm("CoMorbidity@stonybrookmedicine.edu"),
							   5,
							   "IPM.NOTE")
	call uar_send_mail(nullterm("mark.henry@stonybrookmedicine.edu"),
							   nullterm("Co-Morbidity Submissions"),
							   nullterm(emailbody),
							   nullterm("CoMorbidity@stonybrookmedicine.edu"),
							   5,
							   "IPM.NOTE")
endif
 
set JSON->data = cnvtrectojson(temp)
 
record putREQUEST
(
	1 source_dir = vc
  	1 source_filename = vc
  	1 nbrlines = i4
  	1 line [*]
    	2 lineData = vc
  	1 OverFlowPage [*]
    	2 ofr_qual [*]
      		3 ofr_line = vc
  	1 IsBlob = c1
  	1 document_size = i4
  	1 document = gvc
)
 
set putRequest->source_dir = $outdev
set putRequest->IsBlob = "1"
set putRequest->document = JSON->data
set putRequest->document_size = size(putRequest->document)
 
execute eks_put_source with replace(Request,putRequest),replace(reply,putReply)
 
free record temp
free record temp1
free record JSON
 
end
go