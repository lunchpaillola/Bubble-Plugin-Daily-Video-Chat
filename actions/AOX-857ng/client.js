function(properties, context) {
    
 var bearerKey = context.keys["API Key"];
 const recordingid = properties.id;
     
 const url = 'https://api.daily.co/v1/recordings/'+recordingid +'/access-link';
 const options = {
   uri: url,
   method: 'GET',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
     Authorization: bearerKey
   },
   body: JSON.stringify({
     room_name: properties.room_name})
 };
 
     
  //saving the result   
   
  const result = context.request(options);   
  var jsonbody = JSON.parse(result.body);
     
  //formatting the result
  return {
     download_link: jsonbody.download_link,
     expires: jsonbody.expires
  }  

}