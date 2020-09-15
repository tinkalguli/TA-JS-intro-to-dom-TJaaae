
setInterval(() => {
    let date = new Date();
    let secondDeg = (date.getSeconds()) * 6;
    let minuteDeg = ((secondDeg / 60 / 6) + date.getMinutes()) * 6;
    let hourDeg = ((minuteDeg / 60 / 6) + date.getHours()) * 30;

    document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
})

setInterval();