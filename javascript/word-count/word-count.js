function words(string){
  var words = string.split(" ");
  var count = {};
  words.forEach(function(w){
    var word = w.replace(/[^\w]/, "").toLowerCase();
    console.log("word is: "+word);
    word in count ? count[word] += 1 : count[word] = 1;
  });
  return count;
}

module.exports = words;