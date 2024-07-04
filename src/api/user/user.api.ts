import { app } from '../../server'
import { UserService  } from '../../services/user.service';

// Create User
app.post('/users', async (req, res) => {
  try {
    const user = UserService.createUser(req.body);
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read Users
app.get('/users', async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read Single User
app.get('/users/:id', async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update User
app.put('/users/:id', async (req, res) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete User
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
