if (process.client) {
  window.fancybox = require("@fancyapps/ui");
  window.fancybox.Fancybox.bind("[data-fancybox]", {
    Image: {
      ignoreCoveredThumbnail: true,
    },
    infinite: false,
    Escape: "close",
    Delete: "close",
  });
}
