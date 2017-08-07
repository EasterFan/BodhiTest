"use strict";
define(function (require, exports, module) {
    let page2 = {
        html:{
            content : $('.content')
        },
        fun:{},
        ajax:{},
        render:{
            init:function(){
                let tplData = {};
                tplData.title = '页面2';
                let html = template('tplPage',tplData);
                page2.html.content.html(html);
            }
        },
        control:{
            init:function () {}
        },
        init:function(){
            page2.render.init();
            page2.control.init();
        }
    };
    module.exports = page2;
});