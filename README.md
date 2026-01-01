# Backend Auth & Orders API

This is a Node.js backend application built using Express.js and MongoDB, implementing JWT-based authentication, protected REST APIs, and user-specific order management.

The application allows users to register and log in securely, where passwords are encrypted using bcrypt and authentication is handled via JSON Web Tokens (JWT). Sensitive routes such as user profile access and order operations are protected using a custom authentication middleware that verifies JWT tokens and ensures only authorized users can access their data.

Each authenticated user can create orders and fetch only their own orders, ensuring proper data isolation and security. The project follows a clean MVC architecture, uses proper HTTP status codes, and includes structured error handling to simulate real-world backend development practices.

This project was developed as part of a technical test assignment and demonstrates practical knowledge of authentication, authorization, middleware usage, RESTful API design, and backend best practices. All APIs were tested using Postman/Thunder Client, and the codebase is organized, scalable, and ready for further extension or frontend integration.
