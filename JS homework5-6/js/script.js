
alert ("hwbwehiiui");
start.addEventListener("clic", start_clic);
pause.addEventListener("clic", pause_clic);
stop.addEventListener("clic", stop_clic);

var obj={
	s: "start",
	p: "pause",
	st: "stop"
}

var count=0, timerId, go=false;

function start_clic() {
	for_text.innerHTML="start_clic";
		if (go==false){
			timerId = setInterval(fanction(){
				count+=10;

				var msek=count%100;

				if (msek<10) {msek = "0"+msek;}
				if ((msek>=10)&&(msek<100)) {msek = ""+msek;}

				var sek=Math.floor(count/1000)%60;
				if (sek<10) {sek = "0"+sek;}

				var min=Math.floor(count/60000)%60;
				if (min<10) {min = "0"+min;}
				
				var hours=Math.floor(count/360000)%24;
				if (hours<10) {hours = "0"+hours;}

				var str = hours+":"+min+":"+sek+":"+msek;

				for_stopwatch.innerHTML=str;
			}, 10);
			go=true;
		}
}

function pause_clic() {
	clearInterval(timerId);
	go=false;
	for_text.innerHTML="pause_clic";
}

function stop_clic {
	clearInterval(timerId);
	go=false;
}
