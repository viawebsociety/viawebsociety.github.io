## Note for Web Society members:

There was a folder of them files here, but I deleted this folder because I felt like it was adding to much to what's supposed to be a little, easy template. If you want to go wild and use a different theme, go to the Reveal.js repo and pull down the files on your own!

## Dependencies

Themes are written using Sass to keep things modular and reduce the need for repeated selectors across files. Make sure that you have the reveal.js development environment including the Grunt dependencies installed before proceding: https://github.com/hakimel/reveal.js#full-setup

You also need to install Ruby and then Sass (with `gem install sass`).

## Creating a Theme

To create your own theme, start by duplicating any ```.scss``` file in [/css/theme/source](https://github.com/hakimel/reveal.js/blob/master/css/theme/source) and adding it to the compilation list in the [Gruntfile](https://github.com/hakimel/reveal.js/blob/master/Gruntfile.js).

Each theme file does four things in the following order:

1. **Include [/css/theme/template/mixins.scss](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/mixins.scss)**
Shared utility functions.

2. **Include [/css/theme/template/settings.scss](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/settings.scss)**
Declares a set of custom variables that the template file (step 4) expects. Can be overridden in step 3.

3. **Override**
This is where you override the default theme. Either by specifying variables (see [settings.scss](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/settings.scss) for reference) or by adding full selectors with hardcoded styles.

4. **Include [/css/theme/template/theme.scss](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/theme.scss)**
The template theme file which will generate final CSS output based on the currently defined variables.

When you are done, run `grunt themes` to compile the Sass file to CSS and you are ready to use your new theme.