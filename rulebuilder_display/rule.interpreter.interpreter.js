/**
 * @author Jugu Dannie Sundar <jugu [dot] 87 [at] gmail [dot] com>
 */

// processedResult - contains the evaluated(true/false) rules for previously defined comorbidities.
function parseRule(rule, variables, processedResult)
{        
    var tokens = lexer(rule);
    //console.log(tokens);
    var parseTree = parse(tokens);
    //console.log(parseTree);
    var output = evaluate(parseTree, variables, processedResult);
    return output;
}

var formatRule = function(rule, variables, labValuesDictionaryJson) {
	var vars = [];
	var values = [];
	console.log("Rule : " + rule);
	var ruletmp = rule.replace(/\(/g, ' ( ').replace(/\)/g, ' ) ').replace(/&&/g, 'and').replace(/\|\|/g, 'or');
	var splittedByOr = [];
	splittedByOr = ruletmp.split(" or ");
	var finalStrOr = [];
	for(var i = 0; i < splittedByOr.length; i++) {
		splittedByOr[i] = splittedByOr[i].split("or").join("any");
		var splittedByAnd = splittedByOr[i].split(" and ");
		var finalStrAnd = [];
		for(var j = 0; j < splittedByAnd.length; j++) {
			if((splittedByAnd[j].indexOf("> -1") == -1) && (splittedByAnd[j].indexOf("< -1") == -1)) {
				var finalAnd = [];
				var words = splittedByAnd[j].trim().split(" ");
				for(var k = 0; k < words.length; k++) {
					if(!(words[k] in variables)) {
							finalAnd.push(words[k]);
					}
					else {
						var obj = getVariableJsonObj(labValuesDictionaryJson, words[k]);
						var value;
						if(typeof obj !== 'undefined') {
						
							var obj1 = obj["0"];
							if(typeof obj1 !== 'undefined') {
								value = obj1["rule_name"];
							}
							else
								value = "undef";
						}
						
						finalAnd.push(value);
						if(vars.indexOf(words[k]) == -1) {
							if((splittedByAnd[j].indexOf("!=-1") == -1) && (splittedByAnd[j].indexOf("==-1") == -1)) {
								vars.push(words[k]);
								values.push(variables[words[k]]);
							}
						}
					}
				}
				finalStrAnd.push(finalAnd.join(" "));
			}
		}
		if(rule.indexOf('bmi') > -1) {
			vars.push('height');
			values.push(variables['height']);
			vars.push('weight');
			values.push(variables['weight']);
			vars.push('bmi');
			values.push((variables['weight'])/((variables['height']/100)*(variables['height']/100)));
		}
		
		var mergedAnd = finalStrAnd.join(" and<br> ");
		if(splittedByOr.length > 1 && splittedByAnd.length > 1)
			finalStrOr.push(mergedAnd);
		else
			finalStrOr.push(mergedAnd);
	}
	var finalRule = "";
	for(var c = 0; c < vars.length; c++) {						
		var obj = getVariableJsonObj(labValuesDictionaryJson, vars[c]);
		var value;
		if(typeof obj !== 'undefined') {
		
			var obj1 = obj["0"];
			if(typeof obj1 !== 'undefined') {
				value = obj1["rule_name"];
			}
			else
				value = "undef";
		}
		
		if(values[c] != -1 && !Number.isNaN(values[c])) {
			finalRule = finalRule + value + ": " + "<b>" + values[c] + "</b>";
			
			if(vars[c].indexOf("Result") != -1) {
				var date = vars[c].replace("Result", "Date");
				if(date in variables) {
					finalRule = finalRule + " on " + variables[date];
				}
			}
			else {
				var date = vars[c] + "Date";
				if(date in variables) {
					finalRule = finalRule + " on " + variables[date];
				}
			}
			finalRule = finalRule + "<br>";
		}
		else {
			finalRule = finalRule + value + ": " + "<b>N/A</b><br>";
		}
	}
	
	finalRule = finalRule + "|" + finalStrOr.join(" or<br> ");
	if(finalRule.indexOf("==-1") != -1){
		finalRule = finalRule.split("==-1").join("is not present");
	}
	if(finalRule.indexOf("!=-1") != -1){
		finalRule = finalRule.split("!=-1").join("is present");
	}
	return finalRule;
}

var processRules = function(ruleJSON, variables, labValuesDictionaryJson){
    var result = [];
    var disp_result = [];
    for(var i = 0; i < ruleJSON.length; i++) {
        var obj = ruleJSON[i];     
        var key = Object.keys(obj)[0];
        result[key] = {}
        disp_result[key] = {}
        var value = obj[key];
        if (typeof(value) == 'object')
        {
            for (var j = 0; j < value.length; j++)
            {
                var valObj = value[j];
                var valKey = Object.keys(valObj)[0];
                var valRule = valObj[valKey]; 
                var comorbidityPresent = parseRule(valRule, variables, result);
                result[key][valKey] = comorbidityPresent;
                console.log("Comorb : " + key + " : " + valKey + " Value : " + comorbidityPresent);
                var display = formatRule(valRule, variables, labValuesDictionaryJson);
	        	disp_result[key][valKey] = comorbidityPresent + "|" + display;
	        	console.log("Comorb : " + key + " : " + valKey + " Value : " + comorbidityPresent);
            }
        }
        else
        {                     
            comorbidityPresent = parseRule(value, variables, result);
            result[key] = comorbidityPresent;
            console.log("Comorb : " + key + " : " + " Value : " + comorbidityPresent);
        	var display = formatRule(value, variables, labValuesDictionaryJson);
	    	disp_result[key] = comorbidityPresent + "|" + display;
        }    
    }
    return disp_result;    
}

function getVariableJsonObj(labValuesDictionaryJson, id)
{
	return labValuesDictionaryJson.filter(
    function(labValuesDictionaryJson) {
      return labValuesDictionaryJson.id == id
    }
  );
}