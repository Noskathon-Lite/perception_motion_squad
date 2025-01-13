app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    
    if (!user) {
        return res.send('<h3>Invalid credentials. User not found.</h3>');
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
            return res.status(500).send('<h3>Internal server error.</h3>');
        }

        if (isMatch) {
            return res.send(`<h3>Welcome, ${username}!</h3>`);
        } else {
            return res.send('<h3>Invalid credentials. Please try again.</h3>');
        }
    });
});
