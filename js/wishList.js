!function (){
    'use strict';
    //<editor-fold defaultstate="collapsed" desc="Angular App">
    var wishListApp = angular.module('wishListApp', ["ngRoute"]);
    wishListApp.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "mainCtrl",
                controllerAs: "vm",
                templateUrl: "views/budget.html"
            })
            .when("/wishList", {
                controller: "mainCtrl",
                controllerAs: "vm",
                templateUrl: "views/boughtItems.html"
            })
            .when("/boughtItems", {
                controller: "mainCtrl",
                controllerAs: "vm",
                templateUrl: "views/wishList.html"
            });
    });
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Controller">
    var mainCtrl = wishListApp.controller('mainCtrl', function ($scope) {
        this.algo = 'xD';
    });
    //</editor-fold>
    
}();