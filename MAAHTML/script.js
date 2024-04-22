
function AddValue(valueType,value,pageName) {
    
    sessionStorage.setItem(valueType, (parseInt(sessionStorage.getItem(valueType)) || 0) + parseInt(value));
    // alert(valueType+parseInt(sessionStorage.getItem(valueType)));
    

    var pageURL = pageName + ".html";
    window.location.href = pageURL;
}
