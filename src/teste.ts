import validator from 'validator'
import {somar, subtrair} from './Matematica'
import filmes from './filmes'

let nome: string = "Lucas"
let idade: number = 32

console.log(filmes)

console.log(`Meu nome é ${nome}`)
//validando IP
let ip = '192.168.0.7'
console.log(validator.isIP(ip))
//validando e-mail
console.log(validator.isEmail('fulano@gmail.com'))

console.log(`SOMA: ${somar(10,20)}`)
console.log(`SUBTRAÇÃO:${subtrair(5,20)} `)