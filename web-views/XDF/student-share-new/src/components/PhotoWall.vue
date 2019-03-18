<template>
  <div id="photo-wall">
    <ul id="photo-wall-ul">
      <li>
        <img src="../assets/imgs/photowall/01.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/02.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/03.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/04.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/05.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/06.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/07.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/08.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/09.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/10.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/11.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/12.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/13.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/14.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/15.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/16.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/17.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/18.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/19.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/20.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/21.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/22.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/23.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/24.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/25.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/26.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/27.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/28.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/29.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/30.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/31.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/32.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/33.jpg">
      </li>

      <li>
        <img src="../assets/imgs/photowall/34.jpg">
      </li>
      <li>
        <img src="../assets/imgs/photowall/35.jpg">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PhotoWallComponent",
  data() {
    return {};
  },
  created() {},
  mounted() {
    let ulElement = document.getElementById("photo-wall-ul");
    let liElementList = ulElement.children;

    if (liElementList && liElementList.length > 0) {
      for (let i = 0; i < liElementList.length; i++) {
        let li = liElementList[i];
        li.style.width = `${ulElement.offsetWidth / 7}px`;
        li.style.height = `${ulElement.offsetWidth / 7}px`;
      }

      this.render(liElementList);
    }
  },
  methods: {
    render(aLi) {
      var zIndex = 1;

      // 布局转换
      var aPos = [];
      for (var i = 0; i < aLi.length; i++) {
        aPos.push({
          left: aLi[i].offsetLeft,
          top: aLi[i].offsetTop
        });
      }

      for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.position = "absolute";
        aLi[i].style.left = aPos[i].left + "px";
        aLi[i].style.top = aPos[i].top + "px";
        aLi[i].style.margin = 0;
      }

      // 随机换位

      aPos.sort(function() {
        return Math.random() - 0.5;
      });

      for (var i = 0; i < aLi.length; i++) {
        this.move(aLi[i], aPos[i]);
      }
    },

    move(obj, json, options) {
      var Tween = {
        Linear: function(t, b, c, d) {
          return (c * t) / d + b;
        },
        Quad: {
          easeIn: function(t, b, c, d) {
            return c * (t /= d) * t + b;
          },
          easeOut: function(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
          },
          easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return (c / 2) * t * t + b;
            }
            return (-c / 2) * (--t * (t - 2) - 1) + b;
          }
        },
        Cubic: {
          easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t + b;
          },
          easeOut: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
          },
          easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return (c / 2) * t * t * t + b;
            }
            return (c / 2) * ((t -= 2) * t * t + 2) + b;
          }
        },
        Quart: {
          easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
          },
          easeOut: function(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
          },
          easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return (c / 2) * t * t * t * t + b;
            }
            return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
          }
        },
        Quint: {
          easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
          },
          easeOut: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          },
          easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return (c / 2) * t * t * t * t * t + b;
            }
            return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
          }
        },
        Sine: {
          easeIn: function(t, b, c, d) {
            return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
          },
          easeOut: function(t, b, c, d) {
            return c * Math.sin((t / d) * (Math.PI / 2)) + b;
          },
          easeInOut: function(t, b, c, d) {
            return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
          }
        },
        Expo: {
          easeIn: function(t, b, c, d) {
            return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
          },
          easeOut: function(t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
          },
          easeInOut: function(t, b, c, d) {
            if (t == 0) {
              return b;
            }
            if (t == d) {
              return b + c;
            }
            if ((t /= d / 2) < 1) {
              return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
            }
            return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
          }
        },
        Circ: {
          easeIn: function(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
          },
          easeOut: function(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
          },
          easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
            }
            return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
          }
        },
        Elastic: {
          easeIn: function(t, b, c, d, a, p) {
            if (t == 0) {
              return b;
            }
            if ((t /= d) == 1) {
              return b + c;
            }
            if (!p) {
              p = d * 0.3;
            }
            if (!a || a < Math.abs(c)) {
              a = c;
              var s = p / 4;
            } else {
              var s = (p / (2 * Math.PI)) * Math.asin(c / a);
            }
            return (
              -(
                a *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * d - s) * (2 * Math.PI)) / p)
              ) + b
            );
          },
          easeOut: function(t, b, c, d, a, p) {
            if (t == 0) {
              return b;
            }
            if ((t /= d) == 1) {
              return b + c;
            }
            if (!p) {
              p = d * 0.3;
            }
            if (!a || a < Math.abs(c)) {
              a = c;
              var s = p / 4;
            } else {
              var s = (p / (2 * Math.PI)) * Math.asin(c / a);
            }
            return (
              a *
                Math.pow(2, -10 * t) *
                Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
              c +
              b
            );
          },
          easeInOut: function(t, b, c, d, a, p) {
            if (t == 0) {
              return b;
            }
            if ((t /= d / 2) == 2) {
              return b + c;
            }
            if (!p) {
              p = d * (0.3 * 1.5);
            }
            if (!a || a < Math.abs(c)) {
              a = c;
              var s = p / 4;
            } else {
              var s = (p / (2 * Math.PI)) * Math.asin(c / a);
            }
            if (t < 1) {
              return (
                -0.5 *
                  (a *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
                b
              );
            }
            return (
              a *
                Math.pow(2, -10 * (t -= 1)) *
                Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
                0.5 +
              c +
              b
            );
          }
        },
        Back: {
          easeIn: function(t, b, c, d, s) {
            if (s == undefined) {
              s = 1.70158;
            }
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
          },
          easeOut: function(t, b, c, d, s) {
            if (s == undefined) {
              s = 1.70158;
            }
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
          },
          easeInOut: function(t, b, c, d, s) {
            if (s == undefined) {
              s = 1.70158;
            }
            if ((t /= d / 2) < 1) {
              return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            }
            return (
              (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
            );
          }
        },
        Bounce: {
          easeIn: function(t, b, c, d) {
            return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
          },
          easeOut: function(t, b, c, d) {
            if ((t /= d) < 1 / 2.75) {
              return c * (7.5625 * t * t) + b;
            } else {
              if (t < 2 / 2.75) {
                return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
              } else {
                if (t < 2.5 / 2.75) {
                  return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
                } else {
                  return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
                }
              }
            }
          },
          easeInOut: function(t, b, c, d) {
            if (t < d / 2) {
              return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;
            } else {
              return (
                Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
              );
            }
          }
        }
      };
      options = options || {};
      var duration = options.duration || 500;
      var easing = options.easing || Tween.Linear;

      var start = {};
      var dis = {};
      for (var name in json) {
        start[name] = parseFloat(this.getStyle(obj, name));
        dis[name] = json[name] - start[name];
      }
      var count = Math.floor(duration / 30);
      var n = 0;

      clearInterval(obj.timer);
      obj.timer = setInterval(function() {
        n++;

        // 更改样式
        for (var name in json) {
          var cur = easing(
            (duration * n) / count,
            start[name],
            dis[name],
            duration
          );

          if (name == "opacity") {
            obj.style[name] = cur;
          } else {
            obj.style[name] = cur + "px";
          }
        }

        if (n == count) {
          clearInterval(obj.timer);
          options.complete && options.complete();
        }
      }, 30);
    },

    getStyle(obj, sName) {
      return (obj.currentStyle || getComputedStyle(obj, false))[sName];
    }
  }
};
</script>

<style scoped>
#photo-wall {
  width: 100%;
}

ul {
  width: 100%;
}
li {
  float: left;
}

img {
  width: 100%;
}
</style>


