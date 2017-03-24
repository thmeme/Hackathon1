angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div class=\"container-hero\">\n" +
    "    <!--nav-->\n" +
    "    <nav id=\"menu\" class=\"navbar navbar-default navbar-fixed-top\">\n" +
    "        <div class=\"container\">\n" +
    "            <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "          <span class=\"glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\" style=\"color:#D70F64\"></span>\n" +
    "        </button>\n" +
    "                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "          <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\" style=\"color:#D70F64\"></span>\n" +
    "        </button>\n" +
    "                <!-- <a class=\"navbar-brand logo_navbar\" href=\"\"><img class=\"logo_navbar\" src=\"img/logo_nourristoi.png\" alt=\"\"></a> -->\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "            <div class=\"collapse navbar-collapse\">\n" +
    "                <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                    <li class=\"dropdown\">\n" +
    "                        <a href=\"#\" class=\"dropdown-toggle\" style=\"color:#D70F64\">Se connecter</a>\n" +
    "                        <ul class=\"dropdown-menu\">\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "\n" +
    "                <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                    <li class=\"dropdown\">\n" +
    "                        <a href=\"#\" class=\"dropdown-toggle\"><span class=\"glyphicon glyphicon-shopping-cart icon-cart\" aria-hidden=\"true\" style=\"color:#D70F64\"></span></a>\n" +
    "                        <ul class=\"dropdown-menu\">\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "\n" +
    "                <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                    <li class=\"dropdown\">\n" +
    "                        <a href=\"#\" class=\"dropdown-toggle\" style=\"color:#D70F64\">English</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "\n" +
    "            </div>\n" +
    "            <!-- /.navbar-collapse -->\n" +
    "        </div>\n" +
    "        <!-- /.container -->\n" +
    "    </nav>\n" +
    "    <header>\n" +
    "        <div class=\"row top-menu\">\n" +
    "            <div class=\"col-lg-8 col-md-offset-2\"><img class=\"logo animated flip\" src=\"../img/logo2.png\" alt=\"\">\n" +
    "                <h1>Webcamolidays</h1></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row top-menu menu-down-link\">\n" +
    "            <div class=\"col-lg-8 col-md-offset-2\"><a href=\"http://localhost:8000/#!/#scroll\"><span class=\"glyphicon glyphicon-menu-down menu-down animated infinite bounce\" aria-hidden=\"true\"></span></a></div>\n" +
    "        </div>\n" +
    "</div>\n" +
    "</header>\n" +
    "\n" +
    "<!-- End header-background -->\n" +
    "<div class=\"container-hero2\">\n" +
    "<div class=\"row top-menu\">\n" +
    "    <div class=\"col-lg-5 col-lg-offset-1\">\n" +
    "        <style>\n" +
    "            #map {\n" +
    "                height: 400px;\n" +
    "                width: 100%;\n" +
    "            }\n" +
    "        </style>\n" +
    "        <h3 id=\"scroll\">Choisissez votre destination</h3>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <div class=\"input-group input-field\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Je décide de partir à...\">\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-default\" type=\"button\">Go!</button>\n" +
    "        </span>\n" +
    "                </div>\n" +
    "                <!-- /input-group -->\n" +
    "            </div>\n" +
    "            <!-- /.col-lg-6 -->\n" +
    "        </div>\n" +
    "        <!-- /.row -->\n" +
    "        <div id=\"map\"></div>\n" +
    "        <script>\n" +
    "            function initMap() {\n" +
    "                var uluru = {\n" +
    "                    lat: -25.363,\n" +
    "                    lng: 131.044\n" +
    "                };\n" +
    "                var map = new google.maps.Map(document.getElementById('map'), {\n" +
    "                    zoom: 4,\n" +
    "                    center: uluru\n" +
    "                });\n" +
    "                var marker = new google.maps.Marker({\n" +
    "                    position: uluru,\n" +
    "                    map: map\n" +
    "                });\n" +
    "            }\n" +
    "        </script>\n" +
    "        <script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyAhq8jk58jNGy9rYP4LDkkPcgAOmsIzdqY&callback=initMap\">\n" +
    "        </script>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-5\">\n" +
    "        <h3>Profitez de la vue !</h3></div>\n" +
    "</div></div>\n" +
    "<div class=\"row top-menu footer\">\n" +
    "    <div class=\"col-lg-5 col-lg-offset-1\">\n" +
    "      <p>bla</p>\n" +
    "    </div>\n" +
    "  </div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    ""
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
