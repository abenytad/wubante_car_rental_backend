const http=require('http');
const app=require('./app');
const startConnectionn=require('./services/mongo')

const PORT=process.env.PORT || 5000;
const server=http.createServer(app);
async function startServer(){
    await startConnectionn();
    server.listen(PORT,()=>{
        console.log(`the server is running on ${PORT}`);
    })
}

startServer();

