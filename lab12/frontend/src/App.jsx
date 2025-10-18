
import { useState } from 'react';
import axios from 'axios';

function StudentForm() {
  const [form, setForm] = useState({
    name: '',
    class: '',
    rollNo: '',
    subject1: '',
    mark1: '',
    subject2: '',
    mark2: '',
    subject3: '',
    mark3: '',
    subject4: '',
    mark4: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/students', form);
    alert('Student saved!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="class" placeholder="Class" onChange={handleChange} />
      <input name="rollNo" placeholder="Roll No" onChange={handleChange} />
      {[1, 2, 3, 4].map((i) => (
        <div key={i}>
          <input name={`subject${i}`} placeholder={`Subject ${i}`} onChange={handleChange} />
          <input name={`mark${i}`} type="number" placeholder={`Mark ${i}`} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;