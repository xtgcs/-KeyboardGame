/**
 * Created by John on 2016/4/12.
 */

//var bombs =[27, 112, 113, 114, 115, 116, 117, 118, 120, 121, 123, 36, 35, 45, 46, 8, 187, 189, 48, 57, 56, 55, 54, 53, 52, 51, 50, 49, 192, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 13, 222, 186, 76, 75, 74, 72, 71, 70, 68, 83, 65, 20, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 34, 38, 33, 17, 18, 32, 18, 91];
var bombs = [48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
var Inter=null,
     score= 0,
    count= 0,
    time= 30,
    error=0;
document.onkeydown=function(event){
   // var event= event||window.event;
    var keyCode = event.keyCode;
    //console.log(event.shiftKey);
   // document.getElementById('game').innerHTML=keyCode;
    if(keyCode==32){
        if(time>0){
            GameStart();
            getmusic();
            Inter = setInterval("GameStart()",500);
            setInterval('countDown()',1000);
            return ;
        }

    }
    hit(keyCode);
};

var bomb = document.getElementById('bomb');
function hit(id) {
    stopDefault(event);
    if (id == 18) {
        document.getElementById('li[' + 18 + ']').className = 'enter';
        document.getElementById('li[' + 181 + ']').className = 'enter';

    } else if (id == 17) {
        document.getElementById('li[' + 17 + ']').className = 'enter';
        document.getElementById('li[' + 171 + ']').className = 'enter';
    } else if (id == 16) {
        document.getElementById('li[' + 16 + ']').className = 'enter';
        document.getElementById('li[' + 161 + ']').className = 'enter';
    }else{
        document.getElementById('li[' + id + ']').className = 'enter';
    }
    destroy(id);
  }
function clearStyle(){

    for(var i=0;len=bombs.length,i<len;i++) {
        var dom = document.getElementById('li[' + bombs[i] + ']');
        if(dom.className =='enter'){
            dom.className = '';
        }
    }

}

//取消键盘默认行为
function stopDefault(e)
{
    if (e&&e.preventDefault)
    {
        e.preventDefault();
    }
    else
    {
        window.event.returnValue = false;
    }
}

//取爆弹装弹
function getbomb(){
    bomb.style.display='block';
    //if(count>1){
    //    var praise = document.getElementById('praise');
    //    praise.style.display='none';
    //}
    var num=parseInt(Math.random()*36+1);
    count=count+1;
    console.log('count='+count);

    //if(num==32){
    //    bomb.innerHTML='空格';
    //}else if(num==27){
    //    bomb.innerHTML='Esc';
    //}else if(num==8){
    //    bomb.innerHTML='Backspace';
    //}else if(num==9){
    //    bomb.innerHTML='Tab';
    //}else if(num==13){
    //    bomb.innerHTML='Enter';
    //}else if(num==16){
    //    bomb.innerHTML='Shift';
    //}else if(num==18){
    //    bomb.innerHTML='Alt';
    //}else if(num==33){
    //    bomb.innerHTML='PgUp';
    //}else if(num==34){
    //    bomb.innerHTML='PgDn';
    //}else if(num==44){
    //    bomb.innerHTML='Insert';
    //}else if(num==46){
    //    bomb.innerHTML='Delete';
    //}else if(num==36){
    //    bomb.innerHTML='Home';
   // }else {
        bomb.innerHTML=String.fromCharCode(bombs[num]);
        //console.log('13号内容'+bomb.innerHTML);
        //console.log('13号'+bombs[num]);
  //  }
}

//消灭炸弹
function  destroy(id){
    var praise = document.getElementById('praise');
    var Score = document.getElementById('score');
    var Error=document.getElementById('error');

    if(bomb.innerHTML == String.fromCharCode(id)){
        bomb.style.display='none';
        praise.style.display='block';
        score=score+1;
        Score.innerHTML=score;
        tp=-75;
        if(time>0){
            getbomb();
            GameStart();
            return;
        }
       clearInterval(Inter);
    }
    error=error+1;
    Error.innerHTML=error-score;

}
//游戏开关

function GameStart(){

    bombDown();
}

//炸弹
var tp=0;
function bombDown(){
    tp=tp+20;
    bomb.style.top=tp+'px';

    if(bomb.offsetTop>350){
        tp=-75;
        getbomb();

    }
    console.log(tp);
}
document.onkeyup=function(event){
    var event= event||window.event;
    setTimeout("clearStyle()",1000);

}
//倒计时计时器
function countDown(){
    var Time = document.getElementById('time');
    time=time-1;
    Time.innerHTML=time;
}
//背景音乐
function getmusic(){
    var music = document.getElementById('music');
    if(music.paused){
        music.play();
    }else {
        music.pause();
    }
}
