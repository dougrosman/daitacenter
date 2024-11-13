let string = ""

for(let i=1; i < 52; i++) {
    string+=(`<figure>\n<img src="images/daitacenter-${i}.jpg" alt="daitacenter">\n
                <figcaption>${i}</figcaption>
            </figure>\n`)
}

console.log(string)