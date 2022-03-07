export function setUserLocalStorage(token: string | null) {
  localStorage.setItem('token', JSON.stringify(token))
}
export function getUserLocalStorage() {
  const json = localStorage.getItem('token')

  if (!json) {
    return null
  }

  const token = JSON.parse(json)

  return token ?? null
}