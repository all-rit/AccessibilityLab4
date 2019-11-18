const db = require('../database');

const createLogin = (userid, usersessionid) => {
	return db.login.create({
		userid: userid,
		usersessionid: usersessionid
	});
};

exports.authenticate = (data) => {
	const usersessionid = data.id;
	const firstname = data.name.givenName;

	return db.session
		.findByPk(usersessionid)
		.then((session) => {
			// Session doesn't exist, so let's create a new account!
			if (session === null) {
				throw new Error('Session do not exist in the database');
			}

			return session;
		})
		.catch(() => {
			// Create a new account
			return db.user
				.create({
					firstname: firstname
				})
				.then((user) => {
					// Create a new session
					return db.session.create({
						usersessionid: usersessionid,
						userid: user.userid
					});
				});
		})
		.then((session) => {
			// Create a new login
			return createLogin(session.userid, usersessionid).then((login) => {
				return login.usersessionid;
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getSession = (token) => {
	// If the token doesn't exist, it's a guest, so create a new account!
	if (!token) {
		return db.user
			.create({})
			.then((user) => {
				return db.session
					.create({
						userid: user.userid
					})
					.then((session) => {
						return { user, session };
					});
			})
			.then((data) => {
				return createLogin(data.session.userid, data.session.usersessionid).then((login) => {
					return { user: data.user, token: login.usersessionid };
				});
			});
	}

	// Find the user's details
	return db.session
		.findByPk(token)
		.then((session) => {
			return db.user.findByPk(session.userid).then((user) => {
				return { user, token };
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
