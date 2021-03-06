import { css, Global } from '@emotion/react';

const styles = css`
  * {
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #009978;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #006650;
  }

  body {
    min-height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0px;
    background-color: #181a1c;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/Avenir.ttc')
        format('truetype'),
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'corners';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/corners.eot?10496212');
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/corners.eot?10496212#iefix')
        format('embedded-opentype'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/corners.woff2?10496212')
        format('woff2'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/corners.woff?10496212')
        format('woff'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/corners.ttf?10496212')
        format('truetype'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/corners.svg?10496212#corners')
        format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mokoto glitch mark I';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/mokoto_glitch_mark_2-webfont.woff2')
        format('woff2'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/mokoto_glitch_mark_2-webfont.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mokoto_glitch_mark_iiregular';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/mokoto_glitch_mark_2-webfont.woff2')
        format('woff2'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/mokoto_glitch_mark_2-webfont.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mokoto_glitchregular';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/mokoto_glitch-webfont.woff2')
        format('woff2'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/mokoto_glitch-webfont.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  /*! Generated by Font Squirrel (https://www.fontsquirrel.com) on May 15, 2021 */

  @font-face {
    font-family: 'opensans';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/opensans-light-webfont.woff2')
        format('woff2'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/opensans-light-webfont.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Optician Sans';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/optician-sans-webfont.woff2')
        format('woff2'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/optician-sans-webfont.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'optician';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/optician-sans-webfont.woff2')
        format('woff2'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/optician-sans-webfont.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'morganite';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/Morganite-Light.woff2')
        format('woff2'),
      url('https://genopets-web-assets.s3.amazonaws.com/fonts/Morganite-Light.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mokoto glitch outline';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/MoktoGlitchMarkoutline.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mokto_glitch_mark_outline';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/MoktoGlitchMarkoutline.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'neon-black';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/Neon-Black.otf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'neon-bold';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/Neon-Bold.otf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Neon';
    src: url('https://genopets-web-assets.s3.amazonaws.com/fonts/Neon-Bold.otf');
    font-weight: normal;
    font-style: normal;
  }

  h1 {
    font-family: 'mokoto_glitch_mark_iiregular', sans-serif;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    margin: 0;
    @media only screen and (min-width: 1024px) {
      font-size: 42px;
    }
  }

  h2 {
    font-family: 'neon-bold';
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    margin: 0;
  }

  h3 {
    font-family: 'neon-bold';
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    margin: 0;
  }
  p {
    font-family: 'opensans', sans-serif;
    font-size: 13px;
    line-height: 25px;
  }

  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
  li {
    font-family: 'neon-bold';
    font-size: 14px;
    padding: none;
    font-weight: 100;
    margin-bottom: 20px;
  }

  #chakra-toast-portal .chakra-toast{
    margin-top: 25px;
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
