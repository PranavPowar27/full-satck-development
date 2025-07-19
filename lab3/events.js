const EventEmmiter =require("events");
const event =new EventEmmiter();

event.on("greet1",()=>{
    console.log("hello event commited");
});

event.emit("greet1");