function isEmpty(data) {
if (typeof(data) == 'number' || typeof(data) == 'boolean'){ return false; }
else if (typeof(data) == 'undefined' || data === null){ return true; }
else if (typeof(data.length) != 'undefined'){ return data.length == 0; }
var count = 0;
for (var i in data){
	if (data.hasOwnProperty(i)){ count ++; }
	}
return count == 0;
}

function equalsIgnoreCase(s1,s2){
	s1 = "" + s1;
	s2 = "" + s2;
	return s1.toLowerCase() == s2.toLowerCase();
}

function parseDouble(value){
	return parseFloat(value);
	
if (typeof value == "string"){
	value = value.match(/^-?\d*/)[0];
	}

return !isNaN(parseInt(value)) ? value * 1 : NaN;
}

function isDouble(value){  
	return !isNaN(value);
}

//<!-- ************************************** Anemia ******************************************* -->
function anemia(minhb, minhc, hbLow, hcLow, minhb_prev, minhc_prev) {
// When minhb or minhc value is an empty string: return 0;
var ret_val = 0;
var acute = new Boolean(false);
var prev_avail = new Boolean(true);
var chronic = new Boolean(false);

// We first check if curent conditions are anemic. If yes, then we proceed, else, there is no point
if (!(isEmpty(minhb)) && !(isEmpty(hbLow))
	&& isDouble(minhb) && isDouble(hbLow)
	&& parseDouble(minhb) < parseDouble(hbLow)){
	acute = true;
	}

if (!(isEmpty(minhc)) && !(isEmpty(hcLow))
	&& isDouble(minhc) && isDouble(hcLow)
	&& parseDouble(minhc) < parseDouble(hcLow)){
	acute = true;
	}

// If both are empty, then previous info is not available (if this comes with acute, then NOS)
if (isEmpty(minhb_prev) && isEmpty(minhc_prev)){
	prev_avail = false;
	}

// If acute is not true, we will not enter the if condition
if (prev_avail == true && acute == true){
	if (!(isEmpty(minhb_prev)) && !(isEmpty(hbLow))
		&& isDouble(minhb_prev) && isDouble(hbLow)
		&& parseDouble(minhb_prev) < parseDouble(hbLow)){
		chronic = true;
		}

	if (!(isEmpty(minhc_prev)) && !(isEmpty(hcLow))
		&& isDouble(minhc_prev) && isDouble(hcLow)
		&& parseDouble(minhc_prev) < parseDouble(hcLow)){
		chronic = true;
		}
	}
	
// Only if previous values are available and they are not chronic, tbut, acute is true, then we say it is acute
if (acute == true && prev_avail == true && chronic == false){ ret_val = 1; }
// If previous values are unavailable and acute is true, we say it is anemic
else if ( acute == true && prev_avail == false){ ret_val = 2; }
// If chronic is true, then we don't care about anything else, we say it is chronic
else if (chronic == true){ ret_val = 3; }

return ret_val;
}

//<!-- ************************************** Kidney Injury ******************************************* -->
function acuteKidneyInjury(maxcreatResult,  maxcreatprevResult, creatHigh) {
if (isEmpty(creatHigh)){ creatHigh = "1.2"; }

if (isEmpty(maxcreatResult) != true && isEmpty(maxcreatprevResult) != true){
	if (isDouble(maxcreatprevResult) && isDouble(maxcreatResult) && isDouble(creatHigh)){

		if ((parseDouble(maxcreatprevResult) == -99999 || parseDouble(maxcreatprevResult) == 99999) && parseDouble(maxcreatResult) > parseDouble(creatHigh)){
			return 1 ; //  1 is for NOS
			}
		else if (((parseDouble(maxcreatResult) > parseDouble(creatHigh)) && parseDouble(maxcreatprevResult) <= parseDouble(creatHigh)) 
					|| ((parseDouble(maxcreatResult) > 1.5 * parseDouble(maxcreatprevResult))&& parseDouble(maxcreatprevResult)!=-99999)){
			return 2; // 2 is for acute
			}		
		else if (((parseDouble(maxcreatResult) > parseDouble(creatHigh)) && parseDouble(maxcreatprevResult) > parseDouble(creatHigh))){
			return 3; //3 is for chronic
			}
	}
}

return 0;
}

//<!-- ************************************** Chronic Kidney Disease ******************************************* -->
function chronicKidneyDisease(maxcreatResult, maxcreatprevResult, creatHigh) {		
if (isDouble(maxcreatResult) && isDouble(creatHigh) && isDouble(maxcreatprevResult)){
	if (isEmpty(maxcreatResult) || isEmpty(creatHigh)){
		return 0;
		}
	else if (isEmpty(maxcreatprevResult) && parseDouble(maxcreatResult) > parseDouble(creatHigh)){
		return 1; //return 1;
		}
	else if( (parseDouble(maxcreatResult) > parseDouble(creatHigh)) && (parseDouble(maxcreatprevResult) > parseDouble(creatHigh))){
		return 0; //return 2;
		}
	}
return 0;
}

//<!-- ************************************** Dehydration ******************************************* -->	
function dehydration(creatinineValue, bunValue){
// When the value is not present Return false as we cannot compute
if (isEmpty(creatinineValue)|| isEmpty(bunValue)){
	return 0;
	}
else {
	var creatinine =0.0;
	var hydration = 0.0;
	if (isDouble(creatinineValue)){ creatinine = parseDouble(creatinineValue); }
	if (isDouble(bunValue) && creatinine!=0.0){ hydration = parseDouble(bunValue)/creatinine; }
	// Return the hydration value indicating presence
	if (hydration > 20){
		var round_hydration = hydration * 100;
		round_hydration = Math.round(round_hydration);
		hydration = round_hydration / 100;
		return hydration;
		}
	// Return 0 indicating absence
	else{ return 0; }
	}
}

//<!-- ********************************************* Elevated Blood Glucose************************************************* -->
function Diabetes(maxglucResult, glucHigh) {
// When the glucose value is not available Return 0 as we cannot compute
if (isEmpty(maxglucResult)){ return 0; }

// When value is grater than 150 Return 1 indication diabetes
if (isDouble(maxglucResult)){
	if (parseDouble(maxglucResult) > 150){ return 1; }
	}
// When none of the above conditions match Return 0 indicating abscence of Diabetes
return 0;
} 

//<!-- ********************************************* Hypoglycemia************************************************* -->
function HypoGylecmia(minglucResult, glucLow){
if (isEmpty(minglucResult)){ return 0; } 

if (isEmpty(glucLow)){ glucLow ="70"; }

// When value is less than 70 Return 1 indication Hyperglycemia
if (isDouble(minglucResult) && isDouble(glucLow)){
	if (parseDouble(minglucResult) < parseDouble(glucLow)){ return 1; }
	}
// When none of the above conditions match Return 0 indicating absence of HypoGylecmia
return 0;
}

//<!-- ********************************************* Hypoxia************************************************* -->
function hypoxia(oximetryLow, minoximetry) {
// When the value is not present Return false as we cannot compute
if (isEmpty(minoximetry) != true  && isEmpty(oximetryLow) != true){
	if (isDouble(minoximetry) && parseDouble(minoximetry) <  90){ return true; }
	else{ return false; } 
	} 
// When the value is present and the condition does not match Return false indicating absence
return false;
}

//<!-- ********************************************* Granulocytopenia************************************************* -->
function granulocytopenia(minneutrophil, neutrophilLow){
// When the value is not present Return false as we cannot compute
if (isEmpty(minneutrophil) != true
	&& isDouble(minneutrophil) && isDouble(neutrophilLow)
	&& parseDouble(minneutrophil) < parseDouble(neutrophilLow)){ 
	return 1; 
	}
return 0;
}

//<!-- ********************************************* Lactic acidosis ************************************************* -->
function lacticAcidosis(maxLacticAcid, LacticAcidHigh){
// When the value is not present Return false as we cannot compute
if (isEmpty(maxLacticAcid) || isEmpty(LacticAcidHigh)){ return 0; }
// When value is greater than High value (2.2) Return 1 indication Lactic acidosis
else if (isDouble(maxLacticAcid) && isDouble(LacticAcidHigh) && parseDouble(maxLacticAcid) > parseDouble(LacticAcidHigh)){ return 1; }
// When none of the above conditions match Return 0 indicating absence of Lactic acidosis
return 0;
}

//<!-- ************************************** Electrolyte Abnormality ******************************************* -->
function hypo(low, resVal) {
// When the value is not present Return false as we cannot compute
if (isEmpty(resVal) != true  && isEmpty(low) != true
	&& isDouble(resVal) && isDouble(low)
	&& parseDouble(resVal) < parseDouble(low)){
	return true;
	}
else{ return false; }
// When the value is present and the condition does not match Return false indicating absence
return false;
}

function hyper(high, resVal) {
// When the value is not present Return false as we cannot compute
if (isEmpty(resVal) != true  && isEmpty(high) != true
	&& isDouble(resVal) && isDouble(high)
	&& parseDouble(resVal) > parseDouble(high)){
	return true;
	}
else{ return false; } 
// When the value is present and the condition does not match Return false indicating absence
return false;
}

//<!-- ********************************************* Hypercholesterolemia************************************************* -->
function HyperCholestrolemia(chol){
// When the value is not present Return false as we cannot compute
if (isEmpty(chol)){ return 0; }
else if (isDouble(chol)&& parseDouble(chol) > 200){ return 1; }

return 0;
}

//<!-- ************************************** Malnutrition ******************************************* -->
function malnutrition(weight, height) {
// When the value is not present Return false as we cannot compute
if (isEmpty(weight) ||	isEmpty(height)){ return 0; } 
// When the value is present, calculate BMI value and Return appropriate value
else{
	var bmi = 0.0;
	var ht1 = 0.0;
	if (isDouble(height) && isDouble(weight)){
		// Formula to calculate BMI in kg/m^2
		ht1 = parseDouble(height) / 100.0;
		ht1 = Math.pow(ht1, 2);
		if (ht1 != 0.0){ bmi = parseDouble(weight) / ht1; }

		// Return the BMI value indicating presence
		if (bmi < 19.0){
			var ret_bmi = 0.0;
			ret_bmi = bmi*100;
			ret_bmi = Math.round(ret_bmi);
			ret_bmi = ret_bmi/100;
			return ret_bmi;
			}
		// Return 0 indicating absence
		else{ return 0; }
		}
	return 0;
	}
}

//<!-- ************************************** Obesity ******************************************* -->
function obesity(weight, height) {
// When the value is not present Return false as we cannot compute
if (isEmpty(weight) || 	isEmpty(height)){ return 0; } 
// When the value is present, calculate BMI value and Return appropriate value
else{
	var bmi = 0.0;
	var ht1 = 0.0;
	if (isDouble(height) && isDouble(weight)){
		// Formula to calculate BMI in kg/m^2
		ht1 = parseDouble(height) / 100.0;
		ht1 = Math.pow(ht1, 2);
		if (ht1 != 0){ bmi = parseDouble(weight) / ht1; }
		// Return the BMI value indicating presence
		if (bmi > 30.0 && bmi < 40.0){
			var ret_bmi = 0.0;
			ret_bmi = bmi*100;
			ret_bmi = Math.round(ret_bmi);
			ret_bmi = ret_bmi/100;
			return ret_bmi;
			}
		// Return 0 indicating absence
		else{ return 0; }
		}
	return 0;
	}
}

//<!-- ************************************** Morbid Obesity ******************************************* -->
function morbidObesity(weight, height) {
// When the value is not present Return false as we cannot compute
if (isEmpty(weight) || isEmpty(height)){ return 0; } 
// When the value is present, calculate BMI value and Return appropriate value
else{
	var bmi = 0.0;
	var ht1 = 0.0;
	if (isDouble(height) && isDouble(weight)){
		// Formula to calculate BMI in kg/m^2
		ht1 = parseDouble(height) / 100.0;
		ht1 = Math.pow(ht1, 2);
		if (ht1 != 0){ bmi = parseDouble(weight) / ht1; }
		// Return the BMI value indicating presence
		if (bmi > 40.0){
			var ret_bmi = 0.0;
			ret_bmi = bmi*100;
			ret_bmi = Math.round(ret_bmi);
			ret_bmi = ret_bmi/100;
			return ret_bmi;
			}
		// Return 0 indicating absence
		else{ return 0; }
		}
	return 0;
	}
}

//<!-- ************************************** Malignant/Accelerated Hypertension ******************************************* -->
function hypertension(sys, dia) {
// Check fi sys
if (isEmpty(sys) != true && isDouble(sys) && parseDouble(sys) > 140){ return 1; }
// Check for dia
else if (isEmpty(dia) != true && isDouble(dia) && parseDouble(dia) > 90){ return 1; }
// Else Return 0 when above conditions do not match indicating absence
return 0;
}

//<!-- ************************************** Shock ******************************************* -->
function shock(sys, ct, ctHigh) {		
// This variable is used as a flag in this function
var count = 0;
// When sys value is not avalable Return 0 indicating that we cannot compute
if (isEmpty(sys)){ return 0; }
// When sys value is present
else{
	// Evaluating condition for sys to see if shock is present
	if (isDouble(sys) && parseDouble(sys) < 90.0){
		count = 1; //Shock present
		}
	// If shock is present, we want to know if its cardiogenic or not
	if (count == 1) {
		// When CT value is available and condition holds good Return 1 indicating cardiogenic shock
		if (isEmpty(ct) != true && isEmpty(ctHigh)!= true
			&& isDouble(ct) && isDouble(ctHigh)
			&& parseDouble(ct) > parseDouble(ctHigh)){
			return 1; 
			}
		// When CT is null but first condition holds true Return 2 indication normal Shock
		return 2;
		}
	}
// When none of the conditions are true Return 0 indicating absence
return 0;
}

//<!-- ************************************** UTI ******************************************* -->
function UTI(wbc, urinni, urinest) {
// This variable is used as a flag in this function
var count = 0;
var wbccount = 0;
// When whc is not null evaluate the condition
if (isEmpty(wbc)!= true){
	// Evaluating the condition
	if (isDouble(wbc) && parseDouble(wbc) > 5.0) {
		wbccount = wbccount + 1; //Flag that this condition is satisfied
		}
	}
// When Urinalysis, Leukocyte Nitrite is not null evaluate the condition
if (isEmpty(urinni) != true){
	// Evaluating the condition
	if (equalsIgnoreCase("POSITIVE", urinni) || equalsIgnoreCase("LARGE", urinni) || equalsIgnoreCase("MOD", urinni) || 
		equalsIgnoreCase("SMALL", urinni) || equalsIgnoreCase("TRACE", urinni)){
		count = count + 1;
		}
	}
// When Urinalysis, Leukocyte Esterate is not null evaluate the condition
if (isEmpty(urinest)!= true){
	// Evaluating the condition
	if (equalsIgnoreCase("POSITIVE", urinest)|| equalsIgnoreCase("LARGE", urinest) || equalsIgnoreCase("MOD", urinest) || 
		equalsIgnoreCase("SMALL", urinest) || equalsIgnoreCase("TRACE", urinest)){
		count = count + 1;
		}
	}
// When any one of the above conditions is true Return 1 indicating UTI
if ((count >= 1) && (wbccount==1)){ return 1; }

return 0;
}

//<!-- ************************************** Respiratory Failure ******************************************* -->
function respFailure(pco2, etco2, prevPCo2, prevEtco2, pO2, o2sat) {		
var respFailChronic, respFailAcute, respFailAcOnChr, respFailNOS; 
var ret_val = 0;

respFailChronic = chronicRespFailure(pco2, etco2, prevPCo2, prevEtco2);   // 5,2,0
respFailAcute = acuteRespFailure(pO2, o2sat);	// 3,0 
respFailAcOnChr = respFailAcute && respFailChronic;   // 5,3,1,0

if (respFailAcute == true || respFailChronic == true || respFailAcOnChr == true){
	respFailNOS = isEmpty(prevPCo2) || isEmpty(prevEtco2);
	}
else{ respFailNOS = false; }
if (respFailNOS){ ret_val = 1; }
if (respFailAcute){ ret_val = 2; }
if (respFailChronic){ ret_val = 3; }
if (respFailAcOnChr){ ret_val = 4; }

return ret_val;
}

//<!-- ********************** Chronic Respiratory Failure ******************* -->
function chronicRespFailure(pco2, etco2, prevPCo2, prevEtco2) {
var current = false, previous = false;

if (!isEmpty(pco2) && isDouble(pco2) && parseDouble(pco2) > 45.0){
	current = true;
	}

if (current != true && !isEmpty(etco2) && isDouble(etco2) && parseDouble(etco2) > 45.0){
	current = true;
	}

if(!isEmpty(prevPCo2) && isDouble(prevPCo2) && parseDouble(prevPCo2) > 45.0){
	previous = true;
	}

if(previous != true && !isEmpty(prevEtco2) && isDouble(prevEtco2) && parseDouble(prevEtco2) > 45.0){
	previous = true;
	}

if (current == true && previous == true){ return true; }

return false;
}

//<!-- ********************** Acute Respiratory Failure ******************* -->
function acuteRespFailure(pO2, o2sat) {		
if (isEmpty(pO2) != true && isDouble(pO2) && parseDouble(pO2) <= 60){ return true; }

if (isEmpty(o2sat) != true && isDouble(o2sat) && parseDouble(o2sat) <=90){ return true; }

return false;
}

//<!-- ************************************** Sepsis ******************************************* -->
function sepsis(maxhRate, minhRate, rRate, maxwbc, minwbc, sysBP, maxtem, mintem, lactate, lactate_high) {
var count = 0;
var newminimumhrate = false , newmaximumhrate = false , newminimumwbc = false , newmaximumwbc = false , newminimumtemp = false , newmaximumtemp = false, newlactate, newmaximumlactate = false;		
if (isEmpty(minhRate) != true && isDouble(minhRate) && parseDouble(minhRate) < 40.0 ){ newminimumhrate = true; }
else if ((isEmpty(maxhRate)) != true && isDouble(maxhRate) && parseDouble(maxhRate) > 100.0){ newmaximumhrate = true; }
	
if (newminimumhrate == true || newmaximumhrate == true){ count = count + 1; }

// Check for RR>=26
if (isEmpty(rRate) != true && isDouble(rRate) && parseDouble(rRate) > 26.0){ count = count + 1; }

// Check for Heart Rate<40 >100
if ((isEmpty(minwbc)) != true && isDouble(minwbc) && parseDouble(minwbc) < 4.0){ newminimumwbc = true; }
else if ((isEmpty(maxwbc)) != true && isDouble(maxwbc) && (parseDouble(maxwbc) > 12.0)){ newmaximumwbc = true; }

if (newminimumwbc == true || newmaximumwbc == true){ count = count + 1; }

// Check for SysBp<=90
if (isEmpty(sysBP) != true && isDouble(sysBP) && parseDouble(sysBP) <= 90){ count = count + 1; }

// Check for Heart Rate<40 >100
if (isEmpty(maxtem) != true && isDouble(maxtem) && parseDouble(maxtem) >= 38.88){ newmaximumtemp = true; }
else if (isEmpty(mintem) != true && isDouble(mintem) && parseDouble(mintem) < 36){ newminimumtemp = true; }

if (newmaximumtemp == true || newminimumtemp == true){ count = count + 1; }

// Check for lactate value > normal
if ((isEmpty(lactate) != true) && (isEmpty(lactate_high) != true)
	&& isDouble(lactate) && isDouble(lactate_high) && parseDouble(lactate) > parseDouble(lactate_high)){
	count = count + 1;
	}

if (count >= 2){ return 1; }
else{ return 0; }
}


//<!-- ********************************************* Thrombocytopenia************************************************* -->
function Thrombocytopenia(maxplt) {
	// When the max platelet count is not available Return 0 as we cannot compute
	if (isEmpty(maxplt)){ return 0; }

	// When value is less than 150 Return 1 indication Thrombocytopenia
	if (Number.isInteger(maxplt)){
		if (parseInt(maxplt) < 150){ return 1; }
		}
	// When none of the above conditions match Return 0 indicating abscence of Thrombocytopenia
	return 0;
	} 

//<!-- ********************************************* Coagulopathy************************************************* -->
function Coagulopathy(minptinr) {
	// When the ratio is not available Return 0 as we cannot compute
	if (isEmpty(minptinr)){ return 0; }

	// When value is greater than or equal to Return 1 indication Coagulopathy
	if (isDouble(minptinr)){
		if (parseDouble(minptinr) >= 1.3){ return 1; }
		}
	// When none of the above conditions match Return 0 indicating abscence of Coagulopathy
	return 0;
	} 
