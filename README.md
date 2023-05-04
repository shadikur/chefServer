Public Endpoint: https://chef-server-sigma.vercel.app/

This is an API server for a Thai chef database that provides various endpoints to access the chef and recipe data. Here's a brief description of each endpoint:

- "/" - This is the root endpoint that returns a message indicating that the Chef API server is running.

- "/all" - This endpoint returns all the data available in the database.

- "/chef/:id" - This endpoint returns the data for a specific chef identified by the "id" parameter in the URL.

- "/chefsprofile" - This endpoint returns the profile data of all chefs in the database without their recipes.

- "/chefsprofile/:chefID" - This endpoint returns the profile data of a specific chef identified by the "chefID" parameter in the URL without their recipes.

- "/recipe/:id" - This endpoint returns the data for a specific recipe identified by the "id" parameter in the URL.

- "/chefrecipe/:chefID" - This endpoint returns the recipes of a specific chef identified by the "chefID" parameter in the URL.

The API server is implemented using Express.js and uses the CORS middleware to allow cross-origin requests. The data is stored in a JSON file and is read by the server to respond to the requests. The server listens on port 5300 and logs a message to the console when it starts running.