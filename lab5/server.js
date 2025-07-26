const express = require("express");
const studentrouter = require("./student/routes/student.routes");
const teacherrouter = require("./teacher/routes/teacher.routes");
const subjectrouter = require("./subject/routes/subject.routes");

const app = express();
const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, ()=>{
    console.log("Server started");
})
app.use("/student", studentrouter);
app.use("/teacher", teacherrouter);
app.use("/subject", subjectrouter);


app.get("/", (req, res)=>{
    res.send("Welcome to main page");
});