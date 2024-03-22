const http=require('http');
const appp=require('./app');
const startConnectionn=require('./services/mongo')
require('dotenv').config;
const PORT=process.env.PORT || 5000;
const server=http.createServer(appp);
async function startServer(){
    await startConnectionn();
    server.listen(PORT,()=>{
        console.log(`the server is running on ${PORT}`);
    })
}

startServer();

