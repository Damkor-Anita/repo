// Don't in variable naming
// 2name='David'
// @name='David'
// first-name='David'
// first name='David'
//   DOs

// firstName='David'
// Firstname='David'
// First_name='David'
// name='David'
// NAME='David'
// Name2='David'
// Name$='David'

// let
// var
// const


// console
// document.write()
// document.getElementById
// document.getElementsByClassName

// let name=('David')
// console.log(name);
// let course='Fullstack web development'
// document.getElementById('para').innerHTML=course

// name='Wumi'
// document.getElementById('las').innerHTML=name

// var animal='Goat'
// document.getElementById('lasop').innerHTML=animal

// var animal='Chicken'
// document.getElementById('con').innerHTML=animal




// let musician='Habeeb'
// document.getElementById('las').innerHTML=musician


// const pie=3.142
// document.getElementById('lasop').innerHTML=pie


// Data type
// 1 String
// 2 Number
// 3 Integer and float
// 4 BigInt
// 5 Boolean
// 6 Undefined
// 7 Object
// 8 Array

// 1 String

let work='Homework'
console.log(work)
document.getElementById('lasop').innerHTML='I am here'


let match='fixed'
document.getElementById('lasop').innerHTML='fixed'
document.getElementById('las').innerHTML='I wasn\'t home';


// String concatenation
// let firstname='Muhammed'
// let lastname='Salah'
// let club='Liverpool'
// let play=firstname + ' ' + lastname + ' plays footbal for ' + club
// document.getElementById('lasop').innerHTML=play


// Louis
// Hamilton
// Mercedes
// formula

// Louis Hamilton drives Mercedes Benz car in formula 1 race 

// Timo
// Werner
// chelsea
// Timo Werner wears jersey No 11 for chelsea

// Template Literals

// let firstname='Muhammed'
// let lastname='Salah'
// let club='Liverpool'
// let play=`${firstname} ${lastname} plays football for ${club}`
// document.getElementById('lasop').innerHTML=play


// let char=prompt('Compose your tweet ')
// let message='You have written ' + char + ', you have ' + (200 - char.length) + ' letters remaining '
// document.getElementById('lasop').innerHTML=message
// console.log(message);


// let code='Lagos School of Programming'
// let lenght=code.length
// document.getElementById('lasop').innerHTML=lenght

// length method
var lasop='bootcamp '
console.log(lasop.length);
//  index method
let yusuf='questi55onnaire'
console.log(yusuf[3]);
console.log(yusuf.indexOf('n'));
console.log(yusuf.indexOf('e'));
console.log(yusuf.lastIndexOf('e'));

// includes method
console.log(yusuf.includes('e'));
console.log(yusuf.includes('p'));
//   Changing Case
let email='superman@gmail.com';
console.log(email);
console.log(email.toUpperCase());
console.log(email.toLowerCase());


// Number Datatype

// 42/2
let x=10;
console.log(x)
let y='2';
console.log(y)
console.log(42+2)
console.log(42-2)
console.log(42*2)
console.log(42**2)
console.log(42/2)
console.log(43%2)
console.log(x*y)




// incremental method
let likes=5
console.log(likes);
likes++
console.log(likes);
likes++
console.log(likes);
likes--
console.log(likes);
likes +=5
console.log(likes);
 let oba=50
oba %=5
console.log(oba);
 let omo=2
omo **=3
console.log(omo);



// comparison


x=5;
console.log(x==7);
console.log(x=='5');//weak equality
 console.log(x==='5');//strong equality
console.log(x!=5);
 console.log(x>=5);
console.log(x<=5);
console.log(x='5');
console.log(x=5);



// Comparison operators:AND (conjunction), OR (disjunction) and NOT (negation)
let a =6
let b =3
console.log(a < 10 && b > 1);
console.log(!(a < 10 && b > 1));
console.log(a < 10 && b < 1);
console.log(a < 10 || b < 1);
console.log(a==b);
console.log(!(a==b));


// Conditional states

// if and else statement
// ternary operation

// switch statement


// if and else statement


let v=8
let w=8
if(w>v){
    document.getElementById('lasop').innerHTML='God is good'
}else if(w===v){

    document.getElementById('lasop').innerHTML='They are confused'
}else{
    document.getElementById('lasop').innerHTML='Devil is a liar'  
}


// let user=prompt('Enter a number')
// let users=parseInt(user)
// if((user%2===0)&&(users%3===0)){
//     document.getElementById('lasop').innerHTML=`${users} is divisible by 2 
//     and3 `
// }
// else if(user%2===0){
//     document.getElementById('lasop').innerHTML=`${users} is divisible by 2`
// }
// else if(user%3===0){
//     document.getElementById('lasop').innerHTML=`${users} is divisible by 3 `
// }

// else{

//     document.getElementById('lasop').innerHTML=`${users} is not divisible by 2 and3 `
// }




// let pwd=prompt('Enter your password')
// if(pwd ==''){
//   alert('Please enter your password')
// }
// else if(pwd.length>=8 && pwd.length<=15){
//     if(pwd.includes ('@') && pwd.includes('&')){
//         alert('password is strong')
//     }
//     else if(pwd.includes ('#') && pwd.includes('$')){
//         alert('password is weak')
//     }
//     else if(pwd.includes ('&')){
//         alert('password is intermediate')
//     }
//     else if(pwd.includes ('@')){
//         alert('password is ok')
//     }
//     else{
//         alert('enter a valid password')
//     }



// }else{
//     alert('password must be between 8 and 15 characters and should contain special symbol(s) ')
// }

// Ternary Operation
// let age=prompt('How old are you?')
// let mess=(age>=18)?'You can party': 'You are too young to party'
// document.getElementById('lasop').innerHTML=mess


// switch operation
// let color=prompt('What\'s your favorite color?')
// color=color.toLowerCase()
// switch(color){
//     case 'green':
//         document.getElementById('lasop').innerHTML=`Oh!, your favorite ${color}, mine is ${color} too `
//         break;

//     case 'red':
//         document.getElementById('lasop').innerHTML=`Oh!, your favorite ${color}, mine is ${color} too `
//         break;
        
//     case 'yellow':
//         document.getElementById('lasop').innerHTML=`Oh!, your favorite ${color}, mine is ${color} too `
//         break;
        
        
//     case 'purple':
//         document.getElementById('lasop').innerHTML=`Oh!, your favorite ${color}, mine is ${color} too `
//         break

//     default:
//         document.getElementById('lasop').innerHTML=`Oh!, your favorite ${color}, sorry ${color} is not included`

        

        

// }



// let pwd=prompt('Enter your password')

// switch(pwd){
//     case (pwd.length>=8 && pwd.length<=15):
//         alert('password must be between 8 and 15 characters and should contain special symbol(s) ')
//         break;

//     case 'red':
//         document.getElementById('lasop').innerHTML=`Oh!, your favorite ${color}, mine is ${color} too `
//         break;
        
//     case 'yellow':
//         document.getElementById('lasop').innerHTML=`Oh!, your favorite ${color}, mine is ${color} too `
//         break;
        
        
//     case 'purple':
//         document.getElementById('lasop').innerHTML=`Oh!, your favorite ${color}, mine is ${color} too `
//         break

//     default:
//         document.getElementById('lasop').innerHTML=`Oh!, your favorite ${color}, sorry ${color} is not included`


// }


let day;
switch(new Date().getDay()){
    case 0:
        day='Sunday'
        break; 
    case 1:
        day='Monday'
        break;
    case 2:
        day='Tuesday'
        break;
    case 3:
        day='Wednesday'
        break;
    case 4:
        day='Thursday'
        break;
    case 5:
        day='Friday'
        break;
    
    case 6:
        day='Saturday'
        break;
    default:
        break;
}

document.getElementById('lasop').innerHTML=`Today is ${day}, and the Date and Time are ${new Date }`

let time1='morning'
let time2='afternoon'
let time3='evening'
let master='David'
let now=new Date()
let time=(now.getHours())
if(time>=00 && time<12){
    document.getElementById('lasop').innerHTML=`Good ${time1} ${master},the time is ${new Date}`
}
else if(time>=12 &&time<16){
    document.getElementById('lasop').innerHTML=`Good ${time2} ${master}`
}
else{
    document.getElementById('lasop').innerHTML=`Good ${time3} ${master}`
}


let car={
    model:'Mercedez Benz',
    brand:'Es450',
    year:2015,
    color:'white'
    
};
console.log(car)
console.log(car.model)
// document.getElementById('check').click()

// Arrays
let list=[1,2,3,4]
list=[1,'two', 1.34, true]
console.log(list)
let prycolors=['red','blue','green']
let colors=new Array('purple', 'Green','orange')
console.log(prycolors)
console.log(colors)



// Array methods

// pop
let vehicle=[' venza ', ' corola', ' BMW',  ' GWagon', ' Volkswagen', 'Lexus']
vehicle.pop()
console.log(vehicle)



// Shift
let comedians=new Array('AY', ' ALIBABA',' I GO SAVE',' EGBOR BOMB',' BASKET MOUTH')
comedians.shift()
console.log(comedians)




// push
comedians.push(' Bovi')
console.log(comedians)


// unshift
vehicle.unshift(' Ferari ')
console.log(vehicle)

// concat

let complain=comedians.concat([' Gordons',' Destalker',' Taooma',' Dunmoye'])
document.getElementById('las').innerHTML=complain
document.getElementById('pro').innerHTML=vehicle


// join
document.getElementById('prog').innerHTML=vehicle.join(' ')

let frameworks=['vue.js', 'Angular.js','Ajax.js']
let result=frameworks.join('-')
document.write(result)

// splice


let sm = ['whatsapp', 'facebook','instagram', 'messanger']
sm.splice(1,0,'Tiktok', 'Snapchat','Linkedin','Quora' )
document.getElementById('lasop').innerHTML=sm



// slice

// var fruits=['Banana','Orange','lemon','Apple','Mango']
// var citrus=fruits.slice(1, 3)
// console.log(citrus)



let students=['Omowumi','Damilare','Mary','Solomon','Habeeb','Oba','Anita','Oluwadamilare','Yusuf']
let guest=prompt('Enter your name')
let firstChar=guest.slice(0,1)
let firstChartoUppercase=firstChar.toUpperCase()
let restOfChar=guest.slice(1,guest.length)
let restOfChartoLowercase=restOfChar.toLowerCase()
let fullName=firstChartoUppercase+restOfChartoLowercase
if(students.includes(fullName)){
    document.getElementById('lasop').innerHTML=`Hello ${fullName}, you are welcome to the class`
}
else{
    document.getElementById('lasop').innerHTML=`Sorry ${fullName}, you are not part of the class` 
}



//  .length method
fruits = ["Banana", " Orange",  " Apple", " Mango"];
console.log(fruits.length)
// .toString
console.log(fruits)
console.log(fruits.toString())


 // specifying index
 let stude=['Oladunmoye Adeniyi','Akerele Tomiwa','Muyiwa Oluwole','Tony Elumelu','shuaib David']
 stude[2]='Warila'

 console.log(stude)

 //  sorting
stude.sort()
console.log(stude)

stude.sort()


// sorting numbers

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a})
points.sort(function(a, b){return a-b})

console.log(points)

// reverse
let browsers=['Explorer','Chrome','Firefox','microsoft edge','pheonix','Opera','UC']
browsers.reverse()
console.log(browsers)



let str='Please get out you idiot'
let mystr=str.split('')
console.log(mystr)
document.getElementById('las').innerHTML=mystr

let str1='Please get out you idiot'
let mystr1=str1.split(' ')
console.log(mystr)
document.getElementById('lasop').innerHTML=mystr1



// functions

function practice(){
   alert('Hello World')
}
practice()

// Global and local scope


// Global
// let username='Sam';
// function greeting(){
//     let message=`Hello ${username}`
//     document.getElementById('lasop').innerHTML=message
// }
// greeting()
// document.getElementById('las').innerHTML=username

  //local scope
function greeting(){
    let username='Sam';
    let message=`Hello ${username}`
    document.getElementById('lasop').innerHTML=message
}
greeting()
// document.getElementById('las').innerHTML=username



// function lasop(){
//     let mess='Lagos School of Programming'
//     document.getElementById('las').innerHTML= 'I love ' + mess

// }

//  Arrow function
let lasop1 = () =>{
    let mess='Lagos School of Programming'
    // document.getElementById('las').innerHTML= 'I love ' + mess
    return mess

}
// lasop()
//  anonymous function
let rat=function(){
    let messes='Lagos School of Programming'
    // document.getElementById('prog').innerHTML= 'I love ' + messes
    return messes
}
// rat()


//  Returning a function
function ret (){
	let userName = 'Sam';
     let message =`Hello ${userName}`
     return message

}
document.getElementById('prog').innerHTML= ret()


  let print = () =>{
    ret()
    document.getElementById('lasop').innerHTML= rat()
    document.getElementById('las').innerHTML= lasop1()
  }
  print()



  
// passing parameters into a function


// function number(nos){
//     return(nos*nos)
// }
// document.getElementById('las').innerHTML=number(5)

// function num(name,age){
//     res=`My name is ${name}, and I am ${age} years old`
//     return(res)
// }
// document.getElementById('las').innerHTML=num('David', 27)


// function add(a,b,c){
    
//     return(a+b+c)
// }
// document.getElementById('las').innerHTML=add(2,4,6)



// function area(l,b){
//     let rec=l*b
//     return rec
// }
// document.getElementById('pro').innerHTML=area(2,4)





// a=prompt('Enter the value of a')
//  b=prompt('Enter the value b')
//  c=prompt('Enter the value c')
//  let descriminant=b*b-4*a*c
//  let quad = (a,b,c) =>{
//     let root1=(-b + Math.sqrt(descriminant))/(2*a)
//     let root2=(-b - Math.sqrt(descriminant))/(2*a)
//     let result=[root1, root2]
//     return result
//  }

//  document.getElementById('las').innerHTML=quad(a,b,c)


 
//     // creating our own objects

//     function person(name,age){//constuctive function
       
//         this.name=name
//         this.age=age

//     }
//     let david=new person('Boma Akpore', 36)
//     let tega=new person('Tega Dominc',26)
//     let bbNaija=david.name + ' of age ' + david.age + ' messed up with married' + tega.name + ' of age ' + tega.age + ' in the Big brother house'
//     document.getElementById('las').innerHTML=bbNaija




    

//     // object initializers

//     let bucky={name:'Bucky Roberts',age:30};
//     let taylor={name:'Taylor Swift', age:20}

//     let bond=`${bucky.name} loves ${taylor.name} because she is ${taylor.age} years old`

//     document.getElementById('las').innerHTML=bond





// // Loop in Js

// // for loop
// // for(let i=0;i<=100; i++){
// //     console.log(i)
// // }
// // for(let j=20;i>=0; i--){
// //     console.log(j)
// // }
// for(let j=2;j<=
//     10; j++){
//     console.log(j)
// }

// // let boy='David'
// // let mother=prompt(`${boy}! How many times do I have to tell you to clean up your room?`)
// // for (let i=1; i<=mother; i++){
// //     console.log(`${i}:Clean up your room`)

// // }



// // let mother=prompt(Boy + ', How many times will i tell you to clean up your room? ')
// // for(let i=mother; i>=1; i--){
// //      console.log(`${i} clean up your room`)
// // }



// // using for loop in an array


// const shinobis =['Sasuke', 'Minato', 'Itachi', 'Kakashi',];
// for (let i=0; i<shinobis.length; i++){
//     console.log(shinobis[i])
// } 


// var output=[]
// count=1
// function fizzBuzz(){
// for(let count=1; count<=100; count++)
//     if( count%3===0 && count%5===0){
//         output.push('FizzBuzz')
//     } else if( count%3===0){
//         output.push('Fizz')
//     }else if( count%5===0){
//         output.push('Buzz')
//     }else{
//         output.push(count) 
//     }  
//    console.log(output)
// }
// fizzBuzz()


// for(let i=1; i<=100; i++)

// while loop
i=1;
while(i<=100){
    console.log(i)
    ++i

}



// forEach loop

// const girls=['Tumininu','Joy','Linda','Mary','Peace','Tobi','Eniola']
// girls.forEach(function(boy){
//     console.log(boy)

// })

const girls=['Tumininu','Joy','Linda','Mary','Peace','Tobi','Eniola']
girls.forEach(function(girl, index, array){
    console.log(`${index}: ${girl}`)
    console.log(array)
})




// for in loop
const user={
        firstName:"Joseph",
        lastName:'Warila',
        age:40
    }
    
    for(let a in user){
        //console.log(u)//this will ive only the key
        // to get the value
    console.log(`${a}: ${user[a]}`)
    break
    
}

let res="";
for(let a=0; a<=10; a++){
    if(a==5) continue
    res += a + "<br>"
}
document.getElementById('las').innerHTML=res

//  map method
const numbers=[65,44,12,4]
const newArr=numbers.map(function(num){
    return num*10
})
document.getElementById('las').innerHTML=newArr

// function omowumi(num){
//   return num*10
// }
   


// const persons=[
//          {firstName:'John', lastName:'Doe' } ,
//          {firstName:' Peter', lastName:'Piper '},
//          {firstName:' Angela', lastName:'Yu '},
//          {firstName:' Stefan', lastName:'Boltzman '}
//     ];
//     const fullname=persons.map(function(items){
//         return [items.firstName, items.lastName].join(' ')
//     })
//     document.getElementById('las').innerHTML=fullname;
  
const persons=[
         {firstName:'John', lastName:'Anita'} ,
         {firstName:' Peter', lastName:'Mary '},
         {firstName:' Angela', lastName:'Oba '},
         {firstName:' Stefan', lastName:'Solomon '}
    ];
    const fullname=persons.map(zainab)
       

    document.getElementById('las').innerHTML=fullname;

    function zainab(zain){
        return [zain.firstName, zain.lastName]
        
    }


    
// Random numbers
//document.getElementById('con').innerHTML=Math.random()//it gives number  between 0-1, bye 1 exclusive


// document.getElementById('con').innerHTML=Math.floor(Math.random()*10 + 1)
let min=prompt('Enter your minimum value')
let max=prompt('Enter your maximum value')
function randomNumber(min,max){

   
    return Math.floor(Math.random() * (max - min +1 )) + min
   
}


// Spread operators



// let maleStudents=['Damilare','Solomon','Habeeb','David']
// let allStudents=[ ...maleStudents,'Zainab','Damilare','Anita','Mary','Tumininu']
// console.log(allStudents)


// let allStudents =function(a,b,c,...args){
//     console.log(args)

// }
// allStudents('Zainab','Damilare','Anita','Mary','Tumininu','Damilare','Solomon','Habeeb','David')

// let allStudents =function(a,b,c,...args){
//     console.log([a,b,c,...args])

// }
// allStudents('Zainab','Damilare','Anita','Mary','Tumininu','Damilare','Solomon','Habeeb','David')


// Filter method

let team=[
    {name:'Gregory',
    position:'Developer'
},

{name:'Solo',
position:'UX Designer'
},

{name:'Habeeb',
position:'CEH'
},

{name:'Cara',
position:'content Manager'
},

{name:'Michael',
position:'Backend Engineer'
},

{name:'Osuntolu',
position:'Developer'
}

]

let accepted=team.filter(x =>x.position=='Developer')
console.log(accepted)

// let david=document.getElementById('but');
// david.addEventListener('click', adam)

// function adam(){
//     // alert('Idiot why did you click me')
//     document.getElementById('lasop').innerHTML='Idiot why did you click me'

// }



// function change(){
//     document.getElementById('btn').value='You just clicked me'
    
// }






//     function fun() {  
//         document.getElementById("las").innerHTML =  "This is first function";       
//     }   
//    function fun1() {  
//         document.getElementById("las2").innerHTML =  "This is second function";  
       
//      }  
//      function fun2() {  
//         document.getElementById("las3").innerHTML =  "This is third function";  
//      }  


//      let myBtn=document.getElementById('solo')
//      myBtn.addEventListener('mouseover',fun)
//      myBtn.addEventListener('click',fun1)
//      myBtn.addEventListener('mouseout',fun2)


// function loader(){
//   alert('Iframe has loaded')
// }

// let loaded=document.getElementById('myframe')
// loaded.addEventListener('load',loader)



 function fun3(){
     btn.style.background='Yellow'
     btn.style.height='50px'
     btn.style.width='80px'
     btn.style.color='blue'
 }


// console.log(fun())

 function fun4(){

     document.getElementById('lasop').innerHTML='Whats up guy! Why are you touching me'
 }
//  console.log(fun1())


 function fun5(){
    btn.style.background=''
    btn.style.height=''
    btn.style.width=''
    btn.style.color=''
}

let confusion=document.getElementById('btn')
confusion.addEventListener('mouseover', fun4)
confusion.addEventListener('click', fun3)
confusion.addEventListener('mouseout', fun5)
