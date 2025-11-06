//-------------------------------------------------IMPORT STATEMENTS ----------------------------------------------------
//load environment variables from .env file
import dotenv from 'dotenv';
//import express module
import express from 'express';//ES Modules (ESM): modern approach

import { DB_NAME } from './constants.js';
import mongoose from 'mongoose';
import { User } from './src/models/user.model.js';

//------------------------------------------------------------------------------------------------------------------------

dotenv.config();
const app = express();
app.use(express.json());//middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));


async function ConnectDb() {
  try {
    await mongoose.connect(process.env.MOGO_URI + '/' + DB_NAME); 
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } 
}
//create a test user  
async function createTestUser() 
{
  try {
      const testUser = new User({
        username: 'testuser1a',
        password: 'testpassword',
        email: 'abc1@vcas.com'
      });
      await testUser.save();
      console.log(`Test user ${testUser.username} created.`);
  } catch (error) {
    console.error(error);
    
  }
}

ConnectDb();
//createTestUser();

//define routes
app.get('/', (req, res) => {
  res
  .status(200)
  .send('Hello World from Backend!');
});

app.get('/getusers', async (req, res) => {  
try { 
    const users = await User.find({});  
    return res
     .status(200)
     .json({ message: 'Please see list of users', data: users })  
  
} catch (error) {
  console.error(error);
  return res.status(500).json({ success: false, message: 'Failed to get user' });  
}
  
});


//server listen
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
