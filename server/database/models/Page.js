module.exports = (sequelize, DataTypes) => {
    const Page = sequelize.define(
        'page',
        {
            pageid: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            loginid: {
                type: DataTypes.INTEGER
            },
            pagename: { type: DataTypes.TEXT },
            completiontime: { type: DataTypes.INTEGER },
        },
        { tableName: 'page' }
    );

    return Page;
};
