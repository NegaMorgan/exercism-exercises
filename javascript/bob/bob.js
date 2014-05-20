function isBlank(input){
  return !!input.match(/^(\s*)$/);
}
function isAllCaps(input){
  return input.toUpperCase() === input && !!input.match(/[A-Z]+/);
}
function isAQuestion(input){
  return !!input.match(/.+\?$/);
}

function Bob(){
  this.hey = function(input){
    if(isBlank(input)){ return "Fine. Be that way!"; } 
    else if(isAllCaps(input)){ return "Woah, chill out!"; } 
    else if(isAQuestion(input)){ return "Sure."; } 
    else { return "Whatever."; }
  }
}
module.exports = Bob;