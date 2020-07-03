import { WallpaperDto } from '../../../common/types'

const WallpaperCard = ({ wallpaper }: WallpaperCardProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-9by16">
          <img src={wallpaper.url} />
        </figure>
      </div>
      <div className="card-footer">
        <p className="card-footer-item has-text-primary has-text-weight-bold">
          {wallpaper.niche}
        </p>
        <p className="card-footer-item has-text-success has-text-weight-bold">
          {wallpaper.category}
        </p>
      </div>
    </div>
  )
}

interface WallpaperCardProps {
  wallpaper: WallpaperDto
}

export default WallpaperCard
