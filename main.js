var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("voiceToText").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;

    console.log(content);

    document.getElementById("voiceToText").innerHTML = content;
    speak();
}


function speak() {
    var synth = window.speechSynthesis;
    var speechBack = document.getElementById("voiceToText").value;
    var utterThis = new SpeechSynthesisUtterance(speechBack);
    synth.speak(utterThis);
    Webcam.attach(camera1);
}

camera1 = document.getElementById("camera");

Webcam.set({
    width: 500,
    height: 350,
    image_format: 'png',
    png_quality: 95
});