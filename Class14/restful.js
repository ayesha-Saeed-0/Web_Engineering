// const express = require('express');
// const { v4: uuidv4 } = require("uuid"); // Correct UUID import

// const app = express();
// app.use(express.json()); // Middleware to parse JSON request bodies

// // Data
// const myFriend = [
//     {
//         "id": "1",
//         "name": "Malaika",
//         "age": 22,
//         "mobile_number": "123-456-7890"
//     }
// ];

// // Default route
// app.get('/', (req, res) => {
//     res.send("I am active");
// });

// // API route - Get all friends
// app.get('/api/Friend', (req, res) => {
//     res.json(myFriend);
// });

// // API route - Get a specific friend by ID
// app.get('/api/Friend/:id', (req, res) => {
//     const id = req.params.id;  // Extract ID from URL
//     const friend = myFriend.find(friend => friend.id === id);

//     if (friend) {
//         return res.json(friend);  // Return found friend
//     } else {
//         return res.status(404).json({ message: "Friend not found" }); // Return 404 if not found
//     }
// });

// // API route - Add a new friend
// app.post('/api/Friend', (req, res) => {
//     const { name, age, mobile_number } = req.body;

//     // Check if all required fields are provided
//     if (!name || !age || !mobile_number) {
//         return res.status(400).json({ message: "Please provide name, age, and mobile number" });
//     }

//     const friend = {
//         id: uuidv4(), // Generate unique ID
//         name,
//         age,
//         mobile_number
//     };

//     myFriend.push(friend);
//     res.status(201).json({ message: "Friend added successfully", friend });
// });

// // Start server
// app.listen(3000, () => {
//     console.log('Server is running at http://localhost:3000');
// });
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

const myFriend = [
  {
    id: "1",
    name: "Malaika",
    age: 22,
    mobile_number: "123-456-7890",
  },
];

// Default Route
app.get("/", (req, res) => {
  res.send("I am active");
});

// ✅ Correct GET Route
app.get("/api/Friend", (req, res) => {
  res.json(myFriend);
});

// ✅ Correct PUT Route (Update Friend)
app.put("/api/Friend/:id", (req, res) => {
  const id = req.params.id;
  const { name, age, mobile_number } = req.body;

  // Find the friend by ID
  const friendIndex = myFriend.findIndex((friend) => friend.id === id);
  if (friendIndex === -1) {
    return res.status(404).json({ message: "Friend not found" });
  }

  // Update friend details
  myFriend[friendIndex] = {
    id,
    name: name || myFriend[friendIndex].name,
    age: age || myFriend[friendIndex].age,
    mobile_number: mobile_number || myFriend[friendIndex].mobile_number,
  };

  res.json({
    message: "Friend updated successfully",
    friend: myFriend[friendIndex],
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
