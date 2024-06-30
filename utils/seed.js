const connection = require('../config/connection');
const { Users, Thought } = require('../models');
const { getRandomName, getRandomReactions, getRandomThought, getRandomUsername } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let friendsCheck = await connection.db.listCollections({ name: 'friends' }).toArray();
    if (friendsCheck.length) {
      await connection.dropCollection('friends');
    }


  // Creates empty array to hold the thought(s) and friend(s)
  const thoughts = [];

  //  adding thoughts to the thoughts array
  for (let i = 0; i < 3; i++) {
    
    const reactions = getRandomReactions(2);

    var thoughtText = getRandomThought();
    var username = `${getRandomUsername()}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    thoughts.push({
      thoughtText,
      username,
      reactions,
    });
  }

  // Add thoughts to the collection and await the results
  const thoughtData = await Thought.insertMany(thoughts);

  // Add users to the collection and await the results
  await Users.insertMany({
    username: getRandomUsername(),
    email: `${username}@gmail.com`,
    thoughts: [...thoughtData.map(({_id}) => _id)],
  });

 
  console.info('Seeding complete!');
  process.exit(0);
});