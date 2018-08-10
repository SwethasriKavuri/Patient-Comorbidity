 
/*****************************************************************************
 
        Source file name: RHIO_MPAGE_DRIVER.prg
 
 
 		Purpose: This is the driver program for the RHIO Mpage.
 
 
 
******************************************************************************/
 
 
;~DB~************************************************************************
;    *                      GENERATED MODIFICATION CONTROL LOG              *
;    ************************************************************************
;    *                                                                      *
;    *Mod Date       Engineeer          Comment                             *
;    *--- ---------- ------------------ ----------------------------------- *
;     001 12/2010   Mei Cobb          Initial Release
;           															    *
;                                                                            *
;~DE~************************************************************************
 
;
;~END~ ******************  END OF ALL MODCONTROL BLOCKS  ********************
 
 
drop program uhmc_mp_comorbidity_driver:dba go
create program uhmc_mp_comorbidity_driver:dba
 
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
 
;//obtain name of current domain
select into 'nl:'
     d.info_char
from dm_info d
where
     d.info_domain = 'DATA MANAGEMENT' and  d.info_name = 'DM_ENV_NAME'
detail
     domain = trim(d.info_char,3)
with nocounter
 
if(domain = "PROD")
	set StaticSourceDir = "\\Uhmc-fs-share\cerner\Prod\WININTEL\static_content\mp_RHIO"
else
    set StaticSourceDir = "\\Uhmc-fs-share\cerner\Dev\MOCK\WININTEL\static_content\mp_RHIO"
endif
 
if(domain = "PROD")
	set StaticSourceDir = "\\uhmc-fs-share\cerner\PROD\WININTEL\static_content\mp_uhmc_comorbidity"
elseif(domain = "P159" or domain = "p159")
    set StaticSourceDir = "\\unvrnynas\unvrny\p159\WININTEL\static_content\mp_uhmc_comorbidity"
elseif(domain = "C159")
    set StaticSourceDir = "\\unvrnynas\unvrny\c159\WININTEL\static_content\mp_uhmc_comorbidity"
else
 
    set StaticSourceDir = "\\unvrnynas\unvrny\m159\WININTEL\static_content\mp_uhmc_comorbidity"
endif
 
 
set HTMLSourceDir = "cust_script:"
 
call echo(build("StaticSourceDir: ",StaticSourceDir))
call echo(build("HTMLSourceDir: ",HTMLSourceDir))
 
 
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
set getrequest->Module_name = "uhmc_mp_comorbidity.html"
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
 
 