"use strict"


const seriesDb = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: true,
    start: function () {
        seriesDb.count = +prompt("Necha serial ko'rdingiz", '')

        while 
            (seriesDb.count == '' || 
            seriesDb.count == null || 
            isNaN(seriesDb.count)
        )   {
            seriesDb.count = +prompt("Necha serial ko'rdingiz", '');
        }
    },
    rememberMySeries: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("oxirgi ko'rgan serialingiz?"),
                b = prompt("Unga qancha baxo qo'yasiz?")
    
            if (a !== null && b !== null && a !== '' && b !== '') {
                seriesDb.series[a] = b;
                console.log("done!")
            } else {
                console.log("Error")
                i--
            }
        }
    },
    detectLevelSeries: function () {
        if (seriesDb.count < 5) {
            console.log("Kam serial ko'ribsiz")
        } else if (seriesDb.count >= 5 && seriesDb.count < 10) {
            console.log("Siz klassik tomoshabinsiz")
        } else if (seriesDb.count >= 10) {
            console.log('Siz ashaddiy muxlis ekansiz')
        } else {
            console.log('Error')
        }
    },
    showDb: function () {
        if(!seriesDb.private) {
            console.log(seriesDb)
        }
    },
    visibleDb: function () {
        if(seriesDb.private) {
            seriesDb.private = false
        } else {
            seriesDb.private = true
        }
    },
    writeGenres: function () {
        for(let i = 0; i < 3; i++) {
            const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`, '')
            if(genre === '' || genre === null) {
                console.log("Xatolik")
                i--
            } else {
                seriesDb.genres[i] = genre;
            }
        }
    },
}