module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"http://localhost:10003/graphql","verbose":true,"catchLinks":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Starter WordPress Blog","short_name":"GatsbyJS & WP","start_url":"/","background_color":"#ffffff","theme_color":"#663399","display":"minimal-ui","icon":"src/images/cropped-Favicon-192x192.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"41d11a084f8293a5378787fc8256fb78"},
    },{
      plugin: require('../node_modules/gatsby-omni-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"enableListener":true,"preconnect":["https://fonts.googleapis.com","https://fonts.gstatic.com"],"web":[{"name":"Open Sans","file":"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"},{"name":"Roboto","file":"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"},{"name":"DM Serif Display","file":"https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"},{"name":"Daydreami","file":"https://fonts.cdnfonts.com/css/daydreami"}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
