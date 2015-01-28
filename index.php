<!DOCTYPE html>
<html ng-app="wishListApp" >
    <head>
        <meta charset="UTF-8">
        <title>Angular WishList</title>
        <link href="css/styles.css" rel="stylesheet" type="text/css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--[if gte IE 9]>
        <style type="text/css">
          .gradient {
             filter: none;
          }
        </style>
      <![endif]-->
    </head>
    <body ng-controller="mainCtrl as vm">
        <nav>
            <ul>
                <li><a href="#/">Budget</a></li>
                <li><a href="#/wishList">My wishlist items</a></li>
                <li><a href="#/boughtItems">My bought items</a></li>
            </ul>
        </nav>
        <div ng-view class="content"></div>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.24/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.24/angular-route.js"></script>
        <script src="js/wishList.js"></script>
    </body>
</html>
