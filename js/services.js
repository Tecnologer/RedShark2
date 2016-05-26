var app=angular.module("sharkService",[]);

app.service('cnx', [function(){
	return{
		getSongs: function(){
			return songs;
		}
	}
}]);

var songs = [{
    id: 0,
    name: "La Bamba",
    artist: "Ritchie Valens",
    album: "La Bamba",
    img: "http://www.notnowmusic.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/i/richie-valens-la-bamba-2cd.jpg",
    duration: {
        min: 2,
        sec: 54
    }
},{
    id: 1,
    name: "Oh, Pretty Woman",
    artist: "Roy Orbison",
    album: "Oh, Pretty Woman",
    img: "http://saludosmelomano.com/wp-content/uploads/2014/10/Roy-Orbison.jpg",
    duration: {
        min: 3,
        sec: 3
    }
},{
    id: 2,
    name: "Stand By Me",
    artist: "Ben E King",
    album: "Stand By Me",
    img: "http://ecx.images-amazon.com/images/I/61oVl-3FbTL.jpg",
    duration: {
        min: 2,
        sec: 57
    }
},{
    id: 3,
    name: "Somewhere over the Rainbow",
    artist: "Israel \"IZ\" Kamakawiwoʻole",
    album: "Somewhere over the Rainbow",
    img: "https://pilgrin.files.wordpress.com/2012/08/israel_kamakawiwooleiz_somewhere_ove.jpg",
    duration: {
        min: 3,
        sec: 47
    }
}];