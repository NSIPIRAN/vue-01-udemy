/*function greetPerson( name: string) {
	return `Hola, ${ name }`;
}

const greetPerson = ( name: string ) => {
	return `Hola, ${ name }`;
}
*/
//LO SIGUIENTE ES LO MISMO CUANDO DENTRO DE LA FUNCIONA SOLO EXISTE UN RETURN


const greetPerson = ( name: string ) =>   `Hola, ${ name }`; 


console.log(greetPerson("Fernando"));

const getUser = ( uid : string) => ({
	uid:uid,
	username: "Tony001",
})

console.log(getUser('ujdsfj4578sdfsdfsdsd45fsd5f'));