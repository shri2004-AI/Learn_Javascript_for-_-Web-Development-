const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    }
};

// methods shorthand
const calculator1={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    multi(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    }
};
console.log(calculator1.add(65,65));
console.log(calculator1.sub(65,65));
console.log(calculator1.multi(65,65));
console.log(calculator1.div(65,65));
