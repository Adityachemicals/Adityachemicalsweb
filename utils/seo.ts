export function getAlternates(slug: string, currentRegion: 'default' | 'us' | 'uk' | 'eu', hasRegional: boolean) {
  const base = "https://www.adityachemicals.in";
  if (!hasRegional) {
    return {
      canonical: `${base}/products/${slug}`,
      languages: {
        "en-US": `${base}/products/${slug}`,
        "en-GB": `${base}/products/${slug}`,
        "en-DE": `${base}/products/${slug}`,
        "x-default": `${base}/products/${slug}`
      }
    };
  }

  const canonicalMap = {
    default: `${base}/products/${slug}`,
    us: `${base}/us/products/${slug}`,
    uk: `${base}/uk/products/${slug}`,
    eu: `${base}/eu/products/${slug}`
  };

  return {
    canonical: canonicalMap[currentRegion],
    languages: {
      "en-US": `${base}/us/products/${slug}`,
      "en-GB": `${base}/uk/products/${slug}`,
      "en-DE": `${base}/eu/products/${slug}`,
      "x-default": `${base}/products/${slug}`
    }
  };
}
