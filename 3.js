// а) При помощи цикла for выведите чётные числа от 2 до 20.
// б) При помощи цикла for выведите числа от 1 до 100, 
// 	 которые делятся на 3 без остатка.
// в) При помощи цикла for выведите числа от 1 до 50 с шагом 5.
// Результат запишите в массив.

for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 50; i += 5) {
    console.log(i);
}