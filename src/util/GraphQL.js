export const GQL = {
  query: (q) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", "http://localhost:3003/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function () {
      console.log('data returned:', xhr.response);
    }
    xhr.send(JSON.stringify({
      query: q
    }));
  }
}

export const pokemonQuery =
`{
  pokemon(id: "1") {
      name,
      thumbnail,
      favoriteMove {
        id
      }
    }
}`;
