/**
 * New node file
 */

exports.init = function(req, res){
	var fs = require('fs');
	var contents = fs.readFileSync('public/ECG.csv', 'utf8');
	//console.log(contents);
	// processData(contents);
	//var jsonObj = JSON.parse(contents);
	//var send = JSON.stringify(jsonObj);
	//res.render('uhmc_mp_comorbidity2', { title: jsonObj });
	//res.render('uhmc_mp_comorbidity2', { title: contents });
	
	//res.render('uhmc_mp_comorbidity2', { title: send });
};

