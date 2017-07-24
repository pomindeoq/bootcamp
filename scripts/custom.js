
//  $(document).ready(function(){
//   $('span').on({
//       mouseenter: function(){
//var zxc =  $('.audi option:selected').val();
//var inp = $('input').val();
//           $(this).text(zxc*inp);
//   }
//});
// 
//});

 
$(document).ready(function(){
    $('.audi').click(function(){
    var zxc =  $('.audi option:selected').val();
    var inp = $('input').val();
    $('span').text(zxc*inp);  
    });
    
    $("input").keyup(function(){
    var zxc =  $('.audi option:selected').val();
    var inp = $('input').val();
    $('span').text(zxc*inp);
    });

});

