# TailwindCSS Write Variables

A Tailwind plugin that allows you to write CSS variables using only classes

---


## Installation

Install the plugin:

```bash
# npm
npm install -D tailwindcss-write-variables
```

```bash
# yarn
yarn add -D tailwindcss-write-variables
```

Then add the plugin to your `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-write-variables')
    // ...
  ],
}
```

You are ready to use it

## Usage

You can write a new variable using `var-` prefix. Then, you have to set a name and a value. If the value has spaces, remember to use '_'.

```html
<div class="var-[my-var=10rem]">
    <p class="m-[var(my-var)]">I having a margin!</p>
</div>
```

> The use of `--` is optional

### Multiple variables

You can use ';' to write multiple variables with its values: 

```html
<div class="var-[my-var=10rem;my-other-awesome-var=minmax(1fr_auto)]"></div>
```

See it in [Tailwind Playground](https://play.tailwindcss.com/J02Aef4sde)
