import { MetadataRoute } from 'next';
import { products, productCategories } from '@/data/products';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.adityachemicals.in';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/certificates',
    '/events',
    '/contact',
    '/privacy-policy',
    '/terms-of-use',
    // Regional hub pages (Step 6)
    '/us',
    '/uk',
    '/eu',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic category routes
  const categoryRoutes = productCategories.map((cat) => ({
    url: `${baseUrl}/product-category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Global Dynamic product routes (all products)
  const productRoutes = products.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Regional Dynamic product routes (only products with regional content, Step 6)
  const regionalProducts = products.filter((prod) => !!prod.regionalContent);
  const regionalProductRoutes: any[] = [];

  regionalProducts.forEach((prod) => {
    regionalProductRoutes.push({
      url: `${baseUrl}/us/products/${prod.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    });
    regionalProductRoutes.push({
      url: `${baseUrl}/uk/products/${prod.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    });
    regionalProductRoutes.push({
      url: `${baseUrl}/eu/products/${prod.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    });
  });

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...regionalProductRoutes,
  ];
}
