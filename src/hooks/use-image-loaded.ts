import { useEffect, useState } from 'react'

export function useImagesLoaded<T>(
  items?: T[],
  getImageUrl?: (item: T) => string
) {
  const [loadedImages, setLoadedImages] = useState<boolean>(false)

  useEffect(() => {
    if (!items || !getImageUrl) return

    setLoadedImages(false)

    Promise.all(
      items.map((item) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.src = getImageUrl(item)
          img.onload = () => resolve()
          img.onerror = () => resolve()
        })
      )
    ).then(() => setLoadedImages(true))
  }, [items, getImageUrl])

  return loadedImages
}
