module.exports = {
  HOST: '159.69.127.82',
  USER: 'sima',
  PASSWORD: 'pass',
  DB: 'triebwerk_schema',
  dialect: 'mysql',
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}