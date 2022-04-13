const plugin = require('tailwindcss/plugin')

module.exports = plugin(
    function ({ matchUtilities }) {
        const parseVariable = (rawValue) => {
            if (!rawValue.includes('=')) return

            const parts = rawValue.split('=')
            if (parts.length !== 2) return

            let [name, value] = parts

            if (!name || !value) return

            if (!name.startsWith('--')) {
                name = `--${name}`
            }

            return {
                name,
                value
            }
        }

        const registerUtility = (utility) => {
            const variables = utility.split(';')
                .map(parseVariable)
                .filter(Boolean)
                .filter(({ name, value }) => name && value)
                .map(({ name, value }) => ({ [name]: value }))
                .reduce((acc, curr) => ({ ...acc, ...curr }), {})
            return Object.keys(variables).length > 0 ? variables : undefined
        }

        matchUtilities({
            var: (value) => registerUtility(value),
        })
    })
