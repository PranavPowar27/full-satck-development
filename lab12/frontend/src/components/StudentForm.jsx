import { useState } from 'react';
import axios from 'axios';
import './StudentForm.css'; // optional for styling

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
    try {
      await axios.post('http://localhost:3001/students', form);
      alert('✅ Student saved successfully!');
      setForm({
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
    } catch (err) {
      alert('❌ Error saving student: ' + err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Student Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Class:</label>
          <input name="class" value={form.class} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Roll No:</label>
          <input name="rollNo" value={form.rollNo} onChange={handleChange} required />
        </div>

        <h3>Subjects & Marks</h3>
        {[1, 2, 3, 4].map((i) => (
          <div className="form-group" key={i}>
            <label>Subject {i}:</label>
            <input name={`subject${i}`} value={form[`subject${i}`]} onChange={handleChange} required />
            <label>Mark {i}:</label>
            <input
              name={`mark${i}`}
              type="number"
              value={form[`mark${i}`]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;