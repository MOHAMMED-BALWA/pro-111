Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach ('#camera');
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri) {
            document.getElementById("results").innerHTML = '<img id="camtured_image" src="'+data_uri+'"/>'
        
    });
    }
    
    console.log('ml5 version', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wjylwhlXD/model.json',modelLoaded);
    
    function modelLoaded(){
        console.log('Model Loaded');
    
    }
    
    function speak(){
        var synth = window.speechSynthesis;
        speak_data_1 = "THE FIRST PREDICTION IS " + prediction_1;
        speak_data_2 = "THE SECOND  PREDICTION IS " + prediction_1;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
        synth.speak(utterThis);
    
    
    }