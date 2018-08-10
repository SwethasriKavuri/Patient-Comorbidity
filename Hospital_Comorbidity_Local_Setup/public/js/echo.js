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
var content_of_report = new Array();
var content_to_check_for_comorb =new Array();
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


	//var actualReport = "Title : ECHO Interpretation. Report Data : \nSinus rhythm with Left ventricular hypertrophy and sinus arrhythmia with Cardiomyopathy  \n He has something else and Pulmonary Hypertension. \n Also he has Pericardial Effusion. \n frequent Premature ventricular complexes. This guy is so sad he has Ejection Fraction with Diastolic Dysfunction. His Ejection Fraction is 24%.  \nPossible Anterior infarct and also Old Myocardial Infarction (cited on or before 28-JAN-2015)\n ECHO of 28-JAN-2015 18:38,\nPremature ventricular complexes are now Present\nConfirmed by VLAY, M.D., STEPHEN (1008) on 1/29/2015 9:47:26 PM\n";
	//var actualReport = "Title : ECHO Interpretation. Report Data : Left Ventricle - Structure and Systolic Function: The left ventricular cavity size is normal. Ventricular wall thickness is normal. The relative wall thickness is severely increased (0.54). Global left ventricular systolic function is normal. The Ejection Fraction is 66% by biplane method of discs.Left Ventricle - Diastole:The overall diastolic function is mildly impaired (grade I, impaired relaxation pattern) with normal left ventricular filling pressures.Left Atrium: The left atrium is mildly dilated in size.Right Atrium: The right atrium is normal in size.Atrial Septum: Atrial septum is structurally normal and intact on 2D and color Doppler interrogation.Right Ventricle: The right ventricular size is normal. Global right ventricular systolic function is normal. The tricuspid annular plane systolic excursion is 1.8 cm consistent with normal right ventricular systolic function. The right ventricular systolic pressure, as estimated using the tricuspid regurgitation velocity, is 31.4 mmHg.Aortic Valve: The aortic valve is trileaflet and is calcified with normal excursion.Mitral Valve: There is mitral annular calcification. No evidence of mitral insufficiency is seen.Tricuspid Valve: Mild tricuspid regurgitation is present.Pulmonic Valve: Trace pulmonary regurgitation is seen.Aorta: The aorta at the level of the sinuses of Valsalva is normal in diameter at 2.60 cm. The ascending aorta is small at 2.40 cm.Pulmonary Artery: The tricuspid regurgitant velocity is 2.67 m/s, and with an assumed right atrial pressure of 3 mmHg, the estimated pulmonary artery systolic pressure is normal at 31.4 mmHg.Pericardium: pericardial effusion seen.Comparison: There are no prior studies available on this patient for comparison purposes.Summary: 1. Normal left ventricular cavity size. 2. Mildly dilated left atrial size. 3. Normal left ventricular wall thickness. 4. Normal global left ventricular systolic function. 5. Mild diastolic dysfunction with normal left ventricular filling pressures. 6. Normal right ventricular systolic function. 7. Trileaflet aortic valve and aortic sclerosis. 8. Mild tricuspid regurgitation. 9. No pericardial effusion.10. Normal aortic root diameter for body size.11. Normal atrial septum.12. Severely increased relative wall thickness.13. Small ascending aorta.012480 Howard Novotny MD, FACCElectronically signed by 012480 Howard Novotny MD, FACC on 12/31/2014 at 1:50:46 PM  *** Final ***Attending Cardiologist:   NOVOTNY, HOWARD Ordered By: SEDA, JESUS Order Date: December 31, 2014 8:00 AM Completion Date: December 31, 2014 12:05 PMEncounter Number:         010083353697Accession Number:         6071868Images were reviewed and interpreted by Attending Cardiologist: Dr. NOVOTNY, HOWARD Electronically Signed On: December 31, 2014 1:50 PM by Dr NOVOTNY, HOWARD. ";
	//var actualReport = "Title : ECHO Interpretation. Report Data : Left Ventricle - Structure and Systolic Function: The left ventricular cavity size is mildly increased. Ventricular wall thickness is normal. The relative wall thickness is normal (0.31). Global left ventricular systolic function is moderately to severely reduced. The Ejection Fraction is 35% by visual estimation. Left ventricular basal fractional shortening is decreased. The basal inferolateral wall is akinetic. The mid inferolateral wall is akinetic. The basal inferior wall is akinetic. The lateral apex is akinetic. The inferior apex is akinetic.Left Ventricle - Diastole:Left ventricular diastolic function was not assessed.Left Atrium: The left atrium is moderately dilated in size.Right Atrium: The right atrium is normal in size.Atrial Septum: Atrial septum is structurally normal and intact on 2D and color Doppler interrogation.Right Ventricle: The right ventricular size is mildly enlarged. The right ventricular diastolic area is 31.30 cm which is mildly dilated. The right ventricular systolic area is 24.00 cm which is severely dilated. Global right ventricular systolic function is moderately reduced. The right ventricular fractional area change is 23.32% which is moderately abnormal. The tricuspid annular plane systolic excursion is 1.1 cm consistent with reduced right ventricular systolic function.Right Heart Catheters/Leads: Catheter consistent with pacemaker or defibrillator lead seen in the right heart.Aortic Valve: The aortic valve is trileaflet and is calcified with normal excursion. Normal Doppler interrogation flow patterns without stenosis or insufficiency.Mitral Valve: The mitral valve leaflets appear tethered consistent with papillary muscle displacement or annular dilatation. Trace mitral regurgitation is present.Tricuspid Valve: The tricuspid valve is structurally normal.Pulmonic Valve: The pulmonic valve is not well visualized.Aorta: The aorta at the level of the sinuses of Valsalva is normal in diameter at 3.60 cm.Pulmonary Artery: The tricuspid regurgitant velocity is 2.85 m/s, and with an assumed right atrial pressure of 8 mmHg, the estimated pulmonary artery systolic pressure is mildly elevated at 40.5 mmHg.Pericardium: There is small inferiorly located pericardial effusion.Comparison: Prior examination reports are available and were reviewed for comparison purposes. The most recent available prior study is from 10/20. There is no significant change in the findings since the last echocardiogram. Summary: 1. Mildly increased left ventricular cavity size. 2. Normal left ventricular wall thickness. 3. Moderately to severely reduced global left ventricular systolic function. 4. Segmental wall motion abnormalities (see above). 5. Left ventricular diastolic function was not assessed. 6. Mildly enlarged right ventricle. 7. Moderately reduced right ventricular systolic function. 8. Moderately dilated left atrial size. 9. Normal atrial septum.10. Trileaflet aortic valve and aortic sclerosis.11. No aortic stenosis or insufficiency.12. Tethering of the mitral valve leaflets.13. Trace mitral regurgitation.14. Mildly elevated pulmonary artery systolic pressure.15. Normal aortic root diameter for body size.16. Small inferior pericardial effusion.014970 Smadar Kort MD, FACC, FASEElectronically signed by 014970 Smadar Kort MD, FACC, FASE on 12/16/2014 at 11:20:09 AM *** Final ***Attending Cardiologist:   KORT, SMADAR Ordered By:               D'AMBROSIO, CHRISTOPHER Order Date:               December 15, 2014 1:10 PMCompletion Date:          December 16, 2014 10:48 AMEncounter Number:         010082930362Accession Number:         6055082Images were reviewed and interpreted by Attending Cardiologist: Dr. KORT, SMADAR Electronically Signed On: December 16, 2014 11:20 AM by Dr KORT, SMADAR STONY BROOK UNIVERSITY HOSPITALDEPARTMENT OF RADIOLOGYSTONY BROOK, NY 11794-7300";
	//var actualReport = "Title : ECHO Interpretation. Report Data : Left Ventricle - Structure and Systolic Function: The left ventricular cavity size is mildly increased. Ventricular wall thickness is normal. Cardiomyopathy with Left ventricular hypertrophy.The relative wall thickness is normal (0.31). Global left ventricular systolic function is moderately to severely reduced. The ejection fraction is 35% by visual estimation. Left ventricular basal fractional shortening is decreased. The basal inferolateral wall is akinetic. The mid inferolateral wall is akinetic. The basal inferior wall is akinetic. The lateral apex is akinetic. The inferior apex is akinetic.Left Ventricle - Diastole:Left ventricular diastolic function was not assessed.Left Atrium: The left atrium is moderately dilated in size.Right Atrium: The right atrium is normal in size.Atrial Septum: Atrial septum is structurally normal and intact on 2D and color Doppler interrogation.Right Ventricle: The right ventricular size is mildly enlarged. The right ventricular diastolic area is 31.30 cm which is mildly dilated. The right ventricular systolic area is 24.00 cm which is severely dilated. Global right ventricular systolic function is moderately reduced. The right ventricular fractional area change is 23.32% which is moderately abnormal. The tricuspid annular plane systolic excursion is 1.1 cm consistent with reduced right ventricular systolic function.Right Heart Catheters/Leads: Catheter consistent with pacemaker or defibrillator lead seen in the right heart.Aortic Valve: The aortic valve is trileaflet and is calcified with normal excursion. Normal Doppler interrogation flow patterns without stenosis or insufficiency.Mitral Valve: The mitral valve leaflets appear tethered consistent with papillary muscle displacement or annular dilatation. Trace mitral regurgitation is present.Tricuspid Valve: The tricuspid valve is structurally normal.Pulmonic Valve: The pulmonic valve is not well visualized.Aorta: The aorta at the level of the sinuses of Valsalva is normal in diameter at 3.60 cm.Pulmonary Artery: The tricuspid regurgitant velocity is 2.85 m/s, and with an assumed right atrial pressure of 8 mmHg, the estimated pulmonary artery systolic pressure is mildly elevated at 40.5 mmHg.Pericardium: There is small inferiorly located pericardial effusion.Comparison: Prior examination reports are available and were reviewed for comparison purposes. The most recent available prior study is from 10/20. There is no significant change in the findings since the last echocardiogram. Summary: 1. Mildly increased left ventricular cavity size. 2. Normal left ventricular wall thickness. 3. Moderately to severely reduced global left ventricular systolic function. 4. Segmental wall motion abnormalities (see above). 5. Left ventricular diastolic function was not assessed. 6. Mildly enlarged right ventricle. 7. Moderately reduced right ventricular systolic function. 8. Moderately dilated left atrial size. 9. Normal atrial septum.10. Trileaflet aortic valve and aortic sclerosis.11. No aortic stenosis or insufficiency.12. Tethering of the mitral valve leaflets.13. Trace mitral regurgitation.14. Mildly elevated pulmonary artery systolic pressure.15. Normal aortic root diameter for body size.16. Small inferior pericardial effusion.014970 Smadar Kort MD, FACC, FASEElectronically signed by 014970 Smadar Kort MD, FACC, FASE on 12/16/2014 at 11:20:09 AM *** Final ***Attending Cardiologist:   KORT, SMADAR Ordered By:               D'AMBROSIO, CHRISTOPHER Order Date:               December 15, 2014 1:10 PMCompletion Date:          December 16, 2014 10:48 AMEncounter Number:         010082930362Accession Number:         6055082Images were reviewed and interpreted by Attending Cardiologist: Dr KORT, SMADAR Electronically Signed On: December 16, 2014 11:20 AM by Dr KORT, SMADAR STONY BROOK UNIVERSITY HOSPITALDEPARTMENT OF RADIOLOGYSTONY BROOK, NY 11794-7300";
	var actualReport = "Title : ECHO Interpretation. Report Data : Left Ventricle - Structure and Systolic Function: The left ventricular cavity size is mildly increased. Ventricular wall thickness is normal. Cardiomyopathy. with left ventricular systolic dysfunction.The relative wall thickness is normal (0.31). Global left ventricular systolic function is moderately to severely reduced.Pulmonary Hypertension present.The ejection fraction is 35% by visual estimation. Left ventricular basal fractional shortening is decreased. The basal inferolateral wall is akinetic. The mid inferolateral wall is akinetic. The basal inferior wall is akinetic. The lateral apex is akinetic. The inferior apex is akinetic.Left Ventricle - Diastole:Left ventricular diastolic function was not assessed.Left Atrium: The left atrium is moderately dilated in size.Right Atrium: The right atrium is normal in size.Atrial Septum: Atrial septum is structurally normal and intact on 2D and color Doppler interrogation.Right Ventricle: The right ventricular size is mildly enlarged. The right ventricular diastolic area is 31.30 cm which is mildly dilated. The right ventricular systolic area is 24.00 cm which is severely dilated. Global right ventricular systolic function is moderately reduced. The right ventricular fractional area change is 23.32% which is moderately abnormal. The tricuspid annular plane systolic excursion is 1.1 cm consistent with reduced right ventricular systolic function.Right Heart Catheters/Leads: Catheter consistent with pacemaker or defibrillator lead seen in the right heart.Aortic Valve: The aortic valve is trileaflet and is calcified with normal excursion. Normal Doppler interrogation flow patterns without stenosis or insufficiency.Mitral Valve: The mitral valve leaflets appear tethered consistent with papillary muscle displacement or annular dilatation. Trace mitral regurgitation is present.Tricuspid Valve: The tricuspid valve is structurally normal.Pulmonic Valve: The pulmonic valve is not well visualized.Aorta: The aorta at the level of the sinuses of Valsalva is normal in diameter at 3.60 cm.Pulmonary Artery: The tricuspid regurgitant velocity is 2.85 m/s, and with an assumed right atrial pressure of 8 mmHg, the estimated pulmonary artery systolic pressure is mildly elevated at 40.5 mmHg.Pericardium: There is small inferiorly located pericardial effusion.Comparison: Prior examination reports are available and were reviewed for comparison purposes. The most recent available prior study is from 10/20. There is no significant change in the findings since the last echocardiogram. Summary: 1. Mildly increased left ventricular cavity size. 2. Normal left ventricular wall thickness. 3. Moderately to severely reduced global left ventricular systolic function. 4. Segmental wall motion abnormalities (see above). 5. Left ventricular diastolic function was not assessed. 6. Mildly enlarged right ventricle. 7. Moderately reduced right ventricular systolic function. 8. Moderately dilated left atrial size. 9. Normal atrial septum.10. Trileaflet aortic valve and aortic sclerosis.11. No aortic stenosis or insufficiency.12. Tethering of the mitral valve leaflets.13. Trace mitral regurgitation.14. Mildly elevated pulmonary artery systolic pressure.15. Normal aortic root diameter for body size.16. Small inferior pericardial effusion.014970 Smadar Kort MD, FACC, FASEElectronically signed by 014970 Smadar Kort MD, FACC, FASE on 12/16/2014 at 11:20:09 AM *** Final ***Attending Cardiologist:   KORT, SMADAR Ordered By:               D'AMBROSIO, CHRISTOPHER Order Date:               December 15, 2014 1:10 PMCompletion Date:          December 16, 2014 10:48 AMEncounter Number:         010082930362Accession Number:         6055082Images were reviewed and interpreted by Attending Cardiologist: Dr KORT, SMADAR Electronically Signed On: December 16, 2014 11:20 AM by Dr KORT, SMADAR STONY BROOK UNIVERSITY HOSPITALDEPARTMENT OF RADIOLOGYSTONY BROOK, NY 11794-7300";
	//var actualReport = "Title : ECHO Interpretation. Report Data : Left Ventricle - Structure and Systolic Function: The left ventricular cavity size is normal. Ventricular wall thickness is normal. The relative wall thickness is normal (0.42). Global left ventricular systolic function is mildly to moderately reduced based on limited views. The ejection fraction is 40-45% by visual estimation. Left ventricular basal fractional shortening is decreased. Not all segments were well imaged.Left Ventricle - Diastole:The Doppler derived transmitral left ventricular inflow velocity pattern is A wave dominant. The Doppler derived early diastolic deceleration time is prolonged at 278 msec. The velocity of the early diastolic septal mitral annular movement, as determined by tissue Doppler imaging is reduced at 0.027 m/s. The velocity of the early diastolic lateral mitral annular movement, as determined by tissue Doppler imaging is reduced at 0.04 m/s. The overall diastolic function is mildly impaired (grade I, impaired relaxation pattern) with normal left ventricular filling pressures.Left Atrium: The left atrium is normal in size.Right Atrium: The right atrium is moderately dilated in size.Atrial Septum: Atrial septum is structurally normal and intact on 2D and color Doppler interrogation.Right Ventricle: The right ventricular size is severely enlarged. Global right ventricular systolic function is severely reduced. The tricuspid annular plane systolic excursion is 0.8 cm consistent with reduced right ventricular systolic function.Aortic Valve: The aortic valve is calcified with normal excursion. Trace to mild aortic valve insufficiency is present.Mitral Valve: There is mild posterior mitral annular calcification. The mitral valve leaflets are mildly thickened. Mitral leaflet mobility is normal. Systolic anterior motion of the mitral valve is not seen. Prolapse of the mitral valve is not seen. No evidence of mitral stenosis is seen. Mild mitral regurgitation is present.Tricuspid Valve: The tricuspid valve leaflets are mildly thickened but open well. Severe tricuspid regurgitation is present.Pulmonic Valve: The pulmonic valve is normal. Mild pulmonary regurgitation is seen.Aorta: The aorta at the level of the sinuses of Valsalva is normal in diameter at 3.90 cm.Pulmonary Artery: The tricuspid regurgitant velocity is 4.08 m/s, and with an assumed right atrial pressure of 15 mmHg, the estimated pulmonary artery systolic pressure is severely elevated at 81.6 mmHg.Pericardium: No pericardial effusion seen.Comparison: There are no prior studies available on this patient for comparison purposes. Summary: 1. Normal left ventricular cavity size. 2. Normal left ventricular wall thickness. 3. Mildly to moderately reduced global left ventricular systolic function based on limited views. 4. Segmental wall motion abnormalities could not be accurately ssessed. 5. Mild diastolic dysfunction with normal left ventricular filling pressures. 6. Severely enlarged right ventricle. 7. Severely reduced right ventricular systolic function. 8. Moderately dilated right atrial size. 9. Aortic valve sclerosis.10. Trace to mild aortic insufficiency.11. Mild posterior mitral annular calcification with mild mitral valve leaflet thickening.12. Mild mitral regurgitation.13. Severe tricuspid regurgitation.14. Mild pulmonary regurgitation.15. Severely elevated pulmonary artery systolic pressure.012640 Jordan P Katz MD, FACCElectronically signed by 012640 Jordan P Katz MD, FACC on 12/29/2014 at 2:32:27 PM *** Final ***Attending Cardiologist:   KATZ, JORDAN Ordered By:               PEYSIN, KONSTANTIN Order Date:               December 28, 2014 2:05 AMCompletion Date:          December 29, 2014 1:13 PMEncounter Number:         010083260025Accession Number:         6068376Images were reviewed and interpreted by Attending Cardiologist: Dr. KATZ, JORDAN Electronically Signed On: December 29, 2014 2:32 PM by Dr KATZ, JORDAN STONY BROOK UNIVERSITY HOSPITALDEPARTMENT OF RADIOLOGYSTONY BROOK, NY 11794-7300";
	//var actualReport = "Title : ECHO Interpretation. Report Data : Left Ventricle - Structure and Systolic Function: The left ventricular cavity size is normal. Ventricular wall thickness is normal.Small inferior pericardial effusion The relative wall thickness is normal (0.42). Global left ventricular systolic function is mildly to moderately reduced based on limited views. Pulmonary Hypertension. The ejection fraction is 40-45% by visual estimation. Left ventricular basal fractional shortening is decreased. Not all segments were well imaged.Left Ventricle - Diastole:The Doppler derived transmitral left ventricular inflow velocity pattern is A wave dominant. The Doppler derived early diastolic deceleration time is prolonged at 278 msec. The velocity of the early diastolic septal mitral annular movement, as determined by tissue Doppler imaging is reduced at 0.027 m/s. The velocity of the early diastolic lateral mitral annular movement, as determined by tissue Doppler imaging is reduced at 0.04 m/s. The overall diastolic function is mildly impaired (grade I, impaired relaxation pattern) with normal left ventricular filling pressures.Left Atrium: The left atrium is normal in size.Right Atrium: The right atrium is moderately dilated in size.Atrial Septum: Atrial septum is structurally normal and intact on 2D and color Doppler interrogation.Right Ventricle: The right ventricular size is severely enlarged. Global right ventricular systolic function is severely reduced. The tricuspid annular plane systolic excursion is 0.8 cm consistent with reduced right ventricular systolic function.Aortic Valve: The aortic valve is calcified with normal excursion. Trace to mild aortic valve insufficiency is present.Mitral Valve: There is mild posterior mitral annular calcification. The mitral valve leaflets are mildly thickened. Mitral leaflet mobility is normal. Systolic anterior motion of the mitral valve is not seen. Prolapse of the mitral valve is not seen. No evidence of mitral stenosis is seen. Mild mitral regurgitation is present.Tricuspid Valve: The tricuspid valve leaflets are mildly thickened but open well. Severe tricuspid regurgitation is present.Pulmonic Valve: The pulmonic valve is normal. Mild pulmonary regurgitation is seen.Aorta: The aorta at the level of the sinuses of Valsalva is normal in diameter at 3.90 cm.Pulmonary Artery: The tricuspid regurgitant velocity is 4.08 m/s, and with an assumed right atrial pressure of 15 mmHg, the estimated pulmonary artery systolic pressure is severely elevated at 81.6 mmHg.Pericardium: No pericardial effusion seen.Comparison: There are no prior studies available on this patient for comparison purposes. Summary: 1. Normal left ventricular cavity size. 2. Normal left ventricular wall thickness. 3. Mildly to moderately reduced global left ventricular systolic function based on limited views. 4. Segmental wall motion abnormalities could not be accurately ssessed. 5. Mild diastolic dysfunction with normal left ventricular filling pressures. 6. Severely enlarged right ventricle. 7. Severely reduced right ventricular systolic function. 8. Moderately dilated right atrial size. 9. Aortic valve sclerosis.10. Trace to mild aortic insufficiency.11. Mild posterior mitral annular calcification with mild mitral valve leaflet thickening.12. Mild mitral regurgitation.13. Severe tricuspid regurgitation.14. Mild pulmonary regurgitation.15. Severely elevated pulmonary artery systolic pressure.012640 Jordan P Katz MD, FACCElectronically signed by 012640 Jordan P Katz MD, FACC on 12/29/2014 at 2:32:27 PM *** Final ***Attending Cardiologist:   KATZ, JORDAN Ordered By:               PEYSIN, KONSTANTIN Order Date:               December 28, 2014 2:05 AMCompletion Date:          December 29, 2014 1:13 PMEncounter Number:         010083260025Accession Number:         6068376Images were reviewed and interpreted by Attending Cardiologist: Dr. KATZ, JORDAN Electronically Signed On: December 29, 2014 2:32 PM by Dr KATZ, JORDAN STONY BROOK UNIVERSITY HOSPITALDEPARTMENT OF RADIOLOGYSTONY BROOK, NY 11794-7300";

	content_to_check_for_comorb = actualReport;
	//alert("content_to_check_for_comorb is");
	//alert(content_to_check_for_comorb);
	var startIndex = actualReport.indexOf('Title');
	//console.log("PS startIndex"+ startIndex);
	var endIndex = actualReport.indexOf("Title", startIndex+1);
	// endIndex is the end indexof this report purpose unclear looks like it finds index of title after title occurence
	//console.lofg("PS endIndex"+ endIndex);
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
		
		//**************
		//I am writing from here
		//alert("imp must be 1");
		//alert($.inArray("Cardiomyopathy",content_to_check_for_comorb));
		
		/*
		 if (content_to_check_for_comorb.search("Pericardial Effusion")!= -1){
			alert("inside IF of Pericardial Effusion");	
						
			
			tableBody += "<tr><td><table><tr><td>"
						  + "<span style='color: red'>"
						  + "<input type='checkbox' id='ckd' value='GROUP' onclick=\"unCheck('ckd','ckdChkGrp');\">Pericardial Effusion :</span>"
						  + "<br><div id='ckdChkGrp' style='margin-left: 0px;'><table>";
		}
		tableBody += "</table></td></tr></table></td></tr>";
		
		if (content_to_check_for_comorb.search("Pulmonary Hypertension")!= -1){
			alert("inside IF of Pulmonary Hypertension");	
						
			
			tableBody += "<tr><td><table><tr><td>"
						  + "<span style='color: red'>"
						  + "<input type='checkbox' id='ckd' value='GROUP' onclick=\"unCheck('ckd','ckdChkGrp');\">Pulmonary Hypertension :</span>"
						  + "<br><div id='ckdChkGrp' style='margin-left: 0px;'><table>";
		}
		tableBody += "</table></td></tr></table></td></tr>";
		 */
		
		
		tableBody = buildECHObody(i, pdfContent, tableBody);
		//console.log("PS tableBody#################"+tableBody);
		
		//This onwards is the Ejection fraction part......
		// if (content_to_check_for_comorb.search("Ejection Fraction")!= -1|| content_to_check_for_comorb.search("Ejection Fraction".toLowerCase()) != -1 || content_to_check_for_comorb.search("Ejection Fraction".toUpperCase()) != -1){
		// 	//alert("inside IF of Ejection Fraction");	
		// 	var value_of_Ejection_Fraction= ejectionFraction();
		// 	//alert("value returned at line 153 is");
		// 	//alert(value_of_Ejection_Fraction);
		// 	var val = parseInt(value_of_Ejection_Fraction);
		// 	var BNP_available = 1;
		// 	var BNP_value = 200;
		// 	if(val>55){
		// 		//alert("greater than 55");
		// 		tableBody += "<tr><td><table><tr><td>"
		// 			  + "<span style='color: black'>"
		// 			  + "<input type='checkbox' id='ckd' value='GROUP' onclick=\"unCheck('ckd','ckdChkGrp');\">Diastolic Heart Failure :</span>"
		// 			  + "<br><div id='ckdChkGrp' style='margin-left: 0px;'><table>";
			
		// 		if(check_if_report_positive_for_Diastolic_Dysfunction()==1){
		// 			if((BNP_available==1) && (BNP_value>500)){
						
						
						
						
		// 				tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 					  + "<td id='RfAcuteCol'><span style='color: pink; margin-left: 120px'>"
		// 					  + "<input type='checkbox' value='Hypertrophic Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 					  + "Acute&nbsp;&nbsp;</a></span>";
		// 				tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black; margin-left: 120px'>"
		// 				  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Chronic &nbsp;&nbsp;</a></span>";
		// 				tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 					  + "<td id='RfAcuteCol'><span style='color: black; margin-left: 120px'>"
		// 					  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 					  + "Acute on Chronic &nbsp;&nbsp;</a></span>";
		// 			}
		// 			if((BNP_available==0) || (BNP_value<500)){
		// 				tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 					  + "<td id='RfAcuteCol'><span style='color: black; margin-left: 120px'>"
		// 					  + "<input type='checkbox' value='Hypertrophic Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 					  + "Acute&nbsp;&nbsp;</a></span>";
		// 				tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: blue; margin-left: 120px'>"
		// 				  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Chronic &nbsp;&nbsp;</a></span>";
		// 				tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 					  + "<td id='RfAcuteCol'><span style='color: black; margin-left: 120px'>"
		// 					  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 					  + "Acute on Chronic &nbsp;&nbsp;</a></span>";
		// 			}
		// 		}
			
		// 	}
		// 	if(val<55){
		// 		//alert("less than 55");
		// 		tableBody += "<tr><td><table><tr><td>"
		// 			  + "<span style='color: black'>"
		// 			  + "<input type='checkbox' id='ckd' value='GROUP' onclick=\"unCheck('ckd','ckdChkGrp');\">Systolic Heart Failure :</span>"
		// 			  + "<br><div id='ckdChkGrp' style='margin-left: 0px;'><table>";
		// 		if((BNP_available==1) && (BNP_value>500)){
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: blue; margin-left: 120px'>"
		// 				  + "<input type='checkbox' value='Hypertrophic Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Acute&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 			  + "<td id='RfAcuteCol'><span style='color: black;margin-left: 120px'>"
		// 			  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 			  + "Chronic &nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black; margin-left: 120px'>"
		// 				  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Acute on Chronic &nbsp;&nbsp;</a></span>";
		// 		}
		// 		if((BNP_available==0) || (BNP_value<500)){
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black; margin-left: 120px'>"
		// 				  + "<input type='checkbox' value='Hypertrophic Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Acute&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 			  + "<td id='RfAcuteCol'><span style='color: blue; margin-left: 120px'>"
		// 			  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 			  + "Chronic &nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black; margin-left: 120px'>"
		// 				  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Acute on Chronic &nbsp;&nbsp;</a></span>";
					
		// 		}
		// 	}
			
			
		// }
		// tableBody += "</table></td></tr></table></td></tr>";
		
		// //........till here Ejection Fraction
		
		
		
		
		// if (content_to_check_for_comorb.search("Cardiomyopathy")!= -1){
		// 	//alert("inside IF of Cardiomyopathy");						

		// 	result = cardiomyopathy();			
		// 	if(result==0){
		// 		alert("Zero returned!");
		// 		newCC = 1;
		// 		tableBody += "<tr><td><table><tr><td>"
		// 				  + "<span style='color: black'>"
		// 				  + "<input type='checkbox' id='ckd' value='GROUP' onclick=\"unCheck('ckd','ckdChkGrp');\">Cardiomyopathy :</span>"
		// 				  + "<br><div id='ckdChkGrp' style='margin-left: 120px;'><table>";
				
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 					  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 					  + "<input type='checkbox' value='Hypertrophic Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 					  + "Hypertrophic Cardiomyopathy&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Restrictive Cardiomyopathy &nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value='Dilated Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Dilated Cardiomyopathy&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value='Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Cardiomyopathy&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value=' Cardiomyopathy- Unspecified ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + " Cardiomyopathy- Unspecified &nbsp;&nbsp;</a></span>";
				
				
		// 	}		

		// 	if (result != 0){
		// 		newCC = 1;
		// 		tableBody += "<tr><td><table><tr><td>"
		// 				  + "<span style='color: black'>"
		// 				  + "<input type='checkbox' id='ckd' value='GROUP' onclick=\"unCheck('ckd','ckdChkGrp');\">Cardiomyopathy :</span>"
		// 				  + "<br><div id='ckdChkGrp' style='margin-left: 120px;'><table>";
				
		// 		if (result == 1){
					
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 					  + "<td id='RfAcuteCol'><span style='color: blue;'>"
		// 					  + "<input type='checkbox' value='Hypertrophic Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 					  + "Hypertrophic Cardiomyopathy&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Restrictive Cardiomyopathy &nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value='Dilated Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Dilated Cardiomyopathy&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value='Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Cardiomyopathy&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value=' Cardiomyopathy- Unspecified ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + " Cardiomyopathy- Unspecified &nbsp;&nbsp;</a></span>";
		// 		}
				
		// 		if (result == 2){
					
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 					  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 					  + "<input type='checkbox' value='Hypertrophic Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 					  + "Hypertrophic Cardiomyopathy&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value='Restrictive Cardiomyopathy ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Restrictive Cardiomyopathy &nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: blue;'>"
		// 				  + "<input type='checkbox' value='Dilated Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Dilated Cardiomyopathy&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value='Cardiomyopathy' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + "Cardiomyopathy&nbsp;&nbsp;</a></span>";
		// 			tableBody += "<tr onmouseover=\"mouseOverPara('imageRfAcute','RfAcuteCol');\" onmouseout=\"mouseOutPara('imageRfAcute','RfAcuteCol');\">"
		// 				  + "<td id='RfAcuteCol'><span style='color: black;'>"
		// 				  + "<input type='checkbox' value=' Cardiomyopathy- Unspecified ' onclick=\"checkMain('ckd','ckdChkGrp');\">"
		// 				  + " Cardiomyopathy- Unspecified &nbsp;&nbsp;</a></span>";
		// 		}
				
		// 	}
		// }
		
		// //to here
		// //**************
		
		
		
		
		
		
		
		
	}
	  
	$('#echobody').html(tableBody);
	return;    
}


function getPdfDateECHO(content) {
	var sentences = new Array();
	sentences = break_sentences(content, ".");
	content_of_report = sentences;
	//var title_date = "Confirmed by"; // TODO: change according to report data of ECHO
	var title_date = "Electronically Signed On:";
	var pdf_date = "";

	for (var i = 0; i < sentences.length; i++) {
		if (sentences[i].search(title_date) != -1 || sentences[i].search(title_date.toLowerCase()) != -1 || sentences[i].search(title_date.toUpperCase()) != -1) {
			var pos = sentences[i].indexOf(title_date);
			pdf_date = sentences[i].split("Electronically Signed On:")[1];
			//alert(pdf_date)
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




function cardiomyopathy() {
	//alert("cardiomyopathy1");
	var sentences = new Array();
	//alert("cardiomyopathy2");
	sentences = content_of_report;
	//alert("cardiomyopathy3");
	//alert(sentences);
		
	for (var i = 0; i < sentences.length; i++) {
		//alert(sentences[i]);
		if (sentences[i].search("Left ventricular hypertrophy") != -1 || sentences[i].search("Left ventricular hypertrophy") != -1 || sentences[i].search("Left ventricular hypertrophy") != -1){ 
			//alert("cardiomyopathy4");
			return 1; //  1 is for Hypertrophic Cardiomyopthy 
			
		}
		if (sentences[i].search("left ventricular systolic dysfunction") != -1 || sentences[i].search("left ventricular systolic dysfunction") != -1 || sentences[i].search("left ventricular systolic dysfunction") != -1) {
			//alert("cardiomyopathy5");
			return 2; //  1 is for left ventricular systolic dysfunction
			
		}
		}
			
	//alert("cardiomyopathy6");	
	return 0;
	}

function ejectionFraction() {
	//alert("ejectionFraction1");
	var sentences = new Array();
	//alert("ejectionFraction2");
	sentences = content_of_report;
	//alert("ejectionFraction3");
	//alert(sentences);
	var value = 25;	
	for (var i = 0; i < sentences.length; i++) {
		//alert("Inside FOR");
		if (sentences[i].search("Ejection Fraction is") != -1 ){ 
			//alert("Inside FOR Inside IF");
			var result = (sentences[i].split(" "));
			//alert("result");
			//alert(result);
			//value = (result.search("Ejection Fraction is"));
			for (var j = 0; j < result.length-2; j++){
				if (result[j]=="Ejection"){
					if(result[j+1]=="Fraction"){
						if(result[j+2]=="is"){
							value=result[j+3];
							//alert("found value!");
							//alert(value);
						}
					}
				}
			}			
			return value; //   			
		}		
		}	
	return 0;
	}

function check_if_report_positive_for_Diastolic_Dysfunction() {
	//alert("cardiomyopathy1");
	var sentences = new Array();
	//alert("cardiomyopathy2");
	sentences = content_of_report;
	//alert("cardiomyopathy3");
	//alert("Inside check_if_report_positive_for_Diastolic_Dysfunction");	
	var phrase = "Diastolic Dysfunction";
	//alert("going to check()");
	var found_positive= check(sentences,phrase);
	//alert("Successfully searched for dystolic dysfunction");

			
	//alert("cardiomyopathy6");	
	return found_positive;
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
        	console.log("*****HERE*********");
            continue;
        }
        var dateArr = getPdfDateECHO(contents);
        dateArr[1] = dateArr[1].replace(/,/g, ''); // Commas occur in the doctor name in case of ECG report which we need to remove before committing
        var pvalueStr = "GROUP#$#" + final_comorb[i].display + "#$#" + final_comorb[i].level.length + "#$#" + echoPDFTitles[index] + "," + dateArr.join(",");
       console.log("Akasha"+ final_comorb[i].display);
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