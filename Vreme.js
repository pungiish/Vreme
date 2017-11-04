var lat;
var long;
var url = "https://fcc-weather-api.glitch.me//api/current?";
var enota = "&#8451;";
var slika = $("body");
var izpis;

$(document).ready(function() {
  //vpraša  za lokacijo
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
  } else {
    alert("Brskalnik ne podpira geolokacije.");
  }
});

function success(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  url += "lon=" + long + "&lat=" + lat;
  $.get(url, function(data) {
    function izpis(data){
  if(data.weather[0].main==="Clear"){
    izpis="Jasno";
  }
      else if(data.weather[0].main==="Clouds"){
        izpis="Oblačno";
      }
      else if(data.weather[0].main==="Rain"){
        izpis="Deževno";
      }
      else if(data.weather[0].main==="Thunderstorm"){
        izpis="Nevihtno";
      }
      else if(data.weather[0].main==="Drizzle"){
        izpis="Škropi";
      }
      else if(data.weather[0].main==="Snow"){
        izpis="Sneži";
      }
      else if(data.weather[0].main==="Atmosphere"){
        izpis="Megleno";
      }
      else if(data.weather[0].main==="Extreme"){
        izpis="Ekstremne razmere";
      }
    return izpis;
  
}
    $("#mesto").html(data.name);
    $("#lat").html(
      "Temperatura: " +
        Math.floor(data.main.temp) +
        " " +
        enota +
        "<br>" +
      izpis(data) + 
        "<br> <img src='" +
        data.weather[0].icon +
        "'</img>"
    );
    if (data.weather[0].main == "Clouds") {
      slika.css(
        "background",
        "url(https://source.unsplash.com/v9bnfMCyKbg/2000x1800) no-repeat center center"
      );
    } else if (data.weather[0].main == "Rain") {
      slika.css(
        "background",
        "url(https://source.unsplash.com/Nw_D8v79PM4/2000x1800) no-repeat center center"
      );
    } else if (data.weather[0].main == "Clear") {
      slika.css(
        "background",
        "url(https://source.unsplash.com/b7TuxjXs9j8/2000x1800) no-repeat center center"
      );
    } else if (data.weather[0].main == "Thunderstorm") {
      slika.css(
        "background",
        "url(https://source.unsplash.com/trnTvywx2Rg/2000x1800) no-repeat center center"
      );
    } else if (data.weather[0].main == "Drizzle") {
      slika.css(
        "background",
        "url(https://source.unsplash.com/IbsV7A0PGVQ/2000x1800) no-repeat center center"
      );
    } else if (data.weather[0].main == "Snow") {
      slika.css(
        "background",
        "url(https://source.unsplash.com/a3iBX9S96UY/2000x1800) no-repeat center center"
      );
    } else if (data.weather[0].main == "Atmosphere") {
      slika.css(
        "background",
        "url(https://source.unsplash.com/IY8C9OeQsoU/2000x1800) no-repeat center center"
      );
    } else if (data.weather[0].main == "Extreme") {
      slika.css(
        "background",
        "url(https://source.unsplash.com/jh2KTqHLMjE/2000x1800) no-repeat center center"
      );
    }
  });
}

function fail() {
  alert("Fail!");
}

