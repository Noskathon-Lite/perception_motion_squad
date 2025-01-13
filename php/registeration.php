
<?php
include('connect.php');
    if (isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $re_password = $_POST['re-password'];

        if (empty($username) || empty($password) || empty($re_password)) {
            die("All fields are required!");
        }

        if ($password !== $re_password) {
            die("Passwords do not match!");
        }

        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $query = "INSERT INTO users (username, password) VALUES (?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $username, $hashed_password);

        if ($stmt->execute()) {
            echo "Registration successful!";
            header("Location: ../index1.html");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    }

    $conn->close();
    ?>