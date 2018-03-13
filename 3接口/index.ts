interface SquareConfig {
    height: number, // height和width 必须有
    width: number,
    color?: string, // ?表示可选属性， 也就是color可以有，也可以没有
    readonly read?: any //  readonly表示只读属性，一旦初始化之后不可再修改，注意与const的对比。
}

function computeSquareArea(square: SquareConfig): number {
    return square.height * square.width
}

console.log(computeSquareArea({height: 10, width: 20}))
console.log(computeSquareArea({height: 10, width: 20, color: 'red'}))


// 函数类型

interface SearchFunc {
    (source: string, subString: string): boolean
}

let searchFunc: SearchFunc = function(src, sub) {
    return src.search(sub) > -1
}



