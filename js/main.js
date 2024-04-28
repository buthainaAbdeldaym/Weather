// div1
var day=document.querySelector(".weather .div1 .head1 .day"),
    date=document.querySelector(".weather .div1 .head1 .date"),
    city=document.querySelector(".weather .div1 .content .city"),
    degree1=document.querySelector(".weather .div1 .content .degree1 span"),
    icon=document.querySelector(".weather .div1 .content .degree1 .icon"),
    sp1=document.querySelector(".weather .div1 .content .sp1"),
    case1=document.querySelector(".weather .div1 .content .cases .case1"),
    case2=document.querySelector(".weather .div1 .content  .cases .case2"),
    case3=document.querySelector(".weather .div1 .content  .cases .case3");



// ==============================================================================


var currentPosition="cairo",
    days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    months = ['January','February','March','April','May','June','July','August','Spetember','October','November','December'];



// ==========================================================================================
   
// functions


var input=document.querySelector(".enter .input");
input.addEventListener("keyup",function(){
  currentPosition=input.value.trim().toLocaleLowerCase();
  getWeatherData(currentPosition);
})
var btn=document.querySelector(".enter .btn");
btn.addEventListener("click",function(){
  currentPosition=input.value.trim().toLocaleLowerCase();
  getWeatherData(currentPosition);
})
// http://api.weatherapi.com/v1 4919e254fe79469396e83959221311 
var returned_data;
async function getWeatherData (currentPosition){
  var apiResult = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4919e254fe79469396e83959221311&q=${currentPosition}&days=3`)
  returned_data = await apiResult.json();
  today();
  NextDay();
}
 getWeatherData(currentPosition);


 let d =new Date();
function today(){
  day.innerHTML = days[d.getDay()];
  date.innerHTML = `${d.getDate()} ${months[d.getMonth()]}`;
  city.innerHTML = returned_data.location.name;
  degree1.innerHTML = returned_data.current.temp_c;
  icon.setAttribute("src",`https:${returned_data.current.condition.icon}`)
  sp1.innerHTML = returned_data.current.condition.text;
  case1.innerHTML = returned_data.current.humidity
  case2.innerHTML= returned_data.current.wind_kph
  case3.innerHTML = returned_data.current.wind_dir
}




 var nextDay=document.querySelectorAll(".next-day"),
  icon2=document.querySelectorAll(".icon2"),
  mG=document.querySelectorAll(".max-degree"),
  mg=document.querySelectorAll(".min-degree"),
  sp2=document.querySelectorAll(".sp2");


function NextDay(){
  for (let i=0; i<nextDay.length;i++){
    nextDay[i].innerHTML = days[new Date(returned_data.forecast.forecastday[i+1].date).getDay()] ;
    icon2[i].setAttribute("src",`https:${returned_data.forecast.forecastday[i+1].day.condition.icon}`)
    mG[i].innerHTML= returned_data.forecast.forecastday[i+1].day.maxtemp_c;
    mg[i].innerHTML= returned_data.forecast.forecastday[i+1].day.mintemp_c;
    sp2[i].innerHTML = returned_data.forecast.forecastday[i+1].day.condition.text;
  }
  
}