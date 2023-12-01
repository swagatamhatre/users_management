import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as userController from './userController';
const app: Application = express();
app.use(bodyParser.json());

// MySQL Connection Configuration

app.post('/user', userController.createUser);
app.get('/users', userController.getUsers);
app.get('/user/:id',userController.getUserById); 
app.put('/user/:id', userController.updateUser);
app.delete('/user/:id',userController.deleteUser);

/*
// CRUD Endpoints
app.get('/users', (req: Request, res: Response) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching users' });
            return;
        }
        res.json(results);
    });
});

app.post('/users', (req: Request, res: Response) => {
    const { name, email } = req.body;
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error creating user' });
            return;
        }
        res.status(201).json({ message: 'User created successfully', id: result.insertId });
    });
});

app.put('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, userId], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error updating user' });
            return;
        }
        res.json({ message: 'User updated successfully' });
    });
});

app.delete('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
        if (err) {
            res.status(500).json({ error: 'Error deleting user' });
            return;
        }
        res.json({ message: 'User deleted successfully' });
    });
});
*/
const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
