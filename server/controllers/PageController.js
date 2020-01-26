const PageService = require('../services/PageService');

exports.createPage = (req, res) => {
    PageService.createPage({
        token: req.session.token,
        pagename: req.body.pagename,
        completiontime: req.body.completiontime,
        labname:req.body.labname
    }).then((id) => {
        req.session.page = id;
        res.sendStatus(200);
    });
};
