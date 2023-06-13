
function counter() {
    let i = 0;

    setInterval(() => {
        console.clear();
        console.log(i++);
    }, 1000);
}

counter();