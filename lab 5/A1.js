const child_process = require('child_process');

console.log(child_process);

const {exec} = require('child_process');

//exec() → runs a shell command, returns output as a string
//exec() (which returns the whole output at once),

child_process.exec('node -v',(error,stdout)=>{
    if(error){
        console.log("Error : ",error.message);
        return;
    }
    console.log("Current version :-",stdout);
})