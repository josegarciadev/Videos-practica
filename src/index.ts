import app from './app';
app.listen(app.get('port'),()=>{
    console.log('\x1b[36m%s\x1b[0m', 'Server on, port: ',app.get('port'));
    //sirve para el color cyan '\x1b[36m%s\x1b[0m'  
})