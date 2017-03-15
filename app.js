var values = [100, 200, 300, 400]
var i = 0;
var j = 0;
var whileSum = 0;
var forSum = 0;
while (i < values.length) {
    whileSum += values[i]; // add one by one
    i++
}
for(j in values) { // get array in variable
    forSum += values[j];
}
document.write("Sum from while is "+whileSum +"<br>For is "+forSum);
console.log("Sum from while is "+whileSum +"<br>For is "+forSum); // consoling the output;