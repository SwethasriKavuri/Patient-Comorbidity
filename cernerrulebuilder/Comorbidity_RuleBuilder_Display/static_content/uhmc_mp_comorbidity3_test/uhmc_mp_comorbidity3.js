// uhmc_mp_comorbidity3.js
// Neil Mendoza

//alert("test1");

/* **** rules json object begin **** */

//var ruleJSON = [{"Acid base disorder":[{"Metabolic Acidosis":"minbicarbonate < 18.0"},{"Metabolic Alkalosis":"maxbicarbonate > 30.0"}]},{"UTI":[{"Catheter Associated":" ( maxUrWBC !=-1  && maxUrWBC > 5  )  &&  (  (  ( urnNitrite !=-1  &&  ( urnNitrite == 'POSITIVE'  || urnNitrite == 'LARGE'  || urnNitrite == 'MOD'  || urnNitrite == 'SMALL'  || urnNitrite == 'TRACE'  )  )  )  ||  (  ( urnLeucEster !=-1  &&  ( urnLeucEster == 'POSITIVE'  || urnLeucEster == 'LARGE'  || urnLeucEster == 'MOD'  || urnLeucEster == 'SMALL'  || urnLeucEster == 'TRACE'  )  )  )  ) "}]}];
var ruleJSON = [{"Electrolyte abnormality":[{"Hypokalemia" : "minpotassiumResult < potassiumLow"},{"Hyperkalemia" : "maxpotassiumResult > potassiumHigh"},{"Hyponatremia" : "sodiumLow > minsodiumResult && sodiumLow > -1 && minsodiumResult > -1"},{"Hypernatremia" : "sodiumHigh < maxsodiumResult"},{"Hypocalcemia" : "calciumLow > mincalciumResult && calciumLow > -1 && mincalciumResult > -1"},{"Hypercalcemia" : "calciumHigh < maxcalciumResult"},{"Hypophosphatemia" : "phosphorusLow > minphosphorusResult"},{"Hyperphosphatemia" : "phosphorusHigh < maxphosphorusResult && phosphorusHigh > -1 && maxphosphorusResult  > -1"},{"Hypomagnesemia" : "magnesiumLow > minmagnesiumResult"},{"Hypermagnesemia" : "magnesiumHigh < maxmagnesiumResult"}]},{"SIRS" : "maxhRate > 90  ||2 maxrRate > 20  ||2 maxband > 10  ||2  ( mintemp < 36  || maxtemp > 38.3  )  ||2  ( minwbc < 4  || maxwbc > 12  ) "},{"Hypoglycemia" : [{"Hypoglycemia" : "minglucResult >  0 && minglucResult < glucLow"},{"Diabetes Type 1 with Hyperglycemia" : "minglucResult >  0 && minglucResult < glucLow"},{"Diabetes Type 2 with Hyperglycemia" : "minglucResult >  0 && minglucResult < glucLow"}]},{"Elevated Blood Glucose" : [{"Hyperglycemia" : "maxglucResult > 140"},{"Diabetes Type 1 with Hyperglycemia" : "maxglucResult > 140"},{"Diabetes Type 2 with Hyperglycemia" : "maxglucResult > 140"},{"Diabetes with Nephropathy" : "maxglucResult > 140 && maxcreatResult > creatHigh"}]},{"Kidney Injury" : [{"Acute":" ( maxcreatResult > creatHigh && maxcreatprevResult <= creatHigh && maxcreatprevResult > -1 && creatHigh > -1 ) || ( maxcreatResult >= 1.5 * maxcreatprevResult ) "}, {"Chronic": "maxcreatResult > creatHigh && maxcreatprevResult > creatHigh"}, {"Acute on Chronic" : "maxcreatResult > creatHigh && maxcreatprevResult > creatHigh && maxcreatResult > 1.5 * maxcreatprevResult"}, {"Not otherwise specified" : "maxcreatResult > creatHigh && maxcreatprevResult ==-1"}]},{"Granulocytopenia" : "minneutrophil < neutrophilLow && minneutrophil > -1 && neutrophilLow > -1"},{"Lactic acidosis" : "maxLacticAcid > 2"},{"Pancytopenia": "panwbc < panwbLow && panrbc < panwbcLow && panplt < panpltLow"},{"Respiratory failure":[{"Acute": " ( minpo2 > -1 && minpo2 <= 60 ) || ( minoximetry > -1 && minoximetry <= 90 ) "},{"Chronic":"( maxpco2 > 45 || maxEtco2 > 45 ) && ( maxprevpco2 > 45 || maxprevEtco2 > 45 ) "}]},{"Hypertension": [{"Hypertension":"maxsysBP > 140 || maxdiasBP > 90"},{"Elevated Blood Pressure":"maxsysBP > 0"}]}, {"Morbid Obesity":"morbidobesitybmi > 40"}, {"Obesity":"obesitybmi > 30 && obesitybmi < 40"}, {"HyperCholesterolemia":"maxcholesterolResult > 200"}, {"Hypoxia" : "minoximetry < 90 && minoximetry > -1"}, {"Acid base disorder":[{"Metabolic Acidosis":"minbicarbonate > -1 && minbicarbonate < 18.0"},{"Metabolic Alkalosis":"maxbicarbonate > -1 && maxbicarbonate > 30.0"}]},{"Malnutrition":[{"Underweight":"malnutritionbmi > -1 && malnutritionbmi >= 18 && malnutritionbmi < 20"},{"Mild":"malnutritionbmi > -1 && malnutritionbmi >= 17 && malnutritionbmi < 18"},{"Moderate": "malnutritionbmi > -1 && malnutritionbmi >= 16 && malnutritionbmi < 17"}, {"Severe":"malnutritionbmi > -1 && malnutritionbmi < 16"}]},{"Hypotension":"minsysBP > -1 && minsysBP < 90"}, {"Shock": [{"Cardiogenic Shock" : "minsysBP > -1 && minsysBP < 90 &&  maxct > -1 && maxct > ctHigh && ctHigh > -1"}, {"Hypovolemic":"minsysBP > -1 && minsysBP < 90"}, {"Not otherwise specified" : "minsysBP > -1 && minsysBP < 90"}]},{"UTI":[{"Catheter Associated":" ( maxUrWBC !=-1  && maxUrWBC > 5  )  &&  (  (  ( urnNitrite !=-1  &&  ( urnNitrite == 'POSITIVE'  || urnNitrite == 'LARGE'  || urnNitrite == 'MOD'  || urnNitrite == 'SMALL'  || urnNitrite == 'TRACE'  )  )  )  ||  (  ( urnLeucEster !=-1  &&  ( urnLeucEster == 'POSITIVE'  || urnLeucEster == 'LARGE'  || urnLeucEster == 'MOD'  || urnLeucEster == 'SMALL'  || urnLeucEster == 'TRACE'  )  )  )  ) "}]}];
var labValuesDictionary = [{"id":"minhb","value_name":"Minimum Hemoglobin","rule_name":"Minimum Hemoglobin","units":""},{"id":"minhc","value_name":"Minimum Hematocrit","rule_name":"Minimum Hematocrit","units":""},{"id":"minhb_prev","value_name":"Previous Minimum Hemoglobin","rule_name":"Previous Minimum Hemoglobin","units":""},{"id":"minhc_prev","value_name":"Previous Minimum Hematocrit","rule_name":"Previous Minimum Hematocrit","units":""},{"id":"hbLow","value_name":"Normal Low Hemoglobin standard","rule_name":"Normal Low Hemoglobin standard","units":""},{"id":"hcLow","value_name":"Normal Low Hematocrit standard","rule_name":"Normal Low Hematocrit standard","units":""},{"id":"minbicarbonate","value_name":"Minimum Serum Bicarbonate","rule_name":"Minimum Serum Bicarbonate","units":"mEq/l"},{"id":"maxbicarbonate","value_name":"Maximum Serum Bicarbonate","rule_name":"Maximum Serum Bicarbonate","units":"mEq/l"},{"id":"bicarbonateLow","value_name":"Normal Low Serum Bicarbonate Standard","rule_name":"Normal Low Serum Bicarbonate Standard","units":""},{"id":"bicarbonateHigh","value_name":"Normal High Serum Bicarbonate Standard","rule_name":"Normal High Serum Bicarbonate Standard","units":""},{"id":"minpotassiumResult","value_name":"Minimum Potassium","rule_name":"Minimum Potassium","units":""},{"id":"potassiumLow","value_name":"Normal Low Potassium Standard","rule_name":"Normal Low Potassium Standard","units":""},{"id":"maxpotassiumResult","value_name":"Maximum Potassium","rule_name":"Maximum Potassium","units":""},{"id":"potassiumHigh","value_name":"Normal High Potassium Standard","rule_name":"Normal High Potassium Standard","units":""},{"id":"minsodiumResult","value_name":"Minimum Sodium","rule_name":"Minimum Sodium","units":""},{"id":"sodiumLow","value_name":"Normal Low Sodium Standard","rule_name":"Normal Low Sodium Standard","units":""},{"id":"maxsodiumResult","value_name":"Maximum Sodium","rule_name":"Maximum Sodium","units":""},{"id":"sodiumHigh","value_name":"Normal High Sodium Standard","rule_name":"Normal High Sodium Standard","units":""},{"id":"mincalciumResult","value_name":"Minimum Calcium","rule_name":"Minimum Calcium","units":""},{"id":"calciumLow","value_name":"Normal Low Calcium Standard","rule_name":"Normal Low Calcium Standard","units":""},{"id":"maxcalciumResult","value_name":"Maximum Calcium","rule_name":"Maximum Calcium","units":""},{"id":"calciumHigh","value_name":"Normal High Calcium Standard","rule_name":"Normal High Calcium Standard","units":""},{"id":"minphosphorusResult","value_name":"Minimum Phosphorus","rule_name":"Minimum Phosphorus","units":""},{"id":"phosphorusLow","value_name":"Normal Low Phosphorus Standard","rule_name":"Normal Low Phosphorus Standard","units":""},{"id":"maxphosphorusResult","value_name":"Maximum Phosphorus","rule_name":"Maximum Phosphorus","units":""},{"id":"phosphorusHigh","value_name":"Normal High Phosphorus Standard","rule_name":"Normal High Phosphorus Standard","units":""},{"id":"minmagnesium","value_name":"Minimum Magnesium","rule_name":"Minimum Magnesium","units":""},{"id":"minmagnesiumResult","value_name":"Minimum Magnesium","rule_name":"Minimum Magnesium","units":""},{"id":"maxmagnesiumResult","value_name":"Maximum Magnesium","rule_name":"Maximum Magnesium","units":""},{"id":"magnesiumHigh","value_name":"Normal High Magnesium Standard","rule_name":"Normal High Magnesium Standard","units":""},{"id":"magnesiumLow","value_name":"Normal Low Magnesium Standard","rule_name":"Normal Low Magnesium Standard","units":""},{"id":"minglucResult","value_name":"Minimum Glucose","rule_name":"Minimum Glucose","units":""},{"id":"glucLow","value_name":"Normal Low Glucose Standard","rule_name":"Normal Low Glucose Standard","units":""},{"id":"maxglucResult","value_name":"Maximum Glucose","rule_name":"Maximum Glucose","units":""},{"id":"glucHigh","value_name":"Normal High Glucose Standard","rule_name":"Normal High Glucose Standard","units":""},{"id":"maxneutrophil","value_name":"Maximum Neutrophil","rule_name":"Maximum Neutrophil","units":""},{"id":"neutrophilLow","value_name":"Normal Low Neutrophil Standard","rule_name":"Normal Low Neutrophil Standard","units":""},{"id":"minneutrophil","value_name":"Minimum Neutrophil","rule_name":"Minimum Neutrophil","units":""},{"id":"neutrophilHigh","value_name":"Normal High Neutrophil Standard","rule_name":"Normal High Neutrophil Standard","units":""},{"id":"uriniHigh","value_name":"Normal High Nitrite Standard","rule_name":"Normal High Nitrite Standard","units":""},{"id":"uriniLow","value_name":"Normal Low Nitrite Standard","rule_name":"Normal Low Nitrite Standard","units":""},{"id":"maxurini","value_name":"Maximum Nitrite","rule_name":"Maximum Nitrite","units":""},{"id":"minurini","value_name":"Minimum Nitrite","rule_name":"Minimum Nitrite","units":""},{"id":"urinestHigh","value_name":"Normal High Leukocyte Standard","rule_name":"Normal High Leukocyte Standard","units":""},{"id":"urinestLow","value_name":"Normal Low Leukocyte Standard","rule_name":"Normal Low Leukocyte Standard","units":""},{"id":"maxurinest","value_name":"Maximum Leukocyte","rule_name":"Maximum Leukocyte","units":""},{"id":"minurinest","value_name":"Minimum Leukocyte","rule_name":"Minimum Leukocyte","units":""},{"id":"mincholesterolResult","value_name":"Minimum Cholesterol","rule_name":"Minimum Cholesterol","units":""},{"id":"cholesterolHigh","value_name":"Normal High Cholesterol Standard","rule_name":"Normal High Cholesterol Standard","units":""},{"id":"cholesterolLow","value_name":"Normal Low Cholesterol Standard","rule_name":"Normal Low Cholesterol Standard","units":""},{"id":"maxcholesterolResult","value_name":"Maximum Cholesterol","rule_name":"Maximum Cholesterol","units":""},{"id":"sysBPHigh","value_name":"Normal Systolic Blood Pressure Standard","rule_name":"Normal Systolic Blood Pressure Standard","units":""},{"id":"sysBPLow","value_name":"Normal Systolic Blood Pressure Standard","rule_name":"Normal Systolic Blood Pressure Standard","units":""},{"id":"minsysBP","value_name":"Minimum Systolic Blood Pressure","rule_name":"Minimum Systolic Blood Pressure","units":""},{"id":"maxsysBP","value_name":"Maximum Systolic Blood Pressure","rule_name":"Maximum Systolic Blood Pressure","units":""},{"id":"lastsysBP","value_name":"Last Systolic Blood Pressure","rule_name":"Last Systolic Blood Pressure","units":""},{"id":"diasBPHigh","value_name":"Normal Diastolic Blood Pressure Standard","rule_name":"Normal Diastolic Blood Pressure Standard","units":""},{"id":"diasBPLow","value_name":"Normal Diastolic Blood Pressure Standard","rule_name":"Normal Diastolic Blood Pressure Standard","units":""},{"id":"mindiasBP","value_name":"Minimum Diastolic Blood Pressure","rule_name":"Minimum Diastolic Blood Pressure","units":""},{"id":"maxdiasBP","value_name":"Maximum Diastolic Blood Pressure","rule_name":"Maximum Diastolic Blood Pressure","units":""},{"id":"lastdiasBP","value_name":"Last Diastolic Blood Pressure","rule_name":"Last Diastolic Blood Pressure","units":""},{"id":"minPulseOxi","value_name":"Minimum Pulse Oximetry","rule_name":"Minimum Pulse Oximetry","units":""},{"id":"oximetryHigh","value_name":"Normal High Oximetry Standard","rule_name":"Normal High Oximetry Standard","units":""},{"id":"oximetryLow","value_name":"Normal Low Oximetry Standard","rule_name":"Normal Low Oximetry Standard","units":""},{"id":"maxoximetry","value_name":"Maximum Oximetry","rule_name":"Maximum Oximetry","units":""},{"id":"minoximetry","value_name":"Minimum Oximetry","rule_name":"Minimum Oximetry","units":""},{"id":"creatHigh","value_name":"Normal High Creatinine Standard","rule_name":"Normal High Creatinine Standard","units":""},{"id":"creatLow","value_name":"Normal Low Creatinine Standard","rule_name":"Normal Low Creatinine Standard","units":""},{"id":"creat","value_name":"Maximum Creatinine","rule_name":"Maximum Creatinine","units":""},{"id":"maxcreatResult","value_name":"Maximum Creatinine","rule_name":"Maximum Creatinine","units":""},{"id":"mincreatResult","value_name":"Minimum Creatinine","rule_name":"Minimum Creatinine","units":""},{"id":"creatprevHigh","value_name":"Previous Normal High Creatinine Standard","rule_name":"Previous Normal High Creatinine Standard","units":""},{"id":"creatprevLow","value_name":"Previous Normal Low Creatinine Standard","rule_name":"Previous Normal Low Creatinine Standard","units":""},{"id":"prevCreat","value_name":"Previous Maximum Creatinine","rule_name":"Previous Maximum Creatinine","units":""},{"id":"maxcreatprevResult","value_name":"Previous Maximum Creatinine","rule_name":"Previous Maximum Creatinine","units":""},{"id":"mincreatprevResult","value_name":"Previous Minimum Creatinine","rule_name":"Previous Minimum Creatinine","units":""},{"id":"pco2High","value_name":"Normal High PCO2 Standard","rule_name":"Normal High PCO2 Standard","units":""},{"id":"pco2Low","value_name":"Normal Low PCO2 Standard","rule_name":"Normal Low PCO2 Standard","units":""},{"id":"maxpco2","value_name":"Maximum PCO2","rule_name":"Maximum PCO2","units":""},{"id":"minpco2","value_name":"Minimum PCO2","rule_name":"Minimum PCO2","units":""},{"id":"prevpco2High","value_name":"Previous Normal High PCO2 Standard","rule_name":"Previous Normal High PCO2 Standard","units":""},{"id":"prevpco2Low","value_name":"Previous Normal Low PCO2 Standard","rule_name":"Previous Normal Low PCO2 Standard","units":""},{"id":"maxprevpco2","value_name":"Previous Maximum PCO2","rule_name":"Previous Maximum PCO2","units":""},{"id":"minprevpco2","value_name":"Previous Minimum PCO2","rule_name":"Previous Minimum PCO2","units":""},{"id":"Etco2High","value_name":"Normal High ETCO2 Standard","rule_name":"Normal High ETCO2 Standard","units":""},{"id":"Etco2Low","value_name":"Normal Low ETCO2 Standard","rule_name":"Normal Low ETCO2 Standard","units":""},{"id":"maxEtco2","value_name":"Maximum ETCO2","rule_name":"Maximum ETCO2","units":""},{"id":"minEtco2","value_name":"Minimum ETCO2","rule_name":"Minimum ETCO2","units":""},{"id":"prevEtco2High","value_name":"Previous Normal High ETCO2 Standard","rule_name":"Previous Normal High ETCO2 Standard","units":""},{"id":"prevEtco2Low","value_name":"Previous Normal Low ETCO2 Standard","rule_name":"Previous Normal Low ETCO2 Standard","units":""},{"id":"maxprevEtco2","value_name":"Previous Maximum ETCO2","rule_name":"Previous Maximum ETCO2","units":""},{"id":"minprevEtco2","value_name":"Previous Minimum ETCO2","rule_name":"Previous Minimum ETCO2","units":""},{"id":"maxgfrResult","value_name":"Maximum GFR","rule_name":"Maximum GFR","units":""},{"id":"mingfrResult","value_name":"Minimum GFR","rule_name":"Minimum GFR","units":""},{"id":"maxLacticAcid","value_name":"Maximum Lactic Acid","rule_name":"Maximum Lactic Acid","units":"hiLacticAcid"},{"id":"LacticAcidHigh","value_name":"Normal High Lactic Acid Standard","rule_name":"Normal High Lactic Acid Standard","units":""},{"id":"minLacticAcid","value_name":"Minimum Lactic Acid","rule_name":"Minimum Lactic Acid","units":"hiLacticAcid"},{"id":"LacticAcidLow","value_name":"Normal Low Lactic Acid Standard","rule_name":"Normal Low Lactic Acid Standard","units":""},{"id":"bmi","value_name":"Body Mass Index","rule_name":"Body Mass Index","units":""},{"id":"malnutritionbmi","value_name":"Body Mass Index","rule_name":"Body Mass Index","units":""},{"id":"obesitybmi","value_name":"Body Mass Index","rule_name":"Body Mass Index","units":""},{"id":"morbidobesitybmi","value_name":"Body Mass Index","rule_name":"Body Mass Index","units":""},{"id":"maxheight","value_name":"Height","rule_name":"Height","units":"cm"},{"id":"minheight","value_name":"Height","rule_name":"Height","units":"cm"},{"id":"maxweight","value_name":"Weight","rule_name":"Weight","units":"kg"},{"id":"minweight","value_name":"Weight","rule_name":"Weight","units":"kg"},{"id":"minwbc","value_name":"Low WBC count","rule_name":"Low WBC count","units":""},{"id":"maxwbc","value_name":"High WBC count","rule_name":"High WBC count","units":""},{"id":"wbcLow","value_name":"Normal low WBC count","rule_name":"Normal low WBC count","units":""},{"id":"wbcHigh","value_name":"Normal high WBC count","rule_name":"Normal high WBC count","units":""},{"id":"minRBC","value_name":"Minimum RBC count","rule_name":"Minimum RBC count","units":""},{"id":"lowRBC","value_name":"Normal low RBC count","rule_name":"Normal low RBC count","units":""},{"id":"minPLT","value_name":"Minimum PLT count","rule_name":"Minimum PLT count","units":""},{"id":"maxplt","value_name":"Maximum PLT count","rule_name":"Maximum PLT count","units":""},{"id":"pltLow","value_name":"Normal Low PLT count Standard","rule_name":"Normal Low PLT count Standard","units":""},{"id":"pltHigh","value_name":"Normal High PLT count Standard","rule_name":"Normal High PLT count Standard","units":""},{"id":"panwbc","value_name":"Minimum Pan WBC","rule_name":"Minimum Pan WBC","units":""},{"id":"panrbc","value_name":"Minimum Pan RBC","rule_name":"Minimum Pan RBC","units":""},{"id":"panplt","value_name":"Minimum Pan PLT","rule_name":"Minimum Pan PLT","units":""},{"id":"panwbcLow","value_name":"Normal Low Pan WBC Standard","rule_name":"Normal Low Pan WBC Standard","units":""},{"id":"panrbcLow","value_name":"Normal Low Pan RBC Standard","rule_name":"Normal Low Pan RBC Standard","units":""},{"id":"panpltLow","value_name":"Normal Low Pan PLT Standard","rule_name":"Normal Low Pan PLT Standard","units":""},{"id":"po2High","value_name":"Normal High PO2 Standard","rule_name":"Normal High PO2 Standard","units":""},{"id":"po2Low","value_name":"Normal Low PCO2 Standard","rule_name":"Normal Low PCO2 Standard","units":""},{"id":"minpo2","value_name":"Minimum PO2","rule_name":"Minimum PO2","units":""},{"id":"maxpo2","value_name":"Maximum PCO2","rule_name":"Maximum PCO2","units":""},{"id":"ctHigh","value_name":"Normal High Cardiac Troponin Standard","rule_name":"Normal High Cardiac Troponin Standard","units":""},{"id":"ctLow","value_name":"Normal Low Cardiac Troponin Standard","rule_name":"Normal Low Cardiac Troponin Standard","units":""},{"id":"minct","value_name":"Minimum Cardiac Troponin","rule_name":"Minimum Cardiac Troponin","units":""},{"id":"maxct","value_name":"Maximum Cardiac Troponin","rule_name":"Maximum Cardiac Troponin","units":""},{"id":"maxETCO2","value_name":"Maximum ETCO2","rule_name":"Maximum ETCO2","units":""},{"id":"prevMaxETCO2","value_name":"Previous Maximum ETCO2","rule_name":"Previous Maximum ETCO2","units":""},{"id":"maxCardiacTroponin","value_name":"maximum Cardiac Troponin","rule_name":"maximum Cardiac Troponin","units":""},{"id":"hiCardiacTroponin","value_name":"Normal High Cardiac Troponin Standard","rule_name":"Normal High Cardiac Troponin Standard","units":""},{"id":"hHigh","value_name":"Normal High Heart Rate Standard","rule_name":"Normal High Heart Rate Standard","units":""},{"id":"hLow","value_name":"Normal Low Heart Rate Standard","rule_name":"Normal Low Heart Rate Standard","units":""},{"id":"maxhRate","value_name":"Maximum Heart Rate","rule_name":"Maximum Heart Rate","units":""},{"id":"minhRate","value_name":"Minimum Heart Rate","rule_name":"Minimum Heart Rate","units":""},{"id":"rHigh","value_name":"Normal High R Rate Standard","rule_name":"Normal High R Rate Standard","units":""},{"id":"rLow","value_name":"Normal Low R Rate Standard","rule_name":"Normal Low R Rate Standard","units":""},{"id":"maxrRate","value_name":"Maximum R Rate","rule_name":"Maximum R Rate","units":""},{"id":"minrRate","value_name":"Minimum R Rate","rule_name":"Minimum R Rate","units":""},{"id":"maxRespRate","value_name":"Maximum Respiratory Rate","rule_name":"Maximum Respiratory Rate","units":""},{"id":"maxBands","value_name":"Maximum Bands","rule_name":"Maximum Bands","units":"%"},{"id":"minband","value_name":"Minimum Band","rule_name":"Minimum Band","units":"%"},{"id":"maxband","value_name":"Maximum Band","rule_name":"Maximum Band","units":"%"},{"id":"bandLow","value_name":"Normal Low Band Standard","rule_name":"Normal Low Band Standard","units":"%"},{"id":"bandHigh","value_name":"Normal High Band Standard","rule_name":"Normal High Band Standard","units":"%"},{"id":"tempLow","value_name":"Normal Low Temperature Standard","rule_name":"Normal Low Temperature Standard","units":""},{"id":"tempHigh","value_name":"Normal High Temperature Standard","rule_name":"Normal High Temperature Standard","units":""},{"id":"mintemp","value_name":"Minimum Temperature","rule_name":"Minimum Temperature","units":""},{"id":"maxtemp","value_name":"Maximum Temperature","rule_name":"Maximum Temperature","units":""},{"id":"bunLow","value_name":"Normal Low bun Standard","rule_name":"Normal Low bun Standard","units":""},{"id":"bunHigh","value_name":"Normal High bun Standard","rule_name":"Normal High bun Standard","units":""},{"id":"bunMinResult","value_name":"Minimum bun","rule_name":"Minimum bun","units":""},{"id":"bunMaxResult","value_name":"Maximum bun","rule_name":"Maximum bun","units":""},{"id":"meanArtPressure","value_name":"Mean Arterial Pressure","rule_name":"Mean Arterial Pressure","units":""},{"id":"minbilirubin","value_name":"Minimum Bilirubin","rule_name":"Minimum Bilirubin","units":""},{"id":"maxbilirubin","value_name":"Maximum Bilirubin","rule_name":"Maximum Bilirubin","units":""},{"id":"bilirubinLow","value_name":"Normal Low Bilirubin Standard","rule_name":"Normal Low Bilirubin Standard","units":""},{"id":"bilirubinHigh","value_name":"Normal High Bilirubin Standard","rule_name":"Normal High Bilirubin Standard","units":""},{"id":"maxINR","value_name":"Maximum INR","rule_name":"Maximum INR","units":""},{"id":"minptinr","value_name":"Minimum Pt INR","rule_name":"Minimum Pt INR","units":""},{"id":"maxptinr","value_name":"Maximum Pt INR","rule_name":"Maximum Pt INR","units":""},{"id":"ptinrLow","value_name":"Normal Low Pt INR Standard","rule_name":"Normal Low Pt INR Standard","units":""},{"id":"ptinrHigh","value_name":"Normal High Pt INR Standard","rule_name":"Normal High Pt INR Standard","units":""},{"id":"maxPTT","value_name":"Maximum PTT","rule_name":"Maximum PTT","units":""},{"id":"minaptt","value_name":"Minimum APTT","rule_name":"Minimum APTT","units":""},{"id":"maxaptt","value_name":"Maximum PTT","rule_name":"Maximum PTT","units":""},{"id":"apttLow","value_name":"Normal Low APTT Standard","rule_name":"Normal Low APTT Standard","units":""},{"id":"apttHigh","value_name":"Normal High APTT Standard","rule_name":"Normal High APTT Standard","units":""},{"id":"minmap","value_name":"Minimum Map","rule_name":"Minimum Map","units":""},{"id":"maxmap","value_name":"Maximum Map","rule_name":"Maximum Map","units":""},{"id":"mapLow","value_name":"Normal Low Map Standard","rule_name":"Normal Low Map Standard","units":""},{"id":"mapHigh","value_name":"Normal High Map Standard","rule_name":"Normal High Map Standard","units":""},{"id":"maxUrWBC","value_name":"Maximum Urinalysis WBC","rule_name":"Maximum Urinalysis WBC","units":""},{"id":"UtiWbcHigh","value_name":"Normal High Uti WBC Standard","rule_name":"Normal High Uti WBC Standard","units":""},{"id":"UtiWbcLow","value_name":"Normal Low Uti WBC Standard","rule_name":"Normal Low Uti WBC Standard","units":""},{"id":"minUtiWbc","value_name":"Minimum Uti WBC","rule_name":"Minimum Uti WBC","units":""},{"id":"maxUtiWbc","value_name":"Maximum Uti WBC","rule_name":"Maximum Uti WBC","units":""},{"id":"urnNitrite","value_name":"Urinalysis Nitrite","rule_name":"Urinalysis Nitrite","units":""},{"id":"urnLeucEster","value_name":"Urinalysis Leukocyte Esterase","rule_name":"Urinalysis Leukocyte Esterase","units":""},{"id":"age","value_name":"Age","rule_name":"Age","units":"years"},{"id":"agem","value_name":"Age","rule_name":"Age","units":"months"},{"id":"agew","value_name":"Age","rule_name":"Age","units":"weeks"},{"id":"aged","value_name":"Age","rule_name":"Age","units":"days"}];

//{"Respiratory failure":[{"Acute": "minpo2 <= 60 || o2sat <=90"},{"Chronic":"( pco2 > 45 || etco2 > 45 ) && ( prevpco2 > 45 || prevetco2 > 45 ) "},{"Acute on Chronic":"( po2 <= 60 || o2sat <=90 ) && ( ( pco2 > 45 || etco2 > 45 ) && ( prevpco2 > 45 || prevetco2 > 45 ) ) "}]}, 

/* **** rules json object end **** */



/** 
 * These are paths available only on Cerner
 * 
var divimg = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\div.png";
var divSingleimg = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\divSingle.png";
var arrowdownimg = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\arrow-down.gif";
var arrowupimg = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\arrow-up.gif";
var button1img = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\button1.jpg";
var menuimg1 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image001.png";
var menuimg2 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image002.png";
var menuimg3 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image003.png";
var menuimg4 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image004.png";
var menuimg5 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image005.png";
var menuimg6 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image006.png";
var menuimg7 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image007.png";
var menuimg8 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image008.png";
var menuimg9 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image009.png";
var menuimg10 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image010.png";
var menuimg11 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image011.png";
var menuimg12 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image012.png";
var menuimg13 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image013.png";
var menuimg14 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image014.png";
var menuimg15 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image015.png";
var menuimg16 = "\\\\unvrnynas\\unvrny\\m159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image016.png";
 *
 */
var divimg = "/img/div.png";
var divSingleimg = "/img/divSingle.png";
var divSingleimg1 = "/img/divSingle1.png";
var divSingleimg2 = "/img/divSingle2.png";
var divSingleimg3 = "/img/divSingle3.png";
var divSingleimg4 = "/img/divSingle4.png";
var arrowdownimg = "/img/arrow-down.gif";
var arrowupimg = "/img/arrow-up.gif";
var button1img = "/img/button1.jpg";
var menu1 = "/img/comorbmenu.png";
var menu2 = "/img/pcsection.png";
var menu3 = "/img/ccsection.png";
var menu4 = "/img/ocsection.png";
var menu5 = "/img/commit2.png";
var menu6 = "/img/submitting.png";
var menu7 = "/img/other.png";
var menu8 = "/img/inserttemplate.png";
var menu9 = "/img/comorbtemplate.png";
var menu10 = "/img/greentext.png";

var minsodiumDate;
var maxsodiumDate;
var sodiumHigh;
var sodiumLow;
var maxsodiumResult;
var minsodiumResult;

var minpotassiumDate;
var maxpotassiumDate;
var potassiumHigh;
var potassiumLow;
var maxpotassiumResult;
var minpotassiumResult;

var maxcalciumResult;
var mincalciumResult;
var calciumLow; 
var calciumHigh;
var maxcalciumDate;
var mincalciumDate;

var maxglucResult;
var minglucResult;
var maxglucDate;
var minglucDate;
var glucLow; 
var glucHigh;

var maxphosphorusResult;
var minphosphorusResult;
var phosphorusLow; 
var phosphorusHigh;
var maxphosphorusDate;
var minphosphorusDate;

var maxmagnesiumResult;
var minmagnesiumResult
var magnesiumLow; 
var magnesiumHigh;
var maxmagnesiumDate;
var minmagnesiumDate;

var maxcholesterolResult;
var mincholesterolResult;
var cholesterolLow; 
var cholesterolHigh;
var maxcholesterolDate;
var mincholesterolDate;

var maxneutrophil;
var minneutrophil;
var maxneutrophilDate;
var minneutrophilDate;
var neutrophilLow;
var neutrophilHigh;

var maxwbc;
var minwbc;
var maxwbcDate;
var minwbcDate;
var wbcLow;
var wbcHigh;

var maxurini;
var minurini;
var maxuriniDate;
var minuriniDate;
var uriniLow;
var uriniHigh;

var maxurinest;
var minurinest;
var maxurinestDate;
var minurinestDate;
var urinestLow;
var urinestHigh;

var maxgfrResult;
var mingfrResult;
var maxgfrDate;
var mingfrDate;

var minweight;
var maxweight;
var maxweightDate;
var minweightDate;

var minheight;
var maxheight;
var maxheightDate;
var minheightDate;

var minsysBP;
var maxsysBP;
var lastsysBP;
var minsysBPDate;
var maxsysBPDate;
var lastsysBPDate;
var sysBPLow;
var sysBPHigh;

var mindiasBP;
var maxdiasBP;
var lastdiasBP;
var mindiasBPDate;
var maxdiasBPDate;
var lastdiasBPDate;
var diasBPLow;
var diasBPHigh;

var maxoximetry;
var minoximetry;
var maxoximetryDate;
var minoximetryDate;
var oximetryLow;
var oximetryHigh;

var maxpo2;
var minpo2;
var maxpo2Date;
var minpo2Date;
var po2Low;
var po2High;

var maxct;
var minct;
var maxctDate;
var minctDate;
var ctLow;
var ctHigh;

var maxUtiWbc;
var minUtiWbc;
var maxUtiWbcDate;
var minUtiWbcDate;
var UtiWbcLow;
var UtiWbcHigh;

var maxtemp;
var mintemp;
var maxtempDate;
var mintempDate;
var tempLow;
var tempHigh;

var maxhRate;
var minhRate;
var maxhDate;
var minhDate;
var hLow;
var hHigh;

var maxrRate;
var minrRate;
var maxrDate;
var minrDate;
var rLow;
var rHigh;

var maxLacticAcid;
var minLacticAcid;
var maxLacticAcidDate;
var minLacticAcidDate;
var LacticAcidLow ;
var LacticAcidHigh;

var bunMinResult; 
var bunMaxResult;
var bunMinDate;
var bunMaxDate;
var bunLow;
var bunHigh;

var creatHigh;
var creatLow;
var creat;
var maxcreatResult;
var mincreatResult;
var maxcreatDate;
var mincreatDate;

var creatprevLow;
var creatprevHigh;
var maxcreatprevDate;
var mincreatprevDate;
var prevCreat;
var maxcreatprevResult;
var mincreatprevResult;

var maxpco2;
var minpco2;
var maxpco2Date;
var minpco2Date;
var pco2Low;
var pco2High;

var maxprevpco2;
var minprevpco2;
var maxprevpco2Date;
var minprevpco2Date;
var prevpco2Low;
var prevpco2High;

var maxEtco2;
var minEtco2;
var maxEtco2Date;
var minEtco2Date;
var Etco2Low;
var Etco2High;

var maxprevEtco2;
var minprevEtco2;
var maxprevEtco2Date;
var minprevEtco2Date;
var prevEtco2Low;
var prevEtco2High;

var hbLow;
var minhb;
var minhbdate;
var minhb_prev;
var minhb_prevdate;
var hcLow;
var minhc;
var minhcdate;
var minhc_prev;
var minhc_prevdate;

var maxptinr;
var minptinr;
var maxptinrDate;
var minptinrDate;
var ptinrLow;
var ptinrHigh;

var maxaptt;
var minaptt;
var maxapttDate;
var minapttDate;
var apttLow;
var apttHigh;

var maxmap;
var minmap;
var maxmapDate;
var minmapDate;
var mapLow;
var mapHigh;

var maxband;
var minband;
var maxbandDate;
var minbandDate;
var bandLow;
var bandHigh;

var maxbicarbonate;
var minbicarbonate;
var maxbicarbonateDate;
var minbicarbonateDate;
var bicarbonateLow;
var bicarbonateHigh;

var maxbilirubin;
var minbilirubin;
var maxbilirubinDate;
var minbilirubinDate;
var bilirubinLow;
var bilirubinHigh;

var maxplt;
var minplt;
var maxpltDate;
var minpltDate;
var pltLow;
var pltHigh;

var panwbc;
var panrbc;
var panplt;
var panwbcLow;
var panrbcLow;
var panpltLow;
var panDate;

var tmpw = 0;
var tmph = 0;
var tmpmt = 0;
var tmpml = 0;
var newCC = 0;
var pcArr = [];
var pcRadiologyAndECGMap = {};
var over18 = 0;
var over1 = 0;

/**
 * Builds the webpage, by calling functions which build parts of the page.
 * @param {Object} contents - JSON object
 */
function init(contents){
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log(contents);
$('#submittingDiv').hide();
getData(contents);
buildPCbody(contents);
console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
console.log(pcArr);
buildCCheader();
buildCCbody();
buildOCheader();
buildOCbody();
return;
}

function getData(jsonObj){
	if (jsonObj){
			over18 = jsonObj.TEMP.OVER_18;
			if(over18 == '1')
				over18 = 1;
			over1 = jsonObj.TEMP.OVER_1;

			minsodiumDate = jsonObj.TEMP.SODIUM_MIN_DATE;
			maxsodiumDate = jsonObj.TEMP.SODIUM_MAX_DATE;
			sodiumHigh = jsonObj.TEMP.SODIUM_NORMAL_HIGH;
			sodiumLow = jsonObj.TEMP.SODIUM_NORMAL_LOW;
			maxsodiumResult = jsonObj.TEMP.SODIUM_MAX_VAL;
			minsodiumResult = jsonObj.TEMP.SODIUM_MIN_VAL;

			if (isEmpty(maxsodiumDate)){ maxsodiumDate = "N/A";	}
			if (isEmpty(minsodiumDate)){ minsodiumDate = "N/A"; }

			minpotassiumDate = jsonObj.TEMP.POTASSIUM_MIN_DATE;
			maxpotassiumDate = jsonObj.TEMP.POTASSIUM_MAX_DATE;
			potassiumHigh = jsonObj.TEMP.POTASSIUM_NORMAL_HIGH;
			potassiumLow = jsonObj.TEMP.POTASSIUM_NORMAL_LOW;
			maxpotassiumResult = jsonObj.TEMP.POTASSIUM_MAX_VAL;
			minpotassiumResult = jsonObj.TEMP.POTASSIUM_MIN_VAL;

			if (isEmpty(maxpotassiumDate)){ maxpotassiumDate = "N/A"; }
			if (isEmpty(minpotassiumDate)){ minpotassiumDate = "N/A"; }

			mincalciumDate = jsonObj.TEMP.CALCIUM_MIN_DATE;
			maxcalciumDate = jsonObj.TEMP.CALCIUM_MAX_DATE;
			calciumHigh = jsonObj.TEMP.NORMAL_HIGH_CALCIUM;
			calciumLow = jsonObj.TEMP.NORMAL_LOW_CALCIUM;
			maxcalciumResult = jsonObj.TEMP.RESULT_MAX_VAL_CALCIUM;
			mincalciumResult = jsonObj.TEMP.RESULT_MIN_VAL_CALCIUM;
			
			mincalciumDate = jsonObj.TEMP.CALCIUM_MIN_DATE;
			maxcalciumDate = jsonObj.TEMP.CALCIUM_MAX_DATE;
			calciumHigh = jsonObj.TEMP.CALCIUM_NORMAL_HIGH;
			calciumLow = jsonObj.TEMP.CALCIUM_NORMAL_LOW;
			maxcalciumResult = jsonObj.TEMP.CALCIUM_MAX_VAL;
			mincalciumResult = jsonObj.TEMP.CALCIUM_MIN_VAL;

			if (isEmpty(maxcalciumDate)){ maxcalciumDate = "N/A"; }
			if (isEmpty(mincalciumDate)){ mincalciumDate = "N/A"; }

			minglucDate = jsonObj.TEMP.GLUCOSE_MIN_DATE;
			maxglucDate = jsonObj.TEMP.GLUCOSE_MAX_DATE;
			glucHigh = jsonObj.TEMP.GLUCOSE_NORMAL_HIGH;
			glucLow = jsonObj.TEMP.GLUCOSE_NORMAL_LOW;
			maxglucResult = jsonObj.TEMP.GLUCOSE_MAX_VAL;
			minglucResult = jsonObj.TEMP.GLUCOSE_MIN_VAL;

			if (isEmpty(glucHigh) == true){ glucHigh = "150"; }

			if (isEmpty(maxglucDate)){ maxglucDate = "N/A"; }
			if (isEmpty(minglucDate)){ minglucDate = "N/A"; }

			minphosphorusDate = jsonObj.TEMP.PHOSPHORUS_MIN_DATE;
			maxphosphorusDate = jsonObj.TEMP.PHOSPHORUS_MAX_DATE;
			phosphorusHigh = jsonObj.TEMP.PHOSPHORUS_NORMAL_HIGH;
			phosphorusLow = jsonObj.TEMP.PHOSPHORUS_NORMAL_LOW;
			maxphosphorusResult = jsonObj.TEMP.PHOSPHORUS_MAX_VAL;
			minphosphorusResult = jsonObj.TEMP.PHOSPHORUS_MIN_VAL;

			if (isEmpty(maxphosphorusDate)){ maxphosphorusDate = "N/A"; }
			if (isEmpty(minphosphorusDate)){ minphosphorusDate = "N/A"; }

			minmagnesiumDate = jsonObj.TEMP.MAGNESIUM_MIN_DATE;
			maxmagnesiumDate = jsonObj.TEMP.MAGNESIUM_MAX_DATE;
			magnesiumHigh = jsonObj.TEMP.MAGNESIUM_NORMAL_HIGH;
			magnesiumLow = jsonObj.TEMP.MAGNESIUM_NORMAL_LOW;
			maxmagnesiumResult = jsonObj.TEMP.MAGNESIUM_MAX_VAL;
			minmagnesiumResult = jsonObj.TEMP.MAGNESIUM_MIN_VAL;

			if (isEmpty(maxmagnesiumDate)){ maxmagnesiumDate = "N/A"; }
			if (isEmpty(minmagnesiumDate)){ minmagnesiumDate = "N/A"; }
			
			mincholesterolDate = jsonObj.TEMP.CHOLESTEROL_MIN_DATE;
			maxcholesterolDate = jsonObj.TEMP.CHOLESTEROL_MAX_DATE;
			cholesterolHigh = jsonObj.TEMP.CHOLESTEROL_NORMAL_HIGH;
			cholesterolLow = jsonObj.TEMP.CHOLESTEROL_NORMAL_LOW;
			maxcholesterolResult = jsonObj.TEMP.CHOLESTEROL_MAX_VAL;
			mincholesterolResult = jsonObj.TEMP.CHOLESTEROL_MIN_VAL;

			if(isEmpty(maxcholesterolDate)){ maxcholesterolDate = "N/A"; }
			if(isEmpty(mincholesterolDate)){ mincholesterolDate = "N/A"; }

			minneutrophilDate = jsonObj.TEMP.NEUTROPHIL_MIN_DATE;
			maxneutrophilDate = jsonObj.TEMP.NEUTROPHIL_MAX_DATE;
			neutrophilHigh = jsonObj.TEMP.NEUTROPHIL_NORMAL_HIGH;
			neutrophilLow = jsonObj.TEMP.NEUTROPHIL_NORMAL_LOW;
			maxneutrophil = jsonObj.TEMP.NEUTROPHIL_MAX_VAL;
			minneutrophil = jsonObj.TEMP.NEUTROPHIL_MIN_VAL;

			if (isEmpty(maxneutrophilDate)){ maxneutrophilDate = "N/A"; }
			if (isEmpty(minneutrophilDate)){ minneutrophilDate = "N/A"; }

			if (!(isEmpty(minneutrophil) || isEmpty(maxneutrophil))){
				if (parseDouble(minneutrophil) > parseDouble(maxneutrophil)){
					var temp = minneutrophil;
					minneutrophil = maxneutrophil;
					maxneutrophil = temp;
					}
				}

			minwbcDate = jsonObj.TEMP.WBC_MIN_DATE;
			maxwbcDate = jsonObj.TEMP.WBC_MAX_DATE;
			wbcHigh = jsonObj.TEMP.WBC_NORMAL_HIGH;
			wbcLow = jsonObj.TEMP.WBC_NORMAL_LOW;
			maxwbc = jsonObj.TEMP.WBC_MAX_VAL;
			minwbc = jsonObj.TEMP.WBC_MIN_VAL;

			if (isEmpty(maxwbcDate)){ maxwbcDate = "N/A"; }
			if (isEmpty(minwbcDate)){ minwbcDate = "N/A"; }

			minuriniDate = jsonObj.TEMP.NITRITE_MIN_DATE;
			maxuriniDate = jsonObj.TEMP.NITRITE_MAX_DATE;
			uriniHigh = jsonObj.TEMP.NITRITE_NORMAL_HIGH;
			uriniLow = jsonObj.TEMP.NITRITE_NORMAL_LOW;
			maxurini = jsonObj.TEMP.NITRITE_MAX_VAL;
			minurini = jsonObj.TEMP.NITRITE_MIN_VAL;

			if (isEmpty(maxuriniDate)){ maxuriniDate = "N/A"; }
			if (isEmpty(minuriniDate)){ minuriniDate = "N/A"; }
			
			minurinestDate = jsonObj.TEMP.LEUKOCYTE_MIN_DATE;
			maxurinestDate = jsonObj.TEMP.LEUKOCYTE_MAX_DATE;
			urinestHigh = jsonObj.TEMP.LEUKOCYTE_NORMAL_HIGH;
			urinestLow = jsonObj.TEMP.LEUKOCYTE_NORMAL_LOW;
			maxurinest = jsonObj.TEMP.LEUKOCYTE_MAX_VAL;
			minurinest = jsonObj.TEMP.LEUKOCYTE_MIN_VAL;

			if (isEmpty(maxurinestDate)){ maxurinestDate = "N/A"; }
			if (isEmpty(minurinestDate)){ minurinestDate = "N/A"; }
			
			mingfrDate = jsonObj.TEMP.GFR_MIN_DATE;
			maxgfrDate = jsonObj.TEMP.GFR_MAX_DATE;
			maxgfrResult = jsonObj.TEMP.GFR_MAX_VAL;
			mingfrResult = jsonObj.TEMP.GFR_MIN_VAL;

			if (isEmpty(maxgfrDate)){ maxgfrDate = "N/A"; }
			if (isEmpty(mingfrDate)){ mingfrDate = "N/A"; }

			if (isEmpty(maxgfrResult) != true && maxgfrResult.indexOf(">") > -1){ maxgfrResult = maxgfrResult.substring(1); }
			if (isEmpty(mingfrResult) != true && mingfrResult.indexOf(">") > -1){ mingfrResult = mingfrResult.substring(1); }
			
			minweightDate = jsonObj.TEMP.WEIGHT_MIN_DATE;
			maxweightDate = jsonObj.TEMP.WEIGHT_MAX_DATE;
			maxweight = jsonObj.TEMP.WEIGHT_MAX_VAL;
			minweight = jsonObj.TEMP.WEIGHT_MIN_VAL;

			if (isEmpty(maxweightDate)){ maxweightDate = "N/A"; }
			if (isEmpty(minweightDate)){ minweightDate = "N/A"; }
			
			minheightDate = jsonObj.TEMP.HEIGHT_MIN_DATE;
			maxheightDate = jsonObj.TEMP.HEIGHT_MAX_DATE;
			maxheight = jsonObj.TEMP.RESULT_MAX_VAL_HEIGHT;
			minheight = jsonObj.TEMP.RESULT_MIN_VAL_HEIGHT;

			minheightDate = jsonObj.TEMP.HEIGHT_MIN_DATE;
			maxheightDate = jsonObj.TEMP.HEIGHT_MAX_DATE;
			maxheight = jsonObj.TEMP.HEIGHT_MAX_VAL;
			minheight = jsonObj.TEMP.HEIGHT_MIN_VAL;

			if (isEmpty(maxheightDate)){ maxheightDate = "N/A"; }
			if (isEmpty(minheightDate)){ minheightDate = "N/A"; }
			
			minsysBPDate = jsonObj.TEMP.SBP_MIN_DATE;
			maxsysBPDate = jsonObj.TEMP.SBP_MAX_DATE;
			lastsysBPDate = jsonObj.TEMP.SBP_LAST_DATE;
			sysBPHigh = jsonObj.TEMP.SBP_NORMAL_HIGH;
			sysBPLow = jsonObj.TEMP.SBP_NORMAL_LOW;
			minsysBP = jsonObj.TEMP.SBP_MIN_VAL;
			maxsysBP = jsonObj.TEMP.SBP_MAX_VAL;
			lastsysBP = jsonObj.TEMP.SBP_LAST_VAL;

			if(isEmpty(minsysBPDate)){minsysBPDate = "N/A"; }
			if(isEmpty(maxsysBPDate)){ maxsysBPDate = "N/A"; }
			if(isEmpty(lastsysBPDate)){ lastsysBPDate = "N/A"; }
			
			mindiasBPDate = jsonObj.TEMP.DBP_MIN_DATE;
			maxdiasBPDate = jsonObj.TEMP.DBP_MAX_DATE;
			lastdiasBPDate = jsonObj.TEMP.DBP_LAST_DATE;
			diasBPHigh = jsonObj.TEMP.DBP_NORMAL_HIGH;
			diasBPLow = jsonObj.TEMP.DBP_NORMAL_LOW;
			mindiasBP = jsonObj.TEMP.DBP_MIN_VAL;
			maxdiasBP = jsonObj.TEMP.DBP_MAX_VAL;
			lastdiasBP = jsonObj.TEMP.DBP_LAST_VAL;

			if (isEmpty(mindiasBPDate)){ mindiasBPDate = "N/A"; }
			if (isEmpty(maxdiasBPDate)){ maxdiasBPDate = "N/A"; }
			if (isEmpty(lastdiasBPDate)){ lastdiasBPDate = "N/A"; }

			minoximetryDate = jsonObj.TEMP.OXIMETRY_MIN_DATE;
			maxoximetryDate = jsonObj.TEMP.OXIMETRY_MAX_DATE;
			oximetryHigh = jsonObj.TEMP.OXIMETRY_NORMAL_HIGH;
			oximetryLow = jsonObj.TEMP.OXIMETRY_NORMAL_LOW;
			maxoximetry = jsonObj.TEMP.OXIMETRY_MAX_VAL;
			minoximetry = jsonObj.TEMP.OXIMETRY_MIN_VAL;
			if(isEmpty(oximetryLow)){ oximetryLow = "90"; }

			if(isEmpty(maxoximetryDate)){ maxoximetryDate = "N/A"; }
			if(isEmpty(minoximetryDate)){ minoximetryDate = "N/A"; }
			
			minpo2Date = jsonObj.TEMP.PO2_MIN_DATE;
			maxpo2Date = jsonObj.TEMP.PO2_MAX_DATE;
			po2High = jsonObj.TEMP.PO2_NORMAL_HIGH;
			po2Low = jsonObj.TEMP.PO2_NORMAL_LOW;
			maxpo2 = jsonObj.TEMP.PO2_MAX_VAL;
			minpo2 = jsonObj.TEMP.PO2_MIN_VAL;

			if(isEmpty(maxpo2Date)){ maxpo2Date = "N/A"; }
			if(isEmpty(minpo2Date)){ minpo2Date = "N/A"; }
			
			minctDate = jsonObj.TEMP.CT_MIN_DATE;
			maxctDate = jsonObj.TEMP.CT_MAX_DATE;
			ctHigh = jsonObj.TEMP.CT_NORMAL_HIGH;
			ctLow = jsonObj.TEMP.CT_NORMAL_LOW;
			maxct = jsonObj.TEMP.CT_MAX_VAL;
			minct = jsonObj.TEMP.CT_MIN_VAL;

			if (isEmpty(maxctDate)){ maxctDate = "N/A"; }
			if (isEmpty(minctDate)){ minctDate = "N/A"; }

			if (isEmpty(ctLow) != true && ctLow.indexOf("<") > -1){ ctLow = ctLow.substring(1); }	
			
			minUtiWbcDate = jsonObj.TEMP.UTIWBC_MIN_DATE;
			maxUtiWbcDate = jsonObj.TEMP.UTIWBC_MAX_DATE;
			UtiWbcHigh = jsonObj.TEMP.UTIWBC_NORMAL_HIGH;
			UtiWbcLow = jsonObj.TEMP.UTIWBC_NORMAL_LOW;
			maxUtiWbc = jsonObj.TEMP.UTIWBC_MAX_VAL;
			minUtiWbc = jsonObj.TEMP.UTIWBC_MIN_VAL;

			if (isEmpty(maxUtiWbcDate)){ maxUtiWbcDate = "N/A"; }
			if (isEmpty(minUtiWbcDate)){ minUtiWbcDate = "N/A"; }
			
			mintempDate = jsonObj.TEMP.TEMP_MIN_DATE;
			maxtempDate = jsonObj.TEMP.TEMP_MAX_DATE;
			tempHigh = jsonObj.TEMP.TEMP_NORMAL_HIGH;
			tempLow = jsonObj.TEMP.TEMP_NORMAL_LOW;
			maxtemp = jsonObj.TEMP.TEMP_MAX_VAL;
			mintemp = jsonObj.TEMP.TEMP_MIN_VAL;

			if (isEmpty(maxtempDate)){ maxtempDate = "N/A"; }
			if (isEmpty(mintempDate)){ mintempDate = "N/A"; }
			
			minhDate = jsonObj.TEMP.HR_MIN_DATE;
			maxhDate = jsonObj.TEMP.HR_MAX_DATE;
			hHigh = jsonObj.TEMP.HR_NORMAL_HIGH;
			hLow = jsonObj.TEMP.HR_NORMAL_LOW;
			maxhRate = jsonObj.TEMP.HR_MAX_VAL;
			minhRate = jsonObj.TEMP.HR_MIN_VAL;

			if (isEmpty(maxhDate)){ maxhDate = "N/A"; }
			if (isEmpty(minhDate)){ minhDate = "N/A"; }
			
			minrDate = jsonObj.TEMP.RR_MIN_DATE;
			maxrDate = jsonObj.TEMP.RR_MAX_DATE;
			rHigh = jsonObj.TEMP.RR_NORMAL_HIGH;
			rLow = jsonObj.TEMP.RR_NORMAL_LOW;
			maxrRate = jsonObj.TEMP.RR_MAX_VAL;
			minrRate = jsonObj.TEMP.RR_MIN_VAL;

			if (isEmpty(maxrDate)){ maxrDate = "N/A"; }
			if (isEmpty(minrDate)){ minrDate = "N/A"; }
		
			minLacticAcidDate = jsonObj.TEMP.LACTIC_ACID_MIN_DATE;
			maxLacticAcidDate = jsonObj.TEMP.LACTIC_ACID_MAX_DATE;
			LacticAcidHigh = jsonObj.TEMP.LACTIC_ACID_NORMAL_HIGH;
			LacticAcidLow = jsonObj.TEMP.LACTIC_ACID_NORMAL_LOW;
			maxLacticAcid = jsonObj.TEMP.LACTIC_ACID_MAX_VAL;
			minLacticAcid = jsonObj.TEMP.LACTIC_ACID_MIN_VAL;

			if (isEmpty(maxLacticAcidDate)){ maxLacticAcidDate = "N/A"; }
			if (isEmpty(minLacticAcidDate)){ minLacticAcidDate = "N/A"; }
			
			bunMinDate = jsonObj.TEMP.BUN_MIN_DATE;
			bunMaxDate = jsonObj.TEMP.BUN_MAX_DATE;
			bunHigh = jsonObj.TEMP.BUN_NORMAL_HIGH;
			bunLow = jsonObj.TEMP.BUN_NORMAL_LOW;
			bunMaxResult = jsonObj.TEMP.BUN_MAX_VAL;
			bunMinResult = jsonObj.TEMP.BUN_MIN_VAL;

			if (isEmpty(bunMaxDate)){ bunMaxDate = "N/A"; }
			if (isEmpty(bunMinDate)){ bunMinDate = "N/A"; }

			console.log(jsonObj.TEMP.CREATCNT);
			if (jsonObj.TEMP.CREATCNT > 0){
				mincreatDate = jsonObj.TEMP.CREAT[0].CREATININE_MIN_DATE;
				maxcreatDate = jsonObj.TEMP.CREAT[0].CREATININE_MAX_DATE;
				creatHigh = jsonObj.TEMP.CREAT[0].CREATININE_NORMAL_HIGH;
				creatLow = jsonObj.TEMP.CREAT[0].CREATININE_NORMAL_LOW;
				creat = jsonObj.TEMP.CREAT[0].CREATININE_MAX_VAL;
				maxcreatResult = jsonObj.TEMP.CREAT[0].CREATININE_MAX_VAL;
				mincreatResult = jsonObj.TEMP.CREAT[0].CREATININE_MIN_VAL;
				}
			if (jsonObj.TEMP.CREATCNT > 1){
				mincreatprevDate = jsonObj.TEMP.CREAT[1].CREATININE_MIN_DATE;
				maxcreatprevDate = jsonObj.TEMP.CREAT[1].CREATININE_MAX_DATE;
				creatprevHigh = jsonObj.TEMP.CREAT[1].CREATININE_NORMAL_HIGH;
				creatprevLow = jsonObj.TEMP.CREAT[1].CREATININE_NORMAL_LOW;
				prevCreat = jsonObj.TEMP.CREAT[1].CREATININE_MAX_VAL;
				maxcreatprevResult = jsonObj.TEMP.CREAT[1].CREATININE_MAX_VAL;
				mincreatprevResult = jsonObj.TEMP.CREAT[1].CREATININE_MIN_VAL;
				}
			
			if (isEmpty(maxcreatprevDate)){ maxcreatprevDate = "N/A"; }
			if (isEmpty(mincreatprevDate)){ mincreatprevDate = "N/A"; }
			if (isEmpty(maxcreatDate)){ maxcreatDate = "N/A"; }
			if (isEmpty(mincreatDate)){ mincreatDate = "N/A"; }

			if (jsonObj.TEMP.PCO2CNT > 0){
				minpco2Date = jsonObj.TEMP.PCO2[0].PCO2_MIN_DATE;
				maxpco2Date = jsonObj.TEMP.PCO2[0].PCO2_MAX_DATE;
				pco2High = jsonObj.TEMP.PCO2[0].PCO2_NORMAL_HIGH;
				pco2Low = jsonObj.TEMP.PCO2[0].PCO2_NORMAL_LOW;
				maxpco2 = jsonObj.TEMP.PCO2[0].PCO2_MAX_VAL;
				
				minpco2 = jsonObj.TEMP.PCO2[0].PCO2_MIN_VAL;
				}
			if (jsonObj.TEMP.PCO2CNT > 1){
				minprevpco2Date = jsonObj.TEMP.PCO2[1].PCO2_MIN_DATE;
				maxprevpco2Date = jsonObj.TEMP.PCO2[1].PCO2_MAX_DATE;
				prevpco2High = jsonObj.TEMP.PCO2[1].PCO2_NORMAL_HIGH;
				prevpco2Low = jsonObj.TEMP.PCO2[1].PCO2_NORMAL_LOW;
				maxprevpco2 = jsonObj.TEMP.PCO2[1].PCO2_MAX_VAL;
				minprevpco2 = jsonObj.TEMP.PCO2[1].PCO2_MIN_VAL;
				}
				
			if (isEmpty(maxpco2Date)){ maxpco2Date = "N/A"; }
			if (isEmpty(minpco2Date)){ minpco2Date = "N/A"; }
			if (isEmpty(maxprevpco2Date)){ maxprevpco2Date = "N/A"; }
			if (isEmpty(minprevpco2Date)){ minprevpco2Date = "N/A"; }
			
			if (jsonObj.TEMP.ETCO2CNT > 0){
				minEtco2Date = jsonObj.TEMP.ETCO2[0].ETCO2_MIN_DATE;
				maxEtco2Date = jsonObj.TEMP.ETCO2[0].ETCO2_MAX_DATE;
				Etco2High = jsonObj.TEMP.ETCO2[0].ETCO2_NORMAL_HIGH;
				Etco2Low = jsonObj.TEMP.ETCO2[0].ETCO2_NORMAL_LOW;
				maxEtco2 = jsonObj.TEMP.ETCO2[0].ETCO2_MAX_VAL;
				minEtco2 = jsonObj.TEMP.ETCO2[0].ETCO2_MIN_VAL;
				}
			if (jsonObj.TEMP.ETCO2CNT > 1){
				minprevEtco2Date = jsonObj.TEMP.ETCO2[1].EVENT_ETCO2_MIN_DATE;
				maxprevEtco2Date = jsonObj.TEMP.ETCO2[1].EVENT_ETCO2_MAX_DATE;
				prevEtco2High = jsonObj.TEMP.ETCO2[1].NORMAL_HIGH_ETCO2;
				prevEtco2Low = jsonObj.TEMP.ETCO2[1].NORMAL_LOW_ETCO2;
				maxprevEtco2 = jsonObj.TEMP.ETCO2[1].RESULT_MAX_VAL_ETCO2;
				minprevEtco2 = jsonObj.TEMP.ETCO2[1].RESULT_MIN_VAL_ETCO2;
				
				minprevEtco2Date = jsonObj.TEMP.ETCO2[1].ETCO2_MIN_DATE;
				maxprevEtco2Date = jsonObj.TEMP.ETCO2[1].ETCO2_MAX_DATE;
				prevEtco2High = jsonObj.TEMP.ETCO2[1].ETCO2_NORMAL_HIGH;
				prevEtco2Low = jsonObj.TEMP.ETCO2[1].ETCO2_NORMAL_LOW;
				maxprevEtco2 = jsonObj.TEMP.ETCO2[1].ETCO2_MAX_VAL;
				minprevEtco2 = jsonObj.TEMP.ETCO2[1].ETCO2_MIN_VAL;
				}
				
			if (isEmpty(maxEtco2Date)){ maxEtco2Date = "N/A"; }
			if (isEmpty(minEtco2Date)){ minEtco2Date = "N/A"; }
			if (isEmpty(maxprevEtco2Date)){ maxprevEtco2Date = "N/A"; }
			if (isEmpty(minprevEtco2Date)){ minprevEtco2Date = "N/A"; }
			
			if (jsonObj.TEMP.HBCNT > 0){
				hbLow = jsonObj.TEMP.HB[0].HB_NORMAL_LOW;
				minhb = jsonObj.TEMP.HB[0].HB_MIN_VAL;
				minhbdate = jsonObj.TEMP.HB[0].HB_MIN_DATE;
				}
			if (jsonObj.TEMP.HBCNT > 1){
				minhb_prev = jsonObj.TEMP.HB[1].HB_MIN_VAL;
				minhb_prevdate = jsonObj.TEMP.HB[1].HB_MIN_DATE;
				}
				
			if (isEmpty(minhbdate)){ minhbdate = "N/A"; }
			if (isEmpty(minhb_prevdate)){ minhb_prevdate = "N/A"; }

			if (jsonObj.TEMP.HCCNT > 0){
				hcLow = jsonObj.TEMP.HC[0].HC_NORMAL_LOW;
				minhc = jsonObj.TEMP.HC[0].HC_MIN_VAL;
				minhcdate = jsonObj.TEMP.HC[0].HC_MIN_DATE;
				}
			if (jsonObj.TEMP.HCCNT > 1){
				minhc_prev = jsonObj.TEMP.HC[1].HC_MIN_VAL;
				minhc_prevdate = jsonObj.TEMP.HC[1].HC_MIN_DATE;
				}
				
			if (isEmpty(minhcdate)){ minhcdate = "N/A"; }
			if (isEmpty(minhc_prevdate)){ minhc_prevdate = "N/A"; }
			
			minptinr = jsonObj.TEMP.PTINR_MIN_VAL; 
			maxptinr = jsonObj.TEMP.PTINR_MAX_VAL; 
			minptinrDate = jsonObj.TEMP.PTINR_MIN_DATE; 
			maxptinrDate = jsonObj.TEMP.PTINR_MAX_DATE; 
			ptinrLow = jsonObj.TEMP.PTINR_NORMAL_LOW; 
			ptinrHigh = jsonObj.TEMP.PTINR_NORMAL_HIGH; 

			if (isEmpty(maxptinrDate)){ maxptinrDate = "N/A"; }
			if (isEmpty(minptinrDate)){ minptinrDate = "N/A"; }

			minaptt = jsonObj.TEMP.APTT_MIN_VAL;  
			maxaptt = jsonObj.TEMP.APTT_MAX_VAL;
			minapttDate = jsonObj.TEMP.APTT_MIN_DATE;
			maxapttDate = jsonObj.TEMP.APTT_MAX_DATE;
			apttLow = jsonObj.TEMP.APTT_NORMAL_LOW;
			apttHigh = jsonObj.TEMP.APTT_NORMAL_HIGH;

			if (isEmpty(maxapttDate)){ maxapttDate = "N/A"; }
			if (isEmpty(minapttDate)){ minapttDate = "N/A"; }

			minmap = jsonObj.TEMP.MAP_MIN_VAL; 
			maxmap = jsonObj.TEMP.MAP_MAX_VAL;
			minmapDate = jsonObj.TEMP.MAP_MIN_DATE;
			maxmapDate = jsonObj.TEMP.MAP_MAX_DATE;
			mapLow = jsonObj.TEMP.MAP_NORMAL_LOW;
			mapHigh = jsonObj.TEMP.MAP_NORMAL_HIGH;

			if (isEmpty(maxmapDate)){ maxmapDate = "N/A"; }
			if (isEmpty(minmapDate)){ minmapDate = "N/A"; }

			minband = jsonObj.TEMP.BAND_MIN_VAL; 
			maxband = jsonObj.TEMP.BAND_MAX_VAL; 
			minbandDate = jsonObj.TEMP.BAND_MIN_DATE; 
			maxbandDate = jsonObj.TEMP.BAND_MAX_DATE; 
			bandLow = jsonObj.TEMP.BAND_NORMAL_LOW; 
			bandHigh = jsonObj.TEMP.BAND_NORMAL_HIGH; 

			if (isEmpty(maxbandDate)){ maxbandDate = "N/A"; }
			if (isEmpty(minbandDate)){ minbandDate = "N/A"; }

			minbicarbonate = jsonObj.TEMP.BICARBONATE_MIN_VAL;  
			maxbicarbonate = jsonObj.TEMP.BICARBONATE_MAX_VAL;
			minbicarbonateDate = jsonObj.TEMP.BICARBONATE_MIN_DATE;
			maxbicarbonateDate = jsonObj.TEMP.BICARBONATE_MAX_DATE;
			bicarbonateLow = jsonObj.TEMP.BICARBONATE_NORMAL_LOW;
			bicarbonateHigh = jsonObj.TEMP.BICARBONATE_NORMAL_HIGH;

			if (isEmpty(maxbicarbonateDate)){ maxbicarbonateDate = "N/A"; }
			if (isEmpty(minbicarbonateDate)){ minbicarbonateDate = "N/A"; }

			minbilirubin = jsonObj.TEMP.BILIRUBIN_MIN_VAL;
			maxbilirubin = jsonObj.TEMP.BILIRUBIN_MAX_VAL;
			minbilirubinDate = jsonObj.TEMP.BILIRUBIN_MIN_DATE;
			maxbilirubinDate = jsonObj.TEMP.BILIRUBIN_MAX_DATE;
			bilirubinLow = jsonObj.TEMP.BILIRUBIN_NORMAL_LOW;
			bilirubinHigh = jsonObj.TEMP.BILIRUBIN_NORMAL_HIGH;

			if (isEmpty(maxbilirubinDate)){ maxbilirubinDate = "N/A"; }
			if (isEmpty(minbilirubinDate)){ minbilirubinDate = "N/A"; }

			minplt = jsonObj.TEMP.PLT_MIN_VAL;
			maxplt = jsonObj.TEMP.PLT_MAX_VAL;
			minpltDate = jsonObj.TEMP.PLT_MIN_DATE;
			maxpltDate = jsonObj.TEMP.PLT_MAX_DATE;
			pltLow = jsonObj.TEMP.PLT_NORMAL_LOW;
			pltHigh = jsonObj.TEMP.PLT_NORMAL_HIGH;

			if (isEmpty(maxpltDate)){ maxpltDate = "N/A"; }
			if (isEmpty(minpltDate)){ minpltDate = "N/A"; }
			
			panwbc = jsonObj.TEMP.PANWBC_MIN_VAL;
			panrbc = jsonObj.TEMP.PANRBC_MIN_VAL;
			panplt = jsonObj.TEMP.PANPLT_MIN_VAL;
			panwbcLow = jsonObj.TEMP.PANWBC_NORMAL_LOW;
			panrbcLow = jsonObj.TEMP.PANRBC_NORMAL_LOW;
			panpltLow = jsonObj.TEMP.PANPLT_NORMAL_LOW;
			panDate = jsonObj.TEMP.PAN_MIN_DATE;

			if (isEmpty(panDate)){ panDate = "N/A"; }
		}
}

function buildPCheader(){
$('#pcheader').html("");
var tableBody = "";
tableBody += "<table width='100%' bgcolor='white'>"
		  + "<tr><td><br><p class='test' onclick='javascript:expandcollapse(\"pcarrow\",\"pcbody\");'>Previously Committed CoMorbidities&nbsp;&nbsp;"
		  + "<span id='showhide'></span><img id='pcarrow' border='0' src='"+arrowdownimg+"' alt='Click to collapse' /></p></td></tr>"
		  + "</table>";
$('#pcheader').html(tableBody);
return;
}

function buildPCbody(jsonObj){
$('#pcbody').html("");
pcArr = [];
pcRadiologyAndECGMap = {};
		if (jsonObj.TEMP.REC_CNT > 0){
			buildPCheader();
			tmpw = 410;
			tmph = 300;
			tmpmt = -125;
			tmpml = 35;
			var tableBody = "";
			tableBody += "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
					  + "<table width='100%' border='0' style='font-family:sans-serif;font-size:12px'>";
			for (var i = 0; i < jsonObj.TEMP.REC_CNT; i++){
				tableBody += "<tr><td style='font-weight:bold;'>On " + jsonObj.TEMP.REC[i].COMMITTEDON + " by " + jsonObj.TEMP.REC[i].COMMITTEDBY + ".</td></tr>";
				for (var k = 0; k < jsonObj.TEMP.REC[i].COMORB_CNT; k++){
					pcArr.push(jsonObj.TEMP.REC[i].COMORB[k].COMORB);
					var domId = i+"abl"+k;					
					if (jsonObj.TEMP.REC[i].COMORB[k].RES_CNT > 0){
						tableBody += "<tr><td><table cellspacing='0px'><tr onmouseover=\"mouseOverPara('"+i+"imageAbl"+k+"','"+i+"ablCol"+k+"');makeDivVisible('"+i+"abl"+k+"');\" onmouseout=\"mouseOutPara('"+i+"imageAbl"+k+"','"+i+"ablCol"+k+"');makeDivHidden('"+i+"abl"+k+"')\">"
								  + "<td id='"+i+"ablCol"+k+"'><span style='color:blue;font-size:13px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;"
								  + "<a>"+jsonObj.TEMP.REC[i].COMORB[k].DESC+"</a></span></td>"
								  + "<td><a id='"+i+"imageAbl"+k+"' style='visibility: hidden;'>"
								  + "<img src='"+button1img+"' alt='Details'/></a></td>"
								  + "<td><div id='"+i+"abl"+k+"' class='imageBack' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divimg+"' width='100%' height='100%'/>"
								  + "<div id='"+i+"abl"+k+"' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-45)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-20)+"px;'>"
								  + "<br><span style='color:#858384; font-weight:bold;'>"
								  + "Values are:</span><br/><br/>";					
						var allResultList = [];
						if (pcRadiologyAndECGMap.hasOwnProperty(jsonObj.TEMP.REC[i].COMORB[k].COMORB))
						{
							allResultList =  pcRadiologyAndECGMap[jsonObj.TEMP.REC[i].COMORB[k].COMORB];
						}
						var resultList = [];
						for (var m = 0; m < jsonObj.TEMP.REC[i].COMORB[k].RES_CNT; m++){
							resultList.push(jsonObj.TEMP.REC[i].COMORB[k].RES[m].RESULT);
							tableBody += jsonObj.TEMP.REC[i].COMORB[k].RES[m].RESULT + "<br>";
						}
						resultList.push(domId);
						allResultList.push(resultList);
						pcRadiologyAndECGMap[jsonObj.TEMP.REC[i].COMORB[k].COMORB] = 	allResultList;
						tableBody += "</div></div></td></tr></table></td></tr>";
				    }
					else
                    {
						tableBody += "<tr><td style='font-weight:bold;font-size:13px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;" + jsonObj.TEMP.REC[i].COMORB[k].DESC + "</td></tr>";
					}
				}
				//tableBody += "<tr></tr>";
            }
			tableBody += "</table></td></tr></table>";
			$('#pcbody').html(tableBody);
			$('#pcbody').show();
            expandcollapse("pcarrow","pcbody");
        }
return;
}


function buildCCheader(){
var tableBody = "";
tableBody += "<table width='100%' bgcolor='white'>"
		  + "<tr><td><br><p class='test' onclick='javascript:expandcollapse(\"ccarrow\",\"ccbody\");'>Computed CoMorbidities/Clinical Conditions&nbsp;&nbsp;"
		  + "<img id='ccarrow' border='0' src='"+arrowdownimg+"' alt='Click to collapse' /></p></td></tr>"
		  + "</table>";
$('#ccheader').html(tableBody);
return;
}


function buildDisplay(result, tableBody, key) {

	var lines = 0;
	tmpw = 400;
	tmph = 280;
	tmpmt = -35;
	tmpml = 30;
	newCC = 1;

	if (typeof(result) == 'object') 
	{
		if(key.indexOf("Kidney Injury") != -1) {
		
			tableBody += buildDisplayForKidneyInjury();
		}
		else {
			type = key.replace(/\s+/g, '');
			tableBody += "<tr><td><table><tr><td>"
					  + "<span style='color: black'>"
					  + "<input type='checkbox' id='" + type + "disorder' value='GROUP' onclick=\"unCheck('" + type + "disorder','" + type + "ChkGrp');\"/>" + key + " :"
					  + "</span>"
					  + "<br><div id='" + type + "ChkGrp' style='margin-left: 120px;'><table width='100%'>";
			for (var inkey in result) 
			{	
				res = result[inkey].split("|");
				rule = res[2];
				vals = res[1];
				values = vals;
				lines = values.split("<br>").length - 1;
				values = rule;
				ands = values.split("and").length - 1;
				values = rule;
				ors = values.split("or").length - 1;
				tmph = lines * 20 + ors * 10 + ands * 10 + 240;
				comorbidityPresent = res[0];
				display_inkey = inkey;
				inkey = key + "_" + inkey;
				
				tableBody += "<tr onmouseover=\"mouseOverPara('image" + inkey + "','" + inkey + "Col');\" onmouseout=\"mouseOutPara('image" + inkey + "','" + inkey + "Col');\">"
						  + "<td id='" + inkey + "Col'>";
				if (comorbidityPresent === "true") {
					tableBody += "<span style='color: blue;'>";
				}
				else {
					tableBody += "<span style='color: black;'>";
				}
				tableBody += "<a onmouseover=\"makeDivVisible('" + inkey + "');\" onmouseout=\"makeDivHidden('" + inkey + "');\">"
				  + "<input type='checkbox' value='" + key + ":" + inkey + "' onclick=\"checkMain('" + type + "disorder','" + type + "ChkGrp');\"/>"
				  + display_inkey + "&nbsp;&nbsp;</a></span>";
				  
				
				tableBody += "</td>"
				  + "<td><a id='image" + inkey + "' onmouseover=\"makeDivVisible('" + inkey + "');\" onmouseout=\"makeDivHidden('" + inkey + "');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='" + inkey + "' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='" + inkey + "' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Values are:<br></span>" + vals;
				  
				tableBody += "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + rule
				  + "</div></div>";
				  
				tableBody += "</td></tr>";
			
			}
		}			
	}   
	else {
		
			if(key.indexOf("SIRS") != -1) {
				console.log("SIRS");
				tableBody += buildDisplayForSIRS();
			}
			else {
				inkey = key.replace(/\s+/g, '');
				res = result.split("|");
				rule = res[2];
				vals = res[1];
				values = vals;
				lines = values.split("<br>").length - 1;
				values = rule;
				ands = values.split("and").length - 1;
				values = rule;
				ors = values.split("or").length - 1;
				tmph = lines * 20 + ors * 10 + ands * 10 + 240;
				comorbidityPresent = res[0];
				tableBody += "<tr><td><table>";
				tableBody += "<tr onmouseover=\"mouseOverPara('image" + inkey + "','" + inkey + "Col');\" onmouseout=\"mouseOutPara('image" + inkey + "','" + inkey + "Col');\">"
						  + "<td id='" + inkey + "Col'>";
				if (comorbidityPresent === "true") {
					tableBody += "<span style='color: blue;'>";
				}
				else {
					tableBody += "<span style='color: black;'>";
				}
				tableBody += "<a onmouseover=\"makeDivVisible('" + inkey + "');\" onmouseout=\"makeDivHidden('" + inkey + "');\">"
				  + "<input type='checkbox' value='" + inkey + ":" + inkey + "' onclick=\"checkMain('aki','akiChkGrp');\"/>"
				  + key + "&nbsp;&nbsp;</a></span>";
				  
				
				tableBody += "</td>"
				  + "<td><a id='image" + inkey + "' onmouseover=\"makeDivVisible('" + inkey + "');\" onmouseout=\"makeDivHidden('" + inkey + "');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='" + inkey + "' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='" + inkey + "' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Values are:<br></span>" + vals;
				  
				tableBody += "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + rule
				  + "</div></div>";
				  
				tableBody += "</td></tr>";
			}
		
	}
	tableBody += "</table></td></tr>";
	return tableBody;
}

function buildComorbDisplay(rb_result, tableBody) {

	//if ($.inArray("^Acid Base Disorder^",pcArr) == -1){
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
	console.log(pcArr);
	
	for (var key in rb_result) {
		var flag = false;
		result = rb_result[key];
		if (typeof(result) == 'object') 
		{
			for (var inkey in result) 
			{	
				if (result[inkey].indexOf("true") != -1)
				{
					flag = true;
				}
			}			
		}
		else {
			if (result.indexOf("true") != -1)
			{
				flag = true;
			}
		}

		if (flag){
			tableBody = buildDisplay(result, tableBody, key);     
		}
	}
	return tableBody;
}

function buildDisplayForSIRS() {

	tmpw = 400;
		tmph = 470;
		tmpmt = -200;
		tmpml = 35;
	var tableBody = "";
	//************************************** SIRS *******************************************
	console.log("SIRS display");
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black'>"
				  + "<input type='checkbox' id='sirs' value='GROUP' onclick=\"unCheck('sirs','sirsChkGrp');\"/>SIRS :"
				  + "</span>"
				  + "<br><div id='sirsChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageSIRS','SIRSCol');\" onmouseout=\"mouseOutPara('imageSIRS','SIRSCol');\">"
				  + "<td id='SIRSCol'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('SIRSdtid');\" onmouseout=\"makeDivHidden('SIRSdtid');\">"
				  + "<input type='checkbox' value='SIRS due to noninfectious process' onclick=\"checkMain('sirs','sirsChkGrp');\"/>"
				  + "SIRS due to noninfectious process&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageSIRS' onmouseover=\"makeDivVisible('SIRSdtid');\" onmouseout=\"makeDivHidden('SIRSdtid');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='SIRSdtid' class='imageBack' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divimg+"' width='100%' height='100%'/>"
				  + "<div id='SIRSdtid' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-50)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-25)+"px;'>"
				  + "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(maxtemp) != true && parseDouble(maxtemp) >= 38.3){
			tableBody += "Temperature: <b>"+maxtemp+"&deg;C"+"</b> on "+maxtempDate+"<br>";
			}
		if (isEmpty(mintemp) != true &&  parseDouble(mintemp) < 36.0){
			tableBody += "Temperature: <b>"+mintemp+"&deg;C"+"</b> on "+mintempDate+"<br>";
			}
		if (isEmpty(maxhRate) != true &&  parseDouble(maxhRate) > 90.0){
			tableBody += "Heart Rate: <b>"+maxhRate+"</b> on "+maxhDate+"<br>";
			}
		if (isEmpty(maxrRate) != true &&  parseDouble(maxrRate) > 20.0){
			tableBody += "Respiratory Rate: <b>"+maxrRate+"</b> on "+maxrDate+"<br>";
			}
		if (isEmpty(maxband) != true &&  parseDouble(maxband) > 10.0){
			tableBody += "Band %: <b>"+maxband+"</b> on "+maxbandDate+"<br>";
			}
		if (isEmpty(maxwbc) != true &&  parseDouble(maxwbc) > 12.0){
			tableBody += "WBC Count: <b>"+maxwbc+"</b> on "+maxwbcDate+"<br>";
			}
		if (isEmpty(minwbc) != true &&  parseDouble(minwbc) < 4.0){
			tableBody += "WBC Count: <b>"+minwbc+"</b> on "+minwbcDate+"<br>";
			}
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br>On current encounter, 2 or more of the following are present<br><br></span>"
				  + "<ul>"
				  + "<li>Temperature < 36.0 or >= 38.3</li>"
				  + "<li>HR > 90</li>"
				  + "<li>RR > 20</li>"
				  + "<li>Bands > 10%</li>"
				  + "<li>Serum WBC < 4,000 or > 12,000</li>"
				  + "</ul>"
				  + "*** noninfectious causes such as trauma, burn, pancreatitis, other pro-inflammatory conditions."
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageSIRSsepsis','SIRSsepsisCol');\" onmouseout=\"mouseOutPara('imageSIRSsepsis','SIRSsepsisCol');\">"
				  + "<td id='SIRSsepsisCol'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('SIRSsepsis');\" onmouseout=\"makeDivHidden('SIRSsepsis');\">"
				  + "<input type='checkbox' id='SIRSsepsisID' value='Sepsis due to suspected or actual infection' onclick=\"checkMain3('sirs','sirsChkGrp','SIRSsepsisID');\"/>"
				  + "Sepsis due to suspected or actual infection&nbsp;&nbsp;</a></span>";
		tableBody += "</td>"
				  + "<td><a id='imageSIRSsepsis' onmouseover=\"makeDivVisible('SIRSsepsis');\" onmouseout=\"makeDivHidden('SIRSsepsis');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='SIRSsepsis' class='imageBack' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divimg+"' width='100%' height='100%'/>"
				  + "<div id='SIRSsepsis' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-50)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-25)+"px;'>"
				  + "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(maxtemp) != true && parseDouble(maxtemp) >= 38.3){
			tableBody += "Temperature: <b>"+maxtemp+"&deg;C"+"</b> on "+maxtempDate+"<br>";
			}
		if (isEmpty(mintemp) != true && parseDouble(mintemp) < 36.0){
			tableBody += "Temperature: <b>"+mintemp+"&deg;C"+"</b> on "+mintempDate+"<br>";
			}
		if (isEmpty(maxhRate) != true && parseDouble(maxhRate) > 90.0){
			tableBody += "Heart Rate: <b>"+maxhRate+"</b> on "+maxhDate+"<br>";
			}
		if (isEmpty(maxrRate) != true && parseDouble(maxrRate) > 20.0){
			tableBody += "Respiratory Rate: <b>"+maxrRate+"</b> on "+maxrDate+"<br>";
			}
		if (isEmpty(maxband) != true && parseDouble(maxband) > 10.0){
			tableBody += "Band %: <b>"+maxband+"</b> on "+maxbandDate+"<br>";
			}
		if (isEmpty(maxwbc) != true && parseDouble(maxwbc) > 12.0){
			tableBody += "WBC Count: <b>"+maxwbc+"</b> on "+maxwbcDate+"<br>";
			}
		if (isEmpty(minwbc) != true && parseDouble(minwbc) < 4.0){
			tableBody += "WBC Count: <b>"+minwbc+"</b> on "+minwbcDate+"<br>";
			}
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br>On current encounter, 2 or more of the following are present<br><br></span>"
				  + "<ul>"
				  + "<li>Temperature < 36.0 or >= 38.3</li>"
				  + "<li>HR > 90</li>"
				  + "<li>RR > 20</li>"
				  + "<li>Bands > 10%</li>"
				  + "<li>Serum WBC < 4,000 or > 12,000</li>"
				  + "</ul>"
				  + "*** due to suspected or actual infection and values not easily explained by co-existing conditions"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr id='SIRSsepsisseveresepsis' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageSIRSseveresepsis\",\"SIRSseveresepsis\");' onmouseout='javascript:mouseOutPara(\"imageSIRSseveresepsis\",\"SIRSseveresepsis\");'>"
				  + "<td id='SIRSseveresepsis'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		tableBody += "</table></td></tr>";
		return tableBody;

}


function buildDisplayForKidneyInjury() {
			var tableBody = "";
			tableBody += "<tr><td><table><tr><td>"
					  + "<span style='color: black'>"
					  + "<input type='checkbox' id='aki' value='GROUP' onclick=\"unCheck('aki','akiChkGrp');\"/>Kidney Injury :"
					  + "</span>"
					  + "<br><div id='akiChkGrp' style='margin-left: 120px;'><table>"
					  + "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
					  + "<td id='RfAcuteCol'>";
					  
			console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Acute result" + result["Acute"]);
			
			res = result["Acute"].split("|");
			comorbidityPresent = res[0];
			if (comorbidityPresent === "true"){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('RfAcute');\" onmouseout=\"makeDivHidden('RfAcute');\">"
					  + "<input type='checkbox' value='Kidney Injury:Acute' onclick=\"checkMain('aki','akiChkGrp');\"/>"
					  + "Acute&nbsp;&nbsp;</a></span>";
			tableBody += "</td>"
					  + "<td><a id='imageRfAcute' onmouseover=\"makeDivVisible('RfAcute');\" onmouseout=\"makeDivHidden('RfAcute');\" style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='RfAcute' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='RfAcute' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br><span style = 'color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>"
					  + "Creatinine (Latest): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+maxcreatResult+"</b> on "+maxcreatDate+"<br>";            		            	
			if (isEmpty(maxcreatprevResult) != true){ tableBody += "Creatinine (Previous Visit): <b>"+maxcreatprevResult+"</b> on "+maxcreatprevDate+"<br>"; }      
			tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
					  + "Determined by the Rule:<br><br></span>"
					  + "(Latest Creatinine > 1.2 and Previous Creatinine <= 1.2) or<br> "
					  + "Latest Creatinine = 1.5 x Previous Creatinine"
					  + "</div></div>"
					  + "</td></tr>"
					   + "<tr onmouseover=\"mouseOverPara('imageRfChronic','RfChronicCol');\" onmouseout=\"mouseOutPara('imageRfChronic','RfChronicCol');\">"
					  + "<td id='RfChronicCol'>";
					  
			res = result["Chronic"].split("|");
			comorbidityPresent = res[0];
			if (comorbidityPresent === "true"){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('RfAcuteChronic');\" onmouseout=\"makeDivHidden('RfAcuteChronic');\">"
					  + "<input type='checkbox' id='KIchronic' value='Kidney Injury:Chronic' onclick=\"checkMain1('aki','akiChkGrp','KIchronic');\">"
					  + "Chronic&nbsp;&nbsp;</a></span>";
			tableBody += "</td>"
					  + "<td><a id='imageRfChronic' onmouseover=\"makeDivVisible('RfAcuteChronic');\" onmouseout=\"makeDivHidden('RfAcuteChronic');\" style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='RfAcuteChronic' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='RfAcuteChronic' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br><span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>"
					  + "Creatinine (Latest): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+maxcreatResult+"</b> on "+maxcreatDate+"<br>";
			if (isEmpty(maxcreatprevResult) != true){ tableBody += "Creatinine (Previous Visit): <b>"+maxcreatprevResult+"</b> on "+maxcreatprevDate+"<br>"; }        		                    
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'>"
					  + "Determined by the Rule:<br><br></span>"
					  + "Previous and Latest Creatinine both > 1.2 <br>"
					  + "</div></div>"
					  + "</td></tr>";
			tableBody += "<tr id='KIchronicstage1' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIchronic1\",\"KIchronic1\");' onmouseout='javascript:mouseOutPara(\"imageKIchronic1\",\"KIchronic1\");'>"
					  + "<td id='KIchronic1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) >= 90.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tmpw = 300;
			tmph = 200;
			tmpmt = -35;
			tmpml = 30;
			tableBody += "<a onmouseover=\"makeDivVisible('KIchronic1div');\" onmouseout=\"makeDivHidden('KIchronic1div');\">"
					  + "<input type='checkbox' id='ipKIchronic1' value='Kidney Injury:Chronic Stage 1' onclick=\"checkMain2('aki','akiChkGrp','KIchronic');\">"
					  + "Stage 1&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIchronic1' onmouseover='javascript:makeDivVisible(\"KIchronic1div\");' onmouseout='javascript:makeDivHidden(\"KIchronic1div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIchronic1div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIchronic1div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR >= 90"
					  + "</div></div></td></tr>"
					  + "<tr id='KIchronicstage2' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIchronic2\",\"KIchronic2\");' onmouseout='javascript:mouseOutPara(\"imageKIchronic2\",\"KIchronic2\");'>"
					  + "<td id='KIchronic2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) >= 60.0 && parseDouble(maxgfrResult) < 90.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('KIchronic2div');\" onmouseout=\"makeDivHidden('KIchronic2div');\">"
					  + "<input type='checkbox' id='ipKIchronic2' value='Kidney Injury:Chronic Stage 2' onclick=\"checkMain2('aki','akiChkGrp','KIchronic');\">"
					  + "Stage 2&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIchronic2' onmouseover='javascript:makeDivVisible(\"KIchronic2div\");' onmouseout='javascript:makeDivHidden(\"KIchronic2div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIchronic2div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIchronic2div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR >= 60 and < 90"
					  + "</div></div></td></tr>"
					  + "<tr id='KIchronicstage3' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIchronic3\",\"KIchronic3\");' onmouseout='javascript:mouseOutPara(\"imageKIchronic3\",\"KIchronic3\");'>"
					  + "<td id='KIchronic3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) >= 30.0 && parseDouble(maxgfrResult) < 60.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('KIchronic3div');\" onmouseout=\"makeDivHidden('KIchronic3div');\">"
					  + "<input type='checkbox' id='ipKIchronic3' value='Kidney Injury:Chronic Stage 3' onclick=\"checkMain2('aki','akiChkGrp','KIchronic');\">"
					  + "Stage 3&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIchronic3' onmouseover='javascript:makeDivVisible(\"KIchronic3div\");' onmouseout='javascript:makeDivHidden(\"KIchronic3div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIchronic3div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIchronic3div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR >= 30 and < 60"
					  + "</div></div></td></tr>"
					  + "<tr id='KIchronicstage4' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIchronic4\",\"KIchronic4\");' onmouseout='javascript:mouseOutPara(\"imageKIchronic4\",\"KIchronic4\");'>"
					  + "<td id='KIchronic4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) >= 15.0 && parseDouble(maxgfrResult) < 30.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('KIchronic4div');\" onmouseout=\"makeDivHidden('KIchronic4div');\">"
					  + "<input type='checkbox' id='ipKIchronic4' value='Kidney Injury:Chronic Stage 4' onclick=\"checkMain2('aki','akiChkGrp','KIchronic');\">"
					  + "Stage 4&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIchronic4' onmouseover='javascript:makeDivVisible(\"KIchronic4div\");' onmouseout='javascript:makeDivHidden(\"KIchronic4div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIchronic4div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIchronic4div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR >= 15 and < 30"
					  + "</div></div></td></tr>"
					  + "<tr id='KIchronicstage5' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIchronic5\",\"KIchronic5\");' onmouseout='javascript:mouseOutPara(\"imageKIchronic5\",\"KIchronic5\");'>"
					  + "<td id='KIchronic5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) < 15.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('KIchronic5div');\" onmouseout=\"makeDivHidden('KIchronic5div');\">"
					  + "<input type='checkbox' id='ipKIchronic5' value='Kidney Injury:Chronic Stage 5' onclick=\"checkMain2('aki','akiChkGrp','KIchronic');\">"
					  + "Stage 5&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIchronic5' onmouseover='javascript:makeDivVisible(\"KIchronic5div\");' onmouseout='javascript:makeDivHidden(\"KIchronic5div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIchronic5div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIchronic5div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR < 15"
					  + "</div></div></td></tr>";
			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcuteOnChronic','RfAcuteOnChronicCol');\" onmouseout=\"mouseOutPara('imageRfAcuteOnChronic','RfAcuteOnChronicCol');\">"
					  + "<td id='RfAcuteOnChronicCol'>";
					  
					  
					  
			res = result["Acute on Chronic"].split("|");
			comorbidityPresent = res[0];
			if (comorbidityPresent === "true"){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tmpw = 400;
			tmph = 260;
			tmpmt = -35;
			tmpml = 30;
			tableBody += "<a onmouseover=\"makeDivVisible('RfAcuteOnChronic');\" onmouseout=\"makeDivHidden('RfAcuteOnChronic');\">"
					  + "<input type='checkbox' id='KIacuteonchronic' value='Kidney Injury:Acute on Chronic' onclick=\"checkMain1('aki','akiChkGrp','KIacuteonchronic');\"/>"
					  + "Acute on Chronic&nbsp;&nbsp;</a></span>";
			tableBody += "</td>"
					  + "<td><a id='imageRfAcuteOnChronic' onmouseover=\"makeDivVisible('RfAcuteOnChronic');\" onmouseout=\"makeDivHidden('RfAcuteOnChronic');\" style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='RfAcuteOnChronic' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='RfAcuteOnChronic' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br><span style = 'color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>"
					  + "Creatinine (Latest): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+maxcreatResult+"</b> on "+maxcreatDate+"<br>";            		            	
			if (isEmpty(maxcreatprevResult) != true){ tableBody += "Creatinine (Previous Visit): <b>"+maxcreatprevResult+"</b> on "+maxcreatprevDate+"<br>"; }      
			tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
					  + "Determined by the Rule:<br><br></span>"
					  + "Previous and Latest Creatinine both > 1.2 and<br> "
					  + "Latest Creatinine = 1.5 x Previous Creatinine"
					  + "</div></div>"
					  + "</td></tr>";
			tableBody += "<tr id='KIacuteonchronicstage1' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIacuteonchronic1\",\"KIacuteonchronic1\");' onmouseout='javascript:mouseOutPara(\"imageKIacuteonchronic1\",\"KIacuteonchronic1\");'>"
					  + "<td id='KIacuteonchronic1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) >= 90.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tmpw = 300;
			tmph = 200;
			tmpmt = -35;
			tmpml = 30;
			tableBody += "<a onmouseover=\"makeDivVisible('KIacuteonchronic1div');\" onmouseout=\"makeDivHidden('KIacuteonchronic1div');\">"
					  + "<input type='checkbox' id='ipKIacuteonchronic1' value='Kidney Injury:Acute on Chronic Stage 1' onclick=\"checkMain2('aki','akiChkGrp','KIacuteonchronic');\">"
					  + "Stage 1&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIacuteonchronic1' onmouseover='javascript:makeDivVisible(\"KIacuteonchronic1div\");' onmouseout='javascript:makeDivHidden(\"KIacuteonchronic1div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIacuteonchronic1div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIacuteonchronic1div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR >= 90"
					  + "</div></div></td></tr>"
					  + "<tr id='KIacuteonchronicstage2' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIacuteonchronic2\",\"KIacuteonchronic2\");' onmouseout='javascript:mouseOutPara(\"imageKIacuteonchronic2\",\"KIacuteonchronic2\");'>"
					  + "<td id='KIacuteonchronic2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) >= 60.0 && parseDouble(maxgfrResult) < 90.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('KIacuteonchronic2div');\" onmouseout=\"makeDivHidden('KIacuteonchronic2div');\">"
					  + "<input type='checkbox' id='ipKIacuteonchronic2' value='Kidney Injury:Acute on Chronic Stage 2' onclick=\"checkMain2('aki','akiChkGrp','KIacuteonchronic');\">"
					  + "Stage 2&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIacuteonchronic2' onmouseover='javascript:makeDivVisible(\"KIacuteonchronic2div\");' onmouseout='javascript:makeDivHidden(\"KIacuteonchronic2div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIacuteonchronic2div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIacuteonchronic2div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR >= 60 and < 90"
					  + "</div></div></td></tr>"
					  + "<tr id='KIacuteonchronicstage3' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIacuteonchronic3\",\"KIacuteonchronic3\");' onmouseout='javascript:mouseOutPara(\"imageKIacuteonchronic3\",\"KIacuteonchronic3\");'>"
					  + "<td id='KIacuteonchronic3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) >= 30.0 && parseDouble(maxgfrResult) < 60.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('KIacuteonchronic3div');\" onmouseout=\"makeDivHidden('KIacuteonchronic3div');\">"
					  + "<input type='checkbox' id='ipKIacuteonchronic3' value='Kidney Injury:Acute on Chronic Stage 3' onclick=\"checkMain2('aki','akiChkGrp','KIacuteonchronic');\">"
					  + "Stage 3&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIacuteonchronic3' onmouseover='javascript:makeDivVisible(\"KIacuteonchronic3div\");' onmouseout='javascript:makeDivHidden(\"KIacuteonchronic3div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIacuteonchronic3div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIacuteonchronic3div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR >= 30 and < 60"
					  + "</div></div></td></tr>"
					  + "<tr id='KIacuteonchronicstage4' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIacuteonchronic4\",\"KIacuteonchronic4\");' onmouseout='javascript:mouseOutPara(\"imageKIacuteonchronic4\",\"KIacuteonchronic4\");'>"
					  + "<td id='KIacuteonchronic4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) >= 15.0 && parseDouble(maxgfrResult) < 30.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('KIacuteonchronic4div');\" onmouseout=\"makeDivHidden('KIacuteonchronic4div');\">"
					  + "<input type='checkbox' id='ipKIacuteonchronic4' value='Kidney Injury:Acute on Chronic Stage 4' onclick=\"checkMain2('aki','akiChkGrp','KIacuteonchronic');\">"
					  + "Stage 4&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIacuteonchronic4' onmouseover='javascript:makeDivVisible(\"KIacuteonchronic4div\");' onmouseout='javascript:makeDivHidden(\"KIacuteonchronic4div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIacuteonchronic4div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIacuteonchronic4div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR >= 15 and < 30"
					  + "</div></div></td></tr>"
					  + "<tr id='KIacuteonchronicstage5' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageKIacuteonchronic5\",\"KIacuteonchronic5\");' onmouseout='javascript:mouseOutPara(\"imageKIacuteonchronic5\",\"KIacuteonchronic5\");'>"
					  + "<td id='KIacuteonchronic5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if (isEmpty(maxgfrResult) != true && parseDouble(maxgfrResult) < 15.0){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tableBody += "<a onmouseover=\"makeDivVisible('KIacuteonchronic5div');\" onmouseout=\"makeDivHidden('KIacuteonchronic5div');\">"
					  + "<input type='checkbox' id='ipKIacuteonchronic5' value='Kidney Injury:Acute on Chronic Stage 5' onclick=\"checkMain2('aki','akiChkGrp','KIacuteonchronic');\">"
					  + "Stage 5&nbsp;&nbsp;</a></span></td>"
					  + "<td><a id='imageKIacuteonchronic5' onmouseover='javascript:makeDivVisible(\"KIacuteonchronic5div\");' onmouseout='javascript:makeDivHidden(\"KIacuteonchronic5div\");' style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='KIacuteonchronic5div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='KIacuteonchronic5div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br> <span style='color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
			if (isEmpty(maxgfrResult) != true){ tableBody += "GFR: <b>"+maxgfrResult+"</b> on "+maxgfrDate+"<br>"; }
			tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
					  + "Determined by the Rule:<br><br></span>"
					  + "GFR < 15"
					  + "</div></div></td></tr>";
					  /*+ "</table></td></tr>";*/
			/* Not Otherwise specified*/
			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfNOS','RfNOSCol');\" onmouseout=\"mouseOutPara('imageRfNOS','RfNOSCol');\">"
			  + "<td id='RfNOSCol'>";
			  
			  
			res = result["Not otherwise specified"].split("|");
			comorbidityPresent = res[0];
			if (comorbidityPresent === "true"){ tableBody += "<span style='color: blue;'>"; }
			else{ tableBody += "<span style='color: black;'>"; }
			tmpw = 400;
			tmph = 260;
			tmpmt = -35;
			tmpml = 30;
			tableBody += "<a onmouseover=\"makeDivVisible('RfNOS');\" onmouseout=\"makeDivHidden('RfNOS');\">"
					  + "<input type='checkbox' value='Kidney Injury:NOS' onclick=\"checkMain('aki','akiChkGrp');\"/>"
					  + "Not otherwise specified&nbsp;&nbsp;</a></span>";
			tableBody += "</td>"
					  + "<td><a id='imageRfNOS' onmouseover=\"makeDivVisible('RfNOS');\" onmouseout=\"makeDivHidden('RfNOS');\" style='visibility: hidden;'>"
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='RfNOS' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='RfNOS' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br><span style = 'color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>"
					  + "Creatinine (Latest): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+maxcreatResult+"</b> on "+maxcreatDate+"<br>";            		            	      
			tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
					  + "Determined by the Rule:<br/><br/></span>"
					  + "Latest Creatinine > 1.2 and <br/>Previous Creatinine is not available"
					  + "</div></div>"
					  + "</td></tr>";

			return tableBody;			
}

function populateVariables(variables) {
	variables['over1'] = over1;
	variables['minsodiumDate'] = minsodiumDate;
	variables['maxsodiumDate'] = maxsodiumDate;
	variables['sodiumHigh'] = sodiumHigh;
	variables['sodiumLow'] = sodiumLow;
	variables['maxsodiumResult'] = maxsodiumResult;
	variables['minsodiumResult'] = minsodiumResult;
	
	variables['minpotassiumDate'] = minpotassiumDate;
	variables['maxpotassiumDate'] = maxpotassiumDate;
	variables['potassiumHigh'] = potassiumHigh;
	variables['potassiumLow'] = potassiumLow;
	variables['maxpotassiumResult'] = maxpotassiumResult;
	variables['minpotassiumResult'] = minpotassiumResult;
	
	variables['maxcalciumResult'] = maxcalciumResult;
	variables['mincalciumResult'] = mincalciumResult;
	variables['calciumLow'] = calciumLow; 
	variables['calciumHigh'] = calciumHigh;
	variables['maxcalciumDate'] = maxcalciumDate;
	variables['mincalciumDate'] = mincalciumDate;
	
	variables['maxglucResult'] = maxglucResult;
	variables['minglucResult'] = minglucResult;
	variables['maxglucDate'] = maxglucDate;
	variables['minglucDate'] = minglucDate;
	variables['glucLow'] = glucLow; 
	variables['glucHigh'] = glucHigh;
	
	variables['maxphosphorusResult'] = maxphosphorusResult;
	variables['minphosphorusResult'] = minphosphorusResult;
	variables['phosphorusLow'] = phosphorusLow; 
	variables['phosphorusHigh'] = phosphorusHigh;
	variables['maxphosphorusDate'] = maxphosphorusDate;
	variables['minphosphorusDate'] = minphosphorusDate;
	
	variables['maxmagnesiumResult'] = maxmagnesiumResult;
	variables['minmagnesiumResult'] = minmagnesiumResult;
	variables['magnesiumLow'] = magnesiumLow; 
	variables['magnesiumHigh'] = magnesiumHigh;
	variables['maxmagnesiumDate'] = maxmagnesiumDate;
	variables['minmagnesiumDate'] = minmagnesiumDate;
	
	variables['maxcholesterolResult'] = maxcholesterolResult;
	variables['mincholesterolResult'] = mincholesterolResult;
	variables['cholesterolLow'] = cholesterolLow; 
	variables['cholesterolHigh'] = cholesterolHigh;
	variables['maxcholesterolDate'] = maxcholesterolDate;
	variables['mincholesterolDate'] = mincholesterolDate;
	
	variables['maxneutrophil'] = maxneutrophil;
	variables['minneutrophil'] = minneutrophil;
	variables['maxneutrophilDate'] = maxneutrophilDate;
	variables['minneutrophilDate'] = minneutrophilDate;
	variables['neutrophilLow'] = neutrophilLow;
	variables['neutrophilHigh'] = neutrophilHigh;
	
	variables['maxwbc'] = maxwbc;
	variables['minwbc'] = minwbc;
	variables['maxwbcDate'] = maxwbcDate;
	variables['minwbcDate'] = minwbcDate;
	variables['wbcLow'] = wbcLow;
	variables['wbcHigh'] = wbcHigh;
	
	variables['maxurini'] = maxurini;
	variables['minurini'] = minurini;
	variables['maxuriniDate'] = maxuriniDate;
	variables['minuriniDate'] = minuriniDate;
	variables['uriniLow'] = uriniLow;
	variables['uriniHigh'] = uriniHigh;
	
	variables['maxurinest'] = maxurinest;
	variables['minurinest'] = minurinest;
	variables['maxurinestDate'] = maxurinestDate;
	variables['minurinestDate'] = minurinestDate;
	variables['urinestLow'] = urinestLow;
	variables['urinestHigh'] = urinestHigh;
	
	variables['maxgfrResult'] = maxgfrResult;
	variables['mingfrResult'] = mingfrResult;
	variables['maxgfrDate'] = maxgfrDate;
	variables['mingfrDate'] = mingfrDate;
	
	variables['minweight'] = minweight;
	variables['maxweight'] = maxweight;
	variables['maxweightDate'] = maxweightDate;
	variables['minweightDate'] = minweightDate;
	
	variables['minheight'] = minheight;
	variables['maxheight'] = maxheight;
	variables['maxheightDate'] = maxheightDate;
	variables['minheightDate'] = minheightDate;
	
	variables['minsysBP'] = minsysBP;
	variables['maxsysBP'] = maxsysBP;
	variables['lastsysBP'] = lastsysBP;
	variables['minsysBPDate'] = minsysBPDate;
	variables['maxsysBPDate'] = maxsysBPDate;
	variables['lastsysBPDate'] = lastsysBPDate;
	variables['sysBPLow'] = sysBPLow;
	variables['sysBPHigh'] = sysBPHigh;
	
	variables['mindiasBP'] = mindiasBP;
	variables['maxdiasBP'] = maxdiasBP;
	variables['lastdiasBP'] = lastdiasBP;
	variables['mindiasBPDate'] = mindiasBPDate;
	variables['maxdiasBPDate'] = maxdiasBPDate;
	variables['lastdiasBPDate'] = lastdiasBPDate;
	variables['diasBPLow'] = diasBPLow;
	variables['diasBPHigh'] = diasBPHigh;
	
	variables['maxoximetry'] = maxoximetry;
	variables['minoximetry'] = minoximetry;
	variables['maxoximetryDate'] = maxoximetryDate;
	variables['minoximetryDate'] = minoximetryDate;
	variables['oximetryLow'] = oximetryLow;
	variables['oximetryHigh'] = oximetryHigh;
	
	variables['maxpo2'] = maxpo2;
	variables['minpo2'] = minpo2;
	variables['maxpo2Date'] = maxpo2Date;
	variables['minpo2Date'] = minpo2Date;
	variables['po2Low'] = po2Low;
	variables['po2High'] = po2High;
	
	variables['maxct'] = maxct;
	variables['minct'] = minct;
	variables['maxctDate'] = maxctDate;
	variables['minctDate'] = minctDate;
	variables['ctLow'] = ctLow;
	variables['ctHigh'] = ctHigh;
	
	variables['maxUtiWbc'] = maxUtiWbc;
	variables['minUtiWbc'] = minUtiWbc;
	variables['maxUtiWbcDate'] = maxUtiWbcDate;
	variables['minUtiWbcDate'] = minUtiWbcDate;
	variables['UtiWbcLow'] = UtiWbcLow;
	variables['UtiWbcHigh'] = UtiWbcHigh;
	
	variables['maxtemp'] = maxtemp;
	variables['mintemp'] = mintemp;
	variables['maxtempDate'] = maxtempDate;
	variables['mintempDate'] = mintempDate;
	variables['tempLow'] = tempLow;
	variables['tempHigh'] = tempHigh;
	
	variables['maxhRate'] = maxhRate;
	variables['minhRate'] = minhRate;
	variables['maxhDate'] = maxhDate;
	variables['minhDate'] = minhDate;
	variables['hLow'] = hLow;
	variables['hHigh'] = hHigh;
	
	variables['maxrRate'] = maxrRate;
	variables['minrRate'] = minrRate;
	variables['maxrDate'] = maxrDate;
	variables['minrDate'] = minrDate;
	variables['rLow'] = rLow;
	variables['rHigh'] = rHigh;
	
	variables['maxLacticAcid'] = maxLacticAcid;
	variables['minLacticAcid'] = minLacticAcid;
	variables['maxLacticAcidDate'] = maxLacticAcidDate;
	variables['minLacticAcidDate'] = minLacticAcidDate;
	variables['LacticAcidLow '] = LacticAcidLow;
	variables['LacticAcidHigh'] = LacticAcidHigh;
	
	variables['bunMinResult'] = bunMinResult; 
	variables['bunMaxResult'] = bunMaxResult;
	variables['bunMinDate'] = bunMinDate;
	variables['bunMaxDate'] = bunMaxDate;
	variables['bunLow'] = bunLow;
	variables['bunHigh'] = bunHigh;
	
	variables['creatHigh'] = creatHigh;
	variables['creatLow'] = creatLow;
	variables['creat'] = creat;
	variables['maxcreatResult'] = maxcreatResult;
	variables['mincreatResult'] = mincreatResult;
	variables['maxcreatDate'] = maxcreatDate;
	variables['mincreatDate'] = mincreatDate;
	
	variables['creatprevLow'] = creatprevLow;
	variables['creatprevHigh'] = creatprevHigh;
	variables['maxcreatprevDate'] = maxcreatprevDate;
	variables['mincreatprevDate'] = mincreatprevDate;
	variables['prevCreat'] = prevCreat;
	variables['maxcreatprevResult'] = maxcreatprevResult;
	variables['mincreatprevResult'] =mincreatprevResult;
	
	variables['maxpco2'] = maxpco2;
	variables['minpco2'] = minpco2;
	variables['maxpco2Date'] = maxpco2Date;
	variables['minpco2Date'] = minpco2Date;
	variables['pco2Low'] = pco2Low;
	variables['pco2High'] = pco2High;
	
	variables['maxprevpco2'] = maxprevpco2;
	variables['minprevpco2'] = minprevpco2;
	variables['maxprevpco2Date'] = maxprevpco2Date;
	variables['minprevpco2Date'] = minprevpco2Date;
	variables['prevpco2Low'] = prevpco2Low;
	variables['prevpco2High'] = prevpco2High;
	
	variables['maxEtco2'] = maxEtco2;
	variables['minEtco2'] = minEtco2;
	variables['maxEtco2Date'] = maxEtco2Date;
	variables['minEtco2Date'] = minEtco2Date;
	variables['Etco2Low'] = Etco2Low;
	variables['Etco2High'] = Etco2High;
	
	variables['maxprevEtco2'] = maxprevEtco2;
	variables['minprevEtco2'] = minprevEtco2;
	variables['maxprevEtco2Date'] = maxprevEtco2Date;
	variables['minprevEtco2Date'] = minprevEtco2Date;
	variables['prevEtco2Low'] = prevEtco2Low;
	variables['prevEtco2High'] = prevEtco2High;
	
	variables['hbLow'] = hbLow;
	variables['minhb'] = minhb;
	variables['minhbdate'] = minhbdate;
	variables['minhb_prev'] = minhb_prev;
	variables['minhb_prevdate'] = minhb_prevdate;
	variables['hcLow'] = hcLow;
	variables['minhc'] = minhc;
	variables['minhcdate'] = minhcdate;
	variables['minhc_prev'] = minhc_prev;
	variables['minhc_prevdate'] = minhc_prevdate;
	
	variables['maxptinr'] = maxptinr;
	variables['minptinr'] = minptinr;
	variables['maxptinrDate'] = maxptinrDate;
	variables['minptinrDate'] = minptinrDate;
	variables['ptinrLow'] = ptinrLow;
	variables['ptinrHigh'] = ptinrHigh;
	
	variables['maxaptt'] = maxaptt;
	variables['minaptt'] = minaptt;
	variables['maxapttDate'] = maxapttDate;
	variables['minapttDate'] = minapttDate;
	variables['apttLow'] = apttLow;
	variables['apttHigh'] = apttHigh;
	
	variables['maxmap'] = maxmap;
	variables['minmap'] = minmap;
	variables['maxmapDate'] = maxmapDate;
	variables['minmapDate'] = minmapDate;
	variables['mapLow'] = mapLow;
	variables['mapHigh'] = mapHigh;
	
	variables['maxband'] = maxband;
	variables['minband'] = minband;
	variables['maxbandDate'] = maxbandDate;
	variables['minbandDate'] = minbandDate;
	variables['bandLow'] = bandLow;
	variables['bandHigh'] = bandHigh;
	
	variables['maxbicarbonate'] = maxbicarbonate;
	variables['minbicarbonate'] = minbicarbonate;
	variables['maxbicarbonateDate'] = maxbicarbonateDate;
	variables['minbicarbonateDate'] = minbicarbonateDate;
	variables['bicarbonateLow'] = bicarbonateLow;
	variables['bicarbonateHigh'] = bicarbonateHigh;
	
	variables['maxbilirubin'] = maxbilirubin;
	variables['minbilirubin'] = minbilirubin;
	variables['maxbilirubinDate'] = maxbilirubinDate;
	variables['minbilirubinDate'] = minbilirubinDate;
	variables['bilirubinLow'] = bilirubinLow;
	variables['bilirubinHigh'] = bilirubinHigh;
	
	variables['maxplt'] = maxplt;
	variables['minplt'] = minplt;
	variables['maxpltDate'] = maxpltDate;
	variables['minpltDate'] = minpltDate;
	variables['pltLow'] = pltLow;
	variables['pltHigh'] = pltHigh;
	
	variables['panwbc'] = panwbc;
	variables['panrbc'] = panrbc;
	variables['panplt'] = panplt;
	variables['panwbcLow'] = panwbcLow;
	variables['panrbcLow'] = panrbcLow;
	variables['panpltLow'] = panpltLow;
	variables['panDate'] = panDate;
	return variables;
}

function buildCCbody(){
	$('#ccbody').html("");
	var result = 0;
	var tableBody = "";
	var variables = {};
	
	variables = populateVariables(variables);
	
	//UTI variables setting start
	var urinest = "";
	var urinestdate = "";
	if (equalsIgnoreCase("NEGATIVE", maxurinest)){
	    urinest = minurinest;
	    urinestdate = minurinestDate;
	   }
	else{
			urinest = maxurinest;
			urinestdate = maxurinestDate;
		}
	var urini = "";
	var urinidate = "";
	if (equalsIgnoreCase("NEGATIVE", maxurini)){
	    urini = minurini;
	    urinidate = minuriniDate;
	   }
	else{
			urini = maxurini;
			urinidate = maxuriniDate;
	 }
	variables['maxUrWBC'] = maxUtiWbc;
	//alert("maxUtiWbc: "+maxUtiWbc); 
	//urini = 'SMALL';
	variables['urnNitrite'] = "'"+urini+"'";
	//alert("urini: "+urini);
	variables['urnLeucEster'] = "'"+urinest+"'";
	//alert("urinest: "+urinest);
	//UTI variables setting end
	if (!Object.keys) {
		Object.keys = function(obj) {
			var keys = [];
	
			for (var i in obj) {
			  if (obj.hasOwnProperty(i)) {
				keys.push(i);
			  }
			}
	
			return keys;
		};
	}
	
	var rb_result = processRules(ruleJSON, variables, labValuesDictionary);
	console.log('***********************************************************************************');
	console.log(rb_result);
	tableBody += "<table width='100%' bgcolor='white'><col width='5%'><col width='95%'><tr><td></td><td>"
			  + "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
			  
	tableBody += buildComorbDisplay(rb_result, tableBody);
	
	if (newCC == 0 && pcArr.length > 0){ tableBody += "<tr><td>There are no new computed comorbidities at this time.</td></tr>"; }
	else if (newCC == 0 && pcArr.length == 0){ tableBody += "<tr><td>There are no computed comorbidities at this time.</td></tr>"; }
	
	tableBody += "</td></tr></table>";
	$('#ccbody').html(tableBody);
	$('#ccbody').show();
	return;
}


function buildOCheader(){
var tableBody = "";
tableBody += "<table width='100%' bgcolor='white'>"
		  + "<tr><td><br><p class='test' onclick='javascript:expandcollapse(\"ocarrow\",\"ocbody\");'>Other CoMorbidities/Clinical Conditions&nbsp;&nbsp;"
		  + "<img id='ocarrow' border='0' src='"+arrowdownimg+"' alt='Click to collapse' /></p></td></tr>"
		  + "</table>";
$('#ocheader').html(tableBody);	
return;
}

function buildOCbody(){
$('#ocbody').html("");
var tableBody = "";
tableBody += "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
		  + "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
if ($.inArray("^Anoxic Brain Injury^",pcArr) == -1){
	tableBody += "<tr><td><br><input id='ipAbi' type='checkbox' value='Anoxic Brain Injury'>Anoxic Brain Injury</td></tr>";
	}
if ($.inArray("^Coma^",pcArr) == -1){
	tableBody += "<tr><td><br><input id='ipComa' type='checkbox' value='Coma'>Coma</td></tr>";
	}
if ($.inArray("^Decubitis Ulcer^",pcArr) == -1){
	tmpw = 340;
	tmph = 200;
	tmpmt = -25;
	tmpml = 30;
	tableBody += "<tr><td><br>"
		  + "<input id='ipDu' type='checkbox' value='GROUP' onclick='otherForm(\"du\",\"ipDu\");'>Decubitis Ulcer"
		  + "<div id='du' style='display: none; margin-left: 60px;'><table>"
		  + "<tr onmouseover='javascript:mouseOverPara(\"imageUlcer1\",\"stage1\");' onmouseout='javascript:mouseOutPara(\"imageUlcer1\",\"stage1\");'><td id='stage1'>"
		  + "<br><input id='ipDu1' type='checkbox' name='duChkgrp' value='Decubitis Ulcer:Stage 1'>Stage 1</td>"
		  + "<td><a id='imageUlcer1' onmouseover='javascript:makeDivVisible(\"stage1div\");' onmouseout='javascript:makeDivHidden(\"stage1div\");' style='visibility: hidden;'>"
          + "<img src='"+button1img+"' alt='Details'/></a></td>"
		  + "<td><div id='stage1div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
		  + "<div id='stage1div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
		  + "<p>Stage 1:</p><p>Pressure Pre-Ulcer skin changes limited to persistent focal erythema</p>"
		  + "</div></div></td></tr>"
		  + "<tr onmouseover='javascript:mouseOverPara(\"imageUlcer2\",\"stage2\");' onmouseout='javascript:mouseOutPara(\"imageUlcer2\",\"stage2\");'><td id='stage2'>"
		  + "<br><input id='ipDu2' type='checkbox' name='duChkgrp' value='Decubitis Ulcer:Stage 2'>Stage 2</td>"
		  + "<td><a id='imageUlcer2' onmouseover='javascript:makeDivVisible(\"stage2div\");' onmouseout='javascript:makeDivHidden(\"stage2div\");' style='visibility: hidden;'>"
          + "<img src='"+button1img+"' alt='Details'/></a></td>"
		  + "<td><div id='stage2div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
		  + "<div id='stage2div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
		  + "<p>Stage 2:</p><p>Pressure ulcer with abrasion, blister, partial thickness skin loss involving epidermis and/or dermis</p>"
		  + "</div></div></td></tr>"
		  + "<tr onmouseover='javascript:mouseOverPara(\"imageUlcer3\",\"stage3\");' onmouseout='javascript:mouseOutPara(\"imageUlcer3\",\"stage3\");'><td id='stage3'>"
		  + "<br><input id='ipDu3' type='checkbox' name='duChkgrp' value='Decubitis Ulcer:Stage 3'>Stage 3</td>"
		  + "<td><a id='imageUlcer3' onmouseover='javascript:makeDivVisible(\"stage3div\");' onmouseout='javascript:makeDivHidden(\"stage3div\");' style='visibility: hidden;'>"
          + "<img src='"+button1img+"' alt='Details'/></a></td>"
		  + "<td><div id='stage3div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
		  + "<div id='stage3div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
		  + "<p>Stage 3:</p><p>Pressure ulcer with partial thickness skin loss involving damage or necrosis of subcutaneous tissue</p>"
		  + "</div></div></td></tr>"
		  + "<tr onmouseover='javascript:mouseOverPara(\"imageUlcer4\",\"stage4\");' onmouseout='javascript:mouseOutPara(\"imageUlcer4\",\"stage4\");'><td id='stage4'>"
		  + "<br><input id='ipDu4' type='checkbox' name='duChkgrp' value='Decubitis Ulcer:Stage 4'>Stage 4</td>"
		  + "<td><a id='imageUlcer4' onmouseover='javascript:makeDivVisible(\"stage4div\");' onmouseout='javascript:makeDivHidden(\"stage4div\");' style='visibility: hidden;'>"
          + "<img src='"+button1img+"' alt='Details'/></a></td>"
		  + "<td><div id='stage4div' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
		  + "<div id='stage4div' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
		  + "<p>Stage 4:</p><p>Pressure ulcer with necrosis of soft tissue through to underlying muscle, tendon, or bone</p>"
		  + "</div></div></td></tr>"
		  + "<tr><td><br><input id='ipDu5' type='checkbox' name='duChkgrp' value='Decubitis Ulcer:Unstageable'>Unstageable</td><td></td><td></td></tr>"
		  + "<tr><td><br><input id='ipDu6' type='checkbox' name='duChkgrp' value='Decubitis Ulcer:Unspecified Stage'>Unspecified Stage</td><td></td><td></td></tr>"
		  + "<tr><td><br>Site:&nbsp;&nbsp;<input type='Text' id='ipDuSite' name='ipDuSite' size='10'/></td><td></td><td></td></tr>"
		  + "</table></div>"
		  + "</td></tr>";
	}
if ($.inArray("^Delirium^",pcArr) == -1){
	tableBody += "<tr><td><br><input id='ipDelirium' type='checkbox' value='GROUP' onclick='javascript:otherForm(\"delirium\",\"ipDelirium\");'>Delirium"
		  + "<div id='delirium' style='display: none; margin-left: 60px;'>"
		  + "<br><input id='ipDelirium1' type='checkbox' name='delichkgrp' value='Delirium:Infection'>Infection"
		  + "<br><br><input id='ipDelirium2' type='checkbox' name='delichkgrp' value='Delirium:Drugs or toxin'>Drugs or toxin"
		  + "<br><br><input id='ipDelirium3' type='checkbox' name='delichkgrp' value='Delirium:Metabolic Effect'>Metabolic Effect"
		  + "<br><br><input id='None of the Above' type='checkbox' name='delichkgrp' value='Delirium:None of the Above'>None of the Above"
		  + "</div></td></tr>";
	}
if ($.inArray("^Encephalopathy^",pcArr) == -1){
	tableBody += "<tr><td><br><input id='ipEncephalopathy' type='checkbox' value='GROUP'"
		  + " onclick='javascript:otherForm(\"encephalopathy\",\"ipEncephalopathy\");'>Encephalopathy"
		  + "<div id='encephalopathy' style='display: none; margin-left: 60px;'>"
		  + "<br><input id='ipencephalopathy1' type='checkbox' name='encchkGrp' value='Encephalopathy:Metabolic Encephalopathy'>Metabolic Encephalopathy"
		  + "<br><br><input id='ipencephalopathy2' type='checkbox' name='encchkGrp' value='Encephalopathy:Hepatic Encephalopathy'>Hepatic Encephalopathy"
		  + "<br><br><input id='ipencephalopathy3' type='checkbox' name='encchkGrp' value='Encephalopathy:Septic Encephalopathy'>Septic Encephalopathy"
		  + "<br><br><input id='ipencephalopathy4' type='checkbox' name='encchkGrp' value='Encephalopathy:Toxic Encephalopathy'>Toxic Encephalopathy"
		  + "<br><br><input id='ipencephalopathy5' type='checkbox' name='encchkGrp' value='Encephalopathy:Hypertensive Encephalopathy'>Hypertensive Encephalopathy"
		  + "<br><br><input id='ipencephalopathy6' type='checkbox' name='encchkGrp' value='Encephalopathy:Anoxic Encephalopathy'>Anoxic Encephalopathy"
		  + "<br><br><input id='ipencephalopathy7' type='checkbox' name='encchkGrp' value='Encephalopathy:Alcoholic Encephalopathy'>Alcoholic Encephalopathy"
		  + "<br><br><input id='ipencephalopathy8' type='checkbox' name='encchkGrp' value='Encephalopathy:None'>None"
		  + "</div></td></tr>";
	}
tableBody += "<tr><td><br><input id='comments' type='checkbox' value='Other Non-Listed CoMorbidities'>Other Non-Listed CoMorbidities:"
		  + "<br><font size='2'>Note: Please separate each comorbidity with a comma</font>"
		  + "<br><textarea id='commentsid' cols='40' rows='5' ></textarea></td></tr>"
		  + "</table>"
		  + "<br></td></tr></table>";
$('#ocbody').html(tableBody);
//$('#ocbody').hide();
return;
}


function expandcollapse(header,body){
	
if ($('#'+header).prop('src').indexOf('arrow-down.gif') > 0){
	$('#'+header).attr('src',arrowupimg);
	$('#'+header).attr('alt','Click to expand');
	$('#'+body).hide();
	// Hardcoding for toggling SHOW/HIDE text for Previously committed comorbidities
	if (header === 'pcarrow') {
		$('#showhide').text('SHOW')
		}
	}
else{
	$('#'+header).attr('src',arrowdownimg);
	$('#'+header).attr('alt','Click to collapse');
	$('#'+body).show();
	if (header === 'pcarrow') {
		$('#showhide').text('HIDE')
		}
	}
return;
}

function unCheck(checkBoxMain,subGrp){
if (document.getElementById(checkBoxMain).checked == false){
	$('#'+subGrp).find('input[type=checkbox]:checked').removeAttr('checked');
	}
return;
}

function checkMain(checkBoxMain,subGrp){
$('#'+checkBoxMain).attr('checked','checked');
if ($('#'+subGrp).find('input[type=checkbox]:checked').length == 0){
	$('#'+checkBoxMain).removeAttr('checked');
	}
return;
}

function checkMain1(checkBoxMain,subGrp,comorbId){
checkMain(checkBoxMain,subGrp);
if (document.getElementById(comorbId).checked == 1){
	document.getElementById(comorbId+'stage1').style.display = "block";
	document.getElementById(comorbId+'stage2').style.display = "block";
	document.getElementById(comorbId+'stage3').style.display = "block";
	document.getElementById(comorbId+'stage4').style.display = "block";
	document.getElementById(comorbId+'stage5').style.display = "block";
	}
else{
	document.getElementById(comorbId+'stage1').style.display = "none";
	document.getElementById(comorbId+'stage2').style.display = "none";
	document.getElementById(comorbId+'stage3').style.display = "none";
	document.getElementById(comorbId+'stage4').style.display = "none";
	document.getElementById(comorbId+'stage5').style.display = "none";
	$('#'+comorbId+'stage1').find('input[type=checkbox]:checked').removeAttr('checked');
	$('#'+comorbId+'stage2').find('input[type=checkbox]:checked').removeAttr('checked');
	$('#'+comorbId+'stage3').find('input[type=checkbox]:checked').removeAttr('checked');
	$('#'+comorbId+'stage4').find('input[type=checkbox]:checked').removeAttr('checked');
	$('#'+comorbId+'stage5').find('input[type=checkbox]:checked').removeAttr('checked');
	}
return;
}

function checkMain2(checkBoxMain,subGrp,comorbId){
checkMain(checkBoxMain,subGrp);
if (comorbId != "ipSIRSseveresepsis"){ $('#'+comorbId).attr('checked','checked'); }
else{
	if (document.getElementById("ipSIRSsepticshock").checked == 1){ $('#'+comorbId).attr('checked','checked'); }
	$('#SIRSsepsisID').attr('checked','checked'); 
	}
return;
}

function checkMain3(checkBoxMain,subGrp,comorbId){
checkMain(checkBoxMain,subGrp);
if (document.getElementById(comorbId).checked == 1){
	document.getElementById('SIRSsepsisseveresepsis').style.display = "block";
	document.getElementById('SIRSsepsissepticshock').style.display = "block";
	}
else{
	document.getElementById('SIRSsepsisseveresepsis').style.display = "none";
	document.getElementById('SIRSsepsissepticshock').style.display = "none";
	$('#SIRSsepsisseveresepsis').find('input[type=checkbox]:checked').removeAttr('checked');
	$('#SIRSsepsissepticshock').find('input[type=checkbox]:checked').removeAttr('checked');
	}
return;
}

function otherForm(comorbId,input){
if (document.getElementById(input).checked == 1){ document.getElementById(comorbId).style.display = "block"; }
else{
	$('#'+comorbId).find('input[type=checkbox]:checked').removeAttr('checked');
	document.getElementById(comorbId).style.display = "none";
	}
return;	
}

function mouseOverPara(imageID,col1){
hidePDF(true,'PC')
hidePDF(false,'Radiology')
hidePDF(false,'ECG')
document.getElementById(imageID).style.visibility = "visible";
document.getElementById(col1).style.background = "#DEDFFA";
return;
}

function mouseOutPara(imageID,col1){
document.getElementById(imageID).style.visibility = "hidden";
document.getElementById(col1).style.background = "white";
return;
}

function makeDivVisible(divId){
document.getElementById(divId).style.display = "block";
return;
}

function makeDivHidden(divId){
	//$("#"+divId).hide('fade', 5000);
document.getElementById(divId).style.display = "none"; 
return;
}

function getHelp(comorb){
var tableBody = "";
if (comorb == "Acid Base Disorder"){
	tableBody += "<h2 align='center'>Acid Base Disorder</h2><br>"
			  + "<p align='center'>The following are the conditions for Acid Base Disorder:</p>"
			  + "<ul><li><b>Metabolic Acidosis</b>: if minimum Serum Bicarbonate < 18 mEq/l</li><br>"
			  + "<li><b>Metabolic Alkalosis</b>: if maximum Serum Bicarbonate > 30 mEq/l</li></ul>";
	}
else if (comorb == "Anemia"){
	tableBody += "<h2 align='center'>Anemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Anemia:</p>"
			  + "<ul><li><b>Acute</b>: if minimum Hemoglobin < Normal Low from database or minimum Hematocrit < Normal Low from database and "
			  + "both previous minimum Hemoglobin and Hematocrit are available and are > Normal Low from database</li><br>"
              + "<li><b>Chronic</b>: if minimum Hemoglobin < Normal Low from database or minimum Hematocrit < Normal Low from database and "
			  + "both previous minimum Hemoglobin and Hematocrit are < Normal Low from database</li></ul>"
			  + "<br><br>"
			  + "Reference: WHO:Hgb concentrations for the diagnosis of anemia and the assessment of severity.";
	}
else if (comorb == "Dehydration"){
	tableBody += "<h2 align='center'>Dehydration</h2><br>"
			  + "<p align='center'>The following are the conditions for Dehydration:</p>"
			  + "<ul><li>The ratio of maximum BUN/maximum Creatinine > 20 for age up to 1 year</li><br>"
              + "<li>The ratio of maximum BUN/maximum Creatinine > 30 for age > 1 year </li></ul>";
	}
else if (comorb == "Hypokalemia"){
	tableBody += "<h2 align='center'>Hypokalemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypokalemia:</p>"
			  + "<ul><li>If minimum Potassium < Normal Low from database</li></ul>";
	}
else if (comorb == "Hyperkalemia"){
	tableBody += "<h2 align='center'>Hyperkalemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hyperkalemia:</p>"
			  + "<ul><li>If maximum Potassium > Normal High from database</li></ul>";
	}
else if (comorb == "Hyponatremia"){
	tableBody += "<h2 align='center'>Hyponatremia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hyponatremia:</p>"
			  + "<ul><li>If minimum Sodium < Normal Low from atabase</li></ul>";
	}
else if (comorb == "Hypernatremia"){
	tableBody += "<h2 align='center'>Hypernatremia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypernatremia:</p>"
			  + "<ul><li>If maximum Sodium > Normal High from database</li></ul>";
	}
else if (comorb == "Hypocalcemia"){
	tableBody += "<h2 align='center'>Hypocalcemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypocalcemia:</p>"
			  + "<ul><li>If minimum Calcium < Normal Low from database</li></ul>";
	}
else if (comorb == "Hypercalcemia"){
	tableBody += "<h2 align='center'>Hypercalcemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypercalcemia:</p>"
			  + "<ul><li>If maximum Calcium > Normal High from database</li></ul>";
	}
else if (comorb == "Hypophosphatemia"){
	tableBody += "<h2 align='center'>Hypophosphatemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypophosphatemia:</p>"
			  + "<ul><li>If minimum Phosphorus < Normal Low from database</li></ul>";
	}
else if (comorb == "Hyperphosphatemia"){
	tableBody += "<h2 align='center'>Hyperphosphatemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hyperphosphatemia:</p>"
			  + "<ul><li>If maximum Phosphorus > Normal high from database</li></ul>";
	}
else if (comorb == "Hypomagnesemia"){
	tableBody += "<h2 align='center'>Hypomagnesemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypomagnesemia:</p>"
			  + "<ul><li>If minimum Magnesium < Normal Low from database</li></ul>";
	}
else if (comorb == "Hypermagnesemia"){
	tableBody += "<h2 align='center'>Hypermagnesemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypermagnesemia:</p>"
			  + "<ul><li>If maximum Magnesium > Normal High from database</li></ul>";
	}
else if (comorb == "Elevated Blood Glucose"){
	tableBody += "<h2 align='center'>Elevated Blood Glucose</h2><br>"
			  + "<p align='center'>The following are the conditions for Elevated Blood Glucose:</p>"
			  + "If maximum glucose > 140"
			  + "<ul><li><b>Hyperglycemia</b></li><br>"
			  + "<li><b>Diabetes Type 1 with Hyperglycemia </b></li><br>"
			  + "<li><b>Diabetes Type 2 with Hyperglycemia </b></li><br>"
			  + "<li><b>Diabetes with Hyperglycemia and Nephropathy</b>: also if maximum Creatinine > Normal High from database</li></ul>"
			  + "<br><br>"
			  + "Reference: criteria from the ADA";
	}
else if (comorb == "Granulocytopenia"){
	tableBody += "<h2 align='center'>Granulocytopenia</h2><br>"
			  + "<p align='center'>The following are the conditions for Granulocytopenia:</p>"
			  + "<ul><li>If minimum Neutrophil < Normal Low from database</li></ul>";
	}
else if (comorb == "Hypercholesterolemia"){
	tableBody += "<h2 align='center'>Hypercholesterolemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypercholesterolemia:</p>"
			  + "<ul><li>If maximum Cholesterol > 200</li></ul>";
	}
else if (comorb == "Hypertension"){
	tableBody += "<h2 align='center'>Hypertension</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypertension:</p>"
			  + "If Systolic Blood Pressure > 140 or Diastolic Blood Pressure > 90"
			  + "<ul><li><b>Hypertension</b></li><br>"
			  + "<li><b>Elevated Blood Pressure</b>: if there is no known history of hypertension</li></ul>"
			  + "<br><br>"
			  + "Reference: 2010 ACCF/AHA Guidelines for the Assessment of Cardiovascular Risk in Asymptomatic Adults";
	}
else if (comorb == "Hypoglycemia"){
	tableBody += "<h2 align='center'>Hypoglycemia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypoglycemia:</p>"
			  + "<ul><li>If minimum Glucose < Normal Low from database</li></ul>";
	}
else if (comorb == "Hypotension"){
	tableBody += "<h2 align='center'>Hypotension</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypotension:</p>"
			  + "<ul><li>If minimum Systolic Blood Pressure < 90</li></ul>"
			  + "<br>*** Responsive to fluid resuscitation";
	}
else if (comorb == "Hypoxia"){
	tableBody += "<h2 align='center'>Hypoxia</h2><br>"
			  + "<p align='center'>The following are the conditions for Hypoxia:</p>"
			  + "<ul><li>If minimum Pulse Oximetry < 90</li></ul>";
	}
else if (comorb == "Kidney Injury"){
	tableBody += "<h2 align='center'>Kidney Injury</h2><br>"
			  + "<p align='center'>The following are the conditions for Kidney Injury:</p>"
			  + "<ul><li><b>Acute</b>: (if maximum Creatinine > 1.2 and previous maximum Creatinine is not available or <= 1.2) or "
			  + "(maximum Creatinine > (1.5 x previous maximum Creatinine))</li><br>"
			  + "<li><b>Chronic</b>: if maximum Creatinine > 1.2 and previous maximum Creatinine > 1.2<br>"
			  + "    - <b>Stage 1</b>: if maximum GFR >= 90<br>"
			  + "    - <b>Stage 2</b>: if maximum GFR >= 60 and < 90<br>"
			  + "    - <b>Stage 3</b>: if maximum GFR >= 30 and < 60<br>"
			  + "    - <b>Stage 4</b>: if maximum GFR >= 15 and < 30<br>"
			  + "    - <b>Stage 5</b>: if maximum GFR < 15</li><br>"
			  + "<li><b>Acute on Chronic</b>: if maximum Creatinine > 1.2 and previous maximum Creatinine > 1.2 and "
			  + "maximum Creatinine > (1.5 x previous maximum Creatinine)<br>"
			  + "    - <b>Stage 1</b>: if maximum GFR >= 90<br>"
			  + "    - <b>Stage 2</b>: if maximum GFR >= 60 and < 90<br>"
			  + "    - <b>Stage 3</b>: if maximum GFR >= 30 and < 60<br>"
			  + "    - <b>Stage 4</b>: if maximum GFR >= 15 and < 30<br>"
			  + "    - <b>Stage 5</b>: if maximum GFR < 15</li></ul>"
              + "<br><br>"
			  + "Reference: Uses guidelines from KDIGO Clinical Practice Guidelines for Acute Kidney Injury. Supp. 2012:2 1-38 and KDIGO 2012 Evaluation and Management of Chronic Kidney disease. Supp 2013:3 19-62";
	}
else if (comorb == "Lactic Acidosis"){
	tableBody += "<h2 align='center'>Lactic Acidosis</h2><br>"
			  + "<p align='center'>The following are the conditions for Lactic Acidosis:</p>"
			  + "<ul><li>If maximum Lactic Acid > 2.0</li></ul>";
	}
else if (comorb == "Malnutrition"){
	tableBody += "<h2 align='center'>Malnutrition</h2><br>"
			  + "<p align='center'>The following are the conditions for Malnutrition:</p>"
			  + "BMI is calculated using minimum Weight and maximum Height"
			  + "<ul><li><b>Underweight</b>: if BMI >= 18 and < 20</li><br>"
			  + "<li><b>Mild</b>: if BMI >= 17 and < 18</li><br>"
			  + "<li><b>Moderate</b>: if BMI >= 16 and < 17</li><br>"
			  + "<li><b>Severe</b>: if BMI < 16</li></ul>"
			  + "<br><br>"
			  + "Reference: Uses guidelines adapted from the ASPEN Consensus";
	}
else if (comorb == "Morbid Obesity"){
	tableBody += "<h2 align='center'>Morbid Obesity</h2><br>"
			  + "<p align='center'>The following are the conditions for Morbid Obesity:</p>"
			  + "BMI is calculated using minimum Weight and maximum Height<br>"
			  + "<ul><li>If BMI > 40</li></ul>";
	}
else if (comorb == "Obesity"){
	tableBody += "<h2 align='center'>Obesity</h2><br>"
			  + "<p align='center'>The following are the conditions for Obesity:</p>"
			  + "BMI is calculated using minimum Weight and maximum Height<br>"
			  + "<ul><li>If BMI > 30 and < 40</li></ul>";
	}
else if (comorb == "Pancytopenia"){
	tableBody += "<h2 align='center'>Pancytopenia</h2><br>"
			  + "<p align='center'>The following are the conditions for Pancytopenia:</p>"
			  + "If minimum WBC Count < Normal Low from database and minimum RBC Count < Normal Low from database and minimum PLT Count < Normal Low from database"
			  + "<ul><li><b>Due to Chemotherapy</b></li><br>"
			  + "<li><b>Due to Drugs</b></li><br>"
			  + "<li><b>Not otherwise specified</b></li></ul>";
	}
else if (comorb == "Respiratory Failure"){
	tableBody += "<h2 align='center'>Respiratory Failure</h2><br>"
			  + "<p align='center'>The following are the conditions for Respiratory Failure:</p>"
			  + "<ul><li><b>Acute</b>: if minimum PO2 <= 60 or minimum Pulse Oximetry <= 90</li><br>"
			  + "<li><b>Chronic</b>: if (maximum PCO2 > 45 or maximum ETCO2 > 45) and (previous maximum PCO2 > 45 or previous maximum ETCO2 > 45)</li><br>"
			  + "<li><b>Acute on Chronic</b>: if Acute is true and Chronic is true</li></ul>"
			  + "<br><br>"
			  + "Reference: Medscape: Respiratory Failure: www.emedicine.com";
	}
else if (comorb == "Shock"){
	tableBody += "<h2 align='center'>Shock</h2><br>"
			  + "<p align='center'>The following are the conditions for Shock:</p>"
			  + "If minimum Systolic Blood Pressure < 90"
			  + "<ul><li><b>Cardiogenic Shock</b>: also if maximum Cardiac Troponin > Normal High from database</li><br>"
			  + "<li><b>Hypovolemic</b></li><br>"
			  + "<li><b>Not otherwise specified</b></li></ul>"
			  + "<br><br>"
			  + "Reference: www.Uptodate.com- 5/15/13- Shock in Adults: Types, presentation, and diagnostic approach";
	}
else if (comorb == "SIRS"){
	tableBody += "<h2 align='center'>SIRS/Sepsis</h2><br>"
			  + "<p align='center'>The following are the conditions for SIRS/Sepsis:</p>"
			  + "For patients 18 years or older, if 2 of the following are true:<br>"
			  + "  - maximum Heart Rate > 90<br>"
			  + "  - maximum Respiratory Rate > 20<br>"
			  + "  - minimum WBC Count < 4k or maximum WBC Count > 12k<br>"
			  + "  - maximum Bands > 10%<br>"
			  + "  - minimum Temperature < 36.0 or maximum Temperature >= 38.3"
			  + "<ul><li><b>SIRS due to noninfectious process</b>: such as trauma, burn, pancreatitis, other pro-inflammatory conditions</li><br>"
			  + "<li><b>Sepsis due to suspected or actual infection</b>: if you select Sepsis, the application will look for indicators of Severe Sepsis or Septic Shock<br>"
			  + "   - <b>Severe Sepsis</b>: if maximum Lactic Acid > 2.0 or minimum Systolic Blood Pressure < 90 or minimum Mean Arterial Pressure < 65 or "
			  + "maximum Total Bilirubin > 2.0 or maximum Creatinine >= 2.0 or minimum PLT Count < 100k or maximum INR > 1.5 or maximum PTT > 60 (seconds)<br>"
			  + "   - <b>Septic Shock</b>: if maximum Lactic Acid >= 4.0 or minimum Systolic Blood Pressure < 90 (unresponsive to fluid bolus) or Mean Arterial Pressure < 65 (unresponsive to fluid bolus)</li></ul>"
			  + "<br><br>"
			  + "Reference: Surviving Sepsis Campaign: International Guidelines for Management of Severe Sepsis and Septic Shock; 2012. Crit.Care Medicine 2013";
	}
else if (comorb == "UTI"){
	tableBody += "<h2 align='center'>UTI</h2><br>"
			  + "<p align='center'>The following are the conditions for UTI:</p>"
			  + "<ul><li>If maximum Urinalysis WBC > 5.0 and either (Urinalysis Nitrite is not NEGATIVE or Urinalysis Leukocyte Esterase is not NEGATIVE)</li></ul>";
	}
$('#helpWindow').html(tableBody);
return;
}

function getHelpGuide(comorb){
var tableBody = "";
tableBody += "<h2 align='center'>A Quick \"How To\" Guide</h2><br>"
		  + "<ul>"
		  + "<li><b>Step 1:</b> Open a patient's chart."
		  + "<br><ul><li>On the left menu panel, click on the Co-Morbidity link.</li></ul></li>"
		  + "<img border='0' src='"+menuimg1+"' alt='Co-Morbidity link on the menu' width='200' height='575' />"
		  + "<br><br><br>"
		  + "<li><b>Step 2:</b> If the patient has applicable results that are available, comorbidities will display in the <b>Computed CoMorbidities/Clinical Conditions</b> section."
		  + "<br><ul><li>To validate the clinical indicators, hover over the text to display the values and the rules.</li></ul></li>"
		  + "<img border='0' src='"+menuimg2+"' alt='Computed CoMorbidities/Clinical Conditions section' width='600' height='500' />"
		  + "<br><br><br>"
		  + "<li><b>Step 3:</b> Select comorbidities by clicking the checkbox next to it.</li>"
		  + "<img border='0' src='"+menuimg3+"' alt='Click on the checkbox next to the comorbidity to select it' width='600' height='300' />"
		  + "<br><br>"
		  + "<li>Scroll through and validate other comorbidities and clinical conditions, if applicable.</li>"
		  + "<img border='0' src='"+menuimg4+"' alt='Other CoMorbidities/Clinical Conditions section' width='600' height='100' />"
		  + "<br><br><br>"
		  + "<li><b>Step 4:</b> When complete click on the COMMIT icon on the top of the application.</li>"
		  + "<img border='0' src='"+menuimg5+"' alt='COMMIT icon' />"
		  + "<br><br><br>"
		  + "<li><b>Step 5:</b> Pull the Comorbidities into a PowerNote."
		  + "<br><ul><li>Open a PowerNote and navigate to the <b>Impression and Plan</b> section."
		  + "<br><ul><li>Under <b>Diagnosis code search</b>, click on <b>OTHER</b>.</li></ul></li></ul></li>"
		  + "<img border='0' src='"+menuimg6+"' alt='OTHER on the Diagnosis code search in the Impression and Plan section' />"
		  + "<br><br>"
		  + "<li>Click on the Insert Template icon on the box that comes up."
		  + "<img border='0' src='"+menuimg7+"' alt='Insert Template icon' /></li>"
		  + "<br><br>"
		  + "<li>Double-click on the <b>*Co-Morbidities</b> template name on the Select Templates window."
		  + "<img border='0' src='"+menuimg8+"' alt='*Co-Morbidities template name on the Select Templates window' />"
		  + "<br><br>"
		  + "<li>Review and make edits if necessary. Then click <b>OK</b> to insert into the note.</li>"
		  + "<img border='0' src='"+menuimg9+"' alt='CoMorbidities added on PowerNote' width='600' height='300' />"
		  + "<br><br>"
		  + "<li>If the application is run at a later time on the same encounter, the <b>Previously Committed CoMorbidities/Clinical Conditions</b> section will be available."
		  + "<ul><li>The date &amp; time and the provider who committed the comorbidities will be displayed.</li>"
		  + "<li>You can view the results that were available at the time that the comorbidity was committed by hovering over the text.</li></ul></li>"
		  + "<img border='0' src='"+menuimg10+"' alt='Previously Committed CoMorbidities/Clinical Conditions section' width='600' height='200' />"
		  + "<br><br>"
		  + "<li><b>Help Notes:</b> If at any time you need help on using the application or if you wish to view the rules on how the comorbidities are computed, you can click on the HELP icon on the top of the application.</li>"
		  + "<img border='0' src='"+menuimg11+"' alt='HELP icon' />"
		  + "<br><br>"
		  + "<li>This will open the help window.</li>"
		  + "<img border='0' src='"+menuimg12+"' alt='help window' width='600' height='225' /></li>"
		  + "<br><br>"
		  + "<li>Click on the <b>How To Guide</b> link and it will open <b>A Quick \"How To\" Guide</b> on the right side of the help window.</li>"
		  + "<img border='0' src='"+menuimg13+"' alt='A Quick \"How To\" Guide on the right side of the help window' width='600' height='250' />"
		  + "<br><br>"
		  + "<li>Click on the <b>Open a printable version</b> to open a Microsoft Word document of the How To Guide."
		  + "<ul><li>A box will come up with a prompt to <b>Open</b>, <b>Save</b>, or <b>Cancel</b>.</li>"
		  + "<li>Click <b>Open</b> to open the Word document in a printer-friendly format.</li></ul></li>"
		  + "<img border='0' src='"+menuimg14+"' alt='Click Open to open the document in Microsoft Word in a printer-friendly format' />"
		  + "<br><br>"
		  + "<li>Click on the <b>Show Comorbidities Rules</b> to display the list of comorbidities."
		  + "<ul><li>Click on any comorbidity to display the rules for that comorbidity on the right side.</li></ul></li>"
		  + "<img border='0' src='"+menuimg15+"' alt='Comorbidity rules will be displayed on the right side of the help window' width='600' height='400' />"
		  + "<br><br>"
		  + "<li>When done, click on the Close Help icon on the top right of the help window and you will be taken back to the application.</li>"
		  + "<img border='0' src='"+menuimg16+"' alt='Click on the Close Help icon to close the help window' />"
		  + "</ul>";
$('#helpWindow').html(tableBody);
return;
}


function commit(){
var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();
var formattedDate = ((''+month).length < 2 ? '0' : '') + month + '/'
					+ ((''+day).length < 2 ? '0' : '') + day + '/' 
					+ d.getFullYear() + ' ' 
					+ ((''+hour).length < 2 ? '0' :'') + hour + ':' 
					+ ((''+minute).length < 2 ? '0' :'') + minute;
var nonechecked = 1;
var ccomorbstr = "";
var ocomorbstr = "";
var radcomorbstr = "";
var ecgcomorbstr = "";
var tmpstr = "";

$('#ccbody input:checked').each(function(){
	if ($(this).val() != "GROUP"){
		ccomorbstr += "^" + $(this).val() + "^";
		$(this).attr('checked', false);
		nonechecked = 0;
		}
	});
$('#ccbody input:checked').each(function(){
	if ($(this).val() == "GROUP"){ $(this).attr('checked', false); }
	});
$('#ocbody input:checked').each(function(){
	if ($(this).val() != "GROUP"){
		if ($(this).val() == "Other Non-Listed CoMorbidities"){
			tmpstr = $('#commentsid').val();
			tmpstr = tmpstr.replace(/[\n\r]/g,' ');
			ocomorbstr += "~Other CoMorbidities: " + tmpstr;
			$(this).attr('checked', false);
			nonechecked = 0;
			}
		else{
			ocomorbstr += "~" + $(this).val();
			$(this).attr('checked', false);
			nonechecked = 0;
			if (($(this).attr('id') == 'ipDu1' || $(this).attr('id') == 'ipDu2' || $(this).attr('id') == 'ipDu3'
				|| $(this).attr('id') == 'ipDu4' || $(this).attr('id') == 'ipDu5' || $(this).attr('id') == 'ipDu6')
				&& ($('#ipDuSite').val()).length > 0){
				ocomorbstr += "~Decubitis Ulcer:Site(" + $('#ipDuSite').val() + ")";
				$('#ipDuSite').val('');
				}
			}
		}
	});
$('#ocbody input:checked').each(function(){
	if ($(this).val() == "GROUP"){ $(this).attr('checked', false); }
	});
$('#sepsisOtherComments').val('');
$('#commentsid').val('');

/* Check Radiology comorbidities body*/
$('#rrbody input:checked').not('[value^="GROUP"]').each(function(){	
		if ($(this).attr("id") == 'rrComments')
		{
			if ($("#rrCommentsid").val() == '')
			{
				alert("Other comments not specified")
				nonechecked = 1;
				return false;
			}
			else
			{
				radcomorbstr +=   "~"+$("#rrCommentsid").val()+"^," + $("#rrCommentsid").val() ;
				nonechecked = 0;
			}
		}
		else
		{			
			radcomorbstr +=   $(this).val() ;
			nonechecked = 0;
		}
		$(this).attr('checked', false);		
	});
$('#rrbody input[value^=GROUP]:checked').each(function(){
	var data = $(this).val();
	data = data.split("#$#");	
    if (data.length == 4) // length should always be 4 after splitting with the tokenizer  
	{
		if (data[2] == 0) // if there are no 2nd or higher levels
		{
			radcomorbstr += "~"+data[1]+"^,"+data[3];
			nonechecked = 0;
		}
	}
	$(this).attr('checked', false);
	/*if ($(this).val() == "GROUP"){ 
		$(this).attr('checked', false); 
		}*/
	});

    /* Check ECG comorbidities body*/
$('#ecgbody input:checked').not('[value^="GROUP"]').each(function(){	
		if ($(this).attr("id") == 'ecgComments')
		{
			if ($("#ecgCommentsid").val() == '')
			{
				alert("Other comments not specified")
				nonechecked = 1;
				return false;
			}
			else
			{
				ecgcomorbstr +=   "~"+$("#ecgCommentsid").val()+"^," + $("#ecgCommentsid").val() ;
				nonechecked = 0;
			}
		}
		else
		{
			ecgcomorbstr +=   $(this).val() ;
			nonechecked = 0;
		}
		$(this).attr('checked', false);		
	});
$('#ecgbody input[value^=GROUP]:checked').each(function(){
	var data = $(this).val();    
	data = data.split("#$#");    
	if (data.length == 4)
	{
		if (data[2] == 0) // if there are no 2nd or higher levels
		{
			ecgcomorbstr += "~"+data[1]+"^,"+data[3];
			nonechecked = 0;
		}
	}    
	$(this).attr('checked', false);
	/*if ($(this).val() == "GROUP"){ 
		$(this).attr('checked', false); 
		}*/
	});

if (nonechecked == 1){
	alert("Please check off at least 1 CoMorbidity before Committing."); 
	}
else{
	addCE(ccomorbstr,ocomorbstr,radcomorbstr, ecgcomorbstr, formattedDate);
	}
return;
}

function addCE(val,ocval, radval, ecgval, currentdate){
$.blockUI({ message: '<h1>Submitting CoMorbidities. Please wait...</h1>' });
var comorbidities = "";
var result;
if (val.indexOf("^Anemia:Acute^") > -1){
	comorbidities += "~Anemia:Acute^";
	if (isEmpty(minhb) != true){ comorbidities += ',Hemoglobin (Latest): ' + minhb + " on "+minhbdate; }
    if (isEmpty(minhb_prev) != true){ comorbidities += ',Hemoglobin (Previous Visit): ' + minhb_prev + " on "+minhb_prevdate; }    
	if (isEmpty(minhc) != true){ comorbidities += ',Hematocrit (Latest): ' + minhc + " on "+minhcdate; }    
    if (isEmpty(minhc_prev) != true){ comorbidities += ',Hematocrit (Previous Visit): ' + minhc_prev + " on "+minhc_prevdate; }
	}
if (val.indexOf("^Anemia:Chronic^") > -1){
	comorbidities += "~Anemia:Chronic^";
	if (isEmpty(minhb) != true){ comorbidities += ',Hemoglobin (Latest): ' + minhb + " on "+minhbdate; }
    if (isEmpty(minhb_prev) != true){ comorbidities += ',Hemoglobin (Previous Visit): ' + minhb_prev + " on "+minhb_prevdate; }    
	if (isEmpty(minhc) != true){ comorbidities += ',Hematocrit (Latest): ' + minhc + " on "+minhcdate; }    
    if (isEmpty(minhc_prev) != true){ comorbidities += ',Hematocrit (Previous Visit): ' + minhc_prev + " on "+minhc_prevdate; }
	}
if (val.indexOf("^Anemia:NOS^") > -1){
	comorbidities += "~Anemia:NOS^";
	if (isEmpty(minhb) != true){ comorbidities += ',Hemoglobin (Latest): ' + minhb + " on "+minhbdate; }   
	if (isEmpty(minhc) != true){ comorbidities += ',Hematocrit (Latest): ' + minhc + " on "+minhcdate; }
	}
if (val.indexOf("^Anemia:Due to blood loss^") > -1){
	comorbidities += "~Anemia:Due to blood loss";
	if (isEmpty(minhb) != true){ comorbidities += ',Hemoglobin (Latest): ' + minhb + " on "+minhbdate; }   
	if (isEmpty(minhc) != true){ comorbidities += ',Hematocrit (Latest): ' + minhc + " on "+minhcdate; }
	}
if (val.indexOf("^Acid Base Disorder:Metabolic Acidosis^") > -1){
	comorbidities += "~Acid Base Disorder:Metabolic Acidosis^";  
	if (isEmpty(minbicarbonate) != true){ comorbidities += ',Serum Bicarbonate: '+minbicarbonate + " on "+minbicarbonateDate; }
	}
if (val.indexOf("^Acid Base Disorder:Metabolic Alkalosis^") > -1){
	comorbidities += "~Acid Base Disorder:Metabolic Alkalosis^";  
	if (isEmpty(maxbicarbonate) != true){ comorbidities += ',Serum Bicarbonate: '+maxbicarbonate + " on "+maxbicarbonateDate; }
	}
if (val.indexOf("^Pancytopenia:Due to Chemotherapy^") > -1){
	comorbidities += "~Pancytopenia:Due to Chemotherapy^";  
	if (isEmpty(panwbc) != true){ comorbidities += ',WBC Count: '+panwbc + " on "+panDate; }
	if (isEmpty(panrbc) != true){ comorbidities += ',RBC Count: '+panrbc + " on "+panDate; }
	if (isEmpty(panplt) != true){ comorbidities += ',PLT Count: '+panplt + " on "+panDate; }
	}
if (val.indexOf("^Pancytopenia:Due to Drugs^") > -1){
	comorbidities += "~Pancytopenia:Due to Drugs^";  
	if (isEmpty(panwbc) != true){ comorbidities += ',WBC Count: '+panwbc + " on "+panDate; }
	if (isEmpty(panrbc) != true){ comorbidities += ',RBC Count: '+panrbc + " on "+panDate; }
	if (isEmpty(panplt) != true){ comorbidities += ',PLT Count: '+panplt + " on "+panDate; }
	}
if (val.indexOf("^Pancytopenia:NOS^") > -1){
	comorbidities += "~Pancytopenia:NOS^";  
	if (isEmpty(panwbc) != true){ comorbidities += ',WBC Count: '+panwbc + " on "+panDate; }
	if (isEmpty(panrbc) != true){ comorbidities += ',RBC Count: '+panrbc + " on "+panDate; }
	if (isEmpty(panplt) != true){ comorbidities += ',PLT Count: '+panplt + " on "+panDate; }
	}
if (val.indexOf("^Kidney Injury:Acute^") > -1){
	comorbidities += "~Kidney Injury:Acute^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	}
if (val.indexOf("^Kidney Injury:Chronic^") > -1){
	comorbidities += "~Kidney Injury:Chronic^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	}
if (val.indexOf("^Kidney Injury:Chronic Stage 1^") > -1){
	comorbidities += "~Kidney Injury:Chronic Stage 1^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:Chronic Stage 2^") > -1){
	comorbidities += "~Kidney Injury:Chronic Stage 2^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:Chronic Stage 3^") > -1){
	comorbidities += "~Kidney Injury:Chronic Stage 3^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:Chronic Stage 4^") > -1){
	comorbidities += "~Kidney Injury:Chronic Stage 4^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:Chronic Stage 5^") > -1){
	comorbidities += "~Kidney Injury:Chronic Stage 5^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:Acute on Chronic^") > -1){
	comorbidities += "~Kidney Injury:Acute on Chronic^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	}
if (val.indexOf("^Kidney Injury:Acute on Chronic Stage 1^") > -1){
	comorbidities += "~Kidney Injury:Acute on Chronic Stage 1^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:Acute on Chronic Stage 2^") > -1){
	comorbidities += "~Kidney Injury:Acute on Chronic Stage 2^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:Acute on Chronic Stage 3^") > -1){
	comorbidities += "~Kidney Injury:Acute on Chronic Stage 3^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:Acute on Chronic Stage 4^") > -1){
	comorbidities += "~Kidney Injury:Acute on Chronic Stage 4^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:Acute on Chronic Stage 5^") > -1){
	comorbidities += "~Kidney Injury:Acute on Chronic Stage 5^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	if (isEmpty(maxgfrResult) != true){ comorbidities += ",GFR: " + maxgfrResult + " on "+maxgfrDate; }
	}
if (val.indexOf("^Kidney Injury:NOS^") > -1){
	comorbidities += "~Kidney Injury:NOS^";
	comorbidities += ",Creatinine (Latest): " + maxcreatResult + " on "+maxcreatDate;
	if (isEmpty(maxcreatprevResult) != true){ comorbidities += ",Creatinine (Previous Visit): " + maxcreatprevResult + " on "+maxcreatprevDate; }
	}
if (val.indexOf("^Underweight^") > -1){
	comorbidities += "~Underweight^";
	result = malnutrition(minweight,maxheight);
	comorbidities += ",Height: " + maxheight + " on "+maxheightDate
				  + ",Weight: " + minweight + " on "+minweightDate
				  + ",BMI: " + result;
	}
if (val.indexOf("^Malnutrition:Mild^") > -1){
	comorbidities += "~Malnutrition:Mild^";
	result = malnutrition(minweight,maxheight);
	comorbidities += ",Height: " + maxheight + " on "+maxheightDate
				  + ",Weight: " + minweight + " on "+minweightDate
				  + ",BMI: " + result;
	}
if (val.indexOf("^Malnutrition:Moderate^") > -1){
	comorbidities += "~Malnutrition:Moderate^";
	result = malnutrition(minweight,maxheight);
	comorbidities += ",Height: " + maxheight + " on "+maxheightDate
				  + ",Weight: " + minweight + " on "+minweightDate
				  + ",BMI: " + result;
	}
if (val.indexOf("^Malnutrition:Severe^") > -1){
	comorbidities += "~Malnutrition:Severe^";
	result = malnutrition(minweight,maxheight);
	comorbidities += ",Height: " + maxheight + " on "+maxheightDate
				  + ",Weight: " + minweight + " on "+minweightDate
				  + ",BMI: " + result;
	}
if (val.indexOf("^Morbid Obesity^") > -1){
	comorbidities += "~Morbid Obesity^";
	result = morbidObesity(maxweight, minheight);
	comorbidities += ",Height: " + minheight + " on "+minheightDate
				  + ",Weight: " + maxweight + " on "+maxweightDate
				  + ",BMI: " + result;
	}
if (val.indexOf("^Dehydration^") > -1){
	comorbidities += "~Dehydration^";
	result = dehydration(maxcreatResult,bunMaxResult,over1);
	comorbidities += ",Bun: " + bunMaxResult + " on "+bunMaxDate
				  + ",Creatinine: " + maxcreatResult + " on "+maxcreatDate
				  + ",Bun/Creatine Ratio: " + result;
	}
if (val.indexOf("^Elevated Blood Glucose:Hyperglycemia^") > -1){
	comorbidities += "~Elevated Blood Glucose:Hyperglycemia^";
	comorbidities += ",Glucose level: " + maxglucResult + " on "+maxglucDate;
	}
if (val.indexOf("^Elevated Blood Glucose:Diabetes Type 1 with Hyperglycemia^") > -1){
	comorbidities += "~Elevated Blood Glucose:Diabetes Type 1 with Hyperglycemia^";
	comorbidities += ",Glucose level: " + maxglucResult + " on "+maxglucDate;
	}
if (val.indexOf("^Elevated Blood Glucose:Diabetes Type 2 with Hyperglycemia^") > -1){
	comorbidities += "~Elevated Blood Glucose:Diabetes Type 2 with Hyperglycemia^";
	comorbidities += ",Glucose level: " + maxglucResult + " on "+maxglucDate;
	}
if (val.indexOf("^Elevated Blood Glucose:Diabetes with Hyperglycemia and Nephropathy^") > -1){
	comorbidities += "~Elevated Blood Glucose:Diabetes with Hyperglycemia and Nephropathy^";
	comorbidities += ",Glucose level: " + maxglucResult + " on "+maxglucDate;
	}
if (val.indexOf("^Hypoxia^") > -1){
	comorbidities += "~Hypoxia^";
	comorbidities += ",Pulse Oximetry level: " + minoximetry + " on "+minoximetryDate;
	}
if (val.indexOf("^Granulocytopenia^") > -1){
	comorbidities += "~Granulocytopenia^";
	comorbidities += ",Neutrophil (Minimum): " + minneutrophil + " on "+minneutrophilDate;
	}
if (val.indexOf("^Lactic Acidosis^") > -1){
	comorbidities += "~Lactic Acidosis^";
	comorbidities += ",Lactic Acid: " + maxLacticAcid + " on "+maxLacticAcidDate;
	}
if (val.indexOf("^Hypokalemia^") > -1){
	comorbidities += "~Hypokalemia^";
	comorbidities += ",Potassium: " + minpotassiumResult + " on "+minpotassiumDate;
	}
if (val.indexOf("^Hyperkalemia^") > -1){
	comorbidities += "~Hyperkalemia^";
	comorbidities += ",Potassium: " + maxpotassiumResult + " on "+maxpotassiumDate;
	}
if (val.indexOf("^Hyponatremia^") > -1){
	comorbidities += "~Hyponatremia^";
	comorbidities += ",Sodium: " + minsodiumResult + " on "+minsodiumDate;
	}
if (val.indexOf("^Hypernatremia^") > -1){
	comorbidities += "~Hypernatremia^";
	comorbidities += ",Sodium: " + maxsodiumResult + " on "+maxsodiumDate;
	}
if (val.indexOf("^Hypocalcemia^") > -1){
	comorbidities += "~Hypocalcemia^";
	comorbidities += ",Calcium: " + mincalciumResult + " on "+mincalciumDate;
	}
if (val.indexOf("^Hypercalcemia^") > -1){
	comorbidities += "~Hypercalcemia^";
	comorbidities += ",Calcium: " + maxcalciumResult + " on "+maxcalciumDate;
	}
if (val.indexOf("^Hypophosphatemia^") > -1){
	comorbidities += "~Hypophosphatemia^";
	comorbidities += ",Phosphorus: " + minphosphorusResult + " on "+minphosphorusDate;
	}
if (val.indexOf("^Hyperphosphatemia^") > -1){
	comorbidities += "~Hyperphosphatemia^";
	comorbidities += ",Phosphorus: " + maxphosphorusResult + " on "+maxphosphorusDate;
	}
if (val.indexOf("^Hypomagnesemia^") > -1){
	comorbidities += "~Hypomagnesemia^";
	comorbidities += ",Magnesium: " + minmagnesiumResult + " on "+minmagnesiumDate;
	}
if (val.indexOf("^Hypermagnesemia^") > -1){
	comorbidities += "~Hypermagnesemia^";
	comorbidities += ",Magnesium: " + maxmagnesiumResult + " on "+maxmagnesiumDate;
	}
if (val.indexOf("^Obesity^") > -1){
	comorbidities += "~Obesity^";
	result = obesity(maxweight, minheight);
	comorbidities += ",Height: "+minheight+" on "+minheightDate
				  + ",Weight: "+maxweight+" on "+maxweightDate
				  + ",BMI: "+result;
	}
if (val.indexOf("^Hypertension^") > -1){
	comorbidities += "~Hypertension^";
	if (isEmpty(maxsysBP) != true && isEmpty(maxdiasBP) != true){ comorbidities += ",Systolic BP/Diastolic BP: " + maxsysBP+"/"+maxdiasBP+" on "+maxsysBPDate; }
	if (isEmpty(lastsysBP) != true && isEmpty(lastdiasBP) != true){ comorbidities += ",Systolic BP/Diastolic BP(most recent): " + lastsysBP+"/"+lastdiasBP+" on "+lastsysBPDate; }
	}
if (val.indexOf("^Elevated Blood Pressure^") > -1){
	comorbidities += "~Elevated Blood Pressure^";
	if (isEmpty(maxsysBP) != true && isEmpty(maxdiasBP) != true){ comorbidities += ",Systolic BP/Diastolic BP: " + maxsysBP+"/"+maxdiasBP+" on "+maxsysBPDate; }
	if (isEmpty(lastsysBP) != true && isEmpty(lastdiasBP) != true){ comorbidities += ",Systolic BP/Diastolic BP(most recent): " + lastsysBP+"/"+lastdiasBP+" on "+lastsysBPDate; }
	}
if (val.indexOf("^UTI^") > -1 && val.indexOf("^UTI:Catheter Associated^") == -1){
	var urinest = "";
	var urinestdate = "";
	if (equalsIgnoreCase("NEGATIVE", maxurinest)){
		urinest = minurinest;
		urinestdate = minurinestDate;
		}
	else{
		urinest = maxurinest;
		urinestdate = maxurinestDate;
		}
	var urini = "";
	var urinidate = "";
	if (equalsIgnoreCase("NEGATIVE", maxurini)){
		urini = minurini;
		urinidate = minuriniDate;
		}
	else{
		urini = maxurini;
		urinidate = maxuriniDate;
		}
	comorbidities += "~UTI^";
	comorbidities += ",WBC Count: " + maxUtiWbc + " on "+maxUtiWbcDate;
	if (equalsIgnoreCase("POSITIVE", maxurini) || equalsIgnoreCase("LARGE", maxurini) || equalsIgnoreCase("MOD", maxurini) || 
			equalsIgnoreCase("SMALL", maxurini) || equalsIgnoreCase("TRACE", maxurini)){
			comorbidities += ",Urinalysis Nitrite: "+urini+" on "+urinidate;
		}
	if (equalsIgnoreCase(maxurinest,"POSITIVE")|| equalsIgnoreCase(maxurinest,"LARGE") || equalsIgnoreCase( maxurinest,"MOD") || 
			equalsIgnoreCase(maxurinest,"SMALL") || equalsIgnoreCase(maxurinest,"TRACE")){
			comorbidities += ",Urinalysis Leukocyte Esterase: "+urinest+" on "+urinestdate;
		}
	}
if (val.indexOf("^UTI:Catheter Associated^") > -1){
	var urinest = "";
	var urinestdate = "";
	if (equalsIgnoreCase("NEGATIVE", maxurinest)){
		urinest = minurinest;
		urinestdate = minurinestDate;
		}
	else{
		urinest = maxurinest;
		urinestdate = maxurinestDate;
		}
	var urini = "";
	var urinidate = "";
	if (equalsIgnoreCase("NEGATIVE", maxurini)){
		urini = minurini;
		urinidate = minuriniDate;
		}
	else{
		urini = maxurini;
		urinidate = maxuriniDate;
		}
	comorbidities += "~UTI:Catheter Associated^";
	comorbidities += ",WBC Count: " + maxUtiWbc + " " + maxUtiWbcDate;
	if (equalsIgnoreCase("POSITIVE", maxurini) || equalsIgnoreCase("LARGE", maxurini) || equalsIgnoreCase("MOD", maxurini)
		|| equalsIgnoreCase("SMALL", maxurini) || equalsIgnoreCase("TRACE", maxurini)){
		comorbidities += ",Urinalysis Nitrite: "+urini+" on "+urinidate;
		}
	if (equalsIgnoreCase(maxurinest,"POSITIVE")|| equalsIgnoreCase(maxurinest,"LARGE") || equalsIgnoreCase( maxurinest,"MOD") 
		|| equalsIgnoreCase(maxurinest,"SMALL") || equalsIgnoreCase(maxurinest,"TRACE")){
		comorbidities += ",Urinalysis Leukocyte Esterase: "+urinest+" on "+urinestdate;
		}
	}
if (val.indexOf("^SIRS due to noninfectious process^") > -1){
	comorbidities += "~SIRS due to noninfectious process^";
	if (isEmpty(maxtemp) != true && parseDouble(maxtemp) >= 38.3){
		comorbidities += ",Temperature: " + maxtemp + " C "+ " on "+maxtempDate;
		}
	if (isEmpty(mintemp) != true && parseDouble(mintemp) < 36.0){
		comorbidities += ",Temperature: " + mintemp + " C " + " on "+mintempDate;
		}
	if (isEmpty(maxhRate) != true && parseDouble(maxhRate) > 90.0){
		comorbidities += ",Heart Rate: " + maxhRate + " on "+maxhDate;
		}
	if (isEmpty(maxrRate) != true && parseDouble(maxrRate) > 20.0){
		comorbidities += ",Respiratory Rate: " + maxrRate + " on "+maxrDate;
		}
	if (isEmpty(maxband) != true && parseDouble(maxband) > 10.0){
		comorbidities += ",Band %: " + maxband + " on "+maxbandDate;
		}
	if (isEmpty(maxwbc) != true && parseDouble(maxwbc) > 12.0){
		comorbidities += ",WBC Count: " + maxwbc + " on "+maxwbcDate;
		}
	if (isEmpty(minwbc) != true && parseDouble(minwbc) < 4.0){
		comorbidities += ",WBC Count: " + minwbc + " on "+minwbcDate;
		}
	}
if (val.indexOf("^Sepsis due to suspected or actual infection^") > -1
	&& val.indexOf("^Severe Sepsis^") == -1
	&& val.indexOf("^Septic Shock^") == -1){
	comorbidities += "~Sepsis due to suspected or actual infection^";
	if (isEmpty(maxtemp) != true && parseDouble(maxtemp) >= 38.3){
		comorbidities += ",Temperature: " + maxtemp + " C "+ " on "+maxtempDate;
		}
	if (isEmpty(mintemp) != true && parseDouble(mintemp) < 36.0){
		comorbidities += ",Temperature: " + mintemp + " C " + " on "+mintempDate;
		}
	if (isEmpty(maxhRate) != true && parseDouble(maxhRate) > 90.0){
		comorbidities += ",Heart Rate: " + maxhRate + " on "+maxhDate;
		}
	if (isEmpty(maxrRate) != true && parseDouble(maxrRate) > 20.0){
		comorbidities += ",Respiratory Rate: " + maxrRate + " on "+maxrDate;
		}
	if (isEmpty(maxband) != true && parseDouble(maxband) > 10.0){
		comorbidities += ",Band %: " + maxband + " on "+maxbandDate;
		}
	if (isEmpty(maxwbc) != true && parseDouble(maxwbc) > 12.0){
		comorbidities += ",WBC Count: " + maxwbc + " on "+maxwbcDate;
		}
	if (isEmpty(minwbc) != true && parseDouble(minwbc) < 4.0){
		comorbidities += ",WBC Count: " + minwbc + " on "+minwbcDate;
		}
	if (isEmpty(minsysBP) != true && parseDouble(minsysBP) <= 90.0){
		comorbidities += ",Systolic BP: " + minsysBP + " on "+minsysBPDate;
		}
	if (isEmpty(maxLacticAcid) != true && parseDouble(maxLacticAcid) > parseDouble(LacticAcidHigh)){
		comorbidities += "Lactic Acid: " + maxLacticAcid + " on "+maxLacticAcidDate;
		} 
	}
if (val.indexOf("^Severe Sepsis^") > -1){
	comorbidities += "~Severe Sepsis^";
	if (isEmpty(maxtemp) != true && parseDouble(maxtemp) >= 38.3){
		comorbidities += ",Temperature: " + maxtemp + " C "+ " on "+maxtempDate;
		}
	if (isEmpty(mintemp) != true && parseDouble(mintemp) < 36.0){
		comorbidities += ",Temperature: " + mintemp + " C " + " on "+mintempDate;
		}
	if (isEmpty(maxhRate) != true && parseDouble(maxhRate) > 90.0){
		comorbidities += ",Heart Rate: " + maxhRate + " on "+maxhDate;
		}
	if (isEmpty(maxrRate) != true && parseDouble(maxrRate) > 20.0){
		comorbidities += ",Respiratory Rate: " + maxrRate + " on "+maxrDate;
		}
	if (isEmpty(maxband) != true && parseDouble(maxband) > 10.0){
		comorbidities += ",Band %: " + maxband + " on "+maxbandDate;
		}
	if (isEmpty(maxwbc) != true && parseDouble(maxwbc) > 12.0){
		comorbidities += ",WBC Count: " + maxwbc + " on "+maxwbcDate;
		}
	if (isEmpty(minwbc) != true && parseDouble(minwbc) < 4.0){
		comorbidities += ",WBC Count: " + minwbc + " on "+minwbcDate;
		}
	if (isEmpty(maxLacticAcid) != true && parseDouble(maxLacticAcid) > 2.0){
		comorbidities += ",Lactic Acid: " + maxLacticAcid + " on "+maxLacticAcidDate;
		}
	if (isEmpty(minsysBP) != true && parseDouble(minsysBP) < 90.0){
		comorbidities += ",Systolic BP: " + minsysBP + " on "+minsysBPDate;
		}
	if (isEmpty(minmap) != true && parseDouble(minmap) < 65.0){
		comorbidities += ",MAP: " + minmap + " on "+minmapDate;
		} 
	if (isEmpty(maxbilirubin) != true && parseDouble(maxbilirubin) > 2.0){
		comorbidities += ",Total Bilirubin: " + maxbilirubin + " on "+maxbilirubinDate;
		}
	if (isEmpty(maxcreatResult) != true && parseDouble(maxcreatResult) >= 2.0){
		comorbidities += ",Creatinine: " + maxcreatResult + " on "+maxcreatDate;
		}
	if (isEmpty(minplt) != true && parseDouble(minplt) < 100.0){
		comorbidities += ",PLT Count: " + minplt + " on "+minpltDate;
		}
	if (isEmpty(maxptinr) != true && parseDouble(maxptinr) > 1.5){
		comorbidities += ",Prothrombin Time INR: " + maxptinr + " on "+maxptinrDate;
		}
	if (isEmpty(maxaptt) != true && parseDouble(maxaptt) > 60.0){
		comorbidities += ",aPTT(in seconds): " + maxaptt + " on "+maxapttDate;
		}
	}
if (val.indexOf("^Septic Shock^") > -1){
	comorbidities += "~Septic Shock^";
	if (isEmpty(maxtemp) != true && parseDouble(maxtemp) >= 38.3){
		comorbidities += ",Temperature: " + maxtemp + " C "+ " on "+maxtempDate;
		}
	if (isEmpty(mintemp) != true && parseDouble(mintemp) < 36.0){
		comorbidities += ",Temperature: " + mintemp + " C " + " on "+mintempDate;
		}
	if (isEmpty(maxhRate) != true && parseDouble(maxhRate) > 90.0){
		comorbidities += ",Heart Rate: " + maxhRate + " on "+maxhDate;
		}
	if (isEmpty(maxrRate) != true && parseDouble(maxrRate) > 20.0){
		comorbidities += ",Respiratory Rate: " + maxrRate + " on "+maxrDate;
		}
	if (isEmpty(maxband) != true && parseDouble(maxband) > 10.0){
		comorbidities += ",Band %: " + maxband + " on "+maxbandDate;
		}
	if (isEmpty(maxwbc) != true && parseDouble(maxwbc) > 12.0){
		comorbidities += ",WBC Count: " + maxwbc + " on "+maxwbcDate;
		}
	if (isEmpty(minwbc) != true && parseDouble(minwbc) < 4.0){
		comorbidities += ",WBC Count: " + minwbc + " on "+minwbcDate;
		}
	if (isEmpty(maxLacticAcid) != true && parseDouble(maxLacticAcid) >= 4.0){
		comorbidities += ",Lactic Acid: " + maxLacticAcid + " on "+maxLacticAcidDate;
		}
	if (isEmpty(minsysBP) != true && parseDouble(minsysBP) < 90.0){
		comorbidities += ",Systolic BP: " + minsysBP + " on "+minsysBPDate;
		}
	if (isEmpty(minmap) != true && parseDouble(minmap) < 60.0){
		comorbidities += ",MAP: " + minmap + " on "+minmapDate;
		}
	}
if (val.indexOf("^Respiratory Failure:Acute^") > -1){
	comorbidities += "~Respiratory Failure:Acute^";
	if (isEmpty(minpo2) != true && parseDouble(minpo2) <= 60 ){
		comorbidities += ",PO2: " + minpo2 + " on "+minpo2Date;
		}
	if (isEmpty(minoximetry) != true && parseDouble(minoximetry) <= 90 ){
		comorbidities += ",Pulse Oximetry: " + minoximetry + " on "+minoximetryDate;
		}
	}
if (val.indexOf("^Respiratory Failure:Chronic^") > -1){
	comorbidities += "~Respiratory Failure:Chronic^";
	if (isEmpty(maxpco2) != true && parseDouble(maxpco2) > 45){ 
		comorbidities += ",PCO2: " + maxpco2 + " on "+maxpco2Date;
		}
	if (isEmpty(maxEtco2) != true && parseDouble(maxEtco2) > 45){
		comorbidities += ",ETCO2: " + maxEtco2 + " on "+maxEtco2Date;
		}
	if (isEmpty(maxprevpco2) != true && parseDouble(maxprevpco2) > 45){
		comorbidities += ",Previous PCO2: " + maxprevpco2 + " on "+maxprevpco2Date;
		}
	if (isEmpty(maxprevEtco2) != true && parseDouble(maxprevEtco2) > 45){
		comorbidities += ",Previous ETCO2: " + maxprevEtco2 + " on "+maxprevEtco2Date;
		}
	}
if (val.indexOf("^Respiratory Failure:Acute on Chronic^") > -1){
	comorbidities += "~Respiratory Failure:Acute on Chronic^";
	if (isEmpty(minpo2) != true && parseDouble(minpo2) <= 60 ){
		comorbidities += ",PO2: " + minpo2 + " on "+minpo2Date;
		}
	if (isEmpty(minoximetry) != true && parseDouble(minoximetry) <= 90 ) {
		comorbidities += ",Pulse Oximetry: " + minoximetry + " on "+minoximetryDate;
		}
	if (isEmpty(maxpco2) != true && parseDouble(maxpco2) > 45){
		comorbidities += ",PCO2: " + maxpco2 + " on "+maxpco2Date;
		}
	if (isEmpty(maxEtco2) != true && parseDouble(maxEtco2) > 45){
		comorbidities += ",ETCO2: " + maxEtco2 + " on "+maxEtco2Date;
		}
	if (isEmpty(maxprevpco2) != true && parseDouble(maxprevpco2) > 45){
		comorbidities += ",Previous PCO2: " + maxprevpco2 + " on "+maxprevpco2Date;
		}
	if (isEmpty(maxprevEtco2) != true && parseDouble(maxprevEtco2) > 45){
		comorbidities += ",Previous ETCO2: " + maxprevEtco2 + " on "+maxprevEtco2Date;
		}
	}
if (val.indexOf("^Shock:Cardiogenic Shock^") > -1){
	comorbidities += "~Shock:Cardiogenic Shock^";
	comorbidities += ",Systolic BP: " + minsysBP + " on "+minsysBPDate;
	if (isEmpty(maxct) != true){ comorbidities += ",Cardiac Troponin: "+maxct+" on "+maxctDate; }
	}
if (val.indexOf("^Shock:Hypovolemic^") > -1){
	comorbidities += "~Shock:Hypovolemic^";
	comorbidities += ",Systolic BP: " + minsysBP + " on "+minsysBPDate;
	}
if (val.indexOf("^Shock:NOS^") > -1){
	comorbidities += "~Shock:NOS^";
	comorbidities += ",Systolic BP: " + minsysBP + " on "+minsysBPDate;
	}
if (val.indexOf("^Hypotension^") > -1){
	comorbidities += "~Hypotension^";
	comorbidities += ",Systolic BP: " + minsysBP + " on "+minsysBPDate;
	}
if (val.indexOf("^Hypoglycemia:Hypoglycemia^") > -1){
	comorbidities += "~Hypoglycemia:Hypoglycemia^";
	comorbidities += ",Glucose level: " + minglucResult + " on "+minglucDate;
	}
if (val.indexOf("^Hypoglycemia:Diabetes Type 1 with Hypoglycemia^") > -1){
	comorbidities += "~Hypoglycemia:Diabetes Type 1 with Hypoglycemia^";
	comorbidities += ",Glucose level: " + minglucResult + " on "+minglucDate;
	}
if (val.indexOf("^Hypoglycemia:Diabetes Type 2 with Hypoglycemia^") > -1){
	comorbidities += "~Hypoglycemia:Diabetes Type 2 with Hypoglycemia^";
	comorbidities += ",Glucose level: " + minglucResult + " on "+minglucDate;
	}
if (val.indexOf("^HyperCholesterolemia^") > -1){
	comorbidities += "~HyperCholesterolemia^";
	comorbidities += ",Total Cholesterol level: " + maxcholesterolResult + " on "+maxcholesterolDate;
	}
/* Adding commit text for comorbidities from radiology reports*/
if (radval.length > 0)	
	comorbidities += radval;//getRadiologyComorbiditiesStringForCommit(radval);

if (ecgval.length > 0)
    comorbidities += ecgval;

var reqObj = new XMLCclRequest();
reqObj.onreadystatechange = function(){
	if (reqObj.readyState == 4 && reqObj.status == 200){
		var msgText = reqObj.responseText;
		if (msgText != undefined && msgText != null){
			var jsonObj = eval('(' + msgText + ')');
			}
		if (jsonObj.TEMP.SUCCESSFUL == 1){

			$.unblockUI();
			buildPCbody();
			buildCCheader();
			buildCCbody();
			buildOCheader();
			buildOCbody();			
			initRR(false);
			
			}
		else{
			alert(jsonObj.TEMP.MSG);
			$.unblockUI();
			}
		}
	}
var param = "^MINE^,value($PAT_PersonId$),value($VIS_EncntrId$),value($USR_PersonId$),'"+comorbidities+"','"+ocval+"'";
reqObj.open('GET', "uhmc_mp_comorbidity_submit", 1);
reqObj.send(param);
return;
}

function getRadiologyComorbiditiesStringForCommit(radval)
{
	var radiologyString = "";
	/*TODO Code for building text for radiology comorbidities' string*/		
	return radiologyString;	
}


function toggleRules(){
if ($('#comorbrules').is(":visible")){ 
	$('#comorbrules').hide(); 
	$('#comorbrulesLabel').html("<b>Show Comorbidities Rules</b>");
	}
else{ 
	$('#comorbrules').show(); 
	$('#comorbrulesLabel').html("<b>Hide Comorbidities Rules</b>");
	}
return;
}

function closeHelp(){
$('#comorbrules').hide(); 
$('#comorbrulesLabel').html("<b>Show Comorbidities Rules</b>");
$.colorbox.close();
return;
}

function openData(){
$('#dataDiv').show();
return;
}

function closeData(){
$('#dataDiv').hide();
return;
}

function clearCommitted(){
var reqObj = new XMLCclRequest();

reqObj.onreadystatechange = function (){
	if (reqObj.readyState == 4 && reqObj.status == 200){
		var msgText = reqObj.responseText;
		if (msgText != undefined && msgText != null){
			var jsonObj = eval('(' + msgText + ')');
			}
		init();
		}  
	}

var param = "^MINE^,value($VIS_EncntrId$)";
reqObj.open('GET',"uhmc_mp_comorb_clear_prev_data",0);
reqObj.send(param);

return;
}