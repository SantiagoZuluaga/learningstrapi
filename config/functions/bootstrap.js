'use strict';

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
    var io = require('socket.io')(strapi.server, {
        cors: {
            origin: "http://127.0.0.1:5500",
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    io.on('connection', async (socket) => {
        console.log(socket.id);
        socket.send(`welcome user: ${socket.id}`);
        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });

    strapi.io = io;
};

