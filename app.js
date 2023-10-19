
let characters=["Tyler","Tammy","Taofeek","Suma"];
let charactersList = document.getElementById("charList");
console.log(characters);
let globali = 0;

const button1 = document.getElementById("addCharBtn");
    button1.addEventListener("click", () => {
    let newCharacter = prompt("Enter a character to the list: ");
    characters.push(newCharacter);

    console.log("Button Push")
});

const button2  = document.getElementById("buildList");
button2.addEventListener("click", ()=> {
for (i = globali; i < characters.length; ++i) {
    let li = document.createElement('li');
    li.innerText = characters[i];
    charactersList.append(li);
    globali  = globali + 1;
}});

// const button3  = document.getElementById("buildList");
// button3.addEventListener("click", ()=> {
//     globali = globali - 1;
//     characters.pop();
    
// });

const characterFacts = {
    firstName:"Rulia",
    lastName:"Protagonist",
    preferedStyle:"Mechanic",
    favoriteFood:"Poke Bowl",
    age:"15",
    quirk:"Views rules and laws as suggestions"
};

console.log(characters);




