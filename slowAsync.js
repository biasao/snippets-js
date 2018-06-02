async function slowFunction(value) {
    let i = 0;
    while (i < 100000) {
        let j = 0;
        while (j < 10000) {
            j++;
        }
        i++;
    }

    return value;
}

async function fastFunction(value) {
     return value*2;
}

// Even though each line have to wait on slowFunction(), all will run in parallel
slowFunction(1).then(fastFunction).then(console.log);
fastFunction(3).then(slowFunction).then(console.log);
slowFunction(2).then(fastFunction).then(console.log);
fastFunction(5).then(slowFunction).then(console.log);

console.log('done.');


