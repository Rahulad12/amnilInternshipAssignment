/**
 * The try, catch and finally blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know about the types of errors in programming.
 */
const database = [
  {
    email: "rahuladhikari2014@gmail.com",
    password: "rahuladhikari2",
    name: "Rahul Adhikari",
  },
  {
    email: "adhikarirahul2014@gmail.com",
    password: "rahuladhikari",
    name: "Adhikari Rahul",
  },
];

const FetchData = (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = database.find((user) => user.email === email);

    if (!user) {
      throw new Error(`User not found with email: ${email}`);
    }

    // Check if the password matches
    if (user.password !== password) {
      throw new Error("Invalid Credentials");
    }

    res.status(200).json({
      success: true,
      message: "User Logged In Successfully",
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message, // Custom error messages from `throw`
    });
  } finally {
    console.log(`Request processed for email: ${email}`);
  }
};

// Example usage:
const mockReq = {
  body: { email: "adhikarirahul2014@gmail.com", password: "rahuladhikari" },
};
const mockRes = {
  status: (code) => ({
    json: (response) => console.log("Response:", code, response),
  }),
};

FetchData(mockReq, mockRes);
