$(document).ready(function () {
  // MakeSort()
  var total = [];
  if (localStorage.getItem('total')) {
    var data = JSON.parse(localStorage.getItem('total'));
    $(data).each(function (i, v) {
      i = i + 1

      $('main').append('<section><h1>' + v.title + '</h1><button class="btn-cross" id="second" onclick="deleteitem(this)">X</button></section>')
      $('.Heading1 select').append("<option value=" + i + ">" + v.title + "</option>")
      $('.Heading2 select').append("<option value=" + i + ">" + v.title + "</option>")
      $(v.subheading).each(function (i1, v1) {
        var Head = i
        var SubHead = i1 + 3;
        $("main section:nth-child(" + Head + ")").append("<div class='box'><h5>" + v1.subtitle + "</h5><button class='btn-cross' id='second' onclick='deleteitem(this)'>X</button></div>");
        $(v1.form).each(function (i2, v2) {
          i2 = i2 + 1;

          $("main section:nth-child(" + Head + ") div:nth-child(" + SubHead + ")").append("<p class='input'>" + v2 + " </p>");

        })
      })
    })

  }


  $(".form1").submit(function (event) {
    event.preventDefault();
    var textinput = $(".HeadingForm").val();
    console.log(textinput)
    $('main').append('<section><h1>' + textinput + '</h1><button class="btn-cross" id="second" onclick="deleteitem(this)">X</button></section>');
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
    storage();
    $('.form1')[0].reset();

  });

  $(".form2").submit(function (event) {
    event.preventDefault();
    var heading = $('.Head_drp').val();
    var textinput = $(".text-1").val();
    console.log(textinput, heading)

    $("main section:nth-child(" + heading + ")").append("<div class='box'><h5>" + textinput + "</h5><button class='btn-cross' id='second' onclick='deleteitem(this)'>X</button></div>");
    $('.Heading3 select option').remove()
    $('.Heading3 select ').append("<option value='' selected disabled>--Select Heading--</option>")
    storage();

    $('.form2')[0].reset();
    $('main .container h5').each(function (key) {
      key = key + 1
      console.log(this)
      var sub_in_form = $(this).text()
      console.log(sub_in_form)
      $('.Heading3 select').append("<option value=" + key + ">" + sub_in_form + "</option>")
    })
    // MakeSort();
  });




  $(document).ready(function () {
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
    })
    $(".form3").submit(function (event) {
      event.preventDefault();
      var heading = $('.form_Heading').val();
      var sub_heading = $('.form_Sub').val();
      var dropdown = $('.dropdown').val();
      var form_class = $(".form-class").val();
      var form_id = $(".form-id").val();
      var form_label = $(".form-label").val();
      var form_placeholder = $(".form-placeholder").val();
      var form_value = $(".form-value").val();
      var form_name = $(".form-name").val();
      var form_action = $(".form-action").val();
      var form_option = $(".form-option").val();
      var data = '<label> ' + form_label + '</label><br><input type="' + dropdown + '" class="' + form_class + '" id="' + form_id + '" label="' + form_label + '" placeholder="' + form_placeholder + '" value="' + form_value + '" name="' + form_name + '" action="' + form_action + '" option="' + form_option + '" />'
      $("main section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " <br><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");
      $('.form3')[0].reset();
      storage();
    });
  });
});
function storage() {
  total = []
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
      hs.push({ subtitle: Sub, form: sh })

    })
    total.push({ 'title': last_heading, 'subheading': hs })
    localStorage.setItem('total', JSON.stringify(total));
    localStorage.getItem('total', JSON.stringify(total));

  })
}
$(function (event) {
  $("main").sortable({
    connectWith: "main",
    update: function (event, ui) {
      storage();
    }

  });

  $("section").sortable({

    connectWith: "section",
    cancel: "h1",
    update: function (event, ui) {
      storage();
    }
  });

  $(".box").sortable({
    connectWith: "div",
    cancel: "h5 , #second",
    update: function (event, ui) {
      storage();
    }
  });
  $("main section").disableSelection();
  storage();
});
function deleteitem(s) {
  $(s).parent().remove();
  storage();
} 
