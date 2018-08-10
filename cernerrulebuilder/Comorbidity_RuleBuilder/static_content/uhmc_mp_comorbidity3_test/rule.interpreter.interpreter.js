/**
 * @author Jugu Dannie Sundar <jugu [dot] 87 [at] gmail [dot] com>
 */

// processedResult - contains the evaluated(true/false) rules for previously defined comorbidities.
function parseRule(rule, variables, processedResult)
{   
	// alert("DEBUG :"+ "approaching lexer");
    var tokens = lexer(rule);
    // //console.log(tokens);
	// alert("DEBUG :"+ "finished lexer");
	// alert("DEBUG :"+ "approaching parser");
    var parseTree = parse(tokens);
	// alert("DEBUG :"+ "finished parser");
    //console.log(parseTree);
	// alert("DEBUG :"+ "approaching evaluator");
    var output = evaluate(parseTree, variables, processedResult);
	// alert("DEBUG :"+ "done evaluation");
    return output;
}

var processRules = function(ruleJSON, temp){
    var result = [];
    //var variables = variables;
	// alert(variables['maxsysBP']);
	// alert(variables['maxdiasBP']);
	var variables = updateVariables(temp);
    /*
    var ruleJSONStr = JSON.stringify(ruleJSON);
    var variablesStr = JSON.stringify(variables);
    alert("rule json:"+ruleJSONStr );
     alert("rule json:"+variablesStr);
    if(ruleJSONStr.match('bmi') && variablesStr.match('Height') && variablesStr.match('Weight'))
    {
        variables = computeBMI(variables);
    }
    */
    for(var i = 0; i < ruleJSON.length; i++) {
        var obj = ruleJSON[i];   
        var key = Object.keys(obj)[0];
        result[key] = {}
        var value = obj[key];
        if (typeof(value) == 'object')
        {
            for (var j = 0; j < value.length; j++)
            {
                var valObj = value[j];
                var valKey = Object.keys(valObj)[0];
                var valRule = valObj[valKey];                
                var comorbidityPresent = parseRule(valRule, variables, result);
                //alert("variables['maxUrWBC'] :"+variables['maxUrWBC']);
                //alert("variables['urnNitrite'] :"+variables['urnNitrite']);
                //alert("variables['urnLeucEster'] :"+variables['urnLeucEster']);
                //alert("valRule "+valRule);
                //alert("key "+key);
                //alert("valKey "+valKey);
                //alert("comorbidityPresent "+comorbidityPresent);
                result[key][valKey] = comorbidityPresent;
            }
        }
        else
        {                     
            result[key] = parseRule(value, variables, result);
        }    
    }
    return result;    
}

function computeBMI(weight, height){
	var bmi = height != 0 ? weight/height : -1;
    return bmi;
}

function computeHydration(bunValue, creatinine, over1)
{
	if(creatinine == 0)
		return 0;
	var hydration = parseDouble(bunValue)/creatinine; 
	if (hydration > 20.0)
	{
		var round_hydration = hydration * 100;
		round_hydration = Math.round(round_hydration);
		hydration = round_hydration / 100;
	}
	if (over1 == 0 && hydration > 20.0)
	{
		return hydration; 
	}
	else if (over1 == 1 && hydration > 30.0)
	{ 
		return hydration; 
	}
	return 0;
}

function updateVariables(variables)
{
	var min_height_val = (variables['minheight'] != '') ? parseDouble(variables['minheight']) / 100 : 0;
	min_height_val = Math.pow(min_height_val, 2);
	var max_height_val = (variables['maxheight'] != '') ? parseDouble(variables['maxheight']) / 100 : 0;
	max_height_val = Math.pow(max_height_val, 2);
	var min_weight_val = variables['minweight'] != '' ? parseDouble(variables['minweight']) : 0;
	var max_weight_val = variables['maxweight'] != '' ? parseDouble(variables['maxweight']) : 0;
	
	variables['malnutritionbmi'] = computeBMI(min_weight_val, max_height_val);
	variables['obesitybmi'] = computeBMI(max_weight_val, min_height_val);
	variables['morbidobesitybmi'] = computeBMI(max_weight_val, min_height_val);
    	variables['maxsysBP'] == '' ? variables['maxsysBP'] = -1 : variables['maxsysBP'] = parseDouble(variables['maxsysBP']);
    
	variables['MaxcholestrolResult'] == '' ? variables['MaxcholestrolResult'] = -1 : variables['MaxcholestrolResult'] = parseDouble(variables['MaxcholestrolResult']);
	variables['minbicarbonate'] == '' ? variables['minbicarbonate'] = -1 : variables['minbicarbonate'] = parseDouble(variables['minbicarbonate']);
	variables['minsysBP'] == '' ? variables['minsysBP'] = -1 : variables['minsysBP'] = parseDouble(variables['minsysBP']);
	variables['maxbicarbonate'] == '' ? variables['maxbicarbonate'] = -1 : variables['maxbicarbonate'] = parseDouble(variables['maxbicarbonate']);
	
	
	variables['maxct'] == '' ? variables['maxct'] = -1 : variables['maxct'] = parseDouble(variables['maxct']);

	variables['maxdiasBP'] == '' ? variables['maxdiasBP'] = -1 : variables['maxdiasBP'] = parseDouble(variables['maxdiasBP']);

	variables['minoximetry'] == '' ? variables['minoximetry'] = -1 : variables['minoximetry'] = parseDouble(variables['minoximetry']);

	variables['oximetryLow'] == '' ? variables['oximetryLow'] = -1 : variables['oximetryLow'] = parseDouble(variables['oximetryLow']);

	variables['ctHigh'] == '' ? variables['ctHigh'] = -1 : variables['ctHigh'] = parseDouble(variables['ctHigh']);

	variables['minpo2'] == '' ? variables['minpo2'] = -1 : variables['minpo2'] = parseDouble(variables['minpo2']);

	variables['minneutrophil'] == '' ? variables['minneutrophil'] = -1 : variables['minneutrophil'] = parseDouble(variables['minneutrophil']);

	variables['neutrophilLow'] == '' ? variables['neutrophilLow'] = -1 : variables['neutrophilLow'] = parseDouble(variables['neutrophilLow']);
	
	
	variables['maxcreatResult'] == '' ? variables['maxcreatResult'] = -1 : variables['maxcreatResult'] = parseDouble(variables['maxcreatResult']);

	variables['creatHigh'] == '' ? variables['creatHigh'] = -1 : variables['creatHigh'] = parseDouble(variables['creatHigh']);

	if(variables['maxcreatprevResult'] == '') {
		variables['maxcreatprevResult'] = -1
		variables['newmaxcreatprevResult'] = -1
	}
	else{
		variables['newmaxcreatprevResult'] = 1.5 * parseDouble(variables['maxcreatprevResult']);
	}
	
	variables['maxglucResult'] == '' ? variables['maxglucResult'] = -1 : variables['maxglucResult'] = parseDouble(variables['maxglucResult']);

	variables['glucHigh'] == '' ? variables['glucHigh'] = -1 : variables['glucHigh'] = parseDouble(variables['glucHigh']);
	
	variables['minglucResult'] == '' ? variables['minglucResult'] = -1 : variables['minglucResult'] = parseDouble(variables['minglucResult']);

	if(variables['glucLow'] == '')
		variables['glucLow'] = 70;
	
	variables['sodiumLow'] == '' ? variables['sodiumLow'] = -1 :variables['sodiumLow'] = parseDouble(variables['sodiumLow']);
	
	variables['calciumLow'] == '' ? variables['calciumLow'] = -1 : variables['calciumLow'] = parseDouble(variables['calciumLow']);
	
	variables['mincalciumResult'] == '' ? variables['mincalciumResult'] = -1 : variables['mincalciumResult'] = parseDouble(variables['mincalciumResult']);
	
	variables['mintemp'] == '' ? variables['mintemp'] = 9999 : variables['mintemp'] = parseDouble(variables['mintemp']);
	
	variables['minwbc'] == '' ? variables['minwbc'] = 9999 : variables['minwbc'] = parseDouble(variables['minwbc']);
	
	variables['maxhRate'] == '' ? variables['maxhRate'] = -1 : variables['maxhRate'] = parseDouble(variables['maxhRate']);
	variables['maxrRate'] == '' ? variables['maxrRate'] = -1 : variables['maxrRate'] = parseDouble(variables['maxrRate']);
	variables['phosphorusLow'] == '' ? variables['phosphorusLow'] = -1 : variables['phosphorusLow'] = parseDouble(variables['phosphorusLow']);
	variables['maxband'] == '' ? variables['maxband'] = -1 : variables['maxband'] = parseDouble(variables['maxband']);
	variables['minphosphorusResult'] == '' ? variables['minphosphorusResult'] = -1 : variables['minphosphorusResult'] = parseDouble(variables['minphosphorusResult']);
	variables['maxtemp'] == '' ? variables['maxtemp'] = -1 : variables['maxtemp'] = parseDouble(variables['maxtemp']);
	variables['bunMaxResult'] == '' ? variables['bunMaxResult'] = -1 : variables['bunMaxResult'] = parseDouble(variables['bunMaxResult']);
	variables['hydration'] = computeHydration(variables['bunMaxResult'], variables['maxcreatResult'],  variables['over1']);
	variables['phosphorusHigh'] == '' ? variables['phosphorusHigh'] = -1 : variables['phosphorusHigh'] = parseDouble(variables['phosphorusHigh']);
	variables['maxphosphorusResult'] == '' ? variables['maxphosphorusResult'] = -1 : variables['maxphosphorusResult'] = parseDouble(variables['maxphosphorusResult']);
	variables['maxmagnesiumResult'] == '' ? variables['maxmagnesiumResult'] = -1 : variables['maxmagnesiumResult'] = parseDouble(variables['maxmagnesiumResult']);
	variables['magnesiumHigh'] == '' ? variables['magnesiumHigh'] = -1 : variables['magnesiumHigh'] = parseDouble(variables['magnesiumHigh']);
	variables['minmagnesiumResult'] == '' ? variables['minmagnesiumResult'] = -1 : variables['minmagnesiumResult'] = parseDouble(variables['minmagnesiumResult']);
	variables['magnesiumLow'] == '' ? variables['magnesiumLow'] = -1 : variables['magnesiumLow'] = parseDouble(variables['magnesiumLow']);
	variables['maxcalciumResult'] == '' ? variables['maxcalciumResult'] = -1 : variables['maxcalciumResult'] = parseDouble(variables['maxcalciumResult']);
	variables['calciumHigh'] == '' ? variables['calciumHigh'] = -1 : variables['calciumHigh'] = parseDouble(variables['calciumHigh']);
	variables['maxsodiumResult'] == '' ? variables['maxsodiumResult'] = -1 : variables['maxsodiumResult'] = parseDouble(variables['maxsodiumResult']);
	variables['sodiumHigh'] == '' ? variables['sodiumHigh'] = -1 : variables['sodiumHigh'] = parseDouble(variables['sodiumHigh']);
	variables['minsodiumResult'] == '' ? variables['minsodiumResult'] = -1 : variables['minsodiumResult'] = parseDouble(variables['minsodiumResult']);
	variables['maxpotassiumResult'] == '' ? variables['maxpotassiumResult'] = -1 : variables['maxpotassiumResult'] = parseDouble(variables['maxpotassiumResult']);
	variables['potassiumHigh'] == '' ? variables['potassiumHigh'] = -1 : variables['potassiumHigh'] = parseDouble(variables['potassiumHigh']);
	variables['minpotassiumResult'] == '' ? variables['minpotassiumResult'] = -1 : variables['minpotassiumResult'] = parseDouble(variables['minpotassiumResult']);
	variables['potassiumLow'] == '' ? variables['potassiumLow'] = -1 : variables['potassiumLow'] = parseDouble(variables['potassiumLow']);
	variables['maxwbc'] == '' ? variables['maxwbc'] = -1 : variables['maxwbc'] = parseDouble(variables['maxwbc']);
	variables['LacticAcidHigh'] == '' ? variables['LacticAcidHigh'] = -1 : variables['LacticAcidHigh'] = parseDouble(variables['LacticAcidHigh']);
	variables['maxLacticAcid'] == '' ? variables['maxLacticAcid'] = -1 : variables['maxLacticAcid'] = parseDouble(variables['maxLacticAcid']);
	variables['panpltLow'] == '' ? variables['panpltLow'] = -1 : variables['panpltLow'] = parseDouble(variables['panpltLow']);
	variables['panplt'] == '' ? variables['panplt'] = -1 : variables['panplt'] = parseDouble(variables['panplt']);
	variables['panrbc'] == '' ? variables['panrbc'] = -1 : variables['panrbc'] = parseDouble(variables['panrbc']);
	variables['panwbcLow'] == '' ? variables['panwbcLow'] = -1 : variables['panwbcLow'] = parseDouble(variables['panwbcLow']);
	variables['panwbc'] == '' ? variables['panwbc'] = -1 : variables['panwbc'] = parseDouble(variables['panwbc']);
	variables['maxprevEtco2'] == '' ? variables['maxprevEtco2'] = -1 : variables['maxprevEtco2'] = parseDouble(variables['maxprevEtco2']);
	variables['maxprevpco2'] == '' ? variables['maxprevpco2'] = -1 : variables['maxprevpco2'] = parseDouble(variables['maxprevpco2']);
	variables['maxEtco2'] == '' ? variables['maxEtco2'] = -1 : variables['maxEtco2'] = parseDouble(variables['maxEtco2']);
	variables['maxpco2'] == '' ? variables['maxpco2'] = -1 : variables['maxpco2'] = parseDouble(variables['maxpco2']);
	variables['po2'] == '' ? variables['po2'] = -1 : variables['po2'] = parseDouble(variables['po2']);
	variables['maxweight'] == '' ? variables['maxweight'] = -1 : variables['maxweight'] = parseDouble(variables['maxweight']);
	variables['minheight'] == '' ? variables['minheight'] = -1 : variables['minheight'] = parseDouble(variables['minheight']);
	variables['maxheight'] == '' ? variables['maxheight'] = -1 : variables['maxheight'] = parseDouble(variables['maxheight']);
	variables['minweight'] == '' ? variables['minweight'] = -1 : variables['minweight'] = parseDouble(variables['minweight']);

	return variables;
}                                                                                                                                                                                                                                  