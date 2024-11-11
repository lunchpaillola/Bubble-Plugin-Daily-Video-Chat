function(instance, properties, context) {


  //Load any data 



  //Do the operation
    
 if(instance.data.callFrame == null){
        return "there's no callFrame"} else {

 instance.data.callFrame.stopLiveStreaming();
  console.log("stop the live stream");
        }
}