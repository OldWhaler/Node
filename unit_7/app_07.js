// Task 1
//Создайте функцию f1, которая при запуске из массива ar1 создаем файл ar1.json в текущей папке.

const f1 = (ar) => {
  try {
    require('fs').writeFileSync('ar1.json', JSON.stringify(ar))
  }
  catch (err) {
    console.log(err.message)
  }
};

const ar1 = {
  test: 1,
  code: 2
};

// f1(ar1); для проверки. Должен быть закомментирован

// Task 2
//Создайте функцию f2, которая при запуске из массива ar2 создаем файл ar2.json в текущей папке.

const f2 = (ar) => {
  try {
    require('fs').writeFileSync('ar2.json', JSON.stringify(ar))
  }
  catch (err) {
    console.log(err.message)
  }
};

const ar2 = [1, 2, 3];

// f2(ar2); для проверки. Должен быть закомментирован

// Task 3
//Создайте функцию f3, которая при запуске выводит содержимое файла j3.json в консоль.

const f3 = (ar) => {
  try {
    const result = require(`./${ar}`)
    console.log(result)
  }
  catch (err) {
    console.log(err.message)
  }
};

// f3(имя файла); для проверки. Должен быть закомментирован

// Task 4
//Создайте функцию f4, которая при запуске выводит содержимое файла j4.csv в консоль.

const f4 = (ar) => {
  const fs = require('fs')
  const csv = require('csv-parser');
  const results = [];

  fs.createReadStream(ar)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
    });
};

// f4(имя файла); для проверки. Должен быть закомментирован

// Task 5
//Создайте функцию f5, которая при запуске записывает массив ar5 в CSV файл t5.csv. Имена колонок Car, Legal, Color. Разделитель - запятая.

const f5 = (ar) => {
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
  const csvWriter = createCsvWriter({
    path: 't5.csv',
    header: [
      { id: 'car', title: 'Car' },
      { id: 'nn', title: 'Legal' },
      { id: 'color', title: 'Color' }
    ]
  });
  csvWriter.writeRecords(ar)
    .then(() => {
      console.log('...Done');
    })
};

let ar5 = [
  {
    car: 'audi',
    nn: 'er5634p',
    color: 'red'
  },
  {
    car: 'bmw',
    nn: 'bb8234p',
    color: 'blue'
  },
]

// f5(имя файла); для проверки. Должен быть закомментирован

// Task 6
//Создайте функцию f6, которая при запуске записывает массив ar5 в CSV файл t6.csv. Имена колонок Car, Legal, Color. Разделитель - точка с запятой.

const f6 = (ar) => {
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
  const csvWriter = createCsvWriter({
    fieldDelimiter: ';',
    path: 't6.csv',
    header: [
      { id: 'car', title: 'Car' },
      { id: 'nn', title: 'Legal' },
      { id: 'color', title: 'Color' }
    ]
  });
  csvWriter.writeRecords(ar)
    .then(() => {
      console.log('...Done');
    });
};

// f6(имя файла); для проверки. Должен быть закомментирован

// Task 7
//Создайте функцию f7, которая при запуске выводит содержимое файла t6.csv в консоль.

const f7 = (ar) => {
  const fs = require('fs');
  const csv = require('csv-parser');
  const results = [];

  fs.createReadStream(ar)
    .pipe(csv(';'))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
    });
};

// f7(имя файла); для проверки. Должен быть закомментирован
