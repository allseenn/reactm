// forEach - метод работы с массивом, 
// принимает колбек функцию
// возвращает данные (строки, массивы и т.д.) в соответствии с логикой

const data = ['nik', 'serge', 'masha', 'igor', 5, {name: 'boris'}]

data.forEach((i, index, arr) => {
    console.log(i, ++index)
    i.name ? console.log(i.name): null;
});

