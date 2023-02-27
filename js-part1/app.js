console.log('ПРИВЕТСТВИЯ');
var nameAndSurname = prompt ('ИМЯ и ФАМИЛИЯ');
var age = prompt ('ВОЗРАСТ');
var first = 18;
var second = 50;
var th = 90;
if(age <= first){
    console.log('ПРИВЕТ!')
}else if(age >= first && age <= second){
    console.log('ЗДРАВСТВУЙТЕ!')
}else if(age >= second && age <= th){
    console.log('ЗДРАВСТВВУЙТЕ УВАЖАЕМЫЙ!')
}else{
    console.error('ОШИБКА!!!')
}
