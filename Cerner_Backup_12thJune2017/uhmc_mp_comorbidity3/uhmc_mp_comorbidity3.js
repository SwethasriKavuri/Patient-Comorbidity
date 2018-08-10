// uhmc_mp_comorbidity3.js
// Neil Mendoza

//alert("test1");

var divimg = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\div.png";
var divSingleimg = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\divSingle.png";
var arrowdownimg = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\arrow-down.gif";
var arrowupimg = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\arrow-up.gif";
var button1img = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\button1.jpg";
var menuimg1 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image001.png";
var menuimg2 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image002.png";
var menuimg3 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image003.png";
var menuimg4 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image004.png";
var menuimg5 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image005.png";
var menuimg6 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image006.png";
var menuimg7 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image007.png";
var menuimg8 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image008.png";
var menuimg9 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image009.png";
var menuimg10 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image010.png";
var menuimg11 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image011.png";
var menuimg12 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image012.png";
var menuimg13 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image013.png";
var menuimg14 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image014.png";
var menuimg15 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image015.png";
var menuimg16 = "\\\\unvrnynas\\unvrny\\p159\\WININTEL\\static_content\\uhmc_mp_comorbidity3\\img\\image016.png";

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

var pcArr = [];
var pcRadiologyAndECGMap = {};
var over18 = 0;
var over1 = 0;

function init(){
getData();
buildPCbody();
buildCCheader();
buildCCbody();
buildOCheader();
buildOCbody();
$('#comorbrules').hide(); 
initRR(true);
return;
}


function getData(){
var reqObj = new XMLCclRequest();

reqObj.onreadystatechange = function (){
	if (reqObj.readyState == 4 && reqObj.status == 200){
		var msgText = reqObj.responseText;

		if (msgText != undefined && msgText != null){
			var jsonObj = eval('(' + msgText + ')');
			}
		if (jsonObj){
			over18 = jsonObj.TEMP.OVER_18;
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
	}

var param = "^MINE^,value($PAT_PersonId$),value($VIS_EncntrId$),value($USR_PersonId$)";

reqObj.open('GET',"uhmc_mp_comorbidity_data_poa",0);
reqObj.send(param);
 
return;
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

function buildPCbody(){
$('#pcbody').html("");
pcArr = [];
pcRadiologyAndECGMap = {};
var reqObj = new XMLCclRequest();

reqObj.onreadystatechange = function (){
	if (reqObj.readyState == 4 && reqObj.status == 200){
		var msgText = reqObj.responseText;		
		if (msgText != undefined && msgText != null){
			var jsonObj = eval('(' + msgText + ')');
			}
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
    }  
}

var param = "^MINE^,value($PAT_PersonId$),value($VIS_EncntrId$)";
reqObj.open('GET',"uhmc_mp_comorbidity_prev_data",0);
reqObj.send(param);

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

function buildCCbody(){
$('#ccbody').html("");
var newCC = 0;
var result = 0;
var tableBody = "";
tableBody += "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
		  + "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";

//************************************** ANEMIA *******************************************
if ($.inArray("^Anemia^",pcArr) == -1){
	result = anemia(minhb, minhc, hbLow, hcLow, minhb_prev, minhc_prev);
	if (result != 0){
		tmpw = 400;
		tmph = 320;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black;'>"
				  + "<input id='anemia' type='checkbox' value='GROUP' onclick=\"unCheck('anemia','anemiaChkGrp');\"/>Anemia :"
				  + "</span>"
				  + "<br><div id='anemiaChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageAbl','ablCol');\" onmouseout=\"mouseOutPara('imageAbl','ablCol')\">"
				  + "<td id='ablCol'>";
		if (result == 1){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tableBody += "<input id='anemiaAbl' type='checkbox' value='Anemia:Acute' onclick=\"checkMain('anemia','anemiaChkGrp');\">"
				  + "<a onmouseover=\"makeDivVisible('abl');\" onmouseout=\"makeDivHidden('abl')\">"
				  + "Acute&nbsp;&nbsp;</a></span>";
			tableBody += "</td>"
					  + "<td><a id='imageAbl' onmouseover=\"makeDivVisible('abl');\" onmouseout=\"makeDivHidden('abl');\" style='visibility: hidden;'> "
					  + "<img src='"+button1img+"' alt='Details'/></a></td>"
					  + "<td><div id='abl' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
					  + "<div id='abl' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
					  + "<br><span style = 'color: #858384; font-weight: bold;'>"
					  + "Values are:<br><br></span>";
		if (isEmpty(minhb) != true){ tableBody += 'Hemoglobin (Latest): <b>'+minhb+"</b> on "+minhbdate+'<br>'; }
		if (isEmpty(minhb_prev) != true){ tableBody += 'Hemoglobin (Previous Visit): <b>'+minhb_prev+"</b> on "+minhb_prevdate+'<br>'; }
		if (isEmpty(minhc) != true){ tableBody += 'Hematocrit (Latest): <b>'+minhc+"</b> on "+minhcdate+'<br>'; }
		if (isEmpty(minhc_prev) != true){ tableBody += 'Hematocrit (Previous Visit): <b>'+minhc_prev+"</b> on "+minhc_prevdate+'<br>'; }
		tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>";
		if (isEmpty(hbLow) != true){ tableBody += 'Current Hemoglobin < ' + hbLow + ' and' + '<br>'; }
		if (isEmpty(minhb_prev) != true && isEmpty(hbLow) != true){ tableBody += 'Previous Hemoglobin > ' + hbLow + '<br>'; } 
		if (isEmpty(minhc) != true && isEmpty(hcLow) != true){ tableBody += 'Current Hematocrit < ' + hcLow + ' and' + '<br>'; }    
		if (isEmpty(minhc_prev) != true && isEmpty(hcLow) != true){ tableBody += 'Previous Hematocrit > ' + hcLow + '<br>'; }
		tableBody += "</div></div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageCd','cdCol');\" onmouseout=\"mouseOutPara('imageCd','cdCol')\" >"
				  + "<td id = 'cdCol'>";
		if (result == 3){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tableBody += "<input id='amemiaCd' type='checkbox' value='Anemia:Chronic' onclick=\"checkMain('anemia','anemiaChkGrp');\">"
				  + "<a onmouseover=\"makeDivVisible('cd');\" onmouseout=\"makeDivHidden('cd')\">"
				  + "Chronic&nbsp;&nbsp;</a></span>";
		tableBody += "</td>"
				  + "<td><a id='imageCd' onmouseover=\"makeDivVisible('cd');\" onmouseout=\"makeDivHidden('cd');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='cd' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='cd' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";      	                                  
		if (isEmpty(minhb) != true){ tableBody += 'Hemoglobin (Latest): <b>'+minhb+"</b> on "+minhbdate+'<br>'; }
		if (isEmpty(minhb_prev) != true){ tableBody += 'Hemoglobin (Previous Visit): <b>'+minhb_prev+"</b> on "+minhb_prevdate+'<br>'; }
		if (isEmpty(minhc) != true){ tableBody += 'Hematocrit (Latest): <b>'+minhc+"</b> on "+minhcdate+'<br>'; }
		if (isEmpty(minhc_prev) != true){ tableBody += 'Hematocrit (Previous Visit): <b>'+minhc_prev+"</b> on "+minhc_prevdate+'<br>'; }
		tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>";
		if (isEmpty(minhb) != true){ tableBody += 'Both Current and Previous Hemoglobin < ' + hbLow + '<br>'; }
		if (isEmpty(minhc) != true){ tableBody += 'Both Current and Previous Hematocrit < ' + hcLow + '<br>'; }
		tableBody += "</div></div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageAnmNOS','anmNOScol');\" onmouseout=\"mouseOutPara('imageAnmNOS','anmNOScol')\">"
				  + "<td id = 'anmNOScol'>";
		if (result == 2){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tableBody += "<input id='anemiaNos' type='checkbox' value='Anemia:NOS' onclick=\"checkMain('anemia','anemiaChkGrp');\">"
				  + "<a onmouseover=\"makeDivVisible('anmNOS');\" onmouseout=\"makeDivHidden('anmNOS')\">"
				  + "Not otherwise specified&nbsp;&nbsp;</a></span>";
		tableBody += "</td>"
				  + "<td><a id='imageAnmNOS' onmouseover=\"makeDivVisible('anmNOS');\" onmouseout=\"makeDivHidden('anmNOS');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='anmNOS' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='anmNOS' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(minhb) != true){ tableBody += 'Hemoglobin (Latest): <b>'+minhb+"</b> on "+minhbdate+'<br>'; }
		if (isEmpty(minhb_prev) != true){ tableBody += 'Hemoglobin (Previous Visit): <b>'+minhb_prev+"</b> on "+minhb_prevdate+'<br>'; }
		if (isEmpty(minhc) != true){ tableBody += 'Hematocrit (Latest): <b>'+minhc+"</b> on "+minhcdate+'<br>'; }
		if (isEmpty(minhc_prev) != true){ tableBody += 'Hematocrit (Previous Visit): <b>'+minhc_prev+"</b> on "+minhc_prevdate+'<br>'; }             	                                           
		tableBody += " <br><br><span style = 'color: #858384; font-weight: bold;'> "
				  + "  Determined by the Rule:<br><br></span>";
		if (isEmpty(hbLow) != true){ tableBody += 'Current Hemoglobin < ' + hbLow + ' and previous visit\'s Hemoglobin is not available.' + '<br>'; }
		if (isEmpty(minhc) != true){ tableBody += 'Current Hematocrit < ' + hcLow + ' and previous visit\'s Hematocrit is not available.' + '<br>'; }
		tableBody += "</div></div>"
				  + "</td></tr> "
				  + "<tr onmouseover=\"mouseOverPara('imageAnmNOS','anmNOScol');\" onmouseout=\"mouseOutPara('imageAnmNOS','anmNOScol')\">"
				  + "<td id = 'anmNOScol'>"
				  + "<span style='color: black;'>"
				  + "<input id='anemiaBloodLoss' type='checkbox' value='Anemia:Due to blood loss' onclick=\"checkMain('anemia','anemiaChkGrp');\">"
				  + "Due to blood loss&nbsp;&nbsp;</span><br>"
				  + "</td></tr></table></div></td></tr></table></td></tr>"; 	    
		}
	}
	
//************************************** PANCYTOPENIA *******************************************
if ($.inArray("^Pancytopenia^",pcArr) == -1){
	result = pancytopenia(panwbc,panwbcLow,panrbc,panwbcLow,panplt,panpltLow);
	if (result == 1){
		tmpw = 320;
		tmph = 280;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black'>"
				  + "<input type='checkbox' id='pancytopenia' value='GROUP' onclick=\"unCheck('pancytopenia','pancytopeniaChkGrp');\"/>Pancytopenia :"
				  + "</span>"
				  + "<br><div id='pancytopeniaChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imagePanChemo','PanChemoCol');\" onmouseout=\"mouseOutPara('imagePanChemo','PanChemoCol')\">"
				  + "<td id ='PanChemoCol'><span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('panchemo');\" onmouseout=\"makeDivHidden('panchemo')\">"
				  + "<input type='checkbox' value='Pancytopenia:Due to Chemotherapy' onclick=\"checkMain('pancytopenia','pancytopeniaChkGrp');\"/>"
				  + "Due to Chemotherapy&nbsp;&nbsp;</a>"
				  + "</span></td>"
				  + "<td><a id='imagePanChemo' onmouseover=\"makeDivVisible('panchemo')\" "
				  + "onmouseout=\"makeDivHidden('panchemo');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='panchemo' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='panchemo' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(panwbc) != true){ tableBody += 'WBC Count: <b>'+panwbc+"</b> on "+panDate+'<br>'; }
		if (isEmpty(panrbc) != true){ tableBody += 'RBC Count: <b>'+panrbc+"</b> on "+panDate+'<br>'; }
		if (isEmpty(panplt) != true){ tableBody += 'PLT Count: <b>'+panplt+"</b> on "+panDate+'<br>'; }
		tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "WBC Count < " + panwbcLow + " and<br>"
				  + "RBC Count < " + panrbcLow + " and<br>"
				  + "PLT Count < " + panpltLow + "<br>"
				  + "</div></div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imagePanDrugs','PanDrugsCol');\" onmouseout=\"mouseOutPara('imagePanDrugs','PanDrugsCol')\">"
				  + "<td id ='PanDrugsCol'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('pandrugs');\" onmouseout=\"makeDivHidden('pandrugs')\">"
				  + "<input type='checkbox' value='Pancytopenia:Due to Drugs' onclick=\"checkMain('pancytopenia','pancytopeniaChkGrp');\"/>"
				  + "Due to Drugs&nbsp;&nbsp;</a>"
				  + "</span></td>"
				  + "<td><a id='imagePanDrugs' onmouseover=\"makeDivVisible('pandrugs')\" "
				  + "onmouseout=\"makeDivHidden('pandrugs');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='pandrugs' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='pandrugs' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(panwbc) != true){ tableBody += 'WBC Count: <b>'+panwbc+"</b> on "+panDate+'<br>'; }
		if (isEmpty(panrbc) != true){ tableBody += 'RBC Count: <b>'+panrbc+"</b> on "+panDate+'<br>'; }
		if (isEmpty(panplt) != true){ tableBody += 'PLT Count: <b>'+panplt+"</b> on "+panDate+'<br>'; }
		tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "WBC Count < " + panwbcLow + " and<br>"
				  + "RBC Count < " + panrbcLow + " and<br>"
				  + "PLT Count < " + panpltLow + "<br>"
				  + "</div></div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imagePanNOS','PanNOSCol');\" onmouseout=\"mouseOutPara('imagePanNOS','PanNOSCol')\">"
				  + "<td id ='PanNOSCol'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('PanNOS');\" onmouseout=\"makeDivHidden('PanNOS')\">"
				  + "<input type='checkbox' value='Pancytopenia:NOS' onclick=\"checkMain('pancytopenia','pancytopeniaChkGrp');\"/>"
				  + "Not otherwise specified&nbsp;&nbsp;</a>"
				  + "</span></td>"
				  + "<td><a id='imagePanNOS' onmouseover=\"makeDivVisible('PanNOS')\" "
				  + "onmouseout=\"makeDivHidden('PanNOS');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='PanNOS' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='PanNOS' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(panwbc) != true){ tableBody += 'WBC Count: <b>'+panwbc+"</b> on "+panDate+'<br>'; }
		if (isEmpty(panrbc) != true){ tableBody += 'RBC Count: <b>'+panrbc+"</b> on "+panDate+'<br>'; }
		if (isEmpty(panplt) != true){ tableBody += 'PLT Count: <b>'+panplt+"</b> on "+panDate+'<br>'; }
		tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "WBC Count < " + panwbcLow + " and<br>"
				  + "RBC Count < " + panrbcLow + " and<br>"
				  + "PLT Count < " + panpltLow + "<br>"
				  + "</div></div>"
				  + "</td></tr>"
				  + "</table></div></td><td></table></td></tr>";                    
		}
	}

//************************************** ACID BASE DISORDER *******************************************
if ($.inArray("^Acid Base Disorder^",pcArr) == -1){
	result = acidbasedisorder(minbicarbonate,maxbicarbonate);
	if (result > 0){
		tmpw = 360;
		tmph = 280;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black'>"
				  + "<input type='checkbox' id='acidbasedisorder' value='GROUP' onclick=\"unCheck('acidbasedisorder','acdChkGrp');\"/>Acid Base Disorder :"
				  + "</span>"
				  + "<br><div id='acdChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageacdAcid','acdAcidCol');\" onmouseout=\"mouseOutPara('imageacdAcid','acdAcidCol')\">"
				  + "<td id ='acdAcidCol'>";
		if (result == 1 || result == 3){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tableBody += "<a onmouseover=\"makeDivVisible('acdacid');\" onmouseout=\"makeDivHidden('acdacid')\">"
				  + "<input type='checkbox' value='Acid Base Disorder:Metabolic Acidosis' onclick=\"checkMain('acidbasedisorder','acdChkGrp');\"/>"
				  + "Metabolic Acidosis&nbsp;&nbsp;</a>"
				  + "</span></td>"
				  + "<td><a id='imageacdAcid' onmouseover=\"makeDivVisible('acdacid')\" "
				  + "onmouseout=\"makeDivHidden('acdacid');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='acdacid' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='acdacid' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(minbicarbonate) != true){ tableBody += 'Serum Bicarbonate: <b>'+minbicarbonate+"</b> on "+minbicarbonateDate+'<br>'; }
		tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "Serum Bicarbonate < 18 mEq/l"
				  + "</div></div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageacdAlka','acdAlkaCol');\" onmouseout=\"mouseOutPara('imageacdAlka','acdAlkaCol')\">"
				  + "<td id ='acdAlkaCol'>";
		if (result == 2 || result == 3){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tableBody += "<a onmouseover=\"makeDivVisible('acdalka');\" onmouseout=\"makeDivHidden('acdalka')\">"
				  + "<input type='checkbox' value='Acid Base Disorder:Metabolic Alkalosis' onclick=\"checkMain('acidbasedisorder','acdChkGrp');\"/>"
				  + "Metabolic Alkalosis&nbsp;&nbsp;</a>"
				  + "</span></td>"
				  + "<td><a id='imageacdAlka' onmouseover=\"makeDivVisible('acdalka')\" "
				  + "onmouseout=\"makeDivHidden('acdalka');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='acdalka' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='acdalka' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(maxbicarbonate) != true){ tableBody += 'Serum Bicarbonate: <b>'+maxbicarbonate+"</b> on "+maxbicarbonateDate+'<br>'; }
		tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "Serum Bicarbonate > 30 mEq/l"
				  + "</div></div>"
				  + "</td></tr>"
				  + "</table></div></td><td></table></td></tr>";                    
		}
	}

//************************************** KIDNEY INJURY *******************************************
if ($.inArray("^Kidney Injury^",pcArr) == -1){
	if (isEmpty(creatHigh) == true){ creatHigh = "1.2"; }
	result = kidneyInjury(maxcreatResult, maxcreatprevResult, creatHigh);
	if (result != 0){
		tmpw = 400;
		tmph = 260;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black'>"
				  + "<input type='checkbox' id='aki' value='GROUP' onclick=\"unCheck('aki','akiChkGrp');\"/>Kidney Injury :"
				  + "</span>"
				  + "<br><div id='akiChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
				  + "<td id='RfAcuteCol'>";
		if (result == 2){ tableBody += "<span style='color: blue;'>"; }
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
		if (result == 3){ tableBody += "<span style='color: blue;'>"; }
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
		if (result == 4){ tableBody += "<span style='color: blue;'>"; }
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
		if (result == 1){ tableBody += "<span style='color: blue;'>"; }
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
				  + "</td></tr>"			
				  + "</table></td></tr>";
	}	
}

//************************************** Malnutrition *******************************************
if ($.inArray("^Malnutrition^",pcArr) == -1 && $.inArray("^Underweight^",pcArr) == -1){
	result = malnutrition(minweight,maxheight);
	if (result != 0){
		tmpw = 300;
		tmph = 260;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black;'>"
				  + "<input id='Malnutrition' type='checkbox' value='GROUP' onclick=\"unCheck('Malnutrition','MalnutritionChkGrp');\"/>Malnutrition :"
				  + "</span>"
				  + "<br><div id='MalnutritionChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageMalnutritionUnderweight','MalnutritionUnderweightCol');\" onmouseout=\"mouseOutPara('imageMalnutritionUnderweight','MalnutritionUnderweightCol');\" >"
				  + "<td id='MalnutritionUnderweightCol'>";
		if (result >= 18.0 && result < 20.0){ tableBody += "<span style='color:blue;'>"; }
		else{ tableBody += "<span style='color:black;'>"; }
		tableBody += "<a onmouseover=\"makeDivVisible('MalnutritionUnderweight');\" onmouseout=\"makeDivHidden('MalnutritionUnderweight');\">"
				  + "<input type='checkbox' value='Underweight' onclick=\"checkMain('Malnutrition','MalnutritionChkGrp');\">"
				  + "Underweight&nbsp;&nbsp;</a>"
				  + "</span>";
		tableBody += "</td>"
				  + "<td><a id='imageMalnutritionUnderweight' onmouseover=\"makeDivVisible('MalnutritionUnderweight');\" onmouseout=\"makeDivHidden('MalnutritionUnderweight');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='MalnutritionUnderweight' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='MalnutritionUnderweight' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>" 
				  + "Height: &nbsp;<b>"+maxheight+"</b> on "+maxheightDate+"<br>"
				  + "Weight: <b>"+minweight+"</b> on "+minweightDate+"<br>"
				  + "BMI: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+result+"</b><br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'>"  
				  + "Determined by the Rule:<br><br></span>" 
				  + "BMI >= 18.0 and < 20.0"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageMalnutritionMild','MalnutritionMildCol');\" onmouseout=\"mouseOutPara('imageMalnutritionMild','MalnutritionMildCol');\">"
				  + "<td id='MalnutritionMildCol'>";
		if (result >= 17.0 && result < 18.0){ tableBody += "<span style='color:blue;'>"; }
		else{ tableBody += "<span style='color:black;'>"; }
		tableBody += "<a onmouseover=\"makeDivVisible('MalnutritionMild');\" onmouseout=\"makeDivHidden('MalnutritionMild')\">"
				  + "<input type='checkbox' value='Malnutrition:Mild' onclick=\"checkMain('Malnutrition','MalnutritionChkGrp');\">"
				  + "Mild&nbsp;&nbsp;</a>"
				  + "</span>"; 
		tableBody += "</td>"
				  + "<td><a id='imageMalnutritionMild' onmouseover=\"makeDivVisible('MalnutritionMild');\" onmouseout=\"makeDivHidden('MalnutritionMild');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='MalnutritionMild' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='MalnutritionMild' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>" 
				  + "Height: &nbsp;<b>"+maxheight+"</b> on "+maxheightDate+"<br>"
				  + "Weight: <b>"+minweight+"</b> on "+minweightDate+"<br>"
				  + "BMI: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+result+"</b><br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'>"   
				  + "Determined by the Rule:<br><br></span>" 
				  + "BMI >= 17.0 and < 18.0"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageMalnutritionModerate','MalnutritionModerateCol');\" onmouseout=\"mouseOutPara('imageMalnutritionModerate','MalnutritionModerateCol');\">"
				  + "<td id='MalnutritionModerateCol'>";
		if (result >= 16.0 && result < 17.0){ tableBody += "<span style='color:blue;'>"; }
		else{ tableBody += "<span style='color:black;'>"; }
		tableBody += "<a onmouseover=\"makeDivVisible('MalnutritionModerate');\" onmouseout=\"makeDivHidden('MalnutritionModerate')\">"
				  + "<input type='checkbox' value='Malnutrition:Moderate' onclick=\"checkMain('Malnutrition','MalnutritionChkGrp');\">"
				  + "Moderate&nbsp;&nbsp;</a>"
				  + "</span>"; 
		tableBody += "</td>"
				  + "<td><a id='imageMalnutritionModerate' onmouseover=\"makeDivVisible('MalnutritionModerate');\" onmouseout=\"makeDivHidden('MalnutritionModerate');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='MalnutritionModerate' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='MalnutritionModerate' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>" 
				  + "Height: &nbsp;<b>"+maxheight+"</b> on "+maxheightDate+"<br>"
				  + "Weight: <b>"+minweight+"</b> on "+minweightDate+"<br>"
				  + "BMI: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+result+"</b><br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'>" 
				  + "Determined by the Rule:<br><br></span>" 
				  + "BMI >= 16.0 and < 17.0"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageMalnutritionSevere','MalnutritionSevereCol');\" onmouseout=\"mouseOutPara('imageMalnutritionSevere','MalnutritionSevereCol');\">"
				  + "<td id='MalnutritionSevereCol'>";
		if (result < 16.0){ tableBody += "<span style='color:blue;'>"; }
		else{ tableBody += "<span style='color:black;'>"; }
		tableBody += "<a onmouseover=\"makeDivVisible('MalnutritionSevere');\" onmouseout=\"makeDivHidden('MalnutritionSevere')\">"
				  + "<input type='checkbox' value='Malnutrition:Severe' onclick=\"checkMain('Malnutrition','MalnutritionChkGrp');\">"
				  + "Severe&nbsp;&nbsp;</a>"
				  + "</span>"; 
		tableBody += "</td>"
				  + "<td><a id='imageMalnutritionSevere' onmouseover=\"makeDivVisible('MalnutritionSevere');\" onmouseout=\"makeDivHidden('MalnutritionSevere');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='MalnutritionSevere' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='MalnutritionSevere' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>" 
				  + "Height: &nbsp;<b>"+maxheight+"</b> on "+maxheightDate+"<br>"
				  + "Weight: <b>"+minweight+"</b> on "+minweightDate+"<br>"
				  + "BMI: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+result+"</b><br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'>" 
				  + "Determined by the Rule:<br><br></span>" 
				  + "BMI < 16.0"
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></div></td></tr></table></td></tr>";
		}
	}

//************************************** MORBID OBESITY *******************************************
if ($.inArray("^Morbid Obesity^",pcArr) == -1){
	result = morbidObesity(maxweight, minheight);
	if (result != 0){
		tmpw = 300;
		tmph = 260;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table>" 
				  + "<tr onmouseover=\"mouseOverPara('imageMobesity','MobesityCol1');\" onmouseout=\"mouseOutPara('imageMobesity','MobesityCol1');\" >"
				  + "<td id='MobesityCol1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('Mobesity');\" onmouseout=\"makeDivHidden('Mobesity');\">"
				  + "<input type='checkbox' id='morbidObesityId' value='Morbid Obesity'>Morbid Obesity&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageMobesity' onmouseover=\"makeDivVisible('Mobesity');\" onmouseout=\"makeDivHidden('Mobesity');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='Mobesity' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='Mobesity' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Height: &nbsp<b>"+minheight+"</b> on "+minheightDate+"<br>"
				  + "Weight: <b>"+maxweight+"</b> on "+maxweightDate+"<br>"
				  + "BMI: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+result+"</b><br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "BMI > 40 "
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></td></tr>";   
		}
	}
	
//************************************** DEHYDRATION *******************************************
if ($.inArray("^Dehydration^",pcArr) == -1){
	result = dehydration(maxcreatResult,bunMaxResult,over1);
	if (result > 0){
		tmpw = 400;
		tmph = 280;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table>" 
				  + "<tr onmouseover=\"mouseOverPara('imageDehydration','DehydrationCol1');\" onmouseout=\"mouseOutPara('imageDehydration','DehydrationCol1');\" >"
				  + "<td id='DehydrationCol1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('Dehydration');\" onmouseout=\"makeDivHidden('Dehydration');\">"
				  + "<input type='checkbox' id='dehydrationId' value='Dehydration'>Dehydration&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageDehydration' onmouseover=\"makeDivVisible('Dehydration');\" onmouseout=\"makeDivHidden('Dehydration');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='Dehydration' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='Dehydration' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Bun:&nbsp;<b>"+bunMaxResult+"</b> on "+bunMaxDate+"<br>"
				  + "Creatinine:&nbsp;<b>"+maxcreatResult+"</b> on "+maxcreatDate+"<br>"
				  + "Bun/Creatine Ratio:&nbsp;<b>"+result+"</b><br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "The ratio of BUN/creatinine > 20 for age up to 1 year or<br>"
				  + "The ratio of BUN/creatinine > 30 for age > 1 year"
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></td></tr>";   
		}
	}

//********************************************* Elevated Blood Glucose*************************************************
if ($.inArray("^Elevated Blood Glucose^",pcArr) == -1){
	result = Diabetes(maxglucResult,glucHigh,maxcreatResult,creatHigh);
	if (result > 0){
		tmpw = 350;
		tmph = 250;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black'>"
				  + "<input type='checkbox' id='Ebg' value='GROUP' onclick=\"unCheck('Ebg','EbgChkGrp');\"/>Elevated Blood Glucose :"
				  + "</span>"
				  + "<span>"
				  + "</span>"
				  + "<br><div id='EbgChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageHyperglycemia','HyperglycemiaCol1');\" onmouseout=\"mouseOutPara('imageHyperglycemia','HyperglycemiaCol1');\">"
				  + "<td id='HyperglycemiaCol1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('EbgHyperglycemia');\" onmouseout=\"makeDivHidden('EbgHyperglycemia');\">"
				  + "<input type='checkbox' value='Elevated Blood Glucose:Hyperglycemia' onclick=\"checkMain('Ebg','EbgChkGrp');\">Hyperglycemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageHyperglycemia' onmouseover=\"makeDivVisible('EbgHyperglycemia');\" onmouseout=\"makeDivHidden('EbgHyperglycemia');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EbgHyperglycemia' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EbgHyperglycemia' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"                  
				  + "Glucose level: <b>"+maxglucResult+"</b> on "+maxglucDate+"<br><br>"
				  + "*** consider ordering HgbA1c<br>"                     
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Glucose Value > 140"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageDiabetesType1','DiabetesType1Col1');\" onmouseout=\"mouseOutPara('imageDiabetesType1','DiabetesType1Col1');\" >"
				  + "<td id='DiabetesType1Col1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('DiabetesType1');\" onmouseout=\"makeDivHidden('DiabetesType1');\">"
				  + "<input type='checkbox' value='Elevated Blood Glucose:Diabetes Type 1 with Hyperglycemia' onclick=\"checkMain('Ebg','EbgChkGrp');\">Diabetes Type 1 with Hyperglycemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageDiabetesType1' onmouseover=\"makeDivVisible('DiabetesType1');\" onmouseout=\"makeDivHidden('DiabetesType1');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='DiabetesType1' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='DiabetesType1' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Glucose level: <b>"+maxglucResult+"</b> on "+maxglucDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Glucose Value > 140 "
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageDiabetesType2','DiabetesType2Col1');\" onmouseout=\"mouseOutPara('imageDiabetesType2','DiabetesType2Col1');\" >"
				  + "<td id='DiabetesType2Col1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('DiabetesType2');\" onmouseout=\"makeDivHidden('DiabetesType2');\">"
				  + "<input type='checkbox' value='Elevated Blood Glucose:Diabetes Type 2 with Hyperglycemia' onclick=\"checkMain('Ebg','EbgChkGrp');\">Diabetes Type 2 with Hyperglycemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageDiabetesType2' onmouseover=\"makeDivVisible('DiabetesType2');\" onmouseout=\"makeDivHidden('DiabetesType2');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='DiabetesType2' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='DiabetesType2' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Glucose level: <b>"+maxglucResult+"</b> on "+maxglucDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Glucose Value > 140"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageDiabetesNephropathy','DiabetesNephropathyCol1');\" onmouseout=\"mouseOutPara('imageDiabetesNephropathy','DiabetesNephropathyCol1');\" >"
				  + "<td id='DiabetesNephropathyCol1'>";
		if (result == 2){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tableBody += "<a onmouseover=\"makeDivVisible('DiabetesNephropathy');\" onmouseout=\"makeDivHidden('DiabetesNephropathy');\">"
				  + "<input type='checkbox' value='Elevated Blood Glucose:Diabetes with Hyperglycemia and Nephropathy' onclick=\"checkMain('Ebg','EbgChkGrp');\">Diabetes with Nephropathy&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageDiabetesNephropathy' onmouseover=\"makeDivVisible('DiabetesNephropathy');\" onmouseout=\"makeDivHidden('DiabetesNephropathy');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='DiabetesNephropathy' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='DiabetesNephropathy' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Glucose level: <b>"+maxglucResult+"</b> on "+maxglucDate+"<br>";
		if (isEmpty(maxcreatResult) != true){ tableBody += "Creatinine value: <b>"+maxcreatResult+"</b> on "+maxcreatDate+"<br>"; }
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Glucose Value > 140 and<br>"
				  + "Creatinine Value > 1.2"
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></div></td></tr></table></td></tr>";
		}
	}

//********************************************* Hypoxia*************************************************
if ($.inArray("^Hypoxia^",pcArr) == -1){
	result = hypoxia(oximetryLow ,minoximetry);
	if (result){
		tmpw = 370;
		tmph = 220;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table>" 
				  + "<tr onmouseover=\"mouseOverPara('imageHypoxia','HypoxiaCol1');\" onmouseout=\"mouseOutPara('imageHypoxia','HypoxiaCol1');\" >"
				  + "<td id='HypoxiaCol1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('Hypoxia');\" onmouseout=\"makeDivHidden('Hypoxia');\"><input type='checkbox' value='Hypoxia'>"
				  + "Hypoxia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageHypoxia' onmouseover=\"makeDivVisible('Hypoxia');\" onmouseout=\"makeDivHidden('Hypoxia');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='Hypoxia' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='Hypoxia' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Pulse Oximetry level: <b>"+minoximetry+"</b> on "+minoximetryDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"                            
				  + "Pulse Oximetry level < 90 "
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></td></tr>";
		}
	}

//********************************************* Granulocytopenia*************************************************
if ($.inArray("^Granulocytopenia^",pcArr) == -1){
	result = granulocytopenia(minneutrophil, neutrophilLow);
	if (result == 1){
		tmpw = 330;
		tmph = 220;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table>" 
				  + "<tr onmouseover=\"mouseOverPara('imageGranulocytopenia','GranulocytopeniaCol1');\" onmouseout=\"mouseOutPara('imageGranulocytopenia','GranulocytopeniaCol1');\">"
				  + "<td id='GranulocytopeniaCol1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('Granulocytopenia');\" onmouseout=\"makeDivHidden('Granulocytopenia');\"><input type='checkbox' value='Granulocytopenia'>"
				  + "Granulocytopenia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageGranulocytopenia' onmouseover=\"makeDivVisible('Granulocytopenia');\" onmouseout=\"makeDivHidden('Granulocytopenia');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='Granulocytopenia' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='Granulocytopenia' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Neutrophil: <b>"+minneutrophil+"</b> on "+minneutrophilDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Neutrophil level < " + neutrophilLow
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></td></tr>";
		}
	}

//********************************************* Lactic acidosis *************************************************
if ($.inArray("^Lactic Acidosis^",pcArr) == -1){
	result = lacticAcidosis(maxLacticAcid,LacticAcidHigh);
	if (result == 1){
		tmpw = 330;
		tmph = 220;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageLacticAcidosis','LacticAcidosisCol1');\" onmouseout=\"mouseOutPara('imageLacticAcidosis','LacticAcidosisCol1');\">"
				  + "<td id='LacticAcidosisCol1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('LacticAcidosis');\" onmouseout=\"makeDivHidden('LacticAcidosis');\"><input type='checkbox' value='Lactic Acidosis'>"
				  + "Lactic Acidosis&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageLacticAcidosis' onmouseover=\"makeDivVisible('LacticAcidosis');\" onmouseout=\"makeDivHidden('LacticAcidosis');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='LacticAcidosis' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='LacticAcidosis' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Lactic Acid: <b>"+maxLacticAcid+"</b> on "+maxLacticAcidDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Lactic Acid level > 2.0"
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></td></tr>";
		}
	}
	
//************************************** Electrolyte Abnormality *******************************************
var result1 = hypo(potassiumLow, minpotassiumResult),
	result2 = hyper(potassiumHigh, maxpotassiumResult),
	result3 = hypo(sodiumLow, minsodiumResult),
	result4 = hyper(sodiumHigh, maxsodiumResult),
	result5 = hypo(calciumLow, mincalciumResult),
	result6 = hyper(calciumHigh, maxcalciumResult),
	result7 = hypo(phosphorusLow, minphosphorusResult),
	result8 = hyper(phosphorusHigh, maxphosphorusResult),
	result9 = hypo(magnesiumLow, minmagnesiumResult),
	result10 = hyper(magnesiumHigh, maxmagnesiumResult);
if ((result1 && $.inArray("^Hypokalemia^",pcArr) == -1) 
	|| (result2 && $.inArray("^Hyperkalemia^",pcArr) == -1) 
	|| (result3 && $.inArray("^Hyponatremia^",pcArr) == -1) 
	|| (result4 && $.inArray("^Hypernatremia^",pcArr) == -1) 
	|| (result5 && $.inArray("^Hypocalcemia^",pcArr) == -1) 
	|| (result6 && $.inArray("^Hypercalcemia^",pcArr) == -1) 
	|| (result7 && $.inArray("^Hypophosphatemia^",pcArr) == -1) 
	|| (result8 && $.inArray("^Hyperphosphatemia^",pcArr) == -1) 
	|| (result9 && $.inArray("^Hypomagnesemia^",pcArr) == -1) 
	|| (result10 && $.inArray("^Hypermagnesemia^",pcArr) == -1)){
	tmpw = 330;
	tmph = 220;
	tmpmt = -35;
	tmpml = 30;
	newCC = 1;
	tableBody += "<tr><td><table><tr><td>"
		      + "<span style='color: black;'>"
		      + "<input id='Ea' type='checkbox' value='GROUP' onclick=\"unCheck('Ea','EaChkGrp');\"/>Electrolyte Abnormality :"
		      + "</span>"
		      + "<br><div id='EaChkGrp' style='margin-left: 120px;'><table>";
	if (result1 && $.inArray("^Hypokalemia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHypokal','EaHypokalCol');\" onmouseout=\"mouseOutPara('imageEaHypokal','EaHypokalCol');\">"
				  + "<td id='EaHypokalCol'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('EaHypokal');\" onmouseout=\"makeDivHidden('EaHypokal');\">"
				  + "<input type='checkbox' id='hypoKalemia' value='Hypokalemia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hypokalemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHypokal' onmouseover=\"makeDivVisible('EaHypokal');\"  onmouseout=\"makeDivHidden('EaHypokal');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHypokal' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHypokal' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Potassium: <b>"+minpotassiumResult+"</b> on "+minpotassiumDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Potassium level:&nbsp;[" + potassiumLow + "-" + potassiumHigh + "]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>";
		}
	if (result2 && $.inArray("^Hyperkalemia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHyperkal','EaHyperkalCol');\" onmouseout=\"mouseOutPara('imageEaHyperkal','EaHyperkalCol');\">"
				  + "<td id='EaHyperkalCol'>"
				  + "<span style='color: blue'>"
				  + "<a onmouseover=\"makeDivVisible('EaHyperkal');\" onmouseout=\"makeDivHidden('EaHyperkal');\">"
				  + "<input type='checkbox' id='hyperKalemia' value='Hyperkalemia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hyperkalemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHyperkal' onmouseover=\"makeDivVisible('EaHyperkal');\" onmouseout=\"makeDivHidden('EaHyperkal');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHyperkal' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHyperkal' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Potassium: <b>"+maxpotassiumResult+"</b> on "+maxpotassiumDate+"<br>"
				  + "<br><br><span style='color: #858384;font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Potassium level:&nbsp;[" + potassiumLow + "-" + potassiumHigh + "]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>";
		}
	if (result3 && $.inArray("^Hyponatremia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHyponat','EaHyponatCol');\" onmouseout=\"mouseOutPara('imageEaHyponat','EaHyponatCol');\">"
				  + "<td id='EaHyponatCol'>"
				  + "<span style='color: blue'>"
				  + "<a onmouseover=\"makeDivVisible('EaHyponat');\" onmouseout=\"makeDivHidden('EaHyponat');\">"
				  + "<input type='checkbox' id='hypoAtremia' value='Hyponatremia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hyponatremia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHyponat' onmouseover=\"makeDivVisible('EaHyponat');\" onmouseout=\"makeDivHidden('EaHyponat');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHyponat' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHyponat' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Sodium: <b>"+minsodiumResult+"</b> on "+minsodiumDate+"<br>"
				  + "<br><br><span style='color: #858384;font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Sodium level:&nbsp;[" + sodiumLow + "-" + sodiumHigh + "]" 
				  + "</div>"
				  + "</div>"
				  + "</td></tr>";
		}
	if (result4 && $.inArray("^Hypernatremia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHypernat','EaHypernatCol');\" onmouseout=\"mouseOutPara('imageEaHypernat','EaHypernatCol');\">"
				  + "<td id='EaHypernatCol'>"
				  + "<span style='color: blue'>"
				  + "<a onmouseover=\"makeDivVisible('EaHypernat');\" onmouseout=\"makeDivHidden('EaHypernat');\">"
				  + "<input type='checkbox' id='hyperAtremia' value='Hypernatremia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hypernatremia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHypernat' onmouseover=\"makeDivVisible('EaHypernat');\" onmouseout=\"makeDivHidden('EaHypernat');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHypernat' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHypernat' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Sodium: <b>"+maxsodiumResult+"</b> on "+maxsodiumDate+"<br>"
				  + "<br><br><span style='color: #858384;font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Sodium level:&nbsp;[" + sodiumLow + "-" + sodiumHigh + "]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>";
		}
	if (result5 && $.inArray("^Hypocalcemia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHypocal','EaHypocalCol');\" onmouseout=\"mouseOutPara('imageEaHypocal','EaHypocalCol');\">"
				  + "<td id='EaHypocalCol'>"
				  + "<span style='color: blue'>"
				  + "<a onmouseover=\"makeDivVisible('EaHypocal');\" onmouseout=\"makeDivHidden('EaHypocal');\">"
				  + "<input type='checkbox' id='hypoCalcemia' value='Hypocalcemia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hypocalcemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHypocal' onmouseover=\"makeDivVisible('EaHypocal');\" onmouseout=\"makeDivHidden('EaHypocal');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHypocal' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHypocal' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Calcium: <b>"+mincalciumResult+"</b> on "+mincalciumDate+"<br>"
				  + "<br><br><span style='color: #858384;font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Calcium level:&nbsp;[" + calciumLow + "-" + calciumHigh + "]"
				  + "</div>"
				  + "</div> "
				  + "</td></tr>";
		}
	if (result6 && $.inArray("^Hypercalcemia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHypercal','EaHypercalCol');\" onmouseout= \"mouseOutPara('imageEaHypercal','EaHypercalCol');\" >"
				  + "<td id='EaHypercalCol'>"
				  + "<span style='color: blue'>"
				  + "<a onmouseover=\"makeDivVisible('EaHypercal');\" onmouseout=\"makeDivHidden('EaHypercal');\">"
				  + "<input type='checkbox' id='hyperCalcemia' value='Hypercalcemia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hypercalcemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHypercal' onmouseover=\"makeDivVisible('EaHypercal');\" onmouseout=\"makeDivHidden('EaHypercal');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHypercal' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHypercal' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Calcium: <b>"+maxcalciumResult+"</b> on "+maxcalciumDate+"<br>"
				  + "<br><br><span style='color: #858384;font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Calcium level:&nbsp;[" + calciumLow + "-" + calciumHigh + "]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>";
		}
	if (result7 && $.inArray("^Hypophosphatemia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHypophos','EaHypophosCol');\" onmouseout=\"mouseOutPara('imageEaHypophos','EaHypophosCol');\">"
				  + "<td id='EaHypophosCol'>"
				  + "<span style='color: blue'>"
				  + "<a onmouseover=\"makeDivVisible('EaHypophos');\" onmouseout=\"makeDivHidden('EaHypophos');\">"
				  + "<input type='checkbox' id='hypoPhosphatemia' value='Hypophosphatemia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hypophosphatemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHypophos' onmouseover=\"makeDivVisible('EaHypophos');\" onmouseout=\"makeDivHidden('EaHypophos');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHypophos' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHypophos' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Phosphorus: <b>"+minphosphorusResult+"</b> on "+minphosphorusDate+"<br>"
				  + "<br><br><span style='color: #858384;font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Phosphorus level:&nbsp;[" + phosphorusLow + "-" + phosphorusHigh + "]"
				  + "</div>"
				  + "</div> "
				  + "</td></tr>";
		}
	if (result8 && $.inArray("^Hyperphosphatemia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHyperphos','EaHyperphosCol');\" onmouseout= \"mouseOutPara('imageEaHyperphos','EaHyperphosCol');\" >"
				  + "<td id='EaHyperphosCol'>"
				  + "<span style='color: blue'>"
				  + "<a onmouseover=\"makeDivVisible('EaHyperphos');\" onmouseout=\"makeDivHidden('EaHyperphos');\">"
				  + "<input type='checkbox' id='hyperPhosphatemia' value='Hyperphosphatemia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hyperphosphatemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHyperphos' onmouseover=\"makeDivVisible('EaHyperphos');\" onmouseout=\"makeDivHidden('EaHyperphos');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHyperphos' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHyperphos' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Phosphorus: <b>"+maxphosphorusResult+"</b> on "+maxphosphorusDate+"<br>"
				  + "<br><br><span style='color: #858384;font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Phosphorus level:&nbsp;[" + phosphorusLow + "-" + phosphorusHigh + "]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>";
		}
	if (result9 && $.inArray("^Hypomagnesemia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHypomag','EaHypomagCol');\" onmouseout=\"mouseOutPara('imageEaHypomag','EaHypomagCol');\">"
				  + "<td id='EaHypomagCol'>"
				  + "<span style='color: blue'>"
				  + "<a onmouseover=\"makeDivVisible('EaHypomag');\" onmouseout=\"makeDivHidden('EaHypomag');\">"
				  + "<input type='checkbox' id='hypoMagnesemia' value='Hypomagnesemia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hypomagnesemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHypomag' onmouseover=\"makeDivVisible('EaHypomag');\" onmouseout=\"makeDivHidden('EaHypomag');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHypomag' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHypomag' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Magnesium: <b>"+minmagnesiumResult+"</b> on "+minmagnesiumDate+"<br>"
				  + "<br><br><span style='color: #858384;font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Magnesium level:&nbsp;[" + magnesiumLow + "-" + magnesiumHigh + "]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>";
		}
	if (result10 && $.inArray("^Hypermagnesemia^",pcArr) == -1){
		tableBody += "<tr onmouseover=\"mouseOverPara('imageEaHypermag','EaHypermagCol');\" onmouseout= \"mouseOutPara('imageEaHypermag','EaHypermagCol');\">"
				  + "<td id='EaHypermagCol'>"
				  + "<span style='color: blue'>"
				  + "<a onmouseover=\"makeDivVisible('EaHypermag');\" onmouseout=\"makeDivHidden('EaHypermag');\">"
				  + "<input type='checkbox' id='hyperMagnesemia' value='Hypermagnesemia' onclick=\"checkMain('Ea','EaChkGrp');\">"
				  + "Hypermagnesemia&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageEaHypermag' onmouseover=\"makeDivVisible('EaHypermag');\" onmouseout=\"makeDivHidden('EaHypermag');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='EaHypermag' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='EaHypermag' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Magnesium: <b>"+maxmagnesiumResult+"</b> on "+maxmagnesiumDate+"<br>"
				  + "<br><br><span style='color: #858384;font-weight: bold;'>"
				  + "Reference Range:<br><br></span>"
				  + "Magnesium level:&nbsp;[" + magnesiumLow + "-" + magnesiumHigh + "]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>";
		}
	tableBody += "</table></div></td></tr></table></td></tr>";
	}
	
//************************************** Obesity *******************************************
if ($.inArray("^Obesity^",pcArr) == -1){
	result = obesity(maxweight, minheight);
	if (result != 0){
		tmpw = 300;
		tmph = 260;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageobesity','obesityCol1');\" onmouseout=\"mouseOutPara('imageobesity','obesityCol1');\">"
				  + "<td id='obesityCol1'><span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('obesity');\" onmouseout=\"makeDivHidden('obesity');\"><input type='checkbox' value='Obesity'>"
				  + "Obesity&nbsp;&nbsp;</a></span></td>"
				  + "<td><a id='imageobesity' onmouseover=\"makeDivVisible('obesity');\" onmouseout=\"makeDivHidden('obesity');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='obesity' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='obesity' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Height: &nbsp<b>"+minheight+"</b> on "+minheightDate+"<br>"
				  + "Weight: <b>"+maxweight+"</b> on "+maxweightDate+"<br>"
				  + "BMI: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+result+"</b><br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "BMI > 30 and < 40"
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></td></tr>";
		}
	}
	
//************************************** Hypertension *******************************************
if ($.inArray("^Hypertension^",pcArr) == -1 && $.inArray("^Elevated Blood Pressure^",pcArr) == -1){
	result = hypertension(maxsysBP,maxdiasBP);
	if (result == 1){
		tmpw = 520;
		tmph = 250;
		tmpmt = -35;
		tmpml = 39;
		newCC = 1;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black'>"
				  + "<input type='checkbox' id='ht' value='GROUP' onclick=\"unCheck('ht','htChkGrp');\"/>Hypertension :"
				  + "</span>"
				  + "<br><div id='htChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageHt','HtCol');\" onmouseout=\"mouseOutPara('imageHt','HtCol')\">"
				  + "<td id ='HtCol'><span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('htht');\" onmouseout=\"makeDivHidden('htht')\">"
				  + "<input type='checkbox' value='Hypertension' onclick=\"checkMain('ht','htChkGrp');\"/>"
				  + "Hypertension&nbsp;&nbsp;</a>"
				  + "</span></td>"
				  + "<td><a id='imageHt' onmouseover=\"makeDivVisible('htht')\" "
				  + "onmouseout=\"makeDivHidden('htht');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='htht' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='htht' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(maxsysBP) != true && isEmpty(maxdiasBP) != true){ tableBody += "Systolic BP/Diastolic BP: &nbsp;<b>"+maxsysBP+"/"+maxdiasBP+"</b> on "+maxsysBPDate+"<br>"; }
		if (isEmpty(lastsysBP) != true && isEmpty(lastdiasBP) != true){ tableBody += "Systolic BP/Diastolic BP(most recent): &nbsp;<b>"+lastsysBP+"/"+lastdiasBP+"</b> on "+lastsysBPDate+"<br>"; }
		tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "Systolic BP > 140 or Diastolic BP > 90"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageElevBP','ElevBPCol');\" onmouseout=\"mouseOutPara('imageElevBP','ElevBPCol')\">"
				  + "<td id ='ElevBPCol'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('ElevBP');\" onmouseout=\"makeDivHidden('ElevBP')\">"
				  + "<input type='checkbox' value='Elevated Blood Pressure' onclick=\"checkMain('ht','htChkGrp');\"/>"
				  + "Elevated Blood Pressure &nbsp;&nbsp;</a>"
				  + "</span></td>"
				  + "<td><a id='imageElevBP' onmouseover=\"makeDivVisible('ElevBP')\" "
				  + "onmouseout=\"makeDivHidden('ElevBP');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='ElevBP' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='ElevBP' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(maxsysBP) != true && isEmpty(maxdiasBP) != true){ tableBody += "Systolic BP/Diastolic BP: &nbsp;<b>"+maxsysBP+"/"+maxdiasBP+"</b> on "+maxsysBPDate+"<br>"; }
		if (isEmpty(lastsysBP) != true && isEmpty(lastdiasBP) != true){ tableBody += "Systolic BP/Diastolic BP(most recent): &nbsp;<b>"+lastsysBP+"/"+lastdiasBP+"</b> on "+lastsysBPDate+"<br>"; }
		tableBody += "<br><br><span style = 'color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "Systolic BP > 140 or Diastolic BP > 90"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "</table></div></td><td></table></td></tr>";                    
		}
	}
	
//************************************** UTI *******************************************
if ($.inArray("^UTI^",pcArr) == -1){
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
	result = UTI(maxUtiWbc,urini,urinest);
	if (result != 0){
		tmpw = 480;
		tmph = 340;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageUti','UtiCol1');\" onmouseout=\"mouseOutPara('imageUti','UtiCol1');\">"
				  + "<td id='UtiCol1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('Uti');\" onmouseout=\"makeDivHidden('Uti');\">"
				  + "<input id='UrinTI' type='checkbox' value='UTI' onclick=\"unCheck('UrinTI','UTIgrp');\"/>UTI"
				  + "</a></span>"
				  + "</td>"
				  + "<td><a id='imageUti' onmouseover=\"makeDivVisible('Uti');\" onmouseout=\"makeDivHidden('Uti');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>" 
				  + "<td><div id='Uti' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='Uti' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Urinalysis, WBC Count: <b>"+maxUtiWbc+"</b> on "+maxUtiWbcDate+"<br>";
		if (equalsIgnoreCase("POSITIVE", maxurini) || equalsIgnoreCase("LARGE", maxurini) || equalsIgnoreCase("MOD", maxurini) || 
			equalsIgnoreCase("SMALL", maxurini) || equalsIgnoreCase("TRACE", maxurini)){
			tableBody += "Urinalysis, Nitrite: <b>"+urini+"</b> on "+urinidate+"<br>"
			}
		if (equalsIgnoreCase(maxurinest,"POSITIVE")|| equalsIgnoreCase(maxurinest,"LARGE") || equalsIgnoreCase( maxurinest,"MOD") || 
			equalsIgnoreCase(maxurinest,"SMALL") || equalsIgnoreCase(maxurinest,"TRACE")){
			tableBody += "Urinalysis, Leukocyte Esterase: <b>"+urinest+"</b> on "+urinestdate+"<br>"
			}
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'>" 
				  + "Determined by the Rule: <br><br></span>"
				  + "Urinalysis, WBC Count > 5 and<br>"
				  + "either<br>"
				  + "Urinalysis, Leukocyte Esterase is NOT NEGATIVE or<br>"
				  + "Urinalysis, Nitrite is NOT NEGATIVE" 
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr><td></td><td>"                
				  + "<span style='color: black;'><div id='UTIgrp'>"
				  + "<input type='checkbox' id='catheterAssoc' value='UTI:Catheter Associated'"
				  + " onclick=\"checkMain('UrinTI','UTIgrp');\">Catheter Associated</div></span>"                    
				  + "</td></tr></table></td></tr>";
		}
	}
	
//************************************** SIRS *******************************************
if (over18 == 1){
//	&& $.inArray("^SIRS due to noninfectious process^",pcArr) == -1
//	&& $.inArray("^Sepsis due to suspected or actual infection^",pcArr) == -1
//	&& $.inArray("^Severe Sepsis^",pcArr) == -1
//	&& $.inArray("^Septic Shock^",pcArr) == -1){

	result = sirs(maxhRate, maxrRate, maxwbc, minwbc, maxtemp, mintemp, maxband);
	if (result >= 2){
		tmpw = 400;
		tmph = 470;
		tmpmt = -200;
		tmpml = 35;
		newCC = 1;
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
				  + "<td id='SIRSseveresepsis'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
		result = sirs2(maxLacticAcid,minsysBP,minmap,maxbilirubin,maxcreatResult,minplt,maxptinr,maxaptt);
		if (result == 1 || result == 3){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tmpmt = -220;
		tmph = 490;
		tableBody += "<a onmouseover=\"makeDivVisible('SIRSseveresepsisdiv');\" onmouseout=\"makeDivHidden('SIRSseveresepsisdiv');\">"
				  + "<input type='checkbox' id='ipSIRSseveresepsis' value='Severe Sepsis' onclick=\"checkMain2('sirs','sirsChkGrp','SIRSsepsisID');\">"
				  + "Severe Sepsis&nbsp;&nbsp;</a></span></td>"
				  + "<td><a id='imageSIRSseveresepsis' onmouseover='javascript:makeDivVisible(\"SIRSseveresepsisdiv\");' onmouseout='javascript:makeDivHidden(\"SIRSseveresepsisdiv\");' style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='SIRSseveresepsisdiv' class='imageBack' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divimg+"' width='100%' height='100%'/>"
				  + "<div id='SIRSseveresepsisdiv' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-50)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-25)+"px;'>"
				  + "<br> <span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(maxLacticAcid) != true &&  parseDouble(maxLacticAcid) > 2.0){
			tableBody += "Lactic Acid: <b>"+maxLacticAcid+"</b> on "+maxLacticAcidDate+"<br>";
			}
		if (isEmpty(minsysBP) != true &&  parseDouble(minsysBP) < 90.0){
			tableBody += "Systolic BP: <b>"+minsysBP+"</b> on "+minsysBPDate+"<br>";
			}
		if (isEmpty(minmap) != true &&  parseDouble(minmap) < 65.0){
			tableBody += "MAP: <b>"+minmap+"</b> on "+minmapDate+"<br>";
			}
		if (isEmpty(maxbilirubin) != true &&  parseDouble(maxbilirubin) > 2.0){
			tableBody += "Total Bilirubin: <b>"+maxbilirubin+"</b> on "+maxbilirubinDate+"<br>";
			}
		if (isEmpty(maxcreatResult) != true &&  parseDouble(maxcreatResult) >= 2.0){
			tableBody += "Creatinine: <b>"+maxcreatResult+"</b> on "+maxcreatDate+"<br>";
			}
		if (isEmpty(minplt) != true &&  parseDouble(minplt) < 100.0){
			tableBody += "PLT Count: <b>"+minplt+"</b> on "+minpltDate+"<br>";
			}
		if (isEmpty(maxptinr) != true &&  parseDouble(maxptinr) > 1.5){
			tableBody += "Prothrombin Time, INR: <b>"+maxptinr+"</b> on "+maxptinrDate+"<br>";
			}
		if (isEmpty(maxaptt) != true &&  parseDouble(maxaptt) > 60.0){
			tableBody += "aPTT(in seconds): <b>"+maxaptt+"</b> on "+maxapttDate+"<br>";
			}
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br>"
				  + "If any of the following exists:<br></span><br>"
				  + "Lactic Acid > 2.0<br>"
				  + "Systolic BP < 90<br>"
				  + "MAP < 65<br>"
				  + "Total Bilirubin > 2<br>"
				  + "Creatinine >= 2.0<br>"
				  + "PLT Count < 100k<br>"
				  + "Prothrombin Time, INR > 1.5<br>"
				  + "aPTT > 60 seconds<br><br>"
				  + "*** in absence of other causes of organ dysfunction"
				  + "</div></div></td></tr>"
				  + "<tr id='SIRSsepsissepticshock' style='display:none;margin-left:60px;' onmouseover='javascript:mouseOverPara(\"imageSIRSsepticshock\",\"SIRSsepticshock\");' onmouseout='javascript:mouseOutPara(\"imageSIRSsepticshock\",\"SIRSsepticshock\");'>"
				  + "<td id='SIRSsepticshock'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
		if (result == 2 || result == 3){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tmpmt = -140;
		tmph = 320;
		tableBody += "<a onmouseover=\"makeDivVisible('SIRSsepticshockdiv');\" onmouseout=\"makeDivHidden('SIRSsepticshockdiv');\">"
				  + "<input type='checkbox' id='ipSIRSsepticshock' value='Septic Shock' onclick=\"checkMain2('sirs','sirsChkGrp','ipSIRSseveresepsis');\">"
				  + "Septic Shock&nbsp;&nbsp;</a></span></td>"
				  + "<td><a id='imageSIRSsepticshock' onmouseover='javascript:makeDivVisible(\"SIRSsepticshockdiv\");' onmouseout='javascript:makeDivHidden(\"SIRSsepticshockdiv\");' style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='SIRSsepticshockdiv' class='imageBack' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divimg+"' width='100%' height='100%'/>"
				  + "<div id='SIRSsepticshockdiv' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-40)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-20)+"px;'>"
				  + "<br> <span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(maxLacticAcid) != true &&  parseDouble(maxLacticAcid) >= 4.0){
			tableBody += "Lactic Acid: <b>"+maxLacticAcid+"</b> on "+maxLacticAcidDate+"<br>";
			}
		if (isEmpty(minsysBP) != true &&  parseDouble(minsysBP) < 90.0){
			tableBody += "Systolic BP: <b>"+minsysBP+"</b> on "+minsysBPDate+"<br>";
			}
		if (isEmpty(minmap) != true &&  parseDouble(minmap) < 65.0){
			tableBody += "MAP: <b>"+minmap+"</b> on "+minmapDate+"<br>";
			}
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br>"
				  + "If any of the following exists:<br></span><br>"
				  + "Lactic Acid >= 4.0<br>"
				  + "Systolic BP < 90 (unresponsive to fluid bolus)<br>"
				  + "MAP < 65 (unresponsive to fluid bolus)"
				  + "</div></div></td></tr>"
				  + "</table></td></tr>";
		}
	}

//************************************** Respiratory Failure *******************************************
if ($.inArray("^Respiratory Failure^",pcArr) == -1){
	result = respFailure(maxpco2, maxEtco2, maxprevpco2, maxprevEtco2, minpo2, minoximetry);
	if (result != 0){
		tmpw = 380;
		tmph = 240;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black;'>"
				  + "<input id='respFail' type='checkbox' value='GROUP' onclick=\"unCheck('respFail','respFailChkGrp');\"/>Respiratory Failure :"
				  + "</span>"
				  + "<br><div id='respFailChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageRespAcute','RespAcuteCol');\" onmouseout=\"mouseOutPara('imageRespAcute','RespAcuteCol');\" >"
				  + "<td id='RespAcuteCol'>";
		if (result == 2){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tableBody += "<a onmouseover=\"makeDivVisible('RespAcute');\" onmouseout=\"makeDivHidden('RespAcute');\">"
				  + "<input type='checkbox' value='Respiratory Failure:Acute' onclick=\"checkMain('respFail','respFailChkGrp');\">"
				  + "Acute&nbsp;&nbsp;</a>"
				  + "</span>";
		tableBody += "</td>"
				  + "<td><a id='imageRespAcute' onmouseover=\"makeDivVisible('RespAcute');\" onmouseout=\"makeDivHidden('RespAcute');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='RespAcute' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='RespAcute' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(minpo2) != true && parseDouble(minpo2) <= 60 ){
			tableBody += "PO<sub>2</sub>: <b>"+minpo2+"</b> on "+minpo2Date+"<br> ";
			}
		if (isEmpty(minoximetry) != true && parseDouble(minoximetry) <= 90 ){
			tableBody += "Pulse Oximetry: <b>"+minoximetry+"</b> on "+minoximetryDate+"<br>";
			}
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "PO<sub>2</sub> <= 60 or Pulse Oximetry <= 90"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageRespChronic','RespChronicCol');\" onmouseout=\"mouseOutPara('imageRespChronic','RespChronicCol');\">"
				  + "<td id='RespChronicCol'>";
		if (result == 3){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tmph = 300;
		tableBody += "<a onmouseover=\"makeDivVisible('RespChronic');\" onmouseout=\"makeDivHidden('RespChronic')\">"
				  + "<input type='checkbox' value='Respiratory Failure:Chronic' onclick=\"checkMain('respFail','respFailChkGrp');\">"
				  + "Chronic&nbsp;&nbsp;</a>"
				  + "</span>";
		tableBody += "</td>"
				  + "<td><a id='imageRespChronic' onmouseover=\"makeDivVisible('RespChronic');\" onmouseout=\"makeDivHidden('RespChronic');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='RespChronic' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='RespChronic' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(maxpco2) != true &&  parseDouble(maxpco2) > 45){ 
			tableBody += "PCO<sub>2</sub>: <b>"+maxpco2+"</b> on "+maxpco2Date+"<br>";
			}
		if (isEmpty(maxEtco2) != true &&  parseDouble(maxEtco2) > 45){
			tableBody += "ETCO<sub>2</sub>: <b>"+maxEtco2+"</b> on "+maxEtco2Date+"<br>";
			}
		if (isEmpty(maxprevpco2) != true &&  parseDouble(maxprevpco2) > 45){
			tableBody += "Previous PCO<sub>2</sub>: <b>"+maxprevpco2+"</b> on "+maxprevpco2Date+"<br>";
			}
		if (isEmpty(maxprevEtco2) != true &&  parseDouble(maxprevEtco2) > 45){
			tableBody += "Previous ETCO<sub>2</sub>: <b>"+maxprevEtco2+"</b> on "+maxprevEtco2Date+"<br>";
			}
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "(Current PCO<sub>2</sub> or Current ETCO<sub>2</sub> > 45) and<br>"
				  + "(Previous PCO<sub>2</sub> or Previous ETCO<sub>2</sub> > 45)"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageRespACChronic','RespACChronicCol');\" onmouseout=\"mouseOutPara('imageRespACChronic','RespACChronicCol');\" >"
				  + "<td id='RespACChronicCol'>";
		if (result == 4){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tmpw = 450;
		tmph = 375;
		tmpmt = -60;
		tmpml = 35;
		tableBody += "<a onmouseover=\"makeDivVisible('RespACChronic');\" onmouseout=\"makeDivHidden('RespACChronic');\">"
				  + "<input type='checkbox' value='Respiratory Failure:Acute on Chronic' onclick=\"checkMain('respFail','respFailChkGrp');\">"
				  + "Acute on Chronic&nbsp;&nbsp;</a>"
				  + "</span>";
		tableBody += "</td>"
				  + "<td><a id='imageRespACChronic' onmouseover=\"makeDivVisible('RespACChronic');\" onmouseout=\"makeDivHidden('RespACChronic');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='RespACChronic' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='RespACChronic' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>";
		if (isEmpty(minpo2) != true && parseDouble(minpo2) <= 60 ){
			tableBody += "PO<sub>2</sub>: <b>"+minpo2+"</b> on "+minpo2Date+"<br>";
			}
		if (isEmpty(minoximetry) != true && parseDouble(minoximetry) <= 90 ) {
			tableBody += "Pulse Oximetry: <b>"+minoximetry+"</b> on "+minoximetryDate+"<br>";
			}
		if (isEmpty(maxpco2) != true && parseDouble(maxpco2) > 45){
			tableBody += "PCO<sub>2</sub>: <b>"+maxpco2+"</b> on "+maxpco2Date+"<br>";
			}
		if (isEmpty(maxEtco2) != true &&  parseDouble(maxEtco2) > 45){
			tableBody += "ETCO<sub>2</sub>: <b>"+maxEtco2+"</b> on "+maxEtco2Date+"<br>";
			}
		if (isEmpty(maxprevpco2) != true &&  parseDouble(maxprevpco2) > 45){
			tableBody += "Previous PCO<sub>2</sub>: <b>"+maxprevpco2+"</b> on "+maxprevpco2Date+"<br>";
			}
		if (isEmpty(maxprevEtco2) != true &&  parseDouble(maxprevEtco2) > 45){
			tableBody += "Previous ETCO<sub>2</sub>: <b>"+maxprevEtco2+"</b> on "+maxprevEtco2Date+"<br>";
			}
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "(Current PO<sub>2</sub> <= 60 or Current Pulse Oximetry <= 90) and<br>"
				  + "(Current PCO<sub>2</sub> or Current ETCO<sub>2</sub> > 45) and<br>"
				  + "(Previous PCO<sub>2</sub> or Previous ETCO<sub>2</sub> > 45)"
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></div></td></tr></table></td></tr>";
		}
	}

//************************************** Shock *******************************************
if ($.inArray("^Shock^",pcArr) == -1){
	result = shock(minsysBP,maxct,ctHigh);
	if (result > 0){
		newCC = 1;
		tmpw = 340;
		tmph = 270;
		tmpmt = -35;
		tmpml = 30;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black;'>"
				  + "<input id='shock' type='checkbox' value='GROUP' onclick=\"unCheck('shock','shockChkGrp');\">Shock :</span>"
				  + "<br><div id='shockChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageCardShock2','CardShockCol2');\" onmouseout=\"mouseOutPara('imageCardShock2','CardShockCol2')\">"
				  + "<td id='CardShockCol2'>";
		if (result == 1){ tableBody += "<span style='color: blue;'>"; }
		else{ tableBody += "<span style='color: black;'>"; }
		tableBody += "<a onmouseover=\"makeDivVisible('CardShock2');\" onmouseout=\"makeDivHidden('CardShock2');\">"
				  + "<input type='checkbox' value='Shock:Cardiogenic Shock' onclick=\"checkMain('shock','shockChkGrp');\">"
				  + "Cardiogenic Shock&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageCardShock2' onmouseover=\"makeDivVisible('CardShock2');\" onmouseout=\"makeDivHidden('CardShock2');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='CardShock2' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='CardShock2' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Systolic BP: <b>"+minsysBP+"</b> on "+minsysBPDate+"<br>";
		if (isEmpty(maxct) != true){ tableBody += "Cardiac Troponin: <b>"+maxct+"</b> on "+maxctDate+"<br>"; }
		tableBody += "<br><br><span style='color: #858384; font-weight: bold;'>"
				  + "Determined by the Rule:<br><br></span>"
				  + "Systolic BP < 90 and<br>";
		if (isEmpty(ctHigh) != true){ tableBody += "Cardiac Troponin > "+ctHigh; }
		else{ tableBody += "Cardiac Troponin > normal high"; }
		tableBody += "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageShock3','ShockCol3');\" onmouseout=\"mouseOutPara('imageShock3','ShockCol3');\">"
				  + "<td id='ShockCol3'><span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('Shock3');\" onmouseout=\"makeDivHidden('Shock3');\">"
				  + "<input type='checkbox' value='Shock:Hypovolemic' onclick=\"checkMain('shock','shockChkGrp');\">"
				  + "Hypovolemic&nbsp;&nbsp;</a></span></td>"
				  + "<td><a id='imageShock3' onmouseover=\"makeDivVisible('Shock3');\" onmouseout=\"makeDivHidden('Shock3');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='Shock3' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='Shock3' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Systolic BP: <b>"+minsysBP+"</b> on "+minsysBPDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Systolic BP < 90"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageShock5','ShockCol5');\" onmouseout=\"mouseOutPara('imageShock5','ShockCol5');\">"
				  + "<td id = \"ShockCol5\"><span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('Shock5');\" onmouseout=\"makeDivHidden('Shock5');\">"
				  + "<input type='checkbox' value='Shock:NOS' onclick=\"checkMain('shock','shockChkGrp');\">"
				  + "Not otherwise specified&nbsp;&nbsp;</a></span></td>"
				  + "<td><a id='imageShock5' onmouseover=\"makeDivVisible('Shock5');\" onmouseout=\"makeDivHidden('Shock5');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='Shock5' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='Shock5' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Systolic BP: <b>"+minsysBP+"</b> on "+minsysBPDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Systolic BP < 90"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "</table></div></td></tr></table></td></tr>";
		}
	}
	

//************************************** Hypotension *******************************************
if ($.inArray("^Hypotension^",pcArr) == -1){
	result = shock(minsysBP,maxct,ctHigh);
	if (result > 0){
		newCC = 1;
		tmpw = 340;
		tmph = 270;
		tmpmt = -35;
		tmpml = 30;
		tableBody += "<tr><td><table>" 
				  + "<tr onmouseover=\"mouseOverPara('imageHypotension','HypotensionCol1');\" onmouseout=\"mouseOutPara('imageHypotension','HypotensionCol1');\" >"
				  + "<td id='HypotensionCol1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('Hypotension');\" onmouseout=\"makeDivHidden('Hypotension');\">"
				  + "<input type='checkbox' id='dehydrationId' value='Hypotension'>Hypotension&nbsp;&nbsp;</a></span>"
				  + "</td>"
				  + "<td><a id='imageHypotension' onmouseover=\"makeDivVisible('Hypotension');\" onmouseout=\"makeDivHidden('Hypotension');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='Hypotension' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='Hypotension' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Systolic BP: <b>"+minsysBP+"</b> on "+minsysBPDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Systolic BP < 90<br><br>"
				  + "*** Responsive to fluid resuscitation"
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></td></tr>";   
		}
	}

//********************************************* Hypoglycemia*************************************************
if ($.inArray("^Hypoglycemia^",pcArr) == -1){
	result = Hypoglycemia(minglucResult,glucLow);
	if (result == 1){
		tmpw = 320;
		tmph = 240;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table><tr><td>"
				  + "<span style='color: black;'>"
				  + "<input id='Hypoglycemia' type='checkbox' value='GROUP' onclick=\"unCheck('Hypoglycemia','HypoglycemiaChkGrp');\"/>Hypoglycemia :"
				  + "</span>"
				  + "<br><div id='HypoglycemiaChkGrp' style='margin-left: 120px;'><table>"
				  + "<tr onmouseover=\"mouseOverPara('imageHypoglycemia','HypoglycemiaCol');\" onmouseout=\"mouseOutPara('imageHypoglycemia','HypoglycemiaCol');\">"
				  + "<td id='HypoglycemiaCol'>"
				  + "<span style='color:blue;'>"
				  + "<a onmouseover=\"makeDivVisible('Hypoglycemiaonly');\" onmouseout=\"makeDivHidden('Hypoglycemiaonly')\">"
				  + "<input type='checkbox' value='Hypoglycemia:Hypoglycemia' onclick=\"checkMain('Hypoglycemia','HypoglycemiaChkGrp');\">"
				  + "Hypoglycemia&nbsp;&nbsp;</a>"
				  + "</span>"
				  + "</td>"
				  + "<td><a id='imageHypoglycemia' onmouseover=\"makeDivVisible('Hypoglycemiaonly');\" onmouseout=\"makeDivHidden('Hypoglycemiaonly');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='Hypoglycemiaonly' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='Hypoglycemiaonly' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Glucose level: <b>"+minglucResult+"</b> on "+minglucDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Reference Range:<br><br></span>"
				  + "Glucose Value: ["+glucLow+"-"+glucHigh+"]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageHypoglycemiaType1','HypoglycemiaType1Col');\" onmouseout=\"mouseOutPara('imageHypoglycemiaType1','HypoglycemiaType1Col');\">"
				  + "<td id='HypoglycemiaType1Col'>"
				  + "<span style='color:blue;'>"
				  + "<a onmouseover=\"makeDivVisible('HypoglycemiaType1');\" onmouseout=\"makeDivHidden('HypoglycemiaType1')\">"
				  + "<input type='checkbox' value='Hypoglycemia:Diabetes Type 1 with Hypoglycemia' onclick=\"checkMain('Hypoglycemia','HypoglycemiaChkGrp');\">"
				  + "Diabetes Type 1 with Hypoglycemia&nbsp;&nbsp;</a>"
				  + "</span>"
				  + "</td>"
				  + "<td><a id='imageHypoglycemiaType1' onmouseover=\"makeDivVisible('HypoglycemiaType1');\" onmouseout=\"makeDivHidden('HypoglycemiaType1');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='HypoglycemiaType1' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='HypoglycemiaType1' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Glucose level: <b>"+minglucResult+"</b> on "+minglucDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Reference Range:<br><br></span>"
				  + "Glucose Value: ["+glucLow+"-"+glucHigh+"]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr>"
				  + "<tr onmouseover=\"mouseOverPara('imageHypoglycemiaType2','HypoglycemiaType2Col');\" onmouseout=\"mouseOutPara('imageHypoglycemiaType2','HypoglycemiaType2Col');\">"
				  + "<td id='HypoglycemiaType2Col'>"
				  + "<span style='color:blue;'>"
				  + "<a onmouseover=\"makeDivVisible('HypoglycemiaType2');\" onmouseout=\"makeDivHidden('HypoglycemiaType2')\">"
				  + "<input type='checkbox' value='Hypoglycemia:Diabetes Type 2 with Hypoglycemia' onclick=\"checkMain('Hypoglycemia','HypoglycemiaChkGrp');\">"
				  + "Diabetes Type 2 with Hypoglycemia&nbsp;&nbsp;</a>"
				  + "</span>"
				  + "</td>"
				  + "<td><a id='imageHypoglycemiaType2' onmouseover=\"makeDivVisible('HypoglycemiaType2');\" onmouseout=\"makeDivHidden('HypoglycemiaType2');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='HypoglycemiaType2' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='HypoglycemiaType2' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Glucose level: <b>"+minglucResult+"</b> on "+minglucDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Reference Range:<br><br></span>"
				  + "Glucose Value: ["+glucLow+"-"+glucHigh+"]"
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></div></td></tr></table></td></tr>";
		}
	}

//********************************************* Hypercholesterolemia *************************************************
if ($.inArray("^HyperCholesterolemia^",pcArr) == -1){
	result = HyperCholesterolemia(maxcholesterolResult);
	if (result == 1){
		tmpw = 390;
		tmph = 240;
		tmpmt = -35;
		tmpml = 30;
		newCC = 1;
		tableBody += "<tr><td><table>" 
				  + "<tr onmouseover=\"mouseOverPara('imageCholesterol','CholesterolCol1');\" onmouseout=\"mouseOutPara('imageCholesterol','CholesterolCol1');\">"
				  + "<td id='CholesterolCol1'>"
				  + "<span style='color: blue;'>"
				  + "<a onmouseover=\"makeDivVisible('HyperChol');\" onmouseout=\"makeDivHidden('HyperChol');\"><input type='checkbox' value='HyperCholesterolemia'>"
				  + "HyperCholesterolemia</a></span>"
				  + "</td>"
				  + "<td><a id='imageCholesterol' onmouseover=\"makeDivVisible('HyperChol');\" onmouseout=\"makeDivHidden('HyperChol');\" style='visibility: hidden;'>"
				  + "<img src='"+button1img+"' alt='Details'/></a></td>"
				  + "<td><div id='HyperChol' class='imageBackSingle' style='width:"+tmpw+"px;height:"+tmph+"px;margin-top:"+tmpmt+"px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
				  + "<div id='HyperChol' class='dynamicDiv' style='width:"+(tmpw-tmpml-tmpml)+"px;height:"+(tmph-35)+"px;margin-left:"+tmpml+"px;margin-top:-"+(tmph-15)+"px;'>"
				  + "<br><span style='color: #858384; font-weight: bold;'>"
				  + "Values are:<br><br></span>"
				  + "Total Cholesterol level: <b>"+maxcholesterolResult+"</b> on "+maxcholesterolDate+"<br>"
				  + "<br><br><span style='color: #858384; font-weight: bold;'> "
				  + "Determined by the Rule:<br><br></span>"
				  + "Total Cholesterol level > 200"
				  + "</div>"
				  + "</div>"
				  + "</td></tr></table></td></tr>";
		} 
	}
if (newCC == 0 && pcArr.length > 0){ tableBody += "<tr><td>There are no new computed comorbidities at this time.</td></tr>"; }
else if (newCC == 0 && pcArr.length == 0){ tableBody += "<tr><td>There are no computed comorbidities at this time.</td></tr>"; }
tableBody += "</table>"
		  + "</td></tr></table>";
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
if ($.inArray("^Seizure^",pcArr) == -1){
	tableBody += "<tr><td><br><input id='ipSeizure' type='checkbox' value='Seizure'>Seizure</td></tr>";
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
		radcomorbstr += "~"+data[1]+"^,"+data[3];
		nonechecked = 0;
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

function showReport(perid,eventid){
var objPVViewerMPage = window.external.DiscernObjectFactory("PVVIEWERMPAGE");
objPVViewerMPage.CreateDocViewer(perid);
objPVViewerMPage.AppendDocEvent(eventid);
objPVViewerMPage.LaunchDocViewer(); 
	
return;
}