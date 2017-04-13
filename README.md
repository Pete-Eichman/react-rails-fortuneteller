# Get Set Up
* Clone the repository.
* Navigate to the root directory.
* Run the following commands in the command line.
    ```sh
    $ bundle install
    $ bundle exec rake db:create
    $ bundle exec rake db:migrate
    $ bundle exec rails server -b 0.0.0.0
    ```

* In another terminal tab, install the necessary NPM packages and run your Webpack Dev Server

    ```sh
    $ npm install
    $ npm start
    ```

* The built API endpoint lives in: /app/controllers/api/fortunes_controller.rb

* The ReactDOM text lives in
/react/src/components/Fortune.js

* The ReactDOM renders over the HTML DOM in the div with id ="app". This can be found in
/app/views/index.html.haml

* This app uses Fetch instead of AJAX.
