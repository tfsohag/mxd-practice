/** @type {import('next').NextConfig} */
const {withContentlayer} =  require('next-contentlayer');
const nextConfig = {
    eslint: false
}

module.exports = withContentlayer(nextConfig)
