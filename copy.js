let newURL = document.getElementById("Shorturl");
let copyButton = document.getElementById("copy");
copyButton.onclick =()=>{
    newURL.select();
    window.navigator.clipboard.writeText(newURL.value);
}