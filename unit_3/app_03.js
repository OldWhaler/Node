//Установите Node.js с сайта программы. Повторите действия урока.

console.log('Если вы это видите - то сделали!!!');

// Task 2. Напишите функцию f2, которая принимает 2 числа и выводит и возвращает максимальное из них. Для этого используйте Math.

const f2 = (a, b) => {
  const result = Math.max(a, b);
  console.log(result)
  return result
}

// Task 3. Напишите функцию f3, которая выводит и возвращает случайное число от 0 до 10.

const f3 = () => {
  const result = Math.floor(Math.random() * 11);
  console.log(result)
  return result
}

// Task 4. Напишите функцию f4, которая выводит и возвращает случайное число от a до b.

const f4 = (a, b) => {
  const result = Math.floor((Math.random() * (b - a + 1)) + a);
  console.log(result)
  return result
}

// Тask 5. Напишите фукнцию f5, которая выводит и возвращает текущую дату в формате год-месяц-день. Причем делает это с ведущим нулем.
// Пример 2020-03-22

const f5 = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = `0${now.getMonth()}`.slice(-2)
  const day = `0${now.getDate()}`.slice(-2)

  const result = `${year}-${month}-${day}`

  console.log(result)
  return result
}

//Task 6. Напишите функцию f6, которая проверяет является ли введенный год високосным. Возвращает true если да, и false если нет. 

const f6 = (year) => {
  return year % 4 === 0
}
