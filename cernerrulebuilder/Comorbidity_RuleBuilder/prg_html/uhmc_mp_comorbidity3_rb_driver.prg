/*****************************************************************************
	Source file name: uhmc_mp_comorbidity2_driver.prg
	Purpose: This is the driver program for the Co-morbidity Mpage.
******************************************************************************/
 
;~DB~************************************************************************
;    *                      GENERATED MODIFICATION CONTROL LOG              *
;    ************************************************************************
;    *                                                                      *
;    *Mod Date       Engineer           Comment                             *
;    *--- ---------- ------------------ ----------------------------------- *
;     001 07/15/2014 Neil Mendoza       Initial Release						*
;                                                                           *
;~DE~************************************************************************
;
;~END~ ******************  END OF ALL MODCONTROL BLOCKS  ********************
 
drop program uhmc_mp_comorb_rb_driver:dba go
create program uhmc_mp_comorb_rb_driver:dba
 
prompt
	"Output to File/Printer/MINE" = "MINE"
 
with OUTDEV
 
/**************************************************************
 *          Declare Variables and Subroutines                 *
 **************************************************************/
 
declare StaticSourceDir = vc with protect,noconstant(" ")
declare HTMLSourceDir   = vc with protect,noconstant(" ")
 
/***************************************************************************
*** ASSIGN SOURCEDIR VARIABLE WITH THE LOCATION OF THE STATIC_CONTENT    ***
****************************************************************************/
 
declare domain = vc
declare htmlfile = vc
 
;//obtain name of current domain
select into 'nl:'
     d.info_char
from dm_info d
where
     d.info_domain = 'DATA MANAGEMENT' and  d.info_name = 'DM_ENV_NAME'
detail
     domain = trim(d.info_char,3)
with nocounter
 
if (domain = "P159" or domain = "p159")
    set StaticSourceDir = "\\unvrnynas\unvrny\p159\WININTEL\static_content\uhmc_mp_comorbidity3"
    set htmlfile = "uhmc_mp_comorbidity3.html"
else
    set StaticSourceDir = "\\unvrnynas\unvrny\m159\WININTEL\static_content\uhmc_mp_comorbidity_test"
    set htmlfile = "uhmc_mp_comorbidity_test.html"
endif
 
set HTMLSourceDir = "cust_script:"
 
record getREQUEST (
  1 Module_Dir = vc
  1 Module_Name = vc
  1 bAsBlob = i2
)
 
record getREPLY (
  1 INFO_LINE[*]
    2 new_line                = vc
  1 data_blob                 = gvc
  1 data_blob_size            = i4
%i cclsource:status_block.inc
)
 
; Read in the html file
set getrequest->module_dir= HTMLSourceDir
set getrequest->Module_name = htmlfile
set getrequest->bAsBlob = 1
execute eks_get_source with replace (REQUEST,getREQUEST),replace(REPLY,getREPLY)
 
; Replace $SOURCE_DIR$ in the HTML file with the actual location of the static_content files
set getReply->data_blob = replace(getReply->data_blob,"$SOURCE_DIR$",StaticSourceDir,0)
 
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
  1 document = gvc
)
 
 
set putRequest->source_dir = $outdev
set putRequest->IsBlob = "1"
set putRequest->document = getReply->data_blob
set putRequest->document_size = size(putRequest->document)
 
; This outputs the display
execute eks_put_source with replace(Request,putRequest),replace(reply,putReply)
 
 
#exit_script
 
end
go
 
 