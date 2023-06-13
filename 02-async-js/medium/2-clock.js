
function counter() {
    let i = new Date();

    setInterval(() => {
        console.clear();

        let hours = i.getHours() < 10 ? '0' + i.getHours() : i.getHours();
        let month = i.getMinutes() < 10 ? '0' + i.getMinutes() : i.getMinutes();
        let second = i.getSeconds() < 10 ? '0' + i.getSeconds() : i.getSeconds();
        let add = i.getHours() > 12 ? 'PM' : 'AM'


        console.log(hours + ':' + month + ':' + second);
        console.log(hours + ':' + month + ':' + second, add);

        i = new Date();

    }, 1000);
}

counter();