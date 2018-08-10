/**
 * New node file
 */

function initRR(contents) {
	buildRRheader();
	buildRRbody(contents);
	return;
}

function buildRRheader() {
	var tableBody = "";
	tableBody += "<table width='100%' bgcolor='white'>"
			  + "<tr><td><br><p class='test' onclick='javascript:expandcollapse(\"rrarrow\",\"rrbody\");'>Radiology Report CoMorbidities&nbsp;&nbsp;"
			  + "<img id='rrarrow' border='0' src='"+arrowdownimg+"' alt='Click to collapse' /></p></td></tr>"
			  + "</table>";
	$('#rrheader').html(tableBody);	
	return;
}

function buildRRbody(contents) {
	var tableBody = "";
	tableBody += "<table width='100%' bgcolor='white'><col width='10%'><col width='90%'><tr><td></td><td>"
			+ "<table width='100%' border='0' style='font-family:sans-serif;font-size:16px'>";
	
	
	
	var comorb_array = new Array();
	comorb_array =func_category(contents); 
	
	
	if(comorb_array != null) {
		var impression_sentences = new Array();
		impression_sentences = func_pull_impression(contents);

		
		var negPhrases = new Array();
		negPhrases=negPhrases_processing();
		
		var negPhrases_two_d = new Array();
		negPhrases_two_d = negPhrases_two_d_processing(negPhrases);
		
		var conjunctions = new Array();
		conjunctions=conjunctions_processing();
		
		var conjunctions_two_d = new Array();
		conjunctions_two_d=negPhrases_two_d_processing(conjunctions);
		
		var final_comorb = new Array();
		final_comorb=determine_final_comorb(impression_sentences,comorb_array);
		
		
		var final_sentences = new Array();
		final_sentences = check_comorb_in_impression(impression_sentences,final_comorb,negPhrases_two_d,conjunctions_two_d);
		
		
		if(final_comorb != null && final_comorb.length != 0) {
			for(var i=0; i<final_comorb.length; i++) {
				tableBody += "<tr><td><table>"
						  + "<tr onmouseover=\"mouseOverPara('rrSentencesImg"+i+"','rrSentencesCol"+i+"');\" onmouseout=\"mouseOutPara('rrSentencesImg"+i+"','rrSentencesCol"+i+"');\">"
						  + "<td><div id='rrSentencesCol"+i+"'>"
						  + "<a onmouseover=\"makeDivVisible('rrSentences"+i+"');\" onmouseout=\"makeDivHidden('rrSentences"+i+"');\">"
						  + "<input class='rrPart' id='rrGroup"+i+"' type='checkbox' value='GROUP' onclick='javascript:otherForm(\"rrChkGrp"+i+"\",\"rrGroup"+i+"\");'>"+final_comorb[i][0]
						  + "</a></div>";
				
				tableBody += "<div id='rrChkGrp"+i+"' style='display: none; margin-left: 60px;'>";
				
				
				for(var j=1; j<final_comorb[i].length; j++) {
					tableBody += "<br><input class='rrPart"+i+"' id='rrGrp"+i+"Chk"+j+"' type='checkbox'>"+final_comorb[i][j];
				}
				tableBody += "</div></td><td style='vertical-align:top'>" 
						+ "<a id='rrSentencesImg"+i+"' onmouseover=\"makeDivVisible('rrSentences"+i+"');\" onmouseout=\"makeDivHidden('rrSentences"+i+"');\" style='visibility: hidden;'>"
						+ "<img src='"+button1img+"' alt='Details'/>"
						+ "</a></td><td style='vertical-align:top'>"
						+ "<div id='rrSentences"+i+"' class='imageBackSingle' style='width:380px; height:300px; margin-top: -55px'><img src='"+divSingleimg+"' width='100%' height='100%'/>"
						+ "<div id='rrSentences"+i+"' class='dynamicDiv' style='width:280px; height:230px; margin-left: 45px ; margin-top: -275px;'>"
						+ "<br><span style='color: #858384; font-weight: bold;'>Sentences:</span>";
				for(var j=1; j<final_sentences.length; j++) {
					tableBody += "<br><br>"+final_sentences[j];
				}
				tableBody += "</div></div></td</tr></table></td></tr>";
			}
			tableBody += "<tr><td><br><input id='rrComments' type='checkbox' value='Other comments'>Other comments:"
					+ "<br><textarea id='rrCommentsid' cols='40' rows='5' ></textarea></td></tr>";
		}
		else {
			tableBody += "<tr><td>There are no CoMorbidities extracted from Radiology Report.</td></tr>"
		}
	}
	else {
		tableBody += "<tr><td>There are no CoMorbidities extracted from Radiology Report.</td></tr>"
	}
	tableBody += "</table></td></tr></table>";
	
	$('#rrbody').html(tableBody);

	return;
}


function func_category(a){
	var pos_category = a.search("Event Title");
	var pos_date = a.search("Performed on Date");
	var category = a.slice(pos_category+14,pos_date);
	var chest = " Chest";
	var head = "Head";
	var abdomen = "Abdomen";
	
	var two_d_array = new Array();
	var file_path;
	if ((category.search(chest)!=-1) || (category.search(chest.toLowerCase()) != -1) || (category.search(chest.toUpperCase()) != -1)){
		file_content1 = 'Pleural Effusion : Exudative vs. Transudative Pleural Effusion Pneumonia, Liver Disease, Renal Disease, Malnutrition, Empyema, Malignancy, Lupus, TB, Sarcoidosis, Esophageal Rupture, Pleurisy, Hemothorax, Inflammatory Effusion, Malignant Effusion\nAtelectasis : Obstructive Foreign Body aspiration, Emphysema, Non-Obstructive ARDS, Mass, Pneumonia, Lung Contusion, Mucus\nGround Glass Opacity : Pulmonary Edema, Pneumonia, Pneumonitis, Acute Rejection of Transplanted Lung, ARDS, Hemorrhage,  Pulmonary Contusion, Drug Toxicity, Sarcoidosis\nAirspace Opacities : Pneumonia, Pulmonary Hemorrhage, Carcinoma,  TB, Obstructive Foreign Body aspiration, Emphysema, Non-Obstructive ARDS, Mass, Pneumonia, Lung Contusion, Mucus\nAlveolar Edema : Heart Failure, Renal Failure, ARDS\nInterstitial Edema : Heart Failure, Renal Failure, ARDS\nPulmonary Vascular Congestion: Heart Failure\nFocal Consolidation : Heart Failure, ARDS, Volume Overload, Renal Failure,  Pneumonia, Trauma, SLE, Sarcoid\nInfiltrates : Pneumonia, Hemorrhage, TB\nConsolidation : Pneumonia, Mass, Pulmonary Edema, Hemorrhage\nAir Space Shadowing : Pneumonia, Mass, Pulmonary Edema, Hemorrhage\nAspiration : Pneumonia';
		two_d_array=category_processing(file_content1);
		
		return two_d_array;
	}
	else if ((category.search(head)!=-1) || (category.search(head.toLowerCase()) != -1) || (category.search(head.toUpperCase()) != -1)){
		file_content2 = 'Mass Effect : Cerebral Edema, Cerebral compression, Tumor, Cerebral Hemorrhage, Cerebral Spinal Fluid outflow obstruction, coma\nMidline Shift : Cerebral Edema, Cerebral compression, Tumor, Cerebral Hemorrhage, Cerebral Spinal Fluid outflow obstruction, coma\nLoss of Grey White Matter Distinction : Cerebral Edema,  Cerebral Infarct, brain compression\nHypoattenuation, Hyperdensity : Cerebral Infarct, Cerebral Hemorrhage, artifact\nHypodensity : Old Stroke, cyst, neoplasm\nPneumocephalus : Skull fracture\nEncephalomacia : Degenerative changes, vascular insufficiency, \nCerebromalacia : Degenerative changes, vascular insufficiency, \nGliosis : Ischemia, trauma, Multiple Sclerosis, Vasculitis, Parkinsons disease, ALS, Huntingtons disease\nHerniation : Brain Compression\nIntraparenchymal : Cerebral hemorrhage\nSubarachnoid hemorrhage : Subarachnoid hemorrhage\nSubdural hematoma : Subdural hematoma\nEpidural hematoma : Epidural hematoma\nIntraventricular hemorrhage : Intraventricular hemorrhage\nBlood in ventricles : Intraventricular hemorrhage\nAir Fluid Levels : Sinusitis\nMucosal thickening : Sinusitis, Ulcerative colitis\nCompression of ventricles : Cerebral Edema, Cerebral compression, Tumor, Cerebral Hemorrhage, Subdural hematoma,  Epidural hematoma, Subarachnoid hemorrhage, Cerebral Spinal Fluid outflow obstruction, coma\nSlit like Ventricles : Cerebral Edema, Cerebral compression, Tumor, Cerebral Hemorrhage, Subdural hematoma,  Epidural hematoma, Subarachnoid hemorrhage, Cerebral Spinal Fluid outflow obstruction, coma\nPetechial Hemorrhage : Diffuse Axonal Injury, Brain Compression, cerebral edema, coma\nCompression : Cerebral compression\nLacunar infarct : Specify in your progress note\ninfarction : Specify in your progress note\nInfarct : Specify in your progress note\nVasogenic Edema : Cerebral Edema, Cerebral Compression, Coma\nhydrocephalus : Cerebral Edema, Cerebral Compression, Coma, Cerebral Spinal Fluid outflow obstruction\nExtra Axial Collection : Subdural hematoma';
		two_d_array=category_processing(file_content2);
		
		return two_d_array;
	}
	else if ((category.search(abdomen)!=-1) || (category.search(abdomen.toLowerCase()) != -1) || (category.search(abdomen.toUpperCase()) != -1)){
		file_content3 = 'Biliary Dilation : Obstruction, Stricture, Stones, Cholangitis, Neoplasm, Pancreatitis\nThickening of colon : Colitis, diverticulitis, carcinoma, ischemia\npericolonic stranding : Colitis, diverticulitis, carcinoma, ischemia\nCholelithiasis : Acute Cholecystitis\nstones : Acute Cholecystitis\nGallbladder wall thickening : Acute Cholecystitis\npericholecystic fluid : Acute Cholecystitis\nEnlarged Pancreas : Acute Pancreatitis\nPeripancreatic fluid collections : Acute Pancreatitis\npancreatic psuedocysts : Acute Pancreatitis\nDilated Appendix : Acute Appendicitis\nperiappendix stranding : Acute Appendicitis\nHydronephrosis : Renal Stone\nperinephric stranding : Renal Stone\nrim sign : Renal Stone\nDisrupted splenic capsule : Splenic Laceration\nlack of splenic margin : Splenic Laceration\nhypodensity : Splenic Laceration\nhemoperitoneum : Splenic Laceration\ncontrast blush : Splenic Laceration\nextravasation : Liver Laceration\nSplenic Laceration : Liver Laceration\nPerihepatic fluid : Liver Laceration\nFragmented Lobe : Liver Laceration\ncapsular tear : Liver Laceration\nparenchymal disruption : Liver Laceration\nLinear hypodensity of pancreas : Pancreatic laceration\nRetropancreatic fluid : Pancreatic laceration\nRetroperitoneal fluid : Source of bleeding\nhematoma : Source of bleeding\nRetroperitoneal extravasation of contrast : Renal Contusion, Laceration, Shattered Kidney,  laceration of renal pelvis\nAdrenal hematoma : Renal Contusion, Laceration, Shattered Kidney,  laceration of renal pelvis\nMesenteric laceration : Bowel perforation, Ischemic Bowel\nhemoperitoneum : Bowel perforation, Ischemic Bowel\nExtraluminal Air : Bowel perforation\nFree Air : Bowel perforation\nPneumoperitoneum : Bowel perforation\nextravasation of contrast : Bowel perforation\ndiscontinuos bowel wall : Bowel perforation\nExtravasation of urine : Bladder Rupture\nObstructive Gas Pattern : Ileus, Volvulus, Small bowel Obstruction, Large Bowel Obstruction\nDilated Loops of bowel : Small Bowel Obstruction, Ileus\nSentinel Loop : Pancreatitis, Ileus\nDilation of colon : Large Bowel Obstruction, volvulus, Toxic megacolon\nFluid levels : Ileus\naccumulation : Ileus\nFree Gas : Bowel Perforation';
		two_d_array=category_processing(file_content3);
		
		return two_d_array;
	}
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


function category_processing(file_content){
	var textfile_sentences = new Array(); 
	var two_d_array = new Array();
	var two_d_array1 = new Array();
	
	
	textfile_sentences=break_sentences(file_content,"\n");
	
	two_d_array = func_two_d_array(textfile_sentences);
	
	return two_d_array;
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
				if((impression_sentences[j].search(temp_array[k]) !== -1) || (impression_sentences[j].search(temp_array[k].toLowerCase()) !== -1) || (impression_sentences[j].search(temp_array[k].toUpperCase()) !== -1)){
					
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
				if((temp_sentences[i].search(negPhrases_two_d[j][k]) == -1) || (temp_sentences[i].search(negPhrases_two_d[j][k].toLowerCase()) == -1) || (temp_sentences[i].search(negPhrases_two_d[j][k].toUpperCase()) == -1)){
					neg_phrase_present = 0;
					break;
				}
			}
			if (neg_phrase_present == 1){
				break;
			}
		}
		if (neg_phrase_present == 1){
			
			for(j=0;j<conjunctions_two_d.length;j++){
				conj_present = 1;
				for(k=0;k<conjunctions_two_d[j].length;k++){
					if((temp_sentences[i].search(conjunctions_two_d[j][k]) == -1) || (temp_sentences[i].search(conjunctions_two_d[j][k].toLowerCase()) == -1) || (temp_sentences[i].search(conjunctions_two_d[j][k].toUpperCase()) == -1)){
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
