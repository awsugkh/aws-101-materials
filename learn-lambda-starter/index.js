module.exports.handler = async(event) => {
    const res = await fetch('https://catfact.ninja/fact');
    const result = await res.json();
    
    // Get cat fact and date time.
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            ...result,
            time: new Date()
            
        }),
    };
    return response;
};
