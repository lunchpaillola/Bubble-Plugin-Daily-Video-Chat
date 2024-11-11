async function(properties, context) {
    
    
var bearerKey = context.keys["API Key"];
    
    
try {

const url = 'https://api.daily.co/v1/rooms';
const options = {
  uri: url,
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: bearerKey
  },
  body: JSON.stringify({properties: {
      enable_network_ui: false,
      enable_prejoin_ui: properties.enable_prejoin_ui,
      enable_people_ui: properties.enable_people_ui,
      enable_video_processing_ui: properties.enable_video_processing_ui,
      enable_screenshare: properties.screenshare,
      enable_chat: properties.chat,
      enable_pip_ui: properties.enable_pip_ui,
      enable_emoji_reactions: properties.enable_emoji_reactions,
      enable_hand_raising: properties.enable_hand_raising,
      enable_advanced_chat: properties.enable_advanced_chat,
      enable_noise_cancellation_ui: properties.enable_noise_cancellation_ui,
      owner_only_broadcast: properties.broadcast,
      enable_shared_chat_history: properties.enable_shared_chat_history,
      enable_breakout_rooms: properties.enable_breakout_rooms,
      enable_knocking: properties.knocking,
      ...(properties.expires && {exp: properties.expires}),
      ...(properties.notbefore && {nbf: properties.notbefore}),
      ...(properties.lang && {lang: properties.lang}),
      ...(properties.recording && {enable_recording: properties.recording }),
      ...(properties.meeting_join_hook && {meeting_join_hook: properties.meeting_join_hook}),
      ...(properties.eject_at_room_exp && {eject_at_room_exp: properties.eject_at_room_exp}),
      ...(properties.max_participants && {max_participants: properties.max_participants}),
      ...(properties.eject_after_elapsed && {eject_after_elapsed: properties.eject_after_elapsed})
  },
    privacy: properties.privacy})
};

    
 //generating the result  
     
  const result = await context.v3.request(options);

        // Attempt to parse the result body
        var jsonbody = JSON.parse(result.body);

        // Check if the response contains an error message
        if (jsonbody.error) {
            throw new Error(jsonbody.error);
        }

        // Check if jsonbody or jsonbody.config is undefined before accessing properties
        if (!jsonbody) {
            throw new Error("The API response does not contain the expected data.");
        }

        return {
         id: jsonbody.id,
    url: jsonbody.url,
    created_at: jsonbody.created_at,
    privacy: jsonbody.privacy,
    name: jsonbody.name,
    enable_chat: jsonbody.config.enable_chat,
    owner_only_broadcast: jsonbody.config.broadcast,
    exp: jsonbody.config.exp,
    not_before: jsonbody.config.not_before
        };

    } catch (e) {
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