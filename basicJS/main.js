// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 255
//     },
//     {
//         id: 2,
//         name: 'CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'HTML',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 255
//     }
// ]

// Flat - Làm phẳng mảng trong depth Array (mảng sâu) !
var depthArray = [1, 2 ,[3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutPut, numberInArray){
    return flatOutPut.concat(numberInArray);
}, []);

// console.log(flatArray);

var topics = [
    {
        topic: 'Front End',
        courses: [
            {
                id: 1,
                title: 'HTML-CSS'
            },
            {
                id: 2,
                title: 'JavaScript'
            }
        ]
    },
    {
        topic: 'Back End',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'MySQL'
            }
        ]
    }
]

var newCourse = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses);
}, []);

// console.log(newCourse);


var htmls = newCourse.map(function(courses){
    return `
        <div>
            <h2>${courses.title}</h2>
            <h2>ID: ${courses.id}</h2>
        </div>
    `;
}); 

console.log(htmls.join(''));