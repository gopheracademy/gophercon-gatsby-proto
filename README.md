<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Gophercon webapp prototype in Gatsbyjs (React) as the proposal for the discussion
</h1>

This is the initial webapp vision for the Gophercon that is limited to: 
- automatic built of the index page based on the graphql page structure
- basic styling, where most of the elements that are expected to be on the conference page are made with the CSS grid and flex box
- SEO through the Helmet package
- desktop version (not responsive)
- src/data/indexpage.json represents the json object that is used to imitate the graphql server

If this proposal will be considered as the foundation for the future site, following has to be implemented first:
- Redux store
- oath, login functionalities, protected links and routes
- Stripe payment functionality
- responsive elements for mobile and other screen sizes
- use of the Typescript


## 🚀 Quick start

1.  **Start developing.**

    Navigate into your project directory and start it up.

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data.
