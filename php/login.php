<?php
include('connect.php');

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    
    if (empty($username) || empty($password)) {
        die("Username and password are required!");
    }

    $query = "SELECT password FROM users WHERE username = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            session_start();
            $_SESSION['username'] = $username;
            header("Location: ../index1.html");
            exit();
        } else {
            die("Invalid password!");
        }
    } else {
        die("User not found!");
    }
}

$conn->close();
?>
