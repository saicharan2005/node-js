const http =require('http')

const server =http.createServer((req,res)=> {
  // console.log(req);
  // res.write('welcome back to home page');
  // res.end()

  if(req.url === '/'){
    res.end('welcome to home page');
  }

  if(req.url === '/about'){
    res.end(
      `<h1> About Page </h1>`
    );
  }res.end(`<h1> oops </h1>
    <a href="/">Home Page</a>`
  )
})

server.listen(5000)