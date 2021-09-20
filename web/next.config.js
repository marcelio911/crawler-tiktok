/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')

module.exports = {
  ...withVideos(),
  reactStrictMode: true,
  images: {
    domains: [
      'tiktokcdn.com',
      'tiktok.com',
      'p16-sign-va.tiktokcdn.com',
      'p77-va.tiktokcdn.com',
      'p77-sign-va.tiktokcdn.com',
      'p16-sign-sg.tiktokcdn.com',
      'p77-sign-sg.tiktokcdn.com',
      'p9-sign-sg.tiktokcdn.com',
      'p58-sign-sg.tiktokcdn.com',
      'p16-sg.tiktokcdn.com',
      'sf16-passport-va.ibytedtos.com',
      'p77-sign-sg-lite.tiktokcdn.com',
      'p77-sign-va-lite.tiktokcdn.com',
      'v16-web.tiktok.com',
    ],
  },  
}
