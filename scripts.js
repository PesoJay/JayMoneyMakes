var i = 0;
var titleCardName = 'Jakob Daniel Deschauer';
var speed = 75;

function typeTitleCardName(){
    if (i < titleCardName.length){
        document.getElementById("TitleCardName").innerHTML += titleCardName.charAt(i);
        i++;
        setTimeout(typeTitleCardName, speed);
    }
}