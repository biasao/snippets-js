async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 10000)
    });

    let result = await promise; // wait till the promise resolves (*)

    console.log(result);
    console.log('end f().')
}

async function f2() {
    setTimeout(() => 1, 10000);

    console.log('end f2().');
}

f();
f2();