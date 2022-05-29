function start(){
navigator.mediaDevices.getUserMedia({audio: true});
classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Kof6hQVLs/model.json", modelready);
}

function modelready(){
classifier.classify(gotresults);
}

function gotresults(error,results)
{if(error){ 
console.error(error);
}
else{console.log(results);
document.getElementById("result").innerHTML="I can hear - "+results[0].label;
document.getElementById("confidence").innerHTML="Accuracy "+(results[0].confidence * 100).toFixed(2)+"%";

imgcat = docuament.getElementById("cat_pic");
imgdog = docuament.getElementById("dog_pic");
imgcow = docuament.getElementById("cow_pic");
imglion = docuament.getElementById("lion_pic");

if(results[0].label == "Meow")
{ imgcat.src= "cat pic"}

if(results[0].label == "Bark")
{ imgdog.src= "dog pic.jfif"}

if(results[0].label == "Moo")
{ imgcow.src= "cow pic"}

if(results[0].label == "Roar")
{ imglion.src= "lion pic"}

}
}


