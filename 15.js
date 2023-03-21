// Напиши функцию, которая в массиве чисел находит и
// возвращает наименьшее число.
// [94, 2, 71, 10, 22, 71] —>  2

const findMin = (arr) => {

    //метод
    arr.sort((a, b) => a - b)
    return arr[0]

    // цикл
    // let min = arr[0]
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < min) {
    //         min = arr[i]
    //     }
    // }
    // return min

    //математическая функция
    //return Math.min(...arr)
}

console.log(findMin([94, 2, 71, 10, 22, 71]));

//посравнивать с 1м элементом
