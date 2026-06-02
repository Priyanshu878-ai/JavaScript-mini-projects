const cricketQuiz = [
  {
    question: "Which country won the ICC Cricket World Cup 2023?",
    options: ["India", "Australia", "England", "New Zealand"],
    correctAnswer: "Australia"
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rohit Sharma"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "How many players are there in a cricket team on the field?",
    options: ["10", "11", "12", "9"],
    correctAnswer: "11"
  },
  {
    question: "Which Indian cricketer is known as 'Captain Cool'?",
    options: ["Virat Kohli", "MS Dhoni", "Sourav Ganguly", "Rohit Sharma"],
    correctAnswer: "MS Dhoni"
  },
  {
    question: "What is the maximum number of runs scored from a single legal delivery without extras?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6"
  },
  {
    question: "Which country is known as the birthplace of cricket?",
    options: ["Australia", "India", "England", "South Africa"],
    correctAnswer: "England"
  },
  {
    question: "Who has scored the most international centuries in cricket?",
    options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Kumar Sangakkara"],
    correctAnswer: "Sachin Tendulkar"
  },
  {
    question: "What is the length of a cricket pitch?",
    options: ["20 yards", "22 yards", "24 yards", "18 yards"],
    correctAnswer: "22 yards"
  },
  {
    question: "Which tournament is considered the biggest T20 league in the world?",
    options: ["BBL", "PSL", "IPL", "CPL"],
    correctAnswer: "IPL"
  },
  {
    question: "Who was the first captain of India to win the ODI World Cup?",
    options: ["MS Dhoni", "Kapil Dev", "Sourav Ganguly", "Mohammad Azharuddin"],
    correctAnswer: "Kapil Dev"
  },
  {
    question: "How many overs are played per side in a T20 match?",
    options: ["10", "15", "20", "25"],
    correctAnswer: "20"
  },
  {
    question: "Which bowler is famous for the 'Doosra' delivery?",
    options: ["Anil Kumble", "Harbhajan Singh", "Muttiah Muralitharan", "R Ashwin"],
    correctAnswer: "Muttiah Muralitharan"
  },
  {
    question: "Which Indian batsman is known as the 'Hitman'?",
    options: ["Virat Kohli", "KL Rahul", "Rohit Sharma", "Shubman Gill"],
    correctAnswer: "Rohit Sharma"
  },
  {
    question: "What does LBW stand for?",
    options: [
      "Leg Before Wicket",
      "Long Ball Wicket",
      "Leg Behind Wicket",
      "Last Ball Win"
    ],
    correctAnswer: "Leg Before Wicket"
  },
  {
    question: "Who won the inaugural ICC T20 World Cup in 2007?",
    options: ["Pakistan", "Australia", "India", "England"],
    correctAnswer: "India"
  },
  {
    question: "Which fielding position is directly behind the wicketkeeper?",
    options: ["Slip", "Third Man", "Fine Leg", "Point"],
    correctAnswer: "Slip"
  },
  {
    question: "Who is known as the 'King Kohli'?",
    options: ["Virender Sehwag", "Virat Kohli", "Yuvraj Singh", "Rohit Sharma"],
    correctAnswer: "Virat Kohli"
  },
  {
    question: "How many stumps are used at one end of the wicket?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3"
  },
  {
    question: "Which country won the ICC Champions Trophy 2017?",
    options: ["India", "Pakistan", "England", "Australia"],
    correctAnswer: "Pakistan"
  },
  {
    question: "What is a score of 100 runs by a batsman called?",
    options: ["Double Century", "Half Century", "Century", "Hat-trick"],
    correctAnswer: "Century"
  }
];

function randomquestion() {
    const data = new Set();

    while(data.size!=5){
        const index = Math.floor(Math.random()*20);
        data.add(cricketQuiz[index]);
    }
    return [...data];
}

const form = document.querySelector('#quizForm');
const problem = randomquestion();

const original_answer = {};

problem.forEach((obj,index)=>{
    const div_element = document.createElement('div');
    div_element.className='question';
    original_answer[`q${index+1}`]=obj.correctAnswer;

    const para = document.createElement('p');
    para.textContent=`${index+1}. ${obj['question']}`;
    div_element.appendChild(para);


    //creating option
    obj.options.forEach((option) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type="radio";
        input.name=`q${index+1}`;
        input.value=option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));
    });

    form.appendChild(div_element);
});

const button = document.createElement('button');
button.type='submit';
button.className="submit-btn";
button.textContent="Submit";
form.appendChild(button);

//check answers
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    let result = 0;
     
    for(let [key,value]  of data.entries()){
        if(value===original_answer[key])
            result++;
    }
    const out = document.getElementById('out');
    out.innerText=`${result} out of 5 is correct`;

    form.reset();
})