module.exports = {
    "plugins": {
        "postcss-import": {},
        'postcss-cssnext': {
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9',
            ],
            flexbox: 'no-2009',
        },
        "postcss-url": {},
    }
}
