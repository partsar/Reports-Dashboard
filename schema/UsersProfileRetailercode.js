cube(`UsersProfileRetailercode`, {
  sql: `SELECT * FROM users_profile_retailercode`,
  
  joins: {
    Users: {
      relationship: `belongsTo`,
      sql: `${CUBE}._id = ${Users}._id`    
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    id:{
      sql: `_id`,
      type: `string`,
      primaryKey: true
    },
    profileRetailercode: {
      sql: `${CUBE}.\`profile.retailercode\``,
      type: `string`,
      title: ` `
    }
  }
});
