Music App: Stream and Download Your Favorite Tracks

This project provides a backend for a music application written in Python using the Django framework. It allows users to:

    Stream and download songs: Listen to music online or download songs for offline playback.
    Create user accounts: Register and login to manage your music experience.
    Admin panel: Upload and manage songs for the application. (Limited to admins only)

Features:

    User authentication with secure password storage.
    Song upload, download, and deletion functionalities.
    Live and offline playback capabilities.
    Admin panel for managing song content.

Getting Started

This project requires Python 3.x and Django installed. To set up the environment:

    Clone this repository.
    Create a virtual environment: python -m venv venv
    Activate the virtual environment: . venv/bin/activate
    Install dependencies: pip install -r   

    requirements.txt
    Configure database settings in settings.py.
    Run database migrations: python manage.py migrate
    Start the development server: python manage.py runserver

Note: This project currently only allows admins to upload music. Future development might include user-generated content features.

Contributing

We welcome contributions to this project! Feel free to fork the repository, make changes, and create pull requests.

License

This project is licensed under the MIT License. Please refer to the LICENSE file for details.  

Additional Information

This README provides a basic overview. For further details on specific functionalities, refer to the code within the project directory.