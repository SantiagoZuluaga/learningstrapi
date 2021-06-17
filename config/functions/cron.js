'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  '0 24 9 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      console.log("FACTURA NUEVA")
      try {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const response = await strapi
          .query('product')
          .find({
            created_at_gte: new Date(year, month, day, 0, 0, 0),
            created_at_lte: new Date(year, month, day, 23, 59, 0),
          });

        var totalPrice = 0;
        var products = [];
        for (let i = 0; i < response.length; i++) {
          totalPrice = totalPrice + response[i].price;
          products.push(response[i].id);
        }

        const entity = await strapi.services.payout.create({
          title: `PAYOUT: ${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`,
          total: totalPrice,
          products
        })
        return sanitizeEntity(entity, { model: strapi.models.payout });
      } catch (error) {
        console.log(error);
      }
    }
  },
  '*/2 * * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      try {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const entity = await strapi.services.product.create({
          title: `PRODUCTO NUEVO: ${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`,
          description: "PRODUCTO",
          price: Math.floor(Math.random() * 301),
          quantity: Math.floor(Math.random() * 21),
        })
        return sanitizeEntity(entity, { model: strapi.models.product });
      } catch (error) {
        console.log(error);
      }
    }
  },
};

/*


*/