function UserManager() {    

    this.users = []; 

    function add(user) {
        this.users.push(user)
    }

    function getAll() {
        return this.users
    }

    function getById(id) {
        return this.users.find((user) => user.id == id)
    }

    function deleteById(id) {
        const userIndex = this.users.findIndex(u => u.id == id);

        if (userIndex == -1) {
           return false;
        } 

        this.users.splice(userIndex, 1);
        return true;
    }
      
    function updateById(user) {

        const userIndex = this.users.findIndex(u => u.id ==  user.id);

        if (userIndex == -1) {
           return false;
        } 

        this.users.splice(userIndex, 1, user);
        return true;
    }

    function close() {
        return console.log('closing user manager cache')
    }
}

export default UserManager;