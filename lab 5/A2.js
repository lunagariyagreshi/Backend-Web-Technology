/*spawn() → runs a command with streaming output

cmd /c dir
cmd → opens Command Prompt
/c → runs a command and closes
dir → lists all files and folders in the current directory 

-spawn() creates a child process and lets you receive output in chunks (streams).
-Unlike exec() (which returns the whole output at once),
-spawn() is used when:

output is large
output should be received continuously
you want better performance*/

const child_process = require('child_process');
const {exec} = require('child_process');

const cmd = child_process.spawn('cmd',['/c','dir']);
    cmd.stdout.on('data',(data)=>{
        console.log(`output : ${data}`);
    });
    cmd.stderr.on('data',(data)=>{
        console.log(`error : ${data}`);
    });
