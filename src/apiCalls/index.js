export const getData = async (type, search) => {
  const searching = (search) ? `?q=${search}`: ''
  const apiKey = 'IpOkxICOi4tJPgJfN3LXvxXuOtWHz5iZdULtD2hd'
  const url = `https://developer.nps.gov/api/v1/${type}${searching}&fields=images&limit=60&api_key=${apiKey}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('There was an error getting parks.')
  }

  const result = await response.json()
  return result.data
}
