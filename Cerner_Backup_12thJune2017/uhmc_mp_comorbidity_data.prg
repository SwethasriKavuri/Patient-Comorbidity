/*****************************************************************************
 
        Source file name: UHMC_MP_COMORBIDITY.prg
        Object name:    UHMC_MP_COMORBIDITY
 
 		Purpose: Return lab results  and  lab reports.
 		        This program is called by UHMC_MP_COMORBIDITY.js
 
 
 
******************************************************************************/
 
 
;~DB~************************************************************************
;    *                      GENERATED MODIFICATION CONTROL LOG              *
;    ************************************************************************
;    *                                                                      *
;    *Mod Date       Engineeer          Comment                             *
;    *--- ---------- ------------------ ----------------------------------- *
;     001 8/14/2012   Abhishek Shukla           Initial Release
;           		Yeshwanth Vijayakumar													    *
;                    Shaili Kapoor                                                       *
;~DE~************************************************************************
 
;
;~END~ ******************  END OF ALL MODCONTROL BLOCKS  ********************
 
 
 
 
 
drop program uhmc_mp_comorbidity_data:dba go
create program uhmc_mp_comorbidity_data:dba
 
 
prompt
	"Output to File/Printer/MINE" = "MINE"
	, "Encounter Id" = 490818
 
with OUTDEV, encntrid
 
 
declare url = vc
 declare onceperenc = i2
/* Temp variables */
/*
set normal_high = 0
set normal_low = 0
set max_val = 0
set min_val = 0
/*Temp end*/
set BlobOut = fillstring( 32768, ' ' )
set BlobOut1 = fillstring( 32768, ' ' )
 
 
 
free record JSON
record JSON(
  1 data = vc
)
 
 
free record temp
record temp(
 
  1	person_id = f8
  1 encntridCnt = i4
  1 encntr_ids[*]
	2 encntr_id = f8
  1 htn_result = vc
 
/* Medication List */
  1 med_list = vc
 
 
/*Sodium*/
  1 event_sodium_min_date = vc
  1 event_sodium_max_date = vc
  1 normal_high_sodium = vc
  1 normal_low_sodium = vc
  1 result_max_val_sodium = vc
  1 result_min_val_sodium = vc
 
/*Whole blood Sodium*/
  1 event_wb_sodium_min_date = vc
  1 event_wb_sodium_max_date = vc
  1 normal_wb_high_sodium = vc
  1 normal_wb_low_sodium = vc
  1 result_max_wb_val_sodium = vc
  1 result_min_wb_val_sodium = vc
 
/*Potassium*/
  1 event_potassium_min_date = vc
  1 event_potassium_max_date = vc
  1 normal_high_potassium = vc
  1 normal_low_potassium = vc
  1 result_max_val_potassium = vc
  1 result_min_val_potassium = vc
 
/*Whole blood potassium*/
  1 event_wb_potassium_min_date = vc
  1 event_wb_potassium_max_date = vc
  1 normal_wb_high_potassium = vc
  1 normal_wb_low_potassium = vc
  1 result_max_wb_val_potassium = vc
  1 result_min_wb_val_potassium = vc
/*Creatinine*/
  1 creatCnt = i4
  1 creat[*]
  	  2 encntr_id = f8
	  2 event_creat_min_date = vc
	  2 event_creat_max_date = vc
	  2 normal_high_creat = vc
	  2 normal_low_creat = vc
	  2 result_max_val_creat = vc
	  2 result_min_val_creat = vc
 
 /*Whole blood Creatinine*/
  1 wb_creatCnt = i4
  1 wb_creat[*]
  	  2 encntr_id = f8
	  2 wb_event_creat_max_date = vc
	  2 wb_event_creat_min_date = vc
	  2 wb_normal_high_creat = vc
	  2 wb_normal_low_creat = vc
	  2 wb_result_max_val_creat = vc
 	  2 wb_result_min_val_creat = vc
 
 /*Glucose*/
  1 event_glucose_min_date = vc
  1 event_glucose_max_date = vc
  1 normal_high_glucose = vc
  1 normal_low_glucose = vc
  1 result_max_val_glucose = vc
  1 result_min_val_glucose = vc
 
 /*Whole Blood Glucose*/
  1 event_wb_glucose_min_date = vc
  1 event_wb_glucose_max_date = vc
  1 normal_wb_high_glucose = vc
  1 normal_wb_low_glucose = vc
  1 result_max_wb_val_glucose = vc
  1 result_min_wb_val_glucose = vc
 
 /*Calcium*/
  1 event_calcium_min_date = vc
  1 event_calcium_max_date = vc
  1 normal_high_calcium = vc
  1 normal_low_calcium = vc
  1 result_max_val_calcium = vc
  1 result_min_val_calcium = vc
 
 /*WBC*/
  1 event_wbc_min_date = vc
  1 event_wbc_max_date = vc
  1 normal_high_wbc = vc
  1 normal_low_wbc = vc
  1 result_max_val_wbc = vc
  1 result_min_val_wbc = vc
 
 /*Leucocyte Nitrite*/
  1 event_leucoNit_min_date = vc
  1 event_leucoNit_max_date = vc
  1 normal_high_leucoNit = vc
  1 normal_low_leucoNit = vc
  1 result_max_val_leucoNit = vc
  1 result_min_val_leucoNit = vc
 
 /*Leucocyte Esterate*/
  1 event_leucoEst_min_date = vc
  1 event_leucoEst_max_date = vc
  1 normal_high_leucoEst = vc
  1 normal_low_leucoEst = vc
  1 result_max_val_leucoEst = vc
  1 result_min_val_leucoEst = vc
 
 /*GFR*/
  1 event_gfr_min_date = vc
  1 event_gfr_max_date = vc
  1 normal_high_gfr = vc
  1 normal_low_gfr = vc
  1 result_max_val_gfr = vc
  1 result_min_val_gfr = vc
 
 
 /* Weight and Height*/
  1 event_weight_min_date = vc
  1 result_min_val_weight = vc
  1 event_height_min_date = vc
  1 result_min_val_height = vc
 
  1 event_weight_max_date = vc
  1 result_max_val_weight = vc
  1 event_height_max_date = vc
  1 result_max_val_height = vc
 
 /*Diastolic BP*/
  1 event_diaBP_min_date = vc
  1 event_diaBP_max_date = vc
  1 normal_high_diaBP = vc
  1 normal_low_diaBP = vc
  1 result_max_val_diaBP = vc
  1 result_min_val_diaBP = vc
 
 /*Systolic BP*/
  1 event_sysBP_min_date = vc
  1 event_sysBP_max_date = vc
  1 normal_high_sysBP = vc
  1 normal_low_sysBP = vc
  1 result_max_val_sysBP = vc
  1 result_min_val_sysBP = vc
 
 /*BUN*/
  1 event_bun_min_date = vc
  1 event_bun_max_date = vc
  1 normal_high_bun = vc
  1 normal_low_bun = vc
  1 result_max_val_bun = vc
  1 result_min_val_bun = vc
 
  /*Whole Blood changes*/
  1 event_wb_bun_min_date = vc
  1 event_wb_bun_max_date = vc
  1 normal_wb_high_bun = vc
  1 normal_wb_low_bun = vc
  1 result_max_wb_val_bun = vc
  1 result_min_wb_val_bun = vc
 
/*PCo2*/
  1 pco2Cnt = i4
  1 pco2[*]
  	  2 encntr_id = f8
	  2 event_pco2_min_date = vc
	  2 event_pco2_max_date = vc
	  2 normal_high_pco2 = vc
	  2 normal_low_pco2 = vc
	  2 result_max_val_pco2 = vc
	  2 result_min_val_pco2 = vc
 
 /*ETCo2*/
  1 etco2Cnt = i4
  1 etco2[*]
      2 encntr_id = f8
	  2 event_etco2_min_date = vc
	  2 event_etco2_max_date = vc
	  2 normal_high_etco2 = vc
	  2 normal_low_etco2 = vc
	  2 result_max_val_etco2 = vc
	  2 result_min_val_etco2 = vc
 
 /* PO2 */
  1 event_po2_min_date = vc
  1 event_po2_max_date = vc
  1 normal_high_po2 = vc
  1 normal_low_po2 = vc
  1 result_max_val_po2 = vc
  1 result_min_val_po2 = vc
 
 /*O2 sat*/
  1 event_o2sat_min_date = vc
  1 event_o2sat_max_date = vc
  1 normal_high_o2sat = vc
  1 normal_low_o2sat = vc
  1 result_max_val_o2sat = vc
  1 result_min_val_o2sat = vc
 
 /*CT*/
  1 event_ct_min_date = vc
  1 event_ct_max_date = vc
  1 normal_high_ct = vc
  1 normal_low_ct = vc
  1 result_max_val_ct = vc
  1 result_min_val_ct = vc
 
  /*Temperature*/
  1 event_temp_min_date = vc
  1 event_temp_max_date = vc
  1 normal_high_temp = vc
  1 normal_low_temp = vc
  1 result_max_val_temp = vc
  1 result_min_val_temp = vc
 
  /*Heart Rate*/
  1 event_hr_min_date = vc
  1 event_hr_max_date = vc
  1 normal_high_hr = vc
  1 normal_low_hr = vc
  1 result_max_val_hr = vc
  1 result_min_val_hr = vc
 
  /*Respiratory Rate*/
  1 event_rr_min_date = vc
  1 event_rr_max_date = vc
  1 normal_high_rr = vc
  1 normal_low_rr = vc
  1 result_max_val_rr = vc
  1 result_min_val_rr = vc
 
  /*Hemoglobin*/
  1 hbCnt = i4
  1 hb[*]
  	  2 encntr_id = f8
	  2 event_hb_min_date = vc
	  2 event_hb_max_date = vc
	  2 normal_high_hb = vc
	  2 normal_low_hb = vc
	  2 result_max_val_hb = vc
	  2 result_min_val_hb = vc
 
  /*Hematocrit*/
  1 hcCnt = i4
  1 hc[*]
   	  2 encntr_id = f8
	  2 event_hc_min_date = vc
	  2 event_hc_max_date = vc
	  2 normal_high_hc = vc
	  2 normal_low_hc = vc
	  2 result_max_val_hc = vc
	  2 result_min_val_hc = vc
 
  /*Lactate*/
  1 event_lactate_min_date = vc
  1 event_lactate_max_date = vc
  1 normal_high_lactate = vc
  1 normal_low_lactate = vc
  1 result_max_val_lactate = vc
  1 result_min_val_lactate = vc
 
 /*UTI WBC*/
  1 event_utiWbc_min_date = vc
  1 event_utiWbc_max_date = vc
  1 normal_high_utiWbc = vc
  1 normal_low_utiWbc = vc
  1 result_max_val_utiWbc = vc
  1 result_min_val_utiWbc = vc
 
 /*Neutrophil*/
  1 event_neutrophil_min_date = vc
  1 event_neutrophil_max_date = vc
  1 normal_high_neutrophil = vc
  1 normal_low_neutrophil = vc
  1 result_max_val_neutrophil = vc
  1 result_min_val_neutrophil = vc
 
/*Lactic Acid*/
  1 event_lactic_acid_min_date = vc
  1 result_min_val_lactic_acid = vc
  1 normal_high_lactic_acid = vc
  1 normal_low_lactic_acid = vc
  1 event_lactic_acid_max_date = vc
  1 result_max_val_lactic_acid = vc
  /*Whole blood Lactic Acid*/
  1 event_wb_lactic_acid_min_date = vc
  1 result_min_wb_val_lactic_acid = vc
  1 normal_wb_high_lactic_acid = vc
  1 normal_wb_low_lactic_acid = vc
  1 event_wb_lactic_acid_max_date = vc
  1 result_max_wb_val_lactic_acid = vc
 
/*Phosphorus*/
  1 event_phosphorus_min_date = vc
  1 event_phosphorus_max_date = vc
  1 normal_low_phosphorus = vc
  1 normal_high_phosphorus = vc
  1 result_max_val_phosphorus = vc
  1 result_min_val_phosphorus = vc
 
 /*Magensium*/
  1 event_magnesium_min_date = vc
  1 event_magnesium_max_date = vc
  1 normal_low_magnesium = vc
  1 normal_high_magnesium = vc
  1 result_max_val_magnesium = vc
  1 result_min_val_magnesium = vc
 
 /*Cholesterol*/
  1 event_cholesterol_min_date = vc
  1 event_cholesterol_max_date = vc
  1 normal_high_cholesterol = vc
  1 normal_low_cholesterol = vc
  1 result_max_val_cholesterol = vc
  1 result_min_val_cholesterol = vc
 
   /*Pulse Oximetry*/
  1 event_oximetry_min_date = vc
  1 event_oximetry_max_date = vc
  1 normal_high_oximetry = vc
  1 normal_low_oximetry = vc
  1 result_max_val_oximetry = vc
  1 result_min_val_oximetry = vc
 
   /*Dehydration*/
  1 event_dehydration_creat_date = vc
  1 event_dehydration_bun_date = vc
  1 result_dehydration_creat_val = vc
  1 result_dehydration_bun_val = vc
)
 
set creatCnt = 0;
set wb_creatCnt = 0;
set pco2Cnt = 0;
set etco2Cnt = 0;
set hbCnt = 0;
set hcCnt = 0;
set encntridCnt = 0;
 
; /*           Medication list                  */
;
;SELECT
;	O.ACTIVE_IND
;	, O_CATALOG_DISP = UAR_GET_CODE_DISPLAY(O.CATALOG_CD)
;	, O_CATALOG_TYPE_DISP = UAR_GET_CODE_DISPLAY(O.CATALOG_TYPE_CD)
;
;FROM
;	ORDERS   O
;;	, order_compliance_detail   ocd
;
;;plan o	 where o.person_id=(select person_id from person_alias where alias="140999")
;plan o	 where o.encntr_id = $encntrid
;	and o.catalog_type_cd=       2175.00	;pharmacy
;	and O.TEMPLATE_ORDER_FLAG +0  IN (0 ,1 )
;;	AND O.ORIG_ORD_AS_FLAG=2.00
;	AND O.ORDER_STATUS_CD !=      12011.00	;deleted
;;join ocd where ocd.order_nbr = outerjoin(o.order_id)
;
;WITH NOCOUNTER, SEPARATOR=" ", FORMAT
;
;temp->med_list = O_CATALOG_DISP
;
;
;/*History*/
 
;select
;person_id = c.PERSON_ID
;from
;CLINICAL_EVENT c
;plan c
;where C.ENCNTR_ID=$encntrid
;
;detail
;temp->person_id = person_id
 
 
/* After retrieving person_id, we are fetching Hypertension (One of the medical history)
*/
;select
;result_val=c.result_val,
;from
;Clinical_Event c
;plan c
;where c.PERSON_ID=temp->person_id and c.event_cd=92653738  /* For HTN */
;and  NULLIND(C.RESULT_VAL) != 1
;and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
; group by c.encntr_id
;
;detail
;temp->htn_result = result_val
 
 
/*Sodium*/
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366644
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_sodium = normal_high
temp->normal_low_sodium = normal_low
temp->result_max_val_sodium = max_val
temp->result_min_val_sodium = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_sodium
and c.event_cd = 366644
detail
temp->event_sodium_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_sodium
and c.event_cd = 366644
detail
temp->event_sodium_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
 
 
/*Whole Blood Sodium*/
; 51645253
 select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=51645253
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_wb_high_sodium = normal_high
temp->normal_wb_low_sodium = normal_low
temp->result_max_wb_val_sodium = max_val
temp->result_min_wb_val_sodium = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_wb_val_sodium
and c.event_cd = 51645253
detail
temp->event_wb_sodium_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_wb_val_sodium
and c.event_cd = 51645253
detail
temp->event_wb_sodium_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/*Whole blood sodium end*/
 
/*Phosphorous*/
;366657
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366657
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_phosphorus = normal_high
temp->normal_low_phosphorus = normal_low
temp->result_max_val_phosphorus = max_val
temp->result_min_val_phosphorus = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_phosphorus
and c.event_cd = 366657
detail
temp->event_phosphorus_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_phosphorus
and c.event_cd = 366657
detail
temp->event_phosphorus_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
 
 
/*Phosphorous End*/
 
/*Magnesium*/
; 366659
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366659
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_magnesium = normal_high
temp->normal_low_magnesium = normal_low
temp->result_max_val_magnesium = max_val
temp->result_min_val_magnesium = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_magnesium
and c.event_cd = 366659
detail
temp->event_magnesium_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_magnesium
and c.event_cd = 366659
detail
temp->event_magnesium_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
/*Magnesium end*/
 
/*Cholesterol*/
; 366675
 
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366675
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_cholesterol = normal_high
temp->normal_low_cholesterol = normal_low
temp->result_max_val_cholesterol = max_val
temp->result_min_val_cholesterol = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_cholesterol
and c.event_cd = 366675
detail
temp->event_cholesterol_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_cholesterol
and c.event_cd = 366675
detail
temp->event_cholesterol_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
/*Cholesterol End*/
 
 
 
/*Potassium*/
; 366645
 
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366645
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_potassium = normal_high
temp->normal_low_potassium = normal_low
temp->result_max_val_potassium = max_val
temp->result_min_val_potassium = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_potassium
and c.event_cd = 366645
detail
temp->event_potassium_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_potassium
and c.event_cd = 366645
detail
temp->event_potassium_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
/*Potassium End*/
 
/*Whole Blood Potassium*/
 
; 366655
 
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366655
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_wb_high_potassium = normal_high
temp->normal_wb_low_potassium = normal_low
temp->result_max_wb_val_potassium = max_val
temp->result_min_wb_val_potassium = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_wb_val_potassium
and c.event_cd = 366655
detail
temp->event_wb_potassium_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_wb_val_potassium
and c.event_cd = 366655
detail
temp->event_wb_potassium_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
 /*Whole Blood Potassium ends*/
 /*Calcium*/
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366654
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_calcium = normal_high
temp->normal_low_calcium = normal_low
temp->result_max_val_calcium = max_val
temp->result_min_val_calcium = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_calcium
and c.event_cd = 366654
detail
temp->event_calcium_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_calcium
and c.event_cd = 366654
detail
temp->event_calcium_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/*Calcium ends*/
 
/*Glucose*/
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366648
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_glucose = normal_high
temp->normal_low_glucose = normal_low
temp->result_max_val_glucose = max_val
temp->result_min_val_glucose = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_glucose
and c.event_cd = 366648
detail
temp->event_glucose_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_glucose
and c.event_cd = 366648
detail
temp->event_glucose_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
/*Glucose ends*/
 
/*Whole Blood Glucose*/
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=51645256
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
detail
temp->normal_wb_high_glucose = normal_high
temp->normal_wb_low_glucose = normal_low
temp->result_max_wb_val_glucose = max_val
temp->result_min_wb_val_glucose = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_wb_val_glucose
and c.event_cd = 51645256
detail
temp->event_wb_glucose_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_wb_val_glucose
and c.event_cd = 51645256
detail
temp->event_wb_glucose_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
/*Whole Blood Glucose ends*/
 
/*wbc*/
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366703
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_wbc = normal_high
temp->normal_low_wbc = normal_low
temp->result_max_val_wbc = max_val
temp->result_min_val_wbc = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_wbc
and c.event_cd = 366703
detail
temp->event_wbc_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_wbc
and c.event_cd = 366703
detail
temp->event_wbc_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
/*wbc ends*/
 
 
/*Leuconit*/
select
normal_high=c.normal_high,
normal_low=c.normal_low,
max_val=c.result_val,
min_val=c.result_val
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366742 and c.result_val != "NEGATIVE"
 
detail
temp->normal_high_leucoNit = normal_high
temp->normal_low_leucoNit = normal_low
temp->result_max_val_leucoNit = max_val
temp->result_min_val_leucoNit = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_leucoNit
and c.event_cd = 366742
detail
temp->event_leucoNit_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_leucoNit
and c.event_cd = 366742
detail
temp->event_leucoNit_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
/*Leuconit ends*/
 
/*leucoEst*/
select
normal_high=c.normal_high,
normal_low=c.normal_low,
max_val=c.result_val,
min_val=c.result_val
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366743 and c.result_val != "NEGATIVE"
 
detail
temp->normal_high_leucoEst = normal_high
temp->normal_low_leucoEst = normal_low
temp->result_max_val_leucoEst = max_val
temp->result_min_val_leucoEst = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_leucoEst
and c.event_cd = 366743
detail
temp->event_leucoEst_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_leucoEst
and c.event_cd = 366743
detail
temp->event_leucoEst_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/*leucoEst ends*/
 
 /* gfr */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 49946269
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_gfr = normal_high
temp->normal_low_gfr = normal_low
temp->result_max_val_gfr = max_val
temp->result_min_val_gfr = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_gfr
and c.event_cd = 49946269
detail
temp->event_gfr_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_gfr
and c.event_cd = 49946269
detail
temp->event_gfr_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/* gfr ends */
 
/* weight */
select
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 9888909
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->result_max_val_weight = max_val
temp->result_min_val_weight = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_weight
and c.event_cd = 9888909
detail
temp->event_weight_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_weight
and c.event_cd = 9888909
detail
temp->event_weight_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/*weight ends */
 
/* height */
select
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 9888910
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->result_max_val_height = max_val
temp->result_min_val_height = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_height
and c.event_cd = 9888910
detail
temp->event_height_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_height
and c.event_cd = 9888910
detail
temp->event_height_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/*height ends */
 
/* diaBP */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 48326685
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_diaBP = normal_high
temp->normal_low_diaBP = normal_low
temp->result_max_val_diaBP = max_val
temp->result_min_val_diaBP = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_diaBP
and c.event_cd = 48326685
detail
temp->event_diaBP_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_diaBP
and c.event_cd = 48326685
detail
temp->event_diaBP_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/* diaBP ends */
 
/* sysBP */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 48326665
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_sysBP = normal_high
temp->normal_low_sysBP = normal_low
temp->result_max_val_sysBP = max_val
temp->result_min_val_sysBP = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_sysBP
and c.event_cd = 48326665
detail
temp->event_sysBP_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_sysBP
and c.event_cd = 48326665
detail
temp->event_sysBP_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/* sysBP ends */
 
/* bun */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 366649
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_bun = normal_high
temp->normal_low_bun = normal_low
temp->result_max_val_bun = max_val
temp->result_min_val_bun = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_bun
and c.event_cd = 366649
detail
temp->event_bun_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_bun
and c.event_cd = 366649
detail
temp->event_bun_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/* bun ends */
 
/*Whole blood bun */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 51645257
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_wb_high_bun = normal_high
temp->normal_wb_low_bun = normal_low
temp->result_max_wb_val_bun = max_val
temp->result_min_wb_val_bun = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_wb_val_bun
and c.event_cd = 51645257
detail
temp->event_wb_bun_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_wb_val_bun
and c.event_cd = 51645257
detail
temp->event_wb_bun_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/*Whole blood bun ends */
 
/* PO2 */
 
/* SPEED CHANGE
SELECT
	C.EVENT_END_DT_TM
	, C.NORMAL_HIGH
	, C.NORMAL_LOW
	, C.RESULT_VAL
 
FROM
	CLINICAL_EVENT   C
 
PLAN C
 
WHERE	C.ENCNTR_ID = $encntrid   and  C.EVENT_CD = 48920149
 and  NULLIND(C.RESULT_VAL) != 1
 and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
ORDER BY
	C.RESULT_VAL   ASC
 
detail
 
temp->event_po2_max_date = (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->normal_high_po2 = C.normal_high
temp->normal_low_po2 = C.normal_low
temp->result_max_val_po2 = C.result_val
 
*/
 ;48920149 - Arterial - Dr. Henry has now asked to take arterial, so this is currently considered
 ;48920170 - Venous - Dr.Henry said to take venous.
 
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=48920149
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_po2 = normal_high
temp->normal_low_po2 = normal_low
temp->result_max_val_po2 = max_val
temp->result_min_val_po2 = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_po2
and c.event_cd = 48920149
detail
temp->event_po2_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_po2
and c.event_cd = 48920149
detail
temp->event_po2_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
 
 /* O2 sat*/
 
/* SPEED CHANGE
SELECT
	C.EVENT_END_DT_TM
	, C.NORMAL_HIGH
	, C.NORMAL_LOW
	, C.RESULT_VAL
 
FROM
	CLINICAL_EVENT   C
 
PLAN C
 
WHERE	C.ENCNTR_ID = $encntrid   and  C.EVENT_CD = 135041537
 and  NULLIND(C.RESULT_VAL) != 1
 and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
ORDER BY
	C.RESULT_VAL   ASC
 
detail
 
temp->event_o2sat_max_date = (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->normal_high_o2sat = C.normal_high
temp->normal_low_o2sat = C.normal_low
temp->result_max_val_o2sat = C.result_val
 
*/
 
; 135041537
 
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=135041537
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_o2sat = normal_high
temp->normal_low_o2sat = normal_low
temp->result_max_val_o2sat = max_val
temp->result_min_val_o2sat = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_o2sat
and c.event_cd = 135041537
detail
temp->event_o2sat_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_o2sat
 and c.event_cd = 135041537
detail
temp->event_o2sat_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
/*Pulse Oximetry*/
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd = 48326898
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_oximetry = normal_high
temp->normal_low_oximetry = normal_low
temp->result_max_val_oximetry = max_val
temp->result_min_val_oximetry = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_oximetry
and c.event_cd = 48326898
detail
temp->event_oximetry_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_oximetry
 and c.event_cd = 48326898
detail
temp->event_oximetry_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 /* CT */
 
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366686
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_ct = normal_high
temp->normal_low_ct = normal_low
temp->result_max_val_ct = max_val
temp->result_min_val_ct = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_ct
and c.event_cd = 366686
detail
temp->event_ct_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_ct
 and c.event_cd = 366686
detail
temp->event_ct_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
 
/* SPEED CHANGE
 
SELECT
	C.EVENT_END_DT_TM
	, C.NORMAL_HIGH
	, C.NORMAL_LOW
	, C.RESULT_VAL
 
FROM
	CLINICAL_EVENT   C
 
PLAN C
 
WHERE	C.ENCNTR_ID = $encntrid   and  C.EVENT_CD = 366686
 and  NULLIND(C.RESULT_VAL) != 1
 and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
ORDER BY
	C.RESULT_VAL   DESC
 
detail
 
temp->event_ct_min_date = (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->normal_high_ct = C.normal_high
temp->normal_low_ct = C.normal_low
temp->result_min_val_ct = C.result_val
 
*/
 
/*temperature */
 ; 48326730
 select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=48326730
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_temp = normal_high
temp->normal_low_temp = normal_low
temp->result_max_val_temp = max_val
temp->result_min_val_temp = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_temp
and c.event_cd = 48326730
detail
temp->event_temp_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_temp
 and c.event_cd = 48326730
detail
temp->event_temp_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 /*heart rate */
 ; 48326879
 
 select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=48326879
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_hr = normal_high
temp->normal_low_hr = normal_low
temp->result_max_val_hr = max_val
temp->result_min_val_hr = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_hr
and c.event_cd = 48326879
detail
temp->event_hr_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_hr
 and c.event_cd = 48326879
detail
temp->event_hr_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
 
/* lactate */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 31968092
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_lactate = normal_high
temp->normal_low_lactate = normal_low
temp->result_max_val_lactate = max_val
temp->result_min_val_lactate = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_lactate
and c.event_cd = 31968092
detail
temp->event_lactate_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_lactate
and c.event_cd = 31968092
detail
temp->event_lactate_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/* lactate ends */
 
/* neutrophil */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 366575
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_neutrophil = normal_high
temp->normal_low_neutrophil = normal_low
temp->result_max_val_neutrophil = max_val
temp->result_min_val_neutrophil = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_neutrophil
and c.event_cd = 366575
detail
temp->event_neutrophil_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_neutrophil
and c.event_cd = 366575
detail
temp->event_neutrophil_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/* neutrophil ends */
 
/* rr */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd= 48326717
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_rr = normal_high
temp->normal_low_rr = normal_low
temp->result_max_val_rr = max_val
temp->result_min_val_rr = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_rr
and c.event_cd = 48326717
detail
temp->event_rr_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_rr
and c.event_cd = 48326717
detail
temp->event_rr_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/* rr ends */
 
 /* lactic acid */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366692
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_lactic_acid = normal_high
temp->normal_low_lactic_acid = normal_low
temp->result_max_val_lactic_acid = max_val
temp->result_min_val_lactic_acid = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_lactic_acid
and c.event_cd = 366692
detail
temp->event_lactic_acid_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_lactic_acid
and c.event_cd = 366692
detail
temp->event_lactic_acid_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/*lactic Acid ends*/
 
/*whole blood lactic Acid */
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=61320878
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_wb_high_lactic_acid = normal_high
temp->normal_wb_low_lactic_acid = normal_low
temp->result_max_wb_val_lactic_acid = max_val
temp->result_min_wb_val_lactic_acid = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_wb_val_lactic_acid
and c.event_cd = 61320878
detail
temp->event_wb_lactic_acid_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_wb_val_lactic_acid
and c.event_cd = 61320878
detail
temp->event_wb_lactic_acid_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
/*whole blood lactic acid ends*/
 
/*uti wbc*/
select
normal_high=max(c.normal_high),
normal_low=min(c.normal_low),
max_val=max(c.result_val),
min_val=min(c.result_val)
from
Clinical_Event c
plan c
where c.encntr_id=$encntrid and c.event_cd=366642
and  NULLIND(C.RESULT_VAL) != 1
and  OPERATOR(C.RESULT_VAL,"REGEXPLIKE","[0-9]")
group by c.encntr_id
 
detail
temp->normal_high_utiWbc = normal_high
temp->normal_low_utiWbc = normal_low
temp->result_max_val_utiWbc = max_val
temp->result_min_val_utiWbc = min_val
 
;max date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val = temp->result_max_val_utiWbc
and c.event_cd = 366642
detail
temp->event_utiWbc_max_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
 
;min date
select
c.event_end_dt_tm
from
clinical_event c
plan c
where c.encntr_id=$encntrid and
c.result_val=temp->result_min_val_utiWbc
and c.event_cd = 366642
detail
temp->event_utiWbc_min_date= (format(C.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
with maxrec = 1
/*uti wbc ends*/
/*Getting Person ID*/
 
SELECT
	E.PERSON_ID
 
FROM
	ENCOUNTER   E
 
PLAN E
WHERE E.ENCNTR_ID = $encntrid
 
detail
temp->person_id = E.PERSON_ID
 
/* Dehydration */
SELECT
	dehydration_creat_date = creat.event_end_dt_tm
	, dehydration_bun_date = bun.event_end_dt_tm
	, dehydration_creat_val = creat.result_val
	, dehydration_bun_val = bun.result_val
 
FROM
	clinical_event   creat
	, clinical_event   bun
 
where creat.encntr_id= $encntrid
and creat.event_cd = 366653
and
bun.encntr_id = $encntrid
and bun.event_cd = 366649
and creat.event_end_dt_tm = bun.event_end_dt_tm
 
ORDER BY
	(cnvtint(bun.result_val)/(cnvtint(creat.result_val)+1)) DESC
 
detail
temp->event_dehydration_creat_date = (format(creat.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->event_dehydration_bun_date = (format(bun.event_end_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->result_dehydration_bun_val = dehydration_bun_val
temp->result_dehydration_creat_val = dehydration_creat_val
 
WITH MAXREC = 1
 
/* single value changes end here */
/*
1413540
1367272
*/
 
 ; code modified on 20th june 2013 by kc
 ;creat start
 select into "nl:"
from clinical_event ce
                , encntr_alias ea
plan ce where ce.person_id = temp->person_id
                and ce.event_cd = 366653
                and ce.clinsig_updt_dt_tm >= cnvtdatetime(curdate - 365, 000000)
                and ce.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
                and ce.result_status_cd in (26.00,24.00)        ;Final,Modified
join ea where ea.encntr_id = ce.encntr_id
                and ea.encntr_alias_type_cd = 844 ;ENC
                and ea.active_ind = 1
order by ce.person_id,ce.encntr_id desc,ce.clinsig_updt_dt_tm desc
 
head ce.person_id
                creatCnt = 0
head ce.encntr_id
                onceperenc = 0
detail
if (creatCnt < 2 and cnvtreal(ce.result_val) > 0.0)
if (onceperenc = 0)
onceperenc = 1
creatCnt = creatCnt + 1
stat = alterlist(temp->creat,creatCnt)
temp->creat[creatCnt]->result_max_val_creat = ce.result_val
temp->creat[creatCnt]->event_creat_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->creat[creatCnt]->result_min_val_creat = ce.result_val
temp->creat[creatCnt]->event_creat_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->creat[creatCnt]->encntr_id = ce.encntr_id
temp->creat[creatCnt]->normal_high_creat = ce.normal_high
temp->creat[creatCnt]->normal_low_creat = ce.normal_low
temp->creatCnt=creatCnt
else
if (cnvtreal(ce.result_val) > cnvtreal(temp->creat[creatCnt]->result_max_val_creat))
 temp->creat[creatCnt]->result_max_val_creat = ce.result_val
 temp->creat[creatCnt]->event_creat_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 elseif (cnvtreal(ce.result_val) < cnvtreal(temp->creat[creatCnt]->result_min_val_creat))
  temp->creat[creatCnt]->result_min_val_creat = ce.result_val
   temp->creat[creatCnt]->event_creat_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 endif
 if (cnvtreal(ce.normal_high) > cnvtreal(temp->creat[creatCnt]->normal_high_creat))
  temp->creat[creatCnt]->normal_high_creat = ce.normal_high
  endif
  if (cnvtreal(ce.normal_low) < cnvtreal(temp->creat[creatCnt]->normal_low_creat))
   temp->creat[creatCnt]->normal_low_creat = ce.normal_low
  endif
 endif
  endif
with nocounter
;creat ends
 
;wb_creat start
select into "nl:"
from clinical_event ce
                , encntr_alias ea
plan ce where ce.person_id = temp->person_id
                and ce.event_cd = 51645258
                and ce.clinsig_updt_dt_tm >= cnvtdatetime(curdate - 365, 000000)
                and ce.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
                and ce.result_status_cd in (26.00,24.00)        ;Final,Modified
join ea where ea.encntr_id = ce.encntr_id
                and ea.encntr_alias_type_cd = 844 ;ENC
                and ea.active_ind = 1
order by ce.person_id,ce.encntr_id desc,ce.clinsig_updt_dt_tm desc
 
head ce.person_id
                wb_creatCnt = 0
head ce.encntr_id
                onceperenc = 0
detail
if (wb_creatCnt < 2 and cnvtreal(ce.result_val) > 0.0)
if (onceperenc = 0)
onceperenc = 1
wb_creatCnt = wb_creatCnt + 1
stat = alterlist(temp->wb_creat,wb_creatCnt)
temp->wb_creat[wb_creatCnt]->wb_result_max_val_creat = ce.result_val
temp->wb_creat[wb_creatCnt]->wb_event_creat_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->wb_creat[wb_creatCnt]->wb_result_min_val_creat = ce.result_val
temp->wb_creat[wb_creatCnt]->wb_event_creat_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->wb_creat[wb_creatCnt]->encntr_id = ce.encntr_id
temp->wb_creat[wb_creatCnt]->wb_normal_high_creat = ce.normal_high
temp->wb_creat[wb_creatCnt]->wb_normal_low_creat = ce.normal_low
temp->wb_creatCnt=wb_creatCnt
else
if (cnvtreal(ce.result_val) > cnvtreal(temp->wb_creat[wb_creatCnt]->wb_result_max_val_creat))
 temp->wb_creat[wb_creatCnt]->wb_result_max_val_creat = ce.result_val
 temp->wb_creat[wb_creatCnt]->wb_event_creat_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 elseif (cnvtreal(ce.result_val) < cnvtreal(temp->wb_creat[wb_creatCnt]->wb_result_min_val_creat))
  temp->wb_creat[wb_creatCnt]->wb_result_min_val_creat = ce.result_val
   temp->wb_creat[wb_creatCnt]->wb_event_creat_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 endif
 if (cnvtreal(ce.normal_high) > cnvtreal(temp->wb_creat[wb_creatCnt]->wb_normal_high_creat))
  temp->wb_creat[wb_creatCnt]->wb_normal_high_creat = ce.normal_high
  endif
  if (cnvtreal(ce.normal_low) < cnvtreal(temp->wb_creat[wb_creatCnt]->wb_normal_low_creat))
   temp->wb_creat[wb_creatCnt]->wb_normal_low_creat = ce.normal_low
  endif
 endif
  endif
with nocounter
;wb_creat ends
 
;pco2 start
select into "nl:"
from clinical_event ce
                , encntr_alias ea
plan ce where ce.person_id = temp->person_id
                and ce.event_cd =48920141
                and ce.clinsig_updt_dt_tm >= cnvtdatetime(curdate - 365, 000000)
                and ce.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
                and ce.result_status_cd in (26.00,24.00)        ;Final,Modified
join ea where ea.encntr_id = ce.encntr_id
                and ea.encntr_alias_type_cd = 844 ;ENC
                and ea.active_ind = 1
order by ce.person_id,ce.encntr_id desc,ce.clinsig_updt_dt_tm desc
 
head ce.person_id
                pco2Cnt = 0
head ce.encntr_id
                onceperenc = 0
detail
if (pco2Cnt < 2 and cnvtreal(ce.result_val) > 0.0)
if (onceperenc = 0)
onceperenc = 1
pco2Cnt = pco2Cnt + 1
stat = alterlist(temp->pco2,pco2Cnt)
temp->pco2[pco2Cnt]->result_max_val_pco2 = ce.result_val
temp->pco2[pco2Cnt]->event_pco2_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->pco2[pco2Cnt]->result_min_val_pco2 = ce.result_val
temp->pco2[pco2Cnt]->event_pco2_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->pco2[pco2Cnt]->encntr_id = ce.encntr_id
temp->pco2[pco2Cnt]->normal_high_pco2 = ce.normal_high
temp->pco2[pco2Cnt]->normal_low_pco2 = ce.normal_low
temp->pco2Cnt=pco2Cnt
else
if (cnvtreal(ce.result_val) > cnvtreal(temp->pco2[pco2Cnt]->result_max_val_pco2))
 temp->pco2[pco2Cnt]->result_max_val_pco2 = ce.result_val
 temp->pco2[pco2Cnt]->event_pco2_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 elseif (cnvtreal(ce.result_val) < cnvtreal(temp->pco2[pco2Cnt]->result_min_val_pco2))
  temp->pco2[pco2Cnt]->result_min_val_pco2 = ce.result_val
   temp->pco2[pco2Cnt]->event_pco2_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 endif
 if (cnvtreal(ce.normal_high) > cnvtreal(temp->pco2[pco2Cnt]->normal_high_pco2))
  temp->pco2[pco2Cnt]->normal_high_pco2 = ce.normal_high
  endif
  if (cnvtreal(ce.normal_low) < cnvtreal(temp->pco2[pco2Cnt]->normal_low_pco2))
   temp->pco2[pco2Cnt]->normal_low_pco2 = ce.normal_low
  endif
 endif
  endif
with nocounter
;pco2 ends
 
;hc starts
select into "nl:"
from clinical_event ce
                , encntr_alias ea
plan ce where ce.person_id = temp->person_id
                and ce.event_cd =366706
                and ce.clinsig_updt_dt_tm >= cnvtdatetime(curdate - 365, 000000)
                and ce.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
                and ce.result_status_cd in (26.00,24.00)        ;Final,Modified
join ea where ea.encntr_id = ce.encntr_id
                and ea.encntr_alias_type_cd = 844 ;ENC
                and ea.active_ind = 1
order by ce.person_id,ce.encntr_id desc,ce.clinsig_updt_dt_tm desc
 
head ce.person_id
                hcCnt = 0
head ce.encntr_id
                onceperenc = 0
detail
if (hcCnt < 2 and cnvtreal(ce.result_val) > 0.0)
if (onceperenc = 0)
onceperenc = 1
hcCnt = hcCnt + 1
stat = alterlist(temp->hc,hcCnt)
temp->hc[hcCnt]->result_max_val_hc = ce.result_val
temp->hc[hcCnt]->event_hc_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->hc[hcCnt]->result_min_val_hc = ce.result_val
temp->hc[hcCnt]->event_hc_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->hc[hcCnt]->encntr_id = ce.encntr_id
temp->hc[hcCnt]->normal_high_hc = ce.normal_high
temp->hc[hcCnt]->normal_low_hc = ce.normal_low
temp->hcCnt=hcCnt
else
if (cnvtreal(ce.result_val) > cnvtreal(temp->hc[hcCnt]->result_max_val_hc))
 temp->hc[hcCnt]->result_max_val_hc = ce.result_val
 temp->hc[hcCnt]->event_hc_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 elseif (cnvtreal(ce.result_val) < cnvtreal(temp->hc[hcCnt]->result_min_val_hc))
  temp->hc[hcCnt]->result_min_val_hc = ce.result_val
   temp->hc[hcCnt]->event_hc_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 endif
 if (cnvtreal(ce.normal_high) > cnvtreal(temp->hc[hcCnt]->normal_high_hc))
  temp->hc[hcCnt]->normal_high_hc = ce.normal_high
  endif
  if (cnvtreal(ce.normal_low) < cnvtreal(temp->hc[hcCnt]->normal_low_hc))
   temp->hc[hcCnt]->normal_low_hc = ce.normal_low
  endif
 endif
  endif
with nocounter
;hc ends
 
;hb starts
select into "nl:"
from clinical_event ce
                , encntr_alias ea
plan ce where ce.person_id = temp->person_id
                and ce.event_cd =366705
                and ce.clinsig_updt_dt_tm >= cnvtdatetime(curdate - 365, 000000)
                and ce.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
                and ce.result_status_cd in (26.00,24.00)        ;Final,Modified
join ea where ea.encntr_id = ce.encntr_id
                and ea.encntr_alias_type_cd = 844 ;ENC
                and ea.active_ind = 1
order by ce.person_id,ce.encntr_id desc,ce.clinsig_updt_dt_tm desc
 
head ce.person_id
                hbCnt = 0
head ce.encntr_id
                onceperenc = 0
detail
if (hbCnt < 2 and cnvtreal(ce.result_val) > 0.0)
if (onceperenc = 0)
onceperenc = 1
hbCnt = hbCnt + 1
stat = alterlist(temp->hb,hbCnt)
temp->hb[hbCnt]->result_max_val_hb = ce.result_val
temp->hb[hbCnt]->event_hb_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->hb[hbCnt]->result_min_val_hb = ce.result_val
temp->hb[hbCnt]->event_hb_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->hb[hbCnt]->encntr_id = ce.encntr_id
temp->hb[hbCnt]->normal_high_hb = ce.normal_high
temp->hb[hbCnt]->normal_low_hb = ce.normal_low
temp->hbCnt=hbCnt
else
if (cnvtreal(ce.result_val) > cnvtreal(temp->hb[hbCnt]->result_max_val_hb))
 temp->hb[hbCnt]->result_max_val_hb = ce.result_val
 temp->hb[hbCnt]->event_hb_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 elseif (cnvtreal(ce.result_val) < cnvtreal(temp->hb[hbCnt]->result_min_val_hb))
  temp->hb[hbCnt]->result_min_val_hb = ce.result_val
   temp->hb[hbCnt]->event_hb_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 endif
 if (cnvtreal(ce.normal_high) > cnvtreal(temp->hb[hbCnt]->normal_high_hb))
  temp->hb[hbCnt]->normal_high_hb = ce.normal_high
  endif
  if (cnvtreal(ce.normal_low) < cnvtreal(temp->hb[hbCnt]->normal_low_hb))
   temp->hb[hbCnt]->normal_low_hb = ce.normal_low
  endif
 endif
  endif
with nocounter
;hb ends
 
;etco2 starts
select into "nl:"
from clinical_event ce
                , encntr_alias ea
plan ce where ce.person_id = temp->person_id
                and ce.event_cd =160586074
                and ce.clinsig_updt_dt_tm >= cnvtdatetime(curdate - 365, 000000)
                and ce.valid_until_dt_tm >= cnvtdatetime(curdate,curtime3)
                and ce.result_status_cd in (26.00,24.00)        ;Final,Modified
join ea where ea.encntr_id = ce.encntr_id
                and ea.encntr_alias_type_cd = 844 ;ENC
                and ea.active_ind = 1
order by ce.person_id,ce.encntr_id desc,ce.clinsig_updt_dt_tm desc
 
head ce.person_id
                etco2Cnt = 0
head ce.encntr_id
                onceperenc = 0
detail
if (etco2Cnt < 2 and cnvtreal(ce.result_val) > 0.0)
if (onceperenc = 0)
onceperenc = 1
etco2Cnt = etco2Cnt + 1
stat = alterlist(temp->etco2,etco2Cnt)
temp->etco2[etco2Cnt]->result_max_val_etco2 = ce.result_val
temp->etco2[etco2Cnt]->event_etco2_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->etco2[etco2Cnt]->result_min_val_etco2 = ce.result_val
temp->etco2[etco2Cnt]->event_etco2_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
temp->etco2[etco2Cnt]->encntr_id = ce.encntr_id
temp->etco2[etco2Cnt]->normal_high_etco2 = ce.normal_high
temp->etco2[etco2Cnt]->normal_low_etco2 = ce.normal_low
temp->etco2Cnt=etco2Cnt
else
if (cnvtreal(ce.result_val) > cnvtreal(temp->etco2[etco2Cnt]->result_max_val_etco2))
 temp->etco2[etco2Cnt]->result_max_val_etco2 = ce.result_val
 temp->etco2[etco2Cnt]->event_etco2_max_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 elseif (cnvtreal(ce.result_val) < cnvtreal(temp->etco2[etco2Cnt]->result_min_val_etco2))
  temp->etco2[etco2Cnt]->result_min_val_etco2 = ce.result_val
   temp->etco2[etco2Cnt]->event_etco2_min_date = (format(ce.clinsig_updt_dt_tm,"yyyy-mm-dd_hh:mm:ss"))
 endif
 if (cnvtreal(ce.normal_high) > cnvtreal(temp->etco2[etco2Cnt]->normal_high_etco2))
  temp->etco2[etco2Cnt]->normal_high_etco2 = ce.normal_high
  endif
  if (cnvtreal(ce.normal_low) < cnvtreal(temp->etco2[etco2Cnt]->normal_low_etco2))
   temp->etco2[etco2Cnt]->normal_low_etco2 = ce.normal_low
  endif
 endif
  endif
with nocounter
;etco2 ends
 
 ;code modification by kc ends
 
 
 
;//BLOB
/*
SELECT
EVENT_ID = C.EVENT_ID
, BLOB_EVENT_ID = CE.EVENT_ID
, BLOB_CONTENT = CE.BLOB_CONTENTS
, C_CONTRIBUTOR_SYSTEM_DISP = UAR_GET_CODE_DISPLAY(C.CONTRIBUTOR_SYSTEM_CD)
 
FROM
CE_BLOB CE
, CLINICAL_EVENT C
 
PLAN C
 
JOIN CE
where CE.EVENT_ID = C.event_id
 and  C.CONTRIBUTOR_SYSTEM_CD = 309703
 and  C.ENCNTR_ID = $encntrid
detail
;temp->rad_blob = UAR_OCF_UNCOMPRESS(CE.BLOB_CONTENTS,textlen(CE.blob_contents),BLOBOUT,size(blobout),32768)
 temp->rad_blob= ce.blob_contents
WITH MAXREC = 100
*/
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
  1 document = gvc
 
)
 
; Set parameters for displaying the file
set putRequest->source_dir = $outdev
set putRequest->IsBlob = "1"
set putRequest->document = JSON->data
set putRequest->document_size = size(putRequest->document)
 
;  Display the file.  This allows XmlCclRequest to receive the output
execute eks_put_source with replace(Request,putRequest),replace(reply,putReply)
 
end
go
 