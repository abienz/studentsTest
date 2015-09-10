# studentsTest

## tech choices
I went with a node based dev environment with gulp managing my stylus and jade templates to output an essentially static site.

This is something I've been playing around with for a while so I'm comfortable with how it enables me to rapidly build prototypes and gives me that extra edge over vanilla CSS and HTML

As the site is static you can run it in anything from the public folder.

src folder is naturally where my working files are (except JS).

### jquery and library
I went with a simple plugin to give me the slideshow with touch functionality on mobile, this was purely for efficiency and speed, unfortunateley I had to add the code at the top of the page, which is sub-optimal.

## responsiveness
I made a judgment call on a breakpoint of 600px to start displaying a desktop friendly version, naturally in production there would be more breakpoints.

Although the CSS is designed from a mobile first perspective, there is redundant module in the 'room types' selector and list, ideally the mobile device wouldn't have to have this overhead, and some server side feature detection could remedy this.

## how to get started
To get the dev environment up and running clone the repo then run 'npm install' this will download packages in the package.json file, then run 'gulp' to watch any styl and jade files that may be edited.
