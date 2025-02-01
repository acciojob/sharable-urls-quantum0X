const form = document.getElementById("form");
const urlElement = document.getElementById("url");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;

  let queryString = ``;
  if(name && year) queryString = `?name=${name}&year=${year}`
  else if(name) queryString = `?name=${name}`
  else if(year) queryString = `?year=${year}`	

  urlElement.innerText = `https://localhost:8080/${queryString}`;
});