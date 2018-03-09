let isBoolean: boolean = false

console.log('boolean:', isBoolean)

let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binLiteral: number = 0b1010
let octalLiteral: number = 0o744

console.log('number: ', decLiteral)

let username: string = 'Bob' // TS2451 变量命名 'name'
let intro: string = `My name is ${username}`

console.log('string: ', intro)

let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [4, 5, 6]

console.log('array: ', arr1, arr2)

let x: [string, number] = ['1', 2]

console.log('元组 tuple: ', x)

enum Color {Red = 3, Green = 6, Blue = 9}

console.log('枚举: ', Color.Red)

let notSure: any = 4

console.log('any: before:', typeof notSure, notSure)

notSure = '4'

console.log('any: before:', typeof notSure, notSure)


function warnUser(): void { // void 只能赋值为 undefined 或 null
    alert('This is my warning message')
}

// Never 类型以后再说


