function localdatastorage() {
  if (localStorage.getItem('total')) {
    var data = JSON.parse(localStorage.getItem('total'));
    $('.Heading1 select option').remove()
    $('.Heading2 select option').remove()
    $('.Heading1 select').append("<option value='' > Select Heading </option>")
    $('.Heading2 select').append("<option value='' > Select Heading </option>")
    $(data).each(function (k, v) {
      k = k + 1
      $('main').append('<section><h1>' + v.heading + '</h1><button class="btn-cross"  onclick="deleteitem(this)">X</button></section>')
      $('.Heading1 select').append("<option value=" + k + ">" + v.heading + "</option>")
      $('.Heading2 select').append("<option value=" + k + ">" + v.heading + "</option>")
      $(v.subheading).each(function (k1, v1) {
        var heading = k
        var subheading = k1 + 3;
        $("main section:nth-child(" + heading + ")").append("<div class='box'><h5>" + v1.subtitle + "</h5><button class='btn-cross'  onclick='deleteitem(this)'>X</button></div>");
        $(v1.form).each(function (i2, v2) {
          i2 = i2 + 1;
          $("main section:nth-child(" + heading + ") div:nth-child(" + subheading + ")").append("<p class='input'>" + v2 + " </p>");
        })
        $(v1.select).each(function (i3, v3) {
          i3 = i3 + 1;
          $("main section:nth-child(" + heading + ") div:nth-child(" + subheading + ")  ").append("<select class='select' >" + v3 + "</select>");
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
    $('main').append('<section><h1>' + textinput + '</h1><button class="btn-cross"  onclick="deleteitem(this)">X</button></section>');
    $('.form2 option').remove()
    $('.Heading1 select ').append("<option value='' selected disabled>--Select Heading--</option>")
    $('.Heading2 select option').remove()
    $('.Heading2 select ').append("<option value='' selected disabled>--Select Heading--</option>")
    $('main section h1').each(function (key) {
      key = key + 1
      var SubHead_in_Head = $(this).text()
      $('.Heading1 select').append("<option value=" + key + ">" + SubHead_in_Head + " </option>")
      $('.Heading2 select').append("<option value=" + key + ">" + SubHead_in_Head + "</option>")
    })
    // Sort();
    storage();
    $('.form1')[0].reset();
    
  });
  $(".form2").submit(function (event) {

    event.preventDefault();
    var heading = $('.Head_drp').val();
    var textinput = $(".text-1").val();
    console.log(textinput, heading)

    $("main section:nth-child(" + heading + ")").append("<div class='box'><h5>" + textinput + " </h5><button class='btn-cross' id='test' onclick='deleteitem(this)'>X</button></div>");
    $('.Heading3 select option').remove()
    $('.Heading3 select ').append("<option value='' selected disabled>--Select Heading--</option>")
    storage();
    $('.form2')[0].reset();
    $('main .box h5').each(function (key) {
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

    $("main section:nth-child(" + h + ") div h5 ").each(function (key) {
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
      if (dropdown == "select") {
    
         if($('.disabled').is(':checked') && $('.required').is(':checked') && $('.readonly').is(':checked')){
        var array = $('.form-option').val();
        var a = array.split(",");
        var selectArr = [];
        $.each(a, function (i, v) {
          i = i + 1;
          selectArr.push('<option value=' + i + '>' + v + '</option>')
        })
        $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select disabled required readonly ></select>')
        for (let i in selectArr) {
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
        }
         }
        else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {
        var array = $('.form-option').val();
        var a = array.split(",");
        var selectArr = [];
        $.each(a, function (i, v) {
          i = i + 1;
          selectArr.push('<option value=' + i + '>' + v + '</option>')
        })
        $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select disabled readonly ></select>')
        for (let i in selectArr) {
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
        }
        }
        else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + i + '>' + v + '</option>')
          })
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select disabled required ></select>')
          for (let i in selectArr) {
            $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
          
        }
        else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + i + '>' + v + '</option>')
          })
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select readonly required ></select>')
          for (let i in selectArr) {
            $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
        }
        else if ($('.readonly').is(':checked')) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + i + '>' + v + '</option>')
          })
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select readonly  ></select>')
          for (let i in selectArr) {
            $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }

        }
        else if ($('.disabled').is(':checked')) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + i + '>' + v + '</option>')
          })
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select disabled></select>')
          for (let i in selectArr) {
            $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
        }
        else if ($('.required').is(':checked')) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + i + '>' + v + '</option>')
          })
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select  required ></select>')
          for (let i in selectArr) {
            $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
          
        }
        else{
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + i + '>' + v + '</option>')
          })
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<select ></select>')
          for (let i in selectArr) {
            $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
        }
      }
      if (dropdown != "select") {
        
        if (($('.readonly').is(':checked') && $('.required').is(':checked')) && $('.disabled').is(':checked')) {
          var data = '<label> ' + form_label + '</label><br><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '" readonly disabled  required  />'
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " <br><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
        }
        else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {
          var data = '<label> ' + form_label + '</label><br><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"  readonly disabled  />'
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " <br><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

        }
        else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {
          var data = '<label> ' + form_label + '</label><br><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"   disabled  required />'
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " <br><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

        }
        else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {
          var data = '<label> ' + form_label + '</label><br><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"   readnly required />'
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " <br><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

        }
        else if ($('.readonly').is(':checked')) {
          var data = '<label> ' + form_label + '</label><br><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"  readonly   />'
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " <br><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
        }

        else if ($('.disabled').is(':checked')) {
          var data = '<label> ' + form_label + '</label><br><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"   disabled  />'
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " <br><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
        }
        else if ($('.required').is(':checked')) {
          var data = '<label> ' + form_label + '</label><br><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"  required  />'
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " <br><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
        }
        else {
          var data = '<label> ' + form_label + '</label><br><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"    />'
          $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " <br><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
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
  $('main section').each(function (key) {
    key = key + 1
    var last_heading = $(this).children('h1').text()
    var hs = []
    $(this).children('div h5').each(function (event) {
      console.log($(this).text())
    })
    $("main section:nth-child(" + key + ") div").each(function (n) {
      console.log($(this).text(), last_heading)
      var Sub = $(this).children('h5').text()
      var sh = []
      n = n + 3
      $("main section:nth-child(" + key + ") div:nth-child(" + n + ") p").each(function (r) {
        sh.push(([$(this).html()]))
      })

      var select = []

      $("main section:nth-child(" + key + ") div:nth-child(" + n + ") select ").each(function (r) {
        select.push(([$(this).html()]))
      })
      hs.push({ subtitle: Sub, form: sh, select: select })
    })
    total.push({ 'heading': last_heading, 'subheading': hs })
    localStorage.setItem('total', JSON.stringify(total));
    JSON.parse(localStorage.getItem('total'));
  })

}
$(function (event) {

  $("main").sortable({
    connectWith: "main",
    
    change:function(event,ui){
      storage();
    
    },
    update: function (event, ui) {
      storage();
      $('main section').remove()
      localdatastorage();
      location.reload();
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

  
  $('main section').disableSelection();
  
})
function deleteitem(s) {
  $(s).parent().remove();
  window.localStorage.clear();
  storage();
}  
