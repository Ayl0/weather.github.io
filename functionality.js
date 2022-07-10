$(document).ready(()=>{
    const form = $("#submission")
    form.submit( function(e) {
        e.preventDefault()
        const location = $(city).val()
        const url = 'http://api.weatherapi.com/v1/current.json?key=b6b069d6adc84b8ab51141132221007&q=' + location + '&aqi=yes'
        $.get(url, function(response){
            $("#weather-page").css("box-shadow", "0px 10px 30px 0px")
            $("#weather-page").css("height", "fit-content")
            $("#condition-img").attr("src", response.current.condition.icon)
            temperature = "It's " + response.current.temp_c + " \&deg;C in " + response.location.name
            $("h3").html(temperature)
            $("p").html(response.current.condition.text)
            $("h6").html("Last udpated on: " + response.current.last_updated)
        })
    })
})
