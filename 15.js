// Напиши функцию, которая в массиве чисел находит и
// возвращает наименьшее число.
// [94, 2, 71, 10, 22, 71] —>  2

const findMin = (arr) => {
    let min = 0
    for (let i = 0; i < arr.length; i++) {
        arr.sort((a, b) => a - b)
        min = arr[0]
    }
    return min
}

console.log(findMin([94, 2, 71, 10, 22, 71]));

