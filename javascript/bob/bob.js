var Bob = function(){
  this.hey = function(input){
    var whitespace =  !!input.match(/^(\s*)$/);
    var all_caps   =  input.toUpperCase() === input && !!input.match(/[A-Z]+/);
    var a_question =  !!input.match(/.+\?$/);

    if(whitespace){
      return "Fine. Be that way!";
    } 
    else if(all_caps){
      return "Woah, chill out!";
    } 
    else if(a_question){
      return "Sure.";
    } 
    else {
      return "Whatever.";
    }
  }
}
module.exports = Bob;