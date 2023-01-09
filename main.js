const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

let disorders = originalDisorderFormat.split("|$|")
let joinDisorders = disorders.join("</div><div>")
console.log(`<div>${joinDisorders}</div>`)