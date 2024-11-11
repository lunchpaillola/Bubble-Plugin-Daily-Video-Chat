function(properties, context) {

var r = properties.rtmplink
var room = properties.roomurl
const rtmpUrl = properties.rtmplink;
    

        
callFrame = window.DailyIframe.createFrame({
iframeStyle: {
    zIndex: 10,
    top:'0em',
    bottom:'0em',
    right:'0em', 
    position: 'fixed',
    width: '100%',
    height: '100%',
      
  },
     
  showLeaveButton: true,
  showFullscreenButton: true
});

callFrame.join({ url: properties.roomurl, token: properties.token })
     callFrame.on('left-meeting', (event) => {
               callFrame.iframe().style.visibility = 'hidden';
         
            });   

callFrame.on('joined-meeting', (event) => {
callFrame.startLiveStreaming({ rtmpUrl });

 });
    
callFrame.on('left-meeting', (event) => {
callFrame.stopLiveStreaming();

 });  

}