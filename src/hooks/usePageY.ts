import { useState, useEffect } from 'react'

export const usePageY = () => {
  const [isPageTop, setIsPageTop] = useState(true)

  const checkPageY = () => {
    if (window.scrollY < 80) {
      setIsPageTop(true)
    } else {
      setIsPageTop(false)
    }
  }

  useEffect(() => {
    console.log(isPageTop)
  }, [isPageTop])

  useEffect(() => {
    window.addEventListener('scroll', checkPageY)

    return () => window.addEventListener('scroll', checkPageY)
  }, [])

  return isPageTop
}
