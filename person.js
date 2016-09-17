/**
 * Created by jalatraining on 9/17/2016.
 */

//1st way to create an object
var pepe = {
    name : 'pepe',
    age : a2,
    sayHello: function(){
        console.log('hello, mi name is ', this.name);
    }

};

//2nd way

var paco = new Object();
paco.name = 'paco';
paco.sayHello() = function(){
    console.log('hello, mi name is ', this.name);
}


// 1st way to create a class
var Person = function (name, age) {
    //properties
    this.name = name;
    this.age = age;

    //methods
    this.sayHello() = function () {
        console.log('hello, mi name is ', this.name);
    }
}

var luis = new Person('Luis', 12);

//2nd way

var Person = function (name, age) {
    //properties
    this.name = name;
    this.age = age;
}

// methods
Person.prototype.sayHello() = function () {
    console.log('hello, mi name is ', this.name);
}

// static methods
Person.sayHello() = function () {
    console.log('hello, I am a static method');
}


var ana = new Person('Ana', 12)


/*
board nxn
class Play
{
   dimesion // nxn
   board //  { x,x,x,
               x,x,x}

   llenarBoard()
   printBoard()

}


class Jugador
{
   //numeroIntentos=20 <por ahora indefinido>
   puntaje_parcial


}
 */








