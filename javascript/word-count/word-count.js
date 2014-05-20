function words(string){
  var words = string.split(" ");
  var count = {};
  words.forEach(function(word){
    word in count ? count[word] += 1 : count[word] = 1;
  });
  return count;
}