const quotes = [
    {
        quote : "To send light into the darkness of men's hearts - such is the duty of the artist.",
        author: "Robert Schumamnn"
    },
    {
        quote : "Nothing right can be accomplished in art without enthusiasm.",
        author: "Robert Schumamnn"
    },
    {
        quote : "Endeavour to play easy pieces well and with elegance; that is better than to play difficult pieces badly.",
        author: "Robert Schumamnn"
    },
    {
        quote : "It is dreadful when something weighs on your mind, not to have a soul to unburden yourself to. You know what I mean. I tell my piano the things I used to tell you.",
        author: "Frédéric Chopin"
    },
    {
        quote : "Bach is an astronomer, discovering the most marvellous stars. Beethoven challenges the universe. I only try to express the soul and the heart of man.",
        author: "Frédéric Chopin"
    },
    {
        quote : "I wish I could throw off the thoughts which poison my happiness, and yet I take a kind of pleasure in indulging them.",
        author: "Frédéric Chopin"
    },
    {
        quote : "I shall seize fate by the throat; it shall certainly never wholly overcome me.",
        author: "Ludwig van Beethoven"
    },
    {
        quote : "Anyone who tells a lie has not a pure heart, and cannot make a good soup.",
        author: "Ludwig van Beethoven"
    },
    {
        quote : "To play a wrong note is insignificant. To play without passion is inexcusable!",
        author: "Ludwig van Beethoven"
    },
    {
        quote : "Don’t only practise your art, but force your way into its secrets.",
        author: "Ludwig van Beethoven"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;