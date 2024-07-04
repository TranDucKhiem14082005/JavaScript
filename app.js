
//4. Fetch :
//  - JSON server: API Server (Fake) / Mock API 
//  - CRUD
//        - Create: Tạo mới -> POST
//        - Read: Lấy dữ liệu -> GET
//        - Update: Chỉnh sửa -> PUT / PATCH
//        - Delete: Xóa ->DELETE
//  - Postman

// JSON server
// var courseApi = 'http://localhost:3000/courses';

// fetch(courseApi)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(courses){
//         console.log(courses);
//     })


// Postman: them/sua/xoa



var courseApi = 'http://localhost:3000/courses';

function start(){
    getCourses(renderCourses);
};



start();


//Function

function getCourses(callback) {
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}


function renderCourses(courses) {
    var listCoursesBlock = 
        document.querySelector('#list-courses');

    var htmls = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
        `
    });

    listCoursesBlock.innerHTML = htmls.join('');

}