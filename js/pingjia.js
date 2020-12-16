var evaluate = document.getElementById("evaluate");
    var Lilist = evaluate.getElementsByTagName("li");
    var sub = document.getElementById("sub");
    var word = document.getElementById("word");
    var i = 0;
    for (i = 0; i < Lilist.length; i++) {
        Lilist[i].index = i;
        Lilist[i].onmouseover = function () {
            for (i = 0; i < Lilist.length; i++) {
                if (i <= this.index) {
                    Lilist[i].style.background = "url(star.gif) no-repeat 0 -29px";
                }
                else {
                    Lilist[i].style.background = "url(star.gif) no-repeat 0 0";
                }
            }
        }
    }
    sub.onclick = function(){
        alert("提交成功");
    }