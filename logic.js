let btn = document.getElementById("Shorten");
btn.addEventListener('click', short);
async function short(){
    let Longurl = document.getElementById("Longurl").value;
    let Shorturl = document.getElementById("Shorturl");
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${Longurl}`)
   
    const data =await result.json();
    Shorturl.value = data.result.short_link2;
}