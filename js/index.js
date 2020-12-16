		var index=0;
        var imgs = document.getElementsByClassName("img");
		var dots = document.getElementsByClassName("dots")[0];
		var outer = document.getElementById("outer");
        var dotss = dots.children;
        
        var len = imgs.length;  
        var timer = null; 

        dotss[0].className="active";

        function ChangeImg() {
            index++;
            if(index>=len) index=0;
            for(var i=0; i<len; i++){
                imgs[i].style.display='none';
                dotss[i].className = "quiet";
            }
            imgs[index].style.display='block';
            dotss[index].className = "active";
        }

        for(var i=0; i<len; i++){
            dotss[i].index = i;
            dotss[i].onmouseover = function(){
                for(var j=0; j<len; j++){
                    imgs[j].style.display='none';
                    dotss[j].className = "quiet";
                }
                this.className = "active";
                index = this.index;
                imgs[index].style.display='block';
            }
        }
        outer.onmouseover = function(){
            clearInterval(timer);
        }
        // 添加事件：鼠标移出wrapper，开始切换图片
        outer.onmouseout = function(){
            timer = setInterval(ChangeImg,2000);
        }
        timer = setInterval(ChangeImg,2000);