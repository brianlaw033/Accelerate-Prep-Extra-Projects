$(document).ready(function(){
  $('#pingpong-button').click(function pingpong(){
    var value = $('#value').val();
    for(i = 0; i <= value; i++){
    if(i%3===0){
      $('.result').append('<li>ping</li>')
    }else if(i%5===0){
        $('.result').append('<li>pong</li>')
      }else {
          $('.result').append('<li>'+i+'</li>');
        }
      }
  })

})
