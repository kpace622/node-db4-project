const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate',
    ignoreTables: ['knex-_migrations', 'knex_migration_lock']
  });
};