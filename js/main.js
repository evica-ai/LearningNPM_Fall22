// import always go at the top of teh file
// this is called an IIFE (immediately invoked function expression)
import { getData} from "./modules/dataMiner.js";

// its prettty common Javascript programming pattern
// also called a module file
// wrapped around brackets encloses the command in its own private module
(() => {
    console.log('fired');

    let theTeam = document.querySelector('#team-section'),
        theTemplate = document.querySelector('#bio-template').content;
    
        // debugger;

    function buildTeam(data) {
        // get all the keys (names) form the data object and use it to iterate through
        debugger;
        
        // get all key (names) from teh data object and use that to iterate through the data 
        const people = Object.keys(data); //Object.keys creates an array

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

        // let theName = document.querySelector('.username'),
        //     theDesc = document.querySelector('.user-bio');

        // // refer tot the object's keys (data) and use those values to update the app
        // theName.textContent = data.name;
        // theDesc.textContent = data.desc;

        // data.sayHello();
    }

    getData(buildTeam);
})();