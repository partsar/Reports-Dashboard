cube('Retailers', {
    sql: `SELECT * FROM retailers`,
    
    joins:{
      Products:{
        relationship: `hasOne`,
        sql: `${CUBE}.company = ${Retailers}.company`
      }
    },

    measures: {
      countTotalDocs: { 
        sql: '_id', 
        type: 'count'
      } 
    },
    dimensions: {
      id:{ 
        sql:'_id',
        type:'string', 
        primaryKey: true,
        shown:true
      },
      retailername:{
        sql:'retailername',
        type:'string'
      },
      brand:{
        sql:'brand',
        type:'string'
      }
    }
  });
  