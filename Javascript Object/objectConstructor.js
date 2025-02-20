/***
 * createing object using constructor
 */

function Profile() {
  (this.name = "Rahul Adhikari"),
    (this.email = "adrahul2014@gmail.com"),
    (this.mobile = "9817977025"),
    (this.address = {
      country: "Nepal",
      district: "Jhapa",
      state: "Koshi",
      city: "Kamal-2",
    }),
    (this.education = {
      Higher: "BscCsit",
      University: "Thribhuvan University",
      PassingYear: 2025,
    });
}

const profile = new Profile();
console.log(profile);
console.log("Accessing Education \n", profile.education);

// output
/***
 * Profile {
  name: 'Rahul Adhikari',
  email: 'adrahul2014@gmail.com',
  mobile: '9817977025',
  address: {
    country: 'Nepal',
    district: 'Jhapa',
    state: 'Koshi',
    city: 'Kamal-2'
  },
  education: {
    Higher: 'BscCsit',
    University: 'Thribhuvan University',
    PassingYear: 2025
  }
}
Accessing Education 
 {
  Higher: 'BscCsit',
  University: 'Thribhuvan University',
  PassingYear: 2025
}

=== Code Execution Successful ===
 */
