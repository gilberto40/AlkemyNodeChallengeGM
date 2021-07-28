function TransactionService(transactionManager) {

    this.transactions = transactionManager;
    
    function add(transaction) {
        await this.transactions.add(transaction);
    }

    function getAll() {
        return await this.transactions.getAll();
    }

    function getById(id) {
        return await this.transactions.getById(id);
    }

    function deleteById(id) {
        return await this.transactions.deleteById(id);
    }

    function updateById(transaction) {
        return await this.transactions.updateById(transaction);
    }
}

export default TransactionService;