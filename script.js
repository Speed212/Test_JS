let form = document.querySelector('.quiz-form');
let correct = ['A', 'A', 'A', "A"]
let olibTawa = document.querySelector('.d-none')
let baho = document.querySelector('.baho')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    olibTawa.classList.remove('d-none')
    let userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    let score = 0
    correct.forEach((el, i) => {
        if (el == userAns[i]) {
            score += 25;
        }
    })
    scrollTo(0, 0);
    let a = 0;
    const timer = setInterval(() => {
        if (a == score) {
            clearInterval(timer);
        } else {
            a++;
        }
        baho.innerHTML = a + '%'
    }, 10)
})




































// console.log(form.q1.value);
// console.log(form.q2.value);
// console.log(form.q3.value);
// console.log(form.q4.value);
window.addEventListener('click', (e) => {
    console.log(e.target);
})

// let b = 0
// let timer = setInterval(() => {
//     b++
//     console.log(b);
//     if (b == 100) {
//         clearInterval(timer)
//     }
// }, 100)


// setTimeout(() => {
//     console.log('Hello World');
// }, 5000)
// for (let i = 0; i < correct.length; i++) {
//     correct[i]
// }