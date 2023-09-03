// function Araba(marka, model) {
//     this.marka = marka;
//     this.model = model;
// }

// Araba.prototype.bilgiVer = function() {
//     return `Bu araba ${this.marka} marka, ${this.model} model.`;
// };

// const araba1 = new Araba("Toyota", "Corolla");
// const araba2 = new Araba("Honda", "Civic");

// console.log(araba1.bilgiVer()); // Bu araba Toyota marka, Corolla model.
// console.log(araba2.bilgiVer()); // Bu araba Honda marka, Civic model.



// const deneme =  {
//     deneme2: "Merhaba, bu bir özelliktir ",
//     foo: function(){
//         console.log("bu bir metottur")
//     }
// }



// console.log(deneme.deneme2)

// deneme.foo()



// let dizi1 = [1, 2, 3]
// let dizi2 = [...dizi1, 4, 5, 6]

// console.log(dizi2)


// const nesne1 = { a: 1, b: 2 };
// const nesne2 = { ...nesne1, c: 3 };

// console.log(nesne2)



// let dizi  = [1, 2, 3, 4, 5,]

// for(let elaman of dizi){
//     console.log(elaman)
// }




// let score = [1, 2, 3, 4 ,5]

// let [score1, score2, ...digerskorlar] = score

// console.log(score1, score2, digerskorlar)



// let [,pronoun,,name]=["Merhaba","benim","adım","Mehmet"]

// console.log(pronoun)
// console.log(name)



// let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
// let {favoriteColor:foo}=person;

// console.log(foo)



function reverseString(s) {
    let reverseString = s.toString().split('').reverseString().join('');
    
    return parseInt(reverseString);
}

let s = 1234;
let t = reverseString(s)

console.log(s)