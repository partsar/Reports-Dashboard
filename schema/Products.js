cube('Products', {
    sql: `SELECT * FROM products`,
    
    measures: {
      countTotalDocs: { 
        sql: '_id', 
        type: 'count'
      }
    },

    segments:{
      companyGde:{
        sql: `${CUBE}.company = 'GDE'`
      },
      brandPawan:{
        sql: `${CUBE}.brand = 'Pawan'`
      },
    },
    
    dimensions: {
      id:{
        sql:'_id',
        type:'string',
        primaryKey: true,
        shown:true
      },
      mrp:{
        sql:'mrp',
        type:'number',
        
      },
      brand:{
        sql:'brand',
        type:'string'
      },
      category:{
        sql:'category',
        type:'string'
      },
      option:{
        sql:'option',
        type:'string'
      },
      size:{
        sql:'size',
        type:'string'
      },
      stylename:{
        sql:'stylename',
        type:'string'
      }
    }
  });
  