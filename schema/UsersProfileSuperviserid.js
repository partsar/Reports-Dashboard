cube(`UsersProfileSuperviserid`, {
  sql: `SELECT * FROM users_profile_superviserid`,
  
  joins: {
    Users: {
      relationship: `belongsTo`,
      sql: `${CUBE}._id = ${Users}._id`    
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [profileSuperviserid]
    }
  },
  
  dimensions: {
    id:{
      sql: `_id`,
      type: `string`,
      primaryKey: true
    },
    profileSuperviserid: {
      sql: `${CUBE}.\`profile.superviserid\``,
      type: `string`,
      title: ` `
    }
  }
});
