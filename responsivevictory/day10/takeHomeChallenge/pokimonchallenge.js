async function getPokemon(pokemonName) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);

  //   then(
  // (res) => {
  //   return res.json();
  // }
  //   );
  // .then((pokemonName) => {
  //   const pokemonList = pokemonName.results;
  //   pokemonList.geElement((pokemonName) => {
  //     console.log("Name", pokemonName.name);
  //   });
  // })
  const data = await res.json();
  alert("You have chosen pokemon: " + data.name);
  //console.log(data);
}
let fname = prompt("Enter a pokemon name");
getPokemon(fname);
