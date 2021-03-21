const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Arr = [];
let count = 0;
let tcNum = 0; 
rl.on("line", function(line) {
    if(count === 0){
        tcNum = Number(line);
    }
    else{
        let tmp = [];
        tmp = line.split(' ').map(x=>parseInt(x));
        Arr.push(tmp);
        if(count === tcNum*2){
            rl.close();
        }
    }
    count++;
}).on("close", function() {
    // console.log("process exit...");
    // console.log('tcNum:',tcNum);
    // console.log('Arr:',Arr);
    let n = tcNum;
    let areFriend = [];
    const countPairings = taken => {
        let finished = true;
        for(let i=0;i<n;i++) if(!taken[i]) finished = false;
        if(finished) return 1;
        let ret = 0;

        for(let i=0;i<n;i++){

        }

    }

    process.exit();
});