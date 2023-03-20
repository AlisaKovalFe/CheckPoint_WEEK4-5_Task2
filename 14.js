// сгенерировать num чисел до 100 и отсортировать их
// в порядке возрастания

const generate = (start, num) => {
    let arr = []
    for (let i = start; i <= num; i++) {
        let random = Math.round(Math.random() * 100)
        arr.push(random)
    }
    return arr.sort((a, b) => a - b).join(', ') //где лучше сортировать , может в цикле?
}

console.log(generate(1, 5));