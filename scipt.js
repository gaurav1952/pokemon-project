var xhr = new XMLHttpRequest();
let pokemon_name = "pikachu";
let url = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;

// xhr.open('GET', url, true)

// xhr.onload = function(){
//     var responseData = JSON.parse(xhr.responseText)
//     console.log(responseData)
//     // console.log(responseData.name)
//     // // console.log(responseData.moves)
//     // // console.log(responseData.moves)
//     // var moves = responseData.moves[0]
//     // var moves1 = responseData.moves[104]
//     // console.log(moves)
//     // console.log(moves1)

//     console.log(responseData.moves[1].version_group_details[2])
// }
// xhr.send()

let image = document.querySelector(".image");

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // imagelink_frontFemale = data.sprites['front_female']
    // imagelink_backFemale =data.sprites['back_female']
    // imgelement.src = imagelink_frontFemale
    // image.appendChild(imgelement)
    let selectedImage = [
      "back_default",
      "front_default",
      "front_female",
      "back_female",
    ];
    selectedImage.forEach(function (key) {
      if (data.sprites.hasOwnProperty(key)) {
        let imgelement = document.createElement("img");
        imgelement.src = data.sprites[key];
        image.appendChild(imgelement)
      }
    });
    keyvalue = data.sprites
keyvalue.forEach(element => {

        console.log(data.sprites)
    });
    // console.log(data.sprites['front_female'])
    // console.log(data.moves)
    // for(move in data.moves.move.n){
    //     console.log(move)
    // }
  });
