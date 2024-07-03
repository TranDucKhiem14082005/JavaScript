
//main.js:dong 1388
// Promise example

var users =[
    {
       id: 1,
       name: 'Kien Dam',
    },
    {
       id: 2,
       name: 'Khiem Tran',
    },
    {
       id: 3,
       name: 'Hi nhi nhanh',
    }
 ];
 
 var comments = [
    {
       id: 1,
       user_id: 1,
       content: 'Anh Khiem chua ra video:(',
    },
    {
       id: 2,
       user_id: 2,
       content: 'Vua ra xong em oi!',
    },
    {
       id: 3,
       user_id: 1,
       content: 'Cam on anh',
    },
 ];
 
 //1. Lay comments
 //2. Tu comments lay ra user_id
 //3. Tu user_id lay ra user tuong ung
 
 //Fake API
 
 //1. Array
 //2. function, callback
 //3. Promise
 //4. DOM
 
 function getComments() {
    return new Promise(function(resolve) {
       setTimeout(function() {
          resolve(comments)
       },1000);
    });
 }
 
 function getUsersByIds(userIds){
    return new Promise(function(resolve){
       var result = users.filter(function(user){
          return userIds.includes(user.id);
       });
 
       setTimeout(function() {
          resolve(result)
       },1000);
 
    });
 }
 
 //Promise hell
 getComments()
    .then(function(comments){  
       var userIds = comments.map(function(comment) {
          return comment.user_id;
       });
          return getUsersByIds(userIds)
             .then(function(users){
                   return {
                      users: users,
                      comments: comments,
                   };
             });
    })
 
    .then(function(data){
 
       var commentBlock = document.getElementById('comment-block');
 
       var html = '';
       data.comments.forEach(function(comment){
          var user = data.users.find(function(user){
             return user.id === comment.user_id;
          });
          html += `<li>${user.name}: ${comment.content}</li>`;
       });
 
       commentBlock.innerHTML = html;
 
    });
 