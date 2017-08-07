"use strict";
define(function (require, exports, module) {
    let service = require('./service');
    let masterPage = {
        html:{},
        fun:{},
        ajax:{},
        render:{
            init:function(){

            }
        },
        control:{
            init:function () {}
        },
        router:{
            init : function () {
                //监听hash变化调整页面
                window.addEventListener('hashchange',function(){
                    let hash = document.location.hash;
                    if(hash.indexOf('#page/') > -1){
                        let url = './PageControl/';
                        let index = hash.indexOf('/');
                        url += hash.slice(index+1);
                        require([url], function (application) {
                            application.init();
                        },function () {
                            $(".content").html("");
                            layer.alert("该功能还在开发中",{icon:0});
                        });
                    }
                });
            }
        },
        init:function(){
            masterPage.render.init();
            masterPage.control.init();
            masterPage.router.init();
        }
    };
    masterPage.init();
});