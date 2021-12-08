const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.post(
    "/api/personal-finance/operations",
    (req, res) => {
        let operaciones = req.body;
        operations.push (operaciones);
        res.status(200).json(operations);
    }
);

app.get("/api/personal-finance/is-my-goal-achieved/:amount", (req, res) => {
    let {amount} = req.params;
    amount = parseInt(amount);
    let result = "no cumple";

    if (amount > balance) {
        res.json(result);
    }
    else {
        result = "cumple";
        res.json(result);
    }
});

module.exports = app;
