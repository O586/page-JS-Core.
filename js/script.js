$(document).ready(function () {

    var text1 = $('#s1').text();

   
    var text2 = $('.s2').text();


    var text3 = $('#second i').text(); 

  
    var text4 = $('q[title]').text();

   
    var text5 = $('a[target="_blank"]').text();

   
    var text6 = $('span.extra:eq(1)').text(); 

  
    var result = text1 + " " + text2 + " " + text3 + " " + text4 + " " + text5 + " " + text6;

 
    alert(result);
});