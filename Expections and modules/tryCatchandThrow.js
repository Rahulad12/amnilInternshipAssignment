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
const FetchData = async (req, res) => {
  const { email, password } = body;
  try {
    const user = await database.find((user) => user.email === email);
    if (!user) {
      throw new Error(`User not found with email: ${email}`); //illustrating the throw keyword here
    }
    const isMatch = user.password === password;
    if (isMatch) {
      res.status(200).json({
        success: true,
        message: "User Logged In Sucessfully",
        user: {
          name: user.name,
          email: user.email,
        },
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid Credentails",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal Server Error ${error}`,
    });
  } finally {
    console.log(`Request processed for email: ${email}`);
  }
};

const mockReq = {
  body: { email: "adhikarirahul2014@gmail.com", password: "rahuladhikari" },
};
const mockRes = {
  status: (code) => ({
    json: (response) => console.log("Response:", code, response),
  }),
};

FetchData(mockReq, mockRes);
