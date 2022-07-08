function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} hora(s) e ${min} minuto(s).`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'peq3.png'
        document.body.style.background = '#c0ab48'
    } else if (hora >= 12 && hora > 18) {
        //BOA TARDE
        img.src = 'peq2.png'
        document.body.style.background = '#82a049'
    } else {
        //BOA NOITE
        img.src = 'peq.png'
        document.body.style.background = '#465e82'
    }
}

