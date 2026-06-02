const words = [
    "Hello",
    "Hi",
    "Love",
    "Code",
    "Dream",
    "Focus",
    "Create",
    "Smile",
    "Grow",
    "Shine",
    "Magic",
    "Learn",
    "Build",
    "Hope",
    "Success"
];
document.body.addEventListener('click',(event)=>{
    const circle = document.createElement('div');
    circle.className='circle';
    circle.textContent = words[Math.floor(Math.random() * words.length)];

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left=`${x-25}px`;
    circle.style.top=`${y-25}px`;

    const colors = [
  "#ff0080",
  "#ff4d4d",
  "#ff9900",
  "#ffee00",
  "#00ff88",
  "#00e5ff",
  "#0080ff",
  "#7b2cff",
  "#d400ff",
  "#ff1493"
];
    circle.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

    document.body.appendChild(circle);

    setTimeout(()=>{
        circle.remove();
    },4000)   
})




