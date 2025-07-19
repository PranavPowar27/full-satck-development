const delay =(timeinms)=>{
    return new Promise((resolve=> setTimeout(resolve,timeinms)))
}

delay(1000)
    .then(() => {
    console.log("promise1");
    return delay(1000);
    })
     .then(() => {
    console.log("promise2");
    return delay(1000);
    })
     .then(() => {
    console.log("promise3");
    return delay(1000);
    })
    .catch((error)=> {
        console.error(error);
    });
    