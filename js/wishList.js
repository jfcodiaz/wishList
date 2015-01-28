!function () {
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
                .when("/boughtItems", {
                    controller: "mainCtrl",
                    controllerAs: "vm",
                    templateUrl: "views/boughtItems.html"
                })
                .when("/wishList", {
                    controller: "mainCtrl",
                    controllerAs: "vm",
                    templateUrl: "views/wishList.html"
                });
    });
    //</editor-fold>
    
    //<editor-fold defaultstate="collapsed" desc="init Factory">
    wishListApp.factory('factory', function () {
        var data = {
            budgetLimit: 30,
            wishs: []
        };
        var methods = {
            getBudgetLimit: function () {
                return data.budgetLimit;
            },
            setBudgetLimit: function (newLimit) {
                data.budgetLimit = parseInt(newLimit, 10);
                return this;
            },
            addWish: function (wish) {
                data.wishs.push(wish);
            },
            getWishs: function () {
                return data.wishs;
            }
        };
        return methods;
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="create onReadFile directive">
    //this directive is a folk from  http://jsfiddle.net/alexsuch/6aG4x/
    wishListApp.directive('onReadFile', function ($parse) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                var fn = $parse(attrs.onReadFile);
                element.on('change', function (onChangeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (onLoadEvent) {
                        scope.$apply(function () {
                            fn(scope, {
                                $fileContent: onLoadEvent.target.result
                            });
                        });
                    };
                    reader.readAsDataURL((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
                });
            }
        };
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="create timeago filtre">
    // thirdparty : http://jsfiddle.net/i_woody/cnL5T/
    wishListApp.filter('timeago', function() {
        return function(input, p_allowFuture) {                        
            var substitute = function (stringOrFunction, number, strings) {
                    var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, dateDifference) : stringOrFunction;
                    var value = (strings.numbers && strings.numbers[number]) || number;
                    return string.replace(/%d/i, value);
                },
                nowTime = (new Date()).getTime(),
                date = (new Date(input)).getTime(),
                //refreshMillis= 6e4, //A minute
                allowFuture = p_allowFuture || false,
                strings= {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years"
                },
                dateDifference = nowTime - date,
                words,
                seconds = Math.abs(dateDifference) / 1000,
                minutes = seconds / 60,
                hours = minutes / 60,
                days = hours / 24,
                years = days / 365,
                separator = strings.wordSeparator === undefined ?  " " : strings.wordSeparator,
            
                // var strings = this.settings.strings;
                prefix = strings.prefixAgo,
                suffix = strings.suffixAgo;
       
            if (allowFuture) {
                if (dateDifference < 0) {
                    prefix = strings.prefixFromNow;
                    suffix = strings.suffixFromNow;
                }
            }

            words = seconds < 45 && substitute(strings.seconds, Math.round(seconds), strings) ||
            seconds < 90 && substitute(strings.minute, 1, strings) ||
            minutes < 45 && substitute(strings.minutes, Math.round(minutes), strings) ||
            minutes < 90 && substitute(strings.hour, 1, strings) ||
            hours < 24 && substitute(strings.hours, Math.round(hours), strings) ||
            hours < 42 && substitute(strings.day, 1, strings) ||
            days < 30 && substitute(strings.days, Math.round(days), strings) ||
            days < 45 && substitute(strings.month, 1, strings) ||
            days < 365 && substitute(strings.months, Math.round(days / 30), strings) ||
            years < 1.5 && substitute(strings.year, 1, strings) ||
            substitute(strings.years, Math.round(years), strings);
            return $.trim([prefix, words, suffix].join(separator));
            // conditional based on optional argument
            // if (somethingElse) {
            //     out = out.toUpperCase();
            // }
            // return out;
        };
    });

    
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="create Animation reveal-animation">
//    wishListApp.animation('.reveal-animation', function() {
//    return {
//    enter: function(element, done) {
////      element.css('display', 'none');
//      element.fadeIn(300, done);
//      return function() {
//        element.stop();
//      }
//    },
//    leave: function(element, done) {
////      element.fadeOut(300, done)
//      return function() {
//        element.stop();
//      }
//    }
//  }
//})
    //</editor-fold>

    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Controller">
    var mainCtrl = wishListApp.controller('mainCtrl', function (factory) {
        
        this.budgetLimit = factory.getBudgetLimit();

        this.newWishTemp = {
            name: '',
            description: '',
            image: '#',
            price : 0
        };

        var $scope = this;
        $scope.file = 10;
        $scope.wishs = factory.getWishs();
        this.setBudgetLimit = function () {
            factory.setBudgetLimit($scope.budgetLimit);
        };

        this.getFile = function () {
            console.log('bind', $scope.file);
        };

        this.showContent = function (img) {
            $scope.newWishTemp.image = img;
        };
        
        this.openImg = function (e) {
            window.open(e.target.src, '_blank');
        };

        this.addNewWish = function () {
            var wishTemp = $scope.newWishTemp;
            var newWish = {
                name : wishTemp.name,
                description : wishTemp.description,
                image: wishTemp.image,
                price : wishTemp.price,
                createDate :  (new Date()).getTime(),
                status : 0
            };            
            factory.addWish(newWish);  
            console.log($scope.wishs);
            
        };
        
        this.buy = function ($e ,wish) {
             wish.status = 1;
        };
    });
    //</editor-fold>
}();

////2015-01-27 12:35 AM
//http://timeago.yarp.com/
//http://plnkr.co/edit/NO0Xqh?p=preview