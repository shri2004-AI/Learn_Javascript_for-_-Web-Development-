const student={
    name:"harsh",
    age:22,
    math:99,
    eng:93,
    phy:97,
    getAvg() {
        let avg=(this.eng + this.phy+this.math)/3;
        console.log(avg);
    }
};
console.log(this);

console.log(student.getAvg());



