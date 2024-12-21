// find - метод массива
// принимает предикативную функцию со строковым или числовым аргументом
// возвращает значение первого найденного элемента в массиве

const data = ['nik', 'serge', 'masha', 'igor', 5, {name: 'boris'}]
console.log(data.find(item=>item.name==='boris'));