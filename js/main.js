var firebaseConfig = {
    apiKey: "AIzaSyD4B4hNY0wpgwsXzK-Us50mWgwIbvnWVQw",
    authDomain: "test-f7d4a.firebaseapp.com",
    databaseURL: "https://test-f7d4a.firebaseio.com",
    projectId: "test-f7d4a",
    storageBucket: "",
    messagingSenderId: "71205954045",
    appId: "1:71205954045:web:0857f87c7a0ddf56"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var text=document.getElementById("tx");
var taille=document.getElementById("aziz");
var police=document.getElementById("chabou")

function test(){
    if (text.style.fontWeight=="bold") 
    {
        text.style.fontWeight="normal"
      }
     else{text.style.fontWeight="bold"} 

}

function test2(){
    if(text.style.fontStyle=="italic")
    {
        text.style.fontStyle="normal"
    }
    else{text.style.fontStyle="italic"} 

}

function test3(){
    if(text.style.textDecoration=="")
    {
        text.style.textDecoration="underline"
    }
    else{text.style.textDecoration=""} 

}
function test4(){
    text.style.fontSize=taille.value
}
function test5(){
text.style.fontFamily=police.value
}

$(document).ready(function(){
$(".a1").hover(function(){
    $(this).css("opacity","0.3");
    $(this).find (".tes1").show();
},function(){
    $(this).css("opacity","1");


    $(this).find (".tes1").hide();
})

});





$(document).ready(function(){
    $("#a2").hover(function(){
        $(this).css("opacity","0.3");
    $(".tes2").show();
    },function(){
        $(this).css("opacity","1");
    
    
        $(".tes2").hide();
    })
    
    });





    $(document).ready(function(){
        $("#a3").hover(function(){
            $(this).css("opacity","0.3");
        $(".tes3").show();
        },function(){
            $(this).css("opacity","1");
        
        
            $(".tes3").hide();
        })
        
        });


        
            $(".tes1").click(function(){
            $(".back").show();
           
            }
            );
            $("#cl").click(function(){
                $(".back").hide();            });



                $(".tes2").click(function(){
                    $(".back").show();
                   
                    }
                    );
                    $("#cl").click(function(){
                        $(".back").hide();            });


                        $(".tes3").click(function(){
                            $(".back").show();
                           
                            }
                            );
                            $("#cl").click(function(){
                                $(".back").hide();            });


