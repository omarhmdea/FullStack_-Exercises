const determineWeather = temp => temp > 25 ? "hot" : "cold"
    
const commentOnWeather = temp => `It's ${determineWeather(temp)}`

console.log(commentOnWeather(30)); //returns "It's hot"
console.log(commentOnWeather(22)); //returns "It's cold"