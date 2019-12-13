import { createGlobalStyle } from "styled-components"

export const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1576216665600'); /* IE9 */
    src: url('./iconfont.eot?t=1576216665600#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVMAAsAAAAACjwAAAT+AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCECgqGQIVVATYCJAMkCxQABCAFhG0Hcxv0CCMRJnQSQ/YXBXYb8YEp6Vo77PCPG1r5yQzoLMoRgP/mutq17g8HeR4ED0jn+5LcFzWIxQS0A4wbgEIBc7ufW9uSKdIpjZAJpREAm2t1+GxEhFqSp55AsS8k3S6lk6ZPV7fmdO/Gj54KNE2sfzwLfPkCCQ/7LWuiAPdWpItD5azzYGy+xeIy17IxKRwOUIDGWtSrULAtSL2i2AduEtoLMJutvz4PATjTkYooU66KAUcsZJoARIe2rZvi2FNirWAFnsSZWauhSdjhydHyHDCx/HnxhmzhCBJbIXNrtCrbghI6L2sqiw1XDXI1466nB7xNoIBUQAMxZ9Y4DVUHU1EEu7+r8QO88URh6Ojeur+epRfVW+m3X9a02calpJOg0H/yQGDjYOLhYmGAsAeFrozpEnIEnZQCAbq3HDsU+aMcexRloRyFoqLIPE/UCuU4oOg2UqDBy5pFSACc8jXegC/wGkRLRFrkGYwG4jRhIUUveXn5BLiGhDs6+rl41W/byKVh4wbtizmba4PZ2ZjntOwol97l/ri6dq0UhkrcvNlY+cvUTbDEV/MBDh+l/3fNycXX79yMwuXkzUwtuXHfd5r3N527BnyjXh1w/XploUvjdOx3Er1DHxbeuDG2WnMFz1lydsLx68XBmw8GfQicpfsZF/xuekjdV6PGtNs8nT6mzXkrr+fvQR/Xbulpp9jZpAzQWNbtZxjnWYF1mu6VYyGQ87py215hNZutMKaAcduCZbXL2INC9B9meN8W03D52IDWLadPM62l5h9u+qz1yZjpa/Vt5zPX5///6P+r/a8aHv7sf8fQv0aaD1xyod/VH/x56ta9n9G9pBy5bdtIWWKwfKnEfu3vX21//dKL/wzpNdtMfXDqXvWTwRCxIiJL/1j545WrMz7SXp8o/KjozICRb14k9ksuvVjdvKoWKi03LlZL2vnlsy1fXuu9AyO/lBwld2yVI4hG/FF/DA7vidD6tfPZN7pnqwDRfkqvjjRtUrx8+VRXsyP795XtA3q2nHPz6CfKVhk67MC3V56xxyq02G3Y0C2rQJWJY0MjtUD7XrJNoxaX6vcK7JGwPaNMXBKr0usW36kV2Vn33RJz4fmNAoqWkFVLNAxYoM3K16rV+qwkebGL5XfsSwOXWi4lC2YvrFXVZ5af786AqLlRwRTM/DNoUG+/kZnM36OQtWsvtGqRzb+xBcA2entILnYIK3aYVQl7tidVBcIf87BycvYw9yqTU42RV9A8Tw75lf4Om89Wf9rYo8g3RxcNgDtBFeui09bD4jyx4ydgEvCbZBkbtD1HVE5aXHk6EQE4ceMInxffWdvgl2j15sF1xX5mLAhx3YLEpQWFR4/QMDvYEfIGezw+4MxG+c0ulHRDIc0JSGY4gMjYCAYJfzDJOI+wMPfBpuEdOGRCQcBX+OwZMop18exG0Ch6sH8QHS+UaPSsynzDUCYjXU6J/0LJ0QNt1QwjD7igXGNB/g6dKgEJz3APl+E0MSThAZ1WvWo61DXNfVLleF6dcSNoFD3YP4iOF8o769no+98wlMnISskd9RdKjr1DWzUGxINwMZV8lsH5O3SqxJNIeIZ71OOkQYY0P2pAp1V/hj8dampFVmF1f/H8WncBAfIBvjBkypItR648+Qo47lfMkvu4yykux+nAMJXljMwSvBl68u3v1KC/Mhu2cXNlLkJcX6J32LJaAQAA') format('woff2'),
    url('./iconfont.woff?t=1576216665600') format('woff'),
    url('./iconfont.ttf?t=1576216665600') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1576216665600#iconfont') format('svg'); /* iOS 4.1- */
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

  .iconfanhuidingbu:before {
    content: "\e63d";
  }
`