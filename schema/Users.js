cube(`Users`, {
  sql: `SELECT * FROM users`,

  measures: {
    count: {
      type: `count`,
      sql: `_id`
    }
  },

  dimensions: {
    id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
      shown: true
    },
    brand: {
      sql: `${CUBE}.\`profile.brand\``,
      type: `string`,
    },

    profileSuperviserId: {
      sql: `${CUBE}.\`profile.superviserid\``,
      type: `string`,
    },

    profileCompany: {
      sql: `${CUBE}.\`profile.company\``,
      type: `string`,
    },

    profileName: {
      sql: `${CUBE}.\`profile.name\``,
      type: `string`,
    },

    phoneNumber: {
      sql: `${CUBE}.\`profile.phonenumber\``,
      type: `string`,
      },

    profileRole: {
      sql: `${CUBE}.\`profile.role\``,
      type: `string`
    }
  }
});
