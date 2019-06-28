cube(`UsersEmails`, {
  sql: `SELECT * FROM users_emails`,
  
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
    emailsAddress: {
      sql: `${CUBE}.\`emails.address\``,
      type: `string`,
      title: `Address`
    }
  }
});
