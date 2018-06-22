[{
    id: ''
}]


//adduser(id, name, room)

//remove user

//getUser()
//getUserList

class Users{
    constructor(){
        this.users = []; 
    }
    addUser(id, name, room){
        var user = {id, name, room}; 
        this.users.push(user); 
        return user;
    }
    removeUser (id) {
        //return user that was removed
        var user = this.users.filter((id) => user.id == id[0]); 
        
        if (user) {
            this.users = this.users.filter((user) => user.id != id); 
        }
        
    }
    getUser (id){
        return this.users.filter((id) => user.id == id[0]); 
    }
    getUserList (room){
        var users = this.users.filter((user) => user.room === room); 
        var namesArray = users.map((user) => user.name);

        return namesArray; 
        
    }
}
// class Person{
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription(){
//         return `${this.name} is ${this.age} years old`; 
//     }
// }

module.exports = {Users}; 