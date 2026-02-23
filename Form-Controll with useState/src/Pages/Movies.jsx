import React from 'react'

function Movies() {

    //Movies Array object
    const MoviesArray=[
        {
            "id": 98,
            "title": "Cloud Atlas",
            "year": "2012",
            "runtime": "172",
            "genres": [
                "Drama",
                "Sci-Fi"
            ],
            "director": "Tom Tykwer, Lana Wachowski, Lilly Wachowski",
            "actors": "Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving",
            "plot": "An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg"
        },
        {
            "id": 99,
            "title": "The Impossible",
            "year": "2012",
            "runtime": "114",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "director": "J.A. Bayona",
            "actors": "Naomi Watts, Ewan McGregor, Tom Holland, Samuel Joslin",
            "plot": "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg"
        },
        {
            "id": 100,
            "title": "All Quiet on the Western Front",
            "year": "1930",
            "runtime": "136",
            "genres": [
                "Drama",
                "War"
            ],
            "director": "Lewis Milestone",
            "actors": "Louis Wolheim, Lew Ayres, John Wray, Arnold Lucy",
            "plot": "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM5OTg2NDY1NF5BMl5BanBnXkFtZTcwNTQ4MTMwNw@@._V1_SX300.jpg"
        },
        {
            "id": 101,
            "title": "The English Patient",
            "year": "1996",
            "runtime": "162",
            "genres": [
                "Drama",
                "Romance",
                "War"
            ],
            "director": "Anthony Minghella",
            "actors": "Ralph Fiennes, Juliette Binoche, Willem Dafoe, Kristin Scott Thomas",
            "plot": "At the close of WWII, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDg2OTcxNDE0OF5BMl5BanBnXkFtZTgwOTg2MDM0MDE@._V1_SX300.jpg"
        },
        {
            "id": 102,
            "title": "Dallas Buyers Club",
            "year": "2013",
            "runtime": "117",
            "genres": [
                "Biography",
                "Drama"
            ],
            "director": "Jean-Marc Vallée",
            "actors": "Matthew McConaughey, Jennifer Garner, Jared Leto, Denis O'Hare",
            "plot": "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg"
        },
        {
            "id": 103,
            "title": "Frida",
            "year": "2002",
            "runtime": "123",
            "genres": [
                "Biography",
                "Drama",
                "Romance"
            ],
            "director": "Julie Taymor",
            "actors": "Salma Hayek, Mía Maestro, Alfred Molina, Antonio Banderas",
            "plot": "A biography of artist Frida Kahlo, who channeled the pain of a crippling injury and her tempestuous marriage into her work.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTMyODUyMDY1OV5BMl5BanBnXkFtZTYwMDA2OTU3._V1_SX300.jpg"
        },
        {
            "id": 104,
            "title": "Before Sunrise",
            "year": "1995",
            "runtime": "105",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Richard Linklater",
            "actors": "Ethan Hawke, Julie Delpy, Andrea Eckert, Hanno Pöschl",
            "plot": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMTM3MTQxMl5BMl5BanBnXkFtZTcwMDAzNjQ4Mg@@._V1_SX300.jpg"
        },
        {
            "id": 105,
            "title": "The Rum Diary",
            "year": "2011",
            "runtime": "120",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "director": "Bruce Robinson",
            "actors": "Johnny Depp, Aaron Eckhart, Michael Rispoli, Amber Heard",
            "plot": "American journalist Paul Kemp takes on a freelance job in Puerto Rico for a local newspaper during the 1960s and struggles to find a balance between island culture and the expatriates who live there.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5ODA4MjYxM15BMl5BanBnXkFtZTcwMTM3NTE5Ng@@._V1_SX300.jpg"
        },
        {
            "id": 106,
            "title": "The Last Samurai",
            "year": "2003",
            "runtime": "154",
            "genres": [
                "Action",
                "Drama",
                "History"
            ],
            "director": "Edward Zwick",
            "actors": "Ken Watanabe, Tom Cruise, William Atherton, Chad Lindberg",
            "plot": "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg"
        },
        {
            "id": 107,
            "title": "Chinatown",
            "year": "1974",
            "runtime": "130",
            "genres": [
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "director": "Roman Polanski",
            "actors": "Jack Nicholson, Faye Dunaway, John Huston, Perry Lopez",
            "plot": "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyNDE5NzItMjAwNC00MGQxLTllNjktZGIzMWFkZjA3OWQ0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 108,
            "title": "Calvary",
            "year": "2014",
            "runtime": "102",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "director": "John Michael McDonagh",
            "actors": "Brendan Gleeson, Chris O'Dowd, Kelly Reilly, Aidan Gillen",
            "plot": "After he is threatened during a confession, a good-natured priest must battle the dark forces closing in around him.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MjQ1MjE2M15BMl5BanBnXkFtZTgwNTMzNjE4MTE@._V1_SX300.jpg"
        },
        {
            "id": 109,
            "title": "Before Sunset",
            "year": "2004",
            "runtime": "80",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Richard Linklater",
            "actors": "Ethan Hawke, Julie Delpy, Vernon Dobtcheff, Louise Lemoine Torrès",
            "plot": "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_SX300.jpg"
        },
        {
            "id": 110,
            "title": "Spirited Away",
            "year": "2001",
            "runtime": "125",
            "genres": [
                "Animation",
                "Adventure",
                "Family"
            ],
            "director": "Hayao Miyazaki",
            "actors": "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô",
            "plot": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_SX300.jpg"
        },
        {
            "id": 111,
            "title": "Indochine",
            "year": "1992",
            "runtime": "159",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Régis Wargnier",
            "actors": "Catherine Deneuve, Vincent Perez, Linh Dan Pham, Jean Yanne",
            "plot": "This story is set in 1930, at the time when French colonial rule in Indochina is ending. A widowed French woman who works in the rubber fields, raises a Vietnamese princess as if she was ...",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MTkzNzA3NF5BMl5BanBnXkFtZTYwNTI2MzU5._V1_SX300.jpg"
        },
        {
            "id": 112,
            "title": "Birdman or (The Unexpected Virtue of Ignorance)",
            "year": "2014",
            "runtime": "119",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Alejandro G. Iñárritu",
            "actors": "Michael Keaton, Emma Stone, Kenny Chin, Jamahl Garrison-Lowe",
            "plot": "Illustrated upon the progress of his latest Broadway play, a former popular actor's struggle to cope with his current life as a wasted actor is shown.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg"
        },
    ]

  return (
    <div className='w-full p-10 flex gap-3 flex-wrap'>
      {
        MoviesArray.map((data,index)=>(
            <div className='w-[170px] relative  h-[260px] overflow-hidden border-2 p-2 rounded-md'>
                <div className='w-full h-[170px] overflow-hidden'>
                    <img src={data.posterUrl} alt="" className='object-cover w-full h-full' />
                </div>
                <h1 className='text-xl line-clamp-1 text-blue-500 font-bold'>{data.title}</h1>
                <p className='line-clamp-2 text-xs'>{data.plot}</p>
                <button className='p-2 top-[75px] left-8 absolute bg-red-600/6 text-white rounded-md'>Watch Now</button>
            </div>
        ))
      }
    </div>
  )
}

export default Movies
