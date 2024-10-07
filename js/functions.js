

// Carga series por default, el buscador crea tarjetas de series dependiendo del nombre y muestra casting por medio del botón Show Cast!


const mainContainer = document.querySelector(".main__container");

fetch ("https://api.tvmaze.com/search/shows?q=a")
.then(res => res.json())
.then( (data) => {
    data.forEach(show => {
        const filmCard = document.createElement("article");
        filmCard.classList.add("film__card");
        mainContainer.appendChild(filmCard);

        const filmPicture = document.createElement("img");
        filmPicture.classList.add("film__picture");
        filmPicture.src = show.show.image.medium
        filmCard.append(filmPicture);

        const filmTitle = document.createElement("h2");
        filmTitle.textContent = show.show.name;
        filmCard.append(filmTitle);
        filmTitle.classList.add("film__title")
        //console.log(show.show.name)

        const filmPremiere = document.createElement("h3");
        filmPremiere.classList.add("film__premiere");
        filmPremiere.textContent = show.show.premiered;
        filmCard.append(filmPremiere);

        const castButton = document.createElement("p");
        castButton.classList.add("card__cast__btn");
        castButton.setAttribute('id', "card__cast__btn");
        castButton.innerHTML = "Show Cast!";
        filmCard.append(castButton);


        castButton.addEventListener("click", function () {
            mainContainer.innerHTML = "";

            fetch(`https://api.tvmaze.com/shows/${show.show.id}/cast`)
            .then(res => res.json())
            .then((data) => {
                data.forEach(show => {
                    console.log(show.person.name);

                    const filmCard = document.createElement("article");
                    filmCard.classList.add("film__card");
                    mainContainer.appendChild(filmCard);
                    
                    const filmTitle = document.createElement("h2");
                    filmTitle.textContent = show.person.name;
                    filmCard.append(filmTitle);
                    filmTitle.classList.add("film__title")
                })
                
            });

           

        })
        console.log(show.show);

    })
})

const mainSearchBar = document.querySelector(".main__searchBar");
const searchButton = document.querySelector("#search__button");
const searchContent = document.querySelector("#searchbar__input").value;


searchButton.addEventListener("click", function () {
    mainContainer.innerHTML = "";
    const searchContent = document.querySelector("#searchbar__input").value;
    fetch (`https://api.tvmaze.com/search/shows?q=${searchContent}`)
    .then(res => res.json())
    .then( (data) => {
    data.forEach(show => {
        const filmCard = document.createElement("article");
        filmCard.classList.add("film__card");
        mainContainer.appendChild(filmCard);

        const filmPicture = document.createElement("img");
        filmPicture.classList.add("film__picture");
        filmPicture.src = show.show.image.medium
        filmCard.append(filmPicture);

        const filmTitle = document.createElement("h2");
        filmTitle.textContent = show.show.name;
        filmCard.append(filmTitle);
        filmTitle.classList.add("film__title")
        //console.log(show.show.name)

        const filmPremiere = document.createElement("h3");
        filmPremiere.classList.add("film__premiere");
        filmPremiere.textContent = show.show.premiered;
        filmCard.append(filmPremiere);

        const castButton = document.createElement("p");
        castButton.classList.add("card__cast__btn");
        castButton.setAttribute('id', "card__cast__btn");
        castButton.innerHTML = "Show Cast!";
        filmCard.append(castButton);

        castButton.addEventListener("click", function () {
            mainContainer.innerHTML = "";

            fetch(`https://api.tvmaze.com/shows/${show.show.id}/cast`)
            .then(res => res.json())
            .then((data) => {
                data.forEach(show => {
                    console.log(show.person.name);

                    const filmCard = document.createElement("article");
                    filmCard.classList.add("film__card");
                    mainContainer.appendChild(filmCard);

                    const filmTitle = document.createElement("h2");
                    filmTitle.textContent = show.person.name;
                    filmCard.append(filmTitle);
                    filmTitle.classList.add("film__title")
                })
                
            });

           

        })

        console.log(show.show.id);

    })
})
    console.log(searchContent);
});



const castButton = filmCard.querySelectorAll(".card__cast__btn");
console.log(castButton);

