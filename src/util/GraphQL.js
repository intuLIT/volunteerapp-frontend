export const GQL = {
  query: (q) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", "http://54.153.15.7:8080/graphql");
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

export const allUsersStartsWith = (start) =>
`{
  pokemon(name_Istartswith: ${start}) {
    edges {
    node {
      name
    }
  }
}`;
