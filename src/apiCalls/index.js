export const getData = async (type, search) => {
  const searching = (search) ? `?q=${search}`: ''
  const apiKey = 'jifXT2Vf98f3NV0eJEEVe6nMf04XQVPYzznfolCL'
  const url = `https://developer.nps.gov/api/v1/${type}${searching}&fields=images&limit=60&api_key=${apiKey}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('There was an error getting parks.')
  }

  const result = await response.json()
  return result.data
}
