async function(properties, context) {
    
var bearerKey = context.keys["API Key"];
    
try {
const roomname = properties.name;
const url = 'https://api.daily.co/v1/rooms/' + roomname;
const options = {
  uri: url,
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: bearerKey
  }};

   const response = await context.v3.request(options); }  catch(e){
      const check = bearerKey.includes("Bearer");
      if (check) {
        throw new Error(e);
        }else {
    	throw new Error("Api key field in the plugins tab is missing Bearer in front of the API key")
        } 
   }
    
}