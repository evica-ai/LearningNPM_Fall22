// imports always go at the top of the file
// this is called an IIFE (immediately invoked function expression)
import { getData } from "./modules/dataMiner.js";

// it's a pretty common JavaScript programming pattern
// also called a module file
(() => {
    console.log('fired!');

    let theTeam = document.querySelector('#team-section'),
        theTemplate = document.querySelector('#bio-template').content,
        buttonContainer = document.querySelector('.queryControls');

        // debugger;

    function buildTeam(data) {
        // get all the keys (names) from the data object and use that to iterate through the data
        debugger;
        
        const people = Object.keys(data); // Object.keys creates an array

        people.forEach(prof => {
            // copy the template's contents
            let panel = theTemplate.cloneNode(true);

            // get a reference to the template's elements
            let containers = panel.firstElementChild.children;

            // grab the image from the object and set it as the source 
            containers[0].querySelector('img').src = `images/${data[prof].avatar}`;

            containers[1].textContent = data[prof].name;
            containers[2].textContent = data[prof].role;
            containers[3].textContent = data[prof].nickname;

            theTeam.appendChild(panel);
        })
    }

    function buildJoke(joke) {
        // debugger;
        let jokeText = document.querySelector('.query-result');

        jokeText.textContent = joke.value;
    }


    function addCatButtons(categories) {
        // for every item from the list are filtered through expect ecplicit
        let activeButtons = categories.filter(item => item !== 'explicit').slice(0, 6);
    
        activeButtons.forEach(button => {
            let buttonEl = `<button class="joke-button" data-cat=${button}>${button}</button>`;
        
            buttonContainer.innerHTML += buttonEl;
        })
    }

    function getJoke(event) {
        // debugger;
        // if there's not a category on a clikc, then dont do anything
        // because that'll just throw an error -> category targetCategor wont be defined
        if (!event.target.dataset) { return; }
        // if there is a category clicked (custom data attribute), retrieve it and use that as the query parameter
        let targetCategory = event.target.dataset.cat;

        getData(`https://api.chucknorris.io/jokes/random?category=${targetCategory}`, buildJoke);
    }

    // add event handling to all the buttons
    buttonContainer.addEventListener('click', getJoke);

    getData('https://api.chucknorris.io/jokes/categories', addCatButtons);

    // getData('./data.json', buildTeam);
    // getData('https://api.chucknorris.io/jokes/random', buildJoke);

    
})();
        // let theName = document.querySelector('.username'),
        //     theDesc = document.querySelector('.user-bio');

        // // refer tot the object's keys (data) and use those values to update the app
        // theName.textContent = data.name;
        // theDesc.textContent = data.desc;

        // data.sayHello();
