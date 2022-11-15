$(document).ready(function(){
  $('#form1').submit(function(e){
    
    e.preventDefault();
    var heading=$('.heading').val();
    $('main').append('<section><h1>' + heading + '<i class="bi bi-x-square-fill" onclick="removedata(this)"></i></h1></section>');
    

    $('main section h1').each(function (key) {
      key = key + 1;
      $('#form2 #select2').append('<option value="' + key + '">' +heading+ '</option>');
    })
   
  })
  $('#form2').submit(function(e){
    e.preventDefault();
    var subheading=$('.subheading').val();
    var sh=$('#form2 #select2').val();
    $("main section:nth-child(" + sh + ")").append('<div class="container"><h3>' +subheading + '</h3></div>')
 
  })
 
})
function removedata(s){
  $(s).parent().remove()
 }















