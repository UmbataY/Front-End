class PaymentMethod {
    getAmount() {
        return "Your amount in the account is: ";
    }
}

class CashMethod extends PaymentMethod {
    constructor() {
        super();

        var amount = 0;
        this.setAmount = function(newAmount) { amount = newAmount; }
        this.getAmount = function() { return amount; }

    }
    addToAmount(newAmount){
        this.setAmount(this.getAmount() + newAmount);
        return this;
    };
    reduceFromAmount(newAmount) {
        this.setAmount(this.getAmount() - newAmount);
        return this;
    };
    getAmount() {
        return super.getAmount() + amount; 
    }
}

class CreditMethod extends PaymentMethod {
    constructor() {
        super();
        
        var amount = 0;
        this.setAmount = function(newAmount) { amount = newAmount; }
        this.getAmount = function() { return amount; }
    }

    addToAmount(newAmount){
        this.setAmount(this.getAmount() + newAmount);
        return this;
    };
    reduceFromAmount(newAmount) {
        this.setAmount(this.getAmount() - newAmount);
        return this;
    };
    getAmount() {
        return super.getAmount() + amount; 
    }
}


    const cashAccount = new CashMethod();
    console.log(cashAccount.getAmount());// returns “Your amount in the account is: 0”
    cashAccount.addToAmount(100); // returns cashAccount instance (useful for method chaining)
    cashAccount.addToAmount(20).addToAmount(30).reduceFromAmount(10); // returns cashAccount instance (useful for method chaining)
    console.log(cashAccount.getAmount()); // returns “Your amount in the account is: 140”

    const creditAccount = new CreditMethod();
    creditAccount.addToAmount(100); // returns creditAccount instance (useful for method chaining)
    console.log(creditAccount.getAmount());