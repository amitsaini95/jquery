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
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + subheading + ")     ").append("<h6>" + v2 + " </h6>");
        })
        $(v1.select).each(function (i3, v3) {
          i3 = i3 + 1;
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + subheading + ") select");
        })
        $(v1.textarea).each(function (i4, v4) {
          i3 = i4 + 1;
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + subheading + ")  h6");
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
      storage();
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
      if (dropdown == "textarea") {
        if ($('.disabled').is(':checked') && $('.required').is(':checked') && $('.readonly').is(':checked')) {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append('<h6><p><label for ="' + form_label + '">' + form_label + '</label></p><textarea readonly disabled required  class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" ></textarea><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
        }
        else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append('<h6><p><label for ="' + form_label + '">' + form_label + '</label></p><textarea readonly disabled class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" ></textarea><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
        }
        else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append('<h6><p><label for ="' + form_label + '">' + form_label + '</label></p><textarea  disabled required class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" ></textarea><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
        }
        else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append('<h6><p><label for ="' + form_label + '">' + form_label + '</label></p><textarea  readonly required class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" ></textarea><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
        }
        else if ($('.readonly').is(':checked')) {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append('<h6><p><label for ="' + form_label + '">' + form_label + '</label></p><textarea readonly class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" ></textarea><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
        }
        else if ($('.disabled').is(':checked')) {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append('<h6><p><label for ="' + form_label + '">' + form_label + '</label></p><textarea  disabled class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" ></textarea><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
        }
        else if ($('.required').is(':checked')) {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append('<h6><p><label for ="' + form_label + '">' + form_label + '</label></p><textarea  required class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" ></textarea><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
        }
        else {
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append('<h6><p><label for ="' + form_label + '">' + form_label + '</label></p><textarea  class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" ></textarea><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>');

        }
      }
      if (dropdown == "select") {
        if ($('.disabled').is(':checked') && $('.required').is(':checked') && $('.readonly').is(':checked')) {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + v + '>' + v + '</option>')
          })
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h6><p><label for="' + form_label + '">' + form_label + '</label></p><select disabled required readonly  class="' + form_class + '" id="' + form_id + '" name="' + form_name + '" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
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
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h6><p><label for="' + form_label + '">' + form_label + '</label></p><select disabled readonly class="' + form_class + '" id="' + form_id + '" name="' + form_name + '"  ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
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
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h6><p><label for="' + form_label + '">' + form_label + '</label></p><select disabled required class="' + form_class + '" id="' + form_id + '" name="' + form_name + '" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
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
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h6><p><label for="' + form_label + '">' + form_label + '</label></p><select readonly required class="' + form_class + '" id="' + form_id + '" name="' + form_name + '" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
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
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h6><p><label for="' + form_label + '">' + form_label + '</label></p><select readonly  class="' + form_class + '" id="' + form_id + '" name="' + form_name + '"  ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
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
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h6><p><label for="' + form_label + '">' + form_label + '</label></p><select disabled  class="' + form_class + '" id="' + form_id + '" name="' + form_name + '" ></select><<button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
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
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h6><label for="' + form_label + '" >' + form_label + '</label></p><select  required  class="' + form_class + '" id="' + form_id + '" name="' + form_name + '"></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
          for (let i in selectArr) {
            $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
        }
        else {
          var array = $('.form-option').val();
          var a = array.split(",");
          var selectArr = [];
          $.each(a, function (i, v) {
            i = i + 1;
            selectArr.push('<option value=' + v + '>' + v + '</option>')
          })
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h6><p><label for="' + form_label + '">' + form_label + '</label></p><select class="' + form_class + '" id="' + form_id + '" name="' + form_name + '" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>')
          for (let i in selectArr) {
            $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(selectArr[i])
          }
        }
      }
      if ((dropdown != "select") && (dropdown != "textarea")) {
        if (($('.readonly').is(':checked') && $('.required').is(':checked')) && $('.disabled').is(':checked')) {
          var data = '<h6><p><label for=' + form_label + '> ' + form_label + '</label></p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '"  placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '" readonly disabled  required  /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input' >" + data + "</p>");
        }
        else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {
          var data = '<label for=' + form_label + '> ' + form_label + '</label><p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"  readonly disabled  /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input'>" + data + "</p>");
        }
        else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {
          var data = '<h6><p><label for=' + form_label + '> ' + form_label + '</label></p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"   disabled  required /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input'>" + data + " </p>");
        }
        else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {
          var data = '<h6><p><label for=' + form_label + '> ' + form_label + '</label></p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '"  placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"   readonly required /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input'>" + data + "</p>");
        }
        else if ($('.readonly').is(':checked')) {
          var data = '<h6><p><label for=' + form_label + '> ' + form_label + '</label></p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '"  placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"  readonly   /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + "</p>");
        }
        else if ($('.disabled').is(':checked')) {
          var data = '<h6><p><label for=' + form_label + '> ' + form_label + '</label></p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '"  placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"   disabled  /> <button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p class='input' >" + data + " </p>");
        }
        else if ($('.required').is(':checked')) {
          var data = '<h6><p><label for=' + form_label + '> ' + form_label + '</label></p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"  required  /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append(" <p class='input' >" + data + " </p>");
        }
        else {
          var data = '<h6><p><label for=' + form_label + '> ' + form_label + '</label></p><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '"  placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '"    /> <button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
          $("#myform section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p>" + data + "</p>");
        }
      }
      $('.form3')[0].reset();
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
      $("#myform section:nth-child(" + key + ") div:nth-child(" + n + ")  h6").each(function (r) {
        sh.push(([$(this).html()]))
      })
      var select = []
      $("#myform section:nth-child(" + key + ") div:nth-child(" + n + ")  select  ").each(function (s) {
        select.push(([$(this).html()]))
      })
      var textarea = []
      $("#myform section:nth-child(" + key + ") div:nth-child(" + n + ")     textarea ").each(function (p) {
        textarea.push(([$(this).html()]))
      })
      hs.push({ subtitle: Sub, form: sh, select: select, textarea: textarea })
    })
    total.push({ 'heading': last_heading, 'subheading': hs })
    localStorage.setItem('total', JSON.stringify(total));
    JSON.parse(localStorage.getItem('total'));
  })
}
$(function (event) {
  $("#myform").sortable({
    connectWith: "#myform",
    update: function (event, ui) {
      storage();
      $('#myform section').remove()
      localdatastorage();
    }
  });
  $("section").sortable({
    connectWith: "section",
    cancel: "h1,button",
    update: function (event, ui) {
      storage();
      $('#myform section').remove()
      localdatastorage();
    }
  });
  $(".box").sortable({
    connectWith: ".box",
    cancel: "h5,button",
    update: function (event, ui) {
      storage();
      $('#myform section').remove();
      localdatastorage();
    }
  });
})
function deleteitem(s) {
  $(s).parent().remove();
  window.localStorage.clear();
  storage();
} 