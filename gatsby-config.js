const postSlug = require('./src/utils/post-slug')

require('dotenv').config()

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_HOST,
} = process.env

module.exports = {
  siteMetadata: {
    title: 'Daniel Lemay Blog',
    description:
      'Daniel Lemay is a full stack JavaScript developer based in Portland, OR and concentrating on cutting edge technologies.',
    siteUrl: 'https://www.dslemay.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        anonymize: true,
        trackingId: 'UA-99838315-1',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-flow',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'resource-pages',
        path: `${__dirname}/src/pages/resource-pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        host: CONTENTFUL_HOST,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) =>
              allContentfulBlogPost.edges.map(edge => {
                const { title, postDate } = edge.node
                const { html } = edge.node.body.childMarkdownRemark
                return {
                  title,
                  url: `${site.siteMetadata.siteUrl}/${postSlug(
                    postDate,
                    title,
                  )}`,
                  guid: `${site.siteMetadata.siteUrl}/${postSlug(
                    postDate,
                    title,
                  )}`,
                  // eslint-disable-next-line camelcase
                  custom_elements: [{ 'content-encoded': html }],
                }
              }),
            query: `
              {
                allContentfulBlogPost(limit: 500, sort: { fields: [postDate], order: DESC }) {
                  edges {
                    node {
                      title
                      postDate(formatString: "YYYY/MM/DD")
                      body {
                        childMarkdownRemark {
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'Daniel Lemay Blog RSS Feed',
          },
        ],
      },
    },
  ],
}
