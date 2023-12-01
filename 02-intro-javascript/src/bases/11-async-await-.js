

/* const getImagenPromesa = () => {
    const promesa = new Promise((resolve, reject) => {
        resolve('https://url-imagen-resuelta.com')
    })
    return promesa;
}

getImagenPromesa()
    .then(console.log) */
const getImagen = async() => {
    try {
        
        const apiKey = 'gBYM7EGGlMldlmFrNeU6747bbaxghVZz'; //apiKey = gBYM7EGGlMldlmFrNeU6747bbaxghVZz
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        console.log(data)
    
        const {url} = data.images.original;
    
        // console.log(url) // verificar que la url funciona
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);    
        }
    
    catch (error) { 
        console.log('Error de errores carajooooo...')
        console.error(error)
    }
}

getImagen();
    

    // Ejercicio 10-fetch.js a mejorar con async:
    
/* const apiKey = 'gBYM7EGGlMldlmFrNeU6747bbaxghVZz';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then (resp => resp.json( ))
    .then (({data}) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

        //console.log (data.images.original.url) para probar la url de la imagen
    })
    .catch (console.warn); */