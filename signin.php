<?php
include "php/connect.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/signin.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
</head>
<body>
    <div class="signin">
        <form action="php/registeration.php" method="POST">
            <input type="text" placeholder="Username" name="username" required><br>
            <input type="password" placeholder="Password" name="password" required><br>
            <input type="password" placeholder="Re-enter Password" name="re-password" required><br>
            <button type="submit" name="submit">Sign Up</button>
        </form>
    </div>

    
</body>
</html>
