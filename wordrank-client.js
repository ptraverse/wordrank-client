var util = require('util');
var curl = require('node-curl');

/*
Server address
Change this if you want to run your own instance of wordrank somewhere i.e. localhost
*/

// var server = 'http://wordrank.info/';
var server = 'http://127.0.0.1:8081';



var getWord = function(word, callback) {
	var fullAddress = server+'/word/'+word;
	var curlObj = curl.create();
	curlObj(fullAddress, function(err) {
		if (err) {
			throw err;
		}
	    var res = JSON.parse(this.body);
	    var rank = res.response.rank;
	    this.close();
	    callback(rank);
	});
};



var getRank = function(rank, callback) {
	var fullAddress = server+'/rank/'+rank;
	var curlObj = curl.create();
	curlObj(fullAddress, function(err) {
		if (err) {
			throw err;
		}
		var res = JSON.parse(this.body);
		var word = res.response.word;
		this.close();
		callback(word);
	});
};


var exports = module.exports = {};
exports.getWord = getWord;
exports.getRank = getRank;