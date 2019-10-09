(function (window) {
    var screenWidth = document.documentElement.clientWidth || document.body.clientWidth
    var baseSize = screenWidth / 10
    var htmlTag = document.getElementsByTagName('html')[0]
    var htmlSize = (baseSize >= 75? 75: baseSize)
    
    htmlTag.style.fontSize = htmlSize + 'px'
    var computedSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize)
    if (htmlSize != computedSize) {
      htmlTag.style.fontSize = htmlSize * htmlSize / computedSize + 'px'
    }
  })(window);