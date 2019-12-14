import { createGlobalStyle } from "styled-components"

export const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1576289208602'); /* IE9 */
    src: url('./iconfont.eot?t=1576289208602#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1576289208602') format('woff'),
    url('./iconfont.ttf?t=1576289208602') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1576289208602#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconzuanshi:before {
    content: "\e600";
  }

  .iconspin:before {
    content: "\e851";
  }

  .iconpinglun:before {
    content: "\e631";
  }

  .iconshouji:before {
    content: "\e760";
  }

  .iconfangdajing:before {
    content: "\e6d9";
  }

  .iconxin:before {
    content: "\e612";
  }

  .iconuser:before {
    content: "\e601";
  }

  .iconmima:before {
    content: "\e619";
  }

  .iconyumaobi:before {
    content: "\e616";
  }

  .iconAa:before {
    content: "\e666";
  }

  .iconfanhuidingbu:before {
    content: "\e63d";
  }
`