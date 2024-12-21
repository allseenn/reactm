// filter - метод массива
// принимает предикативную функцию со строковыми или числовым аргументом
// возвращает элементы которые удовлетворяют условиями и аргументу
const data = ['nik', 'serge', 'masha', 'igor', 5, {name: 'boris'}]

data.filter((item) => item!==5).forEach(element => {
    console.log(element)
});;
