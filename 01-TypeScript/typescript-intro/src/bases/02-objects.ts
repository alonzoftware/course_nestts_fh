export const pokemonsIds = [1, 20, 30, 34, 66];
pokemonsIds.push(+'1');
console.log(pokemonsIds);



interface Pokemon {
    id: number;
    name: string;
    age?: number | undefined;
}

export const pokemon: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}
console.log(pokemon);