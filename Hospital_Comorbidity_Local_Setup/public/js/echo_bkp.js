/*
echo node file
Author: Pulkit Sharma
*/
var pdfTitles = [];
var echoPDFTitles = ["ECHO Interpretation"];//TODO: change to echo report pdfTitles
var echoPDFList = [];
var echoTransformedPdfList = [];
var reportData = [];
var array = new Array();
var merged_sentences = new Array();

getActualPDFECHO();//first method called defined in this file itself

var pdfHtml;
var timeout;
var interval = 5000;
var testTable = "";
//Not being used in this file
function checkForECHO(title){
	if (title.search("ECHO") != -1)
		return true;
	return false;
}

function initECHO(){
	buildECHOheader();
	buildECHOlist();
	showECHOBody();

	getActualPDFECHO();
	//testECHO(); //use of method unkown
}

function processData(allText){

	var allTextLines = allText.split(/\r\n | \n/);
	var headers = allTextLines[0].split(',');
	var lines = [];

	for(var i=1;i<allTextLines.length;i++){
		var data = allTextLines[i].split(',');
		if (data.length ==  headers.length) {
			var tarr = [];
			for(var j=0; j<headers.length;j++){
				tarr.push(headers[j]+":"+data[j]);
			}
			lines.push(tarr);
		}
	}
}

function testECHO(){
	//TODO: ECHO
}

function buildECHOheader() {
	var tableBody = "";
	console.log("IN ECHO HEADER!!!!!!!")
	tableBody += "<table width='100%' bgcolor='white'>"
			  + "<tr><td><br/><p class='test' onclick='javascript:expandcollapse(\"echoarrow\",\"echobody\");'>CoMorbidities from ECHO Report&nbsp;&nbsp;"
			  + "<img id='echoarrow' border='0' src='" + arrowdownimg + "' alt='Click to collapse' /></p></td></tr>"
			  + "</table>";
	console.log("IN ECHO HEADER!!!!!!!"+tableBody);		  
	$('#echoheader').html(tableBody);	
	return;
}

function getActualPDFECHO() {


	//var actualReport = "Title : ECHO Interpretation. Report Data : \nSinus rhythm with sinus arrhythmia with Pericardial Effusion with frequent Premature ventricular complexes\nPossible Anterior infarct (cited on or before 28-JAN-2015)\n ECHO of 28-JAN-2015 18:38,\nPremature ventricular complexes are now Present\nElectronically Signed On: December 26, 2014 2:55 PM by Dr. KORT, SMADAR \n";
	var actualReport = "Title : ECHO Interpretation. Report Data : Left Ventricle - Structure and Systolic Function: The left ventricular cavity size is normal. Ventricular wall thickness is normal. The relative wall thickness is normal (0.34). Global left  ventricular systolic function is normal. Normal global left ventricular systolic function with diffuse hypokinesis. The ejection fraction is 56% by biplane method of discs. Left ventricular basal fractional shortening is normal. No regional wall motion abnormalities are seen.Left Ventricle - Diastole:The Doppler derived transmitral left ventricular inflow velocity pattern is E wave dominant. The Doppler derived early diastolic deceleration time is short at 111 msec. The velocity of the early diastolic septal mitral annular movement, as determined by tissue Doppler imaging is reduced at 0.080 m/s. The velocity of the early diastolic lateral mitral annular movement, as determined by tissue Doppler imaging is reduced at 0.07 m/s. The overall diastolic function is moderately impaired (grade II, pseudonormal pattern) with elevated left ventricular filling pressures.Right Atrium: The right atrium is normal in size. Inferior vena cava diameter is dilated (>2.1cm) with normal respiratory variability consistent with a right atrial pressure of 8 mmHg.Atrial Septum: Atrial septum is not well visualized.Right Ventricle: The right ventricular size is normal. The right ventricular diastolic area is 16.19 cm which is normal. The right ventricular systolic area is 8.80 cm which is normal. Global right ventricular systolic function is normal. The right ventricular fractional area change is 45.65% which is normal. The tricuspid annular plane systolic excursion is 2.98 cm consistent with normal right ventricular systolic function. The right ventricular systolic pressure, as estimated using the tricuspid regurgitation velocity, is 52.6 mmHg.Mitral Valve: Moderate mitral regurgitation is present. The jet is centrally-directed.Tricuspid Valve: Moderate tricuspid regurgitation is present.Aorta: The aorta at the level of the sinuses of Valsalva is normal in diameter at 2.97 cm. The ascending aorta is normal at 3.44 cm.Pulmonary Artery: The tricuspid regurgitant velocity is 3.34 m/s, and with an assumed right atrial pressure of 8 mmHg, the estimated pulmonary artery systolic pressure is moderately elevated at 52.6 mmHg.Pericardium: There is a trivial circumferential pericardial effusion.Comparison: Prior examination reports are available and were reviewed for comparison purposes. The most recent available prior study is from 2/21/11. Summary: 1. Normal left ventricular cavity size. 2. Normal left ventricular wall thickness. 3. Normal global left ventricular systolic function. 4. Normal global left ventricular systolic function with diffuse hypokinesis. 5. No regional left ventricular wall motion abnormalities. 6. Moderate diastolic dysfunction with elevated left ventricular filling pressures. 7. Normal right ventricular systolic function. 8. Moderate mitral regurgitation. 9. Moderate tricuspid regurgitation.10. Moderately elevated pulmonary artery systolic pressure.11. Normal aortic root diameter for body size.12. Trivial circumferential pericardial effusion.014970 Smadar Kort MD, FACC, FASEElectronically signed by 014970 Smadar Kort MD, FACC, FASE on 12/26/2014 at 2:55:15 PM  ** Final ***Attending Cardiologist:   KORT, SMADAR Ordered By:               KANAGALA, NEELIMA Order Date:               December 26, 2014 7:40 AMCompletion Date:          December 26, 2014 2:05 PMEncounter Number:         010083233345Accession Number:         6066806Images were reviewed and interpreted by Attending Cardiologist: Dr. KORT, SMADAR Electronically Signed On: December 26, 2014 2:55 PM by Dr KORT, SMADAR. STONY BROOK UNIVERSITY HOSPITALDEPARTMENT OF RADIOLOGYSTONY BROOK, NY 11794-7300";
	var startIndex = actualReport.indexOf('Title');
	//console.log("PS startIndex"+ startIndex);
	var endIndex = actualReport.indexOf("Title", startIndex+1);
	// endIndex is the end indexof this report purpose unclear looks like it finds index of title after title occurence
	//console.log("PS endIndex"+ endIndex);
	//we find the total content of each report by finding next title index thus slice the report data and push each report data 
	while(endIndex != -1){
		var temp = endIndex;
		echoPDFList.push(actualReport.slice(startIndex, endIndex));
		endIndex = actualReport.indexOf("Title", endIndex+1);
		startIndex = temp;
	}
	echoPDFList.push(actualReport.slice(startIndex, endIndex));
	//console.log("PS1 all pdf pushed to echoPDFList !!! \n"+ echoPDFList);
//Wat is the diff echoPDFList and Transformed
	for(var i=0; i<echoPDFList.length; i++) {
		echoTransformedPdfList.push(echoPDFList[i]);
		//console.log("PS1 all pdf pushed to echoTransformedPdfList !!! \n"+ echoTransformedPdfList);
	}
}

// function showECHOBody() {
// 	console.log("############Reaching here#############");
// 	var tableBody = "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
// 			+ "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
// 	for (var i = 0; i < echoTransformedPdfList.length; i++) {
// 		var pdfContent = echoTransformedPdfList[i];
// 		tableBody = buildECHObody(i, pdfContent, tableBody);
// 	}
// 	//console.log("REACHING HERE ALSO!!!!!!")
// 	$('#echobody').html(tableBody);	
// 	return;	 
// }
function showECHOBody(){
	console.log("############Reaching here#############");
    var tableBody = "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
			+ "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
	for (var i = 0; i < echoTransformedPdfList.length; i++) {
		var pdfContent = echoTransformedPdfList[i];		
		console.log("PS pdfContent#################"+pdfContent);
		console.log("PS tableBody#################"+tableBody);
		tableBody = buildECHObody(i, pdfContent, tableBody);
		//console.log("PS tableBody#################"+tableBody);
		
	}
	  
	$('#echobody').html(tableBody);
	return;    
}

function getPdfDateECHO(content) {
	var sentences = new Array();
	sentences = break_sentences(content, ".");
	//var title_date = "Confirmed by"; // TODO: change according to report data of ECHO
	var title_date = "Electronically Signed On:";
	var pdf_date = "";

	for (var i = 0; i < sentences.length; i++) {
		if (sentences[i].search(title_date) != -1 || sentences[i].search(title_date.toLowerCase()) != -1 || sentences[i].search(title_date.toUpperCase()) != -1) {
			var pos = sentences[i].indexOf(title_date);
			pdf_date = sentences[i].split("Electronically Signed On:")[1];
			alert(pdf_date)
			break;
		}
	}
	var retArr = [];
	if (pdf_date.length > 0) {
		var arr = pdf_date.split("by");
        if (arr.length > 0)
        {
            pdf_date = arr[0] + " by " + arr[1];   
            retArr.push(arr[0]);
            retArr.push(arr[1]);
        }
	}
	return retArr;
}

function buildECHOlist() {
	var tableBody = "";
	tableBody += "<select id='selectECHOList' style='width:50%;font-size:16px'  onChange=\"showSelectedPDF('ECHO');\">";
	if (no_of_echo_reports !=0){ // TODO: defined this in radiology
		tableBody += "<option value='first option'>Select the report to show</option>";
		for (var i = 0; i < no_of_echo_reports; i++) {
			//console.log("PS5"+echoTransformedPdfList[i]);
            var dateArr = getPdfDateECHO(echoTransformedPdfList[i]);
            var dateStr = dateArr.join(" by ");
			tableBody += "<option value='" + echoPDFTitles[i] + "'>" + echoPDFTitles[i] + " ("+ dateStr + ")</option>";			
		}

	}
	else { 
		tableBody += "<option value='firstOption'>No report</option>";
	}
	tableBody += "</select>";
	tableBody += "\t<a href=\"#echoshow\"></a>";
	$('#echolist').html(tableBody);	
	return;
	
}



function buildECHObody(index, contents, tableBody){
	var comorb_array = new Array();
	comorb_array = func_category(echoPDFTitles[index]); // this method is defined in radiology.js
	if (comorb_array == null) 
        return tableBody;
    var report_data = break_sentences(echoTransformedPdfList[index], ".");	// this method is defined in radiology.js
    //console.log("@@@@@@@@report_data@@@@@@@@"+report_data);			
    final_comorb = determine_final_comorb(report_data, comorb_array);    // this method is defined in radiology.js
    var final_sentences = new Array();
    final_sentences = check_comorb_in_sentences(report_data, final_comorb, negPhrases_two_d, conjunctions_two_d);// this method is defined in radiology.js
    var temp_comorb = determine_final_comorb(final_sentences, final_comorb);
    final_comorb = temp_comorb;        
    echoarray_all = final_comorb;
   // console.log("PS6%%%%%"+final_comorb);
    
    //var str = "Supraventricular tachycardia";
    if (final_comorb == null || final_comorb.length == 0){
    	//console.log("final_comorb null !!!!!!!!!!");
    	return tableBody;
    }

                                
    var impression_prefix = 0;
    var findings_prefix = 1;
    for (var i = 0; i < final_comorb.length; i++) 
    {

        var reportPrefix = '' + index+impression_prefix + i;
        if (!doShowComorbIfNotPreviouslyCommitted(final_comorb[i].display, echoPDFTitles[index], getPdfDateECHO(contents), index, 'ECHO'))
        {
        	console.log("*************HERE*********");
            continue;
        }
        var dateArr = getPdfDateECHO(contents);
        dateArr[1] = dateArr[1].replace(/,/g, ''); // Commas occur in the doctor name in case of ECG report which we need to remove before committing
        var pvalueStr = "GROUP#$#" + final_comorb[i].display + "#$#" + final_comorb[i].level.length + "#$#" + echoPDFTitles[index] + "," + dateArr.join(",");
       console.log("final_comorb *********"+ final_comorb[i].display);
        tableBody += "<tr><td><table cellspacing='0px'>"
                  + "<tr id='echo"+reportPrefix+"' onmouseover=\"mouseOverPara('echoSentencesImg"+reportPrefix+"','echoSentencesCol"+reportPrefix+"');makeDivVisibleRR('echoSentences"+reportPrefix+"', this);\" onmouseout=\"mouseOutPara('echoSentencesImg"+reportPrefix+"','echoSentencesCol"+reportPrefix+"');makeDivHiddenRR('echoSentences"+reportPrefix+"', this);\">"
                  + "<td><div id='echoSentencesCol"+reportPrefix+"'>"
                  + "<a>"
                  + "<b><font color='#0000FF'><input class='rrPart' id='echoGroup"+reportPrefix+"' type='checkbox' value='"+pvalueStr+"' onclick='javascript:otherForm(\"echoChkGrp"+reportPrefix+"\",\"echoGroup"+reportPrefix+"\");'>"+final_comorb[i].display
                  + "</font></b></a></div>";
        tableBody += "<div id='echoChkGrp"+reportPrefix+"' style='display: none; margin-left: 60px;'>"; 
		var prefix = "~" + final_comorb[i].display ;
		var suffix = "^," + echoPDFTitles[index] + "," + dateArr.join(",");
		for (var j = 0; j < final_comorb[i].level.length; j++) {
			var levelTermsAndTypes = final_comorb[i].level[j];
			var term = levelTermsAndTypes.term;
			var types = levelTermsAndTypes.types;					
			var mainvalue = ":" + term;					
			var valueStr =  prefix + mainvalue + suffix;
			tableBody += "<br><input class='rrPart" + reportPrefix + "'  type='checkbox' value = '"+valueStr+"'>" + term;					
			var levelBody = "";				
			var marginLeft = 60;
			levelBody = recursiveDescent(types, mainvalue, levelBody, reportPrefix, prefix, suffix, marginLeft);// this method is defined in radiology.js
			tableBody += levelBody;
		}		                                       
        var dateStr = dateArr.join(" by ");
        tableBody += "</div></td><td style='vertical-align:top'>" 
                + "<a id='echoSentencesImg"+reportPrefix+"' style='visibility: hidden;'>"
                + "<img src='"+button1img+"' alt='Details'/>"
                + "</a></td><td style='vertical-align:top'>"
                + "<div id='echoSentences"+reportPrefix+"' class='imageBackSingle' style='width:410px; height:160px; margin-top: -85px'><img src='"+divimg+"'width='115%' height='180%'/>"
                + "<div id='echoSentences"+reportPrefix+"inner' class='dynamicDiv' style='width:375px; height:240px; margin-left: 45px ; margin-top: -275px;float: left;clear: left; overflow-y:scroll;'>"
                + "<span style='color: #858384; font-weight: bold;'>Report:</span> "+echoPDFTitles[index]+"<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+dateStr+"<br>"
                + "<span style='color: #858384; font-weight: bold;'>Report Data:</span>";
        console.log("tableBody @@@@@@@@@@@@!!!!!!!!!!"+ tableBody);                                
        for (var j = 0; j < report_data.length; j++) 
        {                          
            var pos = report_data[j].search(final_comorb[i].search);
            var pos_lower = report_data[j].search(final_comorb[i].search.toLowerCase());
            var pos_upper = report_data[j].search(final_comorb[i].search.toUpperCase());
            console.log("POSTION!!!!!!!!!!!!"+ pos);
            var start = -1;
            if (pos != -1) 
            {
                start = pos;
            }
            if (pos_lower != -1) {start = pos_lower;}
            if (pos_upper != -1) {start = pos_upper;}

            if (start != -1) 
            {	
            	console.log("^^^^^^^^^^^^^^^**********")
                var end = start + final_comorb[i].search.length;
                tableBody += report_data[j].slice(0, start)
                        + "<span class ='highlight' style='background-color:yellow;'>" + report_data[j].slice(start, end) + "</span>"
                        + report_data[j].slice(end);
            }
            else 
            {
                tableBody += report_data[j];
            }
            tableBody += "<br/>"
        }            
		tableBody += "<a href='"+echoLinks[index]+"' target='_blank'> Link to Report </a>";
        tableBody += "&nbsp;&nbsp;<a href=\"#echoshow\"><br><button onclick=\"showPDF("+index+",false,'ECHO');makeDivHiddenRR('echoSentences"+reportPrefix+"');\">Show Reports</button></a>";
        tableBody += "</div></div></td></tr></table></td></tr>";
    }	
	return tableBody;


}