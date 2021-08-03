module.exports = (sequelize, type) => {
    return sequelize.define('transaction', {
        transactionId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerId: type.INTEGER,
        transactionAmount: type.INTEGER,
        transactionDate : type.STRING
    })
}