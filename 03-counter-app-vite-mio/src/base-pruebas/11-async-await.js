

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'gBYM7EGGlMldlmFrNeU6747bbaxghVZz';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img ); // Estas tres lineas de codigo hace que lovea en el DOM en react

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontro la URL';
    }
    
    
    
}

 getImagen();



