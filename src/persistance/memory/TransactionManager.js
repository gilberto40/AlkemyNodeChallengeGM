function TransactionManager() {    

    this.transactions = []; 

    function add(transaction) {
        this.transactions.push(transaction)
    }

    function getAll() {
        return this.transactions
    }

    function getById(id) {
        return this.transactions.find((transaction) => transaction.id == id)
    }

    function deleteById(id) {
        const transactionIndex = this.transactions.findIndex(u => u.id == id);

        if (transactionIndex == -1) {
           return false;
        } 

        this.transactions.splice(transactionIndex, 1);
        return true;
    }
      
    function updateById(transaction) {

        const transactionIndex = this.transactions.findIndex(u => u.id ==  transaction.id);

        if (transactionIndex == -1) {
           return false;
        } 

        this.transactions.splice(transactionIndex, 1, transaction);
        return true;
    }

    function close() {
        return console.log('closing transaction manager cache')
    }
}

export default TransactionManager;