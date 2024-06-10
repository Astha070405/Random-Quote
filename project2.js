const btn = document.getElementById("click");
const display = document.getElementById("display");
let quote = [
    "Avoid daydreaming about years to come.",
    "You are the most important  person in your life.",
    "Always be true to who you are and ignore what other people have to say about you.",
    "Only demonstrate your strength when its really required.",
    "Subscribe to Drop X Out."

]
btn.addEventListener("click",()=>{
    console.log("cliccked");
    let random = Math.floor(Math.random()*quote.length);
    display.textContent = quote[random];
})