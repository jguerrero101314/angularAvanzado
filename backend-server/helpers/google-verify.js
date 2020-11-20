const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_ID);

let token;
const googleVerify = async(token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_ID,
    });


    const payload = ticket.getPayload();
    const { name, email, picture } = payload;

    return { name, email, picture };
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
}
googleVerify(token).catch(console.error);

module.exports = {
    googleVerify
};