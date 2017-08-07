/**
 * Created by easter on 17-8-7.
 */
"use strict";
define(function (require, exports, module) {
    let page_fdf = {
        html:{
            content : $('.content')
        },
        fun:{},
        ajax:{},
        render:{
            init:function(){
                let tplData = {};
                tplData.title = 'fdf';
                let html = template('tplFDF',tplData);
                page_fdf.html.content.html(html);
            }
        },
        control:{
            init:function () {}
        },
        init:function(){
            page_fdf.render.init();
            page_fdf.control.init();
        }
    };
    module.exports = page_fdf;
});