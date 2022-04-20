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
    <p class="m-[var(my-var)]">I having a margin of 10rem!</p>
</div>
```

> The use of `--` for the name of the CSS variable is optional. It is the same `var-[my-var=10px]` and `var-[--my-var=10px]`

### Multiple variables

You can use ';' to write multiple variables with its values: 

```html
<div class="var-[my-var=10rem;my-other-awesome-var=minmax(1fr_auto)]"></div>
```

## Demo

[Tailwind Playground](https://play.tailwindcss.com/9F0iGgiWal)

## Why?

There are basically two reasons for the existence of this plugin:

1. Tailwind group utilities are great... if you only planned to use it once which it is (almost) every situation. The limitations with this is that you only can use the class `.group` so nesting groups or using different groups with different scopes is impossible. With the use of this variables, you could do something similar. For this reason I also build this other plugin [Tailwind Labeled Groups](https://github.com/onmax/tailwindcss-labeled-groups)
2. It is a good alternative to Event Listener with JS. Variants in tailwind give you superpowers and with the use of `calc()` and this plugin you can create some neat code with only CSS, and maybe a little bit of JS (but no listener at all!).
3. You cannot write multiple CSS variables with TailwindCSS. See [Playground](https://play.tailwindcss.com/apyaf0eymo)
4. It is fun.
