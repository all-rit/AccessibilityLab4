const db = require('../database');

exports.createPage = (data) => {
	return db.Login
		.findAll({ limit: 1, where: { usersessionid: data.token }, order: [ [ 'loginid', 'DESC' ] ] })
		.then((logins) => {
			return logins[0];
		})
		.then((login) => {
			return db.Page.create({
				loginid: login.loginid,
				pagename: data.pagename,
				completiontime: data.completiontime
			});
		})
		.then((page) => {
			return page.pageid;
		})
		.catch((err) => {
			console.log(err);
		});
}
