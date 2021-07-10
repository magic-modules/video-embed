export const state = {
  title: '@magic-modules/video-embed',
  description: 'renders videos from any http url that allows iframe embedding',
  logotext: 'VideoEmbed',

  menu: [
    { to: '/#installation', text: 'installation' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '-youtube', text: 'youtube' },
        { to: '-vimeo', text: 'vimeo' },
        { to: '-others', text: 'other hosts' },
      ],
    },
    { to: '/#props', text: 'props' },
    { to: '/#fixed-dimensions', text: 'fixed dimensions' },
    { to: '/#source', text: 'source' },
  ],
}
