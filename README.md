# WonderNBeyond

## Description:
Wonders and Beyond is a web application dedicated to the exploration of magic, its spells, deities, potions, and the shared experiences of its community members.

## Features:
- **Spell List:** Browse through a collection of spells, understanding their unique purposes and required materials.
- **Deities:** Detailed descriptions of powerful deities associated with magic.
- **Potions:** Discover a wide range of potions, their uses, and the necessary ingredients.
- **Spell Share:** A community-driven platform to share personal magical experiences, spells, and insights.

## Installation:

### Prerequisites:
- Ensure you have Node.js installed. If not, download and install it from [Node.js official website](https://nodejs.org/).

### Setting up the Client (Angular Application):
1. Navigate to the `wondersbeyond` directory then into the `client` folder:
   ```bash
   cd wondersbeyond/client
   ```
2. Install all the dependencies required for the Angular application:
   ```bash
   npm install
   ```
3. Once all dependencies are installed, you can run the Angular development server using:
   ```bash
   ng serve
   ```

### Setting up the Server (Node.js Application):
1. Navigate to the `wondersbeyond` directory then into the `server` folder:
   ```bash
   cd wondersbeyond/server
   ```
2. Install all the server-side dependencies:
   ```bash
   npm install
   ```

3. [Steps for database setup if any]: If you're using a database, you might need to set up connection configurations, environment variables, etc. Provide the necessary configuration, credentials, and other relevant details.

4. Once all the configurations are in place, you can start the server using:
   ```bash
   node app.js
   ```

### Setting up MongoDB:
1. Ensure MongoDB is installed on your machine. If not, download and install it from the [MongoDB official website](https://www.mongodb.com/try/download/community).
2. Start the MongoDB server:
   ```bash
   mongod
   ```
3. Navigate to the `wondersbeyond` directory then into the `mondb` folder:
   ```bash
   cd wondersbeyond/mondb
   ```
4. Run the script to create the necessary collections in MongoDB:
   ```bash
   mongo < scriptformongodb
   ```
5. (Optional) If you have JSON files for initial data (`beyonds.json`, `deities.json`, `potions.json`, `spells.json`, `users.json`), you can import them to the respective collections using the `mongoimport` command:
   ```bash
   mongoimport --db wondersbeyond --collection beyonds --file wondersbeyond.beyonds.json
   ```

Repeat the above command for other collections by adjusting the `--collection` and `--file` parameters accordingly.

### Accessing the Application:
- After starting both the client, server, and MongoDB, you can access the application by navigating to:
   ```bash
   http://localhost:4200/
   ```

(Note: The default port for Angular applications is 4200. Adjust the port if you've configured it differently.)

## Usage:
1. Visit the homepage to explore the wonders of magic.
2. Use the navigation bar to access Deities, Potions, Spells, and more.
3. Register or log in to share your own spells and experiences.

## Contribution:
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact:
For questions, comments, or feedback, please reach out to pedgarcia007 at pedgarcia007@gmail.com.
```

