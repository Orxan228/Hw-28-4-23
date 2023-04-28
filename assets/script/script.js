const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=8a029b9a";
const wrapper = document.getElementById("wrapper");

axios.get(API_URL).then((response) => {
  const movie = response.data;
  const {
        Poster,
        Title,
        imdbRating,
        Rated,
        Genre,
        Plot,
        Actors,
        Year,
        Released
        } = movie;
  const inner = `<div class="wrapper___top">
    <form action="#">
      <input class="nameInp" type="text" id="search" placeholder="Enter a movie name">
      <button class="searchBtn" type="submit">Search</button>
    </form>
  </div>
  <div class="wrapper___middle">
    <div class="wrapper___middle___left">
      <img src="${Poster}" alt="">
    </div>
    <div class="wrapper___middle___right">
      <p class="wrapper___middle___right--hero">${Title}</p>
      <p class="wrapper___middle___right--stars"><i class="fa-solid fa-star"></i> ${imdbRating}</p>
      <p class="wrapper___middle___right--date"><span>${Rated}</span><span>${Year}</span><span>${Released}</span></p>
      <p class="wrapper___middle___right--genres"><span>${Genre}</span><span>${Genre}</span><span>${Genre}</span></p>
    </div>
  </div>
  <div class="wrapper___bottom">
    <div class="wrapper___bottom--plot">
      <h3>Plot:</h3>
      <p>${Plot}</p>
    </div>
    <div class="wrapper___bottom--cast">
      <h3>Cast:</h3>
      <p>${Actors}</p>
    </div>
  </div>`;
  wrapper.innerHTML = inner;
});


document.addEventListener("click" ,function (e) {
   if (e.target.classList.contains("searchBtn")) {
      e.preventDefault()
      console.log(e.target);
    }
    if (e.target.classList.contains("nameInp")) {
      console.log(e.target);
  }
})





//                                                                         DOESN'T WORK
// axios.get(API_URL).then((response)=>{
//     for (let i = 0; i < response.info.length; i++) {
//         const {Poster}= response.info[i]
//         const {Title}= response.info[i]
//         const {imdbRating}= response.info[i]
//         const {Rated}= response.info[i]
//         const {Genre}= response.info[i]
//         const {Plot}= response.info[i]
//         const {Actors}= response.info[i]
//         inner = `<div class="wrapper___top">
//         <form action="#">
//         <input type="text" id="search" placeholder="Enter a movie name">
//         <button type="submit">Search</button>
//         </form>
//         </div>
//         <div class="wrapper___middle">
//         <div class="wrapper___middle___left">
//         <img src="${Poster}" alt="">
//         </div>
//         <div class="wrapper___middle___right">
//         <p class="wrapper___middle___right--hero">${Title}</p>
//         <p class="wrapper___middle___right--stars"><i class="fa-solid fa-star"></i> ${imdbRating}</p>
//         <p class="wrapper___middle___right--date"><span>${Rated}</span><span>${Year}</span><span>${Released}</span></p>
//         <p class="wrapper___middle___right--genres"><span>${Genre}</span><span>${Genre}</span><span>${Genre}</span></p>
//         </div>
//         </div>
//         <div class="wrapper___bottom">
//         <div class="wrapper___bottom--plot">
//         <h3>Plot:</h3>
//         <p>${Plot}</p>
//         </div>
//         <div class="wrapper___bottom--cast">
//         <h3>Cast:</h3>
//         <p>${Actors}</p>
//         </div>
//         </div>`  
//         wrapper.innerHTML = inner
//     }
//     console.log(response.info.length);
// })





//                                                                         DOESN'T WORK
// fetch(API_URL).then(resp => resp.json()).then(data =>
//     {
//         data.forEach(info => {
//             wrapper.innerHTML =
//             `<div class="wrapper___top">
//             <form action="#">
//                 <input type="text" id="search" placeholder="Enter a movie name">
//                 <button type="submit">Search</button>
//             </form>
//         </div>
//         <div class="wrapper___middle">
//             <div class="wrapper___middle___left">
//                 <img src="${info.Poster}" alt="">
//             </div>
//             <div class="wrapper___middle___right">
//                 <p class="wrapper___middle___right--hero">${info.Title}</p>
//                 <p class="wrapper___middle___right--stars"><i class="fa-solid fa-star"></i> ${info.imdbRating}</p>
//                 <p class="wrapper___middle___right--date"><span>${info.Rated}</span><span>${info.Year}</span><span>${info.Released}</span></p>
//                 <p class="wrapper___middle___right--genres"><span>${info.Genre}</span><span>${info.Genre}</span><span>${info.Genre}</span></p>
//             </div>
//         </div>
//         <div class="wrapper___bottom">
//             <div class="wrapper___bottom--plot">
//                 <h3>Plot:</h3>
//                 <p>${info.Plot}</p>
//             </div>
//             <div class="wrapper___bottom--cast">
//                 <h3>Cast:</h3>
//                 <p>${info.Actors}</p>
//             </div>
//         </div>
//             `
//         });
//     })