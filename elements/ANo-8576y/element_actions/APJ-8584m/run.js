function(instance, properties, context) {
    
  if(instance.data.callFrame == null){
        return "there's no callFrame"} else {


  //Load any data 
  rtmpUrl=properties.rtmplink;

  instance.data.callFrame.startLiveStreaming({
  rtmpUrl: rtmpUrl,
  layout: {
    preset: properties.layout
  }
});
	
  instance.data.callFrame.on('left-meeting', (event) => {
  instance.data.callFrame.stopLiveStreaming();

 });  
            
        }


  //Do the operation
 



}