function press(){
    alert("you can get 6 on special package");
}
/************************************************************************/
const generateoffer =function(){
    const offers=[
        {
        off:"Buy one get 50% disount on second",
    },
    {
        off:"Buy two get third free",
    },
    {
        off:"Buy three get two free",
    },
    {
        off:"Buy four get four free",
    },
    
    ]
;

let arrayIndex = Math.floor(Math.random() * offers.length);
document.getElementById("off").innerHTML = offers[arrayIndex].off;
}

window.onload = function() {
generateoffer();
document.getElementById("generate").addEventListener('click', generateoffer);
}
/************************************************************************/


