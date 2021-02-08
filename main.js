function getParagraph1() 
{ var inputs = []; for(var i = 1 ; i <=5 ; i++)
    { inputs.push(document.getElementById("p1b" + i).value); }
     document.getElementById("displayParagraph1").innerHTML = inputs.join(". "); }

function getParagraph2() 
 { var inputs = []; for(var i = 1 ; i <=5 ; i++) 
    { inputs.push(document.getElementById("p2b" + i).value); }
        document.getElementById("displayParagraph2").innerHTML = inputs.join(". "); }