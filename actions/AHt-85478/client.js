function(properties, context) {
    
    
    
 //setting variables   
 var meetingtoken = properties.token
 const parentElement = document.getElementById(properties.element_id);
    
 //Color Themes
    
//function to convert the color from Bubble to hex for Daily
  
    function rgba2hex(orig) {
  var a, isPercent,
    rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = (rgb && rgb[4] || "").trim(),
    hex = rgb ?
    (rgb[1] | 1 << 8).toString(16).slice(1) +
    (rgb[2] | 1 << 8).toString(16).slice(1) +
    (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = 01;
  }
  // multiply before convert to HEX
  a = ((a * 255) | 1 << 8).toString(16).slice(1)
  hex = hex ;

  return hex;
} 
 
    
 //setting the color themes
  const colorThemes ={
    accent: '#'+ rgba2hex(properties.accent),
    accentText: '#' + rgba2hex(properties.accent_text),
    background: '#' + rgba2hex(properties.background),
    backgroundAccent:'#' + rgba2hex(properties.backgroundaccent),
    baseText: '#' + rgba2hex(properties.basetext),
    border: '#' + rgba2hex(properties.border),
    mainAreaBg:'#' + rgba2hex(properties.mainAreaBg),
    mainAreaBgAccent:'#' + rgba2hex(properties.mainareabgaccent),
    mainAreaText: '#' + rgba2hex(properties.mainareatext),
    supportiveText: '#' + rgba2hex(properties.supportivetext),
   }

    //Layout Configuration
    
    const layoutVar = {
    grid: {
      minTilesPerPage: properties.minimumTiles,
      maxTilesPerPage: properties.maximumTiles
    },
  };
        
    
    
  //various join room styles
    
  try {
 
 //Joining the room and creating the callFrames
 //fullscreen style meeting token is empty
    
 if (properties.size == 'fullscreen' && window.innerWidth > 600 && meetingtoken == null){
        
   callFrame = window.DailyIframe.createFrame({
  theme : {
   colors : colorThemes},
  layoutConfig: layoutVar,
  iframeStyle: {
    zIndex: 10,
    top:'0em',
    bottom:'0em',
    right:'0em', 
    position: 'fixed',
    width: '100%',
    height: '100%',
      
  },
     
  showLeaveButton: properties.showleavebutton,
  showFullscreenButton: properties.showfullscreenbutton,
});
    callFrame.join({ url: properties.roomurl, activeSpeakerMode: properties.active_speaker_mode })
     callFrame.on('left-meeting', (event) => {
               console.log('left-meeting event', event);
               callFrame.destroy();
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
    
    
// center style meeting token is not empty
    
    
     if (properties.size == 'fullscreen' && window.innerWidth > 600 && meetingtoken !== null){
        
   callFrame = window.DailyIframe.createFrame({
  theme : {
   colors : colorThemes},
  layoutConfig: layoutVar,
  iframeStyle: {
    zIndex: 10,
    top:'0em',
    bottom:'0em',
    right:'0em', 
    position: 'fixed',
    width: '100%',
    height: '100%',
      
  },
     
  showLeaveButton: properties.showleavebutton,
  showFullscreenButton: properties.showfullscreenbutton,
});
    callFrame.join({ url: properties.roomurl, token: properties.token, activeSpeakerMode: properties.active_speaker_mode })
     callFrame.on('left-meeting', (event) => {
               callFrame.destroy();
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
    
     //bottom right style meetingtoken is  empty
    
      if (properties.size == 'bottom right'&& window.innerWidth > 600 && meetingtoken == null){
        
   callFrame = window.DailyIframe.createFrame({
  theme : {
   colors : colorThemes},
  layoutConfig: layoutVar,
  iframeStyle: {
    zIndex: 10,
    position: 'fixed',
    width: '375px',
    height: '450px',
    right: '1em',
    bottom: '1em'
  },
     
  showLeaveButton: properties.showleavebutton,
  showFullscreenButton: properties.showfullscreenbutton
});
    callFrame.join({ url: properties.roomurl, activeSpeakerMode: properties.active_speaker_mode })
    callFrame.on('left-meeting', (event) => {
               callFrame.destroy();
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
    
    //bottom right style meetingtoken is not empty
    
  if (properties.size == 'bottom right'&& window.innerWidth > 600 && meetingtoken !== null){
        
   callFrame = window.DailyIframe.createFrame({
  theme : {
   colors : colorThemes},
  layoutConfig: layoutVar,
  iframeStyle: {
    zIndex: 10,
    position: 'fixed',
    width: '375px',
    height: '450px',
    right: '1em',
    bottom: '1em'
  },
     
  showLeaveButton: properties.showleavebutton,
  showFullscreenButton: properties.showfullscreenbutton
});
    callFrame.join({ url: properties.roomurl, token: properties.token, activeSpeakerMode: properties.active_speaker_mode })
    callFrame.on('left-meeting', (event) => {
               callFrame.destroy();
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
    
    
  //top right style meetingtoken is  empty  
    
     if (properties.size == 'top right' && window.innerWidth > 600 && meetingtoken == null){
        
   callFrame = window.DailyIframe.createFrame({
  theme : {
   colors : colorThemes},
  layoutConfig: layoutVar,
  iframeStyle: {
    zIndex: 1000,
    position: 'fixed',
    width: '375px',
    height: '450px',
    right: '1em',
    top: '0em'
  },
     
  showLeaveButton: properties.showleavebutton,
  showFullscreenButton: properties.showfullscreenbutton
});
    callFrame.join({ url: properties.roomurl, activeSpeakerMode: properties.active_speaker_mode })
    callFrame.on('left-meeting', (event) => {
               callFrame.destroy();
               callFrame.iframe().style.visibility = 'hidden';
            });    
     
 }
    
//top right style meetingtoken is not empty
    
      if (properties.size == 'top right' && window.innerWidth > 600 && meetingtoken !== null){
        
   callFrame = window.DailyIframe.createFrame({
  theme : {
   colors : colorThemes},
  layoutConfig: layoutVar,
  iframeStyle: {
    zIndex: 1000,
    position: 'fixed',
    width: '375px',
    height: '450px',
    right: '1em',
    top: '0em'
  },
     
  showLeaveButton: properties.showleavebutton,
  showFullscreenButton: properties.showfullscreenbutton
});
    callFrame.join({ url: properties.roomurl, token: properties.token, activeSpeakerMode: properties.active_speaker_mode })
    callFrame.on('left-meeting', (event) => {
               callFrame.destroy();
               callFrame.iframe().style.visibility = 'hidden';
            });    
     
 }
    
    
     //small screen meetingtoken is empty
    
  if (window.innerWidth <= 600 && meetingtoken == null && properties.size !== 'audio only' && properties.size !== 'custom position'){
        
   callFrame = window.DailyIframe.createFrame({
   theme : {
   colors : colorThemes},
  layoutConfig: layoutVar,
  iframeStyle: {
    zIndex: 10,
    top:'0em',
    bottom:'0em',
    right:'0em', 
    position: 'fixed',
    width: '100%',
    height: '100%',
      
  },
     
 showLeaveButton: properties.showleavebutton,
  showFullscreenButton: properties.showfullscreenbutton
});
    callFrame.join({ url: properties.roomurl, activeSpeakerMode: properties.active_speaker_mode })
     callFrame.on('left-meeting', (event) => {
               callFrame.destroy();
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }


    //small screen meetingtoken is not empty
    
 if (window.innerWidth <= 600 && meetingtoken !== null && properties.size !== 'audio only' && properties.size !== 'custom position'){
        
   callFrame = window.DailyIframe.createFrame({
  theme : {
   colors : colorThemes},
  layoutConfig: layoutVar,
  iframeStyle: {
    zIndex: 10,
    top:'0em',
    bottom:'0em',
    right:'0em', 
    position: 'fixed',
    width: '100%',
    height: '100%',
      
  },
     
  showLeaveButton: properties.showleavebutton,
  showFullscreenButton: properties.showfullscreenbutton
});
    callFrame.join({ url: properties.roomurl, token: properties.token , activeSpeakerMode: properties.active_speaker_mode })
     callFrame.on('left-meeting', (event) => {
         	   callFrame.destroy();
               callFrame.iframe().style.visibility = 'hidden';
            });   
     
 }
    
 // custom 
 if (properties.size == 'custom position' && meetingtoken == null){

  callFrame = window.DailyIframe.createFrame(parentElement,{
   theme : {
   colors : colorThemes},
   layoutConfig: layoutVar,   
   showLeaveButton: properties.showleavebutton,
  showFullscreenButton: properties.showfullscreenbutton
 });
     callFrame.join({ url: properties.roomurl , activeSpeakerMode: properties.active_speaker_mode })
      callFrame.on('left-meeting', (event) => {
                callFrame.destroy();
                callFrame.iframe().style.visibility = 'hidden';
             });   

   } 
  
    
   if (properties.size == 'custom position' && meetingtoken !== null){

    callFrame = DailyIframe.createFrame(parentElement,{
     theme : {
   colors : colorThemes},
   layoutConfig: layoutVar,     
     showLeaveButton: properties.showleavebutton,
  	 showFullscreenButton: properties.showfullscreenbutton,
   });
       callFrame.join({ url: properties.roomurl , token: properties.token , activeSpeakerMode: properties.active_speaker_mode })
        callFrame.on('left-meeting', (event) => {
                  callFrame.destroy();
                  callFrame.iframe().style.visibility = 'hidden';
               });   
  
     }
   
    
// audio only option
    
    
     if (properties.size == 'audio only' && meetingtoken !== null){
        
  callFrame = window.DailyIframe.createCallObject({
  audioSource: true,
          videoSource: false,
          dailyConfig: {
            experimentalChromeVideoMuteLightOff: true
          },
 
});
      
       callFrame.join({ url: properties.roomurl, token: properties.token })
       callFrame.on("joined-meeting", () => console.log("[JOINED MEETING]"));
       callFrame.on("error", e => console.error(e));
       callFrame.on("track-started", playTrack);
       callFrame.on("track-stopped", destroyTrack);
       callFrame.on("participant-joined", updateParticipants);
       callFrame.on("participant-left", updateParticipants);
           
 }
 
    function playTrack(evt) {
        console.log(
          "[TRACK STARTED]",
          evt.participant && evt.participant.session_id
        );

        // sanity check to make sure this is an audio track
        if (!(evt.track && evt.track.kind === "audio")) {
          console.error("!!! playTrack called without an audio track !!!", evt);
          return;
        }

        // don't play the local audio track (echo!)
        if (evt.participant.local) {
          return;
        }

        let audioEl = document.createElement("audio");
        document.body.appendChild(audioEl);
        audioEl.srcObject = new MediaStream([evt.track]);
        audioEl.play();
      }
    
    function updateParticipants(evt) {
        let el = document.getElementById("participants");
        let count = Object.entries(callFrame.participants()).length;
      }

      function destroyTrack(evt) {

        let els = Array.from(document.getElementsByTagName("video")).concat(
          Array.from(document.getElementsByTagName("audio"))
        );
        for (let el of els) {
          if (el.srcObject && el.srcObject.getTracks()[0] === evt.track) {
            el.remove();
          }
        }
      }
     
    
   if (properties.size == 'audio only' && meetingtoken == null){
        
   callFrame = window.DailyIframe.createCallObject({
  audioSource: true,
          videoSource: false,
          dailyConfig: {
            experimentalChromeVideoMuteLightOff: true
          },
 
});
      
       callFrame.join({ url: properties.roomurl})
       callFrame.on("joined-meeting", () => console.log("[JOINED MEETING]"));
       callFrame.on("error", e => console.error(e));
       callFrame.on("track-started", playTrack);
       callFrame.on("track-stopped", destroyTrack);
       callFrame.on("participant-joined", updateParticipants);
       callFrame.on("participant-left", updateParticipants);
           
 }
 
    function playTrack(evt) {
        // sanity check to make sure this is an audio track
        if (!(evt.track && evt.track.kind === "audio")) {
          console.error("!!! playTrack called without an audio track !!!", evt);
          return;
        }

        // don't play the local audio track (echo!)
        if (evt.participant.local) {
          return;
        }

        let audioEl = document.createElement("audio");
        document.body.appendChild(audioEl);
        audioEl.srcObject = new MediaStream([evt.track]);
        audioEl.play();
      }
    
    function updateParticipants(evt) {
        let el = document.getElementById("participants");
        let count = Object.entries(callFrame.participants()).length;
      }

      function destroyTrack(evt) {

        let els = Array.from(document.getElementsByTagName("video")).concat(
          Array.from(document.getElementsByTagName("audio"))
        );
        for (let el of els) {
          if (el.srcObject && el.srcObject.getTracks()[0] === evt.track) {
            el.remove();
          }
        }
      }
     
} catch (error) {
  if (properties.minimumTiles > properties.maximumTiles){
  alert("Error with the Daily - join room action:  The minimum tiles parameter is greater than the maximum tiles parameter");
};
}
}