# Reports-Dashboard
A CubeJS Implementation for Data Analytics

To Use:
First clone the repository to your local storage
=============
    `git clone https://github.com/powerfist01/Reports-Dashboard.git`
----------------------------------------------------
Run the command 
====================================
    `npm install`
------------------------------------
And then:
===========================
    `npm run dev`
----------------------------------
It will run locally at localhost:4000

[Website](https://cube.dev) • [Docs](https://cube.dev/docs) • [Blog](https://cube.dev/blog) • [Slack](https://cubejs-community.herokuapp.com) • [Twitter](https://twitter.com/thecubejs)

__Cube.js is an open source modular framework to build analytical web applications__. It is primarily used to build internal business intelligence tools or to add customer-facing analytics to an existing application.

Cube.js was designed to work with Serverless Query Engines like AWS Athena and Google BigQuery. Multi-stage querying approach makes it suitable for handling trillions of data points. Most modern RDBMS work with Cube.js as well and can be tuned for adequate performance.


## Why Cube.js?

If you are building your own business intelligence tool or customer-facing analytics most probably you'll face following problems:

1. __Performance.__ Most of effort time in modern analytics software development is spent to provide adequate time to insight. In the world where every company data is a big data writing just SQL query to get insight isn't enough anymore.
2. __SQL code organization.__ Modelling even a dozen of metrics with a dozen of dimensions using pure SQL queries sooner or later becomes a maintenance nightmare which ends up in building modelling framework.
3. __Infrastructure.__ Key components every production-ready analytics solution requires: analytic SQL generation, query results caching and execution orchestration, data pre-aggregation, security, API for query results fetch, and visualization.

Cube.js has necessary infrastructure for every analytic application that heavily relies on its caching and pre-aggregation layer to provide several minutes raw data to insight delay and sub second API response times on a trillion of data points scale.


## Examples

| Demo | Code | Description |
|:------|:----------:|:-------------|
|[Examples Gallery](https://statsbotco.github.io/cubejs-client/)|[examples-gallery](https://github.com/statsbotco/cubejs-client/tree/master/examples/examples-gallery)|Examples Gallery with different visualizations libraries|
|[Stripe Dashboard](http://cubejs-stripe-dashboard-example.s3-website-us-west-2.amazonaws.com/)|[stripe-dashboard](https://github.com/statsbotco/cubejs-client/tree/master/examples/stripe-dashboard)|Stripe Demo Dashboard built with Cube.js and Recharts|
|[AWS Web Analytics](https://statsbotco.github.io/cubejs-client/aws-web-analytics/)|[aws-web-analytics](https://github.com/statsbotco/cubejs-client/tree/master/examples/aws-web-analytics)|Web Analytics with AWS Lambda, Athena, Kinesis and Cube.js|
|[Event Analytics](https://d1ygcqhosay4lt.cloudfront.net/)|[event-analytics](https://github.com/statsbotco/cube.js/tree/master/examples/event-analytics)|Mixpanel like Event Analytics App built with Cube.js and Snowplow|
|[Node Express Dashboard](https://express-analytics-dashboard.herokuapp.com)|[node-express-dashboard](https://github.com/statsbotco/cube.js/tree/master/examples/express-analytics-dashboard)|Analytics Dashboard with Node, Express, and Cube.js|

## Tutorials

### Getting Started Tutorials
- [Cube.js, the Open Source Dashboard Framework: Ultimate Guide ](https://cube.dev/blog/cubejs-open-source-dashboard-framework-ultimate-guide)
- [Building MongoDB Dashboard using Node.js](https://cube.dev/blog/building-mongodb-dashboard-using-node.js)
- [Node Express Analytics Dashboard with Cube.js](https://cube.dev/blog/node-express-analytics-dashboard-with-cubejs/)
- [Building a Serverless Stripe Analytics Dashboard](https://cube.dev/blog/building-serverless-stripe-analytics-dashboard/)
### Advanced
- [Optimize Cube.js Performance with Pre-Aggregations](https://cube.dev/blog/high-performance-data-analytics-with-cubejs-pre-aggregations/)
- [Building an Open Source Mixpanel Alternative. Part 1: Collecting and Displaying Events](https://cube.dev/blog/building-an-open-source-mixpanel-alternative-1/)
- [Building an Open Source Mixpanel Alternative. Part 2: Conversion Funnels](https://cube.dev/blog/building-open-source-mixpanel-alternative-2/)
- [Building Open Source Google Analytics from Scratch](https://cube.dev/blog/building-open-source-google-analytics-from-scratch/)
- [React Query Builder with Cube.js](https://cube.dev/blog/react-query-builder-with-cubejs/)


## Community

If you have any questions or need help - [please join our Slack community](https://cubejs-community.herokuapp.com) of amazing developers and contributors.

## Architecture
__Cube.js acts as an analytics backend__, translating business logic (metrics and dimensions) into SQL and handling database connection. 

The Cube.js javascript Client performs queries, expressed via dimensions, measures, and filters. The Server uses Cube.js Schema to generate a SQL code, which is executed by your database. The Server handles all the database connection, as well as pre-aggregations and caching layers. The result then sent back to the Client. The Client itself is visualization agnostic and works well with any chart library.

<p align="center"><img src="https://i.imgur.com/FluGFqo.png" alt="Cube.js" width="100%"></p>

## Contributing

Contributions are **welcome and extremely helpful** 🙌 Please refer to [the contribution guide](https://github.com/statsbotco/cube.js/blob/master/CONTRIBUTING.md) for more information.

## License

Cube.js Client is [MIT licensed](./packages/cubejs-client-core/LICENSE).

Cube.js Backend is [Apache 2.0 licensed](./packages/cubejs-server/LICENSE).