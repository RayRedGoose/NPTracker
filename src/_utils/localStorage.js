export const getItem = item => {
  return JSON.parse(localStorage.getItem(item))
}

export const addItem = (type, item) => {
  return localStorage.setItem(type, JSON.stringify(item))
}

export const addItemToAll = (path, item) => {
  const targetPath = (!getItem(path)) ? [ ] : [...getItem(path)]
  return localStorage.setItem(path, JSON.stringify([...targetPath, item]))
}
