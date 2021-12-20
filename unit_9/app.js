const mysql = require('mysql2');
const http = require('http');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node_test",
  password: ""
});

connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

//Task 2____________________________________________________

http.createServer((req, res) => {
  if (req.method == 'GET') {
    const params = require('url').parse(req.url, true);

    if (params.query.task == 2) {
      const queryString = 'SELECT firstname FROM user'

      connection.query(queryString, (err, result) => {
        if (err) {
          console.log(err.message)
        } else {
          const names = result.reduce((arr, current) => {
            arr.push(current.firstname)
            return arr
          }, [])

          res.end(JSON.stringify(names))

          connection.end(err => {
            if (err) {
              console.log(err.message)
            } else {
              console.log("Подключение к серверу MySQL успешно прекращено")
            }
          })
        }
      })
    }
  }
}).listen(3000)

//Task 3____________________________________________________

http.createServer((req, res) => {
  if (req.method == 'GET') {
    const params = require('url').parse(req.url, true);

    if (params.query.task == 3) {
      const queryString = 'SELECT email FROM user'

      connection.query(queryString, (err, result) => {
        if (err) {
          console.log(err.message)
        } else {
          const emails = result.reduce((arr, current) => {
            arr.push(current.email)
            return arr
          }, [])

          res.end(JSON.stringify(emails))

          connection.end(err => {
            if (err) {
              console.log(err.message)
            } else {
              console.log("Подключение к серверу MySQL успешно прекращено")
            }
          })
        }
      })
    }
  }
}).listen(3000)

//Task 4____________________________________________________

http.createServer((req, res) => {
  if (req.method == 'GET') {
    const params = require('url').parse(req.url, true);

    if (params.query.task == 4 && params.query.email) {
      const queryString = 'SELECT email,id FROM user'

      connection.query(queryString, (err, result) => {
        if (err) {
          console.log(err.message)
        } else {
          const filteredResult = result.filter(elem => elem.email == params.query.email)

          if (filteredResult.length == 0) {
            res.end('0')
          } else {
            res.end(JSON.stringify(filteredResult[0].id))
          }

          connection.end(err => {
            if (err) {
              console.log(err.message)
            } else {
              console.log("Подключение к серверу MySQL успешно прекращено")
            }
          })
        }
      })
    }
  }
}).listen(3000)


//Task 5____________________________________________________

http.createServer((req, res) => {
  if (req.method == 'GET') {
    const params = require('url').parse(req.url, true);

    if (params.query.task == 5 && params.query.email) {
      const queryString = 'SELECT email,id FROM user'

      connection.query(queryString, (err, result) => {
        if (err) {
          console.log(err.message)
        } else {
          const resultArr = result.reduce((arr, elem) => {
            if (elem.email.includes(params.query.email)) {
              arr.push(elem.id)
            }
            return arr
          }, [])

          res.end(JSON.stringify(resultArr))

          connection.end(err => {
            if (err) {
              console.log(err.message)
            } else {
              console.log("Подключение к серверу MySQL успешно прекращено")
            }
          })
        }
      })
    }
  }
}).listen(3000)
