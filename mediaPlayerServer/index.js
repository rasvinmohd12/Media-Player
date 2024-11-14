// import json server

const jsonServer = require('json-server')
// create server for MP
const MPServer = jsonServer.create()
// create middleware
const middleware = jsonServer.defaults()
// ṣet route for json file
const route = jsonServer.router('db.json')
// to available app in port
const PORT =3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Media player server at port ${PORT} and waiting for client request`);
    
})