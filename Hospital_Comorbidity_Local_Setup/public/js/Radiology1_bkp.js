/**
 * New node file
 */

var pdfTitles = [];
var pdfList = [];
var transformedPdfList = [];
var impressions = [];
var findings = [];
var radiologyLinks = [];


var no_of_ecg_reports = 1;
var no_of_echo_reports = 1;
var ecgLinks = [];
var echoLinks = [];
/*
var ecgPDFTitles = [];
var ecgPDFList = [];
var ecgTransformedPdfList = [];
var ecgImpressions = [];
var ecgFindings = [];*/

var pdfHtml;
var timeout;
var interval = 3000;
var testTable = "";
var no_of_radiology_reports = 0;
var array_all = new Array();
var merged_sentences = new Array();
var RADIOLOGY = 'RADIOLOGY';
var ecgarray_all = [];
var echoarray_all = [];
var merged_sentences = new Array();
var radFilterObj = {"source" : "RADIOLOGY", "selectlist" : "selectList"};
var ecgFilterObj = {"source" : "ECG", "selectlist" : "selectECGList"};
var echoFilterObj = {"source" : "ECHO", "selectlist" : "selectECHOList"};

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
		{"search" : "Supraventricular tachycardia",
				 "display" : "Supraventricular tachycardia",
				 "level" : []			
		},
		{"search" : "Ventricular Tachycardia",
		 "display" : "Ventricular Tachycardia",
		 "level" : []			
		},
		{"search" : "Ventricular fibrillation",
		 "display" : "Ventricular fibrillation",
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
	 ]},
	 {"category": ["ECHO"],
	 "report": [
		{"search" : "Pericardial Effusion",
				 "display" : "Pericardial Effusion",
				 "level" : []			
		},
		{"search" : "Pulmonary Hypertension",
		 "display" : "Pulmonary Hypertension",
		 "level" : []			
		}
				
	 ]}
	];

getActualPDFRR();
console.log("\npdfList : ", pdfList, "\ntransformedPdfList : ", transformedPdfList, "\npdfTitles : ", pdfTitles, "\nimpressions : ", impressions, "\nfindings : ", findings);

var pdfHtml;
var timeout;
var interval = 5000;
var testTable = "";

function initRR() {
	buildRRheader();
	buildPSheader();
	buildRRlist();
	showRRbody();
	commentsCheck();
}

/*
 * Function that parses an actual report, transforms it into a well-defined format.
 * An actual report might contain multiple events. 
 * Returns the list of transformed reports.  
 */
function getActualPDFRR() {
	
	//Reports to show
	//HEAD
	//Sinusitis
		var actualReport = "Title: CT HEAD ROUTINE WITHOUT IV CONTRAST\n\n Findings This is some more random Data and this is some filler data with more random data; with filler data. This is random data. This is some more random Data and this is some filler data with more random data; with filler data. This is random data.There is associated sulcal effacement in the region with minimal MASS EFFECT the right frontal horn me more random Data and this is some filler data with more random data; with filler dataThis is some more random Data and this is some filler data with more random data; with filler dataThis is some more random Data and this is some filler data with more random data; with filler dataThis is some more random Data and this is some filler data with more random data; with filler data. Impression  This is random data. This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; edema with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more  This is some more random Data and this is some filler data with more random data; with filler data. This is random data. This is some more random Data and this is some filler data with more random data; with filler data. This is random data. This is some more random Data and this is some filler data with more random data; with filler data. This random Data and this is some filler data with more .Attending Radiologist: WOROCH, LUBOSLAV Ordered By: CONRAD, CARA Order Date/Time: August 22, 2015 1:15 AM Scan Initiation Date/Time: August 22, 2015 1:50 AM Completion Date/Time: August 22, 2015 1:39 AM Encounter Number: 12053334 Accession Number: 6368524 Images were reviewed and interpreted by Attending Radiologist: Dr. WOROCH, LUBOSLAV Electronically Signed On: August 22, 2015 1:53 AM by Dr. WOROCH, LUBOSLAV STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";
	
//	var actualReport = "Title : CTA CORONARY AND HEART W\/CONTR\nImpression\n1. Good quality study. \n \n2. Coronary artery calcium score by Agatston's criteria is 54, \nrepresenting 61st percentile by age, gender and ethnicity based on \nthe MESA criteria. \n \n3. Non-obstructive CAD by CT criteria. \n \n4. Aortic size is normal in the visualized portions; in the \nvisualized portions, there is no evidence of thoracic aortic \ndissection. \n \n5. 3 mm right middle lobe nodule as seen on series 10 image 20. \n \n \nRecommendation\nPlease follow up with your primary care provider for aggressive risk \nmodification. \n \n3 mm right middle lobe nodule as seen on series 10 image 20: Low-dose \nnoncontrast chest CT followup recommended in 1 year. \n \n \nClinical Information\nChest pain. \n \n \n \nTechnique\nCardiac CTA was performed on a 320-slice cardiac CT scanner with \nretrospective ECG gating technique. \n \nProcedure: EKG gated CT without contrast material and CT angiography \nwith contrast material of the heart and coronary arteries, including \n3D image post processing was performed. \n \nContrast Media \n \nContrast Agent:Omnipaque 350 \n \nContrast Dose: 55 ML \n \nContrast Reaction: \n \nNo x \n \nYes \n \nMild \n \nModerate \n \nSevere \n \nAnaphylaxis \n \n \nStudy Quality: \n \nExcellent \n \nGood x \n \nAverage \n \nPoor \n \nNon-Diagnostic \n \nDLP: 650 mGycm \n \nEffective dose: 9.1 MSv \n \nResults: Coronary Artery Calcium Score\nAgatston Score \n \nWhole-Heart Agatston Score: 54 \n \nMESA Percentile Rank: 61 \n \nLM Agatston Score: 0 \n \nLAD Agatston Score: 54 \n \nLeft circumflex Agatston Score: 0 \n \nRCA Agatston Score: 0 \n \nRamus intermedius Agatston Score: 0 \n \n \nINTERPRETATION OF TOTAL AGATSTON CALCIUM SCORE \n \nCALCIUM SCORE 0: Negative exam. \nCALCIUM SCORE 1-10: Minimal plaque. Coronary artery disease unlikely. \n\nCALCIUM SCORE 11-100: Mild plaque. Minimal stenosis is likely. \nCALCIUM SCORE 101-400: Moderate plaque. Non-obstructive coronary \nartery disease is likely. \nCALCIUM SCORE OVER 400: Extensive plaque. At least one significant \nstenosis (>50% diameter) is likely. \n \nResults: Coronary Artery CT Angiogram\nCoronary Dominance: \n \nRight dominant x \n \nLeft dominant \n \nCo-dominant \n \nAnomalous coronary artery: \n \nNo x \n \nYes \n \nCoronary fistula: \n \nNo x \n \nYes \n \nCoronary arteries: \n \nLM: Normal \n \nLAD: Mixed plaque in the proximal and mid LAD with minimal 10 20 \npercent stenosis. \n \nLCX: There is evidence of non-obstructive (<20%) calcified plaque in \nthe proximal LCX. Minimal calcified plaque within a large obtuse \nmarginal branch without stenosis. \n \nRCA: Eccentric calcified plaque in the mid RCA without stenosis. \n \nResults: Non-Coronary Findings\nAscending thoracic aorta: 2.9 cm \n \nDescending thoracic aorta: 2.1 cm \n \nCoarctation: \n \nYes \n \nNo x \n \nPatent ductus arteriosus \n \nYes \n \nNo x \n \nAortic Dissection \n \nNot present x \n \nMyocardial structure: \n \nLV: \n \nNormal x \n \nLA: \n \nNormal x \n \nEnlarged \n \nRV: \n \nNormal x \n \nRA: \n \nNormal x \n \nAtrial septum: \n \nNormal x \n \nVentricular septum: \n \nNormal x \n \nPericardium: \n \nNormal x \n \nPericardial effusion: None \n \nMyocardial Infarction (myocardial thinning and low-attenuation): \n \nNo x \n \nRest myocardial perfusion defect: \n \nNone x \n \nFatty infiltration of the myocardium: \n \nNo x \n \nNONCARDIOVASCULAR: 3 mm right middle lobe nodule as seen on series \n10 image 20. No consolidation or effusion or pneumothorax. There is \nminimal left lower lobe linear subsegmental atelectasis. Negative for \na fracture or aggressive appearing destructive process. \n\n \n\nAttending Radiologist: FELDMANN, ERIC \nOrdered By: HONG, PETER \nOrder Date: January 16, 2015 11:25 AM\nCompletion Date: January 16, 2015 3:45 PM\n\nEncounter Number: 010083780840\nAccession Number: 6091446\nImages were reviewed and interpreted by Attending Radiologist: Dr. FELDMANN, ERIC \n\nElectronically Signed On: January 16, 2015 5:40 PM by Dr. FELDMANN, ERIC \n\n\n\nSTONY BROOK UNIVERSITY HOSPITAL\nDEPARTMENT OF RADIOLOGY\nSTONY BROOK, NY 11794-7300";
	
	//var actualReport = "Title: CT HEAD WITHOUT CONTRAST  Examination CT HEAD WITHOUT CONTRAST  Clinical History Charge syndrome. Clinical concern for infection.  History and Indication CHARGE SYNDROME-TRACH/VENT Technique Contiguous axial slices were obtained from the skull base to the vertex without intravenous contrast.  Coronal and sagittal reconstructions were obtained. Comparison No images available for comparison. Findings There is no evidence of acute intracranial hemorrhage, focal extra-axial collection or acute territorial infarct.  There is generalized loss of volume of the parenchymal with secondary prominence of the cortical sulci and ventricles, more than expected for the patient's age. There is asymmetric size of the lateral ventricles, left larger than the right, likely developmental. Incidental note is made of a cavum septum pellucidum and vergae. There is no mass effect or midline shift. The vermis is somewhat hypoplastic.  The posterior fossa is of not enlarged. There is a posterior fossa cyst which communicates with a prominent 4th ventricle, favored to represent a Blake's pouch remnant.  The calvarium is intact.  The globes are elongated, compatible with colobomas, given the patient's history of CHARGE syndrome. Intra-articular silicone implants are present bilaterally. Enlarged vestibular aqueducts are noted, right more than left.  There is underdevelopment of the mastoid air cells bilaterally. There is diffuse opacification of the middle ear cavities and the few developed mastoid air cells, bilaterally. Please correlate with direct visualization.  There is diffuse opacification of the left the ethmoid air cells with air-fluid level in the left frontal sinus. Correlate clinically for acute sinusitis. Moderate mucosal thickening is noted in the posterior right ethmoid and right sphenoid sinus.  Impression No evidence of acute intracranial hemorrhage or focal extra-axial collection. Multiple developmental anomalies, as detailed above.  Opacification of bilateral middle ear cavities and underdeveloped mastoid air cells. This is nonspecific. Given the clinical history, please correlate with direct visualization to exclude otitis media. Paranasal sinus decreases, as described above.  Attending Radiologist:    WOROCH, LUBOSLAV Ordered By:               HEUSCHNEIDER, STACY  Order Date:               January 19, 2015 2:05 PM Completion Date:          January 19, 2015 3:11 PM Encounter Number:         010083621804 Accession Number:         6094858 Images were reviewed and interpreted by Attending Radiologist: Dr. WOROCH, LUBOSLAV Electronically Signed On: January 19, 2015 5:50 PM by Dr. WOROCH, LUBOSLAV\nSTONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";
	
	//var actualReport = "Title:CT HEAD ROUTINE WO IV CONTRAST,\n\nEvent Examination : CT HEAD ROUTINE WITHOUT CONTRAST  Clinical History 86F H/O VASCULAR DEMENTIA, ATRIAL FIBRILLATION ON COUMADIN, HYPERTENSION, AND OSTEOPOROSIS, CHR ANEMIA . TechniqueContiguous axial slices were obtained from the skull base to the vertex. ComparisonNo images available for comparison. FindingsThere is no CT evidence of acute transcortical infarction, intracranial hemorrhage, or extra-axial collection. No mass effect or midline shift.  Advanced cerebral and cerebellar volume loss with ex vacuo ventricular prominence.  Patchy foci of hypoattenuation within the periventricular and subcortical white matter without mass effect are most compatible with microvascular ischemic changes given presence of atherosclerotic calcifications at the skullbase. Chronic appearing lacunar infarct within the left external capsule.  The calvarium is intact.  Moderate frothy opacification of the frontal sinus on the right extending into the outflow tract, with layering fluid.  Moderate polypoid opacification of the bilateral ethmoid air cells. Near-complete opacification of the bilateral sphenoid sinuses and severe opacification of the bilateral maxillary sinuses.  Bilateral cataract surgery.  ImpressionNo CT evidence of acute intracranial abnormality. Microvascular ischemic and atherosclerotic calcific disease. Left external capsule lacunar infarct. Advanced volume loss. Diffusion-weighted MRI is significantly more sensitive for subtle acute ischemia if there is clinical concern.  Severe paranasal sinus mucosal disease with layering fluid within the right frontal sinus, correlate for acute sinusitis.Attending Radiologist:     FILATOV, ALEXANDER Ordered By:                RIQUELME, LUIS AOrder Date/Time:           January 18, 2016 11:35 AMScan Initiation Date/Time: January 18, 2016 12:37 PMCompletion Date/Time:      January 18, 2016 12:58 PMEncounter Number:          010095443916Accession Number:          6554027Images were reviewed and interpreted by Attending Radiologist: Dr. FILATOV, ALEXANDER Electronically Signed On:  January 18, 2016 1:25 PM by Dr. FILATOV, ALEXANDER STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";
	
	//mass effect
	//var actualReport = "Title: CT HEAD ROUTINE WITHOUT CONTRAST  Examination CT HEAD ROUTINE WITHOUT CONTRAST Clinical History HEADACHE History and Indication FALL Technique Contiguous axial slices were obtained from the skull base to the vertex. Comparison No images available for comparison. Findings Since the prior exam, there has been interval development of a well-defined zone of low attenuation in the paramedian right frontal lobe, with blurring of the gray-white matter interface. There are small areas of hemorrhage in this region. There is associated sulcal effacement in the region with minimal mass effect on the right frontal horn.  There is no midline shift.  No evidence of hydrocephalus.  There is age-related generalized loss of volume of the parenchyma. There is confluence and patchy low attenuation within the deep and subcortical white matter, similar to the prior exam, reflecting moderate small vessel ischemic changes.  Scattered chronic lacunar infarcts are again noted in the right corona radiata, right basal ganglia, left cerebellum and bilateral posterior periventricular white matter. Extensive vascular calcifications are noted along both internal carotid artery siphons.  Vascular calcifications are also present along the intradural vertebral artery.  The bony calvarium is intact. The visualized paranasal sinuses and mastoid air cells are well aerated.  Impression: Since the prior exam, interval development of a acute right ACA territory infarct involving the paramedian right frontal lobe with small hemorrhage in the infarct. No midline shift.  Attending Radiologist:    WOROCH, LUBOSLAV Ordered By:               HEUSCHNEIDER, STACY  Order Date:               January 19, 2015 2:05 PM Completion Date:          January 19, 2015 3:11 PM Encounter Number:         010083621804 Accession Number:         6094858 Images were reviewed and interpreted by Attending Radiologist: Dr. WOROCH, LUBOSLAV Electronically Signed On: January 19, 2015 5:50 PM by Dr. WOROCH, LUBOSLAV STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";
	
	//Epidural hematoma
	//var actualReport = "Title : CT HEAD ROUTINE WO IV CONTRAST\n\nEvent Examination : CT brain without contrast. Facial bone CT without contrast. Clinical History : MULTIPLE TRAUMA History and Indication MULTIPLE TRAUMA VICTIM Technique : Contiguous axial CT images of the brain were obtained from the skull base to the vertex without contrast. Coronal and sagittal reconstructions obtained. Contiguous axial CT images of the facial bones were obtained without contrast. Coronal and sagittal reconstructions obtained. . Comparison : No images available for comparison. Findings : Brain: There is no acute intracranial hemorrhage. There is no evidence of acute transcortical infarction. The ventricles, sulci and cisterns are age-appropriate in size. There is no mass effect, midline shift or hydrocephalus. The calvarium is intact. The visualized paranasal sinuses and mastoid air cells are clear. Facial bones: The floor of the orbits and medial orbital walls are intact. No evidence of acute facial bone fracture. Optic globes around and symmetric. Retrobulbar fat is maintained. The paranasal sinuses are clear. Anterior and posterior sinonasal drainage pathways are patent. Nasal septum is deviated right. There is a left-sided bony spur indenting the inferior turbinate. There are periapical lucencies at teeth # 14 and 15. Impression : No acute intracranial hemorrhage, calvarial fracture or facial bone fracture. Epidural hematoma is present. Attending Radiologist : WOROCH, LUBOSLAV Ordered By : BAER, ASHER Order Date : Time: August 22, 2015 6:10 AM Scan Initiation Date/Time: August 22, 2015 6:48 AM Completion Date : Time: August 22, 2015 7:04 AM Performed on Date : Time: August 22, 2015 7:04 AM Encounter Number : 010090934844 Accession Number : 6368606 Images were reviewed and interpreted by Attending Radiologist : Dr. WOROCH, LUBOSLAV Electronically Signed On : August 22, 2015 7:23 AM by Dr. WOROCH, LUBOSLAV STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-730";
	
	//Infarction, vasogenic edema, subdural hematoma
	//var actualReport = "Title: CT:HEAD ROUTINE W/O CONTRAST,\n\nEvent Examination : CT head without contrast. Clinical History : Trauma \n Technique : Multiple contiguous axial images were obtained from the skull base to the vertex without administration of intravenous contrast. Images were reviewed in soft tissue, subdural and bone windows. Post processing reformatted images were produced and reviewed. Comparison : Comparison : CT head 11/26/2013. Findings : No acute intracranial hemorrhage or compelling evidence for acute transcortical infarction. Again noted are areas of encephalomalacia/gliosis medially in the right cerebellum and anterolaterally in the left frontal lobe. Interval development of hypodensity in the left parieto-occipital lobe, likely chronic given the ex vacuo dilatation of the occipital horn of the left lateral ventricle. Interval resolution of previously present left parieto-occipital subdural hematoma. There are areas of low attenuation in the periventricular and subcortical white matter, a nonspecific finding however most likely secondary to chronic small vessel ischemic disease. No extra-axial collection or midline shift. Involutional changes are noted. No hydrocephalus. No acute depressed skull fracture. There is an 7 mm enhancing lesion within the right frontal lobe with surrounding FLAIR hyperintense vasogenic edema. Again noted is a retention cyst or polyp in the left sphenoid sinus. Mucosal thickening is noted in the left maxillary sinus. The imaged portions of the orbits, remaining paranasal sinuses and mastoid air cells appear unremarkable. Intracranial calcified arteriosclerotic vascular plaques are present. Impression : 1. No acute traumatic intracranial injury 2. Interval development of encephalomalacia/gliosis in left parieto-occipital lobe, likely sequela of chronic infarction ortrauma given ex vacuo dilatation of left lateral ventricle occipital horn 3. Again noted, areas of encephalomalacia/gliosis in right cerebellum and left frontal lobe 4. Chronic small vessel disease. Attending Radiologist:     BLUESTONE, AVRAHAM Ordered By:                LEIBNER, EVAN Order Date/Time:           January  6, 2016 5:40 PM Scan Initiation Date/Time: January  6, 2016 7:15 PM Completion Date/Time:      January  6, 2016 7:21 PM Encounter Number:          010095201306 Accession Number:          6540236 Images were reviewed and interpreted by Attending Radiologist: Dr. BLUESTONE, AVRAHAM Electronically Signed On:  January  6, 2016 8:22 PM by Dr. BLUESTONE, AVRAHAM STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";
	//var actualReport = "Title: MRI BRAIN WO AND WITH CONTRAST\n\nEvent Examination : MRI BRAIN WO AND WITH CONTRAST. Clinical History : BRAIN TUMOR F/U RAD TX History and Indication RAD TX HIGH BLOOD PRESSURE LUNG CA \n Technique : Multiple sequences were obtained through the brain without and with intravenous gadolinium. Contrast Contrast Agent GADAVIST 9.8 milliliters 01/14/2015 INTRAVENOUS Comparison : No images available for comparison. Findings : There is no area of restricted diffusion to suggest acute infarction. There is an 7 mm enhancing lesion within the right frontal lobe with surrounding FLAIR hyperintense vasogenic edema. Faint tiny focus of enhancement in the left temporal lobe (image 71, series 901 and image 31, series 903) without surrounding edema, grossly unchanged from prior. There is a 5 mm enhancing nodule along the posterior margin of the right cerebellar hemisphere without edema. There is a faint focus of enhancement within the left parietal lobe (series 901, image 98), within the posterior inferior left temporal lobe (series 903, image 62) concerning for focal leptomeningeal deposit. Again noted are postsurgical changes in the right parietal lobe with a fluid-filled surgical cavity surrounded by gliosis. Again noted is ex vacuo dilatation of the posterior body of the right lateral ventricle and adjacent hemosiderin deposition. Craniotomy defect is again noted. There is no mass effect, midline shift or other focal parenchymal abnormality. There is no intracranial hemorrhage or extra-axial collection. The pituitary gland is normal in size. Normal flow void is noted in the major arteries of the circle of Willis. There is no significant disease in the paranasal sinuses. The orbits are grossly unremarkable. Impression : No significant interval change. No new lesions identified. Attending Radiologist : PEYSTER, ROBERT Ordered By : KOWALSKA, AGNIESZKA Order Date : January 14, 2015 11:00 AM Completion Date : January 14, 2015 12:54 PM Performed on Date : January 14, 2015 12:54 PM Encounter Number : 010083753839 Accession Number : 6070793 Images were reviewed and interpreted by Attending Radiologist : Dr. PEYSTER, ROBERT Electronically Signed On : January 16, 2015 3:33 PM by Dr. PEYSTER, ROBERT STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-730";
	//var actualReport = "Title: CT HEAD ROUTINE WITHOUT CONTRAST   Examination CT HEAD ROUTINE WITHOUT CONTRAST  Clinical History TRAUMA  History and Indication TRAUMA Technique Contiguous axial slices were obtained from the skull base to the vertex. Sagittal and coronal reformatted images were also obtained.  Comparison CT of the head without contrast from 04/21/2011.  Findings There is low attenuation in the periventricular and subcortical white matter most likely representing the sequelae of chronic small vessel ischemia. There is chronic infarction in the left corona radiata and along the external capsule.  There are age-related generalized involutional changes with secondary prominence of the cortical sulci and ventricular system. There is no mass effect, midline shift.  There is no intracranial hemorrhage or extra-axial collection. The calvarium is intact. There are atherosclerotic calcifications of the bilateral carotid siphons. There is opacification of the bilateral ethmoid sinuses and mucosal thickening within the right sphenoid sinus. The mastoid air cells are clear. The soft tissues and orbits are grossly unremarkable. Impression No acute traumatic intracranial pathology. Attending Radiologist:    WEST, STEVEN  Ordered By:               BOBROWSKY, BRYAN  Order Date:               January 13, 2015 10:35 PM Completion Date:          January 13, 2015 11:11 PM Encounter Number:         010083654987 Accession Number:         6087860 Images were reviewed and interpreted by Attending Radiologist: Dr. WEST, STEVEN Electronically Signed On: January 14, 2015 3:06 PM by Dr. WEST, STEVEN STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";
	
	//aneurysm
	//var actualReport = "Title: CT HEAD ANGIOGRAM CT NECK ANGIOGRAM CT BRAIN PERFUSION Examination CT HEAD ANGIOGRAM CT NECK ANGIOGRAM CT BRAIN PERFUSION Clinical History Dysarthria Technique CT perfusion: Before and during a contrast bolus injection, multiple 5mm thick stacks of perfusion data were collected   .Following this, workstation technology was employed to create time of arrival, blood flow, mean transit time and blood volume color perfusion maps. CT angio of the neck: Following rapid IV bolus of contrast material, rapid helical imaging with very thin slices from the aortic arch to the lower cranial level was performed. Following this, 3-D workstation was utilized to create 3-D rendered MIP images.  NASCET methodology was employed to evaluate the degree of stenosis.  CT angiography of the head: Following rapid injection of intravenous contrast material after an appropriate delay, very thin helical axial slices were obtained through the entire head. Following this, 3-D workstation was employed to create 3-D rendered and MIP images. Contrast Contrast Agent OMNIPAQUE 350 140 milliliters 01/13/2015 INTRAVENOUS Comparison No images available for comparison.  Findings CT perfusion: There is mild increase in mean transit time in the distribution of the right MCA without corresponding abnormalities on the blood volume or IRF maps. There is a matching of focus of reduced blood flow corresponding to the right MCA distribution. CT angio of the neck: There is no evidence of greater than 30% stenosis or occlusion of the right or left carotid and vertebral arteries. There is extension of the aortic arch dissection into the brachiocephalic and proximal right common carotid artery.  CT angiography of the head: No abrupt cerebral arterial cut off is seen. There is decreased opacification of small cortical branches in the region of the right temporoparietal lobe. There is no evidence of aneurysm vascular malformation.  Impression CT perfusion: Evidence of reduced diffusion within the right middle cerebral artery on the mean transit time and blood flow maps. The diffusion-weighted MRI of the brain may be obtained for further evaluation.  CT angio of the neck: Partial visualization of aortic aneurysm which extends into the brachiocephalic and proximal left common carotid artery. CT angiography of the head: No abrupt cut off is seen to suggest vascular occlusion. Decreased opacification of small cortical branches in the right temporoparietal region. The results of this examination were verbally communicated via telephone conference with read back verification to NP Aracon on 01/14/2015 at 3:30 a.m.  Attending Radiologist:    WEST, STEVEN  Ordered By:               BOBROWSKY, BRYAN  Order Date:               January 13, 2015 10:35 PM Completion Date:          January 13, 2015 11:11 PM Encounter Number:         010083654987 Accession Number:         6087860 Images were reviewed and interpreted by Attending Radiologist: Dr. WEST, STEVEN Electronically Signed On: January 14, 2015 3:06 PM by Dr. WEST, STEVEN STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";
	//var actualReport = "Title: CT HEAD ROUTINE WITHOUT CONTRAST   Examination CT HEAD ROUTINE WITHOUT CONTRAST  Clinical History RUE WKNESS/NUMBNESS, ELBOW PAIN History and Indication HX ANEURYSM Technique Contiguous axial slices were obtained from the skull base to the vertex. Coronal and sagittal reformatted images were also performed.  Comparison CT of the head without contrast from 04/21/2011.  Findings There is no loss of gray-white matter distinction or other sign of acute infarction. Again noted is a basilar tip aneurysm which has remained stable in size and appearance. Involutional changes and mild chronic microvascular ischemic changes noted.  The ventricles and cisterns are unremarkable.  There is no mass effect or midline shift.There is no intracranial hemorrhage or extra-axial collection. The calvarium and the skullbase appears intact. There is no significant disease in the visualized paranasal sinuses and mastoids. Impression No interval change.  Stable basilar tip aneurysm.  Involutional changes and chronic microvascular ischemic changes. No evidence of intracranial hemorrhage.  Attending Radiologist:    WEST, STEVEN  Ordered By:               BOBROWSKY, BRYAN  Order Date:               January 13, 2015 10:35 PM Completion Date:          January 13, 2015 11:11 PM Encounter Number:         010083654987 Accession Number:         6087860 Images were reviewed and interpreted by Attending Radiologist: Dr. WEST, STEVEN Electronically Signed On: January 14, 2015 3:06 PM by Dr. WEST, STEVEN STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";

	//herniation
	//var actualReport = "Title: MRI of the brain without contrast. Examination MRI of the brain without contrast.   Clinical History Slurred speech. History and Indication Slurred speech. Technique A multi sequential, multiplanar MRI of the brain was performed without intravenous contrast. Comparison No images available for comparison.  Findings There is no evidence of restricted diffusion to suggest acute infarction.  There is generalized, age-related loss of volume of the parenchyma secondary prominence of the CSF spaces, without evidence of hydrocephalus. There is no mass effect or midline shift. There is confluent periatrial white matter hyperintense FLAIR signal.  There are numerous punctate foci of T2/FLAIR signal, scattered within the deep and subcortical white matter.  These findings are most compatible to sequela of mild to moderate chronic small vessel ischemia. Flow voids of the major dural sinuses and central arteries and circle of Willis are present.  There is susceptibility artifact in the right temporoparietal region and superior aspect of the right sylvian fissure, corresponding with nonspecific calcification on the recent head CT. There is no tonsillar herniation.  Fracture in the floor and medial wall of the left orbit are noted with left preseptal hematoma.  Hemorrhagic fluid levels noted in the left maxillary sinus.  There is opacification of the anterior left ethmoid air cells. There is inferior herniation of the extraconal retrobulbar fat into the left maxillary sinus.  There is a small retrobulbar hematoma along the floor of the left orbit.  Impression No evidence of acute infarct. No mass effect, midline shift or hydrocephalus. Mild to moderate chronic small vessel ischemic changes. Fractures in the medial wall and floor of the left orbit with herniation of the retrobulbar fat into the left maxillary sinus. Small left extraconal retrobulbar hematoma.  Attending Radiologist:    WEST, STEVEN  Ordered By:               BOBROWSKY, BRYAN  Order Date:               January 13, 2015 10:35 PM Completion Date:          January 13, 2015 11:11 PM Encounter Number:         010083654987 Accession Number:         6087860 Images were reviewed and interpreted by Attending Radiologist: Dr. WEST, STEVEN Electronically Signed On: January 14, 2015 3:06 PM by Dr. WEST, STEVEN STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";
	//var actualReport = "Title: MRI of the brain without contrast. Examination MRI of the brain without contrast. Clinical History Slurred speech. History and Indication Slurred speech. Technique A multi sequential, multiplanar MRI of the brain was performed without intravenous contrast. Comparison Prior head CT from 01/16/2015 at 7:28 a.m. Findings There is no evidence of restricted diffusion to suggest acute infarction. There is generalized, age-related loss of volume of the parenchyma secondary prominence of the CSF spaces, without evidence of hydrocephalus. There is no mass effect or midline shift. There is confluent periatrial white matter hyperintense FLAIR signal.  There are numerous punctate foci of T2/FLAIR signal, scattered within the deep and subcortical white matter.  These findings are most compatible to sequela of mild to moderate chronic small vessel ischemia. Flow voids of the major dural sinuses and central arteries and circle of Willis are present.  There is susceptibility artifact in the right temporoparietal region and superior aspect of the right sylvian fissure, corresponding with nonspecific calcification on the recent head CT. There is no tonsillar herniation. Fracture in the floor and medial wall of the left orbit are noted with left preseptal hematoma.  Hemorrhagic fluid levels noted in the left maxillary sinus.  There is opacification of the anterior left ethmoid air cells. There is inferior herniation of the extraconal retrobulbar fat into the left maxillary sinus.  There is a small retrobulbar hematoma along the floor of the left orbit. Impression No evidence of acute infarct. No mass effect, midline shift or hydrocephalus. Mild to moderate chronic small vessel ischemic changes. Fractures in the medial wall and floor of the left orbit with herniation of the retrobulbar fat into the left maxillary sinus. Small left extraconal retrobulbar hematoma. Attending Radiologist:    PEYSTER, ROBERT Ordered By:               CLYDE, JOANNE Order Date:               January 16, 2015 1:40 PM Completion Date:          January 16, 2015 2:04 PM Encounter Number:         010083847706 Accession Number:         6091763 Images were reviewed and interpreted by Attending Radiologist: Dr. PEYSTER, ROBERT Electronically Signed On: January 16, 2015 3:33 PM by Dr. PEYSTER, ROBERT STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";

	//subraachnoid haemorrhage
	//var actualReport = "Title: CT HEAD ROUTINE WITHOUT CONTRAST Examination CT HEAD ROUTINE WITHOUT CONTRAST Clinical History Traumatic head injury.  Intracranial hemorrhage.  Follow up.  History and Indication S/P TRAUMA Technique Contiguous axial slices were obtained from the skull base to the vertex without intravenous contrast.  Coronal and sagittal reconstructions were obtained. Comparison Head CT dated 01/27/2015. Findings Since the previous exam, the subdural hemorrhages along the convexities of both frontal lobes are slightly increased in thickness, measuring 5 mm on the right (previously measured 2 mm), and 6 mm on the left (previously measured 2 mm). These subdural collections extend from the floor of the anterior cranial fossa up to the vertex. There has been redistribution of the hyperdense components since the prior exam. Small hemorrhagic contusion in the inferior left frontal lobe is stable. Mild subarachnoid hemorrhage in the sulci of the inferior frontal lobes is unchanged. There is no significant mass effect.  There is no midline shift or hydrocephalus. There is no evidence of acute territorial infarction. There is residual contrast within the dural sinuses and veins, from the prior contrast-enhanced CT chest/abdomen/pelvis.  Nondisplaced fracture of the right occipital bone is unchanged, with edema and hematoma in the overlying soft tissues.  Visualized paranasal sinuses and mastoid air cells are well aerated. Impression 1. Mildly increased volume of bilateral subdural hemorrhages. Stable mild subarachnoid hemorrhage and small left frontal lobe hemorrhagic contusion. No significant mass effect.  No midline shift or hydrocephalus. 2. Nondisplaced fracture of the right occipital bone. Attending Radiologist:    WOROCH, LUBOSLAV Ordered By:               MOHAMMADY, NAJIM Order Date:               January 28, 2015 2:00 AM Completion Date:          January 28, 2015 2:22 AM Encounter Number:         010084168177 Accession Number:         6104629 Images were reviewed and interpreted by Attending Radiologist: Dr. WOROCH, LUBOSLAV Electronically Signed On: January 28, 2015 2:47 AM by Dr. WOROCH, LUBOSLAV STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300. "; 

	//hydrocephalus
	//var actualReport = "Title: CT HEAD ROUTINE WITHOUT CONTRAST Examination CT HEAD ROUTINE WITHOUT CONTRAST Clinical History HEADACHE History and Indication AMS Technique Contiguous axial slices were obtained from the skull base to the vertex. Comparison CT head and MRI of the brain without contrast 11/07/2011 Findings There is no loss of gray-white matter distinction or other sign of acute infarction. There is slight increase in hypoattenuation in the periventricular and deep cortical white matter, consistent with chronic microvascular ischemic disease. Old lacunar infarct is seen within the left occipital lobe, unchanged. The ventricles unchanged in size and configuration with prominence of the temporal horns of the lateral ventricles. There is crowding of the gyri at the vertex. There is no mass effect, midline shift or other focal parenchymal abnormality.  There is no intracranial hemorrhage or extra-axial collection. The calvarium is intact. Mild mucosal sinus disease is seen within the left sphenoid sinus.  The remainder of the visualized paranasal sinuses and mastoids are well pneumatized. Impression 1. No acute intracranial pathology. 2. Unchanged size and configuration of the dilated ventricular system with prominence of the temporal horns of the lateral ventricles. This finding in conjunction with crowding of the gyri at the vertex is suggestive of normal-pressure hydrocephalus. 3. Slight interval worsening of periventricular and deep white matter hypodensity, compatible with chronic microvascular ischemic disease, possibly including a component of transependymal flow. Attending Radiologist:    FELDMANN, ERIC Ordered By:               NWAKANMA, CHIDINMA  Order Date:               January  9, 2015 1:20 PM Completion Date:          January  9, 2015 1:51 PM Encounter Number:         010083623131 Accession Number:         6082947 Images were reviewed and interpreted by Attending Radiologist: Dr. FELDMANN, ERIC Electronically Signed On: January  9, 2015 2:07 PM by Dr. FELDMANN, ERIC STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300. ";
	
	//mass effect, midline shift, compression
	//var actualReport = "Title: CT HEAD ROUTINE WITHOUT CONTRAST Examination CT HEAD ROUTINE WITHOUT CONTRAST  Clinical History BRAIN LAB History and Indication PRE-OP CRANI NEEDS BRAIN LAB Technique Contiguous axial slices were obtained from the skull base to the vertex. Comparison Prior CT of the head from 01/06/2015 Findings Again seen is a large left posterior frontal/temporal lobe hemorrhage. The lesions remain stable in size and appearance and demonstrates some nodular enhancement superiorly and laterally. This is better demonstrated patient's MRI performed on the same date. There is edema surrounding the large left posterior frontal/ temporal low hemorrhage. .  There is again mass effect with slight midline shift and compression of the left lateral ventricle.  No extra-axial process. The calvarium is intact.  The intracranial vasculature is grossly patent. There is right maxillary sinus mucosal disease. Bilateral lens surgery. Impression Stable hemorrhagic masslike lesion involving the left posterior frontal /temporal lobe. Attending Radiologist:    WEST, STEVEN Ordered By:               ROBITSEK, TAMI Order Date:               January  7, 2015 3:05 PM Completion Date:          January  7, 2015 3:27 PM Encounter Number:         010083485200 Accession Number:         6080155 Images were reviewed and interpreted by Attending Radiologist: Dr. WEST, STEVEN Electronically Signed On: January  7, 2015 5:50 PM by Dr. WEST, STEVEN STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300. ";
	
	//subrarachnoid haemorrhage, intraventricular haemorrhage
	//var actualReport = "Title: CT HEAD ROUTINE WITHOUT CONTRAST Examination CT HEAD ROUTINE WITHOUT CONTRAST  Clinical History EVALUATE FOR TRAUMA History and Indication EVAL FOR EVOLUTION OF ICH Technique Contiguous axial slices were obtained from the skull base to the vertex. Comparison Prior study from earlier in the day. Findings There are grossly stable heterogeneous subdural collections within both frontal and both parietal regions. There are grossly stable scattered areas of subarachnoid hemorrhage prominently within both frontal regions and within the left parietal region. There is a grossly stable hemorrhagic contusion within the left inferior frontal lobe.  There is a trace amount of intraventricular hemorrhage which appears new when compared to the prior study. There are involutional changes without hydrocephalus.  There is small vessel disease. There are multiple vascular calcifications. The basal cisterns are patent.  There is no midline shift. Again seen is a stable nondisplaced fracture involving the right occipital bone extending slightly into the right parietal bone. There is no significant disease in the visualized paranasal sinuses and mastoids. Impression Trace amount of intraventricular hemorrhage which is new when compared to the prior study.  Stable heterogeneous subdural collections as described above.   Stable scattered areas of subarachnoid hemorrhage.  Stable hemorrhagic contusion within the inferior left frontal lobe.  Attending Radiologist:    DUNKIN, JARED  Ordered By:               ABBAS, SYED  Order Date:               January 28, 2015 2:00 PM Completion Date:          January 28, 2015 1:55 PM Encounter Number:         010084168177 Accession Number:         6104687 Images were reviewed and interpreted by Attending Radiologist: Dr. DUNKIN, JARED Electronically Signed On: January 28, 2015 2:11 PM by Dr. DUNKIN, JARED STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300. ";
	
	//tumor
	//var actualReport = "Title: MRI BRAIN WO AND WITH CONTRAST/ROUT Examination MRI BRAIN WO AND WITH CONTRAST/ROUT Clinical History POSTOP EVALUATION History and Indication BRAIN TUMOR Technique Multiple sequences were obtained through the brain without and with intravenous gadolinium. Contrast Contrast Agent GADAVIST 7.4 milliliters 01/10/2015 INTRAVENOUS Comparison MRI of the brain with and without contrast from 09/26/2014.  Comparison is also made to the prior head CT from January 9, 2015. Findings There is no area of restricted diffusion to suggest acute infarction. There are postoperative changes consistent with a left frontal craniotomy.  There is susceptibility artifact created by the surgical hardware involving the left frontal calvarium in the left frontal scalp. Again noted are bifrontal approach ventriculostomy catheters which are remained unchanged in position in comparison to the previous study. Again noted are multiple enhancing subependymal lesions in a patient with known tuberous sclerosis involving both lateral ventricles.  There has been partial resection of the largest enhancing its with minimal lesion compatible for giant cell tumor within the frontal horn of left lateral ventricle adjacent to the foramina Monroe. There has been interval decrease in the size of the midline cysts which involves the septum pellucidum / vergae in the, however, there has been interval thickening of the walls of the midline cyst as well as interval thickening of the septal wall within the cyst.  This cyst appears to contain some proteinaceous material.  There is hemorrhage within the occipital horns of both lateral ventricles.  There is evidence of pneumocephalus in the frontal horns of both lateral ventricles. Did there are multiple nonenhancing foci of increased signal intensity involving the subcortical white matter likely representing nonenhancing tumor is.  There is some persistent enhancement involving the right frontal lobe near the vertex best demonstrated on image 146 on series 18 which may represent an enhancing cortical tuber. These are remained unchanged. There is diffuse dural enhancement which is progressed in comparison to study is likely related to patient's recent surgery. This could also be seen in the setting of intracranial hypertension.  Clinical correlation is recommended. Impression Status post left frontal craniotomy for partial resection of a giant cell tumor involving the frontal horn of left lateral ventricle near foramina Monroe.  There the other enhancing subependymal lesions have remains stable in size and appearance.  Again noted are multiple nonenhancing cortical tubers which have remained unchanged.  There are also some enhancing cortical tubers within the right frontal lobe which remain unchanged.  There is hemorrhage and air within both lateral ventricles.  There is no change in position of the bifrontal approach ventriculostomy catheters.  There has been interval decrease in size of the midline cyst involving the septum pellucidum/paragraph, however, there has been an interval thickening of the walls and a subtotal of the midline cysts. Interval progression of diffuse there are old enhancement as described above. Attending Radiologist:    WEST, STEVEN  Ordered By:               CALANDRA, COLLEEN Order Date:               January  9, 2015 2:50 PM Completion Date:          January 10, 2015 1:34 PM Encounter Number:         010082904086 Accession Number:         6083109 Images were reviewed and interpreted by Attending Radiologist: Dr. WEST, STEVEN Electronically Signed On: January 12, 2015 9:54 AM by Dr. WEST, STEVEN STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300. ";
	
	//neoplasm
	//var actualReport = "Title: CT:HEAD ROUTINE W/O CONTRAST/STAT/CTER Examination CT:HEAD ROUTINE W/O CONTRAST/STAT/CTER Clinical History Syncope.  Hearing loss.  History and Indication SYNCOPE, HEARING LOSS Technique Contiguous axial slices were obtained from the skull base to the vertex without intravenous contrast.  Coronal and sagittal reconstructions were obtained  Comparison: CT head dated 11/01/2009. Correlation is made with the Outside MRI brain dated 11/03/2014 and noncontrast MRI brain dated 06/12/2011. Findings Status post right total frontal craniectomy and cranioplasty. There is bilateral parietal approach ventriculostomy catheters, with the tips of these catheters terminating all in the frontal horn of left lateral ventricle and adjacent to the right foramen of Monro. There is an area of encephalomalacia and gliosis in the right frontal lobe, below the cranioplasty.  There are some prominent hyperdense extra-axial soft tissue along the surgical margins, likely reflecting postsurgical change. There are extensive areas nodular hyperdense soft tissue, infiltrating the pre chiasmatic optic nerves, optic chiasm, hypothalamic region, extending posteriorly along the expected region of the left optic tract and anteriorly into the intraorbital left optic nerve. There is nodular soft tissue in the medial left temporal lobe with surrounding low attenuation, representing edema. This hyperdense soft tissue appears to extend superiorly into the left basal ganglia and inferiorly into the left cerebral peduncle. Additionally there is adjacent to the atrium of the right lateral ventricle which appears to extend into the right basal ganglia. There is also hyperdense soft tissue and extending along the intracanicular right optic nerve. Additional hyperdense nodular soft tissue in the region of the right pulvinar, compresses the underlying right lateral ventricle, with resultant resultant moderate enlargement of the right temporal horn, which is trapped. Low attenuation surrounding this large right temporal horn may represent transependymal flow of CSF. There is nonspecific soft tissue nodularity along the body of the left lateral ventricle. Dysmorphic appearance of the ventricular system is noted, reflecting some combination of post treatment changes and mass effect from neoplasm.  There is no midline shift.  There is a hypodense subdural collection along the convexity of the right frontal lobe, without much mass effect on the underlying parenchyma, measuring 6 mm in maximum thickness. Dysconjugate gaze is noted.  Impression Extensive nodular soft tissue neoplasm, as detailed above, with mass effect on the right lateral ventricle, resulting in a trapped temporal horn, with moderate to severe distention.  Low attenuation surrounding the right temporal horn may represent transependymal flow of CSF. A contrast-enhanced MRI of the brain is recommended to further delineate the extent of disease.  Nonspecific hypodense subdural collection along the convexity of the right frontal lobe, without much mass-effect, measuring 6 mm in thickness, may represent chronic subdural blood.  Biparietal approach VP shunt catheters with the tips in the lateral ventricles. Attending Radiologist:    WOROCH, LUBOSLAV Ordered By:               MAK, WILLIAM Order Date:               January  4, 2015 12:50 AM Completion Date:          January  4, 2015 1:20 AM Encounter Number:         010083415538 Accession Number:         6075295 Images were reviewed and interpreted by Attending Radiologist: Dr. WOROCH, LUBOSLAV Electronically Signed On: January  4, 2015 9:11 AM by Dr. WOROCH, LUBOSLAV STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300. ";
	
	//CHEST
	//Atelectasis
	//var actualReport = "Title: CHEST ROUTINE PA/AP AND LATERAL\n\nExamination CHEST ROUTINE PA/AP AND LATERAL/STAT/ER Clinical History CHEST PAIN Presenting Diagnosis CHEST PAIN Technique Two views of the chest are presented. Comparison There are no images available for comparison Findings Trachea is midline. Normal size and contour of the cardiomediastinal silhouette. Thoracic aorta is calcified and mildly uncoiled. Eventration of elevation of the right hemidiaphragm. There is no focal consolidation. There is bibasilar and right middle lobe atelectasis and/ or scarring. There is mild pulmonary vascular congestion. No evidence of pneumothorax. Impression Mild pulmonary vascular congestion. Bibasilar and right middle lobe atelectasis and/ or scarring. No consolidation. Attending Radiologist: WOROCH, LUBOSLAV Ordered By: CONRAD, CARA Order Date/Time: August 22, 2015 1:15 AM Scan Initiation Date/Time: August 22, 2015 1:50 AM Completion Date/Time: August 22, 2015 1:39 AM Encounter Number: 010090934489 Accession Number: 6368524 Images were reviewed and interpreted by Attending Radiologist: Dr. WOROCH, LUBOSLAV Electronically Signed On: August 22, 2015 1:53 AM by Dr. WOROCH, LUBOSLAV STONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300";
	
	//pneumonia
	//var actualReport = "Title : CHEST ROUTINE PA/AP AND LATERAL\nClinical History : Status post esophageal stent, chronic dysphasia\nTechnique : PA and lateral views of the chest\nComparison : Comparison is made to 07/10/2015\nFindings : Again seen is a left chest wall pacemaker with distal leads unchanged in position. Trachea is midline. Cardiomediastinal silhouette is within normal limits. There is no pleural effusion, pulmonary vascular congestion or pneumothorax. There is bilateral, peripheral fine interstitial markings, which may suggest pneumonia versus aspiration pneumonitis. There is moderate severe centrilobular emphysema. Esophageal stent is unchanged in position, and there is no evidence of luminal narrowing.\nImpression : 1. Interstitial haziness, which may suggest pneumonia versus aspiration pneumonitis. 2. Esophageal stent in place, with no evidence of luminal narrowing.\nAttending Radiologist : MOORE, WILLIAM H\nOrdered By : SHERMAN, MICHAEL\nOrder Date : Time: August 21, 2015 12:30 PM\nScan Initiation Date/Time: August 21, 2015 4:32 PM\nCompletion Date : Time: August 21, 2015 4:31 PM\nPerformed on Date : Time: August 21, 2015 4:31 PM\nEncounter Number : 010090893065\nAccession Number : 6367741\nImages were reviewed and interpreted by Attending Radiologist : Dr. MOORE, WILLIAM H\nElectronically Signed On : August 21, 2015 5:07 PM by Dr. MOORE, WILLIAM H\nSTONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGYSTONY BROOK, NY 11794-730";
	
    //no cases of Cerebral hemorrhage, abscess, loss of grey matter
	
	//edema and efflusion
	//var actualReport = "Title: Chest,AP Portable Examination Chest,AP Portable Clinical History : Evaluate for pneumonia. Technique : Frontal view of the chest was obtained. Comparison : No prior studies are available for comparison. Findings : Diffuse patchy bilateral airspace opacifications are seen more predominant in the right lung. Small bilateral pleural effusions. There is no evidence of pneumothorax. Cardiomediastinal silhouette is within normal limits for an AP radiograph. Status post median sternotomy. No acute rib fractures are identified. Impression Patchy airspace opacities in both lungs predominantly in the right lung, may represent pulmonary edema. Superimposed infectious process is not excluded. Attending Radiologist : YADDANAPUDI, KAVITHA Ordered By : HERNANDEZ, CRISTINA Order Date : February 18, 2015 1:55 PM Completion Date : February 18, 2015 3:40 PM Performed on Date : February 18, 2015 3:40 PM Encounter Number : 010084844231 Accession Number : 6131389 Images were reviewed and interpreted by Attending Radiologist : Dr. YADDANAPUDI, KAVITHA Electronically Signed On : February 18, 2015 4:25 PM by Dr. YADDANAPUDI, KAVITHASTONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300. ";
	
	//abdomen testings
	//var actualReport = "Title : CT:ABDOMEN W/O AND W/NON-IONIC Clinical History: 46-year-old female with right flank pain and a family history of renal calculi. A poor post-contrast-enhanced abdominopelvic CT was performed for further evaluation. The time of dictation, there are no prior CT scans available. Technique: No oral contrast was administered. Sequential pre- and post-contrast-enhanced axial images of the abdomen and pelvis were obtained. Findings: The lung fields are clear. There are no destructive distal calcifications. There is a CT evidence of nephroureterovesiculolithiasis. Following administration of intravenous contrast there is prompt,bilateral, symmetric renal parenchymal enhancement and excretion. There no focal renal lesions there was a dilatation of either renal collecting system. There are no filling defects appreciated within the opacified uroepithelium. Incidental note is made of gonadal vein opacification bilaterally greater on the right than the left. There are no focal lesions within the liver, spleen, pancreas, or either adrenal gland. There are no dilated loops of bowel, free intraperitoneal air or fluid. There are small para aortic lymph nodes which are not enlarged by CT criteria. The largest on the left measures 0.7 x 0.7 cm on image 34. An aortocaval lymph node is presenton image 37 which measures 0.6 x 0.4 cm again not pathologically enlarged.There are no dilated loops of bowel, free intraperitoneal air, orfluid. Cystic changes are present in both adnexa commensurate with the patient's age and menstrual status. These are present on image 61. Nopelvic masses are identified. There are no filling defects within the urinary bladder. There is a right inguinal lymph node which measures1.2 x 1 cm on image 75 which also is not enlarged by CT criteria. The osseous structures are intact. Impression: Normal CT urogram. Attending Radiologist: ZAWIN, MARLENE Ordered By: WALTZER, WAYNE Order Date: February 27, 2008 8:00 AM Completion Date: February 27, 2008 8:54 AM Encounter Number: 010041437061 Accession Number: 2862909 Images were reviewed and interpreted by Attending Radiologist: Dr. ZAWIN, MARLENE Electronically Signed On: February 27, 2008 9:15 AM by Dr. ZAWIN, MARLENESTONY BROOK UNIVERSITY HOSPITALDEPARTMENT OF RADIOLOGYSTONY BROOK, NY 11794-7300. ";
	//hypodensity - splenic laceration
	//var actualReport = "Title : CT:ABDOMEN WITH NON-IONIC CONT CT abdomen and pelvis:History: Lower quadrant pain.Technique: Multiple axial images of the abdomen and pelvis performed.5 mm sections were taken from the base of the lungs to the symphysispubis.Oral and IV contrast was utilized during this study.Findings: The base of the lungs are clear there is no consolidation,nodule or mass. There are no pleural effusions.The heart is within normal limits for size there is no pericardialeffusion.In the left lobe liver there is a 6 mm hypodensity which is too smallto fully characterize on this study. Otherwise, the liver, spleen,pancreas and adrenal glands all enhance homogeneously without evidenceof mass. The gallbladder is within normal limits there is nointrahepatic or extrahepatic biliary dilatation. The kidneys enhancesymmetrically however, there is a 6 mm hypodensity in the upper polethe right kidney statistically most likely representing a small cysts.However, please note that this is also too small to be fullycharacterize on this study. There is no hydronephrosis.There is no retroperitoneal or pelvic lymphadenopathy.The intermittently opacified bowel is grossly unremarkable.This patient status post posterolateral rod stabilization withcortical graft placement and the L4-L5 level. There is grade 1spondylolisthesis at the L4-L5 correlation with plain films isrecommended. There also appears to be mild spinal stenosis at thislevel. Spinal canal measured approximately 7 mm on the sagittalreconstructed images. Impression: There is grade 1 spondylolisthesis at L4-L5 this is at the level ofthe prior spinal stabilization surgery. There appears to the spinalstenosis at this level. Plain film correlation is recommended.Dedicated CT of the lumbar spine may be helpful.There is a 6 mm hypodensity in the liver which is too small to fullycharacterize. A similar, small hypodensities to the right kidney also,too small to fully characterize. Attending Radiologist: MOORE, WILLIAM Ordered By: FRISCHER, ZELIK Order Date: March 23, 2007 2:00 PM Completion Date: March 23, 2007 3:05 PM Encounter Number: 010037837399 Accession Number: 2531452 Images were reviewed and interpreted by Attending Radiologist: Dr. MOORE, WILLIAM Electronically Signed On: March 23, 2007 3:34 PM by Dr. MOORE, WILLIAM STONY BROOK UNIVERSITY HOSPITALDEPARTMENT OF RADIOLOGYSTONY BROOK, NY 11794-7300. ";	
	
	//var actualReport = "Title: FLAT PLATE ABDOMEN PORTABLE Clinical History : COPD exacerbation. Technique : Supine view of the abdomen. Comparison : None available. Findings : Nonobstructive bowel gas pattern is noted. Gas and stool are seen throughout the colon. Stool ball is seen within the rectum concerning for fecal impaction. There is no evidence of gross extraluminal/subdiaphragmatic free air, however, evaluation for free air is limited on a single supine view image. Known calcified infrarenal AAA is partially visualized. Surgical clips are seen in the right upper quadrant. Vascular stent graft is noted within the right pelvis. The visualized lung bases are unremarkable. Impression : Nonobstructive bowel gas pattern. Stool ball within the rectum concerning for fecal impaction. Attending Radiologist : FISHER, PAUL Ordered By : CHUNG, JENNA Order Date : March 14, 2015 10:15 AM Completion Date : March 14, 2015 11:11 AM Performed on Date : March 14, 2015 11:11 AM Encounter Number : 010085392313 Accession Number : 6161588 Images were reviewed and interpreted by Attending Radiologist : Dr. FISHER, PAUL Electronically Signed On : March 14, 2015 5:59 PM by Dr. FISHER, PAULSTONY BROOK UNIVERSITY HOSPITAL DEPARTMENT OF RADIOLOGY STONY BROOK, NY 11794-7300. ";

	
	var startIndex = actualReport.indexOf('Title');
	var endIndex = actualReport.indexOf("Title", startIndex+1);
	while(endIndex != -1) {
		 var temp = endIndex;
		 pdfList.push(actualReport.slice(startIndex, endIndex));
		 endIndex = actualReport.indexOf("Title", endIndex+1);
		 startIndex = temp;
	}
	pdfList.push(actualReport.slice(startIndex, endIndex));
	
	for(var i=0; i<pdfList.length; i++)
		transformedPdfList.push(transform_report(pdfList[i]));
	
	/*for(var i=0; i<pdfList.length; i++) {
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
	}*/
	//$('#pdfTest').html(testTable);
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

/*
 * Function that transforms a single report into the standard report format
 */
function transform_report(data) {
	
	console.log("AT FIRST: ", pdfTitles);
	var keywords = ["Title", "Recommendation", "Examination", "Event Examination", "Clinical History", "History and Indication", "Technique", "Comparison", "Findings", "Impression", "Attending Radiologist", "Ordered By", "Order Date/Time", "Completion Date/Time", "Scan Initiation Date/Time", "Order Date", "Completion Date", "Performed on Date", "Encounter Number", "Accession Number", "Images were reviewed and interpreted by Attending Radiologist", "Electronically Signed On"];
    var output_data = "Event ";
    var keyword_index = 0;
    var input_data = data.toString();
    
    var pos = -1;
    for (var i=0; i<keywords.length; i++) {
		pos = input_data.indexOf(keywords[i]);
		if (pos != -1) {
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
            output_data += output_text.trim() + "\n";
            
            if(keywords[index] === "Title") {
            	pdfTitles.push(output_text.trim());
            }
            
            
            if (keywords[index] === "Impression") {
            	//console.log("Suppi output text is:",output_text);
            	//write a function here var array1 = f1(output_text,comorb)
            	impressions.push(output_text.trim());
            }
            if(keywords[index] === "Findings") {
            	findings.push(output_text.trim());
            }
            else if(keywords[index] === "Completion Date/Time" || keywords[index] === "Completion Date") {
            	if(input_data.indexOf("Performed on Date") == -1) {
            			output_data += "Performed on Date : " + output_text.trim() + "\n";
            	}
			}
            pos = end_pos;
    }
    console.log("AFTER: ", pdfTitles);
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
	
	for(var i=0; i<transformedPdfList.length; i++) {
		var pdfContent = transformedPdfList[i];
		tableBody = buildRRbody(i, pdfContent, tableBody);
	}

	/*tableBody += "<tr><td><br><input id='rrComments' type='checkbox' value='Other comments'><b>Other comments:</b>"
		+ "<br><textarea id='rrCommentsid' cols='40' rows='5' ></textarea></td></tr>";
	tableBody += "</table></td></tr></table>";*/
	
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
	else if (source === 'ECHO')
		link = echoLinks[reportIndex];
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
    {	console.log("PS SHOW SelectED pdf !!!");
        selectListId = ecgFilterObj.selectlist;            
    }
    else if (source === "ECHO")
    {	console.log("PS SHOW SelectED pdf !!!");
        selectListId = echoFilterObj.selectlist;            
    }
    else
    {	console.log("PS SHOW SelectED pdf !!!");
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
    else if (source === "ECHO")
    {
        pdfContent = echoTransformedPdfList[index];
        filterObj = echoFilterObj;
        array3 = echoarray_all;
		link = echoLinks[index];
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
    else if (filterObj.source === "ECHO")
    {
        selectList = document.getElementById("selectECHOList");	
        rrshow = document.getElementById("echoshow");
		pdftable = document.getElementById("pdftableecho");
		pdfframe = document.getElementById("pdfframeecho");
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
    else if (source === "ECHO")
    {
        selectList = document.getElementById("selectECHOList");
        rrshow = document.getElementById("echoshow");
		pdftable = document.getElementById("pdftableecho");
		pdfframe = document.getElementById("pdfframeecho");    
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
			  + "<tr><td><br><p class='test' onclick='javascript:expandcollapse(\"rrarrow\",\"wrap\");'>CoMorbidities from Radiology Report&nbsp;&nbsp;"
			  + "<img id='rrarrow' border='0' src='"+arrowdownimg+"' alt='Click to collapse' /></p></td></tr>"
			  + "</table>";
	$('#rrheader').html(tableBody);	
	return;
}
function buildPSheader() {
	var tableBody = "";
	tableBody += "<table width='100%' bgcolor='white'>"
			  + "<tr><td><br><p class='test' onclick='javascript:expandcollapse(\"rrarrow\",\"wrap\");'>Pulkit SHArma&nbsp;&nbsp;"
			  + "<img id='rrarrow' border='0' src='"+arrowdownimg+"' alt='Click to collapse' /></p></td></tr>"
			  + "</table>";
	$('#psheader').html(tableBody);	
	return;
}


function scrollToText(id){
	var container = document.getElementById(id);
	console.log(id);
	console.log(container);
	
	if (container)
	{
		try {
		var scrollTo = $("#" + id + ' .highlight:first').offset().top;
		//container.scrollTop = scrollTo;
		console.log(container.scrollTop);
		container.scrollTop = scrollTo - $("#"+id).offset().top +container.scrollTop - 30		
		console.log(container.scrollTop);
		console.log($("#"+id).offset().top);
		console.log(scrollTo);
		}catch(err) {	
			alert("Here in catch");
			// The search text may have more than 1 word which doesn't occur together in the sentence.
		}
	}
}

var doScrollNow = "";
function makeDivVisibleRR(divId, ele){
	//clearTimeout(timeout);
	console.log("&&&&&&&&&&&&&PS DIVID &&&&&&&&&&&&&&"+divId);
	if (ele) {
		$("#"+ele.id).css({"height":"40px"});
	}	
	$("#" + divId).show();	
	if (doScrollNow === "" || doScrollNow !== divId)
	{
		scrollToText(divId + "inner");
		doScrollNow = divId;
	}
	console.log("&&&&&&&&&&&&&PS DIVID &&&&&&&&&&&&&&"+divId);
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
	var tableBody = "<select id='selectList' onChange=\"showSelectedPDF();\">";
	if (pdfTitles.length != 0) {
		tableBody += "<br><br><option value='first option'>Select the report to show</option>";
		for (var i=0; i<pdfTitles.length; i++) {
			tableBody += "<option value='"+pdfTitles[i]+"'>"+pdfTitles[i]+" ("+getPdfDate(transformedPdfList[i])+")</option>";
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
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
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
		console.log("\nChauhan - ", final_comorb1);
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
        if (source == 'ECHO')
            noReports = no_of_echo_reports;    				
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
			if (pcRadiologyAndECHOMap.hasOwnProperty(searchInPC)){
				var radList2D = pcRadiologyAndECHOMap[searchInPC]; 
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
		//console.log("@@@@@@@@@@@@@"+reportSearchJSON[i].category);
		var categoryArr = reportSearchJSON[i].category;
		for (var catI = 0; catI < categoryArr.length; catI++)
		{
			if (category.toLowerCase().search(categoryArr[catI].toLowerCase()) != -1)
			{
				//console.log("PS CATEGORY!!!"+reportSearchJSON[i].category);
				//console.log("PS REPORT!!!"+reportSearchJSON[i].report);
				return reportSearchJSON[i].report;
			}
		}
	}
	return null;
}

function break_sentences(data,delimiter_string){
	//console.log("PS inside break sentences the data and  delimiter_string"+ delimiter_string);
	var file_content = data;
	var textfile_sentences = new Array();
	if (typeof file_content != "undefined") {
    	// Works
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
					file_content = file_content.slice(pos_newline+1,file_content.length);
				}
				//console.log("PS inside break sentences file_content"+ file_content);
				//console.log("PS inside break sentences textfile_sentences"+ textfile_sentences);
		}
	//console.log("PS inside break sentences textfile_sentences !!"+ textfile_sentences);	
	return textfile_sentences;	
	}
	else {
		console.log("Chauhan  - Break Sentences", file_content, data);
	}
}

/*
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
	var str_next_level_comorbs_delimiter = " - ";
	var result_array = new Array();
	var temp_array = break_sentences(str_terms_comorbidities, "\n");
	var str_term_comorbidities = "";	
	for(var i = 0; i < temp_array.length; i++) 
	{
		var result = new Array();
		var term_and_comorbs = temp_array[i].split(str_term_and_comorbs_delimiter);
		
		result.push(term_and_comorbs[0]);
		
		var diff_level_comorbs = term_and_comorbs[1].split(str_diff_level_comorbs_delimiter);
		for(var j = 0; j<diff_level_comorbs.length; j++) 
		{
			var result_per_level = new Array();
			var same_level_comorbs = diff_level_comorbs[j].split(str_same_level_comorbs_delimiter);
			for(var k = 0; k<same_level_comorbs.length; k++)
				result_per_level.push(same_level_comorbs[k]);
			result.push(result_per_level);
		}
		result_array.push(result);
	}
	console.log("SUPPI RESULT_ARRAY:",result_array);
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
	var i=0;
	for (i=0;i<negPhrases.length;i++){
		var temp_array = new Array();
		temp_array=break_sentences(negPhrases[i]," ");
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
					console.log("PS ImpressionSenteces", impression_sentences, temp_array[k]);
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
                        	console.log("Here");
                            doPushFinalComorb = false;
                        }
                    }
                    //console.log("ÄLERT!!!!!!"+prop);
                }
                if (!doPushFinalComorb)
                    break;
                comorbIndexArr.push(startIndex);   
                comorbIndexArr.push(endIndex);
                comorbLocationMap[comorb_array[i].search] = comorbIndexArr; 
				final_comorb.push(comorb_array[i]);
				console.log("PS FINAL CoMorbidities "+"i " +comorb_array[i].search);
				break;
			}
		}
	}
	//console.log("%%%%%%%%%final_comorb%%%%%%%%"+final_comorb[0]);
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