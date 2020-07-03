import Layout from '../components/Layout'
import AddWallpaperForm from '../components/AddWallpaperForm/AddWallpaperForm'
import WallpapersList from '../components/WallpapersList/WallpapersList'
import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { WallpaperDto } from '../../common/types'
import axios from 'axios'
import { apiUrl } from '../../common/constants'

const IndexPage: NextPage = () => {
  const [wallpapers, setWallpapers] = useState<WallpaperDto[]>([])

  useEffect(() => {
    axios
      .get(`${apiUrl}/wallpapers`, {
        params: {
          niche: 'Fortnite',
          limit: 999
        }
      })
      .then((res) => res.data)
      .then(({ wallpapers }) => {
        setWallpapers(wallpapers)
      })
  }, [])

  const addWallpaper = (wallpaper: WallpaperDto) => {
    setWallpapers((prevValue) => {
      return [wallpaper, ...prevValue]
    })
  }

  return (
    <Layout>
      <h1 className="title has-text-centered">Wallpaper Manager</h1>
      <div className="columns is-centered">
        <div className="column is-8">
          <AddWallpaperForm addWallpaper={addWallpaper} />
        </div>
      </div>
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">List Of Wallpapers</h2>
          <WallpapersList wallpapers={wallpapers} />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
