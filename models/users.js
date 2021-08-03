module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        userId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: type.STRING,
        userPassword : type.STRING,
        EmailId : type.STRING

    })
}