# Tailwind CSS border image plugin

Add support for CSS [border-image][mdn-border-image] property.

This plugin provides a set of primitives that enable you to work and fully customize css border-image properties.

It's not opinionated, meaning it doesn't provide any UI components or override any tailwind default values or configuration.

As an example, it makes is possible for this css:

```CSS
div {
 background-image: linear-gradient(to left, #581c87, #d8b4fe) 1 fill / 0 / 0 100% stretch;
}
```

to be written with tailwind:

```html
<div
  class="border-image-gradient-to-l form-indigo-900 to-indigo-300 border-slice-1 border-width-0 border-outset-x-full border-repeat-stretch"
></div>
```

## Get inspired

In this [storybook][storybook] you'll find examples of real use cases and cool things you can build using this powerful property.

## Browser compatibility

The border-image property is widely supported, even since IE. You can check its support [here][can-i-use-border-image].

## Instalation

```bash
npm install -D tailwindcss-border-image
```

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-border-image'),
    // ...
  ],
}
```

## Utilities

The `border-image` syntax follows this schema:

```
border-image: <source> <slice>/<width>/<outset> <repeat>
```

Basically it's a short-hand for setting `border-image-source`, `border-image-slice`, `border-image-width`, `border-image-outset` and `border-image-repeat` in a one-liner.

This plugin will provide you with utilities to work with each one of them in a tailwind CSS fashion.

### Source _(required)_

| Utility         | Values                    |
| --------------- | ------------------------- |
| `border-image-` | `{theme.backgroundImage}` |
| `border-image-` | `{arbitrary}`             |

The border-image-source CSS property sets the source image used to create an element's border image. (Keep in mind that all gradients are also considered images).

To set the border-image source you can use the `border-image-{value}`.

`{value}` can be anything defined in your `theme.backgroundImage` meaning that any gradient or image resource included in your theme can be used as a border image source. For example `border-image-gradient-to-t`.

It also supports arbitrary values, that way if you don't want to add an specific backgroundImage to your theme you can just inline it. For example: `border-image-[conic-gradient(var(--tw-gradient-stops) 0 0)]`

### Slice

_`Default: 0`_

The `border-image-slice` has it's own set of values that can be extended or overwritten through the `borderSlice` property on the `tailwind.config.js`.

Since border-image-slice works with unitless values (no pixels, rems, etc) it's the only property that requires custom values.

The default `theme.spacing` values can't be used because they contain units (`rem`). The `borderSlice` values follow the same pattern as the default `spacing`, `width` or `height` that we are used to but without units.

| Utility           | Values                                |                                            |
| ----------------- | ------------------------------------- | ------------------------------------------ |
| `border-slice-`   | `{theme.borderSlice}` / `{arbitrary}` | Sets a value for all four slices           |
| `border-slice-x-` | `{theme.borderSlice}` / `{arbitrary}` | Sets a value for the left and right slices |
| `border-slice-y-` | `{theme.borderSlice}` / `{arbitrary}` | Sets a value for the top and bottom slices |
| `border-slice-t-` | `{theme.borderSlice}` / `{arbitrary}` | Sets a value for the top slice             |
| `border-slice-r-` | `{theme.borderSlice}` / `{arbitrary}` | Sets a value for the right slice           |
| `border-slice-b-` | `{theme.borderSlice}` / `{arbitrary}` | Sets a value for the bottom slice          |
| `border-slice-l-` | `{theme.borderSlice}` / `{arbitrary}` | Sets a value for the left slice            |

The border-image-slice CSS property divides the image specified by border-image-source into regions. These regions form the components of an element's border image.

The slice property accepts up to four values, acting also as a short-hand (like margin and border properties do). This means that if you provide one value it will be used for the four slices.

This plugin also proivdes utilities to set only `x`, `y` or individual values if you need to customize each of them individually.

### Slice fill

_`Default: fill`_

| Utility         | Values            |
| --------------- | ----------------- |
| `border-slice-` | `fill`, `no-fill` |

With the slice property you can control the 8 outer slices. To control the inner slice (the 9th slice) you should use the fill property. To do that you should also make use of the `border-slice-` utilities, this time targeting the fill value.

### Width

_`Default: 0`_

| Utility                 | Values                           |                                            |
| ----------------------- | -------------------------------- | ------------------------------------------ |
| `border-image-width-`   | `{theme.width}` / `{arbitrary}`  | Sets a value for all four widths           |
| `border-image-width-x-` | `{theme.width}` / `{arbitrary}`  | Sets a value for the left and right widths |
| `border-image-width-y-` | `{theme.height}` / `{arbitrary}` | Sets a value for the top and bottom widths |
| `border-image-width-t-` | `{theme.height}` / `{arbitrary}` | Sets a value for the top width             |
| `border-image-width-r-` | `{theme.width}` / `{arbitrary}`  | Sets a value for the right width           |
| `border-image-width-b-` | `{theme.height}` / `{arbitrary}` | Sets a value for the bottom width          |
| `border-image-width-l-` | `{theme.width}` / `{arbitrary}`  | Sets a value for the left width            |

The border-image-width CSS property sets the width of an element's border image and like slice property, the witdh is also a short-and for the four sides.

### Outset

_`Default: 0`_

| Utility            | Values                           |                                             |
| ------------------ | -------------------------------- | ------------------------------------------- |
| `border-outset-`   | `{theme.width}` / `{arbitrary}`  | Sets a value for all four outsets           |
| `border-outset-x-` | `{theme.width}` / `{arbitrary}`  | Sets a value for the left and right outsets |
| `border-outset-y-` | `{theme.height}` / `{arbitrary}` | Sets a value for the top and bottom outsets |
| `border-outset-t-` | `{theme.height}` / `{arbitrary}` | Sets a value for the top outset             |
| `border-outset-r-` | `{theme.width}` / `{arbitrary}`  | Sets a value for the right outset           |
| `border-outset-b-` | `{theme.height}` / `{arbitrary}` | Sets a value for the bottom outset          |
| `border-outset-l-` | `{theme.width}` / `{arbitrary}`  | Sets a value for the left outset            |

The border-image-outset CSS property sets the distance by which an element's border image is set out from its border box.

The parts of the border image that are rendered outside the element's border box with border-image-outset do not trigger overflow scrollbars and don't capture mouse events.

Like the slice and width property, the witdh is also a short-and for the four sides.

### Repeat

_`Default: stretch`_

| Utility          | Values                                                |
| ---------------- | ----------------------------------------------------- |
| `border-repeat-` | `repeat`, `round`, `space`, `stretch` , `{arbitrary}` |

The border-image-repeat CSS property defines how the edge regions and middle region of a source image are adjusted to fit the dimensions of an element's border image.

## Resources

If you would like to know more about what you can do with this powerful CSS property. I recommend taking a look at this resources.

- Temani Afif - [The complex but awesome CSS border-image property][the-complex-but-awesome-css-border-image-property]
- Kevin Powell - [The border property you never knew you needed][the-border-property-you-never-knew-you-needed]
- CSS Tricks - [Border Image][css-tricks-border-image]
- [MDN][mdn-border-image]

### Support my work

If you really like my job and you would like to [!["buy me a coffee"](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=Buy-me-a-coffee)](https://www.buymeacoffee.com/sebagnz) I'd be eternally grateful 😊

[storybook]: https://sebagnz.github.io/tailwindcss-border-image/?path=/docs/example-breakout--docs
[mdn-border-image]: https://developer.mozilla.org/en-US/docs/Web/CSS/border-image
[can-i-use-border-image]: https://caniuse.com/border-image
[the-complex-but-awesome-css-border-image-property]: https://www.smashingmagazine.com/2024/01/css-border-image-property/
[the-border-property-you-never-knew-you-needed]: https://youtu.be/ypstT5UfCsk?si=8zzSwBFq57WlvSQE
[css-tricks-border-image]: https://css-tricks.com/almanac/properties/b/border-image/
