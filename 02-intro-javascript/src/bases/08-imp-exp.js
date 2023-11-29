//import {heroes} from './data/heroes';
import heroes, {otrosOwners} from '../data/heroes';

//const elArray = {...heroes};
//console.log(elArray);

export const getHeroById = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}
/*
console.log(getHeroById(2));

const getHeroByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroByOwner('Marvel'));

console.log(otrosOwners);
*/