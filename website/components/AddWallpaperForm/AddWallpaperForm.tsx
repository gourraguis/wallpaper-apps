import FormInput from './FormInput'
import FormSelect from './FormSelect'
import { useState } from 'react'
import { handleChangeHelper } from '../../utils/forms'
import ImageInput from './ImageInput'

const niche = 'Fortnite'
const categories = ['Characters', 'Weapons', 'Landscapes', 'Fanarts']

const AddWallpaperForm = ({ addWallpaper }) => {
  const [category, setCategory] = useState(categories[0])

  return (
    <div>
      <div className="columns is-vcentered">
        <div className="column is-6">
          <FormInput label="Niche" value={niche} onChange={null} disabled />
          <FormSelect
            label="Category"
            value={category}
            onChange={handleChangeHelper(setCategory)}
            options={categories}
          />
        </div>
        <div className="column is-6">
          <ImageInput
            niche={niche}
            category={category}
            addWallpaper={addWallpaper}
          />
        </div>
      </div>
    </div>
  )
}

export default AddWallpaperForm
