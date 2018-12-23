$(document).ready(function(){
  $('#userAnswer form').submit(function(event){
  var age = parseInt($('input#age').val());

  if(age>18){
    $('#over18').show();
  }
  else {
    $('#under18').show();
  }
  event.preventDefault();
});
});
