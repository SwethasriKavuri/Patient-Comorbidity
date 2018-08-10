

var pdfTitles = [];
var pdfList = [];
var transformedPdfList = [];
var impressions = [];
var findings = [];
var radiologyLinks = [];

var ecgPDFTitles = [];
var ecgPDFList = [];
var ecgLinks = [];
var ecgTransformedPdfList = [];
var ecgImpressions = [];
var ecgFindings = [];

var pdfHtml;
var timeout;
var interval = 3000;
var testTable = "";
var no_of_radiology_reports = 0;
var no_of_ecg_reports = 0;
var array_all = new Array();
var merged_sentences = new Array();
var RADIOLOGY = 'RADIOLOGY';
var ecgarray_all = [];
var radFilterObj = {"source" : "RADIOLOGY", "selectlist" : "selectList"};
var ecgFilterObj = {"source" : "ECG", "selectlist" : "selectECGList"};

var reportSearchJSON = [
	{"category":["Chest"],
	 "report":[
		{"search" : "effusion",
		 "display" : "Pleural effusion",
		 "level" : [
			{"term" : "Exudative", "types":[]}, 
			{"term" : "Transudative", "types":[]},
			{"term" : "Inflammatory effusion", "types":[]},
			{"term" : "Malignant effusion", "types":[]}
			]
		},
		{"search" : "Pneumonia",
		 "display" : "Pneumonia",
		 "level" : [
			{"term": "Aspiration", "types":[]},
			{"term": "Bacterial", "types":[]},
			{"term": "Viral", "types":[]},
			{"term": "Suspected gram negative", "types":[]}
			]
		},
		{"search" : "Bronchiectasis",
		 "display" : "Bronchiectasis",
		 "level" : [
			{"term": "with acute exacerbation" , "types":[]},
			{"term": "with lower respiratory infection" , "types":[]},
			{"term": "with pneumonia" , "types":[]}
		 ]			
		},
		{"search" : "Bronchitis",
		 "display" : "Acute Bronchitis",
		 "level" : []			
		},
		{"search" : "obstructive",
		 "display" : "obstructive airway disease",
		 "level" : [
			{"term": "Chronic" , "types":[]},
			{"term": "with acute lower respiratory infection" , "types":[]},
			{"term": "with acute exacerbation" , "types":[]}
		 ]			
		},
		{"search" : "edema",
		 "display" : "Pulmonary edema",
		 "level" : [
			{"term": "Acute" , "types":[]},
			{"term": "Chronic" , "types":[]}			
		 ]			
		},
		{"search" : "ARDS",
		 "display" : "ARDS",
		 "level" : []			
		},
		{"search" : "Atelectasis",
		 "display" : "Atelectasis",
		 "level" : []			
		}
	 ]},
	{"category":["Head", "Brain"],
	 "report":[
		{"search" : "Mass Effect",
		 "display" : "Cerebral compression",
		 "level" : []			
		},
		{"search" : "Midline Shift",
		 "display" : "Cerebral compression",
		 "level" : []			
		},
		{"search" : "Loss of grey matter",
		 "display" : "Cerebral infarction",
		 "level" : []		
		},
		{"search" : "Compression",
		 "display" : "Cerebral compression",
		 "level" : []			
		},
		{"search" : "Vasogenic edema",
		 "display" : "Cerebral edema",
		 "level" : [
			{"term": "Cerebral edema with compression" , "types":[]}
		 ]			
		},
		{"search" : "Hydrocephalus",
		 "display" : "Hydrocephalus",
		 "level" : [
			{"term": "Normal Pressure Hydrocephalus" , "types":[]},
			{"term": "Obstructive hydrocephalus" , "types":[]}			
		 ]			
		},
		{"search" : "Subarachnoid hemorrhage",
		 "display" : "Subarachnoid hemorrhage",
		 "level" : [
			{"term": "Traumatic" , "types":[]},
			{"term": "Non Traumatic" , "types":[]},
			{"term": "Acute", "types":[]},
			{"term": "Chronic", "types":[]},
			{"term": "Acute on Chronic", "types":[]}
		 ]			
		},
		{"search" : "Subdural Hematoma",
		 "display" : "Subdural Hematoma",
		 "level" : [
			{"term": "Traumatic" , "types":[]},
			{"term": "Non Traumatic" , "types":[]},
			{"term": "Acute", "types":[]},
			{"term": "Chronic", "types":[]},
			{"term": "Acute on Chronic", "types":[]}
		 ]			
		},
		{"search" : "Epidural hematoma",
		 "display" : "Epidural hematoma",
		 "level" : [
			{"term": "Traumatic" , "types":[]},
			{"term": "Non Traumatic" , "types":[]},
			{"term": "Acute", "types":[]},
			{"term": "Chronic", "types":[]},
			{"term": "Acute on Chronic", "types":[]}
		 ]			
		},
		{"search" : "Cerebral hemorrhage",
		 "display" : "Cerebral hemorrhage",
		 "level" : [
			{"term": "Acute", "types":[]},
			{"term": "Chronic", "types":[]},
			{"term": "Acute on Chronic", "types":[]}
		 ]			
		},
		{"search" : "Intraventricular hemorrhage",
		 "display" : "Intraventricular hemorrhage",
		 "level" : [
			{"term": "Acute", "types":[]},
			{"term": "Chronic", "types":[]},
			{"term": "Acute on Chronic", "types":[]}
		 ]			
		},
		{"search" : "Aneurysm",
		 "display" : "Cerebral Aneurysm",
		 "level" : [
			{"term": "Non Ruptured" , "types":[]},
			{"term": "Ruptured" , "types":[]}
		 ]			
		},
		{"search" : "Tumor",
		 "display" : "Brain Tumor",
		 "level" : [
			{"term": "With compression" , "types":[]},
			{"term": "With hemorrhage" , "types":[]}
		 ]			
		},
		{"search" : "Herniation",
		 "display" : "Brain herniation",
		 "level" : [
			{"term": "with cerebral compression" , "types":[]},
			{"term": "with cerebral edema" , "types":[]}
		 ]			
		},
		{"search" : "Sinusitis",
		 "display" : "Sinusitis",
		 "level" : [
			{"term": "Chronic Sinusitis" , "types":[]},
			{"term": "Acute Sinusitis" , "types":[]},
			{"term": "Acute on Chronic", "types":[]}
		 ]			
		},
		{"search" : "edema",
		 "display" : "Cerebral edema",
		 "level" : []			
		},
		{"search" : "infarction",
		 "display" : "Cerebral infarction",
		 "level" : []			
		},
		{"search" : "Abscess",
		 "display" : "Cerebral Abscess",
		 "level" : []			
		},
		{"search" : "Neoplasm",
		 "display" : "Cerebral Neoplasm",
		 "level" : [
			{"term": "With compression" , "types":[]},
			{"term": "With Hemorrhage" , "types":[]}			
		 ]			
		}		
	 ]},
	{"category":["Abdomen", "Abd"],
	 "report":[
		{"search" : "Pancreatitis",
		 "display" : "Pancreatitis",
		 "level" : [
			{"term": "Acute" , 
			 "types":[
			 {"term":"Alcohol induced", "types":[]},
			 {"term":"Biliary", "types":[]},
			 {"term":"Drug induced", "types":[]},
			 {"term":"Not otherwise specified", "types":[]}
			]},
			{"term": "Chronic" , "types":[
			 {"term":"Alcohol induced", "types":[]},
			 {"term":"Biliary", "types":[]},
			 {"term":"Drug induced", "types":[]},
			 {"term":"Not otherwise specified", "types":[]}
			]}				
		 ]			
		},
		{"search" : "Pancreatic cyst",
		 "display" : "Pancreatic cyst/pseudocyst",
		 "level" : []			
		},
		{"search" : "Obstruction",
		 "display" : "Intestinal Obstruction",
		 "level" : [
			{"term": "Intestinal obstruction with Ileus" , "types":[]},
			{"term": "Intussusception" , "types":[]},			
			{"term": "Volvulus" , "types":[]}
		 ]			
		},
		{"search" : "Cholecystitis",
		 "display" : "Cholecystitis",
		 "level" : [
			{"term": "Acute" , "types":[]},
			{"term": "Chronic" , "types":[]},			
			{"term": "Acute with Chronic" , "types":[]}
		 ]			
		},
		{"search" : "Gastritis",
		 "display" : "Gastritis",
		 "level" : [
			{"term": "Acute" , "types":[
			 {"term": "with bleeding", "types":[]}
			]},
			{"term": "Chronic" , "types":[
			 {"term": "with bleeding", "types":[]}
		    ]}
		 ]			
		},
		{"search" : "Peritonitis",
		 "display" : "Peritonitis",
		 "level" : []			
		},
		{"search" : "Cholecystitis",
		 "display" : "Cholecystitis",
		 "level" : [
			{"term": "Acute" , "types":[]},
			{"term": "Chronic" , "types":[]},			
			{"term": "Acute with Chronic" , "types":[]}
		 ]			
		},
		{"search" : "Enteritis",
		 "display" : "Acute",
		 "level" : [
			{"term": "Due to C.diff" , "types":[]},
			{"term": "Due to E.coli" , "types":[]},			
			{"term": "Bacterial" , "types":[]}
		 ]			
		}
		
	 ]},	 
	{"category":["ECG"],
	 "report": [
		{"search" : "Ventricular Tachycardia",
		 "display" : "Ventricular Tachycardia",
		 "level" : []			
		},
		{"search" : "Ventricular fibrillation",
		 "display" : "Ventricular fibrillation",
		 "level" : []			
		},
		{"search" : "Supraventricular tachycardia",
		 "display" : "Supraventricular tachycardia",
		 "level" : []			
		},
		{"search" : "Atrial fibrillation",
		 "display" : "Atrial fibrillation",
		 "level" : [
			{"term": "paroxysmal" , "types":[]},
			{"term": "persistant" , "types":[]},			
			{"term": "permanent" , "types":[]}
		 ]			
		},
		{"search" : "Infarction",
		 "display" : "Myocardial infarction",
		 "level" : [
			{"term": "Old Myocardial Infarction" , "types":[]},
			{"term": "Acute Myocardial Infarction" , "types":[]}
		 ]			
		},
		{"search" : "Infarct",
		 "display" : "Myocardial infarction",
		 "level" : [
			{"term": "Old Myocardial Infarction" , "types":[]},
			{"term": "Acute Myocardial Infarction" , "types":[]}
		 ]			
		},
		{"search" : "Atrial flutter",
		 "display" : "Atrial flutter",
		 "level" : []			
		},
		{"search" : "1st degree A-V block",
		 "display" : "1st degree A-V block",
		 "level" : []			
		}		
	 ]}
	];


function initRR(loadData) 
{
	//var d1 = new Date();
	//var t1 = d1.getTime();	
	if (loadData)
		getDataRR();	
	//var d2 = new Date();	
	//var t2 = d2.getTime();
	//var data1 = (t2-t1).toString();
	//alert(data1);
	try {
	buildRRheader();
	buildRRlist();
	showRRbody();	
	//var d3 = new Date();
	//var t3 = d3.getTime();
	//var data2 = (t3-t2).toString();
	//alert(data2);	
	commentsCheck();
    initECG();
	} catch (err){		
		alert("Something has gone wrong! The process is taking long time. Please contact administrator");
	}
}

//alert(no_of_reports);



function getDataRR()
{
	var reqObj = new XMLCclRequest();
	reqObj.onreadystatechange = function (){
		if (reqObj.readyState == 4 && reqObj.status == 200){
			var msgText = reqObj.responseText;
			if (msgText != undefined && msgText != null){
				var jsonObj = eval('(' + msgText + ')');			
				if (jsonObj){					
                    var radi = 0;
                    var ecgi = 0;
					for (var x = 0; x < jsonObj.TEMP.RADCNT; x++) {
                        // Segregating ECG reports based on title
						var title = jsonObj.TEMP.RAD[x].TITLE;
                        var content = jsonObj.TEMP.RAD[x].CONTENTS;
						var link = "http://www.google.com"
						try {
							link = jsonObj.TEMP.RAD[x].LINK;
						} catch (err) {
							link = "http://www.google.com";
							// link is not part of response yet!
						}						
						if (checkForECG(title)) // this method is defined in ecg.js
                        {
                            ecgPDFTitles[ecgi] = title;
                            ecgPDFList[ecgi] = content;
							ecgLinks[ecgi] = link;
                            ecgi++;
                            no_of_ecg_reports++;
                        }
                        else
                        {
                            pdfTitles[radi] = title;
                            pdfList[radi] = content;
							radiologyLinks[radi] = link;
                            no_of_radiology_reports++;
                            radi++;    
                        }						
					}				
				}
			}
		}
	}
	var param = "^MINE^,value($VIS_EncntrId$),value($PAT_PersonId$)";

	reqObj.open('GET',"uhmc_mp_comorbidity3_data", 0);
	reqObj.send(param);

	//alert(no_of_reports);	
	for (var i = 0; i < pdfList.length; i++) {
		transformedPdfList.push(transform_report(pdfList[i]));		
	}
    
    for (var i = 0; i < ecgPDFList.length; i++) {
		ecgTransformedPdfList.push(ecgPDFList[i]); // no transformation for ecg   
	}
}

function getPdfDate(pdf)
{
	var sentences = new Array();
	sentences = break_sentences(pdf, "\n");
	var title_date = "Electronically Signed On";
    var pdf_date = "";

	for (i = 0; i < sentences.length; i++) {
		if (sentences[i].toLowerCase().search(title_date.toLowerCase()) != -1) {
			pdf_date = sentences[i].slice(title_date.length + 1).replace(":", "").replace(/^\s+|\s+$/gm,"");
			break;
		}
	}
	return pdf_date;
}

function getPdfDateAndSignedBy(pdf)
{
	var sentences = new Array();
	sentences=break_sentences(pdf, "\n");
	var title_date = "Electronically Signed On";
    var pdf_date = "";
	var pdfDateAndSignedArr = [];

	for (i = 0; i < sentences.length; i++) {
		if (sentences[i].toLowerCase().search(title_date.toLowerCase()) != -1) {
			pdf_date = sentences[i].slice(title_date.length + 1).replace(":", "").replace(/^\s+|\s+$/gm,"");
			pdfDateAndSignedArr = pdf_date.split("by");
			try {
				var dateArr = pdfDateAndSignedArr[0].split(","); // Date format is Jan 5, 2016 05:00pm
				pdfDateAndSignedArr[0] = dateArr.join(" ");
				var doctorArr = pdfDateAndSignedArr[1].split(",");// Doctor format is Dr. LName, FNameStony Brook Hospital
				pdfDateAndSignedArr[1] = doctorArr.join(" ");
			} catch (err) {
				pdfDateAndSignedArr = pdf_date.split("by");	
			}
			break;
		}
	}
	return pdfDateAndSignedArr;
}

function transform_report(data) {
    var keywords = ["Title", "Recommendation", "Examination", "Event Examination", "Clinical History", "History and Indication", "Technique", "Comparison", "Contrast Contrast Agent", "Findings", "Impression", "Attending Radiologist", "Ordered By", "Order Date/Time", "Completion Date/Time", "Scan Initiation Date/Time", "Order Date", "Completion Date", "Performed on Date", "Encounter Number", "Accession Number", "Images were reviewed and interpreted by Attending Radiologist", "Electronically Signed On"];
    var output_data = "Event ";
    var keyword_index = 0;
    var input_data = data.toString();
    var pos = -1;
    for (var i = 0; i < keywords.length; i++) {
		pos = input_data.indexOf(keywords[i]);		
		if (pos != -1)
		{
			keyword_index = i;
			break;
		}
    }
    while (pos != -1) 
    {
        output_data += keywords[keyword_index] + " : ";
        pos += keywords[keyword_index].length;
	    var index = keyword_index;
        keyword_index = find_next_keyword(keywords, keyword_index, input_data, pos);        
        var end_pos = input_data.indexOf(keywords[keyword_index]);
	    var output_text = input_data.slice(pos, end_pos).replace(/:/, '');
        output_data += output_text.replace(/^\s+|\s+$/gm,"") + "\n";
		if (keywords[index] === "Title")
		{
			pdfTitles.push(output_text.replace(/^\s+|\s+$/gm,""));
		}			

		if (keywords[index] === "Impression") 
		{
			impressions.push(output_text.replace(/^\s+|\s+$/gm,""));
		}		
	
		if (keywords[index] === "Findings")
		{
			findings.push(output_text.replace(/^\s+|\s+$/gm,""));
		}
		else if (keywords[index] === "Completion Date" || keywords[index] === "Completion Date/Time") 
		{
			if (input_data.indexOf("Performed on Date") == -1)
			{
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
    
    if (index == keywords.length - 1)
		return -1;
    for (var i = index + 1; i < keywords.length; i++) {
        if (i == orig_index)
			continue;
        var keyword = keywords[i];
        var next_keyword_pos = input_data.indexOf(keyword, pos);
        if (next_keyword_pos != -1 && next_keyword_pos < min_pos) {
            min_pos = next_keyword_pos;
            min_index = i;
        }           
    }
    return min_index;
}

function showRRbody() {
	var tableBody = "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
			+ "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
	for (var i = 0; i < transformedPdfList.length; i++) {
		var pdfContent = transformedPdfList[i];				
		tableBody = buildRRbody(i, pdfContent, tableBody);
	}

	/*tableBody += "<tr style='display:none'><td><br><input id='rrComments' type='checkbox' value='Other comments'><b>Other comments:</b>"
		+ "<br><textarea id='rrCommentsid' cols='40' rows='5' ></textarea></td></tr>";
	tableBody += "</table></td></tr></table>";		*/
	$('#rrbody').html(tableBody);

	return;
}

function commentsCheck(){
	$("#rrCommentsid").on("input propertychange", function(){
		if ($("#rrComments").is(":checked"))
		{
			if ($("#rrCommentsid").val() == '')
			{
				$('#rrComments').attr('checked', false); // Unchecks it
			}
		}
		else
		{
			if ($("#rrCommentsid").val() != '')
			{
				$('#rrComments').attr('checked', true); // checks it
			}
		}
	});
}
	// For previously committed radiology comorbidites: show reports	

function linkReportInPreviouslyCommitted(pcComorb, reportCritArr, reportIndex, source)
{
	var domId = reportCritArr[reportCritArr.length - 1];
	var link = "";
	if (source === 'ECG')
		link = ecgLinks[reportIndex];
	else
		link = radiologyLinks[reportIndex];
	var html = "<br/><a href='"+link+"' target='_blank'> Link to Report </a>&nbsp;&nbsp;<button onclick=\"showPDF("+reportIndex+", true,'"+source+"');makeDivHidden('"+domId+"');\">Show Report</button>"
	$("#" + domId + ".dynamicDiv").append(html);
	/*$("#" + domId + ".imageBack").on("mouseover", function(){
		makeDivVisible(domId);
	}).on("mouseout", function(){
		makeDivHidden(domId);
	});*/
}
function showSelectedPDF(source) {    
    var selectListId = "";
    if (source === "ECG")
    {
        selectListId = ecgFilterObj.selectlist;            
    }
    else
    {
        selectListId = radFilterObj.selectlist;            
    }
	var selectList = document.getElementById(selectListId);
	var i = selectList.selectedIndex;    
	if (i != 0) {
		showPDF(i - 1, false, source);
	}
	else {
		hidePDF(false, source);
	}
	return;
}

function showPDF(index, isCommitted)
{
	showPDF(index, isCommitted, "RADIOLOGY");
}
function showPDF(index, isCommitted, source) {
    var filterObj = radFilterObj;
    var pdfContent = '';
	var link = "";
    array3 = array_all;
    if (source === "ECG")
    {
        pdfContent = ecgTransformedPdfList[index];
        filterObj = ecgFilterObj;
        array3 = ecgarray_all;
		link = ecgLinks[index];
    }
    else
    {
        pdfContent = transformedPdfList[index];
		link = radiologyLinks[index];
    }
	var selectList = document.getElementById("selectList");		
    var rrshow = document.getElementById("rrshow");
	var pdftable = document.getElementById("pdftable");
	var pdfframe = document.getElementById("pdfframe");    	
	if (isCommitted)
	{
		rrshow = document.getElementById("pcshow");
		pdftable = document.getElementById("pdftablepc");
		pdfframe = document.getElementById("pdfframepc");            
	}
    else if (filterObj.source === "ECG")
    {
        selectList = document.getElementById("selectECGList");	
        rrshow = document.getElementById("ecgshow");
		pdftable = document.getElementById("pdftableecg");
		pdfframe = document.getElementById("pdfframeecg");
    }
    pdfHtml = pdfContent.replace(/\n/g,'<br/>');	
	rrshow.style.display = "block";
	pdftable.style.display = 'block';
	pdfframe.style.display = 'block';


	var pdfHtml_sentences = break_sentences(pdfHtml,".");
	var tableBody = '';
	for (var j = 0; j < pdfHtml_sentences.length; j++) 
	{
		var cur_string = pdfHtml_sentences[j];		
		for (var i = 0; i < array3.length; i++) {
	
			var pos = cur_string.search(array3[i].search.replace(/^\s+|\s+$/gm,""));
			var pos_lower = cur_string.search(array3[i].search.toLowerCase().replace(/^\s+|\s+$/gm,""));
			var pos_upper = cur_string.search(array3[i].search.toUpperCase().replace(/^\s+|\s+$/gm,""));

			var start = -1;
			if (pos != -1) 
			{
				start = pos;
			}
			if (pos_lower != -1) {start = pos_lower;}
			if (pos_upper != -1) {start = pos_upper;}
			
			if (start != -1) 
			{
				var end = start + array3[i].search.length;
				
				var merged_string = cur_string.slice(0, start)
						+ "<span class='highlight' style='background-color:yellow;'>" + cur_string.slice(start, end) + "</span>"
						+ cur_string.slice(end);

				cur_string = merged_string;
			}		
		}
		tableBody += cur_string+".";
	}	
	tableBody += "<br/><a href='"+link+"' target='_blank'> Link to Report </a>"
	pdfframe.innerHTML = tableBody;
	if (!isCommitted)
		selectList.selectedIndex = index + 1;
	return;
}

function hidePDF(isCommitted, source) {
	var selectList = document.getElementById("selectList");
	var rrshow = document.getElementById("rrshow");
	var pdftable = document.getElementById("pdftable");
	var pdfframe = document.getElementById("pdfframe");
	if (isCommitted)
	{
		rrshow = document.getElementById("pcshow");
		pdftable = document.getElementById("pdftablepc");
		pdfframe = document.getElementById("pdfframepc");
	}
    else if (source === "ECG")
    {
        selectList = document.getElementById("selectECGList");
        rrshow = document.getElementById("ecgshow");
		pdftable = document.getElementById("pdftableecg");
		pdfframe = document.getElementById("pdfframeecg");    
    }
	rrshow.style.display = "none";
	pdftable.style.display = 'none';
	pdfframe.style.display = 'none';
	selectList.selectedIndex = 0;
	return;
}

function buildRRheader() {
	var tableBody = "";
	tableBody += "<table width='100%' bgcolor='white'>"
			  + "<tr><td><br/><p class='test' onclick='javascript:expandcollapse(\"rrarrow\",\"rrbody\");'>CoMorbidities from Radiology Report&nbsp;&nbsp;"
			  + "<img id='rrarrow' border='0' src='" + arrowdownimg + "' alt='Click to collapse' /></p></td></tr>"
			  + "</table>";
	$('#rrheader').html(tableBody);	
	return;
}

function scrollToText(id){		
	var container = document.getElementById(id);
	if (container)
	{
		try {
		var scrollTo = $("#" + id + ' .highlight:first').offset().top;	
		//container.scrollTop = scrollTo;
		container.scrollTop = scrollTo - $("#"+id).offset().top + container.scrollTop - 30		
		}catch(err) {	
			// The search text may have more than 1 word which doesn't occur together in the sentence.
		}
	}
}
var doScrollNow = "";
function makeDivVisibleRR(divId, ele){
	//clearTimeout(timeout);
	if (ele) {
		$("#"+ele.id).css({"height":"40px"});
	}	
	$("#" + divId).show();	
	if (doScrollNow === "" || doScrollNow !== divId)
	{
		scrollToText(divId + "inner");
		doScrollNow = divId;
	}
	return;
}

function makeDivHiddenRR(divId, ele){
	if (ele) {
		$("#" + ele.id).css({"height":"27px"});
	}
	$("#" + divId).hide(); 
	doScrollNow = divId;
	//timeout = setTimeout(function(){ document.getElementById(divId).style.display = "none" }, interval);
	return;
}

function buildRRlist() {
	
	var tableBody = "";
	tableBody += "<select id='selectList'  style='width:50%;font-size:16px'  onChange=\"showSelectedPDF('RADIOLOGY');\">";
	if (no_of_radiology_reports != 0) {
		tableBody += "<option value='first option'>Select the report to show</option>";
		for (var i = 0; i < no_of_radiology_reports; i++) {
			tableBody += "<option value='" + pdfTitles[i] + "'>" + pdfTitles[i] + " ("+getPdfDate(transformedPdfList[i]) + ")</option>";			
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

function arrayUnique(array) {
    var a = array.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i].search === a[j].search)
                a.splice(j--, 1);
        }
    }	
    return a;
}

function isInArray(value, array) {
	  return array.indexOf(value) > -1;
	}

/*
This recursive function is used to build multiple levels of comorbidities
	disease:
		acute:
			acute type 1:
				acute type 1.1:
					acute type 1.1.1:
						.
						.
						.
			acute type 2
		chronic:
			chronic type 1:
				.
				.
				.		
*/
var recursiveDescent = function(types, value, levelBody, reportPrefix, prefix, suffix, margin){
		for (var t = 0; t < types.length; t++){			
			var newValueStr = value + ":" + types[t].term
			var checkboxValue = prefix + newValueStr + suffix;
			levelBody += "<br><input class='rrPart" + reportPrefix + "'  type='checkbox' value = '"+checkboxValue+"' style='margin-left:"+margin+"px'>" + types[t].term;
			var newmargin = margin + 60;
			levelBody = recursiveDescent(types[t].types, newValueStr, levelBody, reportPrefix, prefix, suffix, newmargin);
		}				
		return levelBody;
	};

var negPhrases = negPhrases_processing();
var negPhrases_two_d = negPhrases_two_d_processing(negPhrases);
var conjunctions = conjunctions_processing();
var conjunctions_two_d = negPhrases_two_d_processing(conjunctions);		
/*
Building the body of the radiology report findings
*/	
function buildRRbody(index, contents, tableBody) {	
	var comorb_array = func_category(pdfTitles[index]);		
	if (comorb_array != null) {					
		var uiDateArr = getPdfDateAndSignedBy(contents);
		var impression_sentences = new Array();
		var findings_sentences = new Array();				
		if (impressions[index])
			impression_sentences = break_sentences(impressions[index], ".");		
		if (findings[index])
			findings_sentences = break_sentences(findings[index], ".");						
		var final_comorb1 = new Array();
		/* get a master list of comorbidities present in impressions and findings,
		 ignoring the positive or negative connotations */
		final_comorb = determine_final_comorb(impression_sentences, comorb_array);
		final_comorb1 = determine_final_comorb(findings_sentences, comorb_array);		
		var final_sentences = new Array(); // for impressions
		var final_sentences1 = new Array(); // for findings
		final_sentences = check_comorb_in_sentences(impression_sentences, final_comorb,negPhrases_two_d, conjunctions_two_d);
		final_sentences1 = check_comorb_in_sentences(findings_sentences, final_comorb1, negPhrases_two_d, conjunctions_two_d);		
		var temp_comorb = determine_final_comorb(final_sentences, final_comorb);
		final_comorb = temp_comorb;
		temp_comorb = determine_final_comorb(final_sentences1, final_comorb1);
		final_comorb1 = temp_comorb;        
		var impression_prefix = 0;
		var findings_prefix = 1;
		var combination = final_comorb.concat(final_comorb1);		
		var array3 = arrayUnique(combination);
		for (var m = 0; m < array3.length; m++)
			array_all.push(array3[m]);
		var z = $.grep(combination, function(el){return $.inArray(el, final_comorb) == -1});
		if (final_comorb != null && final_comorb.length != 0) {
			for (var i = 0; i < final_comorb.length; i++) {
                var reportPrefix = '' + index+impression_prefix+i;
				if (!doShowComorbIfNotPreviouslyCommitted(final_comorb[i].display, pdfTitles[index], uiDateArr, index, 'RADIOLOGY'))
					continue;
				var pvalueStr = "GROUP#$#" + final_comorb[i].display + "#$#" + final_comorb[i].level.length + "#$#" + pdfTitles[index] + "," + uiDateArr.join(",");
				tableBody += "<tr><td><table cellspacing='0px'>"
						  + "<tr id='row"+reportPrefix+"' onmouseover=\"mouseOverPara('rrSentencesImg"+reportPrefix+"','rrSentencesCol"+reportPrefix+"');makeDivVisibleRR('rrSentences"+reportPrefix+"', this);\" onmouseout=\"mouseOutPara('rrSentencesImg"+reportPrefix+"','rrSentencesCol"+reportPrefix+"');makeDivHiddenRR('rrSentences"+reportPrefix+"', this);\">"
						  + "<td><div id='rrSentencesCol"+reportPrefix+"'>"
						  + "<a>"
						  + "<b><font color='#0000FF'>"
						  + "<input class='rrPart' id='rrGroup"+reportPrefix+"' type='checkbox' value='"+pvalueStr+"' onclick='javascript:otherForm(\"rrChkGrp"+reportPrefix+"\",\"rrGroup"+reportPrefix+"\");'>"+final_comorb[i].display
						  + "</font></b></a></div>";
				
				tableBody += "<div id='rrChkGrp"+reportPrefix+"' style='display: none; margin-left: 60px;'>";
				var prefix = "~" + final_comorb[i].display ;
				var suffix = "^," + pdfTitles[index] + "," + uiDateArr.join(",");
				for (var j = 0; j < final_comorb[i].level.length; j++) {
					var levelTermsAndTypes = final_comorb[i].level[j];
					var term = levelTermsAndTypes.term;
					var types = levelTermsAndTypes.types;					
					var mainvalue = ":" + term;					
					var valueStr =  prefix + mainvalue + suffix;
					tableBody += "<br><input class='rrPart" + reportPrefix + "'  type='checkbox' value = '"+valueStr+"'>" + term;					var levelBody = "";				
					var marginLeft = 60;
					levelBody = recursiveDescent(types, mainvalue, levelBody, reportPrefix, prefix, suffix, marginLeft);						
					tableBody += levelBody;
				}				
				tableBody += "</div></td><td style='vertical-align:top'>" 
						+ "<a id='rrSentencesImg"+reportPrefix+"'  style='visibility: hidden;'>"
						+ "<img src='"+button1img+"' alt='Details'/>"
						+ "</a></td><td style='vertical-align:top'>"
						+ "<div id='rrSentences"+reportPrefix+"' class='imageBackSingle' style='width:410px; height:160px; margin-top: -85px'><img src='"+divimg+"'width='115%' height='180%'/>"
						+ "<div id='rrSentences"+reportPrefix+"inner' class='dynamicDiv' style='width:375px; height:240px; margin-left: 45px ; margin-top: -275px;float: left;clear: left;  overflow-y:scroll;'>"
						+ "<span style='color: #858384; font-weight: bold;'>Report:</span> "+pdfTitles[index]+"<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+getPdfDate(contents)+"<br>"
						+ "<span style='color: #858384; font-weight: bold;'>Impression:</span>";				
				for (var j = 0; j < impression_sentences.length; j++) {
					var impressionsentence = impression_sentences[j].replace(/[\r\n]/g, ' ')
					var pos = impressionsentence.search(final_comorb[i].search.replace(/^\s+|\s+$/gm,""));
					var pos_lower = impressionsentence.search(final_comorb[i].search.toLowerCase().replace(/^\s+|\s+$/gm,""));
					var pos_upper = impressionsentence.search(final_comorb[i].search.toUpperCase().replace(/^\s+|\s+$/gm,""));
					
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
						tableBody += impression_sentences[j].slice(0, start)
								+ "<span class ='highlight' style='background-color:yellow;'>" + impression_sentences[j].slice(start, end) + "</span>"
								+ impression_sentences[j].slice(end);
					}
					else 
					{
						tableBody += impression_sentences[j] + ".";
					}
				}							
				tableBody += "<br/><a href='"+radiologyLinks[index]+"' target='_blank'> Link to Report </a>";				
				tableBody += "&nbsp;&nbsp;<a href=\"#rrshow\"><button onclick=\"showPDF("+index+", false);makeDivHiddenRR('rrSentences"+reportPrefix+"', this);\">Show Reports</button></a>";
				tableBody += "</div></div></td></tr></table></td></tr>";
				//tableBody += "</div></div></td></tr></table></td></tr>";				
			}
		}		
	if (z.length > 0)		
	{	
		if (final_comorb1 != null && final_comorb1.length != 0) {
		for (var x = 0; x < z.length ; x++)
			for (var i = 0; i < final_comorb1.length; i++) {
				if (z[x].search !== final_comorb1[i].search)
					continue
				if (!doShowComorbIfNotPreviouslyCommitted(final_comorb1[i].display, pdfTitles[index], uiDateArr, index, 'RADIOLOGY'))
					continue;
				var pvalueStr = "GROUP#$#" + final_comorb1[i].display + "#$#" + final_comorb1[i].level.length + "#$#" + pdfTitles[index] + "," + uiDateArr.join(",");
				var reportPrefix = '' + index + findings_prefix + i;
				tableBody += "<tr><td><table cellspacing='0px'>"
						  + "<tr id='row"+reportPrefix+"' onmouseover=\"mouseOverPara('rrSentencesImg"+reportPrefix+"','rrSentencesCol"+reportPrefix+"');makeDivVisibleRR('rrSentences"+reportPrefix+"', this);\" onmouseout=\"mouseOutPara('rrSentencesImg"+reportPrefix+"','rrSentencesCol"+reportPrefix+"');makeDivHiddenRR('rrSentences"+reportPrefix+"', this);\">"
						  + "<td><div id='rrSentencesCol"+reportPrefix+"'>"
						  + "<a>"
						  + "<b><font color='#0000FF'><input class='rrPart' id='rrGroup"+reportPrefix+"' type='checkbox' value='"+pvalueStr+"' onclick='javascript:otherForm(\"rrChkGrp"+reportPrefix+"\",\"rrGroup"+reportPrefix+"\");'>"+final_comorb1[i].display
						  + "</font></b></a></div>";
				
				tableBody += "<div id='rrChkGrp"+reportPrefix+"' style='display: none; margin-left: 60px;'>";				
				var prefix = "~" + final_comorb1[i].display ;
				var suffix = "^," + pdfTitles[index] + "," + uiDateArr.join(",");
				for (var j = 0; j < final_comorb1[i].level.length; j++) {
					var levelTermsAndTypes = final_comorb1[i].level[j];
					var term = levelTermsAndTypes.term;
					var types = levelTermsAndTypes.types;					
					var mainvalue = ":" + term;					
					var valueStr =  prefix + mainvalue + suffix;
					tableBody += "<br><input class='rrPart" + reportPrefix + "'  type='checkbox' value = '"+valueStr+"'>" + term;					
					var levelBody = "";
					var marginLeft = 60;
					levelBody = recursiveDescent(types, mainvalue, levelBody, reportPrefix, prefix, suffix, marginLeft);						
					tableBody += levelBody;
				}
				tableBody += "</div></td><td style='vertical-align:top'>" 
						+ "<a id='rrSentencesImg"+reportPrefix+"' style='visibility: hidden;'>"
						+ "<img src='"+button1img+"' alt='Details'/>"
						+ "</a></td><td style='vertical-align:top'>"
						+ "<div id='rrSentences"+reportPrefix+"' class='imageBackSingle' style='width:410px; height:160px; margin-top: -85px'><img src='"+divimg+"'width='115%' height='180%'/>"
						+ "<div id='rrSentences"+reportPrefix+"inner' class='dynamicDiv' style='width:375px; height:240px; margin-left: 45px ; margin-top: -275px;float: left;clear: left;  overflow-y:auto;'>"
						+ "<span style='color: #858384; font-weight: bold;'>Report:</span> "+pdfTitles[index]
						+ "<br><span style='color: #858384; font-weight: bold;'>Date:</span> "+getPdfDate(contents)
						+ "<br><span style='color: #858384; font-weight: bold;'>Findings:</span>";
				var j;
				for (j = 0; j < findings_sentences.length; j++) 
				{
					var findingssentence = findings_sentences[j].replace(/[\r\n]/g, ' ')
					var pos = findingssentence.search(final_comorb1[i].search.replace(/^\s+|\s+$/gm,""));
					var pos_lower = findingssentence.search(final_comorb1[i].search.toLowerCase().replace(/^\s+|\s+$/gm,""));
					var pos_upper = findingssentence.search(final_comorb1[i].search.toUpperCase().replace(/^\s+|\s+$/gm,""));
					
					var start = -1;
					if (pos != -1) 
					{
						start = pos;
					}
					if (pos_lower != -1) {start = pos_lower;}
					if (pos_upper != -1) {start = pos_upper;}
					
					if (start != -1) 
					{
						var end = start + final_comorb1[i].search.length;
						
						tableBody += findings_sentences[j].slice(0, start)
								+ "<span class='highlight' style='background-color:yellow;'>" + findings_sentences[j].slice(start, end) + "</span>"
								+ findings_sentences[j].slice(end);
					}
					else 
					{
						tableBody += findings_sentences[j]+".";
					}
				}
				if (impressions[index])
					tableBody += "<br/><span style='color: #858384; font-weight: bold;'>Impression:</span> "+impressions[index];
				tableBody += "<br/><a href='"+radiologyLinks[index]+"' target='_blank'> Link to Report </a>"
				tableBody += "&nbsp;&nbsp;<a href=\"#rrshow\"><button onclick=\"showPDF("+index+", false);makeDivHiddenRR('rrSentences"+reportPrefix+"');\">Show Reports</button></a>";
				tableBody += "</div></div></td</tr></table></td></tr>";
			}
		}
	}//z.length if
	
	} //end of if 
	
	return tableBody;
}

function doShowComorbIfNotPreviouslyCommitted(comorb, reportTitle, dateSignedByArr, reportIndex, source)
{	
	var searchInPC = "^"+comorb+"^";
	if ($.inArray(searchInPC, pcArr) == -1){
		return true;
	}
	else
	{		
        var noReports = no_of_radiology_reports;
        if (source == 'ECG')
            noReports = no_of_ecg_reports;				
		for (var x = 0; x < noReports; x++) {			
		    if (pcRadiologyAndECGMap.hasOwnProperty(searchInPC)){
				var radList2D = pcRadiologyAndECGMap[searchInPC]; 
				for (var itr = 0; itr < radList2D.length; itr++){
					var radList = radList2D[itr];
					// 0th element of radList = report title
					// 1th element of radList = signed on
					// 2th element of radList = signed by					
					if (radList[0] === reportTitle){						
						var signedDate = dateSignedByArr[0];
						signedDate = signedDate.replace(/^s+|s+$/gm,'');
						signedDate = signedDate.replace(",","");					                        
						if (signedDate.indexOf(radList[1]) >= 0)					
						{
							linkReportInPreviouslyCommitted(searchInPC, radList, reportIndex, source);
							return false;
						}
					}
				}							
			}					
		}
	}
	return true;
}

function func_category(category){	
	for (var i = 0; i < reportSearchJSON.length; i++)
	{
		var categoryArr = reportSearchJSON[i].category;
		for (var catI = 0; catI < categoryArr.length; catI++)
		{
			if (category.toLowerCase().search(categoryArr[catI].toLowerCase()) != -1)
			{
				return reportSearchJSON[i].report;
			}
		}
	}
	return null;
}


function break_sentences(data, delimiter_string){
	var file_content = data;
	var textfile_sentences = new Array();
	while (file_content.length != 0){
			var pos_newline = file_content.indexOf(delimiter_string);
			if (pos_newline == -1){                
				textfile_sentences.push(file_content.slice(0, file_content.length));
				break;
			}
			else if(pos_newline == 0){
				file_content = file_content.slice(1, file_content.length);
			}
			else{
				textfile_sentences.push(file_content.slice(0, pos_newline));
				file_content = file_content.slice((pos_newline) + 1, file_content.length);
			}
	}
	return textfile_sentences;
}

/*
function func_two_d_array(textfile_sentences){
	var i = 0;
	var two_d_array = new Array();
	for (i = 0; i < textfile_sentences.length; i++){
		var one_d_array = new Array();
		var pos_semicolon = textfile_sentences[i].search(":");
		if (pos_semicolon != -1){
		one_d_array.push(textfile_sentences[i].slice(0,pos_semicolon));
		var textfile_words = new Array();
		textfile_words = break_sentences(textfile_sentences[i].slice(pos_semicolon + 1,textfile_sentences[i].length), ",");
		var j = 0;
		for (j = 0; j < textfile_words.length; j++){
			one_d_array.push(textfile_words[j]);
		}
		two_d_array.push(one_d_array);
		}
	}
	return two_d_array;
}

function category_processing(file_content){
	var textfile_sentences = new Array(); 
	var two_d_array = new Array();
	var two_d_array1 = new Array();
	
	textfile_sentences = break_sentences(file_content, "\n");
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
	for (var i = 0; i < temp_array.length; i++) {
		var result = new Array();
		
		var term_and_comorbs = temp_array[i].split(str_term_and_comorbs_delimiter);
		
		result.push(term_and_comorbs[0]);
		var diff_level_comorbs = term_and_comorbs[1].split(str_diff_level_comorbs_delimiter)
		for (var j = 0; j < diff_level_comorbs.length; j++) {
			var result_per_level = new Array();
			var same_level_comorbs = diff_level_comorbs[j].split(str_same_level_comorbs_delimiter);
			for (var k = 0; k < same_level_comorbs.length; k++)
				result_per_level.push(same_level_comorbs[k]);
			result.push(result_per_level);
		}
		result_array.push(result);
	}
	
	return result_array;
}*/

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
	
	//conjunctions.push("but");
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
	conjunctions.push("cannot rule out"); // double negation
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
	var i = 0;
	for (i = 0;i < negPhrases.length; i++){
		var temp_array = new Array();
		temp_array = break_sentences(negPhrases[i]," ");
		negPhrases_two_d.push(temp_array);
	}
	return negPhrases_two_d;
}

/*
arguments:
	
	impression_sentences - array of delimited sentences from the report's impression or finidings section
	
	comorb_array - the json object which has the array of search terms for the given report's sentences

description:
	-We check for each search term in all the sentences of the report.'
	-If the search term has multiple words separated by spaces we make sure that all the individual words (of the search term) are present in the sentence.
	- If the search term is present in the sentence , then the corresponding search object from the search terms' json array is added to the return array object
*/
function determine_final_comorb(impression_sentences,comorb_array){
	var i = 0, j = 0, k = 0;
	var final_comorb = new Array();
    var comorbLocationMap = {};
    var comorbIndexArr = [];
	for (i = 0; i < comorb_array.length; i++){
		var temp_array = new Array();
		temp_array = break_sentences(comorb_array[i].search, " ");
		for (j = 0; j < impression_sentences.length; j++){
            var startIndex = -1;
            var endIndex = -1;
            comorbIndexArr = [];
			var comorb_parts_present = 0;
			for (k = 0; k < temp_array.length; k++)
            {				
                var index = impression_sentences[j].toLowerCase().search(temp_array[k].toLowerCase())
				if (index !== -1)
                {
                    if (startIndex == -1)
                        startIndex = index;
                    if (endIndex == -1)
                        endIndex = startIndex + temp_array[k].length - 1;
                    else
                        endIndex = endIndex + temp_array[k].length + 1;
					comorb_parts_present = 1;
				}
				else {
					comorb_parts_present = 0;
					break;
				}
			}
			if (comorb_parts_present == 1){
                var doPushFinalComorb = true;
                for (var prop in comorbLocationMap) {                    
                    if (!comorbLocationMap.hasOwnProperty(prop)) {                     
                        continue;
                    }                    
                    if (comorb_array[i].search.toLowerCase().search(prop.toLowerCase()) !== -1 || prop.toLowerCase().search(comorb_array[i].search.toLowerCase()) !== -1)
                    {
                        var indexArr = comorbLocationMap[prop];
                        var indexStart = indexArr[0];
                        var indexEnd = indexArr[1];
                        if (startIndex < indexEnd && endIndex > indexStart)
                        {
                            doPushFinalComorb = false;    
                        }
                    }
                }
                if (!doPushFinalComorb)
                    break;
                comorbIndexArr.push(startIndex);   
                comorbIndexArr.push(endIndex);
                comorbLocationMap[comorb_array[i].search] = comorbIndexArr; 
				final_comorb.push(comorb_array[i]);
				break;
			}
		}
	}
	return final_comorb;
}

/*
The method checks if the comorbidity is present as whole word and not as part of a word in the report sentence.
*/
function checkSuffix(sentence, comorb)
{
	sentence = sentence.toLowerCase();
	comorb = comorb.toLowerCase();
	var index = sentence.search(comorb);	
	var startIndex = index;
	var endIndex = index;
	while (startIndex > 0)
	{
		var refChar = sentence.charAt(startIndex - 1);
		if (refChar == " " || 
			refChar == "" || 
			refChar == "," ||
			refChar == ".")
			break;
		else
			startIndex = startIndex - 1;
	}
	while (endIndex < sentence.length - 1)
	{
		var refChar = sentence.charAt(endIndex + 1);
		if (refChar == " " || 
			refChar == "" ||
			refChar == "," ||
			refChar == ".")
			break;
		else
			endIndex = endIndex + 1;
	}
	
	var derivedComorb =  sentence.substring(startIndex, endIndex + 1);
	if (comorb.search(" ") < 0 && derivedComorb.search(comorb) == 0)
		return true;
	return false;
}

/*
The method works as follows:
Check if comorbidity is present in the sentence.
	If present
		if there is negative connotation associated with the comorbidity
			if positive connotation is also present
				push comorbidity
			else
				do not consider the comorbidity
		else
			push comorbidity
	else
		do not consider the comorbidity
*/

function check_comorb_in_sentences(impression_sentences, final_comorb, negPhrases_two_d, conjunctions_two_d){
	var i = 0, j = 0, k = 0;
	var final_sentences = new Array();
	var temp_sentences = new Array();
	for (i = 0; i < impression_sentences.length; i++){
		for (j = 0; j < final_comorb.length; j++){
			var temp_array = new Array();
			temp_array = break_sentences(final_comorb[j].search, " ");
			var comorb_parts_present = 0;
			for (k = 0; k < temp_array.length; k++){
				if ((impression_sentences[i].search(temp_array[k]) != -1) || (impression_sentences[i].toLowerCase().search(temp_array[k].toLowerCase()) !== -1)){
					if (checkSuffix(impression_sentences[i], temp_array[k]))
					{
						comorb_parts_present = 1;
					}
					else
					{
						comorb_parts_present = 0;
						break;
					}
						
				}
				else {
					comorb_parts_present = 0;
					break;
				}
			}
			if (comorb_parts_present == 1){
				temp_sentences.push(impression_sentences[i]);
				break;
			}
		}
	}
	var neg_phrase_present;
	var  conj_present;
	for (i = 0; i < temp_sentences.length; i++){
		for (j = 0; j < negPhrases_two_d.length; j++){
			neg_phrase_present = 1;
			for (k = 0; k < negPhrases_two_d[j].length; k++){
				if (!isAWordMatch(temp_sentences[i], negPhrases_two_d[j][k])) {
					neg_phrase_present = 0;
					break;
				}
			}
			if (neg_phrase_present == 1)
				break;
		}
		if (neg_phrase_present == 1){
			
			for (j = 0; j < conjunctions_two_d.length; j++){
				conj_present = 1;
				for (k = 0; k < conjunctions_two_d[j].length; k++){
					if (!isAWordMatch(temp_sentences[i], conjunctions_two_d[j][k])) {
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

function isAWordMatch(searchOnString, searchText) {
	  searchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	  return new RegExp("\\b"+searchText+"\\b", "i").test(searchOnString);
}

