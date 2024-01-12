import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const[username, setUsername] = useState(null);
  const[quesNumber, setQuesNumber] = useState(1);
  const[stop, setStop] = useState(false);
  const[earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who has most centuries in international cricket?",
      answers: [
        {
          text: "Kumar Sangkara",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: true,
        },
        {
          text: "Ricky Ponting",
          correct: false,
        },
        {
          text: "Virat Kohli",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "In which kingdom is the story of the 'Bahubali' series of film mainly set?",
      answers: [
        {
          text: "Magadh",
          correct: false,
        },
        {
          text: "Kalinga",
          correct: false,
        },
        {
          text: "Badami",
          correct: false,
        },
        {
          text: "Mahishmati",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the most followed celebrity of india?",
      answers: [
        {
          text: "Shahrukh Khan",
          correct: false,
        },
        {
          text: "Virat Kohli",
          correct: true,
        },
        {
          text: "Amitabh Bachchan",
          correct: false,
        },
        {
          text: "Narendra Modi",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which is the oldest democracy / parliamentary in the world?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "Iceland",
          correct: true,
        },
        {
          text: "USA",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "boAt, the company founded by Aman Gupta and Sameer Mehta, sells which of these products?",
      answers: [
        {
          text: "Headphones",
          correct: true,
        },
        {
          text: "Boats",
          correct: false,
        },
        {
          text: "Cupboards",
          correct: false,
        },
        {
          text: "Cars",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which of these not a web browser?",
      answers: [
        {
          text: "Firefox",
          correct: false,
        },
        {
          text: "Opera",
          correct: false,
        },
        {
          text: "Chrome",
          correct: false,
        },
        {
          text: "Facebook",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Who is the first indian cricketer to dismiss both a father and his son in test cricket?",
      answers: [
        {
          text: "Ravindra Jadeja",
          correct: false,
        },
        {
          text: "Ashwin",
          correct: true,
        },
        {
          text: "Ishan Sharma",
          correct: false,
        },
        {
          text: "Mohammad Shami",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which company started Project Loon to give balloon powerd Internet access to the world?",
      answers: [
        {
          text: "Microsoft",
          correct: false,
        },
        {
          text: "Intel",
          correct: false,
        },
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "Google",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Who has won most number of cleanest city of india title?",
      answers: [
        {
          text: "Indore",
          correct: true,
        },
        {
          text: "Surat",
          correct: false,
        },
        {
          text: "Pune",
          correct: false,
        },
        {
          text: "Bengaluru",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which of these cricketer does not hold a degree in engineering?",
      answers: [
        {
          text: "Anil Kumble",
          correct: false,
        },
        {
          text: "Rahul Dravid",
          correct: true,
        },
        {
          text: "Krishnamachari Srikkanth",
          correct: false,
        },
        {
          text: "Ravichandran Ashwin",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "How many districts are in india?",
      answers: [
        {
          text: "605",
          correct: false,
        },
        {
          text: "700",
          correct: false,
        },
        {
          text: "726",
          correct: false,
        },
        {
          text: "797",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Who is the first crickter to score two T20 international fifties on the same day in two different matches?",
      answers: [
        {
          text: "Mohammad Shahzad",
          correct: true,
        },
        {
          text: "Navroz Mangal",
          correct: false,
        },
        {
          text: "Mohammd Hafeez",
          correct: false,
        },
        {
          text: "Shakib Al Hasan",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "Which country has won most number of Odi world cup titles?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "Pakistan",
          correct: false,
        },
        {
          text: "Austrailia",
          correct: true,
        },
        {
          text: "South Africa",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(()=>
    [
      {id: 1, amount: "Rs. 1,000"},
      {id: 2, amount: "Rs. 2,000"},
      {id: 3, amount: "Rs. 3,000"},
      {id: 4, amount: "Rs 5,000"},
      {id: 5, amount: "Rs 10,000"},
      {id: 6, amount: "Rs 20,000"},
      {id: 7, amount: "Rs 40,000"},
      {id: 8, amount: "Rs 80,000"},
      {id: 9, amount: "Rs 1,60,000"},
      {id: 10, amount: "Rs 3,20,000"},
      {id: 11, amount: "Rs 6,40,000"},
      {id: 12, amount: "Rs 12,50,000"},
      {id: 13, amount: "Rs 25,00,000"},
      {id: 14, amount: "Rs 50,00,000"},
      {id: 15, amount: "Rs 1 Crore"},
      {id: 16, amount: "Rs 7 Crores"}
    ].reverse(),
    []);
  

  useEffect(()=>{
    quesNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === quesNumber - 1).amount)
  },[moneyPyramid,quesNumber])
  
  return (
    <div className="App">
      {username ? (
        <>
        <div className="main">
        {stop ? (<h1 className="endText">You earned :{earned} </h1> ) :(
        <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} quesNumber={quesNumber}/>
          </div>
        </div>
        <div className="bottom">
        <Trivia
         data={data}
         setStop = {setStop} 
         quesNumber = {quesNumber}
         setQuesNumber={setQuesNumber}/>
         </div> </>
        )}
      </div>
     
        
      <div className="pyramid">
        <ul className="moneyList">
        {moneyPyramid.map((m) =>(
          <li className={quesNumber === m.id ? "moneyListItem active": "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
        
        </ul>
      </div>
        </>
      ) : <Start setUsername = {setUsername}/>}
      
    </div>
  );
}

export default App;
