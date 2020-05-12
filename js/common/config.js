
const config = {
    WEATHER_API_KEY: "b75dddf25be4051716ceb5c94cdf367f",
    WEATHER_API_URL: "http://api.openweathermap.org/data/2.5/onecall?",
    GOOGLE_API_KEY: "AIzaSyCmdq1p2LZ_42tgPImsI3E6jSdz3S3lyP8",
    GOOGLE_API_URL: "https://maps.googleapis.com/maps/api/place/autocomplete/json?input="
}


//API CALL
apiRequest = (url, callback) => {
    $.ajax({
        url: url,
        success: function (response) {
            callback(response);
        },
        error: (err) => {
            callback(err);
        }
    })

}

//HANDLEBARS BIND
bindDataToDOM = (template, elem, data, isAList) => {
    var templateElem = $('#' + template);
    var bindingElem = $('#' + elem);
    var temp = Handlebars.compile(templateElem[0].innerHTML);
    var compiledData = temp(data);
    if (isAList) {
        bindingElem.append(compiledData);
    }
    else {
        bindingElem.html(compiledData);
    }
}
