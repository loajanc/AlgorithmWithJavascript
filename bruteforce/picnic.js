const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Arr = [];
let count = 0;
let tcNum = 0; 
rl.on("line", function(line) {
    console.log("process start");
    if(count === 0){
        tcNum = Number(line);
    }
    else if(count<=tcNum){
        let tmp = [];
        tmp = line.split(' ').map(x=>parseInt(x));
        Arr.push(tmp);
    }
    else{
        rl.close();
    }
    count++;
}).on("close", function() {
    console.log("process exit...");
    console.log('tcNum:',tcNum);
    console.log('Arr:',Arr);
    process.exit();
});