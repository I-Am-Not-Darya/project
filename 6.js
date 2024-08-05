//?Створення масиву
const arr1 = [1,2,3,4,7,8,0,5];
console.log(arr1.length);
arr1[arr1.length] = 6;
console.log(arr1);
arr1[6] = 9;
console.log(arr1);

/*const product = [
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
console.log(newUser)*/

//?Задавання значень масиву                        
//?Визначення елемента масиву по індексу
const arr2 = [1,2,3,4,[5,6,7,[9,0]]];
console.log(arr2[4][1]);
console.log(arr2[4][3][0]);
//Д.з
console.log(arr2[1], arr2[4][2], arr2[4][3][1]);

//?Зміна значень елементу в масиві
//?Додавання в кінець елементу

//?Обєднання декількох масивів
const arr3 = [...arr1,...arr2];
console.log(arr3);

//!Методи обходу масивів  - прототипи - функції
//?forEach(): Виконує задану функцію один раз для кожного елемента масиву.
//arr3.forEach(element=>console.log(element));
let v = arr1.forEach(element=>element);
console.log(v);
//?map(): Створює новий масив, який містить результат виклику заданої функції для кожного елемента масиву.
//*Оновлює дані масиву
v = arr1.map(element=>element); //v = arr1.map(element=>element*2);
console.log(v);

//?filter(): Створює новий масив, який містить елементи, для яких задана функція повертає true.
v = v.filter(item=>item%2==0);
console.log(v);

//?find(): Повертає перший елемент масиву, для якого задана функція повертає true.
v.find((element,index)=>element==8&&console.log(element,index));


//?reduce(): Застосовує задану функцію до кожного елемента масиву, редагуючи її до одного значення.
//* Тяжке для розуміння, перша змінна використовується для підрахунку, друга це елемент масиву
let s = v.reduce((element,res)=>res+=element);
console.log(s);

//?sort(), але можна також реалізувати інші алгоритми сортування вручну. 
//?Метод sort() сортує елементи масиву і змінює сам масив.'
console.log(arr1);
arr1[0]=11;
arr1.sort((a,b)=>a-b);
console.log(arr1);
arr1.sort((a,b)=>b-a);
console.log(arr1);

//Напишіть функцію, яка виводить на консоль кожен елемент масиву.
let arr4 = [3,-1,5,2,-6,3,7,-4,0]
arr4.forEach(element=>console.log(element));
//Реалізуйте функцію, яка множить кожен елемент масиву на певне число та повертає новий масив.
q = arr4.map(element=>element*2);
console.log(q);
//Створіть функцію, яка фільтрує масив, залишаючи тільки парні числа.
w = arr4.filter(item=>item%2==0);
console.log(w);
//Напишіть функцію, яка знаходить перший додатний елемент у масиві.
e = arr4.find(element=>element > 0);
console.log(e);
//Створіть функцію, яка знаходить суму всіх елементів у масиві.
let sum = arr4.reduce((element, result)=>result+=element);
console.log(sum);