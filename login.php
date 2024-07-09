<?php 
    if(isset($_POST['submit'])) {
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $my_conection = new mysqli('localhost', 'root', '', 'form-loguin-01');

        if($my_conection->connect_error) {
            die ("error: " . $my_conection->connect_error);
        };

        $user_db = "INSERT INTO user_info(`first_name`, `last_name`, `email`, `password`)
        VALUES('$first_name', '$last_name', '$email', '$password')";

        $my_conection->close();
    }

?>