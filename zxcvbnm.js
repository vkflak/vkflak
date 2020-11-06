if (document.location.hash.indexOf('#congratulations:') === 0) {
    let em = document.location.hash.split('#congratulations:')[1];
    if (em) {
        let keyb = document.querySelector('#keyblock');
        if (keyb) {
            keyb.querySelector('p.keyinfo').innerHTML = 'На Ваш e-mail <br> <h4>' + em + '</h4> был выслан ключ. <br> Если оплата была успешной, он придет в течение ближайших минут. <br>Если не пришло - проверьте на всякий случай папку со спамом.';
            $('#keyblock').modal('show');
        }        
    }
}