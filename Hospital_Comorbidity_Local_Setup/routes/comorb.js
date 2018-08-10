/**
 * New node file
 */

exports.init = function(req, res){
	var fs = require('fs');
	var contents = fs.readFileSync('public/datafromcerner.txt', 'utf8');
	//console.log(contents);
	var jsonObj = JSON.parse(contents);
	var send = JSON.stringify(jsonObj);
	//res.render('uhmc_mp_comorbidity2', { title: jsonObj });
	//res.render('uhmc_mp_comorbidity2', { title: contents });
	
	res.render('uhmc_mp_comorbidity2', { title: send });
};
