//1.feladat
//string
let string = "";
//tömb
let tömb = [];
//szám
let szam = 0;
//boolean (true or false)
let igaze = false;
//object
let object = {
  alma: 1,
  körte: 2,
  valami: 0,
};

//2. feladat.
//A const állandó, a let változhat!
const macska = 0; //0 marad mivel const.
let macskák = 0; // később növelhetem pl függvényen belül

//3. feladat.
//Referencia szerinti átadásnál módosul
//pl : Tömbhöz hozzáadunk egy elemet, hívás helyén megváltozik.
//Érték szerinti Paraméter átadás - pl Stringeknél : Hívás helyén nem változik meg.

//4. feladat

const containsElement = (arr, number) => {
  for (const el of arr) {
    if (el === number) {
      return true;
    }
  }
  return false;
};

//5. feladat
const otodik = (arr) => {
  let biggestage = 0;
  let legidosebb = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > biggestage) {
      legidosebb = arr[i].name;
    }
  }
  return legidosebb;
};

//6. feladat.
const metszet = (src1, src2) => {
  const dst = [];
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      if (src1[i] === src2[j] && !dst.includes(src1[i])) {
        dst.push(src1[i]);
      }
    }
  }
  return dst;
};

//7. feladat.
const valami = require("./module.js");

console.log(valami.osszeadas(2, 5));

//8. feladat
