/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    let start = new Date();

    while (new Date() - start < (seconds * 1000)) {
        //block
    }
}


sleep(5);

// check the later code
for (let i = 0; i < 5; i++) {
    console.log(i)
}