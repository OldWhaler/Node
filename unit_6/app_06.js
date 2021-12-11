// Task 1
// Напишите функцию t1, которая  выводит содержимое файла t1.txt в папке home6. Помимо вывода функция должна возвращать данное значение.


function t1() {
  try {
    const result = require('fs').readFileSync('home6/t1.txt', 'utf-8')

    console.log(result)
    return result
  }
  catch (err) {
    console.log(err.message)
  }
}
console.log(t1());


// Task 2.

// Напишите функцию t2, которая  выводит содержимое файла указанного в параметрах файла. Помимо вывода функция должна возвращать данное значение.


function t2(filePath) {
  try {
    const result = require('fs').readFileSync(filePath)

    console.log(result)
    return result
  } catch (err) {
    console.log(err.message)
  }
}

let filePath = 'examplepatthfile';
console.log(t2(filePath));


// Task 3.
// Напишите функцию t3, которая  выводит список файлов указанной в параметре папки ( в виде массива ) и возвращает данный массив.

function t3(folderName) {
  try {
    const result = require('fs').readdirSync(folderName);

    console.log(result)
    return result
  } catch (err) {
    console.log(err.message)
  }
}


console.log(t3('example_folder'));

// Task 4
// Напишите функцию t4 которая принимает имя файла и возвращает его размер в килобайтах (только число)


function t4(filepath) {
  try {
    return require('fs').statSync(filepath).size / 1000
  }
  catch (err) {
    console.log(err.message)
  }
}

console.log(t4('example_file_path'));



// Task 5
// Напишите функцию t5, которая принимает параметр число ( например размер) и возвращает строку по правилам
//если число от 0 до 99 то просто возвращает эту строку и добавляет B
//    512 -> 512B
// если число от 1000 до 999 999 то делит на 1000 и добавляет kB
// 30000 -> 30кB
// если число от 1000000 и выше то делит на 1000000 и добавляет MB
// 13000000 -> 13MB

function t5(a) {
  if (a >= 0 && a <= 99) return `${a}B`;
  if (a >= 1000 && a < 999999) return `${a / 1000}kB`;
  if (a >= 1000000) return `${a / 1000000}MB`;
}

console.log(t5(34958));


// Task 6
// Напишите функцию t6 которая выводит содержимое папки. В одной строке выводится имя файла, пробел его размер ( используем t5) перенос строки.

function t6(exFolder) {
  const fs = require('fs');

  fs.readdir(exFolder, (err, data) => {

    try {
      data.forEach(file => {
        const size = fs.statSync(`${exFolder}/${file}`).size

        console.log(`${file} ${t5(size)}\n`)
      })
    } catch (err) {
      console.log(err.message)
    }

  })

  function t5(a) {
    if (a >= 0 && a <= 99) return `${a}B`;
    if (a >= 1000 && a < 999999) return `${a / 1000}kB`;
    if (a >= 1000000) return `${a / 1000000}MB`;
  }
}

t6('example');


// Task 7
// Напишите функцию t7, которая принимает путь к файлу и выводит и возвращает его расширение. 

function t7(exPath) {
  try {
    const extname = require('path').extname(exPath)

    console.log(extname)
    return extname

  } catch (err) {
    console.log(`error: ${err.message}`)
  }
}

console.log(t7('example_path'));

// Task 8
// Напишите функцию t8 принимает имя папки и выводит и возвращает суммарный размер файлов в ней.

function t8(exPath) {
  const fs = require('fs')

  try {
    const data = fs.readdirSync(exPath)
    const result = data.reduce((sum, current) => sum += fs.statSync(`${exPath}/${current}`).size, 0)
    console.log(result)
    return result
  }
  catch (err) {
    console.log(err.message)
  }
}

console.log(t8('example_path'));


// Task 9
// Создайте функцию t9, которая принимает два параметра - имя папки и файла и проверяет есть ли данный файл в папке. Функция должна возвращать true или false.

function t9(folder, file) {
  try {
    return require('fs').readdirSync(folder).includes(file)
  }
  catch (err) {
    console.log(err.message)
  }
}

console.log('folder', 'file');


// Task 10
// Создайте функцию t10, которая принимает имя файла и которая возвращает false если файла нет в текущей папке или его размер равен нулю и размер файла если он существует и его размер больше нуля.

function t10(a) {
  try {
    const size = require('fs').statSync(a).size
    return size === 0 ? false : size // size ? size : false
  }
  catch (err) {
    return false
  }
}

console.log(t10('filename'));