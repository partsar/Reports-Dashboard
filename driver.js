const MsSQLDriver = require("@cubejs-backend/mssql-driver");
const MongoBIDriver = require('@cubejs-backend/mongobi-driver');

new CubejsServer({
  contextToAppId: ({ authInfo }) => `CUBEJS_APP_${authInfo.appId}_${authInfo.userId}`,
  dbType: ({ authInfo }) => {
    if (authInfo.appId === 3) {
      return 'mongobi';
    } else {
      return 'mssql';
    }
  },
  driverFactory: ({ authInfo }) => {
    if (authInfo.appId === 3) {
      return new MongoBIDriver({
        database: `my_app_${authInfo.appId}_${authInfo.userId}`,
        port: 3307
      })
    } else {
      return new MsSQLDriver({
        database: `my_app_${authInfo.appId}_${authInfo.userId}`
      })
    }
  }
});