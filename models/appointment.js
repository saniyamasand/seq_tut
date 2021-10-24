module.exports = (sequelize, type) => {
    return sequelize.define('appt', {
        apptId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        apptDate : type.STRING,
        apptTime : type.STRING,
        orderCustomer:type.STRING,
        orderDescription:type.STRING,
    })
}

//customerId: type.INTEGER,