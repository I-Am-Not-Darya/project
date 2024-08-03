//?Створення масиву
const product = [
    {id:1, name:"nameProduct 1"},
    {id:2, name:"nameProduct 1"},
    {id:3, name:"nameProduct 1"},
    {id:4, name:"nameProduct 1"},
    {id:5, name:"nameProduct 1"},
]
const p = Array.from(document.getElementsByName('p'));
console.log(product)
console.log(p)
let arrOne = [1,2,3,4,5,6,[7,8]]
console.log(arrOne[6][0])
arrOne[6][2] = 9
arrOne[0] = 0
console.log(arrOne)
arrOne.push({name:"nameProduct 1", password:"123"})
console.log(arrOne)
let newUser = arrOne.pop()
console.log(newUser)

//?Задавання значень масиву
//?Визначення елемента масиву по індексу
//?Зміна значень елементу в масиві
//?Додавання в кінець елементу
let arr2 = [1,2,3,4,5]
let arr3 = [6,7,8,9,0]
let arr4 = [...arr2,...arr3]
console.log(arr4)

//?Обєднання декількох масивів



//!Методи обходу масивів  - прототипи - функції
//?forEach(): Виконує задану функцію один раз для кожного елемента масиву.
//arr4.forEach((item,index)=>{
 //   console.log(item)
//})
//let arr5 = arr4.forEach((item,index)=>item*2)
//console.log(arr5)
//?map(): Створює новий масив, який містить результат виклику заданої функції для кожного елемента масиву.
//*Оновлює дані масиву
//let arr6 = arr4.map((item,index)=>item*2==1&&item)
//console.log(arr6)

//?filter(): Створює новий масив, який містить елементи, для яких задана функція повертає true.
let arr6 = arr4.filter(item=>item%2==1)
console.log(arr6)

//?find(): Повертає перший елемент масиву, для якого задана функція повертає true.


//?reduce(): Застосовує задану функцію до кожного елемента масиву, редагуючи її до одного значення.
//* Тяжке для розуміння, перша змінна використовується для підрахунку, друга це елемент масиву
let s = 0
arr4.forEach(item=>s+item)
console.log(s)
console.log(arr4.reduce((item, s)=>s+=item)/arr4.length)

//?sort(), але можна також реалізувати інші алгоритми сортування вручну. 
//?Метод sort() сортує елементи масиву і змінює сам масив.'
let arr7 = [11,1,2,3,4,0]
arr7.sort((a,b)=>b-a)
console.log(arr7)

//Напишіть функцію, яка виводить на консоль кожен елемент масиву.
//Реалізуйте функцію, яка множить кожен елемент масиву на певне число та повертає новий масив.
//Створіть функцію, яка фільтрує масив, залишаючи тільки парні числа.
//Напишіть функцію, яка знаходить перший додатний елемент у масиві.
//Створіть функцію, яка знаходить суму всіх елементів у масиві.