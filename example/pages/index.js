module.exports = {
  View: () =>
    div([
      h1('@magic-modules/youtube'),
      p([
        'this is the ',
        Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
        ' Youtube component. It renders videos embedded from youtube',
      ]),

      GitBadges({
        project: 'magic-modules/youtube',
        appveyor: 'jaeh/youtube',
      }),

      h2({ id: 'installation' }, 'installation:'),
      p(
        'installation is done using npm. for now, all magic modules are living on github and not on npm.',
      ),
      p('note the missing @ before magic-modules.'),
      p('this is how we install npm modules from github.'),

      Pre.View(`
npm install magic-modules/youtube
`),

      h2({ id: 'require' }, 'require:'),
      p('first add the component to the assets'),
      Pre.View(`
// assets/index.js
module.exports = {
  //...other exports
  Youtube: require('@magic-modules/youtube'),
}`),
      h2({ id: 'usage' }, 'usage'),
      p('in a page/component, just pass a youtube video id to the Youtube module'),
      Pre.View("Youtube('f84n5oFoZBc')"),
      p('renders'),
      Youtube('f84n5oFoZBc'),

      h2({ id: 'props' }, 'props'),
      p('you can pass a fixed width and height and any other props to the video.'),
      ,
      Pre.View("Youtube({ src: '8QYWGCEm2Dc', width: '50%' })"),

      p('renders'),
      Youtube({ src: '8QYWGCEm2Dc', width: '50%' }),

      h3({ id: 'fixed-dimensions' }, 'fixed video dimensions'),
      p(
        'to set a fixed video size, simply add both a height and a width value (px, em, rm, vh, pt).',
      ),
      Pre.View("Youtube({ src: 'SMhwddNQSWQ', width: '300px', height: '900px' })"),
      Youtube({ src: 'SMhwddNQSWQ', width: '300px', height: '900px' }),

      h2({ id: 'source' }, 'source'),
      p([
        'the source for this page is in the ',
        Link(
          { to: 'https://github.com/magic-modules/youtube/tree/master/example' },
          'example directory',
        ),
        ' and gets built and published to github using ',
        Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
      ]),
    ]),
}
