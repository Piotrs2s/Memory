
var cards = ["cs.png", "c++.png", "java.png", "java.png", "js.png", "python.png", "c++.png", "ruby.png", "cs.png",
 "python.png", "ruby.png", "js.png"];

 var check = new Audio("check.wav");
 var win = new Audio("win.wav");
 var hit = new Audio('hit.wav');


function shuffle(a) 
{
    var rand, x;
    for (i = a.length - 1; i > 0; i--) 
    {
        rand = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[rand];
        a[rand] = x;
    }
    return a;
}

cards = shuffle(cards);
 //alert(cards[4]);

 //console.log(cards);

 var c0 = document.getElementById('c0');
 var c1 = document.getElementById('c1');
 var c2 = document.getElementById('c2');
 var c3 = document.getElementById('c3');
 
 var c4 = document.getElementById('c4');
 var c5 = document.getElementById('c5');
 var c6 = document.getElementById('c6');
 var c7 = document.getElementById('c7');
 
 var c8 = document.getElementById('c8');
 var c9 = document.getElementById('c9');
 var c10 = document.getElementById('c10');
 var c11 = document.getElementById('c11');
 
 c0.addEventListener("click", function() { revealCard(0); });
 c1.addEventListener("click", function() { revealCard(1); });
 c2.addEventListener("click", function() { revealCard(2); });
 c3.addEventListener("click", function() { revealCard(3); });
 
 c4.addEventListener("click", function() { revealCard(4); });
 c5.addEventListener("click", function() { revealCard(5); });
 c6.addEventListener("click", function() { revealCard(6); });
 c7.addEventListener("click", function() { revealCard(7); });
 
 c8.addEventListener("click", function() { revealCard(8); });
 c9.addEventListener("click", function() { revealCard(9); });
 c10.addEventListener("click", function() { revealCard(10); });
 c11.addEventListener("click", function() { revealCard(11); });

 var oneVisible = false;
 var turnCounter = 0;
 var visible_number;
 var lock = false;
 var pairsLeft = 6;

 function revealCard(nr)
{
    check.play();
    var opacityValue = $('#c'+nr).css('opacity');

    if (opacityValue != 0 && lock == false)
    {
        lock = true;
        // alert(nr);
        var image = "url(img/"+ cards[nr] + ")";

        $('#c'+nr).css('background-image', image);
        $('#c'+nr).addClass('cardA');
        $('#c'+nr).removeClass('card');

        if(oneVisible == false)
        {
            //first card

            oneVisible = true;
            visible_number = nr;
            lock = false;
        }
        else
        {
            //seckond card
            if(cards[visible_number] == cards[nr])
            {   
                //alert("para");
                setTimeout(function() {hide2Cards(nr, visible_number)}, 750);

                
            }
            else
            {
                //alert("pudło");
                setTimeout(function() {restore2Cards(nr, visible_number)}, 1000);
            }


            turnCounter++;
           
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
        }
    }


}

function hide2Cards(card1, card2)
{
    hit.play();
    $('#c'+ card1).css('opacity', '0');
    $('#c'+ card2).css('opacity', '0');

    pairsLeft--;
    if(pairsLeft ==0)
    {
        win.play();
        $('.board').html('<h1>You win! <br> Done in ' + turnCounter+' turns</h1> ' + '<span class="reset" onclick="location.reload()">Again?</span>');
    }

    lock = false;
}

function restore2Cards(card1, card2)
{
   
    $('#c'+card1).css('background-image', 'url(img/card.png)');
    $('#c'+card1).addClass('card');
    $('#c'+card1).removeClass('cardA');

    $('#c'+card2).css('background-image', 'url(img/card.png)');
    $('#c'+card2).addClass('card');
    $('#c'+card2).removeClass('cardA');

    lock = false;
}