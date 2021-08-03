module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        customerId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerName: type.STRING,
        customerPhone : type.INTEGER,
        customerAddress: type.STRING,
        customerMeasurements : type.STRING
    })
}