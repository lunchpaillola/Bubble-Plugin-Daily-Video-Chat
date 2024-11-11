async function(properties, context) {
    
 var bearerKey = context.keys["API Key"];
 const recordingid = properties.id;
    
 try {    
 const url = 'https://api.daily.co/v1/recordings/'+recordingid +'/access-link';
 const options = {
   uri: url,
   method: 'GET',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
     Authorization: bearerKey
   }
 };
 
     
  //saving the result   
   
  const result = await context.v3.request(options);   
  var jsonbody = JSON.parse(result.body);
     
  //formatting the result
  return {
     download_link: jsonbody.download_link,
     expires: jsonbody.expires
  } } catch(e) {
      const check = bearerKey.includes("Bearer");
      if (check) {
        throw new Error(e);
        }else {
    	throw new Error("Api key field in the plugins tab is missing Bearer in front of the API key")
        } 
  }

}