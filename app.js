
const request = require ("request")
    
const forecast = require ('./geo_forecast.js/forecast')

const geocode = require ('./geo_forecast.js/geocode')

const my_country = process.argv[2]

geocode ( my_country , (error , data) => {
    console.log("The Error is : " , error)
    console.log("The Geocode data is  : " , data)

    if (data) {
        forecast( data.latitude , data.longtitude , (error , data) => {
            console.log("The Error is : " , error)
            console.log("The Forecast data is  : " , data)
       } )
    } else {
        console.log("Something Error in the Data you Entered ")
    }
} ) 
