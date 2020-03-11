var movieLists = [{
        name: "New Releases",
        videos: [{
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{
                    id: 432534,
                    time: 65876586
                }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [{
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{
                    id: 432534,
                    time: 65876586
                }]
            }
        ]
    }
];

Array.prototype.concatAll = function() {
    let results = [];
    this.forEach(function(subArray) {
        results.push.apply(results, subArray);
    })
    return results;
}

// Use map() and concatAll() to project and flatten the movieLists into an array of video ids
const arrVideoIds = movieLists.map(movie => movie.videos.map(video => video.id)).concatAll();
console.log(arrVideoIds);