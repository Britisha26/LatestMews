const fact = document.querySelector("#facts");
const factoid = document.querySelector(".factoid");
const btnGenerate = document.querySelector("#generate");

const factFinder = async () => {
    fact.innerHTML="Loading...";
    const resolve = await fetch('https://catfact.ninja/fact')
    .then((resolve)=>{
        return resolve.json();
    })
    .then((data)=>{
        fact.innerText = data.fact;
        factoid.style.display = "block";
    })
    .catch((e)=>{
        console.log("Crashed Out, Here's why: ", e);
        alert("Sorry, api crashed, try reloading...");
    })
}

btnGenerate.addEventListener('click', factFinder);
