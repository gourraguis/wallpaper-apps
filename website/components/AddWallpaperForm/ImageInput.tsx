import { cloudinaryCloudName } from '../../../common/constants'
import { useRef, useEffect } from 'react'

const ImageInput = ({ niche, category, addWallpaper }) => {
  const widget = useRef(null)

  useEffect(() => {
    //@ts-ignore
    widget.current = cloudinary.createUploadWidget(
      {
        cloudName: cloudinaryCloudName,
        cropping: true,
        multiple: false,
        croppingAspectRatio: 9 / 16,
        tags: [`niche_${niche}`, `category_${category}`],
        uploadPreset: 'wallpapers'
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          addWallpaper({
            niche,
            category,
            url: result.info.secure_url
          })

          widget.current.close()
        } else if (error) {
          console.error(error)
        }
      }
    )
  }, [])

  const showWidget = () => {
    widget.current.open()
  }

  return (
    <button
      type="button"
      className="button is-dark is-fullwidth is-rounded"
      onClick={showWidget}
    >
      Upload Wallpaper
    </button>
  )
}

export default ImageInput
