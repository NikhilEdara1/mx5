function setup(){
canvas=createCanvas(300,300);
canvas.center
video=createCapture(VIDEO)
video.hide()
mx5=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ORrJQfslz/model.json',modelloaded);
}

function modelloaded(){
console.log("modelloaded");
}


function preload(){
x=window.speechSynthesis;
}


function draw(){
image (video, 0 , 0, 300, 300)
mx5.classify(video,getresult);
}



function getresult(erorr,result){
    if(erorr){
    console.log(erorr);
    }
console.log(result)
document.getElementById("result").innerHTML="label:"+result[0].label;
document.getElementById("confidence").innerHTML="confidence:"+Math.round(result[0].confidence*100)+"%";
z=new SpeechSynthesisUtterance(result[0].label); 
x.speak(z);
}