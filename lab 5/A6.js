/*) Create an EventEmitter instance, Register an event "greet" and print a message when 
triggered. Fire that event manually using .emit().*/

const EventEmitter = require('events');

const emitter = new EventEmitter();

// emitter.on("greet",()=>{
//     console.log("HEllo ! this is greet event ");
// });
// emitter.emit("greet");

// setInterval(()=>{
//     emitter.emit("tick");
// },1000)

// emitter.on("tick",()=>{
//     console.log("Tick event occured");
// })

emitter.on('event',function firstListener(){
    console.log("This is first event");
})

emitter.on('event',function secondListener(args1,args2){
    console.log(`This is second event with arguments ${args1} and ${args2}`);
})
emitter.on('event',function thirdListener(...arg){
    console.log(`This is third event with argument ${arg}`);
})
emitter.emit('event');
//emitter.emit('event',123,456);