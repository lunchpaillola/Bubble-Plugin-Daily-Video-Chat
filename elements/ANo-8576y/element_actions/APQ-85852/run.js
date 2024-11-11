function(instance, properties, context) {

    if(instance.data.callFrame == null){
        return "there's no callFrame"}
    else {
 
 const meetingtoken = properties.token;
 const videoRoomUrl = String(properties.url) ;
    
   
 
    if (meetingtoken == null){
     instance.data.callFrame.join({ url: videoRoomUrl })
     instance.data.callFrame.on('joined-meeting', (event)=> {
         console.log('joined-meeting event', event);
         instance.triggerEvent("joined-meeting");    
         });

    instance.data.callFrame.on('left-meeting', (event) => {
        instance.data.callFrame.destroy();
        console.log("destroying the call");
               console.log('left-meeting event', event);
               instance.triggerEvent("left-meeting");
            }); 
     }
     else{
         instance.data.callFrame.join({ url: videoRoomUrl, token: properties.token  })
          instance.data.callFrame.on('joined-meeting', (event)=> {
         console.log('joined-meeting event', event);
         instance.triggerEvent("joined-meeting");    
         });

    instance.data.callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               instance.data.callFrame.destroy();
               console.log("destroying the call");
               instance.triggerEvent("left-meeting");
            }); 
             
         }

    }

}