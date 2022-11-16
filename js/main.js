$(document).ready(function(){
  $('#form1').submit(function(e){
    
    e.preventDefault();
 
    var heading=$('.heading').val();
    $('main').append('<section><h1>' + heading + '<i class="bi bi-x-square-fill" onclick="removedata(this)"></i></h1></section>');
    $('main section h1').each(function (key) {
      key = key + 1;
      $('#form2 #select2').append('<option value="' + key + '">' +heading+ '</option>');

    })
    $('main section h1').each(function(key){
      key=key+1;
      $('#form3 #select3').append('<option value="' + key + '">' +heading+ '</option>');
    
    })
   
  })
  $('#form2').submit(function(e){
    e.preventDefault();
    var subheading=$('.subheading').val();
    var sh=$('#form2 #select2').val();
    $("main section:nth-child(" + sh + ")").append('<div class="container"><h3>' +subheading + ' <i class="bi bi-x-square-fill" onclick="removedata(this)"></i></h3></div>')
 
    $('main section .container h3').each(function(key){
      key=key+1;
      $('#form3 #sub-select1').append('<option value="'+key+'">'+subheading+'</option>')
    })
  })
  $('#form3').submit(function(e){
    e.preventDefault()
    
    var inputtype=$('.inputtypes').val();
    var input_label=$('.input-label').val();
    var input_class=$('.input-class').val();
    var input_id=$('.input-id').val();
    var name=$('.input-name').val();
    var input_value=$('.input-value').val();
    $('main section .container h3  ').append('<div class="form-container"><h6><label for="'+input_label+'">'+input_label+'</label></h6><input type="'+inputtype+'"  value="'+input_value+'" class="'+input_class+'" id="'+input_id+'" name="'+name+'"><i class="bi bi-x-square-fill" onclick="removedata(this)"></i>')
   
  })
  

})
function removedata(s){
  $(s).parent().remove();
 }
