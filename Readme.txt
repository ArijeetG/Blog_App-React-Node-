Backend: 
    >   The backend is created using an express/Node server and will run on port 4000.
    >   To start the backend go to the root project directory(/Blog-App/) and type npm run DevStart(will start a nodemon dev) or node server.js
    >   The endpoints used in backend are:
        /newBlog: 
            Post request to add a new Blog to the database.
        /allBlogs:
            Get request to View all the blogs in the database.
        /deleteBlog:
            Deletes a Blog entry using user_id as the reference key.
        /updateBlog:
            Updates a Blog entry using user_id as the reference key.
    > The connection configs fot the database is present in config.js

Frontend: 
    > The frontend is created using a React framework and using hooks.
    > The frontend would run on port: 3000 and to start, go to /Blog-App/frontend and type npm start in terminal.

Database:
    > Database here used is mysql local server on a Debian device.
    > Start the local server using command sudo mysqld --user=root (The local sql intialisation was done using root as user. Change as seems fit.)
    > Start the sql client using command sudo mysql -u root -p.
        The terminal will prompt for the sql authentication password used during intital setup.
    > Create a database 'users' in the sql client terminal and furthur create a 'users' table for 'users' database.
    > The fields of the users table are as shown.
        +-------------+-----------+------+-----+---------+----------------+
        | Field       | Type      | Null | Key | Default | Extra          |
        +-------------+-----------+------+-----+---------+----------------+
        | user_id     | int       | NO   | PRI | NULL    | auto_increment |
        | user_name   | char(20)  | NO   |     | NULL    |                |
        | description | char(200) | NO   |     | NULL    |                |
        | title       | char(20)  | NO   |     | NULL    |                |
        | date        | date      | NO   |     | NULL    |                |
        +-------------+-----------+------+-----+---------+----------------+
