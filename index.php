<!DOCTYPE html>
<html ng-app="wishListApp" >
    <head>
        <meta charset="UTF-8">
        <title>Angular WishList</title>
    </head>
    <body ng-controller="mainCtrl as vm">
        <nav>
            <ul>
                <li><a href="#/">Budget</a></li>
                <li><a href="#/wishList">My wishlist items</a></li>
                <li><a href="#/boughtItems">My bought items</a></li>
            </ul>
        </nav>
        <div ng-view class="reveal-animation"></div>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.24/angular.min.js"></script>
        <script src ="http://code.angularjs.org/1.2.0-rc.2/angular-animate.js" type="text/javascript" charset="utf-8"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.24/angular-route.js"></script>
        <script src="js/wishList.js"></script>
    </body>
</html>
