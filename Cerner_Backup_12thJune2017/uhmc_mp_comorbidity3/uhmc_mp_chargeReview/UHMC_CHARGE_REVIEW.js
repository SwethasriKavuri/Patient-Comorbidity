  
/*****************************************************************************
 
        Source file name: UHMC_MP_MULTIPLE_DC.js
		Purpose: Return data to  uhmc_mp_multiple_dc.html
 
 
 
******************************************************************************
 
 
;~DB~************************************************************************
;    *                      GENERATED MODIFICATION CONTROL LOG              *
;    ************************************************************************
;    *                                                                      *
;    *Mod Date       Engineeer          Comment                             *
;    *--- ---------- ------------------ ----------------------------------- *
;     001 09/2010    Hasit Shah         Initial Release
;	      01/2014	 Neil Mendoza		Added logic for PatientKeeper links
;       															        *
;                                                                           *
;~DE~************************************************************************
 
;
;~END~ ******************  END OF ALL MODCONTROL BLOCKS  ********************/




// Regular expressions for normalizing white space.
var whtSpEnds 			= new RegExp("^\\s*|\\s*$", "g");
var whtSpMult 			= new RegExp("\\s\\s+", "g");
var personId = "";
var encntrId = "";
var prsnlId = "";
 
var curDateTime = "";
 
var pid2 = ""; 
var eid2 = ""; 
  var orderCnt = 0;
 var paramString = "";
 
 var tableBody = ""
 
function getEvents(person_id,encntr_id){


getIds2()
//getPatientIds();
//modifier25Present();
attestationCheck();

// Call functions to format html and populate sections
  //alert(person_id);
  //alert(encntr_id);
	
	
//var PowerOrdersMPageUtils = window.external.DiscernObjectFactory("POWERORDERS");
//var m_hMOEW = PowerOrdersMPageUtils.CreateMOEW(person_id, encntr_id, 0, 2, 127);
 //PowerOrdersMPageUtils.DisplayMOEW(m_hMOEW);
 
 //buildOrderTree(person_id,encntr_id);
 
//getPatientIds();
 //getIDs();

/*
 tableBody += "<table\>"
 

  tableBody += "<tr><td>" + "<INPUT type='radio' id='Presence'  name='ans' value='" +
             + '22'  + "'>Physical Presence Documentation:</td></tr>"
			 
 tableBody += "<tr><td>        I was physically present during the service to the patient and/or personally examined the patient  </td></tr>"		 
			 
 tableBody += "<tr><td>" + "<INPUT type='radio' id='Review'   name='ans' value='" +
             + '22'  + "'>Physician Review Documentation </td></tr>"
  tableBody += "<tr><td>       I personally reviewed the care provided by the resident during or immediately after the patient's visit </td></tr>"		 

  tableBody += "<tr><td>" + "<INPUT type='radio' id='NR'   name='ans' value='" +
             + '22'  + "'>NR </td></tr>"
  tableBody += "<tr><td>  </td></tr>"		 

 
  tableBody += "</table>"
  document.getElementById('OrderTable').innerHTML   = tableBody
  */

  //alert("test")
    ActiveOrderTable();
//	getFolders();
}

 function SignEvent(person_id,encntr_id){
var param = ""
 //testing
 //MPAGES_EVENT("ORDERS",person_id+"|"+encntr_id+"|{ORDER| 97581509.00|5|0||1}|16|0")

 //MPAGES_EVENT("ORDERS","2526892.00|14479359.00|{ORDER|97581509|0|0|0|1}|0|{2|127}{3|127}|32")
 
 //MPAGES_EVENT("ORDERS","2526892.00|14479359.00|{ORDER|97581509|0|0|0|1}|0|{2|127}{3|127}|32")
 
 //CCLLINK("UHMC_MP_ECLIPSYS_DRIVER",  "^MINE^",1)
 
 //APPLINK(0,"  ","/PERSONID="+person_id+"/ENCNTRID="+encntr_id+"/FIRSTTAB=^PowerOrders+^")
 
 //APPLINK(0,"Powerchart.exe","/PERSONID=2526892 /ENCNTRID=14479359 /FIRSTTAB=^PowerOrders+^") 
 //APPLINK(0,"Powerchart.exe","/PERSONID=2526892/ENCNTRID=14479359/FIRSTTAB=^PowerOrders+^")
 
 
//alert(encntr_id); 

// alert("signed");
 
var  physicalPresenceDocumentation = "physicalPresenceDocumentation:" + document.getElementById('presence').checked
var physicianReviewDocumentation = "PhysicianReviewDocumentation:" + document.getElementById('review').checked
 
//var param = stringForClinicalEvent(physicalPresenceDocumentation + ";" + physicianReviewDocumentation,person_id,encntr_id)



if(document.getElementById('Presence').checked){

//alert("Presence")
//param = stringForClinicalEvent("Presence")

param = stringForClinicalEvent("Presence",person_id,encntr_id,"uhmc_mp_phys_attestation")

}

if(document.getElementById('Review').checked){

//alert("Review")
//param = stringForClinicalEvent("Review")

param = stringForClinicalEvent("Review",person_id,encntr_id,"uhmc_mp_phys_attestation")

}

if(document.getElementById('NR').checked){

//alert("NR")
//param = stringForClinicalEvent("Presence")

param = stringForClinicalEvent("NR",person_id,encntr_id,"uhmc_mp_phys_attestation")

}
 //alert(document.getElementById('presence').checked);
// alert(param);
 if(param > "0"){
 CCLLINK("eks_call_synch_event",param,1);
 }
  
} 

  /**
                    * Get the name of the color for this shape
                    * @returns A color string for this shape
                  
 */
 
 function SignAdd25MOD(person_id,encntr_id){
var param = ""
  

param = stringForClinicalEvent("Yes",person_id,encntr_id,"uhmc_add_25MOD")

 //;alert(">")
  
  
 if(param > "0"){
 CCLLINK("eks_call_synch_event",param,1);
 }
  
} 

  
function stringForClinicalEvent(k,person_id,encntr_id,trigger) {
  var ceString  = '^COMMITRULE^,^';
 //alert(trigger)
  var p_id =  personId;
  var e_id =  encntrId;
  
   //   var p_id =  2526891.00
  //  var e_id =  14479356.00
  
  var updateId = "value($USR_PERSONID$)";
 // alert(trigger);
  var textString = k;  
 
 
                        ceString += (personId+ "^,");
                        ceString += ("^"+ encntrId + "^,");

			 ceString += ("^0.0^,^" + trigger + "^,^");//this is your trigger name - this should be whatever you want 

                        ceString += ("<P>USR_PERSONID=");//send this through to the rule so the clinical event is posted by the user of the MPage vs. if you don't, it will be created by the SYSTEM/SYSTEM person id
                        ceString += updateId;
 
                        ceString += ("<P>TEXTVALUE=");
                        ceString += textString;//this is the freetext that the clinician has typed onto the MPage screen...however you can get that put the string here.
 
 
                        ceString += ("<P>COMMENT=");//optional to do in this file - if the comment will always be the same, you can simply set this up in the rule action template.  if you need it to flex, fill out this variable here and send it through to the rule.
                        ceString += "Created by documentation in the Physician Worklist Page";
 
                        ceString += '^';
 
                        return ceString;
}

  


function  getIDs(){
//alert("Test");
/// Initialize the request object
var xmlrequestObj = new XMLCclRequest();

// Get the response
xmlrequestObj.onreadystatechange = function () {

//->  alert (" ready state"+xmlrequestObj.readyState );

   if (xmlrequestObj.readyState == 4 && xmlrequestObj.status == 200) {
      var msgXML = xmlrequestObj.responseText;

      if (msgXML != undefined && msgXML != null) {
      
         var jsonObj = eval('(' + msgXML + ')');
 	   }
  
      if (jsonObj){
 	  
						
	    tableBody = "<table>"
                 +    "<thead>"
				 + 	  "<tr>"
				 +    "<td>Document Type</td><td class='sectionOne'>Latest document scan date</td>"
                 +    "</tr>"		
 		         +    "<tr>";
             
		 // Populate the Eclipsys Chart links into the TableBody variable
		  if(jsonObj.TEMP.URLCOUNT > 0) {
		 
		 if(jsonObj.TEMP.ENTIRECHARTURL > "") {
			tableBody +=
			   "<td><a target=\"_blank\" href=\""+jsonObj.TEMP.ENTIRECHARTURL + '\"' + "> Entire Chart</a> </td>"               
        + "<td>" + jsonObj.TEMP.ENTIRECHARTURLDATE + " </td></tr>"
          }
		  
		 if(jsonObj.TEMP.OUTSIDERADIOLOGYURL > "") {
          
  		   tableBody +=  
				      "<tr>"
 
    + "<td><a target=\"_blank\" href=\""+jsonObj.TEMP.OUTSIDERADIOLOGYURL + '\"' + ">Outside Radiology</a> </td>"     
		        + "<td>" + jsonObj.TEMP.OUTSIDERADIOLOGYURLDATE + " </td>"  
                 +    "</tr>"
				 
				 }
				 
				  if(jsonObj.TEMP.OUTSIDELABSURLDATE > "") {
				               tableBody +=    "<tr>"
               
				    + "<td><a target=\"_blank\" href=\""+jsonObj.TEMP.OUTSIDELABSURL + '\"' + ">Outside Laboratory</a> </td>"   
		            + "<td>" + jsonObj.TEMP.OUTSIDELABSURLDATE + " </td>"  
                  }
 
                 +     "</thead>"
                 +    "<tbody>"
                   
         }
		 else {
 
		    tableBody = "<table>"
                 +    "<thead>"
				 + 	  "<tr>"
				 +    "<td class='sectionOne'>      Patient does not have any Eclipsys Chart Links</td>"
                 +    "</tr>"		
 		         +    "<tr>";
		 
		 }            //end if(jsonObj.TEMP.URLCOUNT > 0) {
  
  
    
 
         // Close the table
         tableBody +=    "</table>"

         // Insert the table into eclipsys_mpage.html
         document.getElementById('eclipsysLink').innerHTML  = tableBody

  }
 
      }  
 
} //function
 
   xmlrequestObj.open('GET', "UHMC_MPAGE_ECLIPSYSLINK");
   xmlrequestObj.send("^MINE^, value($PAT_Personid$)");

 
return;
}
 
 
function ActiveOrderTable(){

/// Initialize the request object
var rhioInfo = new XMLCclRequest();

// Get the response
rhioInfo.onreadystatechange = function () {
   if (rhioInfo.readyState == 4 && rhioInfo.status == 200) {
      var msgRhio = rhioInfo.responseText;
 
      if (msgRhio != undefined && msgRhio != null) {

         var jsonObj = eval('(' + msgRhio + ')');
 	   }
  
   if (msgRhio){
 
 
tableBody = "<table>" 
tableBody += "<tr>"
 tableBody +=  "<th class='MainHeader' > Charge Description </th>" 
  tableBody +=  "<th class='MainHeader' > Charge Status </th>" 
 tableBody +=  "<th class='MainHeader' > Diagnosis </th>" 

  tableBody +=  "<th class='MainHeader'> Ordering Physician</th>" 
  //  tableBody +=  "<th class='MainHeader'> Details D/C</th>" 
 //tableBody +=  "<th class='MainHeader'>    Cancel D/C</th>" 
 tableBody += "</tr>"

buildActiveOrdersTable("Charges",jsonObj);

document.getElementById('PKurl').value = jsonObj.TEMP2.PKURL;
document.getElementById('PKusername').value = jsonObj.TEMP2.PKUSERNAME;
document.getElementById('PKaccountnumber').value = jsonObj.TEMP2.PKACCOUNTNUMBER;
if (jsonObj.TEMP2.PKACCOUNTNUMBER == "NONE") {
	document.getElementById('ReviewPK').title = 
		'Charges may not be available for any of the visit numbers. Please use the "Launch PatientKeeper (for all patients)" link instead.'
	document.getElementById('ReviewPK').disabled = true;
	}

buildDiagnosisTable (jsonObj)
buildEMModifier(jsonObj)

/*	 
Admit
Condition
Vital Signs
Activity
Notifications
Assessment
Interventions
Diet
Laboratory
Blood Bank
Respiratory
Diagnostic Tests
Radiology
Consults
 */
	 
   }  
 
 
 

}

  

 

} //function
   //  Call the ccl progam and send the parameter string
   rhioInfo.open('GET', "UHMC_MP_GET_AMB_CHARGES");
    
	var paramString = "^MINE^,value($PAT_Personid$),value($VIS_EncntrId$),value($USR_Personid$)"
	
  rhioInfo.send(paramString);
 
 
 
  //MPAGES_EVENT("ORDERS", person_id+"|"+encntr_id+"|{ORDER|0|0|0|0|0}|0|{2|127}{3|127}|8|0")

 
 
 /*
var PowerOrdersMPageUtils = window.external.DiscernObjectFactory("POWERORDERS");
var m_hMOEW = PowerOrdersMPageUtils.CreateMOEW( person_id, encntr_id, 16, 2, 127);
PowerOrdersMPageUtils.DisplayMOEW(m_hMOEW);
*/
  
 
return;
}
 
 function buildActiveOrdersTable(clinicalCatagory,activeOrders){

 
 var orderDetails = ""
 
 
  curDateTime = activeOrders.TEMP2.CURDATETIME;
 
 
 
 tableBody += "<tr>"
 tableBody +=  "<th class='CatalogTypeHeader' > </th>" 
  tableBody +=  "<th class='CatalogTypeHeader' >   </th>" 
    tableBody +=  "<th class='CatalogTypeHeader' >   </th>" 
    tableBody +=  "<th class='CatalogTypeHeader' >   </th>" 
 
 tableBody += "</tr>"

 
 for ( var j = 0; j < activeOrders.TEMP2.ORDERCNT; j++) {
 
 orderDetails = "Order details:  \n"+ activeOrders.TEMP2.ORDERS[j].ORDERDETAILS 
 tableBody += " <tr><td  ' title=' " + orderDetails + "'> &nbsp " + activeOrders.TEMP2.ORDERS[j].ORDERNAME + "</td>"
 tableBody += "<td> &nbsp  " + activeOrders.TEMP2.ORDERS[j].CHARGEPROCESSFLG + "</td>"
 tableBody += "<td > &nbsp  " + activeOrders.TEMP2.ORDERS[j].DIAGNOSISCODES + "</td>"
 tableBody += "<td> &nbsp " + activeOrders.TEMP2.ORDERS[j].ORDERINGPHYSICIAN + "</td>"
 
 
}
 
 
       document.getElementById('OrderTable2').innerHTML   = tableBody
  
$("[title]").tooltip({ 
    track: true, 
    delay: 0, 
    showURL: false, 
    showBody: " - ", 
    fade: 250 ,
	
	   // tweak the position
   offset: [-1, 140]

});
  
 

 
 }
 
 

function OrderEvent(){
 
  
 APPLINK(0,"Powerchart.exe","/PERSONID="+pid2+"/ENCNTRID="+eid2+"/FIRSTTAB=^Orders+^")
 
 
 
// APPLINK(0,"Powerchart.exe","/PERSONID=2526892/ENCNTRID=14479359/FIRSTTAB=^PowerOrders+^")
   
 //  MPAGES_EVENT("ORDERS","2526892.00|14479359.00|{ORDER|97581509|0|0|0|1}|0|{2|127}{3|127}|32")
   
 var personId = "";
var encntrId = "";  

return;
 
  
}


function DiagnosisEvent(){
 
  
// APPLINK(0,"Powerchart.exe","/PERSONID="+pid2+"/ENCNTRID="+eid2+"/FIRSTTAB=^PowerOrders+^")
 APPLINK(0,"Powerchart.exe","/PERSONID="+pid2+"/ENCNTRID="+eid2+"/FIRSTTAB=^Problems%20and%20Diagnoses^")
 
 
// APPLINK(0,"Powerchart.exe","/PERSONID=2526892/ENCNTRID=14479359/FIRSTTAB=^PowerOrders+^")
   
 //  MPAGES_EVENT("ORDERS","2526892.00|14479359.00|{ORDER|97581509|0|0|0|1}|0|{2|127}{3|127}|32")
   
 var personId = "";
var encntrId = "";  

return;
 
  
}


//mod 003

function getFolders(){
         var jsonObj = new Array();
/// Initialize the request object
var rhioInfo = new XMLCclRequest();

// Get the response
rhioInfo.onreadystatechange = function () {
   if (rhioInfo.readyState == 4 && rhioInfo.status == 200) {
      var msgRhio = rhioInfo.responseText;
 
      if (msgRhio != undefined && msgRhio != null) {
 
           jsonObj = eval('(' + msgRhio + ')');
 	   }
  
   if (msgRhio){
 
 ///alert(msgRhio);
 
  //	alert(jsonObj.TEMP2.CURDATETIME)
	 
   }  
 
 
 

}

  //	alert(jsonObj.TEMP2.CURDATETIME)
 

} //function
   //  Call the ccl progam and send the parameter string
   rhioInfo.open('GET', "UHMC_MP_CHARGE_REVIEW_FOLDERS");
    
	var paramString = "^MINE^, " +"0" + ", " + "0" + ",0"
	
  rhioInfo.send(paramString);
 
      $(function(){           $("#tree").dynatree({                  
	  persist: true,                  checkbox: true,                
	  selectMode: 3,                  
	  onPostInit: function(isReloading, isError) {                      
	  logMsg("onPostInit(%o, %o)", isReloading, isError);        
	  this.reactivate();                   },                      
	  onActivate: function(node) {                        
	  $("#echoActive").text(node.data.title);                 },                    
	  onDeactivate: function(node) {                        
	  $("#echoActive").text("-");                     },                    
	  onDblClick: function(node, event) {                            
	  logMsg("onDblClick(%o, %o)", node, event);                              
	  node.toggleExpand();                    }               });     });                        
 
 
  //MPAGES_EVENT("ORDERS", person_id+"|"+encntr_id+"|{ORDER|0|0|0|0|0}|0|{2|127}{3|127}|8|0")

 
 
 /*
var PowerOrdersMPageUtils = window.external.DiscernObjectFactory("POWERORDERS");
var m_hMOEW = PowerOrdersMPageUtils.CreateMOEW( person_id, encntr_id, 16, 2, 127);
PowerOrdersMPageUtils.DisplayMOEW(m_hMOEW);
*/
var tree = $("#tree").dynatree("getTree");

var rootNode = $("#tree").dynatree("getRoot");
   var childNode = rootNode.append({
        title: "E&M stock folder",
		key: "E&M stock folder",
  tooltip: "This child node was added programmatically.",
        isFolder: true
    });

	
	var rootNode = tree.getNodeByKey("E&M stock folder");
   
   
   
   var childNode = rootNode.append({
        title: "E&M stock folder",
		key: "E&M stock folder",
        tooltip: "This child node was added programmatically.",
        isFolder: true
    });


	
	/*
 for ( var j = 0; j < jsonObj.TEMP2.CATALOGTYPES[i].ORDERCNT; j++) {

  tableBody += "<tr><td>" + activeOrders.TEMP2.ORDERS[j].ORDERNAME + "</td>"
   tableBody += "<td>" + activeOrders.TEMP2.ORDERS[j].ORDERDETAILS + "</td>"
  tableBody += "<td>" + activeOrders.TEMP2.ORDERS[j].ORDERINGPHYSICIAN + "</td>"
 
 //tableBody += "<td>" + "<INPUT type='checkbox' checked='true' value='" +
 //            + activeOrders.TEMP2.ORDERS[j].ORDERID  + "'></td></tr>"

 
 
}*/
	
	
 
return;
}



 






 
 


function attestationCheck(){
 //alert("Test");
/// Initialize the request object
var xmlObj = new XMLCclRequest();

// Get the response
xmlObj.onreadystatechange = function () {

 

   if (xmlObj.readyState == 4 && xmlObj.status == 200) {
      var msgXML = xmlObj.responseText;

      if (msgXML != undefined && msgXML != null) {
      
         var jsonObj = eval('(' + msgXML + ')');
 	   }
  
      if (jsonObj){
 	  
 
		 
		 
 var x = "'"+jsonObj.TEMP2.ATTESTATIONVALUE+"'"
 
 
		 //document.getElementById('t25ModCheckbox').checked = 'true'
if(	jsonObj.TEMP2.ATTESTATIONVALUE > "0"){
		document.getElementById(eval(x) ).checked = "true"
} 
		  

         // Insert the table into eclipsys_mpage.html
         //document.getElementById('eclipsysLink').innerHTML  = tableBody

  }
 
      }  
 
} //function

   xmlObj.open('GET', "UHMC_MP_ATTESTATION_CHECK");
   xmlObj.send("^MINE^, value($PAT_Personid$),value($VIS_EncntrId$)");


 
 
return;
}

 



function Add25Mod( ){
var param = ""
alert("add 25 Mod");

 
} 



 function buildDiagnosisTable(jsonData){
var tableBody = ""
 tableBody = "<table>" 
tableBody += "<tr>"
 tableBody +=  "<th class='MainHeader' > Clinical Dx </th>" 
 tableBody +=  "<th class='MainHeader' > Date </th>" 
 tableBody +=  "<th class='MainHeader' > Dx Type </th>" 
  tableBody +=  "<th class='MainHeader'> Code</th>" 
 tableBody += "</tr>"
 
 
 for ( var i = 0; i < jsonData.TEMP2.DIAGCNT; i++) {
 


 
   tableBody += " <tr><td> " + jsonData.TEMP2.DIAGNOSIS[i].DISPLAY+ "</td>"
     tableBody += "<td>"+jsonData.TEMP2.DIAGNOSIS[i].DATE + "</td>"
    tableBody += " <td>"+  jsonData.TEMP2.DIAGNOSIS[i].TYPE + "</td>"
	    tableBody += " <td> &nbsp " + jsonData.TEMP2.DIAGNOSIS[i].CODE + "</td><tr>"
 
  }
  
    document.getElementById('DiagnosisTable').innerHTML   = tableBody
 } 
 


 function buildEMModifier(jsonData){
var tableBody = ""
 tableBody = "<table>" 
 
 
   
   if(jsonData.TEMP2.PRECEPTINGMODIFIER > "0") {
   tableBody += " <tr><td> " + jsonData.TEMP2.PRECEPTINGMODIFIER  
   
   if(jsonData.TEMP2.TWENTYFIVEMODIFIER> "0"){
   
      tableBody += " ; " + jsonData.TEMP2.TWENTYFIVEMODIFIER  
   
   }
   
   else
   {
  tableBody += "<tr><td>" + "<INPUT type='button' id='add25ModButton'  value = ' (+) Add 25 Modifier'   onclick= 'javascript:insert25Modifier()'  "
   
   }
   
   }
   
   else{
   
      if(jsonData.TEMP2.TWENTYFIVEMODIFIER> "0"){
   
      tableBody +=  jsonData.TEMP2.TWENTYFIVEMODIFIER  
   
   }
   
   else
   {
  tableBody += "<tr><td>" + "<INPUT type='button' id='add25ModButton'  value = ' (+) Add 25 Modifier'   onclick= 'javascript:insert25Modifier()'  "
   
   }
   
   
   }

   
   
   
   
   tableBody += "</td>"
 
  // alert( jsonData.TEMP2.TWENTYFIVEMODIFIER)
    
    document.getElementById('modifiers').innerHTML   = tableBody
 } 
 

 function insert25Modifier(){
/// Initialize the request object
SignAdd25MOD(personId,encntrId)

 

var xmlRequestObj = new XMLCclRequest();
 
   xmlRequestObj.open('GET', "UHMC_MP_INSERT_25MOD");
   xmlRequestObj.send("^MINE^,value($VIS_EncntrId$)");

    getEvents()
 return ;
 
 }

 
  
  
  
  
  
 function getIds2(){
 //alert("Test");
/// Initialize the request object
var xmlObj = new XMLCclRequest();

// Get the response
xmlObj.onreadystatechange = function () {

 

   if (xmlObj.readyState == 4 && xmlObj.status == 200) {
      var msgXML = xmlObj.responseText;
      //alert(msgXML)
      if (msgXML != undefined && msgXML != null) {
      
         var jsonObj = eval('(' + msgXML + ')');
 	   }
  
      if (jsonObj){
 	  
 
		 
 
 pid2=jsonObj.TEMP.PERSON_ID
 eid2=jsonObj.TEMP.ENCNTR_ID
	
	personId = jsonObj.TEMP.PERSON_ID
    encntrId =jsonObj.TEMP.ENCNTR_ID
		  

         // Insert the table into eclipsys_mpage.html
         //document.getElementById('eclipsysLink').innerHTML  = tableBody

  }
 
      }  
 
} //function

   xmlObj.open('GET', "UHMC_MP_GET_PATIENT_IDS");
   xmlObj.send("^MINE^, value($PAT_Personid$),value($VIS_EncntrId$)");

 
 
return;
}

function ReviewPK(){
var timestamp = nowUTC();
var signmethod = 'MD5';
var destination = 'chargeentry';
var privatekey = 'cpDrbLDi';
var authtype = 'IDXSCHED';

var pkurl = document.getElementById('PKurl').value;
var username = document.getElementById('PKusername').value;
var accountnumber = document.getElementById('PKaccountnumber').value;

var rawtoken = generateRawToken1(timestamp, signmethod, destination, privatekey, username, authtype, accountnumber);
var pktoken = encryptRawToken(rawtoken); 

var action = pkurl + "?" 
		   + "pk_username=" + username
		   + "&pk_timestamp=" + timestamp
		   + "&pk_sign-method=" + signmethod
		   + "&pk_token=" + pktoken 
		   + "&pk_destination=" + destination
		   + "&pk_transactionalias=" + accountnumber
		   + "&pk_auth=" + authtype;

window.open(action,"","fullscreen=no,left=100,top=100,width=800,height=480");

return;
}

function LaunchPK(){
var timestamp = nowUTC();
var signmethod = 'MD5';
var destination = 'sso';
var privatekey = 'cpDrbLDi';

var pkurl = document.getElementById('PKurl').value;
var username = document.getElementById('PKusername').value;

var rawtoken = generateRawToken(timestamp, signmethod, destination, privatekey, username);
var pktoken = encryptRawToken(rawtoken);

var action = pkurl + "?" 
		   + "pk_username=" + username
		   + "&pk_timestamp=" + timestamp
		   + "&pk_sign-method=" + signmethod
		   + "&pk_token=" + pktoken 
		   + "&pk_destination=" + destination;
		   
var ww = window.screen.availWidth - 10;
var wh = window.screen.availHeight - (window.screen.availHeight * 0.05);

window.open(action,"","fullscreen=no,left=100,top=100,width=800,height=480");
//window.open(action,"","resizable=no,status=no,location=no,menubar=no,toolbar=no,titlebar=no,left=0,top=0,width="+ww+",height="+wh+'"');

return;
}
 
/*

 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message

 * Digest Algorithm, as defined in RFC 1321.

 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009

 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet

 * Distributed under the BSD License

 * See http://pajhome.org.uk/crypt/md5 for more info.

 */



/*

 * Configurable variables. You may need to tweak these to be compatible with

 * the server-side, but the defaults work in most cases.

 */

var hexcase = 0;   /* hex output format. 0 - lowercase; 1 - uppercase        */

var b64pad  = "=";  /* base-64 pad character. "=" for strict RFC compliance   */


/*

 * These are the functions you'll usually want to call

 * They take string arguments and return either hex or base-64 encoded strings

 */

function hex_md5(s)    { return rstr2hex(rstr_md5(str2rstr_utf8(s))); }

function b64_md5(s)    { return rstr2b64(rstr_md5(str2rstr_utf8(s))); }

function hex_b64_md5(s) { return rstr2hex(rstr2b64(rstr_md5(str2rstr_utf8(s)))); }

function any_md5(s, e) { return rstr2any(rstr_md5(str2rstr_utf8(s)), e); }

function hex_hmac_md5(k, d)

  { return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d))); }

function b64_hmac_md5(k, d)

  { return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d))); }

function any_hmac_md5(k, d, e)

  { return rstr2any(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)), e); }



/*

 * Perform a simple self-test to see if the VM is working

 */

function md5_vm_test()

{

  return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";

}



/*

 * Calculate the MD5 of a raw string

 */

function rstr_md5(s)

{

  return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));

}



/*

 * Calculate the HMAC-MD5, of a key and some data (raw strings)

 */

function rstr_hmac_md5(key, data)

{

  var bkey = rstr2binl(key);

  if(bkey.length > 16) bkey = binl_md5(bkey, key.length * 8);



  var ipad = Array(16), opad = Array(16);

  for(var i = 0; i < 16; i++)

  {

    ipad[i] = bkey[i] ^ 0x36363636;

    opad[i] = bkey[i] ^ 0x5C5C5C5C;

  }



  var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);

  return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));

}



/*

 * Convert a raw string to a hex string

 */

function rstr2hex(input)

{

  try { hexcase } catch(e) { hexcase=0; }

  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";

  var output = "";

  var x;

  for(var i = 0; i < input.length; i++)

  {

    x = input.charCodeAt(i);

    output += hex_tab.charAt((x >>> 4) & 0x0F)

           +  hex_tab.charAt( x        & 0x0F);

  }

  return output;

}



/*

 * Convert a raw string to a base-64 string

 */

function rstr2b64(input)

{

  try { b64pad } catch(e) { b64pad=''; }

  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  var output = "";

  var len = input.length;

  for(var i = 0; i < len; i += 3)

  {

    var triplet = (input.charCodeAt(i) << 16)

                | (i + 1 < len ? input.charCodeAt(i+1) << 8 : 0)

                | (i + 2 < len ? input.charCodeAt(i+2)      : 0);

    for(var j = 0; j < 4; j++)

    {

      if(i * 8 + j * 6 > input.length * 8) output += b64pad;

      else output += tab.charAt((triplet >>> 6*(3-j)) & 0x3F);

    }

  }

  return output;

}



/*

 * Convert a raw string to an arbitrary string encoding

 */

function rstr2any(input, encoding)

{

  var divisor = encoding.length;

  var i, j, q, x, quotient;



  /* Convert to an array of 16-bit big-endian values, forming the dividend */

  var dividend = Array(Math.ceil(input.length / 2));

  for(i = 0; i < dividend.length; i++)

  {

    dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);

  }



  /*

   * Repeatedly perform a long division. The binary array forms the dividend,

   * the length of the encoding is the divisor. Once computed, the quotient

   * forms the dividend for the next step. All remainders are stored for later

   * use.

   */

  var full_length = Math.ceil(input.length * 8 /

                                    (Math.log(encoding.length) / Math.log(2)));

  var remainders = Array(full_length);

  for(j = 0; j < full_length; j++)

  {

    quotient = Array();

    x = 0;

    for(i = 0; i < dividend.length; i++)

    {

      x = (x << 16) + dividend[i];

      q = Math.floor(x / divisor);

      x -= q * divisor;

      if(quotient.length > 0 || q > 0)

        quotient[quotient.length] = q;

    }

    remainders[j] = x;

    dividend = quotient;

  }



  /* Convert the remainders to the output string */

  var output = "";

  for(i = remainders.length - 1; i >= 0; i--)

    output += encoding.charAt(remainders[i]);



  return output;

}



/*

 * Encode a string as utf-8.

 * For efficiency, this assumes the input is valid utf-16.

 */

function str2rstr_utf8(input)

{

  var output = "";

  var i = -1;

  var x, y;



  while(++i < input.length)

  {

    /* Decode utf-16 surrogate pairs */

    x = input.charCodeAt(i);

    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;

    if(0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)

    {

      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);

      i++;

    }



    /* Encode output as utf-8 */

    if(x <= 0x7F)

      output += String.fromCharCode(x);

    else if(x <= 0x7FF)

      output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),

                                    0x80 | ( x         & 0x3F));

    else if(x <= 0xFFFF)

      output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),

                                    0x80 | ((x >>> 6 ) & 0x3F),

                                    0x80 | ( x         & 0x3F));

    else if(x <= 0x1FFFFF)

      output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),

                                    0x80 | ((x >>> 12) & 0x3F),

                                    0x80 | ((x >>> 6 ) & 0x3F),

                                    0x80 | ( x         & 0x3F));

  }

  return output;

}



/*

 * Encode a string as utf-16

 */

function str2rstr_utf16le(input)

{

  var output = "";

  for(var i = 0; i < input.length; i++)

    output += String.fromCharCode( input.charCodeAt(i)        & 0xFF,

                                  (input.charCodeAt(i) >>> 8) & 0xFF);

  return output;

}



function str2rstr_utf16be(input)

{

  var output = "";

  for(var i = 0; i < input.length; i++)

    output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF,

                                   input.charCodeAt(i)        & 0xFF);

  return output;

}



/*

 * Convert a raw string to an array of little-endian words

 * Characters >255 have their high-byte silently ignored.

 */

function rstr2binl(input)

{

  var output = Array(input.length >> 2);

  for(var i = 0; i < output.length; i++)

    output[i] = 0;

  for(var i = 0; i < input.length * 8; i += 8)

    output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (i%32);

  return output;

}



/*

 * Convert an array of little-endian words to a string

 */

function binl2rstr(input)

{

  var output = "";

  for(var i = 0; i < input.length * 32; i += 8)

    output += String.fromCharCode((input[i>>5] >>> (i % 32)) & 0xFF);

  return output;

}



/*

 * Calculate the MD5 of an array of little-endian words, and a bit length.

 */

function binl_md5(x, len)

{

  /* append padding */

  x[len >> 5] |= 0x80 << ((len) % 32);

  x[(((len + 64) >>> 9) << 4) + 14] = len;



  var a =  1732584193;

  var b = -271733879;

  var c = -1732584194;

  var d =  271733878;



  for(var i = 0; i < x.length; i += 16)

  {

    var olda = a;

    var oldb = b;

    var oldc = c;

    var oldd = d;



    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);

    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);

    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);

    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);

    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);

    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);

    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);

    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);

    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);

    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);

    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);

    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);

    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);

    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);

    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);

    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);



    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);

    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);

    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);

    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);

    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);

    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);

    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);

    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);

    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);

    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);

    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);

    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);

    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);

    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);

    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);

    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);



    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);

    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);

    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);

    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);

    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);

    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);

    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);

    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);

    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);

    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);

    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);

    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);

    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);

    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);

    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);

    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);



    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);

    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);

    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);

    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);

    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);

    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);

    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);

    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);

    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);

    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);

    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);

    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);

    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);

    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);

    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);

    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);



    a = safe_add(a, olda);

    b = safe_add(b, oldb);

    c = safe_add(c, oldc);

    d = safe_add(d, oldd);

  }

  return Array(a, b, c, d);

}



/*

 * These functions implement the four basic operations the algorithm uses.

 */

function md5_cmn(q, a, b, x, s, t)

{

  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);

}

function md5_ff(a, b, c, d, x, s, t)

{

  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);

}

function md5_gg(a, b, c, d, x, s, t)

{

  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);

}

function md5_hh(a, b, c, d, x, s, t)

{

  return md5_cmn(b ^ c ^ d, a, b, x, s, t);

}

function md5_ii(a, b, c, d, x, s, t)

{

  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);

}



/*

 * Add integers, wrapping at 2^32. This uses 16-bit operations internally

 * to work around bugs in some JS interpreters.

 */

function safe_add(x, y)

{

  var lsw = (x & 0xFFFF) + (y & 0xFFFF);

  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);

  return (msw << 16) | (lsw & 0xFFFF);

}



/*

 * Bitwise rotate a 32-bit number to the left.

 */

function bit_rol(num, cnt)

{

  return (num << cnt) | (num >>> (32 - cnt));

}



/**

* PK START

*

*/



function nowUTC() {

    var d = new Date();



    var day = d.getUTCDate();

    if (day < 10) {day = '0' + day; }



    var month = d.getUTCMonth() + 1

    if(month < 10){ month = '0' + month; }



    var hour = d.getUTCHours();

    if (hour < 10){ hour = '0' + hour; }



    var minutes = d.getUTCMinutes();

    if (minutes < 10) { minutes = '0' + minutes; }



    var seconds = d.getUTCSeconds();

    if (seconds < 10) { seconds = '0' + seconds; }



    return day + '' + month + '' + d.getUTCFullYear() + '' + hour + '' + minutes + '' + seconds;

}



function generateRawToken(timestamp, signmethod, destination, privatekey, pkusername) {

	var tempstring = "/sitewebintegration/pklink/gateway.jsp" 
					+ "pk_destination" + destination + ''
					+ "pk_sign-method" + signmethod + ''
					+ "pk_timestamp" + timestamp + ''
					+ "pk_username" + pkusername + ''
					+ privatekey;

	return tempstring;

}

function generateRawToken1(timestamp, signmethod, destination, privatekey, pkusername, pkauth, transalias) {

	var tempstring = "/sitewebintegration/pklink/gateway.jsp" 
					+ "pk_auth" + pkauth + ''	
					+ "pk_destination" + destination + ''
					+ "pk_sign-method" + signmethod + ''
					+ "pk_timestamp" + timestamp + ''
					+ "pk_transactionalias" + transalias + ''
					+ "pk_username" + pkusername + ''
					+ privatekey;

	return tempstring;

}



function encryptRawToken(rawtoken) {

	return hex_b64_md5(rawtoken);

}



//------JQUERY