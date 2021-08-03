module.exports = (sequelize, type) => {
    return sequelize.define('tailor', {
        tailorId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tailorName: type.STRING,
        tailorPhone : type.INTEGER
    })
}