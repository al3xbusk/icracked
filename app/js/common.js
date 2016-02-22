$(document).ready(function() {
  function setVotes(id,prc){
    var bar = document.getElementById(id).style.width = prc + '%';
  };
  var b1 = 0;
  var btnb = $('.btn-bar');
  btnb.click(function(){
    b1 += 10;
    setVotes('bar', b1);
  });

});