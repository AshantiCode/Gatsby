module.exports = {
    siteMetadata: {
        title: "Full-Stack Bootcamp",
        author: "Shanti Haring",
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: "",
                accessToken: "",
            },
        }`gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
        },
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 750,
                            linkImageToOriginal: false,
                        },
                    },
                ],
            },
        },
    ],
};
