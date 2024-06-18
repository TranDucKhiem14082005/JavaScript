/*//Làm việc với chuối

var myString = 'Hoc JS tai F8!';

//1. Length
console.log(myString.length);

//2. Find index
console.log(myString.indexOf('F8'));
//2..tìm vị trí mà mình muốn (không phải vị trí đầu)
console.log(myString.indexOf('JS',6));
//2..tìm vị trí cuối cùng
console.log(myString.lastIndexOf('JS'));
//2..phương thức search: cũng là tìm từ nhưng không hỗ trợ phương thức chỉ số
console.log(myString.search('JS'));

//3. Cut string: cắt chuỗi
 console.log(myString.slice(11,13));
//3..cắt từ vị trí muốn cắt đến hết chuỗi.
console.log(myString.slice(-3,-1) + myString.slice(-1));

//4. Replace
console.log(myString.replace('JS','JavaScript'));
//cach thay thế hết tất cả các từ.
console.log(myString.replace(/JS/g,'JavaScript'));

//5. Convert to upper case
const languages = 'JavaScript, PHP, Ruby';
console.log(languages.toUpperCase());
//6. Convert to lower case
console.log(languages.toLowerCase())
//7. Trim: xóa các khoảng trắng thừa ở đầu và cuối của chuỗi
console.log(languages.trim());

//8. Split: chuyển chuỗi thành mảng
console.log(languages.split(', '));
//9. Get a character by index : lấy một kí tự nào đó bởi một vị trí cho trước
console.log(languages.charAt(5));

 */

/*
Số và làm việc với kiểu số trong JavaScript

 var age = 18;

 var result = 20 / 'afa';
 console.log(result);   
 // cach kiem tra xem phep tinh co hop le hay khogn
 console.log(isNaN(result));
 console.log(age.toString()); // chuyen ve kieu String
 console.log(age.toFixed()); //lam tron so sau dau phay (String)
 */

 /*
 //Mảng trong JavaScript - Array
 var languages1 = [
    'JavaScript',
    'PHP',
    'Ruby',
 ]
 console.log(languages1)

//cach kiem tra xem co phai la mang khong
console.log(Array.isArray(languages1));
//do dai cua mang
console.log(languages1.length);
//lay mot phan tu ra tu trong mang boi 1 vi tri cho truoc
console.log(languages1[2]);
 */

/*
//Làm việc với Mảng trong JavaScript
var languages = [
   'Javascript',
   'PHP',
   'Ruby',
]
console.log(typeof languages)

//1.toString: chuyen doi kieu du lieu thanh string
console.log(languages.toString())

//2.join: chuyen 1 mang thanh chuoi
console.log(languages.join(', '))

//3.Pop: xoa phan tu cuoi mang
console.log(languages.pop()) //no tra ve la pt da xoa
console.log(languages)

//4.Push: them mot/nhieu phan tu vao cuoi mang
console.log(languages.push('Dart','Java','C'))
console.log(languages)

//5.Shift: xoa pt o dau mang va no tra ve pta da xoa
console.log(languages.shift())
console.log(languages)

//6.Unshift: them 1/nhieu phan tu vao dau mang
console.log(languages.unshift('Dart','Java','C','Python'))
console.log(languages)

//7.Splicing: xoa/chen 1/nhieu ptu trong mang
console.log(languages)
languages.splice(1,1)
console.log(languages)
languages.splice(0,0,'NodeJS');
console.log(languages)

//8.concat: noi mang
var languages1 = [
   'Python',
   'NodeJS',
]

console.log(languages.concat(languages1))

//9.Slicing: cat 1/nhieu phan tu trong mang
console.log(languages.slice(0,1));
*/

/*
//Tham so trong ham
//1.tham so



function writeLog(massage) { //masage la tham so
   console.log(massage)
}

writeLog('test massage'); //test massage la doi so
*/

/*
//Return trong hàm JS

var isComfirm = confirm('message');

console.log(isComfirm);

function cong(a,b){
   //return a.toString() + b.toString();
   return [a,b];
}

var result = cong(5,7);
console.log(result);
// khi mà định nghĩa những function cùng tên thì nó sẽ trả về kết quả
//của function cuối cùng
 
// function trong function
function showMassage() {
   function showMassage2() {
      console.log("I'm Khiem Tran");
   }
}

console.log(showMassage);

// cac function trong JS
-Declaration function:
function showMassage() {

}

-Experession function
var showMessage2 = function() {

}
setTimeout(function () {

})
*/

/*
//Object trong JavaScript

var myInfo = {
   name: 'Khiem Tran',
   age: 18,
   address: 'Nha Trang',
   [emailKey]: 'khiemtran@145',
   getName: function() {
      return this.name;
   }
}

//tao them 1 key moi va var moi sau khi object da dc tao
myInfo.email = 'khiemtran@';
myInfo['my-email'] = 'khiem tran';

console.log(myInfo)

//lay mot key tu trong Object
console.log(myInfo.name);
console.log(myInfo['study']); //mot key khong co se tra ve undefined
//lay key tu 2 bien
var myKey = 'address';
console.log(myInfo[myKey]);
//them 1 key vao bien
var emailKey = 'email';
console.log(myInfo)

//xoa 1 key
delete myInfo.name
console.log(myInfo)
//function trong Object
console.log(myInfo.getName());
*/

/*//Object constructor

// var User  = function(firstName,lastName,Avatar) {}

function User(firstName,lastName,avatar) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.avatar = avatar;

   this.getName = function(){
      return`${firstName} ${lastName}`; 
   }
}

User.prototype.className = 'F8';
User.prototype.getclassName = function(){
   return this.className;
}

var author = new User('Khiem','Tran','avatar');
var user = new User('Khoa','Tran','avatar');
console.log(user.getclassName());

// //tạo thêm một thuộc tính mới cho từng cái user . VD
// author.title = 'Hello mn nguoi';
// user.comment = 'Chao anh';

// console.log(author);
// console.log(user)
// console.log(author.getName());
// console.log(user.getName());
*/

/*
//Đối tượng Date
var date = new Date();
console.log(date)
console.log(typeof date)

// cach lay thoi gian
var year = date.getFullYear();
console.log(year)
var month = date.getMonth() + 1;
console.log(month);
var day = date.getDate();
console.log(day)
*/

/*
// if - else

var date  = 2;
if (date == 2) {
   console.log('hôm nay là thứ');
} else if(date == 3){
   console.log('hom nay la thu 3');
}
*/
/*
//switch

//no se so sanh mot cac case bang toan tu ===
//neu case nao dung ma khong break thì nó sẽ lọt vào các case bên dưới
//nó sẽ thực hiện luôn.
//những trường hợp nào có ít nhất 3case thì sẽ dùng switch-case
//còn không thì sẽ dùng if-else
var date = 3;
switch(date) {
   case 2:
   case 3:
   case 4:
   case 5:
      console.log('thu 2,3,4,5 la ngay trong tuan');
      break;
   case 6:
      console.log("hom nay la thu 6")
      break;
   default:
      console.log('khong phai ngay trong tuan');
}
*/

/*
// toán tử 3 ngôi - ternary operator
var course = {
   name: 'JavaScript',
   coin: 250,
}

if(course.coin>0){
   console.log(`${course.coin} coins`);
}else {
   console.log('Mien phi');
}

//toan tu 3 ngoi cho vi du tren
var result = course.coin>0 ? `${course.coin} coins` : 'Mien phi';
console.log(result);
//vd trên được hiểu rằng nếu mà so tiên lớn hơn 0 thi nó sẽ in ra so tien
//con khong thi no se in ra miễn phí.

// một ví dụ khác về toán tử 3 ngôi
//ví dụ về tìm số lớn nhất trong hai số
var a = 2;
var b = 4;
var max = a>b?a:b;
console.log(max)
//vd dụ trên có nghĩa là sao. nếu mà a>b thì max sẽ bằng a
//còn b > a thì max sẽ bằng b

// ung dung của vòng lặp for để có thể lấy ra phần tử của mang

var myArray = [
   'JavaScript',
   'PHP',
   'Ruby',
   'Java',
   'Python',
   'Dart'
]

var arrayLength = myArray.length;
for(var i = 0; i<arrayLength; i++){
   console.log(myArray[i]);
}
*/

/*
// For/in loop

//Object
   var myInfo = {
   name: 'Khiem Tran',
   age: 18,
   address: "Nha Trang"
}

for(var bien in myInfo){
   console.log(myInfo[bien]); 
}

//Array
 var languages = [
   'JavaScript',
   'PHP',
   'Dart',
   'Java',
   'Python'
 ]

 for(var bien in languages){
   console.log(languages[bien]);
 }

 //String
 var myString = 'JavaScript';
 for(var bien in myString){
   console.log(myString[bien]);
 }
 */

 /*
 // For/of loop

 //Array
 var languages = [
   'JavaScript',
   'PHP',
   'Dart'
 ];

 for(var value of languages){
   console.log(value);
 }

 //String
 var languages1= 'JavaScript';
 for(var value of languages1){
   console.log(value)
 }

 //Object

 var myInfo = {
   name: 'Khiem Tran',
   age: 18
 }
// for(var value of myInfo){
//    console.log(value) // khoong lay duoc
// }
console.log(Object.keys(myInfo)) // lay ra cac key duoi dang la Array
for(var value of Object.keys(myInfo)){
   console.log(myInfo[value]) // lay ra duoc cac key  va
   //lay duoc cac gia tri cua cac key
}

console.log(Object.values(myInfo))//lay ra cac values duoi dang Array
*/

/*
// While loop

var myArray = [
   'JavaScript',
   'Java'
]
 var i = 0;
 while(i<myArray.length){
    console.log(myArray[i]);
   i++;
 }
*/


//  // do/while loop
// var i = 0;
// do{
//    i++;
//    console.log(i);
// }while(i<10);

/*
// break and continue in all the loop
for(var i = 0; i<10;i++){
   // console.log(i);
   // if(i === 5){
   //    break;
   if(i%2 !== 0){
      continue;
   }
   console.log(i);
   
   }

   // vòng lặp lồng nhau (Nested loop)
   var myArray = [
      [1,2],
      [3,4],
      [5,6]
   ]
   for(var i =0;i<myArray.length;i++){
      for(var j = 0;j<myArray[i].length;j++){
         console.log(myArray[i][j]);
      }
   }
   
   for(var i = 100; i>=0; i-=5){
      console.log(i);
   }
*/


/*
//Lam viec voi Array

// var courses = [
//    {
//       id: 1,
//       name: 'JavaScript',
//       coin: 250
//    },
//    {
//       id: 2,
//       name: 'Ruby',
//       coin: 500
//    },
//    {
//       id: 3,
//       name: 'ReactJS',
//       coin: 400
//    },
//    {
//       id: 1,
//       name: 'Python',
//       coin: 300
//    },
// ];

// courses.forEach(function(course,index) { //duyet qua cac phan tu cua mang
//    console.log(index,course)
// }); //truyen vao mot ham (call back)

// var isFree = courses.every(function(course) {
//       return course.coin === 0; //kiem tra lan luot tung thang
// });

// console.log(isFree) //phai tra ve dung 0 het thi moi tra ve true

// var isFree1 = courses.some(function(course) { //kiem tra tung thang
//    return course.coin === 0; //chi can co 1 thang dung thi no se tra ve true
// });
// console.log(isFree1);

// var right = courses.find(function(name1) { //dung de tim kiem
//    return name1.name === 'JavaScript'; //neu tat ca cac phan tu khong dung thi no
//    //se tra ve undefined . Neu ma no ktra dung thi no se ket thuc luon (tra ve 1 doi tuong)
// }) //con ve filter thi no se tim kiem het luon tat ca cac phan tu neu no dung (tao ra mot list
// //cac danh sanh dung)

// console.log(right);

//***map()

// function couresHandler(hello, index,originArray){ //index tuc la cai key tuong ung khi no lap qua
//    return hello; //mình cho nó return về một tham số nào cũng được
//    //nếu mà mình không thay đổi gì hết thì nó sẽ trả về lại mảng ban đầu
// }
// var newCourses = courses.map(couresHandler);

// console.log(newCourses)

// function couresHandler(course, index,originArray){ //index tuc la cai key tuong ung khi no lap qua
//    return {
//       id: course.id,
//       name: `Khoa hoc: ${course.name}`,
//       coin: course.coin,
//       coinText: `Gia: ${course.coin}`,
//       index:index,
//       originArray:originArray,
//    }
// }
// var newCourses = courses.map(couresHandler);

// console.log(newCourses)

//reduce();
// //cach dung vong lap (vd ve viec tinh tong cac coin cua khoa hoc)
// var totalCoin = 0;
// for(var course of courses) {
//    totalCoin += course.coin;
// }

// console.log(totalCoin)

//1. Dễ hiểu: vòng lặp dễ hiểu hơn
//2.ngắn gọn: reduce ngắn hơn
//3.Hiệu năng: vòng lặp nhanh hơn một xíu

//lý thuyết để hiểu rõ nó là gì
// var i = 0;
// function coinHandler(accumulator,currentValue,currentIndex,originArray) { //accumulator:  nó là biến lưu trữ
//    // số 0 được tạo ra để gán cho thằng accumulator
//    i++;
//    var total = accumulator + currentValue.coin;
//    console.table({
//       'Lượt chạy: ': i,
//       'Biến lưu trữ:': accumulator,
//       'Giá của khóa học: ': currentValue.coin,
//       'Cái mà mình tích trữ được: ': total
//    });
//    return total;
// }

// var totalCoin = courses.reduce(coinHandler,0); //coinHandler là đối số, còn 0 là gtri khởi tạo

// console.log(`Tổng tiền của các khóa học: `,totalCoin);


//cách làm thực tế:
//Nên đặt tên accumulator và currentValue sao cho nó đúng với ngữ
//cảnh của công việc cần làm
// var totalCoin = courses.reduce(function(total,course){
//    return  total + course.coin;
// },0);

// console.log(totalCoin);
 

//Bài Tập làm thêm

// //Flat -"Làm phằng" mảng từ Depth array - "Mảng sâu" tức là sau khi hoàn thành thì chúng
// //ta được một mảng chứa được các phần tử giống nhau.

var depthArray = [1, 2, [3, 4], 5,  6,  [7 , 8, 9]];//Mảng sâu

var flatArray = depthArray.reduce(function(flatUouput,depthItem) {
   return flatUouput.concat(depthItem);

},[]); //mục tiêu của chúng ta là tạo ra một mang => gtri khởi tạo là []
console.log(flatArray);


//Lấy ra các khóa học đưa vào 1 mảng mới

var topics = [
   {
      topic: "Front-end",
      courses: [
         {
            id: 1,
            title: "HTML,CSS"
         },
         {
            id: 2,
            title: "JavaScript"
         }
      ]
   },
   {
      topic: "Back-end",
      courses: [
         {
            id: 1,
            title: "PHP"
         },
         {
            id: 2,
            title: "Node JS"
         }
      ]
   }
];

var newCourses = topics.reduce(function(course,topic){
   return course.concat(topic.courses);
},[])

console.log(newCourses);
*/


//includes method . Tồn tại trong Array va String
console.log(Array.prototype.includes())
 