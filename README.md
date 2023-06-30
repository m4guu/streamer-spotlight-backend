
# Streamer Spotlight

Application dedicated to sharing reviews of streamers across platforms.

## Technologies Used

- Frontend: `React`
- Backend: `NestJS`
- Database: `MongoDB`

## Introduction

The Streamer Spotlight Frontend is a web application that allows users to share and read reviews of streamers across various streaming platforms. It provides a platform for streamer enthusiasts to discover new content creators, leave their feedback, and engage with the community.

## Key Features

- **`Streamer Reviews`**: Users can browse reviews and add favorite streamers.
- **`Dummy User ID for Likes`**: In the initial implementation, the application utilizes a dummy user ID for handling likes and dislikes on streamers. This approach allows for the future expansion of the application by integrating real user authentication and replacing the dummy ID with actual user IDs.
- **`Future Development`**: The application has potential for further enhancement. Some possible features to consider for future development include:

  - **User Profiles**: Introduce user registration and profiles, allowing users to create accounts, manage their reviews, and customize their preferences.
  - **Streamer Comments**: Enable users to leave comments on streamers' profiles, fostering discussion and interaction among the community.
  - **Advanced Search and Filtering**: Implement advanced search and filtering options to help users discover streamers based on specific criteria such as game genre, streaming platform, or popularity.
  - **Social Media Integration**: Integrate with popular social media platforms to allow users to share streamer reviews on their social channels, increasing visibility and engagement.

## Installation

To run the Streamer Spotlight locally, follow these steps:

```bash
# clone frontend repository
$ git clone https://github.com/m4guu/streamer-spotlight-frontend.git
# clone backend repository
$ git clone https://github.com/m4guu/streamer-spotlight-backend.git

# installs dependencies in both
$ npm install

# add .env file in root of app which contains the following:
VITE_INTERNAL_API_URL='http://localhost:3000/'
# add .env.development file in config/env of backend app which contains the following:
PORT='3000'
MONGODB_URI='YOURS MONGODB URI'

# run frontend
$ npm start
# run backend
$ npm run start:dev
```

## Running Tests

To run tests, run the following command

```bash
$ npm run test
```

## Contribution

Contributions to the Streamer Spotlight Frontend are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request. Please ensure that your contributions adhere to the project's coding standards and follow the established guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

