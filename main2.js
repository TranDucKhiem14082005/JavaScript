// var age = 18;
// console.log(typeof age)
// var fullName = 'Tran Duc Khiem'
// console.log(typeof fullName)

// var check;
// console.log(typeof check)

// var ktr = true;
// console.log(typeof ktr)

// var isNull = null;
// console.log(typeof isNull)

// var id = Symbol('id')

// console.log(id);
// console.log(typeof id)


// var fullName = '         Tran Duc Khiem!     ';
// console.log(fullName.length)

// var firstName = 'Khiem';
// var lastName ='Tran';
// console.log(`Toi la: ${firstName}${'-'}${lastName}`)

// console.log(fullName.indexOf('Duc'));

// console.log(fullName.indexOf('Duc',8))

// console.log(fullName.lastIndexOf('Duc'))

// console.log(fullName.search('Duc'))

// console.log(fullName.slice(5,8))

// console.log(fullName.slice(5))

// console.log(fullName.slice(-6,-1))

// console.log(fullName.replace('Duc','duc'))
// console.log(fullName.replace(/Duc/g,'duc'))
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.trim())
// console.log(fullName.trim().length)//do dai cua chuoi sau khi chuan hoa
// console.log(fullName.split())
// console.log(fullName.split(''))
// console.log(fullName.charAt(14))//lay mot ki tu boi 1 index co truoc
// console.log(fullName[10])//lay 1 ki tu cach 2


// var age = 18;
// var pi=3.145636

// console.log(isNaN(age));

// console.log(age.toString())
// console.log((pi.toFixed(3)))
// console.log(typeof pi.toFixed(3))

// var languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
// ]

// console.log(languages);
// console.log(typeof languages);
// console.log(Array.isArray(languages));
// console.log(languages.length);
// console.log(languages[2]) //cap nhat dia chi khong se tra ve undefined
// console.log(languages.toString());
// console.log(typeof languages.toString());
// console.log(languages.pop())
// console.log(languages)
// console.log(languages.push('Dart'))
// console.log(languages)


// var fullName = 'Tran Duc Khiem';
// console.log(typeof fullName)

// var age = 18;
// console.log(typeof age);

// var check = true;
// console.log(typeof check)

// var hi;
// console.log(typeof hi)

// var isNull = null;
// console.log(typeof isNull)

// var id = Symbol('id cua mot nguoi nao do')
// console.log(typeof id)
// console.log(id)

// // confirm("hi le")
// // prompt("hi lo anh em")

// setTimeout(function(){
//     console.log('hello')
// },600)

// // setInterval(function() {
// //     console.log('hay hoc di')
// // },1000)

// var a = 1;
// var b = 2;
// var c = a + b;
// var c = a - b;
// var c = a * b;
// var c = a ** b;
// a++
// console.log(c);
// console.log(a);

// if(a>0){
//     a++;
// }

// console.log(a)
//  b += a;
//  console.log(b)
//  b -= a;
//  console.log(b)
//  b *= a;
//  console.log(b)
//  b /= a;
//  console.log(b)
//  b **= a;
//  console.log(b)
//  var fullName = 'Tran Duc Khiem';
//  console.log(fullName)
//  var full = 'Tran Duc KhIem';
//  if(null){ // 0/false/undefined/ ""/NaN
//     console.log('right')
//  }else console.log('sai');
 
//  var myFunction = function() {
//     alert('hi cac ban');
//  }
//  myFunction();

//  var myObject = {
//     name: 'Tran Duc Khiem',
//     age: 18,
//     address: 'Nha Trang'
//  }

//  console.log('myObject',myObject);

//  var myArray = [
//     'ten',
//     'tuoi',
//     'noi o'
//  ]
//  console.log(myArray)

/*
//Làm việc với chuỗi

 var fullName = 'Tran Duc Khiem Khiem Khiem Tran ';

 console.log(fullName.length);
 var firstName = 'Khiem';
 var lastName = 'Tran';
 console.log(`Hi,I am ${firstName} ${lastName}`);

 console.log(fullName.indexOf('Tran',5))
 console.log(fullName.indexOf('Tran'))
 console.log(fullName.lastIndexOf('Khiem'));
 console.log(fullName.search('Khiem')) // tim kiem tu dau tien trong chuoi
 console.log(fullName.slice(0,5)) // dùng để cắt một từ,
 console.log(fullName.slice(21)) //có thể cắt từ một vị trí đến hết chuỗi
 console.log(fullName.replace('Khiem','KHIEM'))//chỉ ghi đè được từ đầu tiên
 console.log(fullName.replace(/Khiem/g,'KHIEM'))// ghi đè hết tất cả các từ
 console.log(fullName.toUpperCase());
 console.log(fullName.toLowerCase())
 var fullName1 = '            Khiem Tran          ';
 console.log(fullName1.trim())//xoa cac khoang trang dau va cuoi chuoi
 console.log(fullName.split()) //chuyển đổi chuỗi thành mảng.
 console.log(fullName.split(''))//cắt từng chữ cái thành các phần tử trong mảng
 console.log(fullName.charAt(2))//lấy một kí tự bỏi một vị trí cho trước
 console.log(fullName[6]) //cách thứ 2 để lấy một kí tự bởi một vị trí cho trước
*/

/*
 //Làm việc với kiểu số trong JS
 var age = 18;
 var result = age*'Khiem'; //nếu thực hiện một phép tính không hợp
 //lệ thì nó sẽ trả về NaN nhưng nó vẫn là kiểu number
 console.log(result);
 console.log(age.toString())//chuyển kiểu số thành String
 var pi = 3.14648842378;
 console.log(pi.toFixed(5))//Làm tròn số (5) là bao nhiêu số muốn làm tròn
 //còn nếu không để gì hết thì nó sẽ làm tròn phần nguyên bỏ phần thập phân
 console.log(typeof pi.toFixed()) //khi sử dụng toFixed cho một số thì no sẽ
 //chuyển thành kiểu String
 */

 /*
 //Làm việc với mảng
 var languages = [
   'JS(JavaScript)',
   'Python',
   'Ruby',
   'Dart',
   10,
   true,
   //Symbol(),
   null,
   undefined,
 ] //có thể lưu được tất các kiểu dữ liệu vào trong một mảng.

 console.log(languages);
 console.log(typeof languages); // KDL của mảng là object
 console.log(Array.isArray(languages)) //cách kiểm tra xem có phải là một mảng không

//truy xuất mảng
console.log(languages.length);//độ dài của  mang
console.log(languages[2]);// lấy một phần tử bởi một chỉ số cho trước.

//làm việc với mảng
console.log(typeof languages.toString()); //chuyển về String và cũng như
//chuyển kiểu dữ liệu về String
console.log(languages.join(' ')); //chuyển một mảng về thành chuỗi
console.log(typeof languages.join());
console.log(languages.pop()); //xoa phan tu cuoi cung trong mang
console.log(languages)
console.log(languages.push('Java'));//them phan tu cuoi cung trong mang
console.log(languages);
console.log(languages.shift());//xoa phan tu dau trong mang
console.log(languages);
console.log(languages.unshift('Study'));//them mot phan tu vao dau mang
console.log(languages);
console.log(languages.splice(1,3)); //xoa phan tu trong mang 
//(1) là chỉ số bắt đầu để xóa, (3) số lượng muốn xóa.
console.log(languages.splice(1,0,'Angola'));
console.log(languages); // chèn một phần tử vào trong mảng.

var languages1 =['learning']
console.log(languages.concat(languages1)); //nối mảng

console.log(languages.slice(1,4))//Cắt một phần tử trong mảng.
//(1) là vị trí bắt đầu phần tử muốn cắt, (4) là vị trí kết thúc
console.log(languages.slice(1));
*/

/*
//function
function showMassage() {
   alert('hello anh em ')
}

showMassage();

function cong(a,b) {
   return a+b;
}

console.log(cong(2,5));
var result = cong(2,5);
console.log(result);
function showMassage() {
   function showMassage2() {
      console.log('hello anh em');
   }
}

console.log(showMassage());

//kieu declaration function
function showMassage() {

}

//kieu Expression function
var showMassage2 = function() {

}

setTimeout(function() {

}) ;

var myObject = {
   muFunction : function() {

   }
}

var myInfo = {
   name: 'Khiem Tran',
   age: 18,
   address: 'Nha Trang',
   getName: function() {
      return this.name;
   }
}

myInfo.email = 'khiemtran015@gmail.com'; // them 1 key hoac 1 value moi vao Object

console.log(myInfo);
console.log(myInfo.name);// cách lấy ra một key trong Object
console.log(myInfo['name']);//cách 2
//nếu nhập sai key thì no sẽ trả về undefined
var myKey = 'address';
console.log(myInfo[myKey]); // lay value của một key khi mình tạo thêm một biến

// delete myInfo.name;//xoa mot key
// console.log(myInfo)

console.log(myInfo.getName()) //lay value cua mot key
*/

/*
//Object constructor in JS: xây dựng đối tượng trong JS

function User(firstName,lastName,avatar) {
   this.firstName = firstName,
   this.lastName = lastName,
   this.avatar = avatar
}

var author = new User('Khiem','Tran','Avatar');
var user = new User('Khoa','Tran','Avatar');

console.log(author);
console.log(user);

console.log(author.constructor === User) //kiểm tra xem một
//đối tượng có trong object constructor hay không.
//xem lại cách thêm các phương thức khác sau Object constructor
*/

// var date = new Date();

// console.log(date);
// console.log(typeof date)


/*
//switch - case

var date = 6;
switch(date) {
   case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      console.log("thang co 31 ngay");
      break;
   case 4: case 6: case 9: case 11:
      console.log('thang co 30 ngay');
      break;
   case 2:
      console.log('thang co 29 ngay');
      break;
   default:
      console.log('du lieu khong hop le');
}

//toan tu 3 ngoi
function min(a,b){
   return a<b ? a : b;
}
console.log(min(0,1))

function max(a,b){
   return a>b ? a: b;
}
console.log(max(3,5));

var myArray = [
   'JavaScript',
   'Ruby',
   'Java',
   'Python'
]

var arrayLength = myArray.length;
for(var i = 0 ; i<arrayLength;i++){
   console.log(myArray[i]);
}

var myInfo = {
   name: 'Khiemtran',
   age: 18
}
for(var bien in myInfo){
   console.log(myInfo[bien])
}
for(var value1 of Object.keys(myInfo)){
   console.log(myInfo[value1]);
}

var languages = [
   'JavaScript',
   'Python',
   'Dart'
]

for(var bien1 in languages){
   console.log(languages[bien1])
}

for(var value1 of languages){
   console.log(value1);
}

var myString = 'KhiemTran';
for(var bien2 in myString){
   console.log(myString[bien2]) //nó sẽ lấy từng kí tự trong chuỗi
}
for(var value of myString) {
   console.log(value);
}

//while loop
var i = 0;

while(i<100){
   i++;
   console.log(i)
}

var myArray = [
   'khiem',
   'tran'
]

var i = 0;
while(i<myArray.length) {
   console.log(myArray[i]);
   i++;
}

var i = 0;
do {
   i++;
   console.log(i);
}while(i>100); // luon luon thuc hien code 1 lan

var myArray = [
   [1,2],
   [3,4],
]

//for long nhau
for(var i = 0;i<myArray.length;i++){
   for(var j=0;j<myArray[i].length;j++){
      console.log(myArray[i][j]);
   }
}
*/
var courses = [
   {
      id: 1,
      name: 'JavaScript',
      coin: 250
   },
   {
      id: 2,
      name: 'Ruby',
      coin: 0
   },
   {
      id: 3,
      name: 'ReactJS',
      coin: 0
   },
   {
      id: 1,
      name: 'Python',
      coin: 300
   },
];

courses.forEach(function(course) {
   console.log(course) //dạng như là no sẽ duyệt qua các pt của mảng để thực hiện các câu lệnh
})

isFree = courses.every(function(course) {
    return course.coin === 0; //duyệt qua các phần từ của mảng nếu bằng nhau hết thì trả về
    //true còn ngược lại thì trả về false
})
console.log(isFree);

isFree = courses.some(function(course) {
   return course.coin === 0; //chỉ đúng 1 các thí nó sẽ trả về true
})
console.log(isFree);

var check = courses.find(function(nickname) {
   return nickname.name === 'Python' //tim kiếm pt chứa thuộc tính 'python'
});

console.log(check)
var check = courses.filter(function(nickname) {
   return nickname.coin === 0; //liệt kê một danh sách các phần tử.
});

console.log(check);