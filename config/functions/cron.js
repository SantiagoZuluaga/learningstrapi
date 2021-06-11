'use strict';
const request = require("request-promise");

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  '*/5 * * * * *': async () => {
    try {
      /* const response = (
        await strapi
          .query("product")
          .find()).filter(
            product => product.created_at <= Date.parse("2021-06-11T03:14:39.886Z")
          );
      console.log(response) */
      const response = await strapi
        .query('product')
        .find({
          created_at_gte: '2021-06-11T03:14:02.658Z',
          created_at_lte: '2021-06-11T03:14:39.886Z'
        });
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }
};
