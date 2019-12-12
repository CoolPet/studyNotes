import { createGlobalStyle } from "styled-components"

export const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1576138082519'); /* IE9 */
    src: url('./iconfont.eot?t=1576138082519#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAT4AAsAAAAACcgAAASsAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDdAqFeIUhATYCJAMgCxIABCAFhG0HZBuXCFGUL06e7MdC5qYPmiWUuOjJXMqba2rFHyL42svcd3e/0KoD1YvtshXFoBgUQiEcpAoTpWN0Mr4b8S/azAVOoX5m1Cx2YlZBKsYlENEhpKJcXTVSsZeItzmJRfqDS+Us2xacZ29x2WtQOBygAM3ujQUqYBuQAmoBuEttWxBZ4wD1ZT9OoNe0TpCTkioKghTRcYF4Meo5COrplRVKaFX1zKVFfFVp01u6CuBLefj4D5oIIqmy6NTL52Id5P2CF10xuZPhITf6eJ4VxlYyVoDifMGs/V2u4yswvV528QgMx1SMX4dtJpya8Ozei67/u1E3ykOpA//FA6FSyxpFImqRvJ9wT4mGX5AiBL+aIVT8Ckeo+aVGyPwS+L7iHloVT16AdRJo8ZJhYAz4ARBnEOF3xFtJUDCUjB8ZaRoS0SAmPihoguht7Ef07d9nlhlnGYrF6aSck92LGEQd84DbTSEUjfh8bL2XYbo5sqcre9xrvxWGnXWT6CpPcUMaIS74WmKrvSVD5k4OZ666ca+XWd3g8dCyO4+eJw/dxe1wh7Ver1XYvD168WrlnHOe7BO+UoF1ZeTC+Hb08tfaeSs7He3SZe4+dp6bmrsweYMn/5Juyn03cu5FO840oPD+RM9e8+PxhZE9uCPEFAAcwbeW7D2O1LNsPT45jd67EeRNxJQTCFKwbGvIlhDlgtD6UFPIkpB//1oMvTPsDvXkx7D71LAazd5x9fWhd77D76M9ez5SOvPRCXv3TkDzRkXfyjvm9+eP37Hehat+j+5N/xetgWBn9UeKSlifkBV/qPxw+878D3Srj5D5NHtBxITXz9sN7VC4CvPdwVbEnNy+Clvdnl6qkT+/ejYokvycPxHdvwcdTxySTvwPiPiWgPgNNYUcneQSIhDz7IFW4Abklpamlq5W8P8G1Bzh4hf7znx0iuLTMWOPf/1wZ8t0h6jtojqtasaUWNIvMmAgauinu9l7YKTUdp+yqHV72LjWM/eAX9aBnm9Xs5nL+kVk56HVeX0jlvst3BOEber26A2H/KvKPkQ3Ij9ds6JbdcjCsNADEc2XNI+G/gDdJOwkuopuvR/kM5N+GLuAldF/51NY8NFSPpJlyO/p9g/wd9x+67S8f+Osry1RwM/I1ZX+TiogV7avsyP4uQmEE8VXYUVxB0v14izlxqcRTeiN5/iRuUc9PlM5IaYQyokWksYUZK0ZVMGtQKXPDtRa+9BrWenVfcaIMFF6sGQcQBi2A5JB3yEbdg1VcI+gMukt1IYDg173EXLLPnNhxAtFnpN4HVk3hDRq7TYhMUl4VdqN17ssnNgVlTSGF53GEKlWqIapUt7Gi2ec4Ryo10iSQAqi3UqWwNN4i8VOOkS7iddKCoMkOTKUSmHukxRauxVwx0Q8joSnQ6ozBMlIy85GyBdL8NHPd8PTc7HgiCs9PXYGT+RkXJ2kpqASoErlNlHPR9nsNJCehkQi8FECkZ0VqQStPEsctyM55neZ8LQkCgaFqEMGJc0SpHLF7ZXWV3oJekVvbiNFjhJV1NFEGz2aVxdncxqMfk6H0RaYbtRbXDZc4Gx6HWfqabHBU1uHuKycvc6I5nMA') format('woff2'),
    url('./iconfont.woff?t=1576138082519') format('woff'),
    url('./iconfont.ttf?t=1576138082519') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1576138082519#iconfont') format('svg'); /* iOS 4.1- */
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

  .iconfangdajing:before {
    content: "\e6d9";
  }

  .iconxin:before {
    content: "\e612";
  }

  .iconyumaobi:before {
    content: "\e616";
  }

  .iconAa:before {
    content: "\e666";
  }
`
