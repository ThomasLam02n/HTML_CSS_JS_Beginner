Array.prototype.every2 = function(callBack) {
    var output = true;
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callBack(this[index], index, this);
            if(!result) {
                output = false;
                break;
            }
        }
    }

    return output;
};

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true
    },
    {
        name: 'Javascript',
        coin: 980,
        isFinish: true
    }
];


var result = courses.every2(function(courses, index, array){
    return courses.isFinish;
});

console.log(result);

