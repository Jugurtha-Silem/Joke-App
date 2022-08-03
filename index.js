//https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const content = document.getElementById("content");

function getJocke() {

    const myApp = fetch("https://api.blablagues.net/?rub=blagues").then((res) => res.json()).then((data) => {
        const jocke = data.data.content;

        header.textContent = jocke.text_head;
        content.textContent = jocke.text !== " " ?
            jocke.text :
            jocke.text_hidden;

    });

}
getJocke();

document.body.addEventListener("click", getJocke);