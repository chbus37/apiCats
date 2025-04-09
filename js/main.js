const catAPI = `https://api.thecatapi.com/v1/images/search`;
const $imgContainer = document.querySelector("#img-container");
const $btn = document.querySelector("#btn");

$btn.addEventListener("click", () => {
  fetch(catAPI)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      console.log(data);
      const catImagUrl = data[0].url;
      $imgContainer.style.backgroundImage = `url('${catImagUrl}')`;
    })
    .catch((err) => console.error(err));
});
