var express = require("express"),
    router = express.Router(),
    user_model = require("../models/user"),
    bcrypt = require("../node_modules/bcryptjs")
router.get("/register", (req, res) => {
    res.render("register");
})
router.get("/login", (req, res) => {
    res.render("login")
})

router.post("/register", (req, res) => {
    var fields_entered = req.body
    var name = fields_entered.name,
        email = fields_entered.email,
        password2 = fields_entered.password2,
        password = fields_entered.password
    let errors = []
    if (!fields_entered.name || !fields_entered.email || !fields_entered.password || !fields_entered.password2)
        errors.push({ msg: "please fill all the fields" })
    if (fields_entered.password !== fields_entered.password2)
        errors.push({ msg: "passwords do not match" })
    if (fields_entered.password < 6)
        errors.push({ msg: "password is too short" })
    if (errors.length > 0)
        res.render("register", { errors, name, email, password, password2 })
    else {
        user_model.findOne({ email: email })
            .then(user => {
                if (user) {
                    //user exists
                    errors.push({ msg: "email already exists" })
                    res.render("register", {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });

                } else {
                    const new_user = new user_model({
                        name,
                        email,
                        password,
                    })

                    //hashpassword
                    bcrypt.genSalt(10, (err, Salt) => {
                        bcrypt.hash(new_user.password, Salt, (err, hash) => {
                            if (err)
                                throw err
                            new_user.password = hash;
                            new_user.save()
                                .then(() => { res.redirect("/users/login") })
                                .catch((err) => { console.log(err) })
                        })
                    })
                }
            })
    }
})
module.exports = router