exports.getDate = function () {
    const options = { 
        day: 'numeric',
        weekday: 'long', 
        month: 'long'
    };
    const today  = new Date();   
    return today.toLocaleDateString("en-US", options);
}
exports.getDay = function () {
    const options = { 
        weekday: 'long', 
    };
    const today  = new Date();  
    return today.toLocaleDateString("en-US", options);
}