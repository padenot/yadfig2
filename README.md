# yadfig2

**yadfig2** is Yet Another Damn Fine Image Gallery, deux.

## How to

Clone and add the directory to `$PATH`. Invoke `yadfig2` (`-h` for help) or
`chic` (and then enter a title and a date, two strings).

This will generate either a grid gallery with a swipeable carousel
(`yadfig2`) that works well on mobile, but requires JavaScript (all browsers
that's not terribly ancient), or a static page without javascript, but with
`srcset` and co., that's a bit more elegant maybe, when `chic` is invoked.

In both cases, a zip of the full-resolution image is generated, and an
`index.html` file plus other needed resources are copied to the target
directory.

## License

- BSD for the scripts, html, css excepts when noted below.
- The Garamond font (included) is SIL Open Font License v1.10
  <https://www.fontsquirrel.com/fonts/eb-garamond>.
- The PhotoSwipe library is MIT <https://github.com/dimsemenov/photoswipe>
