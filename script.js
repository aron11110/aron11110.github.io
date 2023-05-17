let pealkiri = document.getElementsByTagName("h1");

let pealkiri_inter;
pealkiri[0].addEventListener("mouseover", function() {
    pealkiri_inter = setInterval(() => {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*50);
        this.style.color = r, g, b;
    }, 50);
});
pealkiri[0].addEventListener("mouseleave", function() {
    this.style.color = "";
    clearInterval(pealkiri_inter)
});

let sisu = document.getElementById("tekst");

let sisu_inter;
sisu.addEventListener("mouseover", function() {
    sisu_inter = setInterval(() => {
        this.style.color = Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255);
    }, 100)
})
sisu.addEventListener("mouseleave", function() {
    this.style.color = "";
    clearInterval(sisu_inter);
})

let oopi_tahed = document.getElementsByClassName("tahed")
let tahed = [];
for (let index = 0; index < oopi_tahed.length; index++) {
    const element = oopi_tahed[index];
    tahed.push(element.children);
}

for (let index = 0; index < tahed.length; index++) {
    const element = tahed[index];
    for (let indeks1 = 0; indeks1 < element.length; indeks1++) {
        element[indeks1].addEventListener("mouseover", function() {
            this.style.color = "pink";
        })
        element[indeks1].addEventListener("mouseleave", function() {
            setTimeout(() => {
                this.style.color = "";
            }, 1000)
        })
    }
}



