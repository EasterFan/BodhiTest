"use strict";
define(function (require, exports, module) {
    let service = {
        root : 'http://localhost:3000/',
        Movies : {
            //获取所有电影
            getAllMovies : function () {
                return service.root + "movies"
            },
            //根据电影名字查询电影信息
            getMovieByName : function (movieName) {
                return service.root + "movies/title/" + movieName
            },
            //根据电影名字查询电影信息
            getMovieById : function (movieId) {
                return service.root + "movies/id/" + movieId
            },
            //根据电影名字查询电影分页信息(模糊)(分页)
            getPageMoviesByName : function (movieName) {
                return service.root + "movies/title/" + movieName
            },
            //根据分类id查询电影
            getMoviesByGenreId : function (genreId) {
                return service.root + "movies/genre/" + genreId
            },
            //获取所有电影(分页)
            getMoviesByPage : function () {
                return service.root + "movies/page"
            },
        }
    };
    module.exports = service;
});