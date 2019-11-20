Notes on the Project

I have used Laravel Framework 6.5.1 to build the project.
I'm running Ubuntu 18.04.3 LTS

The Ubuntu apache I'm not using it. I have XAMP-linux-x64-7.2.11-0 installed. Which is very easy
to intergrated PHP, MySQL, and local server (127.0.0.1).

On Ubuntu 18.04 server. Simply create a new folder and clone the project from GitHub (
https://github.com/Lloydkwena/adchecks.git ). You may use any text editor to open the folder. I
prefer Sublime-Text.

I have used composer to install promise based data at Axios. And npm to install ReactJs for front-
end. The main reason I have choosen these technologies is that, in real life data comes from API's.

Once text editor is opened, at the root of the folder you will notice .env file. Please enter the
configarations of the Server and MySQL. The current details are as follows:
APP_URL=http://localhost
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laratweat
DB_USERNAME=root
DB_PASSWORD=

To start the project, simply run: php artisan serve in terminal, at the root folder of the project.
Laravel server will start at http://127.0.0.1:8000. Please visit it to see the project.

Database entries are already populated (laravel migrations). Command to run database schemas is:
php artisan migrate : Please run it at the root folder of the project.

Then, you may register as a new user to login. Have fun :-)

Further information on settting up Laravel can be found at Laravel website.
