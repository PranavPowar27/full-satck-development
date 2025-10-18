const express = require('express');
const cors = require('cors'); // ✅ add this
const sequelize = require('./config/db');
const Student = require('./models/Student');

const app = express();
app.use(cors()); // ✅ allow frontend access
app.use(express.json());

app.post('/students', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json({ message: 'Student saved', student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

sequelize.sync().then(() => {
  app.listen(3001, () => console.log('🚀 Server running on port 3001'));
});