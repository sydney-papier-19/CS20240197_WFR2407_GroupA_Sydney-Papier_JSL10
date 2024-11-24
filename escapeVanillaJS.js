document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                //changed "resultRoom1" to "room1Result"
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        // 🪲 Bug: What's mssing from JS concepts?
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);//added 'async'
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);

        // 🪲 Bug: Incorrect function call
        //chanched second "jsConcepts" to call "reactConcepts"
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    //mark function as async to allow me to use await inside 
    document.getElementById("solveRoom3").addEventListener("click", async () => {
      //  
        try {
            //fetch() fetches a JSON file from the server and 'await' waits for the response before moving on
           const response = await fetch('directions.json');
           const directions = await response.json()

           // Calls the async navigateLabyrinth function with await(to wait for the function to complete)
           //then receives a result message
           const message = await navigateLabyrinth(directions);

           // Use innerHTML to display the result
           document.getElementById("room3Result").innerHTML = message;

        }
        //if an error is caught in the 'try{}' block the code inside the catch block will run 
        catch (error) {
            console.error('Error:', error);
            //the message "Failed to navigate the labyrinth." is displayed in the 'room3Result' element
            document.getElementById("room3Result").innerHTML = "Failed to navigate the labyrinth.";
        }      
    }); 

});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) =>
        //changed it "<" to ">" for the function to return the most recent book
        //and not the oldest book.
         new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    //'filter...' checks each element in setA and only includes it in the new set
    //if it also exists in setB. The result will only have the elements that are common to 
    //both sets only, (which is correct INTERSECTION logic).
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
       
       // By adding await before the setTimeout promise, the loop now waits for 1 second (setTimeout delay) 
       //before continuing to the next step, simulating a pause between each step.

        // added 'await'
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript.Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

