console.clear();
//!Змінна та константа
let a = 5
console.log(typeof(a),a);
a = 6
console.log(a);
const a1 = 7;
console.log(typeof(a1),a1);
//a1 = 6
//console.log(typeof(a1),a1);

//! Типи даних
//? undefind,null,number, string, arr
a = '5';
console.log(typeof(a), a+a);
console.log(a*2,a+a);
a = [11, 42,33, 44, 55];
console.log(typeof(a),a, a[4]);
let b
console.log(b);

/*a = 'Hello'
console.log(a[1])
console.log(typeof(a));
a = [1,2,3,4,5,6,7,8,true,false]
console.log(a)
let b;
console.log(typeof(b),b);
let h1 = document.getElementById('h1')
console.log(h1 ,typeof(h1))
const person = {
    name:"Darya"
    hi(){
        console.log('Hello '+this.name)
        cpnsole.log(`Hello ${this.name}`)
    }
}
console.log(typeof(person),person)
person.hi()
*/
//! Арифметичні операції
//? + - / % ** * ++ --
a=6
console.log(a+2);
console.log(a-2);
console.log(a/2);
console.log(a%2);
console.log(a**2);
console.log(a*2);
a--
console.log(a);
a++
console.log(a);

//* Визнач скільки буде 2 в 5 степені та 2 в 15 степені
let d = 2;
console.log(d**5, d**15);
//* Обрахуй значення рівняння x^2+2xy+y^2
let x=4, y=7;
console.log(x**2+2*x*y+y**2)
/*if(!true){
    console.log('yes')
}else{
    console.log('no')
}
!true && console.log('no')
!true ? console.log('yes') : console.log('no'); */

//* Напишіть програму, яка перевіряє, чи число парне чи непарне.
let j = 4;
j%2==0 ? console.log("Число парне") : console.log("Число непарне");
//* Створіть програму, яка визначає, чи є введене число додатним, від'ємним чи нулем.
let l = 0;
if(l>0){
    console.log("Число додатнє")
}else if(l==0){
    console.log("Число є нулем")
}else{
    console.log("Число від'ємне")
}
//* Напишіть програму, яка обчислює площу прямокутника за його довжиною і шириною.
let q = 5, w = 6
s = q*w;
console.log(s)
//* Створіть програму, яка перевіряє, чи є введене число кратним 3 або 5.
let c = 15;
(c % 3==0 || c % 5 == 0) && console.log(c);
////? Alert (Попередження):
////? Використовується для відображення повідомлення користувачу з кнопкою "OK". Наприклад:
////? window.alert("Це попередження!");
////? Prompt (Запит):
////? Використовується для отримання введеного користувачем значення. Він також має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.prompt("Будь ласка, введіть своє ім'я", "Гість");
////? Confirm (Підтвердження):
////? Використовується для підтвердження або скасування дії користувачем. Має кнопки
const data = {
    login: "1",
    password: "1",
}
data.login === prompt('Введіть логін') && data.password === prompt('Введіть пароль')
? alert('Авторизація пройшла успішно') : window.location='https://www.google.com/'     
