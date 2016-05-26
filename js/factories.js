var app=angular.module("sharkFactory",[]);

app.factory('fnc', ["$interval", function($interval){
	return {
		getLanguage: function(culture){
			culture= culture || navigator.language || navigator.userLanguage || "es";
			culture = culture.substring(0,2);

			if(!(culture in _LANG_))
				culture="es";

			return _LANG_[culture];
		},
		interval: function(callback,delay,count){
			if(!callback)
				return;

			delay = delay || 100;
			count = count || 1;

			return $interval(callback,delay,count);
		},
		clearInterval: function(timer){
			$interval.cancel(timer);
		}
	};
}]);

var _LANG_ = {
	"es": {
		lblPlay: "Reproducir",
		lblLanguage: "Idioma",
		lblPrevious: "Cancion anterior",
		lblNext: "Cancion siguiente",
		lblPause: "Pausar reproduccion",
		lblStop: "Detener reproduccion"
	},
	"en": {
		lblPlay: "Play",
		lblLanguage: "Language",
		lblPrevious: "Previous song",
		lblNext: "Next song",
		lblPause: "Pause",
		lblStop: "Stop"
	}
}