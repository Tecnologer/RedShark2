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
    src: "content/songs/Ritchie Valens/The Real Ritchie Valens - La Bamba.mp3",
    duration: {
        min: 2,
        sec: 3
    }
},{
    id: 1,
    name: "Oh, Pretty Woman",
    artist: "Roy Orbison",
    album: "Oh, Pretty Woman",
    img: "http://saludosmelomano.com/wp-content/uploads/2014/10/Roy-Orbison.jpg",
    src: "content/songs/Roy Orbison/OH, PRETTY WOMEN - ROY ORBISON.mp3",
    duration: {
        min: 2,
        sec: 57
    }
},{
    id: 2,
    name: "Stand By Me",
    artist: "Ben E King",
    album: "Stand By Me",
    img: "http://ecx.images-amazon.com/images/I/61oVl-3FbTL.jpg",
    src: "content/songs/Ben E King/Stand By Me Ben E King 1961.mp3",
    duration: {
        min: 2,
        sec: 58
    }
},{
    id: 3,
    name: "Somewhere over the Rainbow",
    artist: "Israel \"IZ\" Kamakawiwoʻole",
    album: "Somewhere over the Rainbow",
    img: "https://pilgrin.files.wordpress.com/2012/08/israel_kamakawiwooleiz_somewhere_ove.jpg",
    src: "content/songs/Israel IZ Kamakawiwoʻole/Somewhere over the Rainbow - Israel IZ Kamakawiwo-ole.mp3",
    duration: {
        min: 3,
        sec: 47
    }
},{
    id: 4,
    name: "Grenade",
    artist: "Rammstein",
    album: "Somewhere over the Rainbow",
    img: "https://i.pinimg.com/originals/b8/5e/8a/b85e8ad5e406f883031d79ca30220c2c.jpg",
    src: "content/songs/rammstein/Grenade.mp3",
    duration: {
        min: 3,
        sec: 43
    }
}];