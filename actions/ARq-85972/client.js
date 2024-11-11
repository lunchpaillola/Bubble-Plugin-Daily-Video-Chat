function(properties, context) {
    if (window.callFrame === undefined) {
        return;
    }
    
    // Function to convert RGBA to hex
    function rgba2hex(orig) {
        const rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?\)$/i);
        if (!rgb) return orig; // Return the original string if not a valid RGBA format
        
        const r = parseInt(rgb[1]), g = parseInt(rgb[2]), b = parseInt(rgb[3]);
        const a = rgb[4] !== undefined ? parseFloat(rgb[4]) : 1; // Default alpha to 1 if not provided

        // Convert RGB to hex
        let hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();

        // Append alpha if less than 1
        if (a < 1) hex += (Math.round(a * 255).toString(16).toUpperCase().padStart(2, '0'));

        return hex;
    }

    if (window.callFrame !== undefined) {
        const sessionID = Object.values(callFrame.participants())
            .filter(el => el.user_id === properties.user_id)
            .map(el => el.session_id)[0];

        // Common parameters
        const params = {
            height: properties.heightRecording && properties.heightRecording % 2 === 0 ? properties.heightRecording : properties.heightRecording - 1,
            width: properties.widthRecording && properties.widthRecording % 2 === 0 ? properties.widthRecording : properties.widthRecording - 1,
            videoBitrate: Math.max(10, Math.min(10000, properties.videoBitrate)),
            audioBitrate: Math.max(10, Math.min(320, properties.audioBitrate)),
            backgroundColor: properties.backgroundColor ? `#${rgba2hex(properties.backgroundColor)}` : undefined,
            maxDuration: properties.maxDuration,
            minIdleTimeOut: properties.minIdleTimeOut,
            maxCamStreams: properties.maxstreams,
            variant: properties.variant,
            preset: properties.layout
        };

        // Default layout object
        let layout = { preset: params.preset };
        let recordingOptions = { layout };

        // Function to dynamically add properties if they exist
        const addOptions = (keys) => {
            keys.forEach(key => {
                if (params[key] !== undefined && params[key] !== null) {
                    recordingOptions[key] = params[key];
                }
            });
        };

        // Switch layout type and modify recordingOptions accordingly
        switch (properties.layout) {
            case 'single-participant':
                layout.session_id = sessionID;
                addOptions(['height', 'width', 'videoBitrate', 'audioBitrate', 'backgroundColor', 'maxDuration', 'minIdleTimeOut']);
                break;

            case 'portrait':
                layout.variant = params.variant;
                addOptions(['height', 'width', 'videoBitrate', 'audioBitrate', 'backgroundColor', 'maxDuration', 'minIdleTimeOut']);
                break;

            case 'audio-only':
                addOptions(['audioBitrate', 'maxDuration', 'minIdleTimeOut']);
                break;

            default:
                // Default case (send everything)
                addOptions(['height', 'width', 'videoBitrate', 'audioBitrate', 'backgroundColor', 'maxCamStreams', 'maxDuration', 'minIdleTimeOut']);
                break;
        }

        // Start recording with the dynamically constructed options
        callFrame.updateRecording(recordingOptions);
        

    }
}
