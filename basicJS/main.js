function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

User.prototype.email = 'GDU@gmail.com'
User.prototype.getName = function() {
    return `${this.firstName} ${this.lastName}`;
}

var author = new User('Tai', 'Lam', 'Avatar LVTT');
var user = new User('Phong', 'Truong', 'Avatar THP');

console.log(author.getName());
console.log(user.getName());



