let num = [8, 7, 5, 3 ]
num.push(1)
num.sort()
console.log (num)
console.log (`Meu vetor tem ${num.length} posições.`)
console.log (num[0])
let pos = num.indexOf(250) 
if (pos == -1) {
    console.log ('Valor não foi encontrado!')
} else {
console.log(`O valor ${num[pos]} está na posição ${pos}`)
}