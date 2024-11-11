function(instance, properties, context) {
 
    
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
    
 
 const parentElement = document.querySelector('.daily-call-element');
  
 
 instance.data.callFrame = DailyIframe.createFrame(parentElement, {
  theme : {
   colors : {
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
   },
  },
  iframeStyle: {
    zIndex: 1000,  
    width: properties.bubble.width() +'px',
    height: properties.bubble.height() +'px'
  },
     
  showLeaveButton: true,
  showFullscreenButton: true,
  activeSpeakerMode: properties.active_speaker_mode  
 });

 
 }