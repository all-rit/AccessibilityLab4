/* eslint-disable import/no-anonymous-default-export */
import API from './API';

const endpoints = {
    CREATE_PAGE: '/page/complete'
};
const labname ="Lab4";

export default {
    createPage: (pagename, completiontime) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_PAGE, {
            pagename,
            completiontime,
            labname
        });
    },
}
