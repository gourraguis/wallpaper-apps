import WallpaperCard from './WallpaperCard'

const WallpapersList = ({ wallpapers }) => {
  return wallpapers.length ? (
    <div className="columns is-multiline">
      {wallpapers.map((wallpaper) => (
        <div key={wallpaper.url} className="column is-3">
          <WallpaperCard wallpaper={wallpaper} />
        </div>
      ))}
    </div>
  ) : (
    <p className="subtitles has-text-centered">Loading wallpapers...</p>
  )
}

export default WallpapersList
