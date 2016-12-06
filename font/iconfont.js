;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-warning" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1016.992 855.408l0.288-0.176-464-752-0.288 0.16C544.624 89.44 529.472 80 512 80c-16.832 0-31.568 8.688-40.144 21.792l-0.272-0.16-464 752 0.272 0.16C2.928 861.344 0 870.32 0 880c0 26.512 21.488 48 48 48 0.144 0 0.288-0.048 0.432-0.048l0 0.48 928 0 0-0.48C1002.736 927.712 1024 906.368 1024 880 1024 870.976 1021.36 862.624 1016.992 855.408zM512 832c-35.344 0-64-28.656-64-64s28.656-64 64-64 64 28.656 64 64S547.344 832 512 832zM576 592c0 35.344-28.656 64-64 64s-64-28.656-64-64L448 352c0-35.344 28.656-64 64-64s64 28.656 64 64L576 592z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-error" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512c283.306667 0 512-228.693333 512-512S795.306667 0 512 0zM723.626667 665.6c23.893333 23.893333 23.893333 61.44 0 81.92-23.893333 23.893333-61.44 23.893333-81.92 0L512 600.746667 382.293333 750.933333c-23.893333 23.893333-61.44 23.893333-81.92 0s-23.893333-61.44 0-81.92l136.533333-153.6-136.533333-153.6C276.48 334.506667 276.48 296.96 300.373333 273.066667c23.893333-23.893333 61.44-23.893333 81.92 0l129.706667 150.186667L641.706667 273.066667c23.893333-23.893333 61.44-23.893333 81.92 0 23.893333 23.893333 23.893333 61.44 0 81.92l-136.533333 153.6L723.626667 665.6z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-success" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.996387 9.862132c-277.328216 0-502.134255 224.813265-502.134255 502.137868 0 277.328216 224.80604 502.137868 502.134255 502.137868 277.320991 0 502.137868-224.809652 502.137868-502.137868C1014.137868 234.675397 789.320991 9.862132 511.996387 9.862132L511.996387 9.862132zM824.889692 388.748635l-351.388132 338.834686c-4.670966 4.663741-9.952445 8.337656-15.587949 11.028971-22.065166 15.761349-52.915939 13.75641-72.730516-6.061779l-150.897848-150.897848c-22.065166-22.065166-22.065166-57.832555 0-79.883271 22.054329-22.065166 57.821717-22.065166 79.886884 0l113.291695 113.28447 317.531758-306.192112c22.061554-22.061554 57.832555-22.061554 79.883271 0C846.954858 330.919692 846.954858 366.687081 824.889692 388.748635L824.889692 388.748635zM824.889692 388.748635"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-warning1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0C229.248 0 0 229.248 0 512c0 282.752 229.248 512 512 512 282.752 0 512-229.248 512-512C1024 229.248 794.752 0 512 0zM512 832c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64S547.2 832 512 832zM576 521.152C576 551.296 547.2 576 512 576S448 551.296 448 521.152L448 246.848C448 216.704 476.8 192 512 192s64 24.704 64 54.848L576 521.152z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
