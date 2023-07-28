$(document).ready(async function() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon-color/yellow"
    );
    const data = await response.json();
    const source = $("#pokemon-list").html();
    const template = Handlebars.compile(source);
    const context = {
      pokemon: data.pokemon_species.slice(0, 20),
      title: "Pokemons",
    };
    const html = template(context);

    $("#result").html(html);
  } catch (error) {
    console.log(error);
  }
  $("#green").click(async function(){
    console.log("Zeleni botun");
  })
  $("#blue").click(async function(){
    console.log("Plavi botun");
  })
});