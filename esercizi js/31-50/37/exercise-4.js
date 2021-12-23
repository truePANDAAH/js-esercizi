class BankAccount {
    
    constructor(money) {
        this.money = money;
    }

    deposit(add) {
        this.money += add;
        console.log(`account balance after deposit ${this.money}`)
    }

    withdraw(sub) {
        this.money -= sub;
        console.log(`account balance after withdraw ${this.money}`)
    }

    view() {
        console.log(this.money);
    }
}




const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();