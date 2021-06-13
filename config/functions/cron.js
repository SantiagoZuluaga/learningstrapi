'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  '0 59 23 * * *': {
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
        for (let i = 0; i < response.length; i++) {
          totalPrice = totalPrice + response[i].price;
        }

        const entity = await strapi.services.payout.create({
          title: `PAYOUT: ${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`,
          total: totalPrice
        })
        return sanitizeEntity(entity, { model: strapi.models.payout });
      } catch (error) {
        console.log(error);
      }
    }
  },
  '0 0 0 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      try {
        const entity = await strapi.services.product.create({
          title: "PRODUCTO NUEVO",
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
  '0 0 3 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      try {
        const entity = await strapi.services.product.create({
          title: "PRODUCTO NUEVO",
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
  '0 0 6 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      try {
        const entity = await strapi.services.product.create({
          title: "PRODUCTO NUEVO",
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
  '0 0 9 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      try {
        const entity = await strapi.services.product.create({
          title: "PRODUCTO NUEVO",
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
  '0 0 12 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      try {
        const entity = await strapi.services.product.create({
          title: "PRODUCTO NUEVO",
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
  '0 0 15 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      try {
        const entity = await strapi.services.product.create({
          title: "PRODUCTO NUEVO",
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
  '0 0 18 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      try {
        const entity = await strapi.services.product.create({
          title: "PRODUCTO NUEVO",
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
  '0 0 21 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task: async () => {
      try {
        const entity = await strapi.services.product.create({
          title: "PRODUCTO NUEVO",
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
