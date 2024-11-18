const fecha1 = new Date();
const fecha2 = new Date(2020,2,18);

var resta = fecha1.getTime() - fecha2.getTime()
var resta2 = (Math.round(resta/ (1000*60*60*24)))

console.log(`llevamos ${resta2} días`);