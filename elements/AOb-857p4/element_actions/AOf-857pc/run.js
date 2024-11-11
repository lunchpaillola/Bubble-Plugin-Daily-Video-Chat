function(instance, properties, context) {



    
    //recording started
    
    callFrame.on('recording-started', (event)=> {
         instance.publishState('recordingInstanceId', event.instanceId);
         instance.publishState('recordingId', event.recordingId);
         instance.triggerEvent("recording-started");
         });
    
    //recording stopped
    callFrame.on('recording-stopped', (event)=> {
         instance.publishState('recordingInstanceId', event.instanceId);
         instance.triggerEvent("recording-stopped");
         });
    
     //recording error
    callFrame.on('recording-error', (event)=> {
         instance.triggerEvent("recording-error");
         });
    
    
  //joined meeting
    
    callFrame.on('joined-meeting', (event)=> {
         var userid = event.participants.local.user_id;
         const obj = Object.values(callFrame.participants()).map(el => el.user_id);
         instance.publishState('participant user id', userid);
         instance.publishState('participants', obj);
          instance.triggerEvent("joined-meeting");
         });
    
  //left meeting

     callFrame.on('left-meeting', (event) => {
        const obj = Object.values(callFrame.participants()).map(el => el.user_id);
        instance.publishState('participants', obj);
        instance.triggerEvent("left-meeting");
            }); 
    
   //active speaker change
   callFrame.on("active-speaker-change",(event) => {
       const activeSpeakerVar = event.activeSpeaker
       const peerId = activeSpeakerVar.peerId
       const callObject = Object.values(callFrame.participants());
       const sessionID = callObject.filter(el => el.session_id.includes(peerId));
       const aSpeakerUserId = sessionID.map(el => el.user_id);
       const publishActiveSpeaker = aSpeakerUserId.slice(0).toString();
       instance.publishState("activeParticipant", publishActiveSpeaker);
       instance.triggerEvent("active-speaker-changed"); 
   });
    
    callFrame.off("active-speaker-change",(event) => {
       const activeSpeakerVar = event.activeSpeaker
       const peerId = activeSpeakerVar.peerId
       const callObject = Object.values(callFrame.participants());
       const sessionID = callObject.filter(el => el.session_id.includes(peerId));
       const aSpeakerUserId = sessionID.map(el => el.user_id);
       const publishActiveSpeaker = aSpeakerUserId.slice(0).toString();
       instance.publishState("activeParticipant", publishActiveSpeaker);
       instance.triggerEvent("active-speaker-changed");
   });
    
    
    
    
   //participant joined and left
    
    callFrame.on("participant-joined", participantJoined);
    callFrame.on("participant-left", participantLeft);  
    
    
    function participantJoined(event) {
        var userid = event.participant.user_id;
        instance.publishState("participant user id", userid);
        const obj = Object.values(callFrame.participants()).map(el => el.user_id);
        instance.publishState('participants', obj);
        instance.triggerEvent("participant-joined");
        
    }
    
    function participantLeft(event) {
        var userid = event.participant.user_id;
        instance.publishState("participant user id", userid);
        const obj = Object.values(callFrame.participants()).map(el => el.user_id);
        instance.publishState('participants', obj);
        if (publishActiveSpeaker = obj){
            instance.publishState("activeParticipant", "")
        };
        instance.triggerEvent("participant-left");
        
    }
    

  //Do the operation



}