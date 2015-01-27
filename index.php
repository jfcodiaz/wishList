<?php
//2015-01-27 12:35 AM
?><!DOCTYPE html>
<html ng-app="wishListApp" >
    <head>
        <meta charset="UTF-8">
        <title>Angular WishList</title>
    </head>
    <body ng-controller="mainCtrl as vm">
        <nav>
            <ul>
                <li><a href="#/">Budgeti</a></li>
                <li><a href="#/wishList">My wishlist items</a></li>
                <li><a href="#/boughtItems">My bought items</a></li>
            </ul>
        </nav>
        <div ng-view=""></div>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.24/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.24/angular-route.js"></script>
        <script src="js/wishList.js"></script>
    </body>
</html>
