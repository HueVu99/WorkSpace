var fullName='Vu Thi Hue';
var age='20';
//confirm,alert,promt:bật lên hộp thoại

alert (fullName);//có masit
alert(age);

console.log(fullName);

confirm('Xac dinh do tuoi');// mesit cancel,ok
prompt('Xac dinh do tuoi');;// mesit cancel,ok, input
//chỉ thực thi sau 1s đúng 1 lần 
setTimeout(function() {
alert('Thong bao')
},1000)
//thực thi liên tục sau 1 khoảng thời gian (nhiều lần)
setInterval(function() {
console.log('Day la log') +Math.random()
},1000)

/**Toán tử số học
 * +,-,*,/,%,++,--
 */
/*var a=8;
var b=2;
var c= a+b;
console.log(c);

var a=5;
a--;
console.log(a);*/

// toán tử ++ --
//prefix & Postfix
var a=6;
//Việc 1: +1 cho a, a=a+1==>a=7
//Việc 2:Trả về a sau khi được +1
console.log(++a);


var b=6;
//Việc 1: a copy, a copy =6
//Việc 2:Trừ 1 của a, a=a-1=> a=5
//viêc 3:Trả về copy
var output= b--;
console.log('output: ' ,output);
console.log('b:',b);

var number=7;
var output= number++ + --number;
//7+7
console.log('output: ',output);

var number=7;
var output= ++number *2 - number-- *2;
//8*2-8*2
console.log('output: ',output);

//Toán tử gán
var c = 1;
c +=2;
console.log(c);

// Toán tử chuỗi-String operator

/*var firsName ='Vu';
var lastName ='Hue'
console.log(firsName + ' '+lastName);*/
 
// var name ='hue';
// name +=' vu';
// console.log(name);

// hiểu hơn về câu lệnh điều kiện
//và phép so sánh

/*var d = 1;
var e = 2;
var result = d<e;
console.log('result',result);

if(d<e){
    console.log('d<e');
}else{
    console.log('d>e');
}*/

//Chuoi
//backslash in javascript
/*var fullName ="Vu hue \"dang code\""
var firstName='Day la dau //'
var lastName='Day la dau fjghklg fhw ef jki ifw kgbkdl'
+'djfn jl dhf fheu dkfhn'
+'djfn jl dhf fheu dkfhn'
+'djfn jl dhf fheu dkfhn'
console.log(lastName)
console.log(firstName.length)
console.log(fullName)*/

//Teamplate string ES6


/*var firstName='Hue ';
var lastName='Vu';
console.log(`Toi la: ${ firstName} ${lastName}`)*/


//1.  lam viec voi chuoi
var myString =' Hoc Js tai f8 '
//console.log( myString.IndexOf('Js',4))
//console.log( myString.lastIndexOf('Js'))


//2. Search k ho tro phuong thuc 4, ho tro tim kiem bieu thuc chinh quy
//console.log(myString .search('JS'))


//3.cut string 
console.log(myString.slice(-3, -1))

//4. Replace
//console.log(myString.replace('Js', 'Javascript')) 
//bt chinh quy tim cac chuoi JS
console.log(myString.replace(/Js/g, 'Javascript'))

//5. convert to upper case (viet hoa all)
console.log(myString.toUpperCase())

//6. convert to lower case (viet thuong all)
console.log(myString.toLowerCase())

//7. trim loai bo khoang trang hai dau
console.log(myString.trim().length)

//8.Split
var languages1 ="Javascript, PHP, Ruby"
var languages2 ='Javascript'
console.log(languages2.split(''))
console.log(languages1.split(', '))

//9. get a character by index
const myString2='Vu Hue'
console.log(myString2.charAt(1))


//kiem tra data type(js number methods)
var result= 20/1;
console.log(isNaN(result))// kiem tra bien NaN
//lm vc vs To String
var age= 18;
var myString= age.toString();
console.log(myString);
//lam viec to fixed lam ton
var PI = 3.14;
console.log(PI.toFixed())

//Mang chua tat ca kieu dl

var languages =[
    'Javascript',
    'PHP',
    'Ruby',
    'Dart',
    null,
    function(){},
    123
];
 
console.log(languages.length)//do dai mang 4
//kt co phai array  ({} false)
console.log( Array.isArray(languages))
// Lay pt theo index
console.log( languages[2])
//toSting
console.log(languages.toString())
//join ''xoa bo ki tu trong ; ',
console.log(languages.join(''))
//Xoa element cuoi mang va trA VE PHAN TU DA XOA, co the thuc hien nhieu lan
console.log(languages.pop())
//push them mot hoc nhieu pt mang
console.log(languages.push('Vu', 'Hue'))
console.log(languages)
//Shift xoa pt dau mang va tra vept da xoa
console.log(languages.shift())
//Unshift them mot hoac nhieu ot vaof dau mang vaf in ra
console.log(languages.unshift('Vu', 'Hue'))
console.log(languages)
//splicing vij tris con tro xoa di 2 phan tu, 0 k xoa
languages.splice(1, 2)
languages.splice(1, 0, 'Dart')
console.log(languages)
//concart
var langhuage3=['dart','java']
console.log(languages2.concat(languages))
//Slicing 0 copy mang(1 con tro 2 vi tri cat ngung cat), 1 cat het
console.log(languages.slice(1))


//ham (a-z A-Z <0-9 khong dc dua dau tien>)
/**
 * 1. ham la mot khoi ma,
 * +lam mot viec cu the
 * 2.Loai ham:
 * +ham built-in
 * +tu dinh nghia
 * 3.Tinh chat:
 * +khong dc thuc thi khi dinh nghia
 * +se thuc thi khi goi
 * +co the nhan tham so
 * +co the tra ve mot gia tri
 */
function showDiaChi(){
    alert('xin chao cac ban');
}
showDiaChi();

/**
 * 1.tham so
 * + kieu dl k gioi ham
 * +tinh ke thua
 * +1 tham so 
 * +nhieu tham so
 * 
 * 2. truyen tham so
 * +1 tham so
 * +nhieu tham so
 * 
 * 3.argumemts:
 * + doi tuong
 * + vong for of
 */

function writeLog(masages1, masages2){
    // console.log(masages1);
    // console.log(masages2);
    if(masages1){
         console.log(masages1);
    }
    if(masages2){
           console.log(masages2);
    }
} 
writeLog('Test')


function writeLog2(){
    console.log(arguments);
}
 writeLog2('test','test2','test3')
    

function writeLog3(){
    var myString=''
    for(var param of arguments){
        myString +=`${param} -`
    }
        console.log(arguments)
}
 writeLog3('test','test2','test3')

 //return co the tra ve bat ki kieu dl nao
 function cong(a,b){
     return(a+b)// [a,b]=[2,8]  a.toString()+b.toString()=28 <==>'2'+'8'
 }
    var result=cong(2,8)
    console.log(result)
    /**
     * cac loai tham function
     * Declaration function
     * Expression function
     * 
     */
    //hosting goi trc khi dinh nghia Df
    showMessage()
    function showMessage(){
        console.log('Declaration function');
    }
    var showmessage2= function(){
        console.log('Expression function')
    }
    //object trong JS(key:value)
    //dn 1 key trong oj
    // var email='email'

    // var myInfo ={
    //     name: 'hue',
    //     age:18,
    //     address:'Ha Noi',
    //     [emailKey]:'456',
    //     getName:function(){
    //         return this.name;
    //     }
    // };
    //them key ms neu k co thi:    console.log(myInfo.['adress'] tra ve undefined
    // myInfo['my-email']='123'
    // console.log(myInfo)
    //console.log(myInfo.age)//cach1 lay key ra

    // var myKey='address'//cachs2
    // console.log(myInfo[myKey])

    // delete myInfo.age
    //console.log(myInfo.getName);


    /*//Obj constructor
    function User(firstName, lastName, avatar){
        this.firstName =firstName;
        this.lastName =lastName;
        this.avatar =avatar;//this mo ta thuoc tinh pt se co khi khoi tao dt

        this.getName=function(){
            return `${this.firstName} ${this.lastName}`;//this. getName
        }
    }
    //doi tuong
    var author = new User('hue', 'hue', 'avatar');
    var user = new User('hue', 'Vu', 'avatar');

    author.title ='chia se dao tai f8' 
    user.comment='lieu co khoa asp.net k'

    console.log(author.constructor=== User);
    console.log(user.getName)*/


    //Object prototype - Basic
function User(firstName, lastName, avatar){
        this.firstName =firstName;
        this.lastName =lastName;
        this.avatar =avatar;

        this.getName=function(){
            return `${this.firstName} ${this.lastName}`;//this. getName
        }
    }
    // them thuoc tinh ben ngoai ham tao f8
    User.prototype.className='f8'
    User.prototype.getClassName= function(){
        return this.className
    }
    //doi tuong
    var user1= new User('hue', 'hue', 'avatar1');
    var user2 = new User('hue', 'Vu', 'avatar2');

    console.log(user1.className);
    console.log(user2.getClassName())


/* Viết code, một dòng cho mỗi yêu cầu sau:

Tạo một đối tượng user trống.
Thêm thuộc tính name với giá trị David.
Thêm thuộc tính surname với giá trị Xuan.
Thay đổi giá trị của name thành Cafedev.
Xóa thuộc tính name khỏi đối tượng.
var user=  {};
user.name=David;
user.surname=Xuan;
user.name=Cafedev;
delete user.name;
 */
/**
 * Bài 2
Viết hàm isEmpty (obj) trả về true nếu đối tượng không có thuộc tính, ngược lại là false.
Để sử dụng cho đoạn code sau:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

function isEmpty(obj){
    // Chỉ cần lặp qua đối tượng và trả về false ngay lập tức nếu có ít nhất một thuộc tính.
    for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
 */

/**Bài 3
Chúng ta có một đối tượng lưu trữ tiền lương của nhóm chúng ta:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng. Nên là 390 trong ví dụ trên.
Nếu tiền lương trống, thì kết quả phải là 0.
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}p

alert(sum); // 390
*/
//mozilla.org date
var date = new Date();

var year= date.getFullYear();
var month= date.getMonth()+1;
var day= date.getDate();
console.log(`${day}/${month}/${year}`)

//cau lenh re nhanh if-else so sanh dung sai
var date =2;
if(date ===2){
    console.log('hom nay la thu 2');
}else if(date ==3){
    console.log('hom nay la thu 3');
}else if(date ===4){
    console.log('hom nay la thu 4');
}else{
    console.log('Khong biet');
}
// cau lenh switch biet trc gia tri case >=3 case
var day=9;
switch(day){
    case 2:
    case 3:
    console.log('hom nay la thu 2,3,4');
    break;
    case 5:
    console.log('hom nay la thu 5')
    break;
    default:
        console.log('khong biet');
}

// Toans tu 3 ngoi
var course ={
    name:'Javascript',
    coin:250
}
/**
 * if (cource.coin> 0){
 * consolog.log(`${course.coin} Coins`)
 * }else{
 * console.log(`Mien phi`)
 * }
 */

// var result= conurce.coin >0 ? `${course.coin} Coins` : 'Mien Phi';
// console.log(result);


  // Vong lap loop
  //1. for-Lap voi dieu kien
 /*vd chay 10 lan
  for(var i =1;i<=10; i++ ){
      consolog.log(i);
  }*/

// var myArray={
//     'javascript',
//     'PHP',
//     'Java',
//     'Dart',
// };
// var arrayLength =myArray.length;
//  for(var i =1;i<myArray.length; i++ ){
//       consolog.log(i);
//  }

//For/in loop lay ra key

var myInfo = {
    name:'vu hue',
    age:18,
    address:'Ha noi, VN'
};

for( var key in myInfo){
    // console.log(key);
    console.log(myInfo[key]);

}

// while loop 
var i = 0;//1
 while(i<10){//<=
     i++;
console.log(i);//i++
 }
 //do/while
 var i=0;
 var isSuccess =false;
 do{
     i++;
     console.log('Nap the lan' + i);
    if(true){//false
        isSuccess = true
    }
 }while(!isSuccess &&i < 3);//<= sau 3 lan se k thu lai nua


 //vòng lặp long nhau
 var myArray =[
     [1,2],
     [3,4],
     [5,6]
 ];
 for ( var i=0; i<myArray.length;i++){
     for (var j= 0; j <myArray[i].length; j++){
     console.log(myArray[i][j]);
     }
 }


 //map() thay đoi elemem array
/* var cources=[
     {
         id: 1,
         name:'Javascript',
         coin:0,
         
     },
     {
      id: 2,
         name:'Html css',
         coin:0
     },
     
     {
      id: 3,
         name:'Ruby',
         coin:0
     },
     {
      id: 4,
         name:'Ruby',
         coin:0
     },
 ]
 function courHandler(cource,index){
    //  console.log(course);// tra ve tat ca\
    return{
        id:course.id,
        name:`Khoa hoc: ${course.name}`,
        coin:course.coin,
        coinText:`Gia: ${course.coin}`,
        index:index,
    }
 }
 var newCourses = conrses.map();// tao bien aray
 console.log(newCourses)*/

 //nhan 1 gt duy nhất reduce
  var cources=[
     {
         id: 1,
         name:'Javascript',
         coin:100
         
     },
     {
         id: 2,
         name:'Html css',
         coin:0
     },
     
     {
         id: 3,
         name:'Ruby',
         coin:0
     },
     {
         id: 4,
         name:'Ruby',
         coin:480
     },
 ]
 function courHandler(cource,index){
    
    return{
        id:course.id,
        name:`Khoa hoc: ${course.name}`,
        coin:course.coin,
        coinText:`Gia: ${course.coin}`,
        index:index,
    }
 }

 function coinHandler(accumulator,currenvalue, currenIndex,originArray){
     i++;
     var total=accumulator+currenvalue.con ;
 
     console.table({
         'luot chay:' :1,
         'Bien tich chu: ':accumelator,
         'Gia khóa hc: ':currenvalue.coin,
         'tich chu dc: ':total
     });
     console.log(currenvalue);
     return total
 }
 var totalCoin = conrses.reduce(coinHandler, 10);// khởi tạo bien bd luu tru
 console.log(totalCoin)

 // includes method kt co pt do k
 var title= 'resposive with web'
 console.log(title.includes(responsive))

 /**
  * Callback
  * la ham dc truyen qua doi so
  * dc goi lai trong ham nhan doi so
  */
 function myFunction(param){
     if(typeof param === 'function'){
         param('hoc lap trinh')
     }
 }

 function myCallback(value){
     console.log('value:', value)
 }
myFunction (myCallback)
// Phan 2
//console.log(this) chinhs la corsess
//lap lai

Array.prototype.map2 =function(callback){
var output =[], arrayLength =this.length;
for( var i=0; i<this.length;i++){
var result=callback(this[i],i)//goi lai
console.log('result: ',result)
output.push(result)
}
return output
}
var courcess =[
    'javascript',
    'Php',
    'ruby'
];
//goi lai thi truyen funtion
var htmls= courcess.map2(function(course){
    return`<h2> ${course}</h2>`;
});
console.log(htmls,join(''))
/*courcess.map(function(cource){
// console.log(course);
return`<h2> ${cource}</h2>`;
})
console.log(htmls.join(''));*/

//filter tra ve tat ca tm dk

/*Array.prototype.filter2= function(callback){
    var output =[];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback (this[index],index,this);
            if(result){
                output.push(this[index])
            }
        }
    }
    return output
}
 var fitler=[
     {
         
         name:'Javascript',
         coin:100
         
     },
     {
         
         name:'Html css',
         coin:0
     },
     
     {
         
         name:'Ruby',
         coin:0
     },
     {
         
         name:'Ruby',
         coin:480
     },
 ]
 var filterCourse =fitler.filter2(function(filter,index,array){
     return fitler.coin>700;
 })
 consolog.log(filtoLowerCase)*/
//some kt toi thieu 1 pt tm dk
Array.prototype.some2 =function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                return true;
            }
        }
    }
    return false;
}
 var some=[
     {
         name:'Javascript',
         coin:100
         isFinish:true,
     },
     {
         name:'Html css',
         coin:800
          isFinish:false,
     },
     
     {
         
         name:'Ruby',
         coin:909
          isFinish:false,
     },
     {
         name:'Ruby',
         coin:480,
        isFinish:true,
     },
 ]
 var result=some2(function(some,index,array){
     return course.isFinish;
 });
 console.log(result)