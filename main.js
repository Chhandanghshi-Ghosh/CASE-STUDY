console.log("ml5 version:",ml5.version);
Classifier = ml5.imageClassifier("MobileNet",model_loaded);



function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("spanBulb").innerHTML= results[0].label
    }
}
