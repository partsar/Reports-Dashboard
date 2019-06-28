cube(`UsersProfileBrandtag`, {
  sql: `SELECT * FROM users_profile_brandtag`,
  
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
    profileBrandtag: {
      sql: `${CUBE}.\`profile.brandtag\``,
      type: `string`,
      title: ` `
    }
  }
});
