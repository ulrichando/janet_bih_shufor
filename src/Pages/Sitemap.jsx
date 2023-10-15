const Sitemap = () => {
  const pages = [
    "/",
    "/about",
    "/contact",
    "/termsofuse",
    "/privacypolicy",
    "/cv",
  ]; // Add more pages as needed

  const generateSitemapXML = () => {
    const sitemapEntries = pages.map((page, index) => {
      return `
        <url key="${index}">
          <loc>https://example.com${page}</loc>
          <changefreq>daily</changefreq>
          <priority>0.5</priority>
        </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapEntries.join("\n")}
      </urlset>`;
  };

  return (
    <div>
      <h1>Sitemap</h1>
      <pre>
        <code>{generateSitemapXML()}</code>
      </pre>
    </div>
  );
};

export default Sitemap;
