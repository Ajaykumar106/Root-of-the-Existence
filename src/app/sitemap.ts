import { MetadataRoute } from 'next'
import { MUSEUM_DATA } from '@/lib/museum'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://root-of-the-existence.vercel.app'
  
  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/live`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]

  // Dynamic Exhibit Routes
  MUSEUM_DATA.forEach((exhibit) => {
    routes.push({
      url: `${baseUrl}/explore/${exhibit.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    // Dynamic Sub-Module Routes
    if (exhibit.subModules) {
      exhibit.subModules.forEach((sub) => {
        routes.push({
          url: `${baseUrl}/explore/${exhibit.id}/${sub.id}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      })
    }
  })

  return routes
}
