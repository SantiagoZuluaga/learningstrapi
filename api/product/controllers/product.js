'use strict';
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        try {
            const body = ctx.request.body

            const user = await strapi.query("connection").find({ userID: body.userID });
            if (user.length > 0 && user[0].socketID != null) {
                strapi.io.to(user[0].socketID).emit('message', "Product created successfully");
            }

            const entity = await strapi.query("product").create(body);
            return sanitizeEntity(entity, { model: strapi.models.product });
        } catch (error) {
            console.log(error);
        }
    }
};
