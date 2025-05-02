function practice(){
    console.log("practice")
}

let tekst1 = "Tere"
let tekst2 = tekst1

tekst1 = "head aega"

console.log(tekst1, tekst2)

let massiiv1 = ["Tere", "head aega"]
let massiiv2 = massiiv1
console.log(massiiv1, massiiv2)


let massiiv3 = ["Tere", "head aega"]
let massiiv4 = [...massiiv3]
massiiv3[0] = "Tere tulemast"


export default practice
