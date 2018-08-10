/**
 * New node file
 */

var pdfTitles = [];
var ecgPDFTitles = ["ECG Interpretation"];
var ecgPdfList = [];
var ecgTransformedPdfList = [];
var reportData = [];
var array3 = new Array();
var merged_sentences = new Array();

getActualPDFECG();

var pdfHtml;
var timeout;
var interval = 5000;
var testTable = "";

function checkForECG(title)
{
    if (title.search("ECG") != -1)
        return true;
    return false;
}

function initECHO()
{
	buildECGheader();
	buildECGlist();
	showECGBody();
	
	getActualPDFECG();
	testEKG();
}

function processData(allText) {
	alert("Here");
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    alert(lines);
}


function testEKG()
{
    $.ajax({
        type: "GET",
        url: "/testekg",
        dataType: "text",
        success: function(data) {processData(data);}
     });
}

function buildECGheader() {
	var tableBody = "";
	tableBody += "<table width='100%' bgcolor='white'>"
			  + "<tr><td><br/><p class='test' onclick='javascript:expandcollapse(\"ecgarrow\",\"ecgbody\");'>CoMorbidities from ECG Report&nbsp;&nbsp;"
			  + "<img id='ecgarrow' border='0' src='" + arrowdownimg + "' alt='Click to collapse' /></p></td></tr>"
			  + "</table>";
	$('#ecgheader').html(tableBody);	
	return;
}

function getActualPDFECG() {
	//EKG reports
	//atrial fibrillation - 30016206902
	//var actualReport = "Title: ECG Interpretation. Report Data : Atrial fibrillation. Anteroseptal infarct (cited on or before 14-FEB-2011). ST & T wave abnormality, consider inferior ischemia or digitalis effect. Abnormal ECG. When compared with ECG of 01-APR-2015 09:30, T wave inversion now evident in Inferior leads QT has lengthened. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/2/2015 12:33:00 PM. ";
	
	//ventricular tachycardia - 30019913727
	//var actualReport = "Title: ECG Interpretation. Report Data : atrial flutter w/ variable conduction. premature ventricular complexes and non-sustained ventricular tachycardia. Right bundle branch block. Abnormal ECG. When compared with ECG of 18-MAY-2015 23:11, QRS axis Shifted right. Confirmed by BARBERA, M.D., SAVERIO (1138) on 5/21/2015 8:56:26 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Wide QRS tachycardia  most likely sustained ventricular tachycardia. Left axis deviation. Non-specific intra-ventricular conduction block. Inferior infarct , age undetermined. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 3/9/2015 11:42:15 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Poor quality ECG. Ventricular paced rhythm with salvos of ventricular tachycardia. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/1/2015 12:46:39 PM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Poor quality ECG. Atrial paced / sensed Ventricular paced rhythm with salvos of nonsustained ventricular tachycardia. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/1/2015 12:44:15 PM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : *** Poor data quality, interpretation may be adversely affected. Sinus rhythm with 1st degree A-V block with frequent salvos of ventricular tachycardia. Inferior infarct. ST & Marked T wave abnormality, consider anterolateral ischemia. Abnormal ECG. When compared with ECG of 17-FEB-2015 07:50, Significant changes have occurred. Confirmed by VLAY, M.D., STEPHEN (1008) on 2/18/2015 10:13:46 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Demand pacemaker; interpretation is based on intrinsic rhythm. Atrial sensed Ventricular paced rhythm with salvos of nonsustained ventricular tachycardia. Abnormal ECG. Serial changes of Lateral infarct Present. Confirmed by VLAY, M.D., STEPHEN (1008) on 5/7/2015 6:20:52 PM. ";
	
	//ventricular fibrillation - 30011057161
	//var actualReport = "Title: ECG Interpretation. Report Data : Ventricular fibrillation. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 5/28/2015 4:03:32 PM. ";
	
	//infarction - 30017436166
	// var actualReport = "Title: ECG Interpretation. Report Data : Atrial paced Ventricular sensed / paced  rhythm with occasional Premature ventricular complexes. Non-specific intra-ventricular conduction delay. Anterior T wave inversion, consider subendocardial infarction. Abnormal ECG. Confirmed by VLAY, M.D., STEPHEN (1008) on 1/5/2015 11:21:04 AM. "; 
	//var actualReport = "Title : ECG Interpretation. Report Data : Normal sinus rhythm. Low voltage QRS. Septal infarct (cited on or before 21-JUL-2015). ST & T wave abnormality, consider anterolateral ischemia  or infarction. ST elevation consider inferior injury or acute infarct. Prolonged QT. Abnormal ECG. When compared with ECG of 23-JUL-2015 11:33, Sinus rhythm has replaced Atrial fibrillation. Confirmed by LAWSON, M.D., WILLIAM (1002) on 7/23/2015 7:46:36 PM. ";
	
	//supraventricular tachycardia 
	//var actualReport = "Title: ECG Interpretation. Report Data : Supraventricular tachycardia Possible Atrial flutter with 2 to 1 block. Possible Anterior infarct (cited on or before 01-MAY-2015). ST & T wave abnormality, consider inferolateral ischemia. Prolonged QT. Abnormal ECG. When compared with ECG of 01-MAY-2015 16:29, Serial changes of evolving Anterior infarct Present. Confirmed by LAWSON, M.D., WILLIAM (1002) on 5/3/2015 10:45:04 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Supraventricular tachycardia. Left ventricular hypertrophy with repolarization abnormality. Abnormal ECG. When compared with ECG of 26-NOV-2013 10:36, Significant changes have occurred. Confirmed by LAWSON, M.D., WILLIAM (1002) on 2/19/2015 10:32:59 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : *** Suspect arm lead reversal, interpretation assumes no reversal. Supraventricular tachycardia. Left ventricular hypertrophy with repolarization abnormality. Lateral infarct , age undetermined. Prolonged QT. Abnormal ECG. Confirmed by LAWSON, M.D., WILLIAM (1002) on 3/30/2015 3:30:28 PM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Supraventricular tachycardia. Possible Inferior infarct , age undetermined. ST & T wave abnormality, consider inferolateral ischemia. ST elevation in aVR. Abnormal ECG. When compared with ECG of 15-JAN-2015 00:02,. Significant changes have occurred. Confirmed by LAWSON, M.D., WILLIAM (1002) on 1/15/2015 12:30:14 PM. ";
	
	//atrial fibrillation 
	//var actualReport = "Title: ECG Interpretation. Report Data : Atrial fibrillation with slow ventricular response. Anteroseptal infarct (cited on or before 14-FEB-2011). Abnormal ECG. When compared with ECG of 25-SEP-2014 14:18, Vent. rate has decreased BY  40 BPM. Confirmed by VLAY, M.D., STEPHEN (1008) on 2/9/2015 11:10:33 AM ";
	
	//atrial fibrillation
	//var actualReport = "Title: ECG Interpretation. Report Data : Atrial fibrillation. Poor R wave progression. Cannot rule out Anterior infarct (cited on or before 14-FEB-2011). ST depression in Inferolateral leads consider ischemia. Abnormal ECG. When compared with ECG of 08-FEB-2015 22:15, Vent. rate has increased BY  25 BPM. Confirmed by LAWSON, M.D., WILLIAM (1002) on 3/25/2015 10:41:53 AM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Atrial fibrillation. Anteroseptal infarct (cited on or before 14-FEB-2011). ST & T wave abnormality, consider inferior ischemia or digitalis effect. Abnormal ECG. When compared with ECG of 01-APR-2015 09:30, T wave inversion now evident in Inferior leads. QT has lengthened. Confirmed by VLAY, M.D., STEPHEN (1008) on 4/2/2015 12:33:00 PM. ";
	//var actualReport = "Title : ECG Interpretation. Report Data : Atrial fibrillation with a competing junctional pacemaker with premature ventricular or aberrantly conducted complexes. Left anterior fascicular block. Nonspecific ST and T wave abnormality , probably digitalis effect. Abnormal ECG. When compared with ECG of 15-JUN-2015 15:49, Significant changes have occurred. Confirmed by LAWSON, M.D., WILLIAM (1002) on 6/16/2015 6:38:08 PM. ";
	
	//no comorbs
	var actualReport = "Title : ECG Interpretation. Report Data : \nSinus rhythm with sinus arrhythmia with 1st degree A-V block with frequent Premature ventricular complexes\nPossible Anterior infarct (cited on or before 28-JAN-2015)\nAbnormal ECG\nWhen compared with ECG of 28-JAN-2015 18:38,\nPremature ventricular complexes are now Present\nConfirmed by VLAY, M.D., STEPHEN (1008) on 1/29/2015 9:47:26 PM\n";

	//var actualReport = "Title : ECG Interpretation. Report Data : Normal sinus rhythm with sinus arrhythmia. Increased R/S ratio in V1, consider early transition or posterior infarct. Borderline ECG. Confirmed by LAWSON, M.D., WILLIAM (1002) on 6/24/2015 12:38:16 PM. ";
	
	var startIndex = actualReport.indexOf('Title');
	console.log("PS startIndex"+ startIndex);
	var endIndex = actualReport.indexOf("Title", startIndex+1);
	console.log("PS endIndex"+ endIndex);
	while(endIndex != -1) {
		 var temp = endIndex;
		 ecgPdfList.push(actualReport.slice(startIndex, endIndex));
		 endIndex = actualReport.indexOf("Title", endIndex+1);
		 startIndex = temp;
	}
	ecgPdfList.push(actualReport.slice(startIndex, endIndex));
	console.log("PS1"+ecgPdfList);
	
	for(var i=0; i<ecgPdfList.length; i++) {
		ecgTransformedPdfList.push(ecgPdfList[i]);
		console.log("PS2"+ecgTransformedPdfList);
	}

}

function showECGBody() {
    var tableBody = "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
			+ "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
	for (var i = 0; i < ecgTransformedPdfList.length; i++) {
		var pdfContent = ecgTransformedPdfList[i];		
		tableBody = buildECGbody(i, pdfContent, tableBody);
		//console.log("PS TAble body"+tableBody);
	}
	/*tableBody += "<tr><td><br><input id='ecgComments' type='checkbox' value='Other comments'><b>Other comments:</b>"
		+ "<br><textarea id='ecgCommentsid' cols='40' rows='5' ></textarea></td></tr>";
	tableBody += "</table></td></tr></table>";		*/    
	$('#ecgbody').html(tableBody);	
	return;    
}

function getPdfDateECG(content) {
	//console.log("PS3"+content);
    var sentences = new Array();
	sentences = break_sentences(content, "\n");
	console.log("PS3"+sentences);
	var title_date = "Confirmed by";
    var pdf_date = "";
	
	for (var i = 0; i < sentences.length; i++) {
		if (sentences[i].search(title_date) != -1 || sentences[i].search(title_date.toLowerCase()) != -1 || sentences[i].search(title_date.toUpperCase()) != -1) {
			var pos = sentences[i].indexOf(title_date);
			pdf_date = sentences[i].split("Confirmed by")[1];
			break;
		}
	}
    var retArr = [];
    if (pdf_date.length > 0)
    {
        var arr = pdf_date.split("on");
        if (arr.length > 0)
        {
            pdf_date = arr[1] + " by " + arr[0];   
            retArr.push(arr[1]);
            retArr.push(arr[0]);
        }
    }
    console.log("PS Date"+retArr);    
	return retArr;
}

function buildECGlist() {
	var tableBody = "";
	console.log("PS4"+no_of_ecg_reports);
	tableBody += "<select id='selectECGList' style='width:50%;font-size:16px'  onChange=\"showSelectedPDF('ECG');\">";
	if (no_of_ecg_reports != 0) {
		tableBody += "<option value='first option'>Select the report to show</option>";
		for (var i = 0; i < no_of_ecg_reports; i++) {
			console.log("PS5"+ecgTransformedPdfList[i]);
            var dateArr = getPdfDateECG(ecgTransformedPdfList[i]);
            var dateStr = dateArr.join(" by ");
			tableBody += "<option value='" + ecgPDFTitles[i] + "'>" + ecgPDFTitles[i] + " ("+ dateStr + ")</option>";			
		}
	}
	else {
		tableBody += "<option value='firstOption'>No report</option>";
	}
	tableBody += "</select>";
	tableBody += "\t<a href=\"#ecgshow\"></a>";
	$('#ecglist').html(tableBody);	
	return;
}

function showECGbody()
{
    var tableBody = "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
			+ "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
	for (var i = 0; i < ecgTransformedPdfList.length; i++) {
		var pdfContent = ecgTransformedPdfList[i];		
		tableBody = buildECGbody(i, pdfContent, tableBody);
		//console.log("PS TAble body"+tableBody);
	}
	/*tableBody += "<tr><td><br><input id='ecgComments' type='checkbox' value='Other comments'><b>Other comments:</b>"
		+ "<br><textarea id='ecgCommentsid' cols='40' rows='5' ></textarea></td></tr>";
	tableBody += "</table></td></tr></table>";		*/    
	$('#ecgbody').html(tableBody);	
	return;    
}

function buildECGbody(index, contents, tableBody) {
	var comorb_array = new Array();
	comorb_array = func_category(ecgPDFTitles[index]); // this method is defined in radiology.js
	if (comorb_array == null) 
        return tableBody;
    var report_data = break_sentences(ecgTransformedPdfList[index], "\n");	// this method is defined in radiology.js			
    final_comorb = determine_final_comorb(report_data, comorb_array);    // this method is defined in radiology.js
    var final_sentences = new Array();
    final_sentences = check_comorb_in_sentences(report_data, final_comorb, negPhrases_two_d, conjunctions_two_d);// this method is defined in radiology.js
    var temp_comorb = determine_final_comorb(final_sentences, final_comorb);
    final_comorb = temp_comorb;        
    ecgarray_all = final_comorb;
    console.log("PS6"+final_comorb);
    //var str = "Supraventricular tachycardia";
    if (final_comorb == null || final_comorb.length == 0)
        return tableBody;                        
    var impression_prefix = 0;
    var findings_prefix = 1;
    for (var i = 0; i < final_comorb.length; i++) 
    {
        var reportPrefix = '' + index+impression_prefix + i;
        if (!doShowComorbIfNotPreviouslyCommitted(final_comorb[i].display, ecgPDFTitles[index], getPdfDateECG(contents), index, 'ECG'))
        {
            continue;
        }
        var dateArr = getPdfDateECG(contents);
        dateArr[1] = dateArr[1].replace(/,/g, ''); // Commas occur in the doctor name in case of ECG report which we need to remove before committing
        var pvalueStr = "GROUP#$#" + final_comorb[i].display + "#$#" + final_comorb[i].level.length + "#$#" + ecgPDFTitles[index] + "," + dateArr.join(",");
        tableBody += "<tr><td><table cellspacing='0px'>"
                  + "<tr id='ecg"+reportPrefix+"' onmouseover=\"mouseOverPara('ecgSentencesImg"+reportPrefix+"','ecgSentencesCol"+reportPrefix+"');makeDivVisibleRR('ecgSentences"+reportPrefix+"', this);\" onmouseout=\"mouseOutPara('ecgSentencesImg"+reportPrefix+"','ecgSentencesCol"+reportPrefix+"');makeDivHiddenRR('ecgSentences"+reportPrefix+"', this);\">"
                  + "<td><div id='ecgSentencesCol"+reportPrefix+"'>"
                  + "<a>"
                  + "<b><font color='#0000FF'><input class='rrPart' id='ecgGroup"+reportPrefix+"' type='checkbox' value='"+pvalueStr+"' onclick='javascript:otherForm(\"ecgChkGrp"+reportPrefix+"\",\"ecgGroup"+reportPrefix+"\");'>"+final_comorb[i].display
                  + "</font></b></a></div>";
        tableBody += "<div id='ecgChkGrp"+reportPrefix+"' style='display: none; margin-left: 60px;'>"; 
		var prefix = "~" + final_comorb[i].display ;
		var suffix = "^," + ecgPDFTitles[index] + "," + dateArr.join(",");
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
                + "<a id='ecgSentencesImg"+reportPrefix+"' style='visibility: hidden;'>"
                + "<img src='"+button1img+"' alt='Details'/>"
                + "</a></td><td style='vertical-align:top'>"
                + "<div id='ecgSentences"+reportPrefix+"' class='imageBackSingle' style='width:410px; height:160px; margin-top: -85px'><img src='"+divimg+"'width='115%' height='180%'/>"
                + "<div id='ecgSentences"+reportPrefix+"inner' class='dynamicDiv' style='width:375px; height:240px; margin-left: 45px ; margin-top: -275px;float: left;clear: left; overflow-y:scroll;'>"
                + "<span style='color: #858384; font-weight: bold;'>Report:</span> "+ecgPDFTitles[index]+"<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+dateStr+"<br>"
                + "<span style='color: #858384; font-weight: bold;'>Report Data:</span>";                        
        for (var j = 0; j < report_data.length; j++) 
        {                            
            var pos = report_data[j].search(final_comorb[i].search);
            var pos_lower = report_data[j].search(final_comorb[i].search.toLowerCase());
            var pos_upper = report_data[j].search(final_comorb[i].search.toUpperCase());

            var start = -1;
            if (pos != -1) 
            {
                start = pos;
            }
            if (pos_lower != -1) {start = pos_lower;}
            if (pos_upper != -1) {start = pos_upper;}

            if (start != -1) 
            {
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
		tableBody += "<a href='"+ecgLinks[index]+"' target='_blank'> Link to Report </a>";
        tableBody += "&nbsp;&nbsp;<a href=\"#ecgshow\"><br><button onclick=\"showPDF("+index+",false,'ECG');makeDivHiddenRR('ecgSentences"+reportPrefix+"');\">Show Reports</button></a>";
        tableBody += "</div></div></td></tr></table></td></tr>";
    }	
	return tableBody;
}