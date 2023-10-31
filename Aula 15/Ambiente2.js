let num = [5, 3, 1, 4, 2]
num.sort()
console.log (num)
console.log (`Meu velor tem ${num.length} posições.`)
for (let pos in num){
    console.log(`A posicção ${pos} tem o valor ${num[pos]}`)
}

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/