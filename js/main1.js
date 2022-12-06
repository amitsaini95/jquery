function localdatastorage() {
  if (localStorage.getItem('total')) {
    var data = JSON.parse(localStorage.getItem('total'));
    $('.Heading1 select option').remove()
    $('.Heading2 select option').remove()
    $('.Heading1 select').append("<option value='' > Select Heading </option>")
    $('.Heading2 select').append("<option value='' > Select Heading </option>")
    $(data).each(function (k, v) {
      k = k + 1
      $('.Heading1 select').append("<option value=" + k + ">" + v.heading + "</option>")
      $('.Heading2 select').append("<option value=" + k + ">" + v.heading + "</option>")
      $('#myform').append('<section class="section-form"><h1>' + v.heading + '</h1><button class="btn-cross"  onclick="deleteitem(this)">X</button></section>')
      $(v.subheading).each(function (k1, v1) {
        var heading = k
        var subheading = k1 + 3;
        $("#myform section:nth-child(" + heading + ")").append("<div class='box'><h5>" + v1.subtitle + "</h5><button class='btn-cross'  onclick='deleteitem(this)'>X</button></div>");
        
        $(v1.form).each(function (i2, v2) {
          i2 = i2 + 1;
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + subheading + ")    ").append("<p class='input'>" + v2 + " </p>");
         
        })
        $(v1.select).each(function (i3, v3) {
          
          i3 = i3 + 1;
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + subheading + ")    ").append("<select  >" + v3 + "</select><button class='btn-cross' onclick='deleteitem(this)'>X</button>");
        })
        $(v1.textarea).each(function (i3, v3) {
          i3 = i3 + 1;
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + subheading + ")    ").append("<p class='input'>" + v3 + " </p>");
         
        })
      })
    })
  }
}
localdatastorage();
$(document).ready(function () {

  $(".form1").submit(function (event) {
    event.preventDefault();
    var textinput = $(".HeadingForm").val();
    console.log(textinput)
    $('#myform').append('<section class="section-form"><h1>' + textinput + '</h1><button class="btn-cross"  onclick="deleteitem(this)">X</button></section>');
    $('.form2 option').remove()
    $('.Heading1 select ').append("<option value='' selected disabled>--Select Heading--</option>")
    $('.Heading2 select option').remove()
    $('.Heading2 select ').append("<option value='' selected disabled>--Select Heading--</option>")
    $('#myform section h1').each(function (key) {
      key = key + 1
      var SubHead_in_Head = $(this).text()
      $('.Heading1 select').append("<option value=" + key + ">" + SubHead_in_Head + " </option>")
      $('.Heading2 select').append("<option value=" + key + ">" + SubHead_in_Head + "</option>")
    
    })
    // Sort();
    $('.form1')[0].reset();
    
    storage();
    
  })
  $(".form2").submit(function (event) {

    event.preventDefault();
    var heading = $('.Head_drp').val();
    var textinput = $(".text-1").val();
    console.log(textinput, heading)

    $("#myform section:nth-child(" + heading + ")").append("<div class='box'><h5>" + textinput + " </h5><button class='btn-cross' id='test' onclick='deleteitem(this)'>X</button></div>");
    $('.Heading3 select option').remove()
    $('.Heading3 select ').append("<option value='' selected disabled>--Select Heading--</option>")
    storage();
    $('.form2')[0].reset();
    $('section .box h5').each(function (key) {
      key = key + 1
      console.log(this)
      var sub_in_form = $(this).text()
      console.log(sub_in_form)
      $('.Heading3 select').append("<option value=" + key + ">" + sub_in_form + "</option>")
      // Sort();
      storage();
    })
    
  });

  $('.form_Heading ').on('change', function (event) {
    var h = $(this).val()
    console.log(h)
    $('.form_Sub option').remove()
    $(".form_Sub").append("<option value='' selected disabled>--Select Sub-Heading--</option>")

    $("#myform section:nth-child(" + h + ") div h5 ").each(function (key) {
      key = key + 3
      console.log(key)
      var sub_heading = $(this).text()
      console.log(sub_heading)
      $('.form_Sub').append("<option value=" + key + ">" + sub_heading + " </option>")
    })
    $(".form3").submit(function (event) {
      event.preventDefault();
      var heading = $('.form_Heading').val();
      var sub_heading = $('.form_Sub').val();
      var dropdown = $('.dropdown').val();
      var form_class = $(".form-class").val();
      var form_id = $(".form-id").val();
      var form_label = $(".form-label").val();
      var form_placeholder = $(".form_placeholder").val();
      var form_value = $(".form-value").val();
      var form_name = $(".form-name").val();
      var form_action = $(".form-action").val();
      if(dropdown=="textarea"){
        if($('.disabled').is(':checked') && $('.required').is(':checked') && $('.readonly').is(':checked')){
     
      $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p><textarea disabled required readonly class=" + form_class + " id=" + form_id + " placeholder=" + form_placeholder + " value=" + form_value + " name=" + form_name + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
          
      }
      else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {

      $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p><textarea disabled  readonly class=" + form_class + " id=" + form_id + " placeholder=" + form_placeholder + " value=" + form_value + " name=" + form_name + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
          
      }
      else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {

      $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p><textarea disabled required readonly class=" + form_class + " id=" + form_id + " placeholder=" + form_placeholder + " value=" + form_value + " name=" + form_name + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
         
      }

      else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {

       $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p><textarea  readonly required class=" + form_class + " id=" + form_id + " placeholder=" + form_placeholder + " value=" + form_value + " name=" + form_name + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
        
      } 
     
      else if ($('.readonly').is(':checked')) {
        $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p><textarea  readonly  class=" + form_class + " id=" + form_id + " placeholder=" + form_placeholder + " value=" + form_value + " name=" + form_name + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
        
      }
      else if ($('.disabled').is(':checked')) {
        $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p><textarea  disabled  class=" + form_class + " id=" + form_id + " placeholder=" + form_placeholder + " value=" + form_value + " name=" + form_name + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
        
      }
      else if ($('.required').is(':checked')) {
        $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p><textarea required  class=" + form_class + " id=" + form_id + " placeholder=" + form_placeholder + " value=" + form_value + " name=" + form_name + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
        
      }
    
      else{
        $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p><textarea r class=" + form_class + " id=" + form_id + " placeholder=" + form_placeholder + " value=" + form_value + " name=" + form_name + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
  
      }
      
      
    }
   
        
      
      if (dropdown == "select") {
         if($('.disabled').is(':checked') && $('.required').is(':checked') && $('.readonly').is(':checked')){
        var array = $('.form-option').val();
        var a = array.split(",");
        var selectArr = [];
        $.each(a, function (i, v) {
          i = i + 1;
          selectArr.push('<option value=' + v + '>' + v + '</option>')
        })
        $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select disabled required readonly class="'+form_class+' id="'+form_id+'" name="'+form_name+'"></select><button class="btn-cross" onclick="deleteitem(this)">X</button>')
        for (let i in selectArr) {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
        }
         }
        else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {
        var array = $('.form-option').val();
        var a = array.split(",");
        var selectArr = [];
        $.each(a, function (i, v) {
          i = i + 1;
          selectArr.push('<option value=' + v + '>' + v + '</option>')
        })
        $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select disabled readonly class="'+form_class+' id="'+form_id+'" name="'+form_name+'" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button>')
        for (let i in selectArr) {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
        }
        }
        else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + v + '>' + v + '</option>')
          })
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select disabled required class="'+form_class+' id="'+form_id+'" name="'+form_name+'" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button>')
          for (let i in selectArr) {
            $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
          
        }
        else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + v + '>' + v + '</option>')
          })
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select readonly required class="'+form_class+' id="'+form_id+'" name="'+form_name+'"></select><button class="btn-cross" onclick="deleteitem(this)">X</button>')
          for (let i in selectArr) {
            $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
        }
        else if ($('.readonly').is(':checked')) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + v + '>' + v + '</option>')
          })
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select readonly class="'+form_class+' id="'+form_id+'" name="'+form_name+'" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button>')
          for (let i in selectArr) {
            $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }

        }
        else if ($('.disabled').is(':checked')) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + v + '>' + v + '</option>')
          })
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select disabled class="'+form_class+' id="'+form_id+'" name="'+form_name+'"></select><button class="btn-cross" onclick="deleteitem(this)">X</button>')
          for (let i in selectArr) {
            $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
        }
        else if ($('.required').is(':checked')) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + v + '>' + v + '</option>')
          })
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select  required  class="select" id="select7" name="select-form6"></select><button class="btn-cross" onclick="deleteitem(this)">X</button>')
          for (let i in selectArr) {
            $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
          
        }
        else{
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + v + '>' + v + '</option>')
          })
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select class="select" id="select" name="select-form7" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button>')
          for (let i in selectArr) {
            $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
        }
      }

      if ((dropdown != "select") &&  (dropdown!="textarea")) {
        if (($('.readonly').is(':checked') && $('.required').is(':checked')) && $('.disabled').is(':checked')) {
          var data = '<label for='+form_label+'> ' + form_label + '</label><p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '" readonly disabled  required  /><button class="btn-cross" onclick="deleteitem(this)">X</button></p>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input' >" + data + "</p>");
        }
        else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {
          var data = '<label for='+form_label+'> ' + form_label + '</label><p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"  readonly disabled  /><button class="btn-cross" onclick="deleteitem(this)">X</button></p>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input'>" + data + "</p>");

        }
        else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {
          var data = '<label for='+form_label+'> ' + form_label + '</label><p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"   disabled  required /><button class="btn-cross" onclick="deleteitem(this)">X</button></p>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input'>" + data + " </p>");

        }
        else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {
          var data = '<label for='+form_label+'> ' + form_label + '</label><p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"   readonly required /><button class="btn-cross" onclick="deleteitem(this)">X</button></p>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input'>" + data + "</p>");

        }
        else if ($('.readonly').is(':checked')) {
          var data = '<label for='+form_label+'> ' + form_label + '</label><p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"  readonly   /><button class="btn-cross" onclick="deleteitem(this)">X</button></p>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + "</p>");
        }

        else if ($('.disabled').is(':checked')) {
          var data = '<label for='+form_label+'> ' + form_label + '</label><p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"   disabled  /> <button class="btn-cross" onclick="deleteitem(this)">X</button></p>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input' >" + data + " </p>");
        }
        else if ($('.required').is(':checked')) {
          var data = '<label for='+form_label+'> ' + form_label + '</label><p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"  required  /><button class="btn-cross" onclick="deleteitem(this)">X</button></p>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append(" <p class='input' >" + data + " s)'></p>");
        }
        else {
          var data = '<label for='+form_label+'> ' + form_label + '</label><p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"    /> <button class="btn-cross" onclick="deleteitem(this)">X</button></p>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p>" + data + "</p>");
        }
      }
      $('.form3')[0].reset();
      // Sort();
      storage();
    });
  });
});

function storage() {

  total = [];
  $('#myform section').each(function (key) {
    key = key + 1
    var last_heading = $(this).children('h1').text()
    var hs = []
    $(this).children('div h5').each(function (event) {
      console.log($(this).text())
    })
    $("#myform section:nth-child(" + key + ") div").each(function (n) {
      console.log($(this).text(), last_heading)
      var Sub = $(this).children('h5').text()
      var sh = []
      n = n + 3
      $("#myform section:nth-child(" + key + ") div:nth-child(" + n + ")  p").each(function (r) {
        sh.push(([$(this).html()]))
      })
      var select = []
      $("#myform section:nth-child(" + key + ") div:nth-child(" + n + ") select ").each(function (s) {
        select.push(([$(this).html()]))
      })
      var textarea=[]
      $("#myform section:nth-child(" + key + ") div:nth-child(" + n + ") textarea ").each(function (p) {
        textarea.push(([$(this).html()]))
      })
      hs.push({ subtitle: Sub, form: sh, select: select ,textarea:textarea})
    })
    total.push({ 'heading': last_heading, 'subheading': hs })
    localStorage.setItem('total', JSON.stringify(total));
    JSON.parse(localStorage.getItem('total'));
  })

  
}
$(function (event) {

  $("#myform").sortable({
    connectWith: "#myform",
    change:function(event,ui){
      storage();
    },
    update: function (event, ui) {
      storage();
      $('#myform section').remove()
      localdatastorage();
      
    },
  });
  $("section").sortable({
    change:function(event,ui){
      storage();
    },
    update: function (event, ui) {
      storage();
      
    },
    connectWith:"section",
    cancel: "h1, button",
  });
  $('#myform section').disableSelection();


})
function deleteitem(s) {
  $(s).parent().remove();
  window.localStorage.clear();
 
  storage();
}  
