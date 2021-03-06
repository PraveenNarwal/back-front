const jwt = require("jsonwebtoken");
const User = require('../models/user.model')
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {

    if (!req.body.email && !req.body.password) {
        res
            .status(400)
            .send({ message: "Provide email and password to continue." });
        return;
    }
    const email = req.body.email;

    const filter = { email: email };

    User.findOne(filter, (err, user) => {
        if (err || user === null) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            console.log(req.body.password);
            console.log(hash);


            const user = new User({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                username: req.body.firstName + req.body.lastName,
                email: email,
                password: hash,
                contact: req.body.contact,
                isLoggedIn: true,
            });

            user
                .save(user)
                .then((data) => {
                    res.send(data);
                })
                .catch((err) => {
                    res.status(500).send({
                        message:
                            err.message || "Error, please try again later.",
                    });
                });
        } else {
            res.status(400).send({
                message: "User Already Exists.",
            });
        }
    });


}

const loginUser = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    if (!email && !password) {
        res
            .status(400)
            .send({ message: "Please provide email and password to continue." });
        return;
    }

    const filter = { email: email };
    User.findOne(filter, (err, user) => {
        if (err || user === null) {
            res.status(401).send({
                message: "Email or password not correct.",
            });
        } else {
            console.log(bcrypt.compareSync(password, user.password));

            if (bcrypt.compareSync(password, user.password)) {
                user.isLoggedIn = true;

                User.findOneAndUpdate(filter, user, { useFindAndModify: false })
                    .then((data) => {
                        if (!data) {
                            res.status(404).send({
                                message: "Some error occurred, please try again later.",
                            });
                        } else {
                            const token = jwt.sign({ _id: data._id }, "myprivatekey");
                            data.token = token;
                            res.send(data);
                        }
                    })
                    .catch((err) => {
                        res.status(500).send({
                            message: "Error updating.",
                        });
                    });
            } else {
                res.status(401).send({
                    message: "Email or password not correct.",
                });
            }
        }
    });

}

const logout = (req, res) => {

    if (!req.body.id) {
        res.status(400).send({ message: " user Id must required." });
        return;
    }

    const id = req.body.id;
    const update = { isLoggedIn: false };

    User.findByIdAndUpdate(id, update)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: "Logout Eroor, please try again later.",
                });
            } else res.send({ message: "Logged Out successfully." });
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating.",
            });
        });
};
module.exports = { logout, registerUser, loginUser }