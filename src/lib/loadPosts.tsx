export async function loadPosts() {
    const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    const data = await res.json()

    return data
}
