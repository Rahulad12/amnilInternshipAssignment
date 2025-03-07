const container = document.getElementById("container");
/**
 * The Promise.allSettled() method takes an array of promises and waits for all of them to settle (either fulfilled or rejected). It returns an array of objects that describe each promise’s result.


 */
const exampleallSettledPromise = async () => {
  try {
    const [product, user, comments] = await Promise.allSettled([
      fetch("https://dummyjson.com/products/1").then((res) => res.json()),
      fetch("https://dummyjson.com/users/1").then((res) => res.json()),
      fetch("https://dummyjson.com/").then((res) => res.json()),
    ]);
    if (!product || !user || !comments) {
      throw new Error("Data not found");
    }
    const data = {
      product,
      user,
      comments,
    };
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const displayData = async () => {
  try {
    const data = await exampleallSettledPromise();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

displayData();

// output 
// {
//     "product": {
//         "status": "fulfilled",
//         "value": {
//             "id": 1,
//             "title": "Essence Mascara Lash Princess",
//             "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//             "category": "beauty",
//             "price": 9.99,
//             "discountPercentage": 7.17,
//             "rating": 4.94,
//             "stock": 5,
//             "tags": [
//                 "beauty",
//                 "mascara"
//             ],
//             "brand": "Essence",
//             "sku": "RCH45Q1A",
//             "weight": 2,
//             "dimensions": {
//                 "width": 23.17,
//                 "height": 14.43,
//                 "depth": 28.01
//             },
//             "warrantyInformation": "1 month warranty",
//             "shippingInformation": "Ships in 1 month",
//             "availabilityStatus": "Low Stock",
//             "reviews": [
//                 {
//                     "rating": 2,
//                     "comment": "Very unhappy with my purchase!",
//                     "date": "2024-05-23T08:56:21.618Z",
//                     "reviewerName": "John Doe",
//                     "reviewerEmail": "john.doe@x.dummyjson.com"
//                 },
//                 {
//                     "rating": 2,
//                     "comment": "Not as described!",
//                     "date": "2024-05-23T08:56:21.618Z",
//                     "reviewerName": "Nolan Gonzalez",
//                     "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
//                 },
//                 {
//                     "rating": 5,
//                     "comment": "Very satisfied!",
//                     "date": "2024-05-23T08:56:21.618Z",
//                     "reviewerName": "Scarlett Wright",
//                     "reviewerEmail": "scarlett.wright@x.dummyjson.com"
//                 }
//             ],
//             "returnPolicy": "30 days return policy",
//             "minimumOrderQuantity": 24,
//             "meta": {
//                 "createdAt": "2024-05-23T08:56:21.618Z",
//                 "updatedAt": "2024-05-23T08:56:21.618Z",
//                 "barcode": "9164035109868",
//                 "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
//             },
//             "images": [
//                 "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
//             ],
//             "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
//         }
//     },
//     "user": {
//         "status": "fulfilled",
//         "value": {
//             "id": 1,
//             "firstName": "Emily",
//             "lastName": "Johnson",
//             "maidenName": "Smith",
//             "age": 28,
//             "gender": "female",
//             "email": "emily.johnson@x.dummyjson.com",
//             "phone": "+81 965-431-3024",
//             "username": "emilys",
//             "password": "emilyspass",
//             "birthDate": "1996-5-30",
//             "image": "https://dummyjson.com/icon/emilys/128",
//             "bloodGroup": "O-",
//             "height": 193.24,
//             "weight": 63.16,
//             "eyeColor": "Green",
//             "hair": {
//                 "color": "Brown",
//                 "type": "Curly"
//             },
//             "ip": "42.48.100.32",
//             "address": {
//                 "address": "626 Main Street",
//                 "city": "Phoenix",
//                 "state": "Mississippi",
//                 "stateCode": "MS",
//                 "postalCode": "29112",
//                 "coordinates": {
//                     "lat": -77.16213,
//                     "lng": -92.084824
//                 },
//                 "country": "United States"
//             },
//             "macAddress": "47:fa:41:18:ec:eb",
//             "university": "University of Wisconsin--Madison",
//             "bank": {
//                 "cardExpire": "03/26",
//                 "cardNumber": "9289760655481815",
//                 "cardType": "Elo",
//                 "currency": "CNY",
//                 "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
//             },
//             "company": {
//                 "department": "Engineering",
//                 "name": "Dooley, Kozey and Cronin",
//                 "title": "Sales Manager",
//                 "address": {
//                     "address": "263 Tenth Street",
//                     "city": "San Francisco",
//                     "state": "Wisconsin",
//                     "stateCode": "WI",
//                     "postalCode": "37657",
//                     "coordinates": {
//                         "lat": 71.814525,
//                         "lng": -161.150263
//                     },
//                     "country": "United States"
//                 }
//             },
//             "ein": "977-175",
//             "ssn": "900-590-289",
//             "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
//             "crypto": {
//                 "coin": "Bitcoin",
//                 "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
//                 "network": "Ethereum (ERC20)"
//             },
//             "role": "admin"
//         }
//     },
//     "comments": {
//         "status": "rejected",
//         "reason": {}
//     }
// }