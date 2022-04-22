module.exports = {
  siteMetadata: {
    title: `aspiredDemo`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins:
    [
      "gatsby-plugin-sass",
      "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
        resolve: 'gatsby-plugin-manifest',
        options: {
          "icon": "src/images/icon.png"
        }
      }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "images",
          "path": "./src/images/"
        },
        __key: "images"
      }, {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "pages",
          "path": "./src/pages/"
        },
        __key: "pages"
      }, {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          google: {
            families: ['Poppins:100,200,300,400,500,600,700,800,900']
          }
        }
      },
    ]
};