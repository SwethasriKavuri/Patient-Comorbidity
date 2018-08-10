var savedRules = [];
var globalSelectedRules = [];
var labValuesDictionary = [{ "id": "minHb", "value_name": "Minimum Hemoglobin", "rule_name": "Minimum Hemoglobin", "units": "" }, { "id": "minHc", "value_name": "Minimum Hematocrit", "rule_name": "Minimum Hematocrit", "units": "" }, { "id": "prevMinHb", "value_name": "Previous Minimum Hemoglobin", "rule_name": "Previous Minimum Hemoglobin", "units": "" }, { "id": "prevMinHc", "value_name": "Previous Minimum Hematocrit", "rule_name": "Previous Minimum Hematocrit", "units": "" }, { "id": "lowHb", "value_name": "Normal Low Hemoglobin standard", "rule_name": "Normal Low Hemoglobin standard", "units": "" }, { "id": "lowHc", "value_name": "Normal Low Hematocrit standard", "rule_name": "Normal Low Hematocrit standard", "units": "" }, { "id": "minbicarbonate", "value_name": "Minimum Serum Bicarbonate", "rule_name": "Minimum Serum Bicarbonate", "units": "" }, { "id": "maxbicarbonate", "value_name": "Maximum Serum Bicarbonate", "rule_name": "Maximum Serum Bicarbonate", "units": "" }, { "id": "bicarbonateLow", "value_name": "Normal Low Serum Bicarbonate Standard", "rule_name": "Normal Low Serum Bicarbonate Standard", "units": "" }, { "id": "bicarbonateHigh", "value_name": "Normal High Serum Bicarbonate Standard", "rule_name": "Normal High Serum Bicarbonate Standard", "units": "" }, { "id": "minpotassium", "value_name": "Minimum Potassium", "rule_name": "Minimum Potassium", "units": "" }, { "id": "lowpotassium", "value_name": "Normal Low Potassium Standard", "rule_name": "Normal Low Potassium Standard", "units": "" }, { "id": "maxpotassium", "value_name": "Maximum Potassium", "rule_name": "Maximum Potassium", "units": "" }, { "id": "hipotassium", "value_name": "Normal High Potassium Standard", "rule_name": "Normal High Potassium Standard", "units": "" }, { "id": "minsodium", "value_name": "Minimum Sodium", "rule_name": "Minimum Sodium", "units": "" }, { "id": "lowsodium", "value_name": "Normal Low Sodium Standard", "rule_name": "Normal Low Sodium Standard", "units": "" }, { "id": "maxsodium", "value_name": "Maximum Sodium", "rule_name": "Maximum Sodium", "units": "" }, { "id": "hisodium", "value_name": "Normal High Sodium Standard", "rule_name": "Normal High Sodium Standard", "units": "" }, { "id": "mincalcium", "value_name": "Minimum Calcium", "rule_name": "Minimum Calcium", "units": "" }, { "id": "lowcalcium", "value_name": "Normal Low Calcium Standard", "rule_name": "Normal Low Calcium Standard", "units": "" }, { "id": "maxcalcium", "value_name": "Maximum Calcium", "rule_name": "Maximum Calcium", "units": "" }, { "id": "hicalcium", "value_name": "Normal High Calcium Standard", "rule_name": "Normal High Calcium Standard", "units": "" }, { "id": "minphosphorus", "value_name": "Minimum Phosphorus", "rule_name": "Minimum Phosphorus", "units": "" }, { "id": "lowphosphorus", "value_name": "Normal Low Phosphorus Standard", "rule_name": "Normal Low Phosphorus Standard", "units": "" }, { "id": "maxphosphorus", "value_name": "Maximum Phosphorus", "rule_name": "Maximum Phosphorus", "units": "" }, { "id": "hiphosphorus", "value_name": "Normal High Phosphorus Standard", "rule_name": "Normal High Phosphorus Standard", "units": "" }, { "id": "minmagnesium", "value_name": "Minimum Magnesium", "rule_name": "Minimum Magnesium", "units": "" }, { "id": "maxmagnesium", "value_name": "Maximum Magnesium", "rule_name": "Maximum Magnesium", "units": "" }, { "id": "himagnesium", "value_name": "Normal High Magnesium Standard", "rule_name": "Normal High Magnesium Standard", "units": "" }, { "id": "lowmagnesium", "value_name": "Normal Low Magnesium Standard", "rule_name": "Normal Low Magnesium Standard", "units": "" }, { "id": "minglucose", "value_name": "Minimum Glucose", "rule_name": "Minimum Glucose", "units": "" }, { "id": "lowglucose", "value_name": "Normal Low Glucose Standard", "rule_name": "Normal Low Glucose Standard", "units": "" }, { "id": "maxglucose", "value_name": "Maximum Glucose", "rule_name": "Maximum Glucose", "units": "" }, { "id": "higlucose", "value_name": "Normal High Glucose Standard", "rule_name": "Normal High Glucose Standard", "units": "" }, { "id": "maxneutrophil", "value_name": "Maximum Neutrophil", "rule_name": "Maximum Neutrophil", "units": "" }, { "id": "lowneutrophil", "value_name": "Normal Low Neutrophil Standard", "rule_name": "Normal Low Neutrophil Standard", "units": "" }, { "id": "minneutrophil", "value_name": "Minimum Neutrophil", "rule_name": "Minimum Neutrophil", "units": "" }, { "id": "hineutrophil", "value_name": "Normal High Neutrophil Standard", "rule_name": "Normal High Neutrophil Standard", "units": "" }, { "id": "uriniHigh", "value_name": "Normal High Nitrite Standard", "rule_name": "Normal High Nitrite Standard", "units": "" }, { "id": "uriniLow", "value_name": "Normal Low Nitrite Standard", "rule_name": "Normal Low Nitrite Standard", "units": "" }, { "id": "maxurini", "value_name": "Maximum Nitrite", "rule_name": "Maximum Nitrite", "units": "" }, { "id": "minurini", "value_name": "Minimum Nitrite", "rule_name": "Minimum Nitrite", "units": "" }, { "id": "urinestHigh", "value_name": "Normal High Leukocyte Standard", "rule_name": "Normal High Leukocyte Standard", "units": "" }, { "id": "urinestLow", "value_name": "Normal Low Leukocyte Standard", "rule_name": "Normal Low Leukocyte Standard", "units": "" }, { "id": "maxurinest", "value_name": "Maximum Leukocyte", "rule_name": "Maximum Leukocyte", "units": "" }, { "id": "minurinest", "value_name": "Minimum Leukocyte", "rule_name": "Minimum Leukocyte", "units": "" }, { "id": "mincholesterolResult", "value_name": "Minimum Cholesterol", "rule_name": "Minimum Cholesterol", "units": "" }, { "id": "cholesterolHigh", "value_name": "Normal High Cholesterol Standard", "rule_name": "Normal High Cholesterol Standard", "units": "" }, { "id": "cholesterolLow", "value_name": "Normal Low Cholesterol Standard", "rule_name": "Normal Low Cholesterol Standard", "units": "" }, { "id": "maxcholestrol", "value_name": "Maximum Cholesterol", "rule_name": "Maximum Cholesterol", "units": "" }, { "id": "sysBP", "value_name": "Systolic Blood Pressure Standard", "rule_name": "Systolic Blood Pressure Standard", "units": "" }, { "id": "sysBPHigh", "value_name": "Normal Systolic Blood Pressure Standard", "rule_name": "Normal Systolic Blood Pressure Standard", "units": "" }, { "id": "sysBPLow", "value_name": "Normal Systolic Blood Pressure Standard", "rule_name": "Normal Systolic Blood Pressure Standard", "units": "" }, { "id": "minsysBP", "value_name": "Minimum Systolic Blood Pressure", "rule_name": "Minimum Systolic Blood Pressure", "units": "" }, { "id": "maxsysBP", "value_name": "Maximum Systolic Blood Pressure", "rule_name": "Maximum Systolic Blood Pressure", "units": "" }, { "id": "lastsysBP", "value_name": "Last Systolic Blood Pressure", "rule_name": "Last Systolic Blood Pressure", "units": "" }, { "id": "diasBP", "value_name": "Diastolic Blood Pressure Standard", "rule_name": "Diastolic Blood Pressure Standard", "units": "" }, { "id": "diasBPHigh", "value_name": "Normal Diastolic Blood Pressure Standard", "rule_name": "Normal Diastolic Blood Pressure Standard", "units": "" }, { "id": "diasBPLow", "value_name": "Normal Diastolic Blood Pressure Standard", "rule_name": "Normal Diastolic Blood Pressure Standard", "units": "" }, { "id": "mindiasBP", "value_name": "Minimum Diastolic Blood Pressure", "rule_name": "Minimum Diastolic Blood Pressure", "units": "" }, { "id": "maxdiasBP", "value_name": "Maximum Diastolic Blood Pressure", "rule_name": "Maximum Diastolic Blood Pressure", "units": "" }, { "id": "lastdiasBP", "value_name": "Last Diastolic Blood Pressure", "rule_name": "Last Diastolic Blood Pressure", "units": "" }, { "id": "minPulseOxi", "value_name": "Minimum Pulse Oximetry", "rule_name": "Minimum Pulse Oximetry", "units": "" }, { "id": "oximetryHigh", "value_name": "Normal High Oximetry Standard", "rule_name": "Normal High Oximetry Standard", "units": "" }, { "id": "oximetryLow", "value_name": "Normal Low Oximetry Standard", "rule_name": "Normal Low Oximetry Standard", "units": "" }, { "id": "maxoximetry", "value_name": "Maximum Oximetry", "rule_name": "Maximum Oximetry", "units": "" }, { "id": "minoximetry", "value_name": "Minimum Oximetry", "rule_name": "Minimum Oximetry", "units": "" }, { "id": "creatHigh", "value_name": "Normal High Creatinine Standard", "rule_name": "Normal High Creatinine Standard", "units": "" }, { "id": "creatLow", "value_name": "Normal Low Creatinine Standard", "rule_name": "Normal Low Creatinine Standard", "units": "" }, { "id": "creat", "value_name": "Maximum Creatinine", "rule_name": "Maximum Creatinine", "units": "" }, { "id": "maxCreatinine", "value_name": "Maximum Creatinine", "rule_name": "Maximum Creatinine", "units": "" }, { "id": "mincreatResult", "value_name": "Minimum Creatinine", "rule_name": "Minimum Creatinine", "units": "" }, { "id": "creatprevHigh", "value_name": "Previous Normal High Creatinine Standard", "rule_name": "Previous Normal High Creatinine Standard", "units": "" }, { "id": "creatprevLow", "value_name": "Previous Normal Low Creatinine Standard", "rule_name": "Previous Normal Low Creatinine Standard", "units": "" }, { "id": "prevMaxCreatinine", "value_name": "Previous Maximum Creatinine", "rule_name": "Previous Maximum Creatinine", "units": "" }, { "id": "maxcreatprevResult", "value_name": "Previous Maximum Creatinine", "rule_name": "Previous Maximum Creatinine", "units": "" }, { "id": "mincreatprevResult", "value_name": "Previous Minimum Creatinine", "rule_name": "Previous Minimum Creatinine", "units": "" }, { "id": "pco2High", "value_name": "Normal High PCO2 Standard", "rule_name": "Normal High PCO2 Standard", "units": "" }, { "id": "pco2Low", "value_name": "Normal Low PCO2 Standard", "rule_name": "Normal Low PCO2 Standard", "units": "" }, { "id": "maxpco2", "value_name": "Maximum PCO2", "rule_name": "Maximum PCO2", "units": "" }, { "id": "minpco2", "value_name": "Minimum PCO2", "rule_name": "Minimum PCO2", "units": "" }, { "id": "prevpco2High", "value_name": "Previous Normal High PCO2 Standard", "rule_name": "Previous Normal High PCO2 Standard", "units": "" }, { "id": "prevpco2Low", "value_name": "Previous Normal Low PCO2 Standard", "rule_name": "Previous Normal Low PCO2 Standard", "units": "" }, { "id": "maxprevpco2", "value_name": "Previous Maximum PCO2", "rule_name": "Previous Maximum PCO2", "units": "" }, { "id": "minprevpco2", "value_name": "Previous Minimum PCO2", "rule_name": "Previous Minimum PCO2", "units": "" }, { "id": "Etco2High", "value_name": "Normal High ETCO2 Standard", "rule_name": "Normal High ETCO2 Standard", "units": "" }, { "id": "Etco2Low", "value_name": "Normal Low ETCO2 Standard", "rule_name": "Normal Low ETCO2 Standard", "units": "" }, { "id": "maxEtco2", "value_name": "Maximum ETCO2", "rule_name": "Maximum ETCO2", "units": "" }, { "id": "minEtco2", "value_name": "Minimum ETCO2", "rule_name": "Minimum ETCO2", "units": "" }, { "id": "prevEtco2High", "value_name": "Previous Normal High ETCO2 Standard", "rule_name": "Previous Normal High ETCO2 Standard", "units": "" }, { "id": "prevEtco2Low", "value_name": "Previous Normal Low ETCO2 Standard", "rule_name": "Previous Normal Low ETCO2 Standard", "units": "" }, { "id": "maxprevEtco2", "value_name": "Previous Maximum ETCO2", "rule_name": "Previous Maximum ETCO2", "units": "" }, { "id": "minprevEtco2", "value_name": "Previous Minimum ETCO2", "rule_name": "Previous Minimum ETCO2", "units": "" }, { "id": "maxGFR", "value_name": "Maximum GFR", "rule_name": "Maximum GFR", "units": "" }, { "id": "mingfrResult", "value_name": "Minimum GFR", "rule_name": "Minimum GFR", "units": "" }, { "id": "maxLacticAcid", "value_name": "Maximum Lactic Acid", "rule_name": "Maximum Lactic Acid", "units": "hiLacticAcid" }, { "id": "hiLacticAcid", "value_name": "Normal High Lactic Acid Standard", "rule_name": "Normal High Lactic Acid Standard", "units": "" }, { "id": "minLacticAcid", "value_name": "Minimum Lactic Acid", "rule_name": "Minimum Lactic Acid", "units": "hiLacticAcid" }, { "id": "LacticAcidLow", "value_name": "Normal Low Lactic Acid Standard", "rule_name": "Normal Low Lactic Acid Standard", "units": "" }, { "id": "bmi", "value_name": "Body Mass Index", "rule_name": "Body Mass Index", "units": "" }, { "id": "malnutritionbmi", "value_name": "Body Mass Index", "rule_name": "Body Mass Index", "units": "" }, { "id": "obesitybmi", "value_name": "Body Mass Index", "rule_name": "Body Mass Index", "units": "" }, { "id": "morbidobesitybmi", "value_name": "Body Mass Index", "rule_name": "Body Mass Index", "units": "" }, { "id": "height", "value_name": "Height", "rule_name": "Height", "units": "cm" }, { "id": "minheight", "value_name": "Height", "rule_name": "Height", "units": "cm" }, { "id": "weight", "value_name": "Weight", "rule_name": "Weight", "units": "kg" }, { "id": "minweight", "value_name": "Weight", "rule_name": "Weight", "units": "kg" }, { "id": "minWBC", "value_name": "Low WBC count", "rule_name": "Low WBC count", "units": "" }, { "id": "maxWBC", "value_name": "High WBC count", "rule_name": "High WBC count", "units": "" }, { "id": "lowWBC", "value_name": "Normal low WBC count", "rule_name": "Normal low WBC count", "units": "" }, { "id": "wbcHigh", "value_name": "Normal high WBC count", "rule_name": "Normal high WBC count", "units": "" }, { "id": "minRBC", "value_name": "Minimum RBC count", "rule_name": "Minimum RBC count", "units": "" }, { "id": "lowRBC", "value_name": "Normal low RBC count", "rule_name": "Normal low RBC count", "units": "" }, { "id": "minPLT", "value_name": "Minimum PLT count", "rule_name": "Minimum PLT count", "units": "" }, { "id": "maxplt", "value_name": "Maximum PLT count", "rule_name": "Maximum PLT count", "units": "" }, { "id": "lowPLT", "value_name": "Normal Low PLT count Standard", "rule_name": "Normal Low PLT count Standard", "units": "" }, { "id": "pltHigh", "value_name": "Normal High PLT count Standard", "rule_name": "Normal High PLT count Standard", "units": "" }, { "id": "panwbc", "value_name": "Minimum Pan WBC", "rule_name": "Minimum Pan WBC", "units": "" }, { "id": "panrbc", "value_name": "Minimum Pan RBC", "rule_name": "Minimum Pan RBC", "units": "" }, { "id": "panplt", "value_name": "Minimum Pan PLT", "rule_name": "Minimum Pan PLT", "units": "" }, { "id": "panwbcLow", "value_name": "Normal Low Pan WBC Standard", "rule_name": "Normal Low Pan WBC Standard", "units": "" }, { "id": "panrbcLow", "value_name": "Normal Low Pan RBC Standard", "rule_name": "Normal Low Pan RBC Standard", "units": "" }, { "id": "panpltLow", "value_name": "Normal Low Pan PLT Standard", "rule_name": "Normal Low Pan PLT Standard", "units": "" }, { "id": "po2High", "value_name": "Normal High PO2 Standard", "rule_name": "Normal High PO2 Standard", "units": "" }, { "id": "po2Low", "value_name": "Normal Low PCO2 Standard", "rule_name": "Normal Low PCO2 Standard", "units": "" }, { "id": "minPO2", "value_name": "Minimum PO2", "rule_name": "Minimum PO2", "units": "" }, { "id": "maxPCO2", "value_name": "Maximum PCO2", "rule_name": "Maximum PCO2", "units": "" }, { "id": "ctHigh", "value_name": "Normal High Cardiac Troponin Standard", "rule_name": "Normal High Cardiac Troponin Standard", "units": "" }, { "id": "ctLow", "value_name": "Normal Low Cardiac Troponin Standard", "rule_name": "Normal Low Cardiac Troponin Standard", "units": "" }, { "id": "minct", "value_name": "Minimum Cardiac Troponin", "rule_name": "Minimum Cardiac Troponin", "units": "" }, { "id": "maxct", "value_name": "Maximum Cardiac Troponin", "rule_name": "Maximum Cardiac Troponin", "units": "" }, { "id": "maxETCO2", "value_name": "Maximum ETCO2", "rule_name": "Maximum ETCO2", "units": "" }, { "id": "prevMaxETCO2", "value_name": "Previous Maximum ETCO2", "rule_name": "Previous Maximum ETCO2", "units": "" }, { "id": "maxCardiacTroponin", "value_name": "maximum Cardiac Troponin", "rule_name": "maximum Cardiac Troponin", "units": "" }, { "id": "hiCardiacTroponin", "value_name": "Normal High Cardiac Troponin Standard", "rule_name": "Normal High Cardiac Troponin Standard", "units": "" }, { "id": "hHigh", "value_name": "Normal High Heart Rate Standard", "rule_name": "Normal High Heart Rate Standard", "units": "" }, { "id": "hLow", "value_name": "Normal Low Heart Rate Standard", "rule_name": "Normal Low Heart Rate Standard", "units": "" }, { "id": "maxHR", "value_name": "Maximum Heart Rate", "rule_name": "Maximum Heart Rate", "units": "" }, { "id": "minhRate", "value_name": "Minimum Heart Rate", "rule_name": "Minimum Heart Rate", "units": "" }, { "id": "rHigh", "value_name": "Normal High R Rate Standard", "rule_name": "Normal High R Rate Standard", "units": "" }, { "id": "rLow", "value_name": "Normal Low R Rate Standard", "rule_name": "Normal Low R Rate Standard", "units": "" }, { "id": "maxrRate", "value_name": "Maximum R Rate", "rule_name": "Maximum R Rate", "units": "" }, { "id": "minrRate", "value_name": "Minimum R Rate", "rule_name": "Minimum R Rate", "units": "" }, { "id": "maxRespRate", "value_name": "Maximum Respiratory Rate", "rule_name": "Maximum Respiratory Rate", "units": "" }, { "id": "maxBands", "value_name": "Maximum Bands", "rule_name": "Maximum Bands", "units": "%" }, { "id": "minband", "value_name": "Minimum Band", "rule_name": "Minimum Band", "units": "%" }, { "id": "maxband", "value_name": "Maximum Band", "rule_name": "Maximum Band", "units": "%" }, { "id": "bandLow", "value_name": "Normal Low Band Standard", "rule_name": "Normal Low Band Standard", "units": "%" }, { "id": "bandHigh", "value_name": "Normal High Band Standard", "rule_name": "Normal High Band Standard", "units": "%" }, { "id": "tempLow", "value_name": "Normal Low Temperature Standard", "rule_name": "Normal Low Temperature Standard", "units": "" }, { "id": "tempHigh", "value_name": "Normal High Temperature Standard", "rule_name": "Normal High Temperature Standard", "units": "" }, { "id": "minTemp", "value_name": "Minimum Temperature", "rule_name": "Minimum Temperature", "units": "" }, { "id": "maxTemp", "value_name": "Maximum Temperature", "rule_name": "Maximum Temperature", "units": "" }, { "id": "bunLow", "value_name": "Normal Low bun Standard", "rule_name": "Normal Low bun Standard", "units": "" }, { "id": "bunHigh", "value_name": "Normal High bun Standard", "rule_name": "Normal High bun Standard", "units": "" }, { "id": "bunMinResult", "value_name": "Minimum bun", "rule_name": "Minimum bun", "units": "" }, { "id": "bunMaxResult", "value_name": "Maximum bun", "rule_name": "Maximum bun", "units": "" }, { "id": "meanArtPressure", "value_name": "Mean Arterial Pressure", "rule_name": "Mean Arterial Pressure", "units": "" }, { "id": "maxTotBil", "value_name": "Maximum Total Bilirubin", "rule_name": "Maximum Total Bilirubin", "units": "" }, { "id": "minbilirubin", "value_name": "Minimum Bilirubin", "rule_name": "Minimum Bilirubin", "units": "" }, { "id": "maxbilirubin", "value_name": "Maximum Bilirubin", "rule_name": "Maximum Bilirubin", "units": "" }, { "id": "bilirubinLow", "value_name": "Normal Low Bilirubin Standard", "rule_name": "Normal Low Bilirubin Standard", "units": "" }, { "id": "bilirubinHigh", "value_name": "Normal High Bilirubin Standard", "rule_name": "Normal High Bilirubin Standard", "units": "" }, { "id": "maxINR", "value_name": "Maximum INR", "rule_name": "Maximum INR", "units": "" }, { "id": "minptinr", "value_name": "Minimum Pt INR", "rule_name": "Minimum Pt INR", "units": "" }, { "id": "maxptinr", "value_name": "Maximum Pt INR", "rule_name": "Maximum Pt INR", "units": "" }, { "id": "ptinrLow", "value_name": "Normal Low Pt INR Standard", "rule_name": "Normal Low Pt INR Standard", "units": "" }, { "id": "ptinrHigh", "value_name": "Normal High Pt INR Standard", "rule_name": "Normal High Pt INR Standard", "units": "" }, { "id": "maxPTT", "value_name": "Maximum PTT", "rule_name": "Maximum PTT", "units": "" }, { "id": "minaptt", "value_name": "Minimum APTT", "rule_name": "Minimum APTT", "units": "" }, { "id": "maxaptt", "value_name": "Maximum PTT", "rule_name": "Maximum PTT", "units": "" }, { "id": "apttLow", "value_name": "Normal Low APTT Standard", "rule_name": "Normal Low APTT Standard", "units": "" }, { "id": "apttHigh", "value_name": "Normal High APTT Standard", "rule_name": "Normal High APTT Standard", "units": "" }, { "id": "minmap", "value_name": "Minimum Map", "rule_name": "Minimum Map", "units": "" }, { "id": "maxmap", "value_name": "Maximum Map", "rule_name": "Maximum Map", "units": "" }, { "id": "mapLow", "value_name": "Normal Low Map Standard", "rule_name": "Normal Low Map Standard", "units": "" }, { "id": "mapHigh", "value_name": "Normal High Map Standard", "rule_name": "Normal High Map Standard", "units": "" }, { "id": "maxUrWBC", "value_name": "Maximum Urinalysis WBC", "rule_name": "Maximum Urinalysis WBC", "units": "" }, { "id": "UtiWbcHigh", "value_name": "Normal High Uti WBC Standard", "rule_name": "Normal High Uti WBC Standard", "units": "" }, { "id": "UtiWbcLow", "value_name": "Normal Low Uti WBC Standard", "rule_name": "Normal Low Uti WBC Standard", "units": "" }, { "id": "minUtiWbc", "value_name": "Minimum Uti WBC", "rule_name": "Minimum Uti WBC", "units": "" }, { "id": "maxUtiWbc", "value_name": "Maximum Uti WBC", "rule_name": "Maximum Uti WBC", "units": "" }, { "id": "urnNitrite", "value_name": "Urinalysis Nitrite", "rule_name": "Urinalysis Nitrite", "units": "" }, { "id": "urnLeucEster", "value_name": "Urinalysis Leukocyte Esterase", "rule_name": "Urinalysis Leukocyte Esterase", "units": "" }, { "id": "age", "value_name": "Age", "rule_name": "Age", "units": "years" }, { "id": "agem", "value_name": "Age", "rule_name": "Age", "units": "months" }, { "id": "agew", "value_name": "Age", "rule_name": "Age", "units": "weeks" }, { "id": "aged", "value_name": "Age", "rule_name": "Age", "units": "days" }];

function attachEventHandlesForTesting() {    
    $(".labvalueformdiv")
        .on("mouseover", "input", function() {
            $(this).parent().css({"background-color":"lightgrey"})})
        .on("mouseout", "input", function() {
            $(this).parent().css({"background-color":"white"}); 
            });
    
    $(".testtab").on("click" ,function() {
        $(".testrulesdiv").html("");
        $(".labvalueformdiv").html("");
        $(".testresultdiv").html("");        
        if (newSavedRules.length > 0) {  // newSavedRules and savedRulesJSON are declared/defined in rule.addedit.main.js
            for (var i = 0; i < newSavedRules.length; i++)
                savedRulesJSON.push(newSavedRules[i]);
            newSavedRules = [];
        }
        savedRules = savedRulesJSON;
        console.log("testtab", savedRulesJSON);
       $(".checkrule").first().prop("checked", "checked");
       populateTestRules(savedRules); // SavedRulesJSON object is created in rule.addedit.main.js 
    });
    
    $(".checkrule").first().click(function() {       
        if ($(this).prop("checked") === true) {
            $(".test .checkrule").not(":first").prop("checked", "checked");             
        }
        else {
            $(".test .checkrule").not(":first").prop("checked", "");   
        }
        loadCheckedRules();
    });
    
    $(".testrulesdiv").on("click", ".checkrule", function() {
        loadCheckedRules();
    });
    
    $(".executerules").on("click", function() {
       executeRules(); 
    });
    
    /*Realtime?*/
    $(".labvalueformdiv").on("change keyup","input", function() {
        executeRules();
    })
}

function executeRules()
{
    $(".testresultdiv").html("");
    $(".labformrow .nameerror").html("");
    var formObjArray = $(".labformrow");
    var variables = {};
    var doExecute = true;
    for (var i = 0; i < formObjArray.length; i++) {
        var key = $(formObjArray[i]).children("input").attr("id");
        var val = $(formObjArray[i]).children("input").val();
        if (val == '') {
            $(formObjArray[i]).children("span:last").html("Incorrect value");
            doExecute = false;
        }
        if (val == '')
            val = -1;
        variables[key] = val;
    }      
    if (!doExecute)
        return;
    var ruleJSON = globalSelectedRules;      
    var result = processRules(ruleJSON, variables, labValuesDictionary);
    console.log(result);
    var htmlStr = "";
    htmlStr += "<ul>";
    var foundclass = "";
    for (var key in result)
    {
        if (!result.hasOwnProperty(key)) {
            continue;
        }
        if (typeof(result[key]) == 'object') {
            htmlStr += "<li>"+key+"</li><ul>";
            for (var inkey in result[key]) {
            
                if (!result[key].hasOwnProperty(inkey)) {
                    continue;
                }
                res = result[key][inkey].split("|");
            	console.log("Result for key : " + key + "_" + inkey);
				console.log(res);
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
				
				entire_disp = " <span style = 'color: #858384; font-weight: bold;'>"+ "Values are:<br></span>" + vals
						+ "<br><span style = 'color: #858384; font-weight: bold;'>"
			  			+ "Determined by the Rule:<br><br></span>"
			  			+ rule;
                var foundclass = "style='color:black'";
                if (comorbidityPresent==="true") 
                    foundclass = "style='color:blue'";
                htmlStr += "<li onmouseover= \"onmouseoveragent(this)\" onmouseout=\"onmouseoutagent(this)\">";
                htmlStr += "<span " + foundclass +">" + display_inkey + "</span>";
        		htmlStr += "<p hidden class=\"hideme\">" + entire_disp + "</p>";
        		htmlStr += "</li>";
        	}
            htmlStr += "</ul>";
        }
        else {
            inkey = key.replace(/\s+/g, '');
        	res = result[key].split("|");
        	console.log("Ind res");
        	console.log(res);
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
			
			entire_disp = " <span style = 'color: #858384; font-weight: bold;'>"+ "Values are:<br></span>" + vals
					+ "<br><span style = 'color: #858384; font-weight: bold;'>"
		  			+ "Determined by the Rule:<br><br></span>"
		  			+ rule;
		  			
            var foundclass = "style='color:black'";
            if (comorbidityPresent==="true")
                foundclass = "style='color:blue'";
        	htmlStr += "<li onmouseover= \"onmouseoveragent(this)\" onmouseout=\"onmouseoutagent(this)\">";
            htmlStr += "<span " + foundclass +">" + display_inkey + "</span>";
    		htmlStr += "<p hidden class=\"hideme\">" + entire_disp + "</p>";
    		htmlStr += "</li>";
        }
    }
    htmlStr += "</ul>";
    $(".testresultdiv").html(htmlStr);
}

function loadCheckedRules() {
    $(".labvalueformdiv").html("");
    $(".testresultdiv").html("");
    var checkedRules = $(".testrulesdiv .checkrule");
    var selectedRules = [];
    var allChecked = true;
    for (var i = 0; i < checkedRules.length; i++) {
        if ($(checkedRules[i]).prop("checked")) {
            var key = $(checkedRules[i]).val();
            var obj = {};
            for (var j = 0; j < savedRules.length; j++) {
                if (savedRules[j].hasOwnProperty(key)) {
                    obj[key] = savedRules[j][key];
                    selectedRules.push(obj);
                    break;
                }
            }            
        }
        else {
            allChecked = false;
        }
    }
    if (!allChecked) {
        $(".checkrule").first().prop("checked", "");
    } else {
        $(".checkrule").first().prop("checked", "checked");
    }
    populateLabForm(selectedRules);
    globalSelectedRules = selectedRules;
}

function populateTestRules(savedRules) {    
    for (var i = 0; i < savedRules.length; i++) {
        var ruleObj = savedRules[i];
        for (key in ruleObj) {
            $(".testrulesdiv").append("<br/><input type='checkbox' value = '"+key+"' class='checkrule' checked='checked'/>"+key);            
            break;
        }
    }
    populateLabForm(savedRulesJSON);
}

function pushTokens(tokens, labAttributes, labFormMap) {
    for (var k = 0; k < tokens.length; k++) {
        if (labValueMap.hasOwnProperty(tokens[k]) && !labFormMap.hasOwnProperty(tokens[k])) {            
            labFormMap[tokens[k]] = true;
            var inbuiltTokens = checkInBuilt(tokens[k]);
            console.log(inbuiltTokens);
            if (inbuiltTokens != null) {
                pushTokens(inbuiltTokens, labAttributes, labFormMap);
            }
            else 
                labAttributes.push({"id":tokens[k], "name":labValueMap[tokens[k]]});
        }
    }
}

function populateLabForm(selectedRules) {
    var labAttributes = [];
    var labFormMap = {};
    for (var i = 0; i < selectedRules.length; i++) {
        var ruleObj = selectedRules[i];
        for (key in ruleObj) {
            var subCategories = ruleObj[key];
            var valueType = Object.prototype.toString.call(subCategories);
            if (valueType === '[object Array]') {
                var subCategoriesCount = subCategories.length;
                for (var j = 0; j < subCategoriesCount; j++) {
                    for (key in subCategories[j]) {
                        var ruleStr = subCategories[j][key];      
                        var tokens = ruleStr.split(/\s+/);
                        pushTokens(tokens, labAttributes, labFormMap);
                    }
                }
            }
            else {
                var ruleStr = ruleObj[key];
                var tokens = ruleStr.split(/\s+/);
                pushTokens(tokens, labAttributes, labFormMap);
            }
            break;
        }
    }
    for (var i = 0; i < labAttributes.length; i++) {
        var id = labAttributes[i]["id"];
        var name = labAttributes[i]["name"];
        var val = 0;
        $(".labvalueformdiv").append("<div class='labformrow' style='height:30px'><span style='width:300px;display:inline-block'>"+name+":</span><input type='text' id='"+id+"' style='width:100px'/><span class='nameerror'></span></div>");
    }
}

function checkInBuilt(token) {
    var inmap = {
                    "bmi" : "height,weight"
                };
    if (inmap.hasOwnProperty(token)) {
        return inmap[token].split(",");
    }
    return null;
}

function onmouseoveragent(el) {
    var hint = el.querySelector("p.hideme");
    console.log(hint);
    hint.style.display = 'block';

    hint.style.top = Math.max(el.offsetTop - hint.offsetHeight,0) + "px";
    hint.style.left = el.offsetLeft + "px";
    hint.style.border = "1px solid";
};

function onmouseoutagent(el) {
    var hint = el.querySelector("p.hideme");
    hint.style.display = 'none';
}