let i = 0;

function print() {
    setTimeout(() => {
        console.clear()
        console.log(i++)
        print()
    }, 1000)
}

print();