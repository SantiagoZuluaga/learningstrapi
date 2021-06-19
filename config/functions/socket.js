const { sanitizeEntity } = require("strapi-utils");

const findSocketConnection = async (userID) => {
    try {
        const userExists = await strapi.query("connection").find({ userID: userID });
        return userExists;
    } catch (err) {
        console.log("error while fetching", err);
    }
}

const createSocketConnection = async (userID, socketID) => {
    try {
        const user = await strapi.query("connection").create({
            userID: userID,
            socketID: socketID,
            isConnected: true
        });
        sanitizeEntity(user, { model: strapi.models.connection });
    }
    catch (err) {
        console.log(err);
    }
}

const disconnectSocketConnection = async (socketID) => {
    try {
        await strapi.query("connection").update({ socketID: socketID }, { socketID: null, isConnected: false });
    } catch (err) {
        console.log("error while fetching", err);
    }
}

const connectSocketConnection = async (userID, socketID) => {
    try {
        await strapi.query("connection").update({ userID: userID }, { socketID: socketID, isConnected: true });
    } catch (err) {
        console.log("error while fetching", err);
    }
}

module.exports = {
    findSocketConnection,
    createSocketConnection,
    disconnectSocketConnection,
    connectSocketConnection
}