
$(document).ready(function () {
    function ipLookUp() {
        $.ajax('http://ip-api.com/json')
            .then(
                function success(response) {
                    console.log('User\'s Location Data is ', response);
                    console.log('User\'s Country', response.country);
                    getAdress(response.lat, response.lon)
                },

                function fail(data, status) {
                    console.log('Request failed.  Returned status of',
                        status);
                }
            );
    }


    if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(function success(position) {
            // for when getting location is a success
            console.log('latitude', position.coords.latitude,
                'longitude', position.coords.longitude);
        },
            function error(error_message) {
                // for when getting location results in an error
                console.error('An error has occured while retrieving location', error_message)
                ipLookUp()
            }
        )
    }
    else {
        console.log('geolocation is not enabled on this browser')
        ipLookUp()
    }

    //SEARCH BLOCK

})