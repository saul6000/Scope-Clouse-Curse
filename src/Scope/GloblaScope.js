//variables 
var a;//declarando la variable a 
var b='b';//declarando y asignamos
b='bb';//reasignando
var a ='aaa' //redeclaracion

//Global Scope 
var fruit = 'Apple';//global scope

function bestfruit(){
    console.log(fruit);
}
bestfruit();

cmamo=45;

function countries(){
    country = 'roma'//global
    console.log(country)
}
countries();