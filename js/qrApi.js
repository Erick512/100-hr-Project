let dataToConvert = 'https://friver.netlify.app/profilepreview'

document.querySelector('.qrCode').src = `https://api.qrserver.com/v1/create-qr-code/?data=${dataToConvert}&amp;size=100x100`