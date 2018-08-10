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

//************************************** Anemia *******************************************
function anemia(minhb, minhc, hbLow, hcLow, minhb_prev, minhc_prev) {
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

//************************************** Pancytopenia *******************************************
function pancytopenia(minwbc,wbclow,minrbc,rbclow,minplt,pltlow) {
if (isEmpty(minwbc) || isEmpty(wbclow) || isEmpty(minrbc) || isEmpty(rbclow) || isEmpty(minplt) || isEmpty(pltlow)){ return 0; }
else if (isDouble(minwbc) && isDouble(wbclow) && parseDouble(minwbc) < parseDouble(wbclow)
		&& isDouble(minrbc) && isDouble(rbclow) && parseDouble(minrbc) < parseDouble(rbclow)
		&& isDouble(minplt) && isDouble(pltlow) && parseDouble(minplt) < parseDouble(pltlow)){ return 1; }
else{ return 0; }
}

//************************************** Acid Base Disorder *******************************************
function acidbasedisorder(minbicarbonate,maxbicarbonate) {
var tmpcnt = 0;
if (isEmpty(minbicarbonate) && isEmpty(maxbicarbonate)){ return tmpcnt; }
if (isDouble(minbicarbonate) && parseDouble(minbicarbonate) < 18.0){ tmpcnt = tmpcnt + 1; }
if (isDouble(maxbicarbonate) && parseDouble(maxbicarbonate) > 30.0){ tmpcnt = tmpcnt + 2; }
return tmpcnt;
}

//************************************** Kidney Injury *******************************************
function kidneyInjury(maxcreatResult,maxcreatprevResult,creatHigh) {
creatHigh = "1.2";

if (isEmpty(maxcreatResult) != true && isDouble(maxcreatResult) && isDouble(creatHigh)){
		if (isEmpty(maxcreatprevResult) != true && isDouble(maxcreatprevResult)){
			if (parseDouble(maxcreatResult) > parseDouble(creatHigh) && parseDouble(maxcreatprevResult) > parseDouble(creatHigh)
					&& parseDouble(maxcreatResult) > (1.5 * parseDouble(maxcreatprevResult))){
					return 4; // 4 is for acute on chronic
					}
				else if ((parseDouble(maxcreatResult) > parseDouble(creatHigh) && parseDouble(maxcreatprevResult) <= parseDouble(creatHigh))
						 || (parseDouble(maxcreatResult) > (1.5 * parseDouble(maxcreatprevResult)))){
					return 2; // 2 is for acute
					}
				else if (parseDouble(maxcreatResult) > parseDouble(creatHigh) && parseDouble(maxcreatprevResult) > parseDouble(creatHigh)){
					return 3; //3 is for chronic
					}
				else{ return 0; }
		}
		else if (parseDouble(maxcreatResult) > parseDouble(creatHigh)){
			return 1;
		}
		else {
			return 0;
		}
}
else{ return 0; }
}
//************************************** Dehydration *******************************************
function dehydration(creatinineValue,bunValue,over1){
if (isEmpty(creatinineValue) || isEmpty(bunValue) || isEmpty(over1)){ return 0; }
else{
	var creatinine = 0.0;
	var hydration = 0.0;
	if (isDouble(creatinineValue)){ creatinine = parseDouble(creatinineValue); }
	if (isDouble(bunValue) && creatinine != 0.0){ hydration = parseDouble(bunValue)/creatinine; }
	// Return the hydration value indicating presence
	if (hydration > 20.0){
		var round_hydration = hydration * 100;
		round_hydration = Math.round(round_hydration);
		hydration = round_hydration / 100;
		}
	if (over1 == 0 && hydration > 20.0){ return hydration; }
	else if (over1 == 1 && hydration > 30.0){ return hydration; }
	// Return 0 indicating absence
	else{ return 0; }
	}
}

//********************************************* Elevated Blood Glucose*************************************************
function Diabetes(maxglucResult,glucHigh,maxCreat,creatHigh) {
if (isEmpty(maxglucResult)){ return 0; }

if (isDouble(maxglucResult) && parseDouble(maxglucResult) > 140){
	if (isEmpty(maxCreat) != true && isEmpty(creatHigh) != true && isDouble(maxCreat) && isDouble(creatHigh) && parseDouble(maxCreat) > parseDouble(creatHigh)){ return 2; }
	else{ return 1; }
	}

return 0;
} 

//********************************************* Hypoglycemia *************************************************
function Hypoglycemia(minglucResult, glucLow){
if (isEmpty(minglucResult)){ return 0; } 

if (isEmpty(glucLow)){ glucLow = "70"; }

if (isDouble(minglucResult) && isDouble(glucLow)){
	if (parseDouble(minglucResult) < parseDouble(glucLow)){ return 1; }
	}

return 0;
}

//********************************************* Hypoxia*************************************************
function hypoxia(oximetryLow, minoximetry) {
if (isEmpty(minoximetry) != true){
	if (isDouble(minoximetry) && parseDouble(minoximetry) < 90.0){ return true; }
	else{ return false; } 
	}
return false;
}

//********************************************* Granulocytopenia*************************************************
function granulocytopenia(minneutrophil, neutrophilLow){
if (isEmpty(minneutrophil) != true
	&& isDouble(minneutrophil) && isDouble(neutrophilLow)
	&& parseDouble(minneutrophil) < parseDouble(neutrophilLow)){ 
	return 1; 
	}
return 0;
}

//********************************************* Lactic acidosis *************************************************
function lacticAcidosis(maxLacticAcid, LacticAcidHigh){
if (isEmpty(maxLacticAcid)){ return 0; }
else if (isDouble(maxLacticAcid) && parseDouble(maxLacticAcid) > 2.0){ return 1; }
else{ return 0; }
}

//************************************** Electrolyte Abnormality *******************************************
function hypo(low,resVal) {
if (isEmpty(resVal) != true  && isEmpty(low) != true
	&& isDouble(resVal) && isDouble(low)
	&& parseDouble(resVal) < parseDouble(low)){
	return true;
	}
else{ return false; }
return false;
}

function hyper(high,resVal) {
if (isEmpty(resVal) != true  && isEmpty(high) != true
	&& isDouble(resVal) && isDouble(high)
	&& parseDouble(resVal) > parseDouble(high)){
	return true;
	}
else{ return false; }
return false;
}

//********************************************* Hypercholesterolemia *************************************************
function HyperCholesterolemia(chol){
if (isEmpty(chol)){ return 0; }
else if (isDouble(chol)&& parseDouble(chol) > 200){ return 1; }

return 0;
}

//************************************** Malnutrition *******************************************
function malnutrition(weight,height) {
if (isEmpty(weight) || isEmpty(height)){ return 0; }
else{
	var bmi = 0.0;
	var ht1 = 0.0;
	if (isDouble(height) && isDouble(weight)){
		// Formula to calculate BMI in kg/m^2
		ht1 = parseDouble(height) / 100.0;
		ht1 = Math.pow(ht1, 2);
		if (ht1 != 0.0){ bmi = parseDouble(weight) / ht1; }

		// Return the BMI value indicating presence
		if (bmi < 20.0){
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

//************************************** Obesity *******************************************
function obesity(weight,height) {
if (isEmpty(weight) || isEmpty(height)){ return 0; }
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

//************************************** Morbid Obesity *******************************************
function morbidObesity(weight,height) {
if (isEmpty(weight) || isEmpty(height)){ return 0; }
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

//************************************** Hypertension *******************************************
function hypertension(sys,dias){
if ((isEmpty(sys) != true && isDouble(sys) && parseDouble(sys) > 140.0)
	|| (isEmpty(dias) != true && isDouble(dias) && parseDouble(dias) > 90.0)){ return 1; }
else{ return 0; }
}

//************************************** Shock *******************************************
function shock(sys,ct,ctHigh) {
var count = 0;
if (isEmpty(sys)){ return 0; }
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

//************************************** UTI *******************************************
function UTI(wbc,urinni,urinest) {
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
if ((count >= 1) && (wbccount == 1)){ return 1; }

return 0;
}

//************************************** Respiratory Failure *******************************************
function respFailure(pco2, etco2, prevPCo2, prevEtco2, pO2, o2sat) {		
var respFailChronic, respFailAcute, respFailAcOnChr; 
var ret_val = 0;

respFailChronic = chronicRespFailure(pco2,etco2,prevPCo2,prevEtco2);
respFailAcute = acuteRespFailure(pO2,o2sat);
respFailAcOnChr = respFailAcute && respFailChronic;

if (respFailAcute){ ret_val = 2; }
if (respFailChronic){ ret_val = 3; }
if (respFailAcOnChr){ ret_val = 4; }

return ret_val;
}

//********************** Chronic Respiratory Failure *******************
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

//********************** Acute Respiratory Failure *******************
function acuteRespFailure(pO2, o2sat) {		
if (isEmpty(pO2) != true && isDouble(pO2) && parseDouble(pO2) <= 60){ return true; }

if (isEmpty(o2sat) != true && isDouble(o2sat) && parseDouble(o2sat) <=90){ return true; }

return false;
}

//************************************** SIRS *******************************************
function sirs(maxhRate, rRate, maxwbc, minwbc, maxtem, mintem, maxband) {
var count = 0;
// Check for Heart Rate > 90		
if (isEmpty(maxhRate) != true && isDouble(maxhRate) && parseDouble(maxhRate) > 90.0){ count = count + 1; }

// Check for RR > 20
if (isEmpty(rRate) != true && isDouble(rRate) && parseDouble(rRate) > 20.0){ count = count + 1; }

// Check for Band > 10
if (isEmpty(maxband) != true && isDouble(maxband) && parseDouble(maxband) > 10.0){ count = count + 1; }

// Check for WBC < 4 or > 12
if ((isEmpty(minwbc) != true && isDouble(minwbc) && parseDouble(minwbc) < 4.0)
	|| (isEmpty(maxwbc) != true && isDouble(maxwbc) && parseDouble(maxwbc) > 12.0)){ count = count + 1; }

// Check for temp < 36.0 or >= 38.3
if ((isEmpty(maxtem) != true && isDouble(maxtem) && parseDouble(maxtem) >= 38.3)
	|| (isEmpty(mintem) != true && isDouble(mintem) && parseDouble(mintem) < 36.0)){ count = count + 1; }

return count;
}

function sirs2(lacticacid,sbp,map,bilirubin,creat,platelets,inr,ptt){
var val = 0;
var severe = 0;
var septic = 0;

if (isEmpty(lacticacid) != true && isDouble(lacticacid) && parseDouble(lacticacid) >= 4.0){
	severe = 1;
	septic = 1;
	}
else if (isEmpty(lacticacid) != true && isDouble(lacticacid) && parseDouble(lacticacid) > 2.0){ severe = 1; }

if (isEmpty(sbp) != true && isDouble(sbp) && parseDouble(sbp) < 90.0){
	severe = 1;
	septic = 1;
	}
	
if (isEmpty(map) != true && isDouble(map) && parseDouble(map) < 65.0){
	severe = 1;
	septic = 1;
	}

if (isEmpty(bilirubin) != true && isDouble(bilirubin) && parseDouble(bilirubin) > 2.0){ severe = 1; }

if (isEmpty(creat) != true && isDouble(creat) && parseDouble(creat) >= 2.0){ severe = 1; }

if (isEmpty(platelets) != true && isDouble(platelets) && parseDouble(platelets) < 100.0){ severe = 1; }

if (isEmpty(inr) != true && isDouble(inr) && parseDouble(inr) > 1.5){ severe = 1; }

if (isEmpty(ptt) != true && isDouble(ptt) && parseDouble(ptt) > 60.0){ severe = 1; }

if (severe == 1 && septic == 1){ val = 3; }
else if (severe == 1){ val = 1; }
else if (septic == 1){ val = 2; }

return val;
}
