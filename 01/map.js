const data = ['nik', 'serge', 'masha', 'igor', 5, {name: 'boris'}]

console.log(data.map(item => {
    if(typeof item === 'object') return item.name
    return `<p>${item} - name<p>`
}));
