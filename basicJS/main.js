Array.prototype.find2 = function(callBack){
    
}

var courses = [
    'javascript',
    'PHP',
    'Ruby'
];

var htmls = courses.find2(function(course){
    return course.includes('PHP');
});

// var myCourse = courses.find(function(course, index){
//     return course.includes('PHP');
// });

// console.log(myCourse);