// const red = document.getElementById('red');
//     red.addEventListener('click',()=>{
//         document.body.style.backgroundColor='red';
//     });

// const blue = document.getElementById('blue');
//     blue.addEventListener('click',()=>{
//         document.body.style.backgroundColor='blue';
//     });

// const orange = document.getElementById('orange');
//     orange.addEventListener('click',()=>{
//         document.body.style.backgroundColor='orange';
//     });

// const yellow = document.getElementById('yellow');
//     yellow.addEventListener('click',()=>{
//         document.body.style.backgroundColor='yellow';
//     });

// const green = document.getElementById('green');
//     green.addEventListener('click',()=>{
//         document.body.style.backgroundColor='green';
//     });


// const buttons = document.querySelectorAll('button');
// const body = document.body;

// buttons.forEach((buttons)=>{
//     buttons.addEventListener('click',()=>{
//         body.style.backgroundColor=buttons.id;
//     })
// })

const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
})