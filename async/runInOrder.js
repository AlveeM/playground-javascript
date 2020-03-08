// Add code here
function runInOrder(arrFuncs, arrTimers) {
    let waitTime = 0;
    for (let i = 0; i < arrFuncs.length; i++) {
        waitTime += arrTimers[i];
        setTimeout(arrFuncs[i], waitTime);
    }
}

function sayHi() {
    console.log('hi');
}

function sayBye() {
    console.log('bye');
}

function sayHowdy() {
    console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/