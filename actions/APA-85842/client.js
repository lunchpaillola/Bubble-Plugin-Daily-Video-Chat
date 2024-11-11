function(properties, context) {


  //Load any data 



  //Do the operation
 if (window.callFrame === undefined){
     return;
 };
     
     if (window.callFrame !== undefined) {
         
     const obj = Object.values(callFrame.participants()).filter(el => el.user_id = properties.userid);
     const array = obj.map(el => el.session_id);
     const idToUpdate = array.slice(-1);
     callFrame.updateParticipant(idToUpdate.toString(),{
     setAudio: properties.setaudio});
     
    
    };
     


}