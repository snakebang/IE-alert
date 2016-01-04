        window.onload = function() {
            var text1 = document.createTextNode("很抱歉您的IE浏览器版本过低，请更新您的IE浏览器或者下载现代浏览器，如："),
                text2 = document.createTextNode("Chrome谷歌浏览器 "),
                text3 = document.createTextNode("Firefox火狐浏览器 "),
                text4 = document.createTextNode("Opera浏览器 "),
                text5 = document.createTextNode("了解更多..."),
                text6 = document.createTextNode("提示您：浏览器版本过低会使网页显示失常甚至失效！");
            var _div = document.createElement("div"),
                h1 = document.createElement("h4"),
                h2 = document.createElement("h4"),
                h3 = document.createElement("h5"),
                a1 = document.createElement("a"),
                a2 = document.createElement("a"),
                a3 = document.createElement("a"),
                a4 = document.createElement("a");
            h1.appendChild(text1);
            a1.appendChild(text2);
            a2.appendChild(text3);
            a3.appendChild(text4);
            a4.appendChild(text5);
            h3.appendChild(text6);
            h2.appendChild(a1);
            h2.appendChild(a2);
            h2.appendChild(a3);
            h2.appendChild(a4);
            _div.appendChild(h1);
            _div.appendChild(h2);
            _div.appendChild(h3);
            a1.style.textDecoration = "none";
            a2.style.textDecoration = "none";
            a3.style.textDecoration = "none";
            a4.style.textDecoration = "none";
            a1.href = "http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html";
            a2.href = "http://www.firefox.com.cn/";
            a3.href = "http://www.opera.com/zh-cn";
            a4.href = "http://rj.baidu.com/soft/lists/3";
            h1.align = "center";
            h2.align = "center";
            h3.align = "center";
            _div.style.position = "absolute";
            _div.style.top = "0px";
            _div.style.width = "100%";
            _div.style.color = "#fff";
            _div.style.backgroundColor = "#333";
            document.body.appendChild(_div);
        }