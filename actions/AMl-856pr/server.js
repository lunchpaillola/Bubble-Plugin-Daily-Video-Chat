async function(properties, context) {
    
var bearerKey = context.keys["API Key"];

try {
const url = 'https://api.daily.co/v1/meeting-tokens';
const options = {
  uri: url,
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: bearerKey
  },
  body: JSON.stringify({properties: 
                        {room_name: properties.name, 
                         is_owner: properties.is_owner, 
                         ...(properties.username && { user_name: properties.username }),
                          ...(properties.user_id && { user_id: properties.user_id }),
                         start_cloud_recording: properties.start_cloud_recording,
                         ...(properties.recording && { enable_recording: properties.recording }),
                         enable_recording_ui: properties.enable_recording_ui,
                         ...(properties.lang && { lang: properties.lang }),
                         ...(properties.notbefore && { nbf: properties.notbefore }),
                         eject_at_token_exp: properties.eject_at_token_exp,
                         ...(properties.eject_after_elapsed && { eject_after_elapsed: properties.eject_after_elapsed }),
                         start_video_off: properties.start_video_off,
                         start_audio_off: properties.start_audio_off,
                         ...(properties.expires && { exp: properties.expires })}})
};
    
 //saving the result   
  
 const result = await context.v3.request(options);   
 var jsonbody = JSON.parse(result.body)
 
 // Check if the response contains an error message
        if (jsonbody.error) {
            throw new Error(jsonbody.error);
        }
    
 //formatting the result
 return {
    token: jsonbody.token,
    
 }  } catch (e) {
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