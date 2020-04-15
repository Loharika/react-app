/*global fetch*/
fetch("https://restcountries.eu/rest/v2/all")
  .then(response => response.json())
  .then(json => {
    display(json);
  });
function display(data){
  alert(data);
  console.log(data);
}
