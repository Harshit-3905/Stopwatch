let time = document.getElementById("time")
let flag = false;
let start = document.getElementById("start")
let reset = document.getElementById("reset")
let h = 0
let m = 0
let s = 0

start.onclick = function(){
    if(flag === false)
    {
        flag = true
        start.innerHTML="Pause"
    }
    else{
        flag = false
        start.innerHTML="Start"
    }
}
reset.onclick = function(){
    time.innerHTML ="00:00:00"
    h = 0
    m = 0
    s = 0
    flag = false
    start.innerHTML="Start"
}
setInterval(function(){
    if(flag === true){
        s=s+1
        if(s>59){
            s=0
            m=m+1
        }
        if(m>59){
            m=0
            h=h+1
        }
       
        if(s<10)
        {
            ss = "0"+s
        }else{
            ss=s
        }
        if(m<10)
        {
            ms = "0"+m
        }else{
            ms=m
        }
        if(h<10)
        {
            hs = "0"+h
        }else{
            hs=h
        }
        let curr=hs+":"+ms+":"+ss
        time.innerHTML=curr
    }
},1000)