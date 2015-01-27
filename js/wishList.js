!function (){
    'use strict';
    //<editor-fold defaultstate="collapsed" desc="Angular App">
    var wishListApp = angular.module('wishListApp', ["ngRoute"]);
        //<editor-fold defaultstate="collapsed" desc="init Routing">
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
        //<editor-fold defaultstate="collapsed" desc="init Factory">
            wishListApp.factory('factory', function () {
                var data = {
                    budgetLimit : 30
                };
                var methods = {
                    getBudgetLimit : function () {
                        return data.budgetLimit;
                    },
                    setBudgetLimit : function (newLimit) {
                        data.budgetLimit = parseInt(newLimit, 10);
                        return this;
                    }
                };
                return methods;
            });
        //</editor-fold>

    
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="Controller">
    var mainCtrl = wishListApp.controller('mainCtrl', function (factory) {
        this.budgetLimit =  factory.getBudgetLimit();
        var $scope = this;
        this.setBudgetLimit = function () {
            factory.setBudgetLimit($scope.budgetLimit);
        };
    });
    //</editor-fold>
    
}();