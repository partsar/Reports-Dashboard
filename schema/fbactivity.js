cube(`Fbactivity`, {
  sql: `SELECT * FROM fbactivity`,
  
  joins:{
    Retailers:{
      relationship: `hasOne`,
      sql: `${CUBE}.retailercode = ${Retailers}.retailercode
      AND ${CUBE}.company = ${Retailers}.company`
    },
    Products:{
      relationship: `hasOne`,
      sql: `${CUBE}.barcode = ${Products}.barcode
      AND ${CUBE}.company = ${Products}.company`
    }
  }, 

  measures: { 
    countTotalDocs: {
      sql : '_id',
      type: `count` 
    }, 
    totalQuantity: {
      sql: `quantity`,
      type: `sum`,
      title: 'Total Quantity'
    },
    totalValue:{
      sql : `${CUBE}.quantity * ${Products}.mrp`,
      type : 'number'
    }
  },
  
  dimensions: {
    id:{
      sql:'_id',
      type:'string',
      primaryKey: true,
      shown:true
    },
    orderId:{
      sql:'orderid',
      type:'string'
    },
    barcode: {
      sql: `barcode`,
      type: `string`
    },
    brand: {
      sql: `brand`,
      type: `string`
    },
    company: {
      sql: `company`,
      type: `string`
    },
    retailercode:{
      sql:'retailercode',
      type:'string'
    },
    quantity:{
      sql:'quantity',
      type: 'number'
    },
    timestamp:{
      sql: 'timestamp',
      type: 'time'
    }
  }
});
