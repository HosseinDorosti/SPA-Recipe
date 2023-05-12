
let searchQ = "";
const APP_ID = "Use Your Own App ID Here";
const APP_key = "06e99b13162c42ccbbbc0d3e09b02175";
const searchFrm = document.querySelector("form");
const container = document.querySelector(".container");
const searchResultDiv = document.querySelector(".search-results");

// search for recipe from input form
searchFrm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQ = e.target.querySelector("input").value;
    fetchAPI();
});

async function fetchAPI() {
    let APIURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_key}&query=${searchQ}&number=50`;
    let response = await fetch(APIURL);
    const maindata = await response.json();
    console.log(maindata.results);
    APIURL = `https://api.spoonacular.com/recipes/${data.result.id}/information?apiKey=${APP_key}`;
    response = await fetch(APIURL);
    const URLdata = await response.json();
    console.log(data.results);
    genHTML(data.results, URLdata);
}

async function fetchsourceURL(id) {

}

function genHTML(results) {
    container.classList.remove("initial");
    let contHtml = "";
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_key}&id=${result.id}&informationincludeNutrition=false
    results.map((result) => {
        contHtml += `
      <div class="item">
        <img src="${result.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.title}</h1>
          <a class="button-view" target="_blank" href=${fetchsourceURL(result.id)}"
            }">View Recipe</a>
        </div>
        <p class="item-data">Calories: {result.maxCalories.toFixed(2)}</p>
        <p class="item-data">Diet label: {result.dietLabels.length > 0
                ? result.dietLabels
                : "No Data Found"
            }</p>
        <p class="item-data">Health labels: {result.recipe.healthLabels}</p>
      </div>
    `;
    });
    console.log(contHtml)
    searchResultDiv.innerHTML = contHtml;
}

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

/* const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");
const youtubeLink = document.querySelector(".youtubeLink");

WebCifarIcon.addEventListener("click", () => {
    WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
    WebCifarEl.classList.remove("active");
});
 */

