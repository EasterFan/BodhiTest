"use strict";
define(function (require, exports, module) {
    let page1 = {
        html:{
            content : $('.content')
        },
        fun:{},
        ajax:{},
        render:{
            init:function(){
                let tplData = {};
                tplData.title = '页面1';
                let html = template('tplPage',tplData);
                page1.html.content.html(html);
            }
        },
        control:{
            init:function () {}
        },
        init:function(){
            page1.render.init();
            page1.control.init();
        }
    };
    module.exports = page1;
});