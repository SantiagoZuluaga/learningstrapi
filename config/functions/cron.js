'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  '0 59 23 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task:  async () => {
      try {
        const date = new Date();
          const day = date.getDate();
          const month = date.getMonth();
          const year = date.getFullYear();
          const initDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}T00:00:00.000Z`
          const finalDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}T23:59:00.000Z`
        const response = await strapi
          .query('product')
          .find({
            created_at_gte: '2021-06-11T03:14:02.658Z',
            created_at_lte: '2021-06-11T03:14:39.886Z'
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
    task:  async () => {
      console.log("PRODUCTO DE LAS 12 A.M")
      try {
        try {
          const entity = await strapi.services.product.create({
            title: "PRODUCTO DE LAS 12 A.M",
            description: "PRODUCTO",
            price: 200,
            quiantity: 20,
          })
          return sanitizeEntity(entity, { model: strapi.models.product });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  '0 0 3 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task:  async () => {
      console.log("PRODUCTO DE LAS 3 A.M")
      try {
        try {
          const entity = await strapi.services.product.create({
            title: "PRODUCTO DE LAS 3 A.M",
            description: "PRODUCTO",
            price: 200,
            quiantity: 20,
          })
          return sanitizeEntity(entity, { model: strapi.models.product });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  '0 0 6 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task:  async () => {
      console.log("PRODUCTO DE LAS 6 A.M")
      try {
        try {
          const entity = await strapi.services.product.create({
            title: "PRODUCTO DE LAS 6 A.M",
            description: "PRODUCTO",
            price: 200,
            quiantity: 20,
          })
          return sanitizeEntity(entity, { model: strapi.models.product });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  '0 0 9 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task:  async () => {
      console.log("PRODUCTO DE LAS 9 A.M")
      try {
        try {
          const entity = await strapi.services.product.create({
            title: "PRODUCTO DE LAS 9 A.M",
            description: "PRODUCTO",
            price: 200,
            quiantity: 20,
          })
          return sanitizeEntity(entity, { model: strapi.models.product });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  '0 0 12 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task:  async () => {
      console.log("PRODUCTO DE LAS 12 P.M")
      try {
        try {
          const entity = await strapi.services.product.create({
            title: "PRODUCTO DE LAS 12 P.M",
            description: "PRODUCTO",
            price: 200,
            quiantity: 20,
          })
          return sanitizeEntity(entity, { model: strapi.models.product });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  '0 0 15 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task:  async () => {
      console.log("PRODUCTO DE LAS 3 P.M")
      try {
        try {
          const entity = await strapi.services.product.create({
            title: "PRODUCTO DE LAS 3 P.M",
            description: "PRODUCTO",
            price: 200,
            quiantity: 20,
          })
          return sanitizeEntity(entity, { model: strapi.models.product });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  '0 0 18 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task:  async () => {
      console.log("PRODUCTO DE LAS 6 P.M")
      try {
        try {
          const entity = await strapi.services.product.create({
            title: "PRODUCTO DE LAS 6 P.M",
            description: "PRODUCTO",
            price: 200,
            quiantity: 20,
          })
          return sanitizeEntity(entity, { model: strapi.models.product });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  '0 0 21 * * *': {
    options: {
      tz: "America/Bogota"
    },
    task:  async () => {
      console.log("PRODUCTO DE LAS 9 P.M")
      try {
        try {
          const entity = await strapi.services.product.create({
            title: "PRODUCTO DE LAS 9 P.M",
            description: "PRODUCTO",
            price: 200,
            quiantity: 20,
          })
          return sanitizeEntity(entity, { model: strapi.models.product });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
};
