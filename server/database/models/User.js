module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		'user',
		{
			userid: {
				type: DataTypes.INTEGER,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			firstname: { type: DataTypes.TEXT },
			nickname: { type: DataTypes.TEXT },
			admin: { type: DataTypes.BOOLEAN, defaultValue: false }
		},
		{ tableName: 'users' }
	);

	return user;
};
