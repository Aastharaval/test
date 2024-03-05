$(document).ready(function () {
    $("#btn1").click(function () {
        alert("Text: " + $("#test").text());
    });
});

$(document).ready(function () {
    $("#bt1").click(function () {
        $("#s1").text("Hello ppl!");
    });

    $("#bt2").click(function () {
        $("#s2").html("have a good day..!!");
    });

    $("#bt3").click(function () {
        $("#s3").val("Hellooo ");
    });
});
$(document).ready(function () {
    $("#btn4").click(function () {
        $(".p1").append(" <b>happyyyy dayy</b>.");
    });

    $("#btn5").click(function () {
        $("ol").append("<li>orange</li>");
    });
});


$(document).ready(function () {
    $("#btn6").click(function () {
        $("#nw").before("<b>Before</b>");
    });

    $("#btn7").click(function () {
        $("#nw").after("<i>After</i>");
    });
});


$(document).ready(function () {
    $("#br1").click(function () {
        $("#nw1").toggle();
    });
});
$(document).ready(function () {
    $("#marks").click(function () {
        $("#student").toggle();
    });



    var totalVal = 0,
        iCount = $('#student').find('.sub').length;
    $('#student').find('.sub').each(function (i, val) {
        totalVal = totalVal + parseInt($(val).text());
    });


    alert('Avg = ' + totalVal / iCount);

});
$(document).ready(function () {
    $("button").click(function () {
        $("#div1").remove();
    });
});
$(document).ready(function () {
    $("button").click(function () {
        $("#div2").empty();
    });
});
$(document).ready(function () {
    $("button").click(function () {
        $("#div4").fadeIn();
        $("#div5").fadeIn(3000);
        $("#div6").fadeIn("slow");
    });
});
$(document).ready(function () {
    $("button").click(function () {
        $("#div7").fadeOut();
        $("#div8").fadeOut("slow");
        $("#div9").fadeOut(3000);
    });
});
$(document).ready(function () {
    $("button").click(function () {
        $("#div10").fadeToggle();
        $("#div11").fadeToggle("slow");
        $("#div12").fadeToggle(3000);
    });
});
$(document).ready(function () {
    $("button").click(function () {
        $("#div13").fadeTo("slow", 0.15);
        $("#div14").fadeTo("slow", 0.4);
        $("#div15").fadeTo("slow", 0.7);
    });
});
let dh =$("#div16").height();
    let dw =$("#div16").width();
    let dih =$("#div16").innerHeight();
    let diw =$("#div16").innerWidth();
    let doh =$("#div16").outerHeight();
    let dow =$("#div16").outerWidth();
    $("#but").click(function(){
        alert("Height: "+dh+" "+"width: "+dw+" innerHeight: "+dih+" innerWidth: "+diw+" outerheight: "+doh+" outerwidth: "+dow)
    });

    $("#cone").mouseenter(function(){
        $("#cone").addClass("color1");
    });
    $("#cone").mouseleave(function(){
        $("#cone").removeClass("color1");
    });
    $(document).ready(function(){
        $("#bw2").click(function(){
          $("#pw").css("color", "red").slideUp(2000).slideDown(2000);
        });
      });
      $(document).ready(function(){
        $("#bw1").click(function(){
          $("#pw").hide("slow", function(){
            alert("The paragraph is now hidden");
          });
        });
      });

      $("#studentbutton").click(
        function()
        {
            let array=[parseInt($("#maths1").val()),parseInt($("#science1").val()),parseInt($("#chemistry1").val()),parseInt($("#english1").val()),parseInt($("#computer1").val())];
            let total=0;
            for(let i=0;i<array.length;i++)
            {
                total+=array[i];
            }
            let avg=total/5;
            var grade="";
            if(avg>=90)
            {
                grade ="A";
            }
            else if(avg>=70 && avg<90)
            {
                grade+="B";
            }
            else if(avg>50 && avg<70)
            {
                grade ="C";
            }
            else
            {
                grade = "D";
            }
            var pass="";
            if(grade.charAt(0) == "D")
            {
                pass = "fail";
            }
            else
            {
                pass = "pass";
            }
            alert("Student Name is:"+$("#name1").val()+"\n"+
                  "Student Class Is:"+$("#class1").val()+"\n"+
                  "Student Total Is:"+total+"\n"+
                  "Student Average Is:"+avg+"\n"+
                  "Student Grade Is:"+grade+"\n"+
                  "Student Pass or fail Is:"+pass);
        }
    );


















