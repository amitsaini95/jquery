
$(document).ready(function(){
  localStorage.getItem("total")
  $('#form1').submit(function(e){
    
    e.preventDefault();
    var heading=$('.heading').val();
    $('main').append("<section><h1>" + heading + "</h1><i class='bi bi-x-square-fill ' id='test' onclick='removedata(this)'></i></section>");
  
    $('main section h1').each(function (key) {
      key = key + 1;
      $('#form2 #select2').append('<option value="' + key + '">' +heading+ '</option>');

    })
    $('main section h1').each(function(key){
      key=key+1;
      $('#form3 #select3').append('<option value="' + key + '">' +heading+ '</option>');
    
    })
  
   storage();
  })
  $('#form2').submit(function(e){
    e.preventDefault();
    var subheading=$('.subheading').val();
    var key=$('#form2 #select2').val();
    $("main section:nth-child(" + key + ")").append("<div class='box'><h3>" +subheading + "</h3><i class='bi bi-x-square-fill' id='test' onclick='removedata(this)'></i></div>")
    
    $('main section .box h3').each(function(key){
      key=key+1;
       $('#form3 #sub-select1').append('<option value="'+key+'">'+subheading+'</option>')
    })
    storage();
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
  $(function(e){
    $('main').sortable({
      connectwith:"main",
     
    })
    $('.box').sortable({
      connectwith:".box",
      cancel: "h3,h1,#test",
    })
  })
})

function storage(){
  var  total=[];
  $('main section').each(function(key){
  
    var head=$(this).children("h1").text();
    key=key+1;
    $('main section:nth-child('+key+') div').each(function(sub){
      var subhead=$(this).children('h3').text();
      sub=sub+1;
      total.push({'heading':head,'subheading':subhead})
      localStorage.setItem("total",JSON.stringify(total))
      var get=localStorage.getItem("total");
      console.log(get)
    })
  })
}

function removedata(s){
  $(s).parent().remove();
 }
