//import json server
const jsonServer=require('json-server')

//create server for media player
const Mpserver=jsonServer.create()

//create middle ware
const middleware=jsonServer.defaults()

//set up route for json file in server
const route=jsonServer.router('db.json')

//create port
const PORT=3000 || process.env.PORT

Mpserver.use(middleware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`${PORT}`);
    
})

