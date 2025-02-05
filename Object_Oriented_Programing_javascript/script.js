let obj={
    a:1,
    b:"harry"
}
console.log(obj);
let animal={
    eats:true
};
let rabbit={
    jumps:true
};
rabbit._proto_= animal;
// sets rabbit.[[Prototype]]=animal
class Animal{
    constructor(name){
        this.name=name;
        console.log("object is creted")
    }
    eats(){
        console.log('kha raha hu');
        
    }
    jumps(){
        console.log("kood raha huuu")
    }
}
class lion extends Animal{
    constructor(name){
        super(name)
        console.log("object is creted and he is lion")
    }
    eats(){
        super.eats()
        // when we want super class methods which overridded also be present dont go in vain
        console.log('kha raha hu roar.......'); 
    }
}
let a= new Animal("soumi");
console.log(a);
console.log(a.jumps());
console.log(a.eats());
console.log(a.name);
let l=new lion("Shera")
console.log(l.eats());
// kha raha hu
// kha raha hu roar.......
// method overridding:animal class er eats method override in lion class
// class lion prototype Animal.it inherited the proprty of lion
class User{
    constructor(name){
        this.name=name
    }
    get name(){
        return this._name;
    }
    // getting the actual name
    set name(newname){
        this._name=newname;
    }
    // setting the new name
}
let u=new User("ryui")
console.log(u.name)
u.name="hehe"
console.log(u.name)
console.log(l instanceof Animal);
// syntax ->object instanceof class
//  the instanceof operator allows to check whether an object belongs to a certain class .it returns true if obj belongs to the class or any other class inheriting from it
