const express = require("express");
const data = require("./data.json");
const app = express();

app.get('/api/users', (req,res, next) => {
    res.status(200).send(data);
});

app.get("/api/users/:id", (req,res,next) => {
    const { id } = req.params;
    const foundUser = data.filter(user => {
        return user.id === parseInt(id)
    })
    res.status(200).send(foundUser);
});

app.get("/api/get_school/:school", (req, res, next) => {
    const { school } = req.params;
    const { email } = req.query;
    const { name } = req.query;
    console.log(school)
    console.log(name)
    console.log(email)

 if(email) {
     const foundUser = data.filter(user => {
         
     })
 }



    const foundSchool = data.filter( user => {
        return user.school === school
    });
    console.log(foundSchool)
    res.status(200).json(foundSchool);
});

const port = 4000;
app.listen(port, () => console.log(`ßlistening on port ${port}`))

