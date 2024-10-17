let divison = document.querySelector(".apidata");
let userinput = document.querySelector("#userinput");
let pokeimagesdivison = document.querySelector(".pokeimagesdivision");
let available_pokemon = [
  "ditto",
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
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
];
let i;

document.addEventListener("DOMContentLoaded", () => {
  const divison = document.querySelector(".apidata");
  const userinput = document.querySelector("#userinput");
  const pokeimagesdivison = document.querySelector(".pokeimagesdivision");

  document.querySelector(".nightmode").addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
  });

  //search fuction

  const container = document.getElementsByClassName("userdivdata");
  //css for showing the data in js
  const suggetions = document.getElementById("suggetions");
  userinput.addEventListener("keyup", (e)=>{
    if (userinput.value === null) {
             suggetions.style.display = "none";
    }
    let results = [];
    let input = userinput.value.toLowerCase();
    if (input.length) {
          results = available_pokemon.filter((item) => {
            return item.toLocaleLowerCase().includes(input.toLocaleLowerCase());
          });
        }
        renderResults(results);
  })


  });

  function renderResults(results) {
    if (!results.length) {
      return suggetions.classList.remove("show");
    }
    let content = results
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join("");

    // console.log(content);
    suggetions.innerHTML = `
   <ul>
            <li class="suggetion_content">${content}</li>
          </ul>`;
  }

  // .addEventListener("input", async ()=>{
  //   const searchvalue = userinput.value
  //   console.log(searchvalue);
  //   const res = await fetch('./pika.json');
  //   const pokedatas = await res.json()
  //   console.log(pokedatas.pokemon)
  //   // console.log('pokedatas: ', pokedatas);
  //   //get matches to current text input
  //   let matches = pokedatas.pokemon.filter(pokedata => {
  //     const regex = new RegExp(`^${searchvalue}`, 'gi');
  //     return pokedata.pokemon.match(regex)
  //   });
  //   console.log(matches)

  // });

  //data load
  document.querySelector("#submit").addEventListener("click", () => {
    const uservalue = userinput.value.trim().toLowerCase();
    console.log("User input value: ", uservalue); // Debug user input

    if (uservalue) {
      const url = `https://pokeapi.co/api/v2/pokemon/${uservalue}`;
      console.log("Constructed URL: ", url); // Debug URL

      divison.textContent = ""; // Clear existing content
      pokeimagesdivison.innerHTML = "";

      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Fetched data: ", data); // Debug fetched data

          const htmldata = `
            <h3 class="pokemonheight">Height of ${data.name} is: ${data.height}</h3>
            <h3 class="pokemonexe">And their Base experience is: ${data.base_experience}</h3>
          `;
          divison.insertAdjacentHTML("afterbegin", htmldata);

          const imagesArray = data.sprites;
          const pokeimagehtml = `
            <img class="pokeimgs" src="${imagesArray.front_default}" alt="${data.name}'s front default">
            <img class="pokeimgs" src="${imagesArray.back_default}" alt="${data.name}'s back default">
            <img class="pokeimgs" src="${imagesArray.front_female}" alt="${data.name}'s front female default">
            <img class="pokeimgs" src="${imagesArray.back_female}" alt="${data.name}'s back female default">
          `;
          pokeimagesdivison.insertAdjacentHTML("afterbegin", pokeimagehtml);

          document.querySelectorAll(".divisionborder").forEach((border) => {
            border.classList.add("forborder");
          });
        })
        .catch((err) => {
          console.error("Error: ", err); // Log error to console
          const errorhtml = `
            <h3>Could not fetch the data. Error: ${err.message}</h3>
          `;
          divison.insertAdjacentHTML("afterbegin", errorhtml);
        });
    } else {
      const htmldata = `
        <h3>Enter a Pokémon name from the first generation!➕🌟⚡</h3><span>!(*￣(￣　*)</span>
      `;
      divison.insertAdjacentHTML("afterbegin", htmldata);
      pokeimagesdivison.innerHTML = "";
    }
  });
// });

// const search = document.getElementById('userinput').value.toLowerCase()
// const matchList = document.getElementById('suggetions')
// const  searchstate = async searchText => {
//   const res = await fetch('./pika.json')
//   const pokedata = await res.json();
//   console.log('pokedata: ', pokedata);

// }
// search.addEventListener('input', ()=>searchstate(search));
// search.addEventListener('input', ()=>{
//   console.log(search)
// });
