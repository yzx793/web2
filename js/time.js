window.onload = function(){ //页面加载完成时实现
    showTime();
  }
  function checkTime(i){  //补位处理
     if(i<10){
         i="0"+i;
     } 
     return i;
  }
  function showTime(){ //时间显示函数
    var now=new Date(); //创建一个Date对象
    var year= now.getFullYear() ; //年
    var month=now.getMonth()+1 ; //月份（从0开始），所以+1
    var date= now.getDate()  ; //日（1-31）
    var day=now.getDay();  //星期（0-6）
    var h= now.getHours()  ; //小时（0-23）
    var m= now.getMinutes()  ;  //分钟（0-59）
    var s=  now.getSeconds()  ;  //秒
    m=checkTime(m) 
    s=checkTime(s)
    var weekday=new Array(7)  //星期数进一处理
    weekday[0]="星期日";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    document.getElementById("show").innerHTML=""+year+"年"+month+"月"+date+"日 "+ weekday[day] +h+":"+m+":"+s;
    t=setTimeout('showTime()',1000)  //设置定时器，每隔1s调用一次函数从而实现动态效果
  }