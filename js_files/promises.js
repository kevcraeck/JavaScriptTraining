// Lab 7 - Promises
/*
Your server hosts a set of files. The first file contains the title of a story and the urls of all
the chapters, in a json format. The other files contain the title and the content of each
chapter of the story.
    1. You want to:
        - Indicate that your page is loading the story.
        - Fetch the JSON file for the story.
        - Add title of the story to the page.
        - Start fetching each chapter as fast as possible (in parallel instead of sequentially).
        - Add each chapter of the story to the page as fast as possible, sequentially in
          the correct order (you don't want chapter 3 to be shown before chapter 2).
        - Indicate that the loading has finished.
The file of the story has the following format:
    {
        "title": "Welcome to Promiseland",
        "chapterUrls": [
        "./Foreword.json",
        "./Introduction.json",
        "./Chapter1.json",
        "./Chapter2.json",
        "./Chapter3.json"
        ]
    }

The other files have the following format:
    {
        "title": "chapter 1",
        "content": "Once upon a time, a promise was made."
    }
*/
let book = {
  title: "Welcome to Promiseland",
  chapterUrls: [
    "js_files/book/Foreword.json",
    "js_files/book/Introduction.json",
    "js_files/book/Chapter1.json",
    "js_files/book/Chapter2.json",
    "js_files/book/Chapter3.json",
  ],
};

fetch("js_files/book/story.json").then(x => x.json()).then(story => {
    console.log('story:', story)

    let chapterPromises = [];

    for(let chapterUrl of story.chapterUrls) {
        console.log('chap url', chapterUrl);
        chapterPromises.push(fetch(chapterUrl).then(x => x.json()))
    }

    Promise.all(chapterPromises, results => {
        console.log('results:', results)
    })
})

//Deze oploassing houdt nog geen rekening met de juiste volgorde
let book2 = () => {
  for (let chap of book.chapterUrls) {
    fetch(chap)
      .then((x) => x.json())
      .then((result) => {
        console.log(`${result.title}
        ${result.content}`);
      });
  }
};

// book2();

// Onjuiste - Uitgebreide versie
// let fore = fetch("js_files/Foreword.json").then((x) => x.json());
// let intro = fetch("js_files/Introduction.json").then((x) => x.json());
// let chap1 = fetch("js_files/Chapter1.json").then((x) => x.json());
// let chap2 = fetch("js_files/Chapter2.json").then((x) => x.json());
// let chap3 = fetch("js_files/Chapter3.json").then((x) => x.json());

// Promise.allSettled([fore, intro, chap1, chap2, chap3]).then((results) => {
//     for (let chap of results) {
//         console.log(`${chap.value.title}
//         ${chap.value.content}`)
//     }
// });
