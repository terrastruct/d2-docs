---
pagination_next: tour/studio
---

# CLI manual

The following is a copy of the `man` (manual) for the CLI. It is identical to the output
you would get by installing the CLI and running `man d2`.

```rolf
d2(1)			    General Commands Manual			 d2(1)

NAME
     d2 – compiles and renders d2 diagrams into svgs.

SYNOPSIS
     d2 [--watch false] [--theme 0] file.d2 [file.svg | file.png]
     d2 layout [name]
     d2 fmt file.d2 ...

DESCRIPTION
     d2 compiles and renders file.d2 to file.svg | file.png.

     It defaults to file.svg if no output path is passed.

     Pass - to have d2 read from stdin or write to stdout.

     Never use the presence of the output file to check for success.  Always
     use the exit status of d2.  This is because sometimes when errors occur
     while rendering, d2 still write out a partial render anyway to enable
     iteration on a broken diagram.

     See more docs, the source code and license at
     https://oss.terrastruct.com/d2.

     Hosted icons at https://icons.terrastruct.com.

     Playground runner at https://play.d2lang.com.

OPTIONS
     -w, --watch false
		 Watch for changes to input and live reload. Use $PORT and
		 $HOST to specify the listening address.

     -h, --host localhost
		 Host listening address when used with watch.

     -p, --port 0
		 Port listening address when used with watch.

     -t, --theme 0
		 Set the diagram theme ID.

     --dark-theme -1
		 The theme to use when the viewer's browser is in dark mode.
		 When left unset --theme is used for both light and dark mode.
		 Be aware that explicit styles set in D2 code will still be
		 applied and this may produce unexpected results. We plan on
		 resolving this by making style maps in D2 light/dark mode
		 specific. See https://github.com/terrastruct/d2/issues/831.

     -s, --sketch false
		 Renders the diagram to look like it was sketched by hand.

     --center flag
		 Center the SVG in the containing viewbox, such as your
		 browser screen.

     --scale -1  Scale the output. E.g., 0.5 to halve the default size.
		 Default -1 means that SVG's will fit to screen and all others
		 will use their default render size. Setting to 1 turns off
		 SVG fitting to screen.

     --font-regular
		 Path to .ttf file to use for the regular font. If none
		 provided, Source Sans Pro Regular is used.

     --font-italic
		 Path to .ttf file to use for the italic font. If none
		 provided, Source Sans Pro Regular-Italic is used.

     --font-bold
		 Path to .ttf file to use for the bold font. If none provided,
		 Source Sans Pro Bold is used.

     --pad 100	 Pixels padded around the rendered diagram.

     --animate-interval 0
		 If given, multiple boards are packaged as 1 SVG which
		 transitions through each board at the interval (in
		 milliseconds). Can only be used with SVG exports.

     --browser true
		 Browser executable that watch opens. Setting to 0 opens no
		 browser.

     -l, --layout dagre
		 Set the diagram layout engine to the passed string. For a
		 list of available options, run layout.

     -b, --bundle true
		 Bundle all assets and layers into the output svg.

     --force-appendix false
		 An appendix for tooltips and links is added to PNG exports
		 since they are not interactive. Setting this to true adds an
		 appendix to SVG exports as well.

     --target	 Target board to render. Pass an empty string to target root
		 board. If target ends with '*', it will be rendered with all
		 of its scenarios, steps, and layers. Otherwise, only the
		 target board will be rendered. E.g. --target='' to render
		 root board only or --target='layers.x.*' to render layer 'x'
		 with all of its children.

     -d, --debug
		 Print debug logs.

     --img-cache true
		 In watch mode, images used in icons are cached for subsequent
		 compilations. This should be disabled if images might change.

     --timeout 120
		 The maximum number of seconds that D2 runs for before timing
		 out and exiting. When rendering a large diagram, it is
		 recommended to increase this value.

     -h, --help  Print usage information and exit.

     -v, --version
		 Print version information and exit.

SUBCOMMANDS
     layout	 Lists available layout engine options with short help.

     layout [name]
		 Display long help for a particular layout engine, including
		 its configuration options.

     themes	 Lists available themes.

     fmt file.d2 ...
		 Format all passed files.

SEE ALSO
     d2plugin-tala(1)

AUTHORS
     Terrastruct Inc.
```
