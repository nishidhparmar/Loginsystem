const express = require("express")
const Router = express.Router()
const User = require("../db/model/user")


Router.get('/', (req, res) => {
    res.render('index')
})
Router.get('/signup', (req, res) => {
    res.render('signup', { error: "" })
})
Router.get('/login', (req, res) => {
    res.render('login', { error: "" })
})
Router.post('/signupdata', (req, res) => {

    User.findOne({ email: req.body.email }).then((data) => {
        if (data == null) {
            const user = new User({ name: req.body.name, email: req.body.email, pass: req.body.pass });
            user.save().then(() => res.render("signup", { error: "Success please login!" }));
        } else {
            res.render("signup", { error: "Email is already taken please login!" })

        }
    }).catch((err) => {
        console.log(err, "catch");
    });

})
Router.post('/logindata', (req, res) => {
    User.findOne({ email: req.body.email }).then((data) => {
        if (data == null) {
            res.render("login", { error: "Email not found please signup!" })
            // const user = new User({ name: req.body.name, email: req.body.email, pass: req.body.pass });
            // user.save().then(() => res.render("signup",{error:"Success"}));
        } else {
            if (data.pass == req.body.pass) {
                res.render("success")
            } else {
                res.render("login", { error: "Your password is incorrect" })

            }

        }
    }).catch((err) => {
        console.log(err, "catch");
    });


})







Router.get('/*', (req, res) => {
    res.render('notfound')
})

module.exports = Router