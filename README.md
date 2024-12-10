 creds---github.com@ifconfigbrian
Music App: Stream and Download Your Favorite Tracks

This project provides a backend for a music application built with Django. It allows users to:

Stream and download songs: Users can listen to music online or download songs for offline playback.
Create user accounts: Users can register, log in, and manage their music experience.
Admin panel: Admins can upload and manage songs for the application.

Features

User authentication: Secure registration and login, with password storage.
Song upload, download, and deletion: Functionality for admins to manage songs.
Live and offline playback: Users can stream songs or download them for offline use.
Admin panel: Admins can upload, update, and delete song content.

Getting Started

This project requires Python 3.x and Django. Follow the steps below to set up the environment:

    Clone the repository:

git clone cd

    Set up a virtual environment:

python3 -m venv venv source venv/bin/activate # On Windows: venv\Scripts\activate

    Install dependencies:

pip install -r requirements.txt

    Configure database settings:

Open settings.py and configure your database settings according to your environment. 5. Apply database migrations:

Run the following command to set up your database:

python manage.py migrate

    Create a .env file for environment variables:

In the root of the project directory, create a .env file to store sensitive information like SECRET_KEY and DJANGO_ENV. Example:

DJANGO_ENV=development # or 'production' for production SECRET_KEY=your-secret-key-here

You can generate a new SECRET_KEY using the following Python code:

import secrets print(secrets.token_urlsafe())

    Start the development server:

python manage.py runserver

The backend API should now be running at http://127.0.0.1:8000/. API Endpoints

    List Songs (GET /api/songs/)

    Retrieves a list of all uploaded songs.

    Upload Song (POST /api/songs/)

    Upload a new song by providing song data (e.g., title, file).

    Download Song (GET /api/songs/{id}/)

    Download a song by its ID.

Authentication

Development Mode: Authentication is not required in development to make testing easier.
Production Mode: JWT authentication is required for accessing protected resources, such as uploading songs.

To authenticate, pass a JWT token in the Authorization header as follows:

Authorization: Bearer

Contributing

We welcome contributions to this project! Feel free to fork the repository, make changes, and submit pull requests. License

This project is licensed under the MIT License. Please refer to the LICENSE file for details. Additional Information

This README provides an overview of setting up and using the Music App. For more specific details on the project's functionalities, refer to the code in the respective files and directories.
