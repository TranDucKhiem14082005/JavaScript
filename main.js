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


//includes method . Tồn tại trong Array va String.
//kiếm tra xem trong String hay Array có thứ gì đó không
//includes('cái muốn tìm kiếm','vị trí bắt đầu để tìm kiếm)
// console.log(Array.prototype.includes);
// console.log(String.prototype.includes);
 
/*
//Math Object
-Math.PI -> trả về số pi 3.14...
-Math.round() -> làm tròn số -> đưa về số nguyên
-Math.abs() -> giá trị tuyệt đối của một số
-Math.ceil() -> làm tròn trên
-Math.floor() -> Làm tròn dưới
-Math.random() ->trả về một dãy số thập phân nhỏ hơn 1 -> đặt ra một các tên ngẫu nhiên
// tạo ra một dãy số ngẫu nhiên trong một khoảng nào đó -> làm ra chương trình khuyến mãi
-Math.min() -> tìm ra số nhỏ nhất
-Math.max() -> Tìm ra số lớn nhất
// console.log(Math.PI)

*/
/*
//Callback

//Là hàm (function) được truyền qua đối số
//khi gọi hàm khác

// tóm lại
// 1. Là hàm
// 2. Được truyền qua đối số của môt function khác
// 3. Được gọi lại (trong hàm nhận đối số)

// function myFunction(param){
//    console.log(param);
// }
// myFunction('Học lập trình'); 

   //mục đích làm cho map2 sẽ thực hiện như map( )
Array.prototype.map2 = function(callback) {
   var output = [], arrayLength = this.length;
   for(var i = 0;i<arrayLength;i++) { //b1 lap qua cái map2 này
      //b2 callback no
      var result = callback(this[i],i);
      output.push(result);
   }
   return output;
}



// //muốn gọi lại được thì phải truyền map2 function
// //output cuối cùng là biến htmls
// var htmls = courses.map2(function(course,index) {
//    return `<h2>${course}</h2>`; //bước này thì function chỉ return về cho map2.
//    //cái mình muốn là map2 return về htmls => thêm một mảng trống để chứa
//    //những cái thẻ h2 vào từ đó mình sẽ cho nó return về
//    //tiếp theo sẽ cho no return về return `<h2>${course}</h2>`;

// }); // map2 không có trong prototype của Array nên mình phải
// //định nghĩa nó

// console.log(htmls);
// // var htmls = courses.map(function(course(tra ve),index(tra ve)) {
// //    return `<h2>${course}</h2>`;
// // })
// // console.log(htmls.join(''))

var courses = [
   'JavaScript',
   'PHP',
   'Ruby',
   
]

//vd về forEach2();
Array.prototype.forEach2 = function(callback2){
   for(var value in this) {
      if(this.hasOwnProperty(value)){
         console.log(this[value],value,this);
      }
   }

};


courses.forEach2(function(course,index,originArray){
   console.log(course,index,originArray);
});


Tự làm nhưng đã sai. Bây giờ đi sửa lại theo sự hướng dẫn để hiểu hơn

// //vd ve every2();
// Array.prototype.every2 = function(callback3){
//    var arrayLength = this.length;
//    for(var i = 0; i < arrayLength; i++){
//       if(callback3(this[i] >='0')){
//          console.log(callback3(this[i]));
//       }else console.log('Dữ liệu sai');
//    }
// }
// courses.every2(function(course){
//    return course;
// })

// //some2();
// Array.prototype.some2 = function(callback4){
//    var arrayLength = this.length;
//    for(var i = 0; i < arrayLength;i++){
//       if(callback4(this[i]) != '0' || callback4(this[i]) != 0){
//          console.log(true);
//       }else console.log(false)
//    }
// }

// courses.some2(function(course){
//    return course;
// }) 


//Filter2

var courses = [
   {
      name: 'JavaScript',
      coin: 680,
      isFinish: true,
   },
   {
      name: 'PHP',
      coin: 860,
      isFinish: true,
   } ,
   {
      name: 'Ruby',
      coin: 980,
      isFinish: true,
   }
];

Array.prototype.filter2 = function(callback4) {
   var output = [];
   for(var index in this){
      if(this.hasOwnProperty(index)){
         var result = callback4(this[index],index,this);
         if(result){
            output.push(this[index]);
         }
      }
   }
   return output;
}

var filterCourses = courses.filter2(function(course,index,array){
   // console.log(course,index,array);
   return course.coin > 700;
});

console.log(filterCourses)

//Some2(): true/false //đưa vào một array rỗng thì nó sẽ không chay qua

Array.prototype.some2 = function(callback5){
   for(var index in this){
      if(this.hasOwnProperty(index)){
         if(callback5(courses[index],index,this)){
            return true;
         }
      }
   }
   return false;
}

var result = courses.some2(function(course,index,array){
   return course.isFinish;
})

console.log(result);

//every2() : true/false

Array.prototype.every2 = function(callback6){
   var output = true;
   for(var index in this){
      if(this.hasOwnProperty(index)){
         var result = callback6(this[index],index,this);
         if(!result){
            output = false;
            break;
         }
      }
   }
   return output;
}

var result = courses.every2(function(course,index,array){
   return course.isFinish;
});

console.log(result);

*/

/*
//Đệ quy: hàm gọi hàm
//function deQuy(){
   deQuy(); // như này gọi là đệ quy
}


// 1. Xác định được điểm dừng
// 2. Logic handle => Tạo ra điểm dừng
deQuy();

// function countDown(number){
//    if(number > 0){
//       console.log(number);
//       return countDown(number-1);
//    }
//    return number;
// }

// countDown(4);


// function loop(start,end,callback){
//    if(start < end){
//       callback(start);
//       return loop(start + 1, end,callback);
//    }
// }

// var array = ['JavaScript','PHP','Ruby'];

// loop(0,array.length,function(index){
//    console.log(array[index]);
// });


// function giaiThua(number){
//    var output = 1;
//    for(var i = number; i> 0; i--){
//       output = output * i;
//    }
//    return output;
// }

// giaiThua(3);
// //de quy
// function giaThuaDQ(number){
//    if(number > 0){
//       return number * giaThuaDQ(number -1)
//    }
//    return 1;
// }

// console.log(giaThuaDQ(3))

function countDown(number){
   if(number > 0){
      console.log(number);
      return countDown(number - 1);
   }
};

countDown(4);

function loop(start,end,callback){
   if(start < end){
      callback(start);
      return loop(start+1,end,callback);
   }

}


var array  = ['JavaScript','PHP','Dart','JavaScript'];

loop(0,array.length,function(index){
   console.log(array[index]);
})


function giaiThua(number){
   if(number > 0){
      return number * giaiThua(number - 1);
   }
   return 1;
}

console.log(giaiThua(3));


//  bài tập
// input = ['a', 'b', 'c', 'a', 'b'];
// output = ['a', 'b', 'c'];
function removeDuplicates(arr, i = 0, result = []) {
   if (i === arr.length) { // kiểm tra xem i có bằng độ dài của arr
      //nếu bằng thì return về mảng mới luôn
     return result;
   }

   const current = arr[i];
   let exists = false;
   for (let j = 0; j < result.length; j++) {
     if (result[j] === current) {
       exists = true;
       break;
     }
   }
 
   if (!exists) {
     result.push(current);
   }
 
   return removeDuplicates(arr, i + 1, result);
 }
 
 const input = ['a', 'b', 'c', 'a', 'b'];
 const output = removeDuplicates(input);
 console.log(output); // Output: ['a', 'b', 'c']

*/

/*
//HTML DOM? theo tiêu chuẩn của W3C(đưa ra các quy chuẩn cho all WEB)
//có 3 thành phần
-1. Element
-2. Attribute
-3. Text

// chúng ta có thể sd JavaScript để truy cập vào 3 thành phần trên và
//làm thay đổi giao diện của web

//Node: điểm giao nhau, giống như những cục gồ lên của đậu que

//----------------------------------------------------------------------

//JavaScript: chỉ là phương tiện để truy xuất vào mô hình DOM (HTML DOM không phải là của JavaScript)
//JS có thể chạy: Browser(trình duyệt) | Server (NodeJS)

//Browser: HTML -> DOM -> WEB API (DOM API): chạy trên WEB thôi
//Tại sao JS chạy Browser lại có DOM vì JS chạy trong WEB API mà trong đó nó có 
//DOM

//DOCUMENT: là đại diên cho cả website 

//// Element
// document.write('Hello guys');
// //ID
var headingNode = document.getElementById('heading')//element
console.log(headingNode)

var headingNode = document.getElementById('headingzzz')//element
console.log(headingNode) // element sai se tr ve NULL

 console.log({
   element: headingNode
 });

 // ClassName();
 var headingNodes = document.getElementsByClassName('heading')
 console.log(headingNodes) // return về một mảng
 // TagName();
 var headingNodess = document.getElementsByTagName('h1') // tên thẻ
 console.log(headingNodess) //return về một mảng chứa các thẻ h1

 // CSS selector
var headingNode2 = document.querySelector('.heading-2');
console.log(headingNode2) // return truc tiep ve element

console.log(document.querySelector('.box .heading-2'))
//trỏ từ thằng lớn nhất trỏ vào

/// Cách 1
var listItemNodes = document.querySelector('.box-1 li');
console.log(listItemNodes) // select vào thằng đầu tiên

var listItemNodes = document.querySelectorAll('.box-1 li');
console.log(listItemNodes) // select vào tất cả các thằng

/// Cách 2: Select từ thằng lớn nhất vào thằng nhỏ nhất

var boxNode = document.querySelector('.box-1');
console.log(boxNode); // Lớn nhất

console.log(boxNode.querySelector('li')); // (đầu tiên)Bên trong lớn nhất
console.log(boxNode.querySelectorAll('li')); // (All) bên trong nhỏ nhất


//html colection: Thao tác giống mảng. nó sẽ lấy các
// element của mảng
console.log(document.forms) //mình có thể trỏ thẳng vào êlement
//mà không cần select qua thằng getElementById
console.log(document.forms[0]);
console.log(document.forms.textForm);
console.log(document.anchors); // return về all thẻ a.
//có thuộc tính là name



// ///Attribute

var headingElement = 
   document.querySelector('h1');

console.log(headingElement);

///Thêm Attribute vào element
//Cách 1: 
headingElement.title = 'Heading'; 
console.log(headingElement);
headingElement.id = 'Heading'; 
console.log(headingElement);
headingElement.className = 'Khiem'; //className => class
console.log(headingElement);
//Cách 2:
headingElement.setAttribute('data','heading');
//Trong đó data là tên attribute mà mình muốn thêm
//heading là giá trị của attribute mà mình muốn thêm


///Lấy giá trị của attribute từ một element.
console.log(headingElement.getAttribute('title'));
console.log(headingElement.getAttribute('id'));
console.log(headingElement.getAttribute('data'));
console.log(headingElement.getAttribute('class')); 
//Khi lấy một giá tri của attribute của className (class)
//thì phải ghi tên attribute là "class".



///InnerText and textContent

var headingElement =
   document.querySelector('.heading');
//xem noi dung : geter
console.log(headingElement.innerText)

console.log(headingElement.textContent)

//them/sua noi dung : seter

headingElement.innerText = 'New heading'
console.log(headingElement.innerText)
console.log(headingElement.textContent)

headingElement.innerText = '<i>New Heading</i>'


headingElement.innerText = `

New Heading

` // Khi mà đổi sang `` thì mỗi lần xuống hàng thì nó sẽ đổi 
//thành một thẻ <br>
console.log(headingElement.innerText)

headingElement.textContent = `

New Heading

`
console.log(headingElement.textContent)


///**Thêm element vào trong element

//innerHTML, outerHTML

//innerHTML: có thể thêm được element node, attribute node, text node vào trong một
//element
var boxElement = document.querySelector('.box')

boxElement.innerHTML = '<h1 title ="Heaing">New Heading</h1>' //seter
 
console.log(document.querySelector('h1').innerText)//geter

console.log(boxElement.innerHTML); //khi chúng ta sử dụng geter
//thì nó sẽ lấy nội dung trong element của chúng ta ra.
//Trong trường hợp này nó lấy luôn cả thẻ h1 và attribute title ra 
//nó lấy luôn của text node. Nó quy thành một chuỗi

///outerHTML

//geter

console.log(boxElement.outerHTML) // nó sẽ lấy luôn thằng element
//khi gọi đến thuộc tính outerHTML 

//seter
boxElement.outerHTML = '<span>Test</span>' //nó sẽ ghi đề lền
// luôn thằng class box

console.log(boxElement) // nó vẫn còn trong bộ nhớ nhugnw trong DOM không
//con nữa => không get ra được nội dung của nó được bởi vì no không còn
//nó chỉ lấy nội dung ra từ bộ nhớ mà thôi.


// /*
// ///DOM STLYE

var boxElement = 
   document.querySelector('.box');

console.log(boxElement);
boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';
boxElement.style.margin = '100px'

console.log(boxElement.style.width) // lay ra thuoc tinh CSS inline.
//Khong phai lay ra mot doi tuong

//cach viet nhieu style ma khong can phai ghi nhieu dong
//boxElement.style la` mot Object
Object.assign(boxElement.style, { //muc dich chính của cách này
   // sinh ra không phải để CSS mà nó chỉ hỗ trợ trong quá trình mình
   //làm thì mình sẽ thêm những cái mình cần vào thôi
   width: '200px',
   height: '400px',
   // backgroundColor: 'blue',
});

console.log(boxElement.style);




//CLASSLIST PROPERTY

var boxElement = document.querySelector('.box');

console.log(boxElement);

console.log(boxElement.classList.add('box-2'));
// console.log(boxElement.classList.length); dung de ktr do dai

console.log(boxElement.classList.add('red'));
console.log(boxElement)
console.log(boxElement.classList.contains('red'));
// console.log(boxElement.classList.remove('red'));

// setTimeout(() => {
// console.log(boxElement.classList.remove('red'));

// },3000);

setInterval(() => {
   console.log(boxElement.classList.toggle('red'));

},1000);



//DOM events

var h1Element = 
   document.querySelector('h1')

h1Element.onclick = function() {
   console.log(Math.random());
}

var h1Elements = 
   document.querySelectorAll('h1');
for(var i = 0; i<h1Elements.length;i++){
   h1Elements[i].onclick = function(e) {
      console.log(e.target)
   }
}


//1.Input / select
var inputElement = 
   document.querySelector('input[type = "text"]');

inputElement.onchange = function(e) {
   console.log(e.target.value)
}
inputElement.oninput = function(e) {
   console.log(e.target.value)
}


var inputElement1 = 
   document.querySelector('input[type = "checkbox"]');
inputElement1.onchange = function(e){
   console.log(e.target.checked)
} 


var inputElement2 = 
   document.querySelector( 'select');
inputElement2.onchange = function(e){
   console.log(e.target.value); //nó trả về value của attribute
}

//2. Key up / down

var inputElement = 
   document.querySelector('input[type = "text"]')


inputElement.onkeyup = function(e){ // dang xet trong element
   console.log(e.which);
}

document.onkeyup = function(e) { // trên toàn DOM
   console.log(e.which);
}

document.onkeydown = function(e) {
   console.log(e.which)
}


//PrevenDefault and StopPropagation

///PrevenDefaulto

var aElements = document.links;

for(var i = 0;i<aElements.length;++i){
   aElements[i].onclick = function(e){
      if(!e.target.href.startsWith('https://f8.edu.vn')){
         e.preventDefault();
      }  
   }                 
} 

console.log(aElements)


var ulElement = document.querySelector('ul');
console.log(ulElement)  
ulElement.onmousedown = function(e) {
   e.preventDefault();
}

ulElement.onclick = function(e) {
   console.log(e.target)
}

document.querySelector('div').onclick = 
   function() {
      console.log('DIV');
   }
document.querySelector('button').onclick = 
   function(e) {
      e.stopPropagation();
      console.log('Click me!');
 }

 */


//1. Xử lý nhiều việc khi có 1 event xảy ra
//2. Lắng nghe / Hủy bỏ lắng nghe
//DOM event / Event listener

//  var btn = document.getElementById('btn');
//  console.log(btn);

 //DOM event (1)

//  btn.onclick = function() {
//    console.log('Viec 1');
//    console.log('Viec 2');
//    alert('Viec 3');
//  }

// //DOM event (2)
//sử dụng nó trong những trường hợp đơn giản và chúng ta không
//nhu cầu gỡ bỏ nó đi

// setTimeout(function(){ //Lắng nghe
//    console.log('Viec 1');
//    console.log('Viec 2');
//    alert('Viec 3');
// },3000)


//Hủy bỏ lắng nghe bằng cách ghi đè
// console.log('Viec 1');
// console.log('Viec 2');
// alert('Viec 3');
// setTimeout(function(){
//    btn.onclick = function() {}
// },3000)


//Event Listener

//Làm thế nào để lắng nghe một sự kiện khi sử dụng event listener
// btn.addEventListener('click',function(e){
//    console.log(Math.random())
// });

//Làm nhiều việc bằng cách là chúng ta sẽ tạo ra nhiều
//function để cho các việc chạy cùng một lúc.
//Nhược điểm: code dài
//Ưu điểm: Nhìm dễ hiểu, biết function nào làm việc nào,
//và khi làm thì cần làm việc nào trước việc nào sau theo ý mình
// btn.addEventListener('click',function(e){
//    console.log('Event 1')
// });btn.addEventListener('click',function(e){
//    console.log('Event 2')a
// });btn.addEventListener('click',function(e){
//    console.log('Event 3')
// });

// function viec1 () {
//    console.log('Việc 1');
// }

// btn.addEventListener('click',viec1);

// //Hủy bỏ lắng nghe: romoveListener
// setTimeout(function() { // khi hủy bỏ lắng nghe thì
//    //chúng ta có thể hủy bỏ lắng nghe một cái sự kiện
//    //cụ thể nào đó mà chúng ta muốn
//    //DOM event rất khó để làm việc nào

//    btn.removeEventListener('click',viec1)
// },3000)


//JSON
///1. Là một định dạng dữ liệu (chuỗi)
//2. JavaScript Object Notation
//3. JSON: Number,String,Boolean,Null, Array,Object
// var json = '["JavaScipt","PHP"]';
// var json = '{"name":"Khiem Tran","age":18}';
// var a ='{}'; // doi voi chuoi thi chung ta se bo vao trong dau ""
// console.log(JSON.parse(a))


// var object = JSON.parse(json);

// console.log(object)


// console.log(JSON.stringify(null)); // la mot chuoi string
// console.log(JSON.stringify([
//    'JavaScipt',
//    'PHP'
// ]));

// console.log(JSON.stringify({
//    name: 'Khiem Tran',
//    age: 18,
// }));



//Promise có 3 trạng thái.
//1. Pendding: chờ thành công/thất bại (rò rỉ bộ nhớ)
//2. Fulilled: Thanh công => sau đó lọt vào finally
//3. Rejected: lọt và0 failture

//promise: là một khái niệm  sinh ra để xử lý thao tác bất đồng
//bộ, trước khi có promise thì người ta sử dụng callback hell, mà khi sử dụng
//callback thì code nó sẽ đi sâu vào và rất là khó nhìn, rối, khó hiểu
//promise dudocj sinh ra trong phiên bản mới hơn (ES6) sử dụng
//nó tình trạng callback hell, để thấy code dễ nhìn hơn, dễ hiểu hơn.
// và để tạo ra một promise thì sd từ khóa new với thằng Promise và trong
//controctor của nó mình sẽ truyền vào excutor function() trong đó mình sẽ
//nhận được hai tham số dạng hàm (1: resole: khi thao tác xử lí thành công
//, 2: reject, dùng reject khi thao tác xử lý thất bại)
//khi sử dụng promise thì đối tượng promise đc tạo ra chúng tá
//sử dụng các phương thức then(nhận callback function và được 
//thực thi khi promise gọi resolve)  hoặc catch(được gọi khi promise
//gọi reject)
// var promise = new Promise (
//    function (resolve,reject) {

//       //fake call api
//       //reject: trả về một mã lỗi massage lỗi
//       resolve([
//          {
//             id: 1,
//             name: 'JavaScript'
//          }
//       ]);
//    }
// ) 

// promise
//    .then(function(courses){ 
//       console.log(courses);
//    })

//    .catch(function(){ 
//       console.log('Failure!');
//    })

//    .finally(function(){ 
//       console.log('Done!');
//   })
// var promise = new Promise(function (resole,reject) {
//    //LOGIC
//    // resole('YES');
//    reject('ERR')
// })

// promise
//    .then(function (result) {
//       console.log('result:' ,result)
//    })

//    .catch(function (value) {
//       console.log('value: ', value)
//    })


   ///CHAIN
//Nếu không return ra một promise thì nó sẽ chạy ngay thằng then ở
//chuỗi liền kế phía sau nó.
//Nếu return ra 1 new promise thì nó phải chờ thằng promise mới
//tạo ra chạy xong thì thằng then phía sau liên kề nó mới được chạy.
//.then phía sau liền kế một then trược (mà then dó return về một new promise)
//thì nó(then phía sau) sẽ được nhận cái value mà cái then phía trước return về
//và ở đây là cái new promise

//Bài toán in ra từ 1 đến 3 mã mỗi lần in phải đợi 1s
// function sleep(ms) {
//    return new Promise(function (resole) {
//       setTimeout(resole,ms);
//    });
// }

// sleep(1000)
//    .then(function() {
//       console.log(1);
//       return sleep(1000);
//    })
//    .then(function() {
//       console.log(2);
//       return sleep(1000);
//    })
//    .then(function() {
//       console.log(3);
//       return sleep(1000);
//    })

//Promise methods (resole, reject, all)
//Nếu đang trong quá trình chạy mà có một công việc return về
//một new promise và reject ở new promise đó thì 
//nó sẽ dừng ngay tại công việc đó và sau đó thì nó sẽ lọt vào thằng
//.catch

//Example

// function sleep(ms) {
//    return new Promise(function (resole) {
//       setTimeout(resole,ms);
//    });
// }

// sleep(1000)
//    .then(function() {
//       console.log(1);
//       return sleep(1000);
//    })
//    .then(function() {
//       console.log(2);
//       return new Promise (function(resolve,reject) {
//          reject('Đã xảy ra lôi!');
//       })
      
//    })
//    .then(function() {
//       console.log(3);
//       return sleep(1000);
//    })
//    .catch(function(err) {
//       console.log(err)
//    })


//1. Promise.resole
//2. Promise.reject
//3. Promise.all=> giúp chạy song song các promise
//Nếu có một promise bị lỗi thì Promise.all sẽ không care nữa
//nó sẽ báo lỗi luôn và nó sẽ lọt vào .catch

// var promise = new Promise( function (resolve,reject) {
//    resolve('Success!');
//    reject('err')
// });

// promise
//    .then(function(result) {
//       console.log('result: ',result)
//    })
//    /catch(function(err) {
//    console.log('err: ', err)
//    })

//Cach ngan hon

// var promise = Promise.resolve('Hello');
// var promise = Promise.reject('hi');

//Có một vài thư viện: output luôn luôn là một promise 

// promise
//    .then(function(result) {
//       console.log('result: ',result)
//    })
//    .catch(function(err){
//       console.log('err: ',err)
//    })


// //Promise.all

// var promise1 = new Promise(function(resolve) {
//    setTimeout(function(){
//       resolve([1]);
//    },1000);
// })
// var promise2 = new Promise(function(resolve) {
//    setTimeout(function(){
//       resolve([2,3]);
//    },1000);
// })

// var promise3 = Promise.reject('Loi');

// Promise.all([promise1,promise2,promise3])
//    .then(function([result1,result2,result3]){
//          console.log(result1.concat(result2).concat(result3))
//    } )
//    .catch(function(err){ // Nếu mà có mooth thằng sai
//       //thì cả bài sẽ sai luôn
//       console.log(err)
//    })


//ES6
//1. Let,const:
   //1.1. Var/Let,Const: Scope,Hosting
   //1.2. Const/ Var,Let: Assignment

   //Cái này được dùng trong CODE BLOCK:
   //if else, loop, {},... (Let,Const)

   //Code thuần: Var
   //Babel: Const,Let
   //-Khi định nghĩa biến và không gán lại biến đó: Const
   //- Khi cần gán lại gái trị cho biến: Let
   //Vd về Let
   // let isSuccess = false;
   // if(...){
   //    isSuccess = true;
   // }

//2. Arrow Function: hàm mũi tene => không thể sd nó làm function contructor được
//Nếu Arrow function chỉ có một tham số thì chúng ta có thể
//bỏ ngoặc của tham số đó. VD (log) => ... -> log =>....
   // function logger(log){
   //    console.log(log);
   // }

   // logger('Message')

   // //vd
   // const sum = (a,b) => ({a:a,b:b}) 
   //nó sau dấu => không có dấu {} thì nó sẽ return ra luôn 
   //cái câu lệnh đó vd: => a+b.
   //Còn nếu có {} thì nó sẽ hiểu ở trong đây là một block code
   //nó sẽ đợi return ở trong block code đó
   //nếu muốn nó lấy luôn dấu {} thì phải thêm () vào để nhóm nó.

   //Đặc tính:
   // const courses = {
   //    name: 'Javascript basic',
   //    getName: () => {
   //       return this; 
   //    }
   // }

   // console.log(courses.getName());


//Template Literals: là viết trong dấu `...${}`
//Multi-line: viết nhiều dòng.

//Classes: Cách viết khác của contructor function

   //Cách viết function bình thường constructor function
      // function Course(name,price){
      //    this.name = name;
      //    this.price = price;
            // this.getName = function() {
            //    return this.name;
            // }
      // }
      // const phpCourse = new Course('PHP',100);
      // const javascriptCourse = new Course('JavaScript',100);
      // console.log(phpCourse);
      // console.log(javascriptCourse);

   //Cách viết theo kiểu Classes

   // class Course {
      //    constructor(name,price){
      //       this.name = name;
      //       this.price = price;
      //    }
      //    getName() {
      //       return this.name;
      //    }
      //    getPrice() {
      //       return this.price;
      //    }
      // }
      // const phpCourse = new Course('PHP',100);
      // const javascriptCourse = new Course('JavaScript',100);
      // console.log(phpCourse);
      // console.log(javascriptCourse);


//Enhanced object literals 
   //1. Định nghĩa key: value cho object ngắn gọn hơn.
   //2. Định nghĩa method cho object
   //3. Định nghĩa key cho object dưới dạng biến

   // var name = 'JavaScript';
   // var price = 1000;
   // var course = {
   //    //1. nếu mà key và value cùng một tên thì bỏ bớt đi một cái
   //    name,
   //    price,
   //    //2.
   //    getName() {
   //       return name;
   //    }
   // };

   // console.log(course.getName())

   //3.
      // var fieldName  = 'name';
      // var fieldPrice = 'price';

      // const course = {
      //    [fieldName]: 'JavaScript',
      //    [fieldPrice]: 1000
      // }

      // console.log(course)

//Default parameter values: Định nghĩa nhứng giá trị mặc định cho tham số
//Liên quan đến hàm (function)
//Khi nào sẽ dùng nó: Khi mình định nghĩa ra một hàm, và mình biết
//được là có những tham số không bắt buộc phải nhập,
//thường sẽ là sau tham số thứ nhất


   //Cách bình thường ES5  
   // function logger(log){
   //    if(typeof log === 'undefined'){
   //       log = 'Giá trị mặc định!!!';
   //    }
   //    console.log(log);
   // }

   //Cách ES6
   // function logger(log = 'Giá trị mặc định'){
   //    console.log(log);
   // }

   // function logger(log,isAlert){
   //    if(isAlert) return alert(log);
   //    console.log(log);
   // }

   // function logger (log,type='log'){
   //    console[type](log); 
   // }
   // logger('hi','error');


//Destructuring: Phân rã. Dùng cho Object và Array

   // //Array
   // var array = ['JavaScript','PHP','Ruby'];
   // //Lấy những giá trị của arr gán vào các biến a,b,c
   // //Cách bình thường

   // // var a = array[0]
   // // var b = array[1]
   // // var c = array[2]

   // //ES6
   // var [a, ,c] = array;
   // console.log(a, c);

   // //Rest(khi sử dụng với destructuring): lấy ra những phần còn lại
   // var [a, ...rest] = array;
   // console.log(rest);

   // //Object: có thể sử dụng với Rest
   // var course = {
   //    name: 'JavaScript',
   //    price: 100
   // };
   // //xóa đi một key trong object
   // var {name,...newObject} = course;
   // var {name,price} = course;  

   // console.log(newObject);

   // function logger({name,price,...rest}){
   //    console.log(name);
   //    console.log(price);
   //    console.log(rest)
   // };

   // logger({
   //    name: 'javaScript',
   //    price: 1000,
   //    description: 'Description content'
   // })


   // function logger([a,b,...rest]) {
   //    console.log(a);
   //    console.log(b);
   //    console.log(rest);
   // }

   // logger([2, 6, 8, 9, 10]);

//Spread: toan tu giai
//Array
   // var array1 = ['JS','Ruby'];
   // var array2  = ['Dart','PHP'];

   // var array3 = [...array2,...array1];

   // console.log(array3)

//Object
   // var object1 = {
   //    name:'JavaScript'
   // };

   // var object2 = {
   //    price: 1000
   // };

   // var object3 = {
   //    ...object1,
   //    ...object2
   // }

   // console.log(object3)

   // var defautConfig = {
   //    api: 'https://domain-trang-khoa-hoc',
   //    apiVerson: '1',
   //    orther: 'other'
   // }

   // var exerciseConfig = {
   //    ...defautConfig,
   //    api: 'https://domain-trang-bai-tap '
   // }

   // console.log(exerciseConfig);

   // //Toan tu Spread cho viec truyen tham so cho ham 
   // var array = ['JavaScript','PHP','Ruby'];

   // function logger(...rest){
   //    for(var i=0;i<rest.length;i++){
   //       console.log(rest[i])
   //    }
   // }

   // logger(...array)//Spread

//Tagged template literals: 
//Day la function use Tagged template literals.
   // function highlight([first, ...strings], ...values) {
   //    return values.reduce(
   //       (acc, curr) => [...acc, `<span>${curr}</span>`,strings.shift()],
   //        [first]
   //    )
   //    .join('');
   // }

   // // Hoc lap trinh <span>JavaScript</span> tai(noi vao va xoa di pt dau) <span>F8</span>!

   // var brand = 'F8';
   // var course = 'JavaScript';

   // const html = highlight`Hoc lap trinh ${course} tai ${brand}!`;

   // console.log(html);


//Module in JavaScript ES6.
   //Import/Export


// Optional chaining (?.): sd khi khong thuc su chac chan cai key do ton tai


// Promise example: done =>revise-promise.js and html. this in folder practice

// Fetch in JavaScript: Gọi lên API lấy dữ liệu từ backend => front-end xử lý

   //1. Front-end: xấy dụng giao diện người dùng

   //2. Back-end: xây dựng logic xử lý + cơ sở dữ liệu

   // API (URL): Application programming interface: Giao diện lập trình ứng dụng
   // Cổng giao tiếp giữa các phần mền

   // Backend -> API ->Fetch ->JSON/XML (JSON)

   // ->JSON.parse -> JavaScript types

   // -> Render ra giao diện với HTML 


   // var postApi = 
   //    'https://jsonplaceholder.typicode.com/posts';

   // fetch(postApi) //tra ve stream(response)
   //    .then(function(response){
   //       return response.json(); //JONS.parse: JSON -> JS types
   //    })
   //    .then(function(posts){
   //       var htmls = posts.map(function(post){
   //          return `<li>
   //             <h2>${post.title}</h2>
   //             <p>${post.body}</p>
   //          </li>`;
   //       });

   //       var html = htmls.join('');
   //       document.getElementById('post-block').innerHTML = html;
   //    })
   //    .catch(function(err){
   //       alert('has a error!');
   //    });

// JSON server



// Work use Postman  with REST API

