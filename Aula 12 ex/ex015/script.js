function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fAno.value)
            var gênero = ''
            var img = document.createElement ('img')
            img.setAttribute('id' , 'foto')
            
            if (fsex[0].checked) {
                gênero = 'Homem'
                if (idade >=0 && idade < 10) {
                    //Criança
                    img.setAttribute('src' , 'imgmenino.jpg')
                }  else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src' , 'imghomemjovem.jpg')
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src' , 'imghomemadulto.jpg')
                } else {
                    //Idoso
                    img.setAttribute('src' , 'imghomemidoso.jpg')
                }
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >=0 && idade < 10) {
                    //Criança
                    img.setAttribute('src' , 'imgmenina.jpg')
                }  else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src' , 'imgmulherjovem.jpg')
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src' , 'imgmulheradulta.jpg')
                } else {
                    //Idoso
                    img.setAttribute('src' , 'imgmulheridosa.jpg')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
            res.appendChild(img)
            img.setAttribute('style' , 'border-radius: 50%')
            img.setAttribute('width' , '250')
            img.setAttribute('height' , '250') //edição do tamanho das fotos
        }


}
