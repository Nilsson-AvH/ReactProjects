import { getHeroById } from "./bases/08-imp-exp";

/* const promesa = new Promise( (resolve, reject) => {

    setTimeout(() => {

        const p1 = getHeroById(2);
        resolve (p1);
        //reject('No se pudo encontrar el heroe.');
        
    }, 3000);
} );

promesa.then( (heroe) => {
    console.log('el heroe es', heroe)
} )
.catch( err => console.warn( err ) ); */

const getHeroByIdAsync = (id) => {

    const promesa = new Promise( (resolve, reject) => {

        setTimeout(() => {
    
            const p1 = getHeroById(id);
            if (p1) {
                resolve (p1);
            }
            else {
                reject('Id de heroe no existe.');
            }
            
            
            
        }, 3000);
    } );

    return promesa;

}

getHeroByIdAsync(2)
    /* .then ( heroe => console.log( 'Heroe', heroe ) )
    .catch ( err => console.warn(err)); */
    .then ( console.log )
    .catch ( console.warn );