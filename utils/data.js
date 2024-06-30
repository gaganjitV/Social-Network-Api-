const names = [
    'karan',
    'singh',
    'Gagan',
    "Raj",
    "Rahul",
    "Rohit",
    "Rajesh",
    "Rajat",
    "Rajeev",
    "Rajiv",
    "Rajendra",
    "Rajnish",
    "Rajnesh",
    
  ];
  
  
  const comments = [
    'Weather Watcher is quite accurate most of the time',
    'Recipe Finder has helped me discover new meals',
    'Photo Editor has too many ads',
    'Puzzle Master is addictive and fun',
    'Fitness Tracker is a must-have for health enthusiasts',
    'Travel Buddy makes trip planning easy',
    'Meditation Guide is very calming',
    'Workout Pro is challenging but effective',
    'Finance Manager keeps my budget on track',
    'Daily Quotes is inspiring',
    'Language Learner is great for beginners',
    'Speed Booster really improved my phone’s performance',
    'Calendar Plus is the best for scheduling',
    'Sleep Tracker helps improve my sleep patterns',
    'Document Scanner is very convenient'
  ];
  
  
// function to get a random items from an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
 
  const getRandomName = () =>
    `${getRandomArrItem(names)}`;
  

  const getRandomUsername = () =>
    `${getRandomArrItem(names)}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
  

  const getRandomThought = () =>
    `${getRandomArrItem(comments)}`;
  
 
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(comments),
        username: `${getRandomArrItem(names)}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`,
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomReactions, getRandomThought, getRandomUsername };