$("document").ready(function(){
    var heading = [];
    
      $("#DemoButton1").on("click", function() {
          if(typeof(Storage) !== "undefined") {
            if(localStorage.getItem('heading') && localStorage.getItem('heading').length > 0)
                heading = JSON.parse(localStorage.getItem('heading'));
                var headings=$('.heading').val()
                 heading.push(headings)
                 localStorage.setItem('heading', JSON.stringify(heading));
          
          }
          
          $('main').append('<section><h1>'+headings+'</h1></section>');
         
          $('#form2 #select2').each(function(key) {
              
          $('#form2 #select2').append('<option value="'+key+'">'+headings+'</option>');
           key=key+1;
             
        

        })
        $('#form3 #select3').each(function(key){
          $(this).append('<option value="'+key+'">'+headings+'</option>');
          key=key+1;

        })
      
     
   
       
         
        })
       var subheading=[];
      $("#DemoButton2").on("click", function() {
        
        if(typeof(Storage) !== "undefined") {
          if(localStorage.getItem('subheading') && localStorage.getItem('subheading').length > 0)
             subheading = JSON.parse(localStorage.getItem('subheading')); 
          var subhead=$('.subheading').val()
               subheading.push(subhead)
               localStorage.setItem('subheading', JSON.stringify(subheading))    
               
               $('main section ').append('<div><h3>'+subhead+'</h3></div>');
                 
               $('#form3 #sub-select1').each(function(key){
                
                $(this).append('<option value="'+key+'">'+subhead+'</option>');
                key=key+1;
               
            })         
        }
       
   
       
     
    })
  

    var hs=[];

    $('#DemoButton3').on("click",function(){
              
        
                  var inputtypes=$('.inputtypes ').val();
                   var inputlabel=$('.input-label').val();
                   var inputclass=$('.input-class').val()
                   var inputname=$('.input-name').val();
                   var inputvalue=$('.input-value').val();
                   var inputid=$('.input-id').val();
                  if(inputtypes!="radio")
                   {
                   $('main').append('<label for="'+inputlabel+'">'+inputlabel+'</label>')
                   $('main ').append('<input type="'+inputtypes+'" class="'+inputclass+'" id="'+inputid+'"  name="'+inputname+'" value="'+inputvalue+'">')
                    }
                  else if(inputtypes =="radio"){
                    $('main').append('<label for="'+inputlabel+'">'+inputlabel+'</label>')
                    $('main ').append('<input type="'+inputtypes+'" class="'+inputclass+'" id="'+inputid+'"  name="'+inputname+'" value="'+inputvalue+'">')
                    $('main').append('<label for="'+inputvalue+'">'+inputvalue+'</label>')
                   }
                

                  
                 
                

                
                 
                  
          
    })
        
            
})
     
       
         
    



    


        
    
    
              
          



   
    

        