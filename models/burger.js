
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("burger",
        {
            burger_name: { type: DataTypes.STRING },
            devoured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
        });



    return User;
}