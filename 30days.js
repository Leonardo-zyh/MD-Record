//15days

    function jsonp(url, data, callback) {
      return new Promise((resolve, reject) => {
        // console.log(url)
        // console.log(data)
        // console.log(callback)
        // 拼接url
        // 参数如果可选，则有以下几种调用方式 jsonp(url, null, callback) 或 jsonp(url, data, callback)
        // 对参数序列化
        if (data) {
          // 有参数时
          const paramStr = serilize(data) ? serilize(data) : ""
          url += "?jsoncallback=" + callback + paramStr
        } else {
          // 无参数时
          url += "?jsoncallback=" + callback
        }
        // 拼接url结束
        // console.log(url)
        // debugger
        var script = document.createElement("script")
        // 定义将被脚本执行的回调函数
        window[callback] = function (data) {
          console.log('success', data)
          resolve(data)
        }
        try {
          // 立即触发 HTTP 请求
          script.src = url
          document.body.appendChild(script)
        } catch (e) {
          reject(e)
        }
        finally {
          script.parentNode.removeChild(script)
        }
      })
    }

    function serilize(param) {
      if (Object.prototype.toString.call(param) === "[object Object]") {
        var str = ""
        for (let key in param) {
          // 同样要对属性值进行判断，待优化
          str += `&${key}=${param[key]}`
        }
        return str
      }
      alert("严肃点，请输入正经点儿的参数")
      return false
    }

    jsonp('http://photo.sina.cn/aj/index',
      {
        page: 1,
        cate: 'recommend'
      },
      'jsoncallback'
    ).then(
      data => {
        console.log(data)
      }
    ).catch(
      error => {
        console.error(err)
      }
    )
