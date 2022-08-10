var hopperLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

hopperLab.fun();

console.log("outer func:  this.name = " + this.name);//The output will be bar because we can access it using this keyword.
console.log("outer func:  self.name = " + self.name);//The output will be bar because self allows us to access elements as long as they are within the function.
console.log("inner func:  this.name = " + this.name);//The output will be undefined because we can not access a variable that is not initialized .
console.log("inner func:  this.name = " + this.name);//The output will be undefined because the variable is not initialized in the inner function



