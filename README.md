# wordrank-client

Curl-based interface for http://www.wordandphrase.info/frequencylist.asp

* Input: English Word
* Output: Rank (commonality)
  * ie. Higher Number => Rarer Word.

Inspired by Amazon SalesRank and Google PageRank

### Example

	var wc = require('wordrank-client');
	var testWord = 'banana';
	wc.getWord(testWord, function(result, err) {
		if (err) {
			throw err;
		}
		console.log(result); // ==> '4721'
	});

In other words, "banana" is the 4,721th most common word in the english language.

Source dataset contains 60K unique english words from the [Corpus of Contemporary English by Bringham Young University](http://corpus.byu.edu/coca/) which contains over 450M total words.

Client queries a wordrank "server" which can be hosted locally or (coming soon) via hosted server at http://wordrank.info.