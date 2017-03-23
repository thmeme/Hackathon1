angular.module('app')
    .controller('MainController', function($scope, $http, NgMap) {
        /* He$re is your main controller */


        var url = 'https://webcamstravel.p.mashape.com/webcams/map/latne,lngne,latsw,lngsw,4?mashape-key=I5UFKNOdmpmshyUvG2eKchz6KJcTp1Dk9RPjsnbG7jZDqxpvFK&show=webcams:map,url,image,location';
        NgMap.getMap().then(function(map) {
            console.log(map.getBounds());
            var info = map.getBounds();
            var latne = (info.f.b).toFixed(3);
            var lngne = (info.f.f).toFixed(3);
            var latsw = (info.b.b).toFixed(3);
            var lngsw = (info.b.f).toFixed(3);
            console.log(latne);
            console.log(lngne);
            console.log(latsw);
            console.log(lngsw);

            $scope.listpoint = [];
            $http.get(`https://webcamstravel.p.mashape.com/webcams/map/+${latne},${lngne},${latsw},${lngsw},4?mashape-key=I5UFKNOdmpmshyUvG2eKchz6KJcTp1Dk9RPjsnbG7jZDqxpvFK&show=webcams:map,url,image,location`).then(function(res) {

                $scope.listpoint = res.data.result.webcams;
                console.log($scope.listpoint[0]);
              });


            });
        });
// https://webcamstravel.p.mashape.com/webcams/map/63.083,28.011,-37.833,39.861,4?mashape-key=I5UFKNOdmpmshyUvG2eKchz6KJcTp1Dk9RPjsnbG7jZDqxpvFK
// https://webcamstravel.p.mashape.com/webcams/map/63.084,28.012,-36.251,38.280,4?mashape-key=I5UFKNOdmpmshyUvG2eKchz6KJcTp1Dk9RPjsnbG7jZDqxpvFK&show=webcams:map,url,image,location
// https://webcamstravel.p.mashape.com/webcams/map/latne,lngne,latsw,lngsw,4?mashape-key=I5UFKNOdmpmshyUvG2eKchz6KJcTp1Dk9RPjsnbG7jZDqxpvFK&show=webcams:map,url,image,location
