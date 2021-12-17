/* const http = require('http');

http.createServer((request, response) => { }).listen(3002)

const t2 = (req, res) => {
  const params = require('url').parse(req.url, true)

  if (req.method == 'GET' && params.query.p == '70') {
    res.end('800')
  }
}

const t3 = (req, res) => {
  const params = require('url').parse(req.url, true)

  if (req.method == 'GET' && params.query.p == '80') {
    res.end('900')
  }
}

const t4 = (req, res) => {
  const { parse } = require('querystring')

  if (req.method == 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk
    })

    req.on('end', () => {
      if (parse(body).h == '80') {
        res.end('1100')
      }
    })
  }
}

const t5 = (req, res) => {
  const { parse } = require('querystring')

  if (req.method == 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk
    })

    req.on('end', () => {
      if (parse(body).h == '90') {
        res.end('1200')
      }
    })
  }
}

http.createServer((req, res) => {


}).listen(3000); */

const http = require('http');


const t2 = (req, res) => {
  res.end('800')
}

const t3 = (req, res) => {
  res.end('900')
}

const t4 = (req, res) => {
  res.end('1100')
}

const t5 = (req, res) => {
  res.end('1200')
}

http.createServer((req, res) => {
  if (req.method == 'GET') {
    const p = require('url').parse(req.url, true).query.p

    switch (p) {
      case '70':
        t2(req, res)
        break
      case '80':
        t3(req, res)
        break
      default:
        res.end('404')
    }

  } else if (req.method == 'POST') {
    const { parse } = require('querystring');

    let body = '';
    req.on('data', chank => {
      body += chank
    })

    req.on('end', () => {
      switch (parse(body).h) {
        case '80':
          t4(req, res)
          break
        case '90':
          t5(req, res)
          break
        default:
          res.end('404')
      }
    })
  }
}).listen(3002);