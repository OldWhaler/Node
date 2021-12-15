const http = require('http')
const url = require('url')
const { parse } = require('querystring')

http.createServer((request, response) => {
  console.log('server work')

  if (request.method == 'GET') {
    console.log(request.method)

    const urlRequest = url.parse(request.url, true)
    console.log(urlRequest.query);

    response.end(`Сервер ответил: ${urlRequest.query.name}`)
  }

  if (request.method === 'POST') {
    let body = '';
    request.on('data', chank => {
      body += chank.toString()
    })
    request.on('end', () => {
      const params = parse(body)
      for (let [key, val] of Object.entries(params)) {

        console.log(`Ключ: ${key}, Значение: ${val}`)
      }

      response.end(params.name)
    })
  }



}).listen(3000)

