
const config = require('./config.json');
const Dropbox = require('dropbox').Dropbox;
const fetch = require('isomorphic-fetch');
const dbx = new Dropbox({ accessToken: config.DROPBOX_ACCESS_TOKEN, fetch: fetch });


exports.addFileMember = function(fileId, userEmail) {
    return new Promise(async(resolve, reject) => {
        const memberSelector = {
            'email': userEmail,
            '.tag': 'email'
        };
        try {
            const fileMember = await dbx.sharingAddFileMember({
                'file': fileId,
                'members': [memberSelector],
                'custom_message': "You have been invited to my file"
            });
            resolve(fileMember);
        } catch(err) {
            reject(err);
        }
    })
}