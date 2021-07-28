function UserService(UserManager) {

    this.users = UserManager;
    
    function add(transaction) {
        await this.users.add(transaction);
    }

    function getAll() {
        return await this.users.getAll();
    }

    function getById(id) {
        return await this.users.getById(id);
    }

    function deleteById(id) {
        return await this.users.deleteById(id);
    }

    function updateById(transaction) {
        return await this.users.updateById(transaction);
    }
}

export default UserService;