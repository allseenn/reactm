// reduce - метод массива, который позволяет аккумулировать или суммировать элементы массива
// принимает два аргумента:
// 1. колбэк функцию с аргументами, первый из которых является аккумулятором
// 2. стартовое значение аккумулятора
// возвращает аккумулятор

const data = ['nik', 'serge', 'masha', 'igor', 5, {name: 'boris'}]

data.reduce((prevVal, curVal, curIndex) => {
    console.log(prevVal, curVal, curIndex)
    return curVal
}, '1')

const numbers = [1, 2, 3, 4, 5, 5]
let summa = numbers.reduce((prev, curr) => {
   return prev + curr
})
console.log(summa);