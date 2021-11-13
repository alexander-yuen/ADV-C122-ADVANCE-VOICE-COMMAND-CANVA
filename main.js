x = 0;
y = 0;
apple = "";
draw_apple = "";
draw_rect = "";
speak_data = "";
tonumber = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preLoad(){
    apple = loadImage("apple.png")
}

function start_draw() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " +content;

tonumber = Number(content);
if(Number.isInteger(tonumber)){
    document.getElementById("status").innerHTML = "Started Drawing Apples";
}else{
    document.getElementById("status").innerHTML = "The Speech is not recognized as a number";
}

} 
function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_apple == "set"){
        for(var i = 1; i < tonumber; i++){
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600); 
            image(apple, x, y, 50, 50);
        }

        
        document.getElementById("status").innerHTML = 
        tonumber+"Apple is drawn";
        speak();
        draw_apple = "";
    }
}

function speak(){
    var synth = window.speechSynthesis;
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}