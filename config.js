module.exports = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    gravatarUrl: 'https://gravatar.com/avatar',
    gravatarStyle: 'retro',
    gravatarSize: 200,
    jtwExpirationInDays: 14,
    jwtSecret: 'ifgjhoi8pfg23yb58hy23489b7yt245b8yt243bfghdfgljbshdfpifashf348978'
}