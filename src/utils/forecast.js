const request=require("request");
const forecast=(latt , long , callback) => {
    url="http://api.weatherstack.com/current?access_key=024983673c9ce02210dbff1a14224686&query="+latt+","+long+"&units=f";
    request({url,json:true},(error,{body}={}) => {
        if(error)
        {
            callback("Unable to connect to the weathe service !!");
        }
        else if(body.error)
        {
            callback('Unable to find location!!');
        }
        else
        {
            callback(undefined,"Weather Descriptions: "+ body.current.weather_descriptions+" and It is currently "+body.current.temperature+" But feels like: "+body.current.feelslike);
        }
    })
}
module.exports=forecast;