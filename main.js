/**
 * Created by jalatraining on 9/17/2016.
 */
var paragraph = "hello world";
var countWords = function(par){
    return par.split(' ').length;
};
console.log('Paragraph: ',paragraph, '"has ', countWords(paragraph),' words');


var printCustomDate = function() {
    var days =['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
    var now = new Date();
    var today = days[now.getDay()-1];
    var hours = now.getHours() > 12 ? now.getHours() - 12 :  now.getHours();
    var xyz = now.getHours() > 12 ? 'PM' :  'AM';
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    console.log('Today is: ' + today);
    console.log('Current time is: ', hours, xyz, mins, ':', secs);
}

printCustomDate();

var isCapicua = function(num){
    var  miss = num;
    var rest = 0, reverse = 0;
    while(miss !=0)
    {
        rest = miss%10;
        reverse = reverse*10 + rest;
        miss = Number.parseInt((miss/10));
    }
    if (num == reverse) return true
    else return false;

}

var getFirstCapicua = function(start, end){
    for (i = start; i <= end; i++){
        if (isCapicua(i)){
            return i;
        }
    }
    return "no existe";
}

var x = 50;
var y = 100;

console.log ('First capicua number between ', x, 'and', y, 'is', getFirstCapicua(x, y));

//var sayHello = function (name){
  //  console.log(name, ' , I am auto-exec');
//}

//sayHello("gretta");

(function (name1, name2){
    console.log(name1,name2, ' , I am auto-exec');
})("Gretta", "Leo");


//1st way to create an object

