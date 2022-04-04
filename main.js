prediction_1="";
prediction_2="";
Webcam.set({
    width:300,
    height:300,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_Snapshot(){
    Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML= '<img src="'+data_uri+'" id="captured_image">';
    });
}
console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pF22UtFuY/model.json', modelLoaded);

function modelLoaded(){
    console.log('model Loaded');
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data_1="The first prediction is" + prediction_1;
    speak_data_2="The second prediction is" + prediction_2;
    var utterthis= new SpeechSynthesisUtterance(speak_data_1+ speak_data_2);
    synth.speak(utterthis);
}
function check(){
    img= document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}