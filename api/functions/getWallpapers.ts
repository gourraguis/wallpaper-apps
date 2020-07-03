import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import { v2 as cloudinary } from 'cloudinary'
import {
  cloudinaryCloudName,
  cloudinaryApiKey,
  cloudinarySecretKey
} from '../../common/constants'
import { WallpaperDto } from '../../common/types'

cloudinary.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinarySecretKey
})

const createLuceneExpression = (niche: string, category: string) => {
  let res = `resource_type:image AND tags=niche_${niche}`
  if (category) {
    res += ` AND category_${category}`
  }

  return res
}

export const getWallpapers: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  const { niche, category, limit } = event.queryStringParameters

  if (!niche) {
    return {
      statusCode: 400,
      body: 'Niche is required'
    }
  }

  const { resources } = await cloudinary.search
    .expression(createLuceneExpression(niche, category))
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute()

  const wallpapers: WallpaperDto = resources.map((r) => ({
    url: r.secure_url,
    created_at: r.created_at,
    ...r.tags
      .map((elem) => elem.split('_'))
      .reduce((acc, elem) => ({ [elem[0]]: elem[1], ...acc }), {}) // extract niche and category
  }))

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(
      {
        niche,
        category,
        limit,
        wallpapers,
        resources
      },
      null,
      2
    )
  }
}
