/*****************************************************************************
	Source: uhmc_mp_comorbidity2_data.prg (copy of uhmc_mp_comorbidity_data.prg w/ modifications)
	Author: Neil Mendoza
	Date: 03/02/2015
	Purpose: To retrieve results/data for the Co-Morbidity MPage
******************************************************************************/
 
drop program uhmc_mp_comorbidity3_data:dba go
create program uhmc_mp_comorbidity3_data:dba
 
prompt
	"Output to File/Printer/MINE" = "MINE"
	, "Encounter Id" = 0.0
	, "Person Id" = 0.0
 
with OUTDEV, encntrid, personid
 
free record JSON
record JSON(
  1 data = vc
)
 
free record temp
record temp(
;Radiology Reports
	1 radCnt = i4
  	1 rad[*]
  		2 title = vc
  		2 contents = vc
  		2 link = vc
  		2 ekglink = vc
)
 
declare OCFCOMP_VALUE = f8 with constant(uar_get_code_by("MEANING",120,"OCFCOMP")),protect
declare radCnt = i4 with noconstant(0)
declare blobout = vc with noconstant("")
declare bsize = i4 with noconstant(32768),public
declare blob_un = vc
declare tmpcnt = i4
declare ADMITDTTM = dq8 with noconstant(cnvtdatetime(curdate,curtime3))
 
;Get the Admitted date/time
select into "nl:"
from encntr_loc_hist elh
	,encounter e
plan elh where elh.encntr_id = $encntrid
join e where e.encntr_id = elh.encntr_id
order by elh.encntr_loc_hist_id
head report
	tmpcnt = 0
detail
	if (tmpcnt = 0 and elh.med_service_cd = 309811.00)	;Emergency (EM)
		tmpcnt = 1
	elseif (elh.med_service_cd != 309811.00 and tmpcnt = 1)
		ADMITDTTM = cnvtdatetime(elh.beg_effective_dt_tm)
		tmpcnt = 100
	endif
foot report
	if (e.inpatient_admit_dt_tm != null)
		ADMITDTTM = cnvtdatetime(e.inpatient_admit_dt_tm)
	endif
with nocounter
 
;Get Radiology reports
select into "nl:"
from orders o
	,clinical_event ce
	,ce_blob cb
plan o where o.person_id = $personid
	and o.catalog_type_cd = 2176.00
	and o.encntr_id = $encntrid
	and o.orig_order_dt_tm <= cnvtdatetime(ADMITDTTM)
join ce where ce.order_id = o.order_id
;	and ce.event_class_cd = 220.00		;DOC
;	and ce.contributor_system_cd = 309703.00	;RADIOLOGY
	and ce.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
	and ce.result_status_cd in (26.00,24.00)	;Final,Modified
join cb where cb.event_id = ce.event_id
	and cb.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
order by ce.event_id, cb.blob_seq_num
head ce.event_id
	radCnt = radCnt + 1
	stat = alterlist(temp->rad,radCnt)
	if (size(trim(ce.event_title_text,3)) > 0)
		temp->rad[radCnt]->title = trim(ce.event_title_text,3)
	else
		temp->rad[radCnt]->title = trim(uar_get_code_display(ce.event_cd),3)
	endif
	temp->rad[radCnt]->link = build("javascript:showReport(",ce.person_id,",",ce.event_id,");")
detail
	blobout = notrim(fillstring(32768," "))
	if (cb.compression_cd = OCFCOMP_VALUE)
		call UAR_OCF_UNCOMPRESS(cb.blob_contents,textlen(cb.blob_contents),blobout,size(blobout),bsize)
	else
		blobout = substring(1,cb.blob_length,cb.blob_contents)
	endif
	blob_un = trim(blobout)
	if (size(temp->rad[radCnt].contents) > 0)
		temp->rad[radCnt]->contents = concat(temp->rad[radCnt].contents,char(10),char(10),blob_un)
	else
		temp->rad[radCnt]->contents = blob_un
	endif
with nocounter
 
;Get EKG Reports
select into "nl:"
from clinical_event ce
	,ce_blob cb
plan ce where ce.encntr_id = $encntrid
	and ce.event_cd = 48647571.00		;ECG Interpretation
	and ce.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
	and ce.result_status_cd in (23.00,26.00,24.00,35.00)
	and ce.event_class_cd = 220.00	;DOC
	and ce.event_end_dt_tm <= cnvtdatetime(ADMITDTTM)
join cb where cb.event_id = ce.event_id
	and cb.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
order by ce.event_id, cb.blob_seq_num
head ce.event_id
	radCnt = radCnt + 1
	stat = alterlist(temp->rad,radCnt)
	if (size(trim(ce.event_title_text,3)) > 0)
		temp->rad[radCnt]->title = trim(ce.event_title_text,3)
	else
		temp->rad[radCnt]->title = trim(uar_get_code_display(ce.event_cd),3)
	endif
	temp->rad[radCnt]->link = build("javascript:showReport(",ce.person_id,",",ce.event_id,");")
detail
	blobout = notrim(fillstring(32768," "))
	if (cb.compression_cd = OCFCOMP_VALUE)
		call UAR_OCF_UNCOMPRESS(cb.blob_contents,textlen(cb.blob_contents),blobout,size(blobout),bsize)
	else
		blobout = substring(1,cb.blob_length,cb.blob_contents)
	endif
	blob_un = trim(blobout)
	if (size(temp->rad[radCnt].contents) > 0)
		temp->rad[radCnt]->contents = concat(temp->rad[radCnt].contents,char(10),char(10),blob_un)
	else
		temp->rad[radCnt]->contents = blob_un
	endif
with nocounter
 
set temp->radCnt = radCnt
 
;//convert CCL record structure to JSON object
set  JSON->data =  cnvtrectojson(temp)
 
 ; REQUEST record to display the file
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
 
; Set parameters for displaying the file
set putRequest->source_dir = $outdev
set putRequest->IsBlob = "1"
set putRequest->document = JSON->data
set putRequest->document_size = size(putRequest->document)
 
;  Display the file.  This allows XmlCclRequest to receive the output
execute eks_put_source with replace(Request,putRequest),replace(reply,putReply)
 
free record JSON
free record temp
 
end
go
 