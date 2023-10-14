import React from "react";

const Sitemap = () => {
  const pages = ["/", "/about", "/contact"]; // Add more pages as needed

  const generateSitemapXML = () => {
    const sitemapEntries = pages.map((page, index) => {
      return `<url>
        <loc>https://example.com${page}</loc>
        <priority>0.5</priority>
      </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapEntries.join("\n")}
      </urlset>`;
  };

  return <pre>{generateSitemapXML()}</pre>;
};

export default Sitemap;
