const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'mufido',
  api_key: '',
  api_secret: ''
})

cloudinary.search
  .expression(
    'resource_type:image AND tags=category_Characters AND niche_Fortnite'
  )
  .sort_by('created_at', 'desc')
  .with_field('tags')
  .max_results(30)
  .execute()
  .then((res) => res.resources)
  .then((res) =>
    console.dir(
      res[0].tags
        .map((elem) => elem.split('_'))
        .reduce((acc, elem) => ({ [elem[0]]: elem[1], ...acc }), {})
    )
  )
