

const obj = {
    name: "Ashok",
    age: 25,
}

Function.prototype.MyBind= function (ctx = {}, ...args) {

    if (typeof this !== "function") throw Error(this + "is not a function");

    ctx.fn=this
    return function () {
        ctx.fn(...args)
    }

}

Function.prototype.myCall=function(ctx={},...args){
    if(typeof this !=="function") throw Error (this + "is not a function");

    ctx.fn=this;

    return ctx.fn(...args)

}
function print() {
    console.log(this.name, this.age);
}

Function.prototype.myApply=function(ctx={}, arr,...args){
    if(typeof this !=="function") throw Error (this + "is not a function");
    if(!Array.isArray(arr)) throw Error ("pass args as an array");

    ctx.fn=this;

    return ctx.fn(arr,...args)

}

print.myApply(obj,[],2635);
