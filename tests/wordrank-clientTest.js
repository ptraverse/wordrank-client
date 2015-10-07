// usage: node wordrankTest.js
var wc = require("../wordrank-client");

//poor man's assert
var assert = function(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    } else {
    	console.log("PASS");
    }
};

var getWordTest = function() {
	//arrange
	var testWord = 'banana';
	var expectedResult = "4721";
	//act
	wc.getWord(testWord, function(result, err) {
		if (err) {
			throw err;
		}
		//assert
		assert(result==expectedResult,testWord+" should be "+expectedResult);
	});
};


var getRankTest = function() {
	//arrange
	var testRank = '4721';
	var expectedResult = "banana";
	//act
	wc.getRank(testRank, function(result, err) {
		if (err) {
			throw err;
		}
		//assert
		assert(result==expectedResult,testRank+" should be "+expectedResult);
	});
};

/* Run Tests */
getWordTest();
getRankTest();