<<<<<<< HEAD
import { UserInterface } from '@/components/UserInterface'
=======
import axios from "axios";
>>>>>>> 29543e5a5ebadd01519db847669dfff397b94cf3

export async function loadPosts() {
    /* const data = await import("../data/data.json") */
    const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
<<<<<<< HEAD
    const data = res.text()
    
    return data
}

export async function loadPaths(id: any) {
    /* const data = await import("../data/data.json") */
    const res = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
    const data = res.text()
    
    return data
}

=======
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
>>>>>>> 29543e5a5ebadd01519db847669dfff397b94cf3
