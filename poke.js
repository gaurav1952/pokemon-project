let divison = document.querySelector(".apidata");
let userinputbe = document.querySelector("#userinput");

let available_pokemon = [
  "bulbasaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  " butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#submit").addEventListener("click", () => {
    let uservalue = document.querySelector("#userinput").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${uservalue}`;
    divison.textContent = "";
    if (uservalue != "") {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);

          let htmldata = `
       <h3 class = "pokemonheight"> Height of ${data.name} is ${data.height}</h3>
       <h3 class = "pokemonexe"> And their Base exprience is ${data.base_experience}</h3>
      `;
          divison.insertAdjacentHTML("afterbegin", htmldata);
          // divison.appendChild(htmldata)
          userinputbe.value = "";
        });
    } else {
      let htmldata = `
        <h3> Enter a pokemon name from first genration </h3>
      `;
      divison.insertAdjacentHTML("afterbegin", htmldata);
    }
  });
});

//todo make it async await
// add click down page to show all the available pokemon
// add suggestons
// make it mistake proof if someone enter the wrong pokemon
// run through array to chaeck if the usergiven poke mon is availvable or not
// toggle to darkmode

// let pokemon_name = document.querySelector(".uservalue");
// let pokedata = document.querySelector(".container");
// let submitbtn = document.querySelector(".submitbtn");
// let globalpokedata = []
// submitbtn.addEventListener("click", () => {
//   uservalue = pokemon_name.value;
//   console.log(uservalue);
//   let url = `https://pokeapi.co/api/v2/pokemon/${uservalue}`;
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     heightnum = data.height;

//     console.log(data);
//     console.log(data.name)
//     console.log(data.weight)
//     console.log(data.sprites["back_default"])
//     pokedata.innerHTML = data.height;
//   })
//   .catch((err)=>{
//     pokedata.innerHTML = err
//   })

//   fetch(url)
//   .then(response=>{
//     if (!response.ok){
//       throw new Error("network error")

//     }
//     return response.json()
//   })
//   .then(data=>{
//     globalpokedata = data
//     processData(globalpokedata);
//   })
//   .catch(error=>{
//     console.log(error);
//   })

//     pokedata = globalpokedata.height
// });
