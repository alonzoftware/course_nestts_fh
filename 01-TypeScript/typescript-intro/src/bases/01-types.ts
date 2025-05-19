export let name: string = "Alonzo";
export const age: number = 45;
export const isValid: boolean = true;

name = "Francy";
export const templateString: string = `Esto es un string
multilinea
que puede tener
" dobles
' simples
inyectar valores ${name}
expresiones ${1 + 1}
numeros ${age}
booleanos ${isValid}
`;

console.log(templateString);