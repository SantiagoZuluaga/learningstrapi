'use strict';
const {
    findSocketConnection,
    createSocketConnection,
    disconnectSocketConnection,
    connectSocketConnection
} = require('./socket');

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = async () => {
    var io = require('socket.io')(strapi.server);

    io.on('connection', async (socket) => {
        const socketID = socket.id;
        console.log(socketID);
        socket.on("disconnect", async () => {
            try {
                await disconnectSocketConnection(socketID);
            } catch (error) {
                console.log(error);
            }

        });

        socket.on("join", async (data) => {
            const userID = data.userID;
            try {
                const userExists = await findSocketConnection(userID);
                if (userExists.length > 0) {
                    await connectSocketConnection(userID, socketID);
                } else {
                    await createSocketConnection(userID, socketID);
                }
            } catch (error) {
                console.log(error);
            }
        });
    });

    strapi.io = io;
};

