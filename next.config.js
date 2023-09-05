/** @type {import('next').NextConfig} */
const nextConfig = {
    formats: ['image/avif', 'image/webp'],
    images: {       
        domains: ['res.cloudinary.com'],
    },
}

module.exports = nextConfig
