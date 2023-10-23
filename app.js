
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



for (i = 0; i <= 20; i += 2 ) {
    console.log(i);
}
 let j = 1;
while (j <= 20) {
    console.log(j);
    j+=2;
}

for (i = 10; i>=0;i--) {
    console.log(i);
}