    var polyfilter_scriptpath = 'js/jquery.modalwindow/js/';
$(function () {
  
	var austDay = new Date();
	austDay = new Date(2015, 4, 14);
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());
  
  //Declare begin
  $('.md-trigger').modalEffects({
        afterOpen:function(){
            $('.main-content').addClass('blur');
        }
     });
     //Declare end
     
     $('.subscribe-form .submit').click(function(e){
        
        if($('#email').parsley( 'validate' )){
        
          var email = $('#email').val();
        
          $.post("http://rayatnia.net78.net/nodeschool.php",{email:email},function(r){
            if (r.success == true) {
              $(".subscribe-form").fadeOut(function(){
                  $(".success-text").html(r.msg).fadeIn();
              });
            }else{
              $(".subscribe-form").fadeOut(function(){
                  $(".success-text").html(r.error).fadeIn();
              });
            }
            
            setTimeout(function(){
              $('.success-text').fadeOut(function(){
                $('.subscribe-form').fadeIn();
              });
            },5000);
          },'json');
          
        }          
          e.preventDefault();
       });
       

});


