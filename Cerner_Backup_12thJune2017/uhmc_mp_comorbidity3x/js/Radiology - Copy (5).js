/**
 * New node file
 */

var pdfTitles = [];
var pdfList = [];
var transformedPdfList = [];
var impressions = [];
var findings = [];
var pdfHtml;
var timeout;
var interval = 3000;
var testTable = "";

function initRR() {
	
	var d1 = new Date();
	var t1 = d1.getTime();
	getDataRR();
	var d2 = new Date();	
	var t2 = d2.getTime();
	var data1 = "Time to get the data" + (t2-t1).toString() + "<br>";

	buildRRheader();
	buildRRlist();
	showRRbody();
	var d3 = new Date();
	var t3 = d3.getTime();
	data1 += "Time to build comorb section from data" + (t3-t2).toString() + "<br>";
	//$('#pdfTest').html(data1);
	
	//$('#pdfTest').html(tableBody);
	
	return;
}

function getDataRR(){
	var reqObj = new XMLCclRequest();
	reqObj.onreadystatechange = function (){
		if (reqObj.readyState == 4 && reqObj.status == 200){
			var msgText = reqObj.responseText;

			if (msgText != undefined && msgText != null){
				var jsonObj = eval('(' + msgText + ')');
			}
			if (jsonObj){
				for (var x = 0; x < jsonObj.TEMP.RADCNT; x++) {
					pdfTitles[x] = jsonObj.TEMP.RAD[x].TITLE;
					pdfList[x] = jsonObj.TEMP.RAD[x].CONTENTS;
				}
			}
		}
	}
	
	var param = "^MINE^,value($VIS_EncntrId$),value($USR_PersonId$)";

	reqObj.open('GET',"uhmc_mp_comorbidity3_data",0);
	reqObj.send(param);
 
	for(var i=0; i<pdfList.length; i++) {
		transformedPdfList.push(transform_report(pdfList[i]));
	}
	
	for(var i=0; i<pdfList.length; i++) {
		testTable += "Report Title: " + pdfTitles[i] + "<br>"
		testTable += pdfList[i] + "<br><br>";
	}

	for(var i=0; i<impressions.length; i++) {
		testTable += "Report Title: " + pdfTitles[i] + "<br>"
		testTable += "Impression: " + impressions[i] + "<br><br>";
	}
	
	for(var i=0; i<findings.length; i++) {
		testTable += "Report Title: " + pdfTitles[i] + "<br>"
		testTable += "Findings: " + findings[i] + "<br><br>";
	}

	return transformedPdfList;
}

function transform_report(data) {
    var keywords = ["Title", "Recommendation", "Examination", "Event Examination", "Clinical History", "Technique", "Comparison", "Findings", "Impression", "Attending Radiologist", "Ordered By", "Order Date/Time", "Completion Date/Time", "Scan Initiation Date/Time", "Order Date", "Completion Date", "Performed on Date", "Encounter Number", "Accession Number", "Images were reviewed and interpreted by Attending Radiologist", "Electronically Signed On"];
    var output_data = "Event ";
    var keyword_index = 0;
    var input_data = data.toString();
	
    var pos = -1;
    for (var i=0; i<keywords.length; i++) {
	pos = input_data.indexOf(keywords[i]);
	if ( pos == 0) {
	    keyword_index = i;
	    break;
	}
    }
    
    while(pos != -1) {
		
            output_data += keywords[keyword_index] + " : ";
            pos += keywords[keyword_index].length;
	    var index = keyword_index;
            keyword_index = find_next_keyword(keywords, keyword_index, input_data, pos);
            
            var end_pos = input_data.indexOf(keywords[keyword_index]);
	    var output_text = input_data.slice(pos, end_pos).replace(/:/, '');
            output_data += output_text.replace(/^\s+|\s+$/gm,"") + "\n";
            
			if(keywords[index] === "Title"){
				pdfTitles.push(output_text.replace(/^\s+|\s+$/gm,""));
			}
			
			if (keywords[index] === "Impression") {
				impressions.push(output_text.replace(/^\s+|\s+$/gm,""));
			}

			if(keywords[index] === "Findings"){
				findings.push(output_text.replace(/^\s+|\s+$/gm,""));
			}
			else if(keywords[index] === "Completion Date" || keywords[index] === "Completion Date/Time") {
				if(input_data.indexOf("Performed on Date") == -1){
					output_data += "Performed on Date : " + output_text.replace(/^\s+|\s+$/gm,"") + "\n";
				}
			}
			
            pos = end_pos;
    }
    
    return output_data;
}

function find_next_keyword(keywords, index, input_data, pos) {
    var orig_index = index;
    var min_pos = input_data.length;
    var min_index = index;
    
    if(index == keywords.length - 1)
            return -1;
    for(var i = 0; i < keywords.length; i++) {
            if (i == orig_index)
                    continue;
            var keyword = keywords[i];
            var next_keyword_pos = input_data.indexOf(keyword, pos);
            if(next_keyword_pos != -1 && next_keyword_pos < min_pos) {
                    min_pos = next_keyword_pos;
                    min_index = i;
            }
            
    }
    return min_index;
}

function showRRbody() {
	
	//var tableBody = "";
	var tableBody = "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
			+ "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
	
	for(var i=0; i<transformedPdfList.length; i++) {
		var pdfContent = transformedPdfList[i];
		tableBody = buildRRbody(i, pdfContent, tableBody);
	}

	tableBody += "<tr><td><br><input id='rrComments' type='checkbox' value='Other comments'><b>Other comments:</b>"
		+ "<br><textarea id='rrCommentsid' cols='40' rows='5' ></textarea></td></tr>";
	tableBody += "</table></td></tr></table>";
	
	$('#rrbody').html(tableBody);
	
	return;
}

function showSelectedPDF() {
	var selectList = document.getElementById("selectList");
	var i = selectList.selectedIndex;
	if (i != 0) {
		var pdfContent = transformedPdfList[i-1];
		pdfHtml = "Title : "+pdfTitles[i-1]+"<br><br><br>"+pdfContent.replace(/\n/g,'<br>');
		var rrshow = document.getElementById("rrshow");
		var pdftable = document.getElementById("pdftable");
		var pdfframe = document.getElementById("pdfframe");
		rrshow.style.display = "block";
		pdftable.style.display = 'block';
		pdfframe.style.display = 'block';
		pdfframe.innerHTML = pdfHtml;
		//showPDF(i-1);
	}
	else {
		hidePDF();
	}
	return;
}

function showPDF(index) {
	var selectList = document.getElementById("selectList");
	var pdfContent = transformedPdfList[index];
	pdfHtml = "Title : "+pdfTitles[index]+"<br><br><br>"+pdfContent.replace(/\n/g,'<br>');
	var rrshow = document.getElementById("rrshow");
	var pdftable = document.getElementById("pdftable");
	var pdfframe = document.getElementById("pdfframe");
	rrshow.style.display = "block";
	pdftable.style.display = 'block';
	pdfframe.style.display = 'block';
	pdfframe.innerHTML = pdfHtml;
	selectList.selectedIndex = index+1;
	return;
}

function hidePDF() {
	var selectList = document.getElementById("selectList");
	var rrshow = document.getElementById("rrshow");
	var pdftable = document.getElementById("pdftable");
	var pdfframe = document.getElementById("pdfframe");
	rrshow.style.display = "none";
	pdftable.style.display = 'none';
	pdfframe.style.display = 'none';
	selectList.selectedIndex = 0;
	return;
}

function buildRRheader() {
	var tableBody = "";
	tableBody += "<table width='100%' bgcolor='white'>"
			  + "<tr><td><br><p class='test' onclick='javascript:expandcollapse(\"rrarrow\",\"wrap\");'>CoMorbidities from Radiology Report&nbsp;&nbsp;"
			  + "<img id='rrarrow' border='0' src='"+arrowdownimg+"' alt='Click to collapse' /></p></td></tr>"
			  + "</table>";
	$('#rrheader').html(tableBody);	
	return;
}

function getPdfTitle(pdf) {
	var sentences = new Array();
	sentences=break_sentences(pdf,"\n");
	
	var title_head = "Event Title :";
	var pdf_title;
	
	for(i=0; i<sentences.length; i++) {
		if(sentences[i].search(title_head) != -1 || sentences[i].search(title_head.toLowerCase()) != -1 || sentences[i].search(title_head.toUpperCase()) != -1) {
			pdf_title = sentences[i].slice(title_head.length + 1).replace(":", "").replace(/^\s+|\s+$/gm,"");
			break;
		}
	}
	
	return pdf_title;
}

function getPdfDate(pdf)
{
	var sentences = new Array();
	sentences=break_sentences(pdf,"\n");
	
	var title_date = "Electronically Signed On";
    var pdf_date = "";
	
	for(i=0; i<sentences.length; i++) {
		if(sentences[i].search(title_date) != -1 || sentences[i].search(title_date.toLowerCase()) != -1 || sentences[i].search(title_date.toUpperCase()) != -1) {
			pdf_date = sentences[i].slice(title_date.length + 1).replace(":", "").replace(/^\s+|\s+$/gm,"");
			break;
		}
	}
	
	return pdf_date;
}

function makeDivVisibleRR(divId){
	clearTimeout(timeout);
	document.getElementById(divId).style.display = "block";
	return;
}

function makeDivHiddenRR(divId){
	timeout = setTimeout(function(){ document.getElementById(divId).style.display = "none" }, interval);
	return;
}

function buildRRlist() {
	
	var tableBody = "";
	tableBody += "<select id='selectList' onChange=\"showSelectedPDF();\">";
	if (pdfTitles.length != 0) {
		tableBody += "<option value='first option'>Select the report to show</option>";
		for (var i=0; i<pdfTitles.length; i++) {
			tableBody += "<option value='"+pdfTitles[i]+"'>"+pdfTitles[i]+" ("+getPdfDate(transformedPdfList[i])+")</option>";
			//tableBody += "<option value='"+pdfTitles[i]+"'>"+pdfTitles[i]+"</option>";
		}
	}
	else {
		tableBody += "<option value='firstOption'>No report</option>";
	}
	tableBody += "</select>";
	tableBody += "\t<a href=\"#rrshow\"></a>";
	$('#rrlist').html(tableBody);	
	return;
}


function buildRRbody(index, contents, tableBody) {
	
	var comorb_array = new Array();
	comorb_array =func_category(index); 
	
	if(comorb_array != null) {
		var impression_sentences = new Array();

		var findings_sentences = new Array();

		impression_sentences = break_sentences(impressions[index],".");
		findings_sentences = break_sentences(findings[index],".");
		
		var negPhrases = new Array();
		negPhrases=negPhrases_processing();
		var negPhrases_two_d = new Array();
		negPhrases_two_d = negPhrases_two_d_processing(negPhrases);
		var conjunctions = new Array();
		conjunctions=conjunctions_processing();
		var conjunctions_two_d = new Array();
		conjunctions_two_d=negPhrases_two_d_processing(conjunctions);
		
		var final_comorb = new Array();
		var final_comorb1 = new Array();

		final_comorb=determine_final_comorb(impression_sentences,comorb_array);
		final_comorb1 = determine_final_comorb(findings_sentences,comorb_array);
		
		// for(var i=0; i<comorb_array.length; i++) {
			// testTable += "<br>*"+comorb_array[i]+"<br>";
		// }
//		testTable += "<br>final_comorb: ";
//		for(var i=0; i<final_comorb.length; i++) {
//			testTable += final_comorb[i][0]+", ";
//		}
//		testTable += "<br>";
		
		var final_sentences = new Array();
		var final_sentences1 = new Array();

		final_sentences = check_comorb_in_impression(impression_sentences,final_comorb,negPhrases_two_d,conjunctions_two_d);
		final_sentences1 = check_comorb_in_impression(findings_sentences,final_comorb1,negPhrases_two_d,conjunctions_two_d);
		
		var temp_comorb = new Array();
		temp_comorb=determine_final_comorb(final_sentences,final_comorb);
		final_comorb = temp_comorb;

		temp_comorb = new Array();
		temp_comorb = determine_final_comorb(final_sentences1,final_comorb1);
		final_comorb1 = temp_comorb;
		

		var impression_prefix = 0;
		var findings_prefix = 1;
		
//		testTable += "<br>final_comorb no negative: ";
//		for(var i=0; i<final_comorb.length; i++) {
//			testTable += final_comorb[i][0]+", ";
//		}
//		testTable += "<br>";

		//var per_margin_width = 50;
		//var margin_index = 0;
		
		if(final_comorb != null && final_comorb.length != 0) {
			for(var i=0; i<final_comorb.length; i++) {
				tableBody += "<tr><td><table>"
						  + "<tr onmouseover=\"mouseOverPara('rrSentencesImg"+index+impression_prefix+i+"','rrSentencesCol"+index+impression_prefix+i+"');\" onmouseout=\"mouseOutPara('rrSentencesImg"+index+impression_prefix+i+"','rrSentencesCol"+index+impression_prefix+i+"');\">"
						  + "<td><div id='rrSentencesCol"+index+impression_prefix+i+"'>"
						  + "<a onmouseover=\"makeDivVisibleRR('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+impression_prefix+i+"');\">"
						  + "<b><font color='#0000FF'>"
						  + "<input class='rrPart' id='rrGroup"+index+impression_prefix+i+"' type='checkbox' value='GROUP' onclick='javascript:otherForm(\"rrChkGrp"+index+impression_prefix+i+"\",\"rrGroup"+index+impression_prefix+i+"\");'>"+final_comorb[i][1]
						  + "</font></b></a></div>";
				
				//margin_index += 1;
				tableBody += "<div id='rrChkGrp"+index+impression_prefix+i+"' style='display: none; margin-left: 60px;'>";
						

				
				for(var j=2; j<final_comorb[i].length; j++) {		

					for(var k=0;k<final_comorb[i][j].length;k++){
					tableBody += "<br><input class='rrPart"+index+impression_prefix+i+"' id='rrGrp"+index+impression_prefix+i+"Chk"+j+"' type='checkbox'>"+final_comorb[i][j][k];
					}		
				}
				
				tableBody += "</div></td><td style='vertical-align:top'>" 
						+ "<a id='rrSentencesImg"+index+impression_prefix+i+"' onmouseover=\"makeDivVisibleRR('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+impression_prefix+i+"');\" style='visibility: hidden;'>"
						+ "<img src='"+button1img+"' alt='Details'/>"
						+ "</a></td><td style='vertical-align:top'>"
						+ "<div id='rrSentences"+index+impression_prefix+i+"' class='imageBackSingle' onmouseover=\"makeDivVisible('rrSentences"+index+impression_prefix+i+"');\" onmouseout=\"makeDivHidden('rrSentences"+index+impression_prefix+i+"');\" style='width:410px; height:160px; margin-top: -85px'><img src='"+divSingleimg+"'width='115%' height='180%'/>"
						+ "<div id='rrSentences"+index+impression_prefix+i+"' class='dynamicDiv' style='width:370px; height:250px; margin-left: 45px ; margin-top: -275px;float: left;clear: left;'>"
						+ "<br><span style='color: #858384; font-weight: bold;'>Report:</span> "+pdfTitles[index]+"<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+getPdfDate(contents)+"<br>"
						+ "<br><span style='color: #858384; font-weight: bold;'>Impression:<br></span>";
				
				
				for(var j=0; j<impression_sentences.length; j++) {
					
					var pos = impression_sentences[j].search(final_comorb[i][0].replace(/^\s+|\s+$/gm,""));
					var pos_lower = impression_sentences[j].search(final_comorb[i][0].toLowerCase().replace(/^\s+|\s+$/gm,""));
					var pos_upper = impression_sentences[j].search(final_comorb[i][0].toUpperCase().replace(/^\s+|\s+$/gm,""));
					
					var start = -1;
					if(pos != -1) 
					{
						start = pos;
					}
					if(pos_lower != -1) {start = pos_lower;}
					if(pos_upper != -1) {start = pos_upper;}
					
					if(start != -1) {
						var end = start + final_comorb[i][0].length;
						
						tableBody += impression_sentences[j].slice(0,start)
								+ "<font style='background-color:yellow;'>" + impression_sentences[j].slice(start, end) + "</font>"
								+ impression_sentences[j].slice(end);
					}
					else {
						tableBody += impression_sentences[j];
					}
					tableBody += ". "
				}
				
				tableBody += "<br><br><a href=\"#rrshow\"><button onclick=\"showPDF("+index+");\">Show Reports</button></a>";
				tableBody += "</div></div></td</tr></table></td></tr>";
			}
		}
	

	if(final_comorb1 != null && final_comorb1.length != 0) {
			for(var i=0; i<final_comorb1.length; i++) {
				tableBody += "<tr><td><table>"
						  + "<tr onmouseover=\"mouseOverPara('rrSentencesImg"+index+findings_prefix+i+"','rrSentencesCol"+index+findings_prefix+i+"');\" onmouseout=\"mouseOutPara('rrSentencesImg"+index+findings_prefix+i+"','rrSentencesCol"+index+findings_prefix+i+"');\">"
						  + "<td><div id='rrSentencesCol"+index+findings_prefix+i+"'>"
						  + "<a onmouseover=\"makeDivVisibleRR('rrSentences"+index+findings_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+findings_prefix+i+"');\">"
						  + "<b><font color='#0000FF'><input class='rrPart' id='rrGroup"+index+findings_prefix+i+"' type='checkbox' value='GROUP' onclick='javascript:otherForm(\"rrChkGrp"+index+findings_prefix+i+"\",\"rrGroup"+index+findings_prefix+i+"\");'>"+final_comorb1[i][1]
						  + "</font></b></a></div>";
				
				tableBody += "<div id='rrChkGrp"+index+findings_prefix+i+"' style='display: none; margin-left: 60px;'>";
				
				for(var j=2; j<final_comorb1[i].length; j++) {
					for(var k=0;k<final_comorb1[i][j].length;k++){
					tableBody += "<br><input class='rrPart"+index+findings_prefix+i+"' id='rrGrp"+index+findings_prefix+i+"Chk"+j+"' type='checkbox'>"+final_comorb1[i][j][k];
					}
				}

				tableBody += "</div></td><td style='vertical-align:top'>" 
						+ "<a id='rrSentencesImg"+index+findings_prefix+i+"' onmouseover=\"makeDivVisibleRR('rrSentences"+index+findings_prefix+i+"');\" onmouseout=\"makeDivHiddenRR('rrSentences"+index+findings_prefix+i+"');\" style='visibility: hidden;'>"
						+ "<img src='"+button1img+"' alt='Details'/>"
						+ "</a></td><td style='vertical-align:top'>"
						+ "<div id='rrSentences"+index+findings_prefix+i+"' class='imageBackSingle' onmouseover=\"makeDivVisible('rrSentences"+index+findings_prefix+i+"');\" onmouseout=\"makeDivHidden('rrSentences"+index+findings_prefix+i+"');\" style='width:410px; height:160px; margin-top: -85px'><img src='"+divSingleimg+"'width='115%' height='180%'/>"
						+ "<div id='rrSentences"+index+findings_prefix+i+"' class='dynamicDiv' style='width:370px; height:280px; margin-left: 45px ; margin-top: -275px;float: left;clear: left;'>"
						+ "<span style='color: #858384; font-weight: bold;'>Report:</span> "+pdfTitles[index]
						+ "<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+getPdfDate(contents)
						+ "<br><span style='color: #858384; font-weight: bold;'>Findings:</span>";
				
				var j;
				for(j=0; j<findings_sentences.length; j++) 
				{
					
					var pos = findings_sentences[j].search(final_comorb1[i][0].replace(/^\s+|\s+$/gm,""));
					var pos_lower = findings_sentences[j].search(final_comorb1[i][0].toLowerCase().replace(/^\s+|\s+$/gm,""));
					var pos_upper = findings_sentences[j].search(final_comorb1[i][0].toUpperCase().replace(/^\s+|\s+$/gm,""));
					
					var start = -1;
					if(pos != -1) 
					{
						start = pos;
					}
					if(pos_lower != -1) {start = pos_lower;}
					if(pos_upper != -1) {start = pos_upper;}
					
					if(start != -1) 
					{
						var end = start + final_comorb1[i][0].length;
						
						tableBody += findings_sentences[j].slice(0,start)
								+ "<font style='background-color:yellow;'>" + findings_sentences[j].slice(start, end) + "</font>"
								+ findings_sentences[j].slice(end);
					}
					else 
					{
						tableBody += findings_sentences[j];
					}
				}
				tableBody += "<br><span style='color: #858384; font-weight: bold;'>Impression:</span> "+impressions[index];
				tableBody += "<br><br><a href=\"#rrshow\"><button onclick=\"showPDF("+index+");\">Show Reports</button></a>";
				tableBody += "</div></div></td</tr></table></td></tr>";
			}
		}
	
	}
	
	return tableBody;
}

function func_category(index){
	
	var category = pdfTitles[index];
	var chest = "Chest";
	var head = "Head";
	var abdomen = "Abdomen";
	var abd = "ABD";

	var str_terms_comorbidities = "";	
	var two_d_array = new Array();
	var file_path;
	if ((category.search(chest)!=-1) || (category.search(chest.toLowerCase()) != -1) || (category.search(chest.toUpperCase()) != -1)){
		file_content1 = "effusion : Pleural effusion ; Exudative , Transudative , Inflammatory effusion , Malignant effusion\nPneumonia : Pneumonia ; Aspiration , Bacterial, Viral , suspected gram negative\nBronchiectasis : Bronchiectasis ; with acute exacerbation , with lower respiratory infection , with pneumonia\nBronchitis : Acute Bronchitis\nobstructive : obstructive airway disease ; Chronic , with acute lower respiratory infection , with acute exacerbation\nedema : Pulmonary edema ; Acute , Chronic\nARDS : ARDS\nAtelectasis : Atelectasis";
		two_d_array=split_terms_and_comorbidities(file_content1);
		//return two_d_array;
	}
	else if ((category.search(head)!=-1) || (category.search(head.toLowerCase()) != -1) || (category.search(head.toUpperCase()) != -1)){
		
		str_terms_comorbidities = "Mass Effect : Cerebral compression\nMidline Shift : Cerebral compression\nLoss of gray matter : Cerebral infarction\nCompression : Cerebral compression\nVasogenic edema : Cerebral edema ; Cerebral edema with compression\nHydrocephalus : Hydrocephalus ; Normal Pressure Hydrocephalus , Obstructive hydrocephalus\nSubarachnoid hemorrhage : Subarachnoid hemorrhage ; Traumatic , Non Traumatic , Acute , Chronic , Acute on Chronic\nSubdural Hematoma : Subdural Hematoma ; Traumatic , Non Traumatic , Acute , Chronic , Acute on Chronic\nEpidural hematoma : Epidural hematoma ; Traumatic , Non Traumatic , Acute , Chronic , Acute on Chronic\nCerebral hemorrhage : Cerebral hemorrhage ; Acute , Chronic , Acute on Chronic\nIntraventricular hemorrhage : Intraventricular hemorrhage ; Acute , Chronic , Acute on Chronic\nAneurysm : Cerebral Aneursym ; Non Ruptured , Ruptured\nTumor : Brain Tumor ; With compression , With hemorrhage\nHerniation : Brain herniation ; with cerebral compression , With cerebral edema\nSinusitis : Sinusitis ; Chronic Sinusitis , Acute Sinusitis , Acute on Chronic\ninfarction : Cerebral infarction\nAbscess : Cerebral Abscess\nNeoplasm : Cerebral Neoplasm ; With compression , With Hemorrhage";
		two_d_array = split_terms_and_comorbidities(str_terms_comorbidities);
		//return two_d_array;
	}
	else if ((category.search(abdomen)!=-1) || (category.search(abdomen.toLowerCase()) != -1) || (category.search(abdomen.toUpperCase()) != -1) || (category.search(abd)!=-1) || (category.search(abd.toLowerCase()) != -1) || (category.search(abd.toUpperCase()) != -1)){
		file_content3 = 'Biliary Dilation : Obstruction, Stricture, Stones, Cholangitis, Neoplasm, Pancreatitis\nThickening of colon : Colitis, diverticulitis, carcinoma, ischemia\npericolonic stranding : Colitis, diverticulitis, carcinoma, ischemia\nCholelithiasis : Acute Cholecystitis\nstones : Acute Cholecystitis\nGallbladder wall thickening : Acute Cholecystitis\npericholecystic fluid : Acute Cholecystitis\nEnlarged Pancreas : Acute Pancreatitis\nPeripancreatic fluid collections : Acute Pancreatitis\npancreatic psuedocysts : Acute Pancreatitis\nDilated Appendix : Acute Appendicitis\nperiappendix stranding : Acute Appendicitis\nHydronephrosis : Renal Stone\nperinephric stranding : Renal Stone\nrim sign : Renal Stone\nDisrupted splenic capsule : Splenic Laceration\nlack of splenic margin : Splenic Laceration\nhypodensity : Splenic Laceration\nhemoperitoneum : Splenic Laceration\ncontrast blush : Splenic Laceration\nextravasation : Liver Laceration\nSplenic Laceration : Liver Laceration\nPerihepatic fluid : Liver Laceration\nFragmented Lobe : Liver Laceration\ncapsular tear : Liver Laceration\nparenchymal disruption : Liver Laceration\nLinear hypodensity of pancreas : Pancreatic laceration\nRetropancreatic fluid : Pancreatic laceration\nRetroperitoneal fluid : Source of bleeding\nhematoma : Source of bleeding\nRetroperitoneal extravasation of contrast : Renal Contusion, Laceration, Shattered Kidney,  laceration of renal pelvis\nAdrenal hematoma : Renal Contusion, Laceration, Shattered Kidney,  laceration of renal pelvis\nMesenteric laceration : Bowel perforation, Ischemic Bowel\nhemoperitoneum : Bowel perforation, Ischemic Bowel\nExtraluminal Air : Bowel perforation\nFree Air : Bowel perforation\nPneumoperitoneum : Bowel perforation\nextravasation of contrast : Bowel perforation\ndiscontinuos bowel wall : Bowel perforation\nExtravasation of urine : Bladder Rupture\nObstructive Gas Pattern : Ileus, Volvulus, Small bowel Obstruction, Large Bowel Obstruction\nDilated Loops of bowel : Small Bowel Obstruction, Ileus\nSentinel Loop : Pancreatitis, Ileus\nDilation of colon : Large Bowel Obstruction, volvulus, Toxic megacolon\nFluid levels : Ileus\naccumulation : Ileus\nFree Gas : Bowel Perforation';
		two_d_array=category_processing(file_content3);
}
		return two_d_array;
	
}

function break_sentences(data,delimiter_string){
	var file_content = data;
	var textfile_sentences = new Array();
	while (file_content.length != 0){
			var pos_newline = file_content.indexOf(delimiter_string);
			if (pos_newline == -1){
				textfile_sentences.push(file_content.slice(0,file_content.length));
				break;
			}
			else if(pos_newline == 0){
				file_content = file_content.slice(1,file_content.length);
			}
			else{
				textfile_sentences.push(file_content.slice(0,pos_newline));
				file_content = file_content.slice((pos_newline)+1,file_content.length);
			}
	}
	return textfile_sentences;
}

function func_two_d_array(textfile_sentences){
	var i=0;
	var two_d_array = new Array();
	for(i=0;i<textfile_sentences.length;i++){
		var one_d_array = new Array();
		var pos_semicolon = textfile_sentences[i].search(":");
		if (pos_semicolon != -1){
		one_d_array.push(textfile_sentences[i].slice(0,pos_semicolon));
		var textfile_words = new Array();
		textfile_words=break_sentences(textfile_sentences[i].slice(pos_semicolon+1,textfile_sentences[i].length),",");
		var j=0;
		for(j=0;j<textfile_words.length;j++){
			one_d_array.push(textfile_words[j]);
		}
		two_d_array.push(one_d_array);
		}
	}
	return two_d_array;
}

function func_pull_impression(file_content){
	var impression = "Impression";
	var pos_impression = file_content.search(impression);
	var pos_lower_impression = file_content.search(impression.toLowerCase());
	var pos_upper_impression = file_content.search(impression.toUpperCase());
	
	var res_radiologist = "Resident Radiologist";
	var pos_res_radiologist = file_content.search(res_radiologist);
	var pos_lower_res_radiologist = file_content.search(res_radiologist.toLowerCase());
	var pos_upper_res_radiologist = file_content.search(res_radiologist.toUpperCase());
	
	var attn_radiologist = "Attending Radiologist";
	var pos_attn_radiologist = file_content.search(attn_radiologist);
	var pos_lower_attn_radiologist = file_content.search(attn_radiologist.toLowerCase());
	var pos_upper_attn_radiologist = file_content.search(attn_radiologist.toUpperCase());
	
	var start_pos;
	var end_pos;
	var impression_string;
	
	if (pos_impression != -1) start_pos = pos_impression + 11;
	else if (pos_lower_impression != -1) start_pos = pos_lower_impression + 11;
	else if (pos_upper_impression != -1) start_pos = pos_upper_impression + 11;
	
	if (start_pos > 11){
		if ((pos_res_radiologist != -1) || (pos_lower_res_radiologist != -1) || (pos_upper_res_radiologist != -1)){
			if (pos_res_radiologist != -1) end_pos = pos_res_radiologist;
			else if (pos_lower_res_radiologist != -1) end_pos = pos_lower_res_radiologist;
			else if (pos_upper_res_radiologist != -1) end_pos = pos_upper_res_radiologist;
			impression_string = file_content.slice(start_pos,end_pos);
			
		}
		else{
			if (pos_attn_radiologist !== -1) end_pos = pos_attn_radiologist;
			else if (pos_lower_attn_radiologist !== -1) end_pos = pos_lower_attn_radiologist;
			else if (pos_upper_attn_radiologist !== -1) end_pos = pos_upper_attn_radiologist;
			impression_string = file_content.slice(start_pos,end_pos);
			
		}
	}
	var impression_sentences = new Array();
	impression_sentences=break_sentences(impression_string,".")
	return impression_sentences;	
}


function func_pull_findings(file_content){
	var impression = "Impression";
		var pos_impression = file_content.search(impression);
		var pos_lower_impression = file_content.search(impression.toLowerCase());
		var pos_upper_impression = file_content.search(impression.toUpperCase());
		
		var findings = "Findings";
		var pos_findings = file_content.search(findings);
		var pos_lower_findings = file_content.search(findings.toLowerCase());
		var pos_upper_findings = file_content.search(findings.toUpperCase());
		
		var fstart_pos;
		var fend_pos;
		var findings_string;
		
		if(pos_findings != -1) fstart_pos = pos_findings + 9;
		else if (pos_lower_findings != -1) fstart_pos = pos_lower_findings + 9;
		else if (pos_upper_findings != -1) fstart_pos = pos_upper_findings + 9;
		
		if((pos_impression != -1) || (pos_lower_impression != -1) || (pos_upper_impression != -1)){
				 if (pos_impression != -1) fend_pos = pos_impression;
				 else if (pos_lower_impression != -1) fend_pos = pos_lower_impression;
				 else if (pos_upper_impression != -1) fend_pos = pos_upper_impression;
				 findings_string = file_content.slice(fstart_pos,fend_pos);
			}
			 
		var findings_sentences = new Array();
		findings_sentences = break_sentences(findings_string,".");
		return findings_sentences;
	}


function category_processing(file_content){
	var textfile_sentences = new Array(); 
	var two_d_array = new Array();
	var two_d_array1 = new Array();
	
	textfile_sentences=break_sentences(file_content,"\n");
	two_d_array = func_two_d_array(textfile_sentences);
	return two_d_array;
}

function split_terms_and_comorbidities(str_terms_comorbidities) {
	var str_term_and_comorbs_delimiter = " : ";
	var str_diff_level_comorbs_delimiter = " ; ";
	var str_same_level_comorbs_delimiter = " , ";
	var result_array = new Array();
	var temp_array = break_sentences(str_terms_comorbidities, "\n");
	
	var str_term_comorbidities = "";
	for(var i = 0; i < temp_array.length; i++) {
		var result = new Array();
		
		var term_and_comorbs = temp_array[i].split(str_term_and_comorbs_delimiter);
		
		result.push(term_and_comorbs[0]);
		var diff_level_comorbs = term_and_comorbs[1].split(str_diff_level_comorbs_delimiter)
		for(var j = 0; j<diff_level_comorbs.length; j++) {
			var result_per_level = new Array();
			var same_level_comorbs = diff_level_comorbs[j].split(str_same_level_comorbs_delimiter);
			for(var k = 0; k<same_level_comorbs.length; k++)
				result_per_level.push(same_level_comorbs[k]);
			result.push(result_per_level);
		}
		result_array.push(result);
	}
	
	return result_array;
}

function negPhrases_processing(){
	var negPhrases = new Array();

	negPhrases.push("absence of");
	negPhrases.push("cannot see");
	negPhrases.push("cannot");
	negPhrases.push("checked for");
	negPhrases.push("declined");
	negPhrases.push("declines");
	negPhrases.push("denied");
	negPhrases.push("denies");
	negPhrases.push("denying");
	negPhrases.push("evaluate for");
	negPhrases.push("fails to reveal");  
	negPhrases.push("free of");
	negPhrases.push("negative for");
	negPhrases.push("never developed");
	negPhrases.push("never had");
	negPhrases.push("no");  
	negPhrases.push("no abnormal");
	negPhrases.push("no cause of");
	negPhrases.push("no complaints of");
	negPhrases.push("no evidence");
	negPhrases.push("no new evidence");
	negPhrases.push("no other evidence");
	negPhrases.push("no evidence to suggest");
	negPhrases.push("no findings of");
	negPhrases.push("no findings to indicate");
	negPhrases.push("no mammographic evidence of");
	negPhrases.push("no new");
	negPhrases.push("no radiographic evidence of");
	negPhrases.push("no sign of");
	negPhrases.push("no significant");  
	negPhrases.push("no signs of"); 
	negPhrases.push("no suggestion of");
	negPhrases.push("no suspicious");
	negPhrases.push("not");  
	negPhrases.push("not appear");
	negPhrases.push("not appreciate");
	negPhrases.push("not associated with");
	negPhrases.push("not complain of");
	negPhrases.push("not demonstrate");
	negPhrases.push("not exhibit");
	negPhrases.push("not feel");
	negPhrases.push("not had");
	negPhrases.push("not have");
	negPhrases.push("not know of");
	negPhrases.push("not known to have");
	negPhrases.push("not reveal");
	negPhrases.push("not see");
	negPhrases.push("not to be");
	negPhrases.push("patient was not");
	negPhrases.push("rather than");
	negPhrases.push("resolved");
	negPhrases.push("test for");
	negPhrases.push("to exclude");
	negPhrases.push("unremarkable for");
	negPhrases.push("with no");
	negPhrases.push("without any evidence of");
	negPhrases.push("without evidence");
	negPhrases.push("without indication of");
	negPhrases.push("without sign of");
	negPhrases.push("without");
	negPhrases.push("rule out for");
	negPhrases.push("rule him out for");
	negPhrases.push("rule her out for");
	negPhrases.push("rule the patient out for");
	negPhrases.push("rule him out");
	negPhrases.push("rule her out");
	negPhrases.push("rule out");
	negPhrases.push("r/o");
	negPhrases.push("ro");
	negPhrases.push("rule the patient out");
	negPhrases.push("rules out");
	negPhrases.push("rules him out");
	negPhrases.push("rules her out");
	negPhrases.push("ruled the patient out for");
	negPhrases.push("rules the patient out");
	negPhrases.push("ruled him out against");
	negPhrases.push("ruled her out against");
	negPhrases.push("ruled him out");
	negPhrases.push("ruled her out");
	negPhrases.push("ruled out against");
	negPhrases.push("ruled the patient out against");
	negPhrases.push("did rule out for");
	negPhrases.push("did rule out against");
	negPhrases.push("did rule out");
	negPhrases.push("did rule him out for");
	negPhrases.push("did rule him out against");
	negPhrases.push("did rule him out");
	negPhrases.push("did rule her out for");
	negPhrases.push("did rule her out against");
	negPhrases.push("did rule her out");
	negPhrases.push("did rule the patient out against");
	negPhrases.push("did rule the patient out for");
	negPhrases.push("did rule the patient out");
	negPhrases.push("can rule out for");
	negPhrases.push("can rule out against");
	negPhrases.push("can rule out");
	negPhrases.push("can rule him out for");
	negPhrases.push("can rule him out against");
	negPhrases.push("can rule him out");
	negPhrases.push("can rule her out for");
	negPhrases.push("can rule her out against");
	negPhrases.push("can rule her out");
	negPhrases.push("can rule the patient out for");
	negPhrases.push("can rule the patient out against");
	negPhrases.push("can rule the patient out");
	negPhrases.push("adequate to rule out for");
	negPhrases.push("adequate to rule out");
	negPhrases.push("adequate to rule him out for");
	negPhrases.push("adequate to rule him out");
	negPhrases.push("adequate to rule her out for");
	negPhrases.push("adequate to rule her out");
	negPhrases.push("adequate to rule the patient out for");
	negPhrases.push("adequate to rule the patient out against");
	negPhrases.push("adequate to rule the patient out");
	negPhrases.push("sufficient to rule out for");
	negPhrases.push("sufficient to rule out against");
	negPhrases.push("sufficient to rule out");
	negPhrases.push("sufficient to rule him out for");
	negPhrases.push("sufficient to rule him out against");
	negPhrases.push("sufficient to rule him out");
	negPhrases.push("sufficient to rule her out for");
	negPhrases.push("sufficient to rule her out against");
	negPhrases.push("sufficient to rule her out");
	negPhrases.push("sufficient to rule the patient out for");
	negPhrases.push("sufficient to rule the patient out against");
	negPhrases.push("sufficient to rule the patient out");
    negPhrases.push("what must be ruled out is");
    
    negPhrases.push("should be ruled out for");
	negPhrases.push("ought to be ruled out for");
    negPhrases.push("may be ruled out for");
	negPhrases.push("might be ruled out for");
	negPhrases.push("could be ruled out for");
	negPhrases.push("will be ruled out for");
	negPhrases.push("can be ruled out for");
	negPhrases.push("must be ruled out for");
	negPhrases.push("is to be ruled out for");
	negPhrases.push("be ruled out for");
	negPhrases.push("unlikely");
	negPhrases.push("free");
	negPhrases.push("was ruled out");
	negPhrases.push("is ruled out");
	negPhrases.push("are ruled out");
	negPhrases.push("have been ruled out");
	negPhrases.push("has been ruled out");
	negPhrases.push("being ruled out");  
	negPhrases.push("should be ruled out");
	negPhrases.push("ought to be ruled out");
	negPhrases.push("may be ruled out");
	negPhrases.push("might be ruled out");
	negPhrases.push("could be ruled out");
	negPhrases.push("will be ruled out");
	negPhrases.push("can be ruled out");
	negPhrases.push("must be ruled out");
	negPhrases.push("is to be ruled out");
	negPhrases.push("be ruled out");
	
	return negPhrases;

}

function conjunctions_processing(){
	var conjunctions = new Array();
	
	conjunctions.push("but");
	conjunctions.push("however");
	conjunctions.push("nevertheless");
	conjunctions.push("yet");
	conjunctions.push("though");
	conjunctions.push("although");
	conjunctions.push("still");
	conjunctions.push("aside from");
	conjunctions.push("except");
	conjunctions.push("apart from");
	conjunctions.push("secondary to");
	conjunctions.push("as the cause of");
	conjunctions.push("as the source of");
	conjunctions.push("as the reason of");
	conjunctions.push("as the etiology of");
	conjunctions.push("as the origin of");
	conjunctions.push("as the cause for");
	conjunctions.push("as the source for");
	conjunctions.push("as the reason for");
	conjunctions.push("as the etiology for");
	conjunctions.push("as the origin for");
	conjunctions.push("as the secondary cause of");
	conjunctions.push("as the secondary source of");
	conjunctions.push("as the secondary reason of");
	conjunctions.push("as the secondary etiology of");
	conjunctions.push("as the secondary origin of");
	conjunctions.push("as the secondary cause for");
	conjunctions.push("as the secondary source for");
	conjunctions.push("as the secondary reason for");
	conjunctions.push("as the secondary etiology for");
	conjunctions.push("as the secondary origin for");
	conjunctions.push("as a cause of");
	conjunctions.push("as a source of");
	conjunctions.push("as a reason of");
	conjunctions.push("as a etiology of");
	conjunctions.push("as a cause for");
	conjunctions.push("as a source for");
	conjunctions.push("as a reason for");
	conjunctions.push("as a etiology for");
	conjunctions.push("as a secondary cause of");
	conjunctions.push("as a secondary source of");
	conjunctions.push("as a secondary reason of");
	conjunctions.push("as a secondary etiology of");
	conjunctions.push("as a secondary origin of");
	conjunctions.push("as a secondary cause for");
	conjunctions.push("as a secondary source for");
	conjunctions.push("as a secondary reason for");
	conjunctions.push("as a secondary etiology for");
	conjunctions.push("as a secondary origin for");
	conjunctions.push("cause of");
	conjunctions.push("cause for");
	conjunctions.push("causes of");
	conjunctions.push("causes for");
	conjunctions.push("source of");
	conjunctions.push("source for");
	conjunctions.push("sources of");
	conjunctions.push("sources for");
	conjunctions.push("reason of");
	conjunctions.push("reason for");
	conjunctions.push("reasons of");
	conjunctions.push("reasons for");
	conjunctions.push("etiology of");
	conjunctions.push("etiology for");
	conjunctions.push("trigger event for");
	conjunctions.push("origin of");
	conjunctions.push("origin for");
	conjunctions.push("origins of");
	conjunctions.push("origins for");
	conjunctions.push("other possibilities of");
	
	return conjunctions;
}

function negPhrases_two_d_processing(negPhrases){
	var negPhrases_two_d = new Array();
	var i=0;
	for (i=0;i<negPhrases.length;i++){
		var temp_array = new Array();
		temp_array=break_sentences(negPhrases[i]," ");
		negPhrases_two_d.push(temp_array);
	}
	return negPhrases_two_d;
}

function determine_final_comorb(impression_sentences,comorb_array){
	var i=0,j=0,k=0;
	var final_comorb = new Array();
	for(i=0;i<comorb_array.length;i++){
		var temp_array = new Array();
		temp_array = break_sentences(comorb_array[i][0]," ");
		
		for(j=0;j<impression_sentences.length;j++){
			var comorb_parts_present = 0;
			for(k=0;k<temp_array.length;k++){
				//if((impression_sentences[j].search(temp_array[k]) !== -1) || (impression_sentences[j].search(temp_array[k].toLowerCase()) !== -1) || (impression_sentences[j].search(temp_array[k].toUpperCase()) !== -1)){
				//if((impression_sentences[j].toLowerCase()).search(temp_array[k].toLowerCase()) !== -1){
				if((impression_sentences[j].search(temp_array[k]) !== -1) || (impression_sentences[j].search(temp_array[k].toLowerCase()) !== -1) || (impression_sentences[j].search(temp_array[k].toUpperCase()) !== -1)){
					comorb_parts_present = 1;
				}
				else {
					comorb_parts_present = 0;
					break;
				}
			}
			if (comorb_parts_present == 1){
				final_comorb.push(comorb_array[i]);
				break;
			}
		}
	}
	return final_comorb;
}

function check_comorb_in_impression(impression_sentences,final_comorb,negPhrases_two_d,conjunctions_two_d){
	var i=0,j=0,k=0;
	var final_sentences = new Array();
	var temp_sentences = new Array();
	for(i=0;i<impression_sentences.length;i++){
		for(j=0;j<final_comorb.length;j++){
			var temp_array = new Array();
			temp_array = break_sentences(final_comorb[j][0]," ");
			var comorb_parts_present = 0;
			for(k=0;k<temp_array.length;k++){
				//if((impression_sentences[i].search(temp_array[k]) !== -1) || (impression_sentences[i].search(temp_array[k].toLowerCase()) !== -1) || (impression_sentences[i].search(temp_array[k].toUpperCase()) !== -1)){
				//if((impression_sentences[i].toLowerCase()).search(temp_array[k].toLowerCase()) !== -1){
				if((impression_sentences[i].search(temp_array[k]) != -1) || (impression_sentences[i].search(temp_array[k].toLowerCase()) !== -1) || (impression_sentences[i].search(temp_array[k].toUpperCase()) != -1)){
					comorb_parts_present = 1;
				}
				else {
					comorb_parts_present = 0;
					break;
				}
			}
			if (comorb_parts_present ==1){
				temp_sentences.push(impression_sentences[i]);
				break;
			}
		}
	}
	var neg_phrase_present;
	var  conj_present;
	
	for(i=0;i<temp_sentences.length;i++){
		for(j=0;j<negPhrases_two_d.length;j++){
			neg_phrase_present = 1;
			for(k=0;k<negPhrases_two_d[j].length;k++){
				//if((temp_sentences[i].search(negPhrases_two_d[j][k]) == -1) || (temp_sentences[i].search(negPhrases_two_d[j][k].toLowerCase()) == -1) || (temp_sentences[i].search(negPhrases_two_d[j][k].toUpperCase()) == -1)){
				//if((temp_sentences[i].toLowerCase()).search(negPhrases_two_d[j][k].toLowerCase()) == -1){
				if((temp_sentences[i].search(negPhrases_two_d[j][k]) == -1) && (temp_sentences[i].search(negPhrases_two_d[j][k].toLowerCase()) == -1) && (temp_sentences[i].search(negPhrases_two_d[j][k].toUpperCase()) == -1) && (temp_sentences[i].search(toSentenceCase(negPhrases_two_d[j][k])) == -1)){
					neg_phrase_present = 0;
					break;
				}
			}
			if (neg_phrase_present == 1){
				testTable += "<br>negPhrases: ";
				for(k=0;k<negPhrases_two_d[j].length;k++){
					testTable += negPhrases_two_d[j][k];
				}
				testTable += "<br>";
				break;
			}
		}
		if (neg_phrase_present == 1){
			
			for(j=0;j<conjunctions_two_d.length;j++){
				conj_present = 1;
				for(k=0;k<conjunctions_two_d[j].length;k++){
					//if((temp_sentences[i].search(conjunctions_two_d[j][k]) == -1) || (temp_sentences[i].search(conjunctions_two_d[j][k].toLowerCase()) == -1) || (temp_sentences[i].search(conjunctions_two_d[j][k].toUpperCase()) == -1)){
					//if((temp_sentences[i].toLowerCase()).search(conjunctions_two_d[j][k].toLowerCase()) == -1){
					if((temp_sentences[i].search(conjunctions_two_d[j][k]) == -1) && (temp_sentences[i].search(conjunctions_two_d[j][k].toLowerCase()) == -1) && (temp_sentences[i].search(conjunctions_two_d[j][k].toUpperCase()) == -1) && (temp_sentences[i].search(toSentenceCase(conjunctions_two_d[j][k])) == -1)){
						conj_present = 0;
						break;
					}
				}
				if (conj_present == 1){
					break;
				}
			}
			if(conj_present == 1){
				final_sentences.push(temp_sentences[i]);
			}
		}
		else{
			final_sentences.push(temp_sentences[i]);
		}
	}
	return final_sentences;
}

function toSentenceCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

