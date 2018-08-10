/*****************************************************************************
	Source: uhmc_mp_comorbidity_prev_data.prg
	Author: Neil Mendoza
	Date: 03/02/2015
	Purpose: To retrieve previously committed data for the Co-Morbidity MPage
******************************************************************************/
 
drop program uhmc_mp_comorbidity3_prev_data:dba go
create program uhmc_mp_comorbidity3_prev_data:dba
 
prompt
	"Output to File/Printer/MINE" = "MINE"
	, "Encntr Id = " = 0.0
 
with OUTDEV, encntrid
 
declare OCFCOMP_VALUE = f8 with protect,constant(uar_get_code_by("MEANING",120,"OCFCOMP"))
declare COMORB_CD = f8 with protect,constant(uar_get_code_by("DISPLAY_KEY",72,"EDCOMORBIDITY"))
declare blobout = vc with noconstant("")
declare bsize = i4 with noconstant(32768),public
declare cnt = i4 with noconstant(0)
declare cnt1 = i4
declare cnt2 = i4
declare tmpstr = vc
declare tmpres = vc
 
free record JSON
record JSON (
  	1 data = vc )
 
free record temp
record temp (
	1 rec_cnt = i4
  	1 rec[*]
  		2 committedby = vc
  		2 comorb_cnt = i4
		2 comorb[*]
			3 comorb = vc
			3 desc = vc
			3 res_cnt = i4
			3 res[*]
				4 result = vc )
 
select into "nl:"
from clinical_event ce
	,ce_blob cb
	,prsnl p
	,ce_event_prsnl cep
plan ce where ce.encntr_id = $encntrid
	and ce.event_cd = COMORB_CD						;ED Co-Morbidity
	and ce.result_status_cd in (26.00,24.00,35.00)	;Final,Modified,Modified
	and ce.valid_from_dt_tm < cnvtdatetime(curdate,curtime3)
	and ce.valid_until_dt_tm > cnvtdatetime(curdate,curtime3)
join cb where cb.event_id = ce.event_id
	and cb.valid_from_dt_tm < cnvtdatetime(curdate,curtime3)
    and cb.valid_until_dt_tm > cnvtdatetime(curdate,curtime3)
join p where p.person_id = outerjoin(ce.performed_prsnl_id)
	and p.active_ind = outerjoin(1)
join cep where cep.event_id = outerjoin(ce.parent_event_id)
	and cep.valid_until_dt_tm > outerjoin(cnvtdatetime(curdate,curtime3))
	and cep.valid_from_dt_tm < outerjoin(cnvtdatetime(curdate,curtime3))
	and cep.action_status_cd = outerjoin(471.00)	;Completed
	and cep.action_type_cd = outerjoin(102.00)		;Perform
order by ce.performed_dt_tm desc,cb.blob_seq_num
detail
	cnt = cnt + 1
	stat = alterlist(temp->rec,cnt)
	if (ce.performed_prsnl_id > 1.0)
		temp->rec[cnt]->committedby = concat(trim(format(ce.performed_dt_tm,"@SHORTDATETIMENOSEC"),3)
											," by ",trim(p.name_full_formatted,3),".")
	else
		temp->rec[cnt]->committedby = concat(trim(format(ce.performed_dt_tm,"@SHORTDATETIMENOSEC"),3)
											," by ",trim(cep.action_prsnl_ft,3),".")
	endif
	cnt1 = 2
	if (cb.compression_cd = OCFCOMP_VALUE)
		blobout = notrim(fillstring(32768," "))
		call UAR_OCF_UNCOMPRESS(cb.blob_contents,textlen(cb.blob_contents),blobout,size(blobout),bsize)
		tmpstr = trim(piece(blobout,"*",cnt1,"NOMORE"),3)
		while (tmpstr != "NOMORE")
			stat = alterlist(temp->rec[cnt]->comorb,(cnt1-1))
			temp->rec[cnt]->comorb[(cnt1-1)]->desc = trim(piece(tmpstr,"[",1,tmpstr),3)
			temp->rec[cnt]->comorb[(cnt1-1)]->comorb = concat("^"
															 ,trim(piece(temp->rec[cnt]->comorb[(cnt1-1)]->desc,":",1,temp->rec[cnt]->comorb[(cnt1-1)]->desc),3)
															 ,"^")
			tmpres = trim(piece(piece(tmpstr,"[",2,""),"]",1,""),3)
			cnt2 = 1
			while (piece(tmpres,",",cnt2,"") != "")
				stat = alterlist(temp->rec[cnt]->comorb[(cnt1-1)]->res,cnt2)
				temp->rec[cnt]->comorb[(cnt1-1)]->res[cnt2]->result = trim(piece(tmpres,",",cnt2,""),3)
				cnt2 = cnt2 + 1
			endwhile
			temp->rec[cnt]->comorb[(cnt1-1)]->res_cnt = size(temp->rec[cnt]->comorb[(cnt1-1)]->res,5)
			cnt1 = cnt1 + 1
			tmpstr = trim(piece(blobout,"*",cnt1,"NOMORE"),3)
		endwhile
	else
		blobout = substring(1,cb.blob_length,cb.blob_contents)
		tmpstr = trim(piece(blobout,"*",cnt1,"NOMORE"),3)
		while (tmpstr != "NOMORE")
			stat = alterlist(temp->rec[cnt]->comorb,(cnt1-1))
			temp->rec[cnt]->comorb[(cnt1-1)]->desc = trim(piece(tmpstr,"[",1,tmpstr),3)
			temp->rec[cnt]->comorb[(cnt1-1)]->comorb = concat("^"
															 ,trim(piece(temp->rec[cnt]->comorb[(cnt1-1)]->desc,":",1,temp->rec[cnt]->comorb[(cnt1-1)]->desc),3)
															 ,"^")
			tmpres = trim(piece(piece(tmpstr,"[",2,""),"]",1,""),3)
			cnt2 = 1
			while (piece(tmpres,",",cnt2,"") != "")
				stat = alterlist(temp->rec[cnt]->comorb[(cnt1-1)]->res,cnt2)
				temp->rec[cnt]->comorb[(cnt1-1)]->res[cnt2]->result = trim(piece(tmpres,",",cnt2,""),3)
				cnt2 = cnt2 + 1
			endwhile
			temp->rec[cnt]->comorb[(cnt1-1)]->res_cnt = size(temp->rec[cnt]->comorb[(cnt1-1)]->res,5)
			cnt1 = cnt1 + 1
			tmpstr = trim(piece(blobout,"*",cnt1,"NOMORE"),3)
		endwhile
	endif
	temp->rec[cnt]->comorb_cnt = size(temp->rec[cnt]->comorb,5)
with nocounter
 
set temp->rec_cnt = cnt
 
set JSON->data = cnvtrectojson(temp)
 
record putREQUEST (
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
  	1 document = gvc )
 
set putRequest->source_dir = $outdev
set putRequest->IsBlob = "1"
set putRequest->document = JSON->data
set putRequest->document_size = size(putRequest->document)
 
execute eks_put_source with replace(Request,putRequest),replace(reply,putReply)
call echorecord(temp)
free record temp
free record JSON
 
end
go
 