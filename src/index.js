const plugin = require('tailwindcss/plugin')

module.exports = plugin(
    function ({ matchUtilities }) {
        const parseValue = (rawValue) => {
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
            const parsedValue = parseValue(utility)

            if (!parsedValue) return

            const { name, value } = parsedValue


            return {
                [name]: value
            }
        }

        matchUtilities({
            var: (value) => registerUtility(value),
        })
    })
