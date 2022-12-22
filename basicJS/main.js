Array.prototype.forEach2 = function(callBack){
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            console.log(this[index], index, this);
        }
    }
}

var courses = [
    'JavaScript',
    'PHP',
    'Ruby'
];

courses.forEach2(function(course, index, array){
    console.log(course, index, array);
});


