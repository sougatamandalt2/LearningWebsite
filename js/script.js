
function sub(){
var x = 0
    var a = document.getElementById("ans1")
    var b = document.getElementById("ans2")


    if (ans1.checked){
        x+=1;
    }
    if (ans2.checked){
        x+=1;
    }

    var result = document.getElementById("score")
    result.innerHTML = x
}