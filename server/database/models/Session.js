module.exports = (sequelize, DataTypes) => {
	const Session = sequelize.define(
		'session',
		{
			usersessionid : {
				type: DataTypes.NUMBER(21),
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			userid: {
				type: DataTypes.INTEGER
			}
		},
		{ tableName: 'session' }
	);

	return Session;
};
