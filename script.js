function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#BBE4FB'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#C38344'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#315165'
    }
}