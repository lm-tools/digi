function create({ basePath, siteUrl }) {
  return {
    entrypointUrl: () => `${basePath}/`,
    dashboardUrl: () => `${basePath}/`,
    cookieUrl: () => `${basePath}/cookie`,
    searchUrl: (search) =>
      `${basePath}/search${search ? `?search=${encodeURIComponent(search)}` : ''}`,
    searchUrlAbsolute: (search) =>
      `${siteUrl}${basePath}/search?search=${encodeURIComponent(search)}`,
    detailsUrl: (resourceId, search, result, score) =>
      `${basePath}/resources/${resourceId}?fromSearch=${encodeURIComponent(search)}&` +
        `result=${encodeURIComponent(result)}&score=${encodeURIComponent(score)}`,
  };
}

module.exports = create;
