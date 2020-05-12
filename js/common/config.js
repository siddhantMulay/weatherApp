
const config = {
    WEATHER_API_KEY: "b75dddf25be4051716ceb5c94cdf367f",
    WEATHER_API_URL: "http://api.openweathermap.org/data/2.5/",
}


//City Search API
searchCities = (searchTem, callback) => {
    var citySearchSettings = {
        "async": true,
        "crossDomain": true,
        
        "url": `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${searchTem}&limit=5&offset=0&hateoasMode=false`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "andruxnet-world-cities-v1.p.rapidapi.com",
            "x-rapidapi-key": "6c42c98832msh286257c3b308743p1ff8ddjsn2a1752cc7574"
        }
    }

    $.ajax(citySearchSettings).done(function (response) {
        callback(response);
    });
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
