import axios from "axios";

export async function loadPosts() {
    const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    const data = res.json()
   

    return data
}

// const res = await axios.get(
    // 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users',
    //{
      //headers: {
        //Accept: 'application/json, text/plain, */*',
       // 'User-Agent': '*',
     // },
   // }
 // );
//const data = JSON.stringify(res.data)

//const users = JSON.parse(data)