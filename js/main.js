// import always go at the top of teh file
// this is called an IIFE (immediately invoked function expression)
import { person } from "./modules/data.js";

// its prettty common Javascript programming pattern
// also called a module file
// wrapped around brackets encloses the command in its own private module
(() => {
    console.log('fired');

    let theTeam = document.querySelector('#team-section'),
        theTemplate = document.querySelector('#bio-template').content;
  

    function loadData() {
        // get all key (names) from teh data object and use that to iterate through the data 
        const people = Object.keys(person); //Object.keys creates an array

        people.forEach(prof => {
            // copy the template's contents
            let panel = theTemplate.cloneNode(true);

            // get a reference to the template's elements
            let containers = panel.firstElementChild.children;

            // grab the image from the object and set it as the source
            containers[0].querySelector('img').src = `images/${person[prof].avatar}`;

            containers[1].textContent = person[prof].name;
            containers[2].textContent = person[prof].role;
            containers[3].textContent = person[prof].nickname;

            theTeam.appendChild(panel);
        })

        // let theName = document.querySelector('.username'),
        //     theDesc = document.querySelector('.user-bio');

        // // refer tot the object's keys (person) and use those values to update the app
        // theName.textContent = person.name;
        // theDesc.textContent = person.desc;

        // person.sayHello();
    }

    loadData();
})();