import{ usestate} from'react'
import './App.css'
import Card from './components/card';
import Greetings from './components/greetings'
import Counter from './components/Counter'
function App() {
  const students = [
    { name: "Rahil", class: "TYBCA", rollNo: 21 },
    { name: "Hiba", class: "TYBCA", rollNo: 18 },
    { name: "Amaan", class: "TYBCA", rollNo: 25 }
  ];

  return (
    <>
      {students.map((student, index) => (
        <Card
          key={index}
          name={student.name}
          className={student.class}
          rollNo={student.rollNo}
        />
      ))}

      <Counter/>
    </>
  );
}

  


export default App
