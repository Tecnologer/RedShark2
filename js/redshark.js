var app = angular.module("redshark", ["lumx", "sharkFactory","sharkService"]);

app.controller('ctrlBody', ['$scope', "fnc","$interval","cnx",
    function($scope, $sf, $i,cnx) {
        var _pgsTimer=undefined;

        $scope.cultures = [{
            code: "es",
            des: "Español"
        }, {
            code: "en",
            des: "English"
        }];
        $scope.songs = cnx.getSongs();
        $scope.songIndex = 0;
        $scope.song=$scope.songs[$scope.songIndex];
		$scope.stoped = true;
        $scope.currentSec = millisToMinutesAndSeconds(0);
        $scope.currentSecAux = 0;
        $scope.progress = 0;
        var audio = document.getElementById("tagAudio");

        $scope.language = $scope.cultures[0];

        $scope.$watch("language", function(current) {
            $scope.lang = $sf.getLanguage(current.code);
        });

        $scope.setLanguage = function(cl) {
            $scope.language = cl;
        };

        $scope.play=function(){
            if(_pgsTimer)
                $i.cancel(_pgsTimer);
            var mili=($scope.currentSong.duration.min*60000)+($scope.currentSong.duration.sec*1000);
            
        	$scope.playing=false;
        	$scope.stoped=false;
            audio.play();
	        _pgsTimer = $i(function() {
	        	$scope.progress = ($scope.currentSecAux / mili)*100;
	        	$scope.currentSecAux+=1000;
	        	$scope.currentSec=millisToMinutesAndSeconds($scope.currentSecAux);
	        	// $scope.total = millisToMinutesAndSeconds(mili);
	        	if($scope.progress>=100)
	        		$scope.changeSong(1);

	        }, 1000, 0);        	
        };

        $scope.pause=function(){
            $scope.playing=true;
            $scope.stoped=false;
        	$i.cancel(_pgsTimer);

            audio.pause();
        };

        $scope.stop=function(){
        	$sf.clearInterval(_pgsTimer);
        	$scope.currentSec = millisToMinutesAndSeconds(0);
        	$scope.currentSecAux = 0;
        	$scope.progress = 0;
            $scope.stoped=true;
        };

        $scope.changeSong=function(val){
            var flag=$scope.songIndex+val;

            if(val==-1 && flag<0)
                $scope.songIndex=$scope.songs.length-1;
            else if(val==1 && flag>=$scope.songs.length)
                $scope.songIndex=0;
            else
                $scope.songIndex+=val;
        };

        $scope.setPositionTime=function(e){
            var pos=(e.offsetX/$(e.currentTarget).width());
            var mili=($scope.currentSong.duration.min*60000)+($scope.currentSong.duration.sec*1000);
            
            $scope.currentSecAux=mili*pos;
            $scope.progress = ($scope.currentSecAux / mili)*100;
            $scope.currentSec=millisToMinutesAndSeconds($scope.currentSecAux);
            
            audio.currentTime = mili / 1000;
            audio.play();

            if(_pgsTimer)
                $scope.play();
        };

        $scope.$watch("songIndex",function(i,iLast){
            $scope.currentSong = $scope.songs[i];
            $scope.stop();

            $scope.song=$scope.songs[$scope.songIndex];            
        });

        $scope.$watch("song", function(current) {
            if (current && current.src) {                
                audio.src = current.src;
                audio.load();
                audio.play();

                $scope.play();
            }
        });
    }
]);

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

app.filter('numberFixedLeft', function() {
    return function(n, len) {
        var num = parseInt(n, 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = '' + num;
        while (num.length < len) {
            num = '0' + num;
        }
        return num;
    };
});