const express =require('express');
const http=require('http');
const app = express();
const server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hello World!');
});
app.use(express.static('public'));
const port =80;
app.listen(port,()=>{
  console.log(`Server running at http://localhost:$(port)/`);
})
