profit = 0;
class Customer {
    getBeverage() {
        let beverage = new Beverage();
        return beverage.makeBeverage();
    }
}
class Beverage {
    constructor() {
        this.details = {
            beverage: ['coffee', 'tea', 'hot chocolate'],
            size: ['small', 'medium', 'large'],
            cream: true,
            sugar: false,
            cost: null,
        }
    }

    calculateCost() {
        if (this.details.beverage === 'hot chocolate' && this.details.size === 'small') this.details.cost = 1.50
        if (this.details.beverage === 'hot chocolate' && this.details.size === 'medium') this.details.cost = 2.00
        if (this.details.beverage === 'hot chocolate' && this.details.size === 'large') this.details.cost = 2.25

        if (this.details.beverage === 'coffee' && this.details.size === 'small') this.details.cost = 1.00
        if (this.details.beverage === 'coffee' && this.details.size === 'medium') this.details.cost = 1.50
        if (this.details.beverage === 'coffee' && this.details.size === 'large') this.details.cost = 1.75

        if (this.details.beverage === 'tea' && this.details.size === 'small') this.details.cost = 1.00
        if (this.details.beverage === 'tea' && this.details.size === 'medium') this.details.cost = 1.50
        if (this.details.beverage === 'tea' && this.details.size === 'large') this.details.cost = 1.75

        profit += this.details.cost
    }
    makeBeverage() {
        setTimeout(() => {
            let randomSize = this.details.size[Math.floor(Math.random() * this.details.size.length)]
            let randomBeverage = this.details.beverage[Math.floor(Math.random() * this.details.beverage.length)]
            let randomCream = Math.random() < 0.5 ? true : false; let randomSugar = Math.random() < 0.5 ? true : false
            
            this.details.beverage = randomBeverage;
            this.details.size = randomSize;
            this.details.beverage === 'hot chocolate' ? this.details.cream = true : this.details.cream = randomCream;
            this.details.beverage === 'hot chocolate' ? this.details.sugar = true : this.details.sugar = randomSugar;

            this.calculateCost()
        }, 1000).then(() => this.returnOrder())
    }
    returnOrder() {
        return this.details
    }
}
setInterval(() => {
    let cust = new Customer()
    console.log(cust.getBeverage())
    console.log('profit', profit)
}, 2000)

// let jimBob = new Customer();
// console.log(jimBob.getBeverage())

// let harry = new Customer();
// console.log(harry.getBeverage())




// return a random bevarage