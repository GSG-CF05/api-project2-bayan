let app = document.querySelector("#root");
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let result = data.results;
    result.forEach((dat) => {
      let pokemon = document.createElement("div");
      pokemon.setAttribute("class", "pokemon");
      app.appendChild(pokemon);
      let name = document.createElement("div");
      name.setAttribute("class", "name");
      name.textContent = dat.name;
      pokemon.appendChild(name);
      let info = dat.url;
      fetch(info)
        .then((infos) => {
          return infos.json();
        })
        .then((d) => {
          let img = document.createElement("img");
          img.src = d.sprites.front_default;
          pokemon.appendChild(img);
          let details = document.createElement("div");
          details.setAttribute("class", "details");
          let span1 = document.createElement("span");
          span1.textContent = "height: " + d.height;
          details.appendChild(span1);
          let span2 = document.createElement("span");
          span2.textContent = "weight: " + d.weight;
          details.appendChild(span2);
          pokemon.appendChild(details);
        })
        .catch((error) => console.log(error));
    });
  }) 
  .catch(error=> console.log(error))