//add
const add = ( a,b) => a+b;
//sub
const sub = ( a,b) => a-b;
//multplication
const multplication = ( a,b) => a*b;
//divide
const divide = ( a,b) => {
    if (b==0) throw new error ("cannot divide by zero");
    return a/b;}
//module

const modul = ( a,b) => {
    if (b==0) throw new error ("cannot divide by zero");
    return a%b;}

module.exports = {add,sub,multplication,divide,modul};