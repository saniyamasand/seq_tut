module.exports = (sequelize, type) => {
    return sequelize.define('transaction', {
        transactionId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerNAME: type.STRING,
        transactionAmount: type.INTEGER,
        transactionDate : type.STRING
    })
}