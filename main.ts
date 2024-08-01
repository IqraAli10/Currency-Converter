import inquirer from "inquirer";

const currency: any = {
    "USD": 1, //base currency
    "EUR": 0.91,
    "GBP": 0.75,
    "JPY": 156.45,
    "AUD": 1.49,
    "CAD": 1.37,
    "CNY": 7.26,
    "INR": 74.57,
    "PKR": 280,
};


let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY", "INR", "PKR",]
            
        },
        {
            name: "to",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY", "INR", "PKR",]
        },
        {
            name: "amount",
            message: "Enter amount",
            type: "number",
        }
    ]
)
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount/fromAmount;
let conertedAmount = baseAmount * toAmount;
console.log(Math.round(conertedAmount));



