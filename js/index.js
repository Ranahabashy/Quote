var listOfQuotes = [
    {
        quote: "It's not what happens to you, but how you react to it that matters.",
        author: "--Epictetus",
    },

    {
        quote: "Do not take life too seriously. You will not get out alive.",
        author: "--Elbert Hubbard",
    },
    {
        quote: "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "--Nelson Mandela",
    },
    {
        quote: "The best revenge is massive success.",
        author: "--Frank Sinatra",
    }
]
var cartona = ''
var lastIndex = -1;
function Quote() {
    do {
        random = Math.floor(Math.random() * listOfQuotes.length);
    } while (random === lastIndex);
    
    lastIndex = random; 

    cartona =
        `
 <p>${listOfQuotes[random].author}</p> 
 <p>${listOfQuotes[random].quote}</p>  `
    console.log(random);

    document.getElementById('btn').innerHTML = cartona

}


