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

//Đối tượng Date
var date = Date();