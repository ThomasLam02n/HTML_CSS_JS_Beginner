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


var coinOfCoure = courses.filter(function(course, index){
    return course.coin === 200;
});

console.log(coinOfCoure);

