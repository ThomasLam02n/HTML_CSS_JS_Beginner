var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 255
    },
    {
        id: 2,
        name: 'CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'HTML',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 255
    }
]

var newCourses = courses.map(function(course, index, originalArray){
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        index: index,
        originalArray: originalArray
    };
});

console.log(newCourses);

