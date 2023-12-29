export const handleLocalStorageToken = () => ({
  setToken: (value: string) => localStorage.setItem('ut', value),
  getToken: () => localStorage.getItem('ut')
})
