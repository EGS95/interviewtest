const content = document.getElementById("content");

window.addEventListener("load", (e) => {
  e.preventDefault();
  fetch("http://localhost:5000/data")
    .then(res => res.json())
    .then((data) => {
      //console.log(data[0]);
      for (let i = 0; i < data.length; i++) {
        content.innerHTML += `<p> name: ${data[i].name}</p> <p> username: ${data[i].username}</p> <p> email: ${data[i].email}</p> <br/>`;
      }
    })
    .catch((err) => console.log(err));
});
