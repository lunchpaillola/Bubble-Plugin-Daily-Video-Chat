function(properties, context) {


  //Do the operation
 if (window.callFrame === undefined){
     return;
 };
     
     if (window.callFrame !== undefined) {   
     var a = callFrame.leave(); 
     var b = callFrame.destroy();  
    };
     


}