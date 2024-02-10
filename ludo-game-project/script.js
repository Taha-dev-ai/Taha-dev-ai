function scrolldice() {
    var x = Math.floor(Math.random() * 6) + 1;
    console.log("number", x);
    var img1;
    switch (x) {
        case 1:
            img1=document.getElementById("start").src="dice-1.png";
            // document.getElementById("start").src=img1;
            break;
        case 2:
            img1=document.getElementById("start").src="dice-2.png";
            // document.getElementById("start").src=img1;
            break;
        case 3:
            img1=document.getElementById("start").src="dice-3.png";
            // document.getElementById("start").src=img1;
            break;
        case 4:
            img1=document.getElementById("start").scr="dice-4.png";
            // document.getElementById("start").scr=img1;
            break;
        case 5:
            img1=document.getElementById("start").scr="dice-5.png";
            // document.getElementById("start").scr=img1;
            break;
        case 6:
            img1=document.getElementById("start").scr="dice-6.png";
            // document.getElementById("start").scr=img1;
            break;
    }
}