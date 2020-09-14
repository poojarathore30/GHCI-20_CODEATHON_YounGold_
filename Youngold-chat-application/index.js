const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server=require('http').Server(app);
const io = socketio(server);
const cors = require('cors');
const router = require('./router');
const {addUser, removeUser, getUser, getUsersOfRoom} = require('./users')

const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV=='production')
{
  app.use(express.static('client-user/build'));
  const path=require('path')
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client-user','build','index.html'))
  })
}



io.on('connection', (socket)=>{
  socket.on('join',({name, room},callback)=>{
    const {error, user} = addUser({id:socket.id, name, room});

    if(error)
      return callback(error);

    socket.join(user.room);

    //admin generated messages are called 'message'
    //welcome message for user
    socket.emit('message',{user:"admin",text:`${user.name}, welcome to the room ${user.room}`})

    //message to all the users of that room except the newly joined user
    socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} has joined`});


    io.to(user.room).emit('roomData',{room:user.room, users:getUsersOfRoom(user.room)})

    callback();
  })

  //user generated message are called 'sendMessage'
  socket.on('sendMessage',(message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message',{user:user.name, text:message});
    io.to(user.room).emit('roomData',{room:user.room, users:getUsersOfRoom(user.room)});

    callback();
  })

  socket.on('disconnect',()=>{
    const user = removeUser(socket.id);
    if(user){
      io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left.`})
    }
  })
})

app.use(router);
app.use(cors());

server.listen(PORT, ()=>{
  console.log(`Server Started on PORT ${PORT}`)
})
