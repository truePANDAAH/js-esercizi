class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NegativeAmountError';
  }
};
class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'WithdrawNotPermittedError';
  }
};
class BankAccount {
  #amount = 0;
  constructor(initialAmount) {
    this.#amount = initialAmount;
  }
  // Use custom Error class
  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative');
    }
    this.#amount += amount;
  }
  // Use custom Error class
  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); 
    }
    // Use custom Error class
    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); 
    }
    this.#amount -= amount;
  }
  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (err) {
  console.log('Something went wrong during bank account operations');
  console.log(err.message);
}