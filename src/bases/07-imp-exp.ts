import heroes, { type  Owner } from '../data/heroes';


const getHeroById = (id: number) => {
	return heroes.find(hero => hero.id == id);
}

console.log(getHeroById(2));


const getHeroByOwner = (owner:Owner) => {
	return heroes.filter(hero => hero.owner == owner)

}

console.log(getHeroByOwner('DC'));