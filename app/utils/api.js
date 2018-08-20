var axios = require('axios');

module.exports = {
    
    fetchWeather: function (city) {

       

        var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city +'&type=accurate&APPID=YOUR-API-KEY&cnt=5');



        return axios.get(encodedURI)
            .then(function (response) {
                return response.data.items;
        });

    }
}