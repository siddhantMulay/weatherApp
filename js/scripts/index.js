
let latitude = '';
let longitude = '';


$(document).ready(function () {

    //Initalize Handlebar Helpers
    helpers = () => {

        Handlebars.registerHelper('iconHelper', function (forecast) {
            var retData = '';
            switch (forecast) {
                case "few clouds": {
                    retData = 'cloudy'
                    break;
                }

                case "smoke": {
                    retData = 'smoke'
                    break;
                }

                case "scattered clouds": {
                    retData = 'cloudy'
                    break;
                }

                case "clear sky": {
                    retData = 'clear'
                    break;
                }

                case "broken clouds": {
                    retData = 'brokenCloud'
                    break;
                }

                case "overcast clouds": {
                    retData = 'overcast'
                    break;
                }
                case "light rain": {
                    retData = 'rain'
                    break;
                }

                case "shower rain": {
                    retData = 'rain'
                    break;
                }

                case "moderate rain": {
                    retData = 'rainMod'
                    break;
                }

                case "heavy intensity rain": {
                    retData = 'rainHeavy'
                    break;
                }

                case "snow": {
                    retData = 'snow'
                    break;
                }
                case "haze": {
                    retData = 'haze'
                    break;
                }


            }
            return retData;
        });

        Handlebars.registerHelper('rounder', function (data) {
            var retData = Math.round(data);
            return retData;
        })

        Handlebars.registerHelper('formatDay', function (data) {
            var retData = '';
            var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            var theDate = new Date(data * 1000);
            retData = days[theDate.getDay()];
            return retData;
        })

        Handlebars.registerHelper('formatTime', function (data) {
            var retData = '';
            var theDate = new Date(data * 1000);
            var hours = theDate.getHours();
            var minutes = theDate.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            retData = hours + ':' + minutes + ' ' + ampm;
            return retData;
        })
    }

    helpers();
    
    //IP Lookup
    ipLookUp = () => {
        $.ajax('http://ip-api.com/json')
            .then(
                function success(response) {
                    var userLoc = `${response.city}, ${response.regionName}`;
                    $('#searchText').val(userLoc);
                    getWeatherData(latitude, longitude);
                    $('.pageLoader').attr('data-active', false);
                },

                function fail(data, status) {
                    console.log('Request failed.  Returned status of',
                        status);
                }
            );
    }

    //Check geolocation
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function success(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            ipLookUp();
        },
            function error(err) {
                var errCode = err.code;
                var msg = errCode === 1 ? "Location access denied. Allow location access and reload." :
                    "An error has occured in fetching location, try again."
                $('.pageLoader span').text(msg);
                $('.pageLoader i').removeClass('sunny').addClass('storm').css('animation', 'none');
            }
        )
    }
    else {
        $('.pageLoader span').text('Geolocation is not enabled on this browser');
        $('.pageLoader i').removeClass('sunny').addClass('storm').css('animation', 'none');
    }

    //Get Hourly Forecast Data
    getForecastData = (data) => {
        var retData = [];
        data.forEach((item) => {
            var theDate = new Date(item.dt * 1000);
            var hr = theDate.getHours();
            if (hr > 8 && hr < 15) {
                retData.push(item.temp);
            }
        })
        initalizeCharts(retData.splice(5))
    }

    //Get Weather Data
    getWeatherData = (lat, lon) => {
        $('.pageLoader').attr('data-active', true);
        var url = `${config.WEATHER_API_URL}onecall?lat=${lat}&lon=${lon}&appid=${config.WEATHER_API_KEY}&units=metric`;

        apiRequest(url, (response) => {
            bindDataToDOM('weatherPageTemplate', 'weatherData', response);
            getForecastData(response.hourly)
            $('.pageLoader').attr('data-active', false);
            $('#suggestions').empty().attr('data-visible', false)
            $('body').css('overflow', 'auto')
        })
    }

    //Get Current Weather Data
    getCurrentWeatherData = (location, callback) => {
        var url = `${config.WEATHER_API_URL}weather?q=${location}&appid=${config.WEATHER_API_KEY}&units=metric`;
        apiRequest(url, (response) => {
            callback(response)
        })
    }

    //Format search results data
    formatSearchData = (data) => {
        var retData = [];
        data.forEach((item) => {
            var city = item.city;
            return new Promise((resolve, reject) => {
                getCurrentWeatherData(city, (res) => {
                    if (res.status !== 404) {
                        resolve(retData.push({
                            'latitude': item.latitude,
                            'longitude': item.longitude,
                            'city': item.city,
                            'region': item.region,
                            'country': item.country,
                            'temp': res.main.temp,
                            'forecast': res.weather[0].main,
                            'icon': res.weather[0].description
                        }))
                    }
                    bindDataToDOM('searchResultsTemplate', 'suggestions', retData);
                })
            })
        })
    }

    //Search Block
    $('#searchText').keyup(function (e) {
        var val = $(this).val();
        if (e.keyCode !== 8 && val.length > 2) {
            $('#suggestions').attr('data-visible', true).html(`
            <div class="secLoader">
            <i class="sunny small"></i>
        <span>Looking up...</span></div>`);
            $('body').css('overflow', 'hidden')
            searchCities(val, (response) => {
                var data = response.data;
                formatSearchData(data)
            })
        }
        else if (val.length === 0) {
            $('#suggestions').empty().attr('data-visible', false)
            $('body').css('overflow', 'auto');
        }
    })

    //View Weather Data
    $('body').off('click', '.item').on('click', '.item', function () {
        var lat = $(this).attr('data-lat');
        var long = $(this).attr('data-long');
        var city = $(this).attr('data-city');
        var region = $(this).attr('data-region');
        var userLoc = `${city}, ${region}`;
        $('#searchText').val(userLoc);
        getWeatherData(lat, long);
        $('body').css('overflow', 'auto');
    })

})