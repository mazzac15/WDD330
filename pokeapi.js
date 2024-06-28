const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
let results = null
async function getPokemon(url) {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            doStuff(data);
        } else {
            console.error('HTTP error:', response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
 
    
}
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    // const html = `<h2>${results.name}</h2>
    //               <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    // outputElement.innerHTML = html;
    console.log("first: ", results);
  }
  async function main() {
    const data = await getPokemon(url);
    if (data) {
        doStuff(data);
    }
    console.log("second: ", results);
}

main();