
const apiKey = 'gBYM7EGGlMldlmFrNeU6747bbaxghVZz';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then (respuesta => respuesta.json ( ))
    .then (({data}) => {

        //console.log (data.images.original_mp4.mp4); //para probar la url de la imagen

        const {url: mp4} = data.images.original;

        const img = document.createElement('img');
        img.src = mp4;

        document.body.append(img);

        
    })
    .catch (console.warn);