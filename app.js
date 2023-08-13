// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}.`);
  }

  function deposit(amount) {
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough balance.`);
      return;
    }
    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount("john", 300);
const bob = newAccount("bob", 1000);

john.showBalance();
bob.showBalance();

john.deposit(500);
john.deposit(100);
john.withdraw(1000);

bob.withdraw(100);
