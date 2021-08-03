module.exports = (sequelize, type) => {
    return sequelize.define('appointment', {
        appoinmentId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerId: type.INTEGER,
        appointmentDate : type.STRING
    })
}