function limitedInterval(callback, wait, limit) {
    // let timer = setInterval(() => callback(), wait);
    // setTimeout(() => clearInterval(timer),  limit);
    let timer = setInterval(callback, wait);
    setTimeout(clearInterval,  limit, timer);
}

limitedInterval(() => console.log(`repeating: ${Date.now()}`), 100, 550); // should log 'repeating' once per 100 ms, five times.