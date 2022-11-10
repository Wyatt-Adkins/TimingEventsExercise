// 1
setTimeout(() => {
const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

// 2

setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
        const p2 = document.createElement(`p`);
        p2.innerText = `one`;
        div2.append(p2);

setTimeout(() => {
            const p3 = document.createElement(`p`);
            p3.innerText = `two`;
            div2.append(p3);
        }, 1000);

    }, 2000);

    // 3a
    let i=0
    let time = setInterval(() => {
        i += 1;
        console.log(i);
    }, 1000);

    // 3b
    const btn = document.querySelector(`button`);
    btn.addEventListener(`click`,() => {
        clearinterval(time);
    });

    // bonus

    

    const div3 = document.querySelector(`#countdown`);
    const p3 = document.createElement(`p`);
    let num = 120;
    const count2 = setInterval(() => {
        if (num>0){
            let minutes = math.floor(num/60);
            let seconds = num - minutes * 60;

            if (seconds == 0){
                p3.innerText = `${minutes}:${seconds}0`;
            } 
            else if (seconds <10) {
                p3.innerText=`${minutes}:0${seconds}`;
            }
            else {
            p3.innerText = `${minutes}:${seconds}`;
        }
            div3.append(p3);
        } else {
            clearinterval(count2);
            p3.innerText = `Time is Up!`
            div3.append(p3);
        }
        num--;
    },1000);