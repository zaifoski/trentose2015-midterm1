/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

$(document).ready(function(){

    $(".final").hide();
    for(var i=0; i< data.length; i++){
      var item = tmpl.replace("SENTENCE", data[i].phrase_en);
      item = item.replace("ID", i);
      $(".sentences").append(item);
      $("#"+i).hide();
    }
    var i = 0;
    var correct = 0;
    $("#"+i).attr('class','current');
    $(".current").show();
    $(".opt-continue").click(function(){
        var answer = $(".form-control").val();
        if(answer==data[i].phrase_de){
            correct=correct+1;
        }
        if(i==data.length-1){
            $(".sentences").hide();
            $(".options").hide();
            $("#tot-good").html(correct);
            $("#tot").html(data.length);
            $(".final").show();
        }
        else{
            $(".current").hide();
            $("#"+i).attr('class','');
            i=i+1;
            $("#"+i).attr('class','current');
            $(".current").show();
        }
                
    });
  
});







