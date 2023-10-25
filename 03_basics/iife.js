// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); //; to end

//We use iife to remove the pollution from global scope, and to invoke function immediately

( (name) => {
    console.log(`DB Connecetd two ${name}`);
})("hitesh")