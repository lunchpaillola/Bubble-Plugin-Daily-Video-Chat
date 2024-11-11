async function(properties, context) {
    
var bearerKey = context.keys["API Key"];
    
try {
const roomname = properties.name;
const url = 'https://api.daily.co/v1/presence';
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
    
    // Check if the response contains an error message
        if (jsonbody.error) {
            throw new Error(jsonbody.error);
        }

    
    
 if (jsonbody[roomname] === undefined){
     return {
         participantCount: 0
     } 
 
 };   
   if (jsonbody[roomname] !== undefined){  
   const userIds = jsonbody[roomname].map(p => p.userId);
  return {
     participantCount: jsonbody[roomname].length,
			userIds: userIds
  }}
   }
    catch (e){
    const check = bearerKey.includes("Bearer");
        if (!check) {
            throw new Error("API Key field in the plugins tab is missing 'Bearer' in front of the API key");
        } else if (e.message) {
            throw new Error(e.message);
        } else {
            throw new Error("An unexpected error occurred.");
        }
    }
}