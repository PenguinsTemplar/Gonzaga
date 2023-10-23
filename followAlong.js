
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

// // Chicago Bears colors
// const bearsPalette = {
//     bearOrange:'#C83803',
//     bearBlue:'#0B162A'
// };

// const characterFacts = {
//     firstName:"Rulia",
//     lastName:"Protagonist",
//     preferedStyle:"Mechanic",
//     favoriteFood:"Poke Bowl",
//     age:"15",
//     quirk:"Views rules and laws as suggestions"
// };

// const userReviews = {};

// userReviews['queenBee99'] = 4.0
// userReviews.mrSmith80 = 3.5;

// console.log(characters);

// const student = {
//     firstName : 'Tammy',
//     lastName : 'Haasakker',
//     strenghts : ['Math','Reliable','Violence'],
//     exams : {
//         midterm : 92,
//         final : 84
//     }
// };

// const avg = (student.exams.midterm + student.exams.final) / 2;
// console.log(avg);


// const game = {
//     player1: {
//         username:'Sally',
//         playingAs: 'X'    },
//     player2: {
//         username:'Maple',
//         playingAs: 'O'
// },
// board: [['O',null,'X'],
//         ['X','O','X'],
//         ['O',null,null]]
// };

// console.log(game.board[2]);

// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "https://bit.ly/2ysFran"
//   };

//   for (let character of characters){
//     console.log(character);
//   }

//  console.log(Object.values(characterFacts));

// //  4 main loops - For, While, Infinite (bad), Iterate over arays and stuff

//  for (i = 1; i <= 20; i++) {
//  console.log(`${i}x${i} = ${i * i}`
//  )
// };

// const animals = ['lions','tigers','bears','vikings'];

// for (let i = 0; i<animals.length; i++){
//     console.log(i, animals[i]);
// }

// const myStudents =[
//     {
//         firstName : 'Zeus',
//         grade : 85
//     },
//     {
//         firstName : 'Thor',
//         grade : 70
//     },
//     {
//         firstName : 'Vishnu',
//         grade : 90
//     },
//     {
//         firstName : 'Samus',
//         grade : 12
//     },
// ];

// for(let i = 0; i< myStudents.length; i++) {
//     let student = myStudents[i];
//     console.log(`${student.firstName} scored ${student.grade}`);
// }

// let str = 'LOL';
// for (let i = 0; i <= 10; i++){
//     console.log('Outer Loop:', i);
//     for (let j = 10; j >=0; j-= 2) {
//     console.log('  Inner Loop:', j);
//     }
// };

// const gameBoard = [
//     [2,4,8,16],
//     [32,64,128,256],
//     [512,1024,2048,4096],
//     [8192,16384,32768,65536],
// ];

// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++){
//     let row = gameBoard[i];
//     for (let j = 0; j < row.length; j++) {
//         totalScore += row[j];
//     }
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let j = 0;
// while (j <= 5) {
//     console.log(j);
//     j++;
// }

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// let gCount = 0;

// console.log(target);

// while (!notGameOver){
//     if(target === guess )break;
//     let i = 0;
//     i = gCount++;
//     console.log(`You're guess is:, ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }

// console.log(`Target: ${target} Guess: ${guess}`)
// console.log(`Congrats! You Win!`)
// console.log(`It took: ${gCount} Guesses`);

// let subreddits = ['Fooseball','Jousting','Quiddich','Hurling']
// ;
// console.log("  For:")
// for(let i = 0; i < subreddits.length; i++){
//     console.log(subreddits[i]);
// }
// console.log("  For of:")
// for (let sub of subreddits) {
//     console.log(sub);
// }

// for     (let char of 'yodelehehoooo!'){
//     console.log(char.toUpperCase())
// }

// const magicSquare = [
//     [2,7,6],
//     [9,5,1],
//     [4,3,8]
// ];
// console.log('For loop:')
// for(let i = 0; i<magicSquare.length; i++){
//     let row = magicSquare[i];
//     let sum = 0;
//     for ( let j = 0; j < row.length; j++){
//         console.log(row[j]);
//         sum +=row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// };


// console.log('For-of loop:')

// for(let row2 of magicSquare){
//     let sum2 = 0;
//     for (let num2 of row2){
//         sum2+= num2;
//     }

// console.log(`${row2} summed to ${sum2}`);
// }
// const words1 = ['taco','paint brush','bagel','nails'];
// const words2 = ['mail box','shipping label','speaker','old ham'];

// for (let i = 0; i < words1.length; i++){
//     console.log(`${words1[i]} ${words2[i]}`);
// }

const movieReviews = {
    Arrival : 9.5,
    Alien : 6,
    'Kill Bill' : 7,
    Brick : 8.3,
    'Groundhogs Day' : 10,
    'To wong fu, thanks for everything, Julie Nemar' : 7.5
};

console.log(Object.keys(movieReviews));

for (let m of Object.keys(movieReviews)) {
    console.log(m);
}

const ratings = Object.values(movieReviews);
for (let r of ratings){
    let total = 0;
    for(let r of ratings){
        total +=r;
    }
    let avg = total /= ratings.length;
    console.log(avg);
}