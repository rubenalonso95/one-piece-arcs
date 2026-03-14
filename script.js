// Función para generar imágenes de One Piece funcionales
function getCharacterImage(characterName, index) {
    // Colores temáticos de One Piece para cada personaje
    const colors = [
        "FF6B6B", "4ECDC4", "45B7D1", "FFA07A", "98D8C8", "FFD93D", "6BCF7F", "C06C84",
        "FF8C94", "FFD3B6", "FFAAA5", "FF8B94", "A8E6CF", "DCEDC1", "FFD3B6", "FFAAA5",
        "B4A7D6", "8EE4AF", "5CDB95", "379683", "2E86AB", "A23B72", "F18F01", "C73E1D"
    ];
    
    const colorIndex = index % colors.length;
    const color = colors[colorIndex];
    
    // Crear un placeholder simple y confiable
    return `https://via.placeholder.com/300x250/${color}/FFFFFF?text=${encodeURIComponent(characterName)}`;
}

// Base de datos de One Piece - Arcos y Personajes
const onePieceData = {
    arcs: [
        {
            id: "romance-dawn",
            name: "Romance Dawn Arc",
            description: "El comienzo de la aventura de Luffy",
            characters: [
                {
                    name: "Monkey D. Luffy",
                    image: "https://static.wikia.nocookie.net/onepiece/images/c/c3/Monkey_D._Luffy_Anime_Debut_Infobox.png/revision/latest?cb=20260214082949&path-prefix=es",
                    affiliation: "Piratas de Sombrero de Paja",
                    devilFruit: "Gomu Gomu no Mi (Fruta Gomu Gomu)"
                },
                {
                    name: "Roronoa Zoro",
                    image: "https://static.wikia.nocookie.net/onepiece/images/c/ca/Roronoa_Zoro_Anime_Debut_Infobox.png/revision/latest?cb=20240826010559&path-prefix=es",
                    affiliation: "Piratas de Sombrero de Paja",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Koby",
                    image: "https://static.wikia.nocookie.net/onepiece/images/c/c3/Koby_Anime_Debut_Infobox.png/revision/latest?cb=20131027040701&path-prefix=es",
                    affiliation: "Piratas de Alvida (grumete forzado)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Shanks",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/66/Shanks_Anime_Infobox.png/revision/latest?cb=20240920081450&path-prefix=es",
                    affiliation: "Piratas de Pelirroja",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Makino",
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/dd/Makino_Anime_Dos_A%C3%B1os_Despu%C3%A9s_Infobox.png/revision/latest?cb=20190414134643&path-prefix=es",
                    affiliation: "Piratas de Pelirroja",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Dadan",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/b4/Curly_Dadan_Anime_Infobox.png/revision/latest?cb=20160924183933&path-prefix=es",
                    affiliation: "Banda de Dadan",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Benn Beckman",
                    image: "https://static.wikia.nocookie.net/onepiece/images/1/12/Benn_Beckman_Anime_Infobox.png/revision/latest?cb=20240924032441&path-prefix=es",
                    affiliation: "Piratas de Pelirroja",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Lucky Roux",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/97/Lucky_Roux_Anime_Dos_A%C3%B1os_Despu%C3%A9s_Infobox.png/revision/latest?cb=20230411005926&path-prefix=es",
                    affiliation: "Piratas de Pelirroja",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Yasopp",
                    image: "https://static.wikia.nocookie.net/onepiece/images/1/15/Yasopp_Anime_Infobox.png/revision/latest?cb=20240924033159&path-prefix=es",
                    affiliation: "Piratas de Pelirroja",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Alvida",
                    image: "https://static.wikia.nocookie.net/onepiece/images/c/cd/Alvida_Anime_Infobox.png/revision/latest?cb=20130715212930&path-prefix=es",
                    affiliation: "Piratas de Alvida",
                    devilFruit: "Ninguna"  // Aún no ha comido la fruta
                },
                {
                    name: "Helmeppo",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/64/Helmeppo_Anime_Debut_Infobox.png/revision/latest?cb=20160819214118&path-prefix=es",
                    affiliation: "Marina (Hijo de Morgan)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Morgan",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/e5/Morgan_Anime_Infobox.png/revision/latest?cb=20170826193420&path-prefix=es",
                    affiliation: "Marina (Capitán)",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "orange-town",
            name: "Orange Town Arc",
            description: "La llegada de Nami y la confrontación con Buggy",
            characters: [
                {
                    name: "Nami",
                    image: "https://static.wikia.nocookie.net/onepiece/images/2/28/Nami_Anime_Debut_Infobox.png/revision/latest?cb=20230902133513&path-prefix=es",
                    affiliation: "Piratas de Sombrero de Paja (aliada temporal)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Buggy el Payaso",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/80/Buggy_Anime_Debut_Infobox.png/revision/latest?cb=20130811205903&path-prefix=es",
                    affiliation: "Piratas de Buggy",
                    devilFruit: "Bara Bara no Mi (Fruta Bara Bara)"
                },
                {
                    name: "Cabaji",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Cabaji_Anime_Infobox.png/revision/latest?cb=20211023104451&path-prefix=es",
                    affiliation: "Piratas de Buggy",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Mohji",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/63/Mohji_Anime_Debut_Infobox.png/revision/latest?cb=20140217165658&path-prefix=es",
                    affiliation: "Piratas de Buggy",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Richie",
                    image: "https://static.wikia.nocookie.net/onepiece/images/2/2d/Richie_Anime_Debut_Infobox.png/revision/latest?cb=20201101232857&path-prefix=es",
                    affiliation: "Piratas de Buggy",
                    devilFruit: "Ninguna (león)"
                }
            ]
        },
        {
            id: "syrup-village",
            name: "Syrup Village Arc",
            description: "Usopp se une a la tripulación",
            characters: [
                {
                    name: "Usopp",
                    image: "https://static.wikia.nocookie.net/onepiece/images/f/f3/Usopp_Anime_Debut_Infobox.png/revision/latest?cb=20221223144930&path-prefix=es",
                    affiliation: "Piratas de Sombrero de Paja",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kuro",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7e/Kuro_Anime_Infobox.png/revision/latest?cb=20170827012437&path-prefix=es",
                    affiliation: "Piratas Gato",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Jango",
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/de/Jango_Anime_Infobox.png/revision/latest?cb=20241006144045&path-prefix=es",
                    affiliation: "Piratas Gato",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kaya",
                    image: "https://static.wikia.nocookie.net/onepiece/images/f/fa/Kaya_Anime_Debut_Infobox.png/revision/latest?cb=20160924201848&path-prefix=es",
                    affiliation: "Civil",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "baratie",
            name: "Baratie Arc",
            description: "Sanji se une a la tripulación",
            characters: [
                {
                    name: "Sanji",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/bd/Sanji_Anime_Debut_Infobox.png/revision/latest?cb=20191029181139&path-prefix=es",
                    affiliation: "Piratas de Sombrero de Paja",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Zeff",
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/d9/Zeff_Anime_Infobox.png/revision/latest?cb=20130627113626&path-prefix=es",
                    affiliation: "Restaurante Baratie",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Don Krieg",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/bb/Krieg_Anime_Infobox.png/revision/latest?cb=20170827021202&path-prefix=es",
                    affiliation: "Piratas de Krieg",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Dracule Mihawk",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/bf/Dracule_Mihawk_Anime_Infobox.png/revision/latest?cb=20220612102336&path-prefix=es",
                    affiliation: "Siete Guerreros del Mar",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "arlong-park",
            name: "Arlong Park Arc",
            description: "El pasado de Nami y la liberación de Cocoyashi",
            characters: [
                {
                    name: "Arlong",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/01/Arlong_Anime_Infobox.png/revision/latest?cb=20130428125753&path-prefix=es",
                    affiliation: "Piratas de Arlong",
                    devilFruit: "Ninguna (hombre-pez tiburón)"
                },
                {
                    name: "Hatchan",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/3d/Hatchan_Anime_Infobox.png/revision/latest?cb=20130929180436&path-prefix=es",
                    affiliation: "Piratas de Arlong",
                    devilFruit: "Ninguna (hombre-pulpo)"
                },
                {
                    name: "Genzo",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/eb/Genzo_Anime_Debut_Infobox.png/revision/latest?cb=20160923213848&path-prefix=es",
                    affiliation: "Aldea Cocoyashi",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Nojiko",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/06/Nojiko_Anime_Debut_Infobox.png/revision/latest?cb=20160924185422&path-prefix=es",
                    affiliation: "Aldea Cocoyashi",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "loguetown",
            name: "Loguetown Arc",
            description: "El comienzo y el fin de la Grand Line",
            characters: [
                {
                    name: "Smoker",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/65/Smoker_Anime_Debut_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20210203143045&path-prefix=es",
                    affiliation: "Marina",
                    devilFruit: "Moku Moku no Mi (Fruta Moku Moku)"
                },
                {
                    name: "Tashigi",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/31/Tashigi_Anime_Debut_Infobox.png/revision/latest?cb=20160924170738&path-prefix=es",
                    affiliation: "Marina",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Monkey D. Dragon",
                    image: "https://static.wikia.nocookie.net/onepiece/images/f/f5/Monkey_D._Dragon_Anime_Infobox.png/revision/latest?cb=20190705140157&path-prefix=es",
                    affiliation: "Ejército Revolucionario",
                    devilFruit: "Desconocida"
                }
            ]
        },
        {
            id: "reverse-mountain",
            name: "Reverse Mountain Arc",
            description: "La entrada a la Grand Line y el encuentro con Vivi",
            characters: [
                {
                    name: "Laboon",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/88/Laboon_Anime_Infobox.png/revision/latest?cb=20161017185928&path-prefix=es",
                    affiliation: "Ballena",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Crocus",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/34/Crocus_Anime_Infobox.png/revision/latest?cb=20250808231637&path-prefix=es",
                    affiliation: "Guardián del faro",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "whiskey-peak",
            name: "Whiskey Peak Arc",
            description: "La primera isla en la Grand Line",
            characters: [
                {
                    name: "Mr. 5",
                    image: "https://static.wikia.nocookie.net/onepiece/images/1/14/Gem_Anime_Infobox.png/revision/latest?cb=20201005194238&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Bomu Bomu no Mi (Fruta Bomba)"
                },
                {
                    name: "Miss Valentine",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/bc/Mikita_Anime_Infobox.png/revision/latest?cb=20220306125538&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Kilo Kilo no Mi (Fruta Kilo Kilo)"
                },
                {
                    name: "Mr. 8 (Igaram)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/a/aa/Igaram_Anime_Dos_A%C3%B1os_Despu%C3%A9s_Infobox.png/revision/latest?cb=20200510122312&path-prefix=es",
                    affiliation: "Reino de Alabasta (disfrazado)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Mr. 9",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/34/Mr._9_Anime_Debut_Infobox.png/revision/latest?cb=20201201195138&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Miss Monday",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6d/Miss_Monday_Anime_Debut_Infobox.png/revision/latest?cb=20221223144943&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "little-garden",
            name: "Little Garden Arc",
            description: "La isla de los dinosaurios y gigantes",
            characters: [
                {
                    name: "Dorry",
                    image: "https://static.wikia.nocookie.net/onepiece/images/2/2d/Dorry_Anime_Infobox.png/revision/latest?cb=20260214082027&path-prefix=es",
                    affiliation: "Gigantes de Elbaf",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Brogy",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/bf/Brogy_Anime_Infobox.png/revision/latest?cb=20260214082136&path-prefix=es",
                    affiliation: "Gigantes de Elbaf",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Galdino (Mr. 3)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/1/13/Galdino_Anime_Infobox.png/revision/latest?cb=20130819151657&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Doru Doru no Mi (Fruta Doru Doru)"
                },
                {
                    name: "Miss Golden Week",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/b4/Marianne_Anime_Infobox.png/revision/latest?cb=20140227192427&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "drum-island",
            name: "Drum Island Arc",
            description: "La llegada de Chopper al equipo",
            characters: [
                {
                    name: "Tony Tony Chopper",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/ea/Tony_Tony_Chopper_Anime_Debut_Infobox.png/revision/latest?cb=20240924204408&path-prefix=es",
                    affiliation: "Piratas de Sombrero de Paja",
                    devilFruit: "Hito Hito no Mi (Fruta Hito Hito)"
                },
                {
                    name: "Wapol",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/36/Wapol_Anime_Debut_Infobox.png/revision/latest?cb=20120929204820&path-prefix=es",
                    affiliation: "Reino Drum",
                    devilFruit: "Baku Baku no Mi (Fruta Baku Baku)"
                },
                {
                    name: "Kureha",
                    image: "https://static.wikia.nocookie.net/onepiece/images/1/1b/Kureha_Anime_Infobox.png/revision/latest?cb=20161021183449&path-prefix=es",
                    affiliation: "Reino Drum",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Hiriluk",
                    image: "https://static.wikia.nocookie.net/onepiece/images/c/c0/Hiriluk_Anime_Infobox.png/revision/latest?cb=20200315175424&path-prefix=es",
                    affiliation: "Reino Drum",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Dalton",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/07/Dalton_Anime_Infobox.png/revision/latest?cb=20200505001718&path-prefix=es",
                    affiliation: "Reino Drum",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "arabasta",
            name: "Arabasta Arc",
            description: "La batalla contra Crocodile por Arabasta",
            characters: [
                {
                    name: "Crocodile",
                    image: "https://static.wikia.nocookie.net/onepiece/images/f/fd/Crocodile_Anime_Infobox.png/revision/latest?cb=20161216184552&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Suna Suna no Mi (Fruta Suna Suna)"
                },
                {
                    name: "Nico Robin (Miss All Sunday)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/92/Nico_Robin_Anime_Debut_Infobox.png/revision/latest?cb=20140407170142&path-prefix=es",
                    affiliation: "Baroque Works / Piratas de Sombrero de Paja",
                    devilFruit: "Hana Hana no Mi (Fruta Hana Hana)"
                },
                {
                    name: "Nefertari Vivi",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/99/Nefertari_Vivi_Anime_Debut_Infobox.png/revision/latest?cb=20200719214601&path-prefix=es",
                    affiliation: "Reino de Alabasta",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Nefertari Cobra",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/ed/Nefertari_Cobra_Anime_Debut_Infobox.png/revision/latest?cb=20130709144026&path-prefix=es",
                    affiliation: "Reino de Arabasta",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Daz Bones (Mr. 1)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/e9/Daz_Bonez_Anime_Infobox.png/revision/latest?cb=20201006184647&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Supa Supa no Mi (Fruta Supa Supa)"
                },
                {
                    name: "Bon Clay (Mr. 2)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/0e/Bentham_Anime_Infobox.png/revision/latest?cb=20160929132713&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Mane Mane no Mi (Fruta Mane Mane)"
                },
                {
                    name: "Pell",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/be/Pell_Anime_Infobox.png/revision/latest?cb=20241011222253&path-prefix=es",
                    affiliation: "Reino de Arabasta",
                    devilFruit: "Tori Tori no Mi, modelo: Halcón (Fruta Tori Tori, modelo Halcón)"
                },
                {
                    name: "Chaka",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/73/Chaka_Anime_Infobox.png/revision/latest?cb=20241011222525&path-prefix=es",
                    affiliation: "Reino de Arabasta",
                    devilFruit: "Inu Inu no Mi, modelo: Chacal (Fruta Inu Inu, modelo Chacal)"
                },
                {
                    name: "Zala (Miss Doublefinger)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/60/Zala_Anime_Infobox.png/revision/latest?cb=20160924182606&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Toge Toge no Mi (Fruta Toge Toge)"
                },
                {
                    name: "Miss Merry Christmas",
                    image: "https://static.wikia.nocookie.net/onepiece/images/f/f4/Drophy_Anime_Infobox.png/revision/latest?cb=20161111225821&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Mogu Mogu no Mi (Fruta Mogu Mogu)"
                },
                {
                    name: "Mr. 7",
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/da/Babe_Anime_Infobox.png/revision/latest?cb=20161111215928&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "jaya",
            name: "Jaya Arc",
            description: "La historia de Bellamy y la llegada de Blackbeard",
            characters: [
                {
                    name: "Montblanc Noland",
                    image: "https://static.wikia.nocookie.net/onepiece/images/2/27/Mont_Blanc_Noland_Anime_Infobox.png/revision/latest?cb=20160922214751&path-prefix=es",
                    affiliation: "Explorador",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Montblanc Cricket",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/63/Mont_Blanc_Cricket_Anime_Debut_Infobox.png/revision/latest?cb=20131102130048&path-prefix=es",
                    affiliation: "Explorador",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Bellamy",
                    image: "https://static.wikia.nocookie.net/onepiece/images/5/54/Bellamy_Anime_Debut_Infobox.png/revision/latest?cb=20160930194354&path-prefix=es",
                    affiliation: "Piratas de Bellamy",
                    devilFruit: "Bane Bane no Mi (Fruta Bane Bane)"
                },
                {
                    name: "Marshall D. Teach (Kurohige)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6b/Marshall_D._Teach_Anime_Debut_Infobox.png/revision/latest?cb=20201020133237&path-prefix=es",
                    affiliation: "Piratas de Barbanegra",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Jesus Burgess",
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/d9/Jesus_Burgess_Anime_Debut_Infobox.png/revision/latest?cb=20211102164450&path-prefix=es",
                    affiliation: "Piratas de Barbanegra",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Lafitte",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/00/Laffitte_Anime_Infobox.png/revision/latest?cb=20170120161646&path-prefix=es",
                    affiliation: "Piratas de Barbanegra",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Van Augur",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6a/Van_Augur_Anime_Debut_Infobox.png/revision/latest?cb=20140909153439&path-prefix=es",
                    affiliation: "Piratas de Barbanegra",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Doc Q",
                    image: "https://static.wikia.nocookie.net/onepiece/images/c/c4/Doc_Q_Anime_Infobox.png/revision/latest?cb=20160922195143&path-prefix=es",
                    affiliation: "Piratas de Barbanegra",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "skypiea",
            name: "Skypiea Arc",
            description: "La aventura en el cielo",
            characters: [
                {
                    name: "Enel",
                    image: "https://static.wikia.nocookie.net/onepiece/images/a/ad/Enel_Anime_Infobox.png/revision/latest?cb=20220525110412&path-prefix=es",
                    affiliation: "Skypiea",
                    devilFruit: "Goro Goro no Mi (Fruta Goro Goro)"
                },
            ]
        },
        {
            id: "water-7-enies-lobby",
            name: "Water 7 / Enies Lobby Arc",
            description: "La traición de Robin, el rescate y la llegada de Franky",
            characters: [
                {
                    name: "Franky",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/07/Franky_Anime_Debut_Infobox.png/revision/latest?cb=20230627144312&path-prefix=es",
                    affiliation: "Franky Family (luego Piratas de Sombrero de Paja)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Foxy",
                    image: "https://static.wikia.nocookie.net/onepiece/images/a/a7/Foxy_Anime_Debut_Infobox.png/revision/latest?cb=20151221162224&path-prefix=es",
                    affiliation: "Piratas de Foxy",
                    devilFruit: "Noro Noro no Mi (Fruta Noro Noro)"
                },
                {
                    name: "Kuzan (Aokiji)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/eb/Kuzan_Anime_Debut_Infobox.png/revision/latest?cb=20170112234533&path-prefix=es",
                    affiliation: "Marina",
                    devilFruit: "Hie Hie no Mi (Fruta Hie Hie)"
                },
                {
                    name: "Iceburg",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/00/Iceburg_Anime_Infobox.png/revision/latest?cb=20230620132111&path-prefix=es",
                    affiliation: "Galley-La Company",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Rob Lucci",
                    image: "https://static.wikia.nocookie.net/onepiece/images/4/45/Rob_Lucci_Anime_Debut_Infobox.png/revision/latest?cb=20240921080101&path-prefix=es",
                    affiliation: "CP9",
                    devilFruit: "Neko Neko no Mi, modelo: Leopardo (Fruta Neko Neko, modelo Leopardo)"
                },
                {
                    name: "Kaku",
                    image: "https://static.wikia.nocookie.net/onepiece/images/1/15/Kaku_Anime_Debut_Infobox.png/revision/latest?cb=20221223145958&path-prefix=es",
                    affiliation: "CP9",
                    devilFruit: "Ushi Ushi no Mi, modelo: Jirafa (Fruta Ushi Ushi, modelo Jirafa)"
                },
                {
                    name: "Jabura",
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/d0/Jabra_Anime_Debut_Infobox.png/revision/latest?cb=20160924140305&path-prefix=es",
                    affiliation: "CP9",
                    devilFruit: "Inu Inu no Mi, modelo: Lobo (Fruta Inu Inu, modelo Lobo)"
                },
                {
                    name: "Blueno",
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/d4/Blueno_Anime_Debut_Infobox.png/revision/latest?cb=20200418013041&path-prefix=es",
                    affiliation: "CP9",
                    devilFruit: "Doa Doa no Mi (Fruta Doa Doa)"
                },
                {
                    name: "Kalifa",
                    image: "https://static.wikia.nocookie.net/onepiece/images/4/49/Kalifa_Anime_Debut_Infobox.png/revision/latest?cb=20140303153110&path-prefix=es",
                    affiliation: "CP9",
                    devilFruit: "Awa Awa no Mi (Fruta Awa Awa)"
                },
                {
                    name: "Kumadori",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/02/Kumadori_Anime_Debut_Infobox.png/revision/latest?cb=20220612144024&path-prefix=es",
                    affiliation: "CP9",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Fukuro",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/35/Fukurou_Anime_Debut_Infobox.png/revision/latest?cb=20121215231501&path-prefix=es",
                    affiliation: "CP9",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Spandam",
                    image: "https://static.wikia.nocookie.net/onepiece/images/f/f3/Spandam_Anime_Debut_Infobox.png/revision/latest?cb=20160919212438&path-prefix=es",
                    affiliation: "CP9",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "thriller-bark",
            name: "Thriller Bark Arc",
            description: "La isla de los zombies",
            characters: [
                {
                    name: "Gecko Moria",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/be/Gecko_Moria_Anime_Infobox.png/revision/latest?cb=20160218215318&path-prefix=es",
                    affiliation: "Piratas de Gecko Moria",
                    devilFruit: "Kage Kage no Mi (Fruta Kage Kage)"
                },
                {
                    name: "Brook",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/ea/Brook_Anime_Debut_Infobox.png/revision/latest?cb=20160813201432&path-prefix=es",
                    affiliation: "Piratas de Sombrero de Paja",
                    devilFruit: "Yomi Yomi no Mi (Fruta Yomi Yomi)"
                },
                {
                    name: "Perona",
                    image: "https://static.wikia.nocookie.net/onepiece/images/a/a2/Perona_Anime_Debut_Infobox.png/revision/latest?cb=20160818111720&path-prefix=es",
                    affiliation: "Piratas de Gecko Moria",
                    devilFruit: "Horo Horo no Mi (Fruta Horo Horo)"
                },
                {
                    name: "Absalom",
                    image: "https://static.wikia.nocookie.net/onepiece/images/5/56/Absalom_Anime_Infobox.png/revision/latest?cb=20131007143323&path-prefix=es",
                    affiliation: "Piratas de Gecko Moria",
                    devilFruit: "Suke Suke no Mi (Fruta Suke Suke)"
                },
                {
                    name: "Hogback",
                    image: "https://static.wikia.nocookie.net/onepiece/images/4/4a/Hogback_Anime_Infobox.png/revision/latest?cb=20131007143733&path-prefix=es",
                    affiliation: "Piratas de Gecko Moria",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Lola",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/3e/Charlotte_Lola_Anime_Infobox.png/revision/latest?cb=20160924212743&path-prefix=es",
                    affiliation: "Piratas de Rolling (aliada)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Oars",
                    image: "https://static.wikia.nocookie.net/onepiece/images/5/55/Oars_Anime_Infobox.png/revision/latest?cb=20160921095403&path-prefix=es",
                    affiliation: "Piratas de Gecko Moria (zombie)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Ryuma",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6a/Shimotsuki_Ryuma_Anime_Infobox.png/revision/latest?cb=20160917110237&path-prefix=es",
                    affiliation: "Piratas de Gecko Moria (zombie)",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "sabaody-archipelago",
            name: "Sabaody Archipelago Arc",
            description: "La separación de la tripulación",
            characters: [
                {
                    name: "Silvers Rayleigh",
                    image: "https://i.imgur.com/9WZ7D1I.jpg",
                    affiliation: "Piratas de Roger",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kizaru",
                    image: "https://i.imgur.com/6WZ8E2J.jpg",
                    affiliation: "Marina",
                    devilFruit: "Pika Pika no Mi (Fruta Pika Pika)"
                },
                {
                    name: "Sentomaru",
                    image: "https://i.imgur.com/3WZ9F3K.jpg",
                    affiliation: "Marina",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Pacifistas",
                    image: "https://i.imgur.com/8WZ0G4L.jpg",
                    affiliation: "Marina",
                    devilFruit: "Ninguna (androides)"
                },
                {
                    name: "Duval",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Duval_Anime_Infobox.png",
                    affiliation: "Piratas de Rosy Life Riders",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Eustass Kid",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Eustass_Kid_Anime_Infobox.png",
                    affiliation: "Piratas de Kid",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Killer",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7f/Killer_Anime_Infobox.png",
                    affiliation: "Piratas de Kid",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Basil Hawkins",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Basil_Hawkins_Anime_Infobox.png",
                    affiliation: "Piratas de Hawkins",
                    devilFruit: "Ninguna"
                },
                {
                    name: "X Drake",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/X_Drake_Anime_Infobox.png",
                    affiliation: "Piratas de Drake",
                    devilFruit: "Ryu Ryu no Mi, modelo: Alosaurio (Fruta Ryu Ryu, modelo Alosaurio)"
                },
                {
                    name: "Capone Bege",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7e/Capone_Bege_Anime_Infobox.png",
                    affiliation: "Piratas de Fire Tank",
                    devilFruit: "Shiro Shiro no Mi (Fruta Shiro Shiro)"
                },
                {
                    name: "Jewelry Bonney",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6d/Jewelry_Bonney_Anime_Infobox.png",
                    affiliation: "Piratas de Bonney",
                    devilFruit: "Desconocida"
                },
                {
                    name: "Urouge",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/87/Urouge_Anime_Infobox.png",
                    affiliation: "Piratas de Urouge",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Scratchmen Apoo",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Scratchmen_Apoo_Anime_Infobox.png",
                    affiliation: "Piratas de Apoo",
                    devilFruit: "Oto Oto no Mi (Fruta Oto Oto)"
                },
                {
                    name: "Camie",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Camie_Anime_Infobox.png",
                    affiliation: "Isla de los Hombres-Pez",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Shakky",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Shakky_Anime_Infobox.png",
                    affiliation: "Bar Shakky's",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Smoker",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/65/Smoker_Anime_Debut_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20210203143045&path-prefix=es",
                    affiliation: "Marina",
                    devilFruit: "Moku Moku no Mi (Fruta Moku Moku)"
                },
                {
                    name: "Tashigi",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/31/Tashigi_Anime_Debut_Infobox.png/revision/latest?cb=20160924170738&path-prefix=es",
                    affiliation: "Marina",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "amazon-lily",
            name: "Amazon Lily Arc",
            description: "Luffy en la isla de las mujeres",
            characters: [
                {
                    name: "Boa Hancock",
                    image: "https://i.imgur.com/7WZ2I6N.jpg",
                    affiliation: "Piratas Kuja",
                    devilFruit: "Mero Mero no Mi (Fruta Mero Mero)"
                },
                {
                    name: "Boa Sandersonia",
                    image: "https://i.imgur.com/4WZ3J7O.jpg",
                    affiliation: "Piratas Kuja",
                    devilFruit: "Hebi Hebi no Mi, modelo: Anaconda (Fruta Hebi Hebi, modelo Anaconda)"
                },
                {
                    name: "Boa Marigold",
                    image: "https://i.imgur.com/9WZ4K8P.jpg",
                    affiliation: "Piratas Kuja",
                    devilFruit: "Hebi Hebi no Mi, modelo: Cobra Real (Fruta Hebi Hebi, modelo Cobra)"
                }
            ]
        },
        {
            id: "impel-down",
            name: "Impel Down Arc",
            description: "La prisión más segura del mundo",
            characters: [
                {
                    name: "Magellan",
                    image: "https://i.imgur.com/6WZ5L9Q.jpg",
                    affiliation: "Impel Down",
                    devilFruit: "Doku Doku no Mi (Fruta Doku Doku)"
                },
                {
                    name: "Hannyabal",
                    image: "https://i.imgur.com/3WZ6M0R.jpg",
                    affiliation: "Impel Down",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Mr. 2 Bon Clay",
                    image: "https://i.imgur.com/8WZ7N1S.jpg",
                    affiliation: "Baroque Works (prisionero)",
                    devilFruit: "Mane Mane no Mi (Fruta Mane Mane)"
                },
                {
                    name: "Emporio Ivankov",
                    image: "https://i.imgur.com/5WZ8O2T.jpg",
                    affiliation: "Ejército Revolucionario",
                    devilFruit: "Horu Horu no Mi (Fruta Horu Horu)"
                },
                {
                    name: "Jinbe",
                    image: "https://i.imgur.com/7WZ9P3U.jpg",
                    affiliation: "Piratas del Sol (ex-Shichibukai)",
                    devilFruit: "Ninguna (hombre-pez)"
                },
                {
                    name: "Shiryu",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Shiryu_Anime_Infobox.png",
                    affiliation: "Guardia Jefe de Impel Down",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Sadi-chan",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/8c/Sadi-chan_Anime_Infobox.png",
                    affiliation: "Guardia de Impel Down",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Inazuma",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6e/Inazuma_Anime_Infobox.png",
                    affiliation: "Ejército Revolucionario",
                    devilFruit: "Choki Choki no Mi (Fruta Choki Choki)"
                },
                {
                    name: "Minotaurus",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7f/Minotaurus_Anime_Infobox.png",
                    affiliation: "Guardia de Impel Down",
                    devilFruit: "Zoan (toro)"
                }
            ]
        },
        {
            id: "marineford",
            name: "Marineford Arc",
            description: "La guerra más grande",
            characters: [
                {
                    name: "Edward Newgate (Barbablanca)",
                    image: "https://i.imgur.com/4WZ0Q4V.jpg",
                    affiliation: "Piratas de Barbablanca",
                    devilFruit: "Gura Gura no Mi (Fruta Gura Gura)"
                },
                {
                    name: "Sengoku",
                    image: "https://i.imgur.com/9WZ1R5W.jpg",
                    affiliation: "Marina",
                    devilFruit: "Hito Hito no Mi, modelo: Buda (Fruta Hito Hito, modelo Buda)"
                },
                {
                    name: "Akainu",
                    image: "https://i.imgur.com/6WZ2S6X.jpg",
                    affiliation: "Marina",
                    devilFruit: "Magu Magu no Mi (Fruta Magu Magu)"
                },
                {
                    name: "Aokiji",
                    image: "https://i.imgur.com/3WZ3T7Y.jpg",
                    affiliation: "Marina",
                    devilFruit: "Hie Hie no Mi (Fruta Hie Hie)"
                },
                {
                    name: "Kizaru",
                    image: "https://i.imgur.com/8WZ4U8Z.jpg",
                    affiliation: "Marina",
                    devilFruit: "Pika Pika no Mi (Fruta Pika Pika)"
                },
                {
                    name: "Marco",
                    image: "https://i.imgur.com/5WZ5V9A.jpg",
                    affiliation: "Piratas de Barbablanca",
                    devilFruit: "Tori Tori no Mi, modelo: Fénix (Fruta Tori Tori, modelo Fénix)"
                },
                {
                    name: "Jozu",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/68/Jozu_Anime_Infobox.png",
                    affiliation: "Piratas de Barbablanca",
                    devilFruit: "Kira Kira no Mi (Fruta Kira Kira, diamante)"
                },
                {
                    name: "Vista",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7f/Vista_Anime_Infobox.png",
                    affiliation: "Piratas de Barbablanca",
                    devilFruit: "Ninguna (espadachín)"
                }
            ]
        },
        {
            id: "post-war",
            name: "Post-War Arc",
            description: "El entrenamiento de la tripulación",
            characters: [
                {
                    name: "Shanks",
                    image: "https://i.imgur.com/7WZ6W0B.jpg",
                    affiliation: "Piratas de Pelirroja",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Dracule Mihawk",
                    image: "https://i.imgur.com/4WZ7X1C.jpg",
                    affiliation: "Siete Guerreros del Mar",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Silvers Rayleigh",
                    image: "https://i.imgur.com/9WZ8Y2D.jpg",
                    affiliation: "Piratas de Roger",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "return-to-sabaody",
            name: "Return to Sabaody Arc",
            description: "El reencuentro de la tripulación",
            characters: [
                {
                    name: "Fake Straw Hats",
                    image: "https://i.imgur.com/6WZ9Z3E.jpg",
                    affiliation: "Piratas Falsos",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Caribou",
                    image: "https://i.imgur.com/3WZ0A4F.jpg",
                    affiliation: "Piratas de Caribou",
                    devilFruit: "Numa Numa no Mi (Fruta Numa Numa)"
                },
                {
                    name: "Demalo Black",
                    image: "https://i.imgur.com/8WZ1B5G.jpg",
                    affiliation: "Piratas Falsos",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kuro",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7e/Kuro_Anime_Infobox.png/revision/latest?cb=20170827012437&path-prefix=es",
                    affiliation: "Piratas Gato",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Jango",
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/de/Jango_Anime_Infobox.png/revision/latest?cb=20241006144045&path-prefix=es",
                    affiliation: "Piratas Gato",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kaya",
                    image: "https://static.wikia.nocookie.net/onepiece/images/f/fa/Kaya_Anime_Debut_Infobox.png/revision/latest?cb=20160924201848&path-prefix=es",
                    affiliation: "Civil",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "fishman-island",
            name: "Fishman Island Arc",
            description: "La aventura bajo el mar",
            characters: [
                {
                    name: "Hody Jones",
                    image: "https://i.imgur.com/5WZ2C6H.jpg",
                    affiliation: "Nuevo Ejército Hombre-Pez",
                    devilFruit: "Ninguna (toma esteroides)"
                },
                {
                    name: "Shirahoshi",
                    image: "https://i.imgur.com/7WZ3D7I.jpg",
                    affiliation: "Reino Gyojin",
                    devilFruit: "Ninguna (es Poseidón)"
                },
                {
                    name: "Jinbe",
                    image: "https://i.imgur.com/4WZ4E8J.jpg",
                    affiliation: "Piratas de Sombrero de Paja",
                    devilFruit: "Ninguna (hombre-pez)"
                },
                {
                    name: "Vander Decken IX",
                    image: "https://i.imgur.com/9WZ5F9K.jpg",
                    affiliation: "Piratas del Flying Dutchman",
                    devilFruit: "Mato Mato no Mi (Fruta Mato Mato)"
                },
                {
                    name: "Fukaboshi",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Fukaboshi_Anime_Infobox.png",
                    affiliation: "Reino Gyojin",
                    devilFruit: "Ninguna (hombre-pez tiburón)"
                },
                {
                    name: "Ryuboshi",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Ryuboshi_Anime_Infobox.png",
                    affiliation: "Reino Gyojin",
                    devilFruit: "Ninguna (hombre-pez)"
                },
                {
                    name: "Manboshi",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Manboshi_Anime_Infobox.png",
                    affiliation: "Reino Gyojin",
                    devilFruit: "Ninguna (hombre-pez)"
                },
                {
                    name: "Daruma",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7f/Daruma_Anime_Infobox.png",
                    affiliation: "Nuevo Ejército Hombre-Pez",
                    devilFruit: "Ninguna (hombre-pez topo)"
                },
                {
                    name: "Ikaros",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/87/Ikaros_Anime_Infobox.png",
                    affiliation: "Nuevo Ejército Hombre-Pez",
                    devilFruit: "Ninguna (hombre-pez calamar)"
                },
                {
                    name: "Hyouzou",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/68/Hyouzou_Anime_Infobox.png",
                    affiliation: "Nuevo Ejército Hombre-Pez",
                    devilFruit: "Ninguna (hombre-pez)"
                },
                {
                    name: "Arlong",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/01/Arlong_Anime_Infobox.png/revision/latest?cb=20130428125753&path-prefix=es",
                    affiliation: "Piratas de Arlong",
                    devilFruit: "Ninguna (hombre-pez tiburón)"
                },
                {
                    name: "Hatchan",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/3d/Hatchan_Anime_Infobox.png/revision/latest?cb=20130929180436&path-prefix=es",
                    affiliation: "Piratas de Arlong",
                    devilFruit: "Ninguna (hombre-pulpo)"
                },
                {
                    name: "Nojiko",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/06/Nojiko_Anime_Debut_Infobox.png/revision/latest?cb=20160924185422&path-prefix=es",
                    affiliation: "Aldea Cocoyashi",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Belmere",
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/3f/Bell-m%C3%A8re_Anime_Infobox.png/revision/latest?cb=20160924172433&path-prefix=es",
                    affiliation: "Aldea Cocoyashi",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Genzo",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/eb/Genzo_Anime_Debut_Infobox.png/revision/latest?cb=20160923213848&path-prefix=es",
                    affiliation: "Aldea Cocoyashi",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "punk-hazard",
            name: "Punk Hazard Arc",
            description: "La isla de los científicos locos",
            characters: [
                {
                    name: "Caesar Clown",
                    image: "https://i.imgur.com/6WZ6G0L.jpg",
                    affiliation: "Piratas de Caesar",
                    devilFruit: "Gasu Gasu no Mi (Fruta Gasu Gasu)"
                },
                {
                    name: "Monet",
                    image: "https://i.imgur.com/3WZ7H1M.jpg",
                    affiliation: "Piratas de Caesar",
                    devilFruit: "Yuki Yuki no Mi (Fruta Yuki Yuki)"
                },
                {
                    name: "Vergo",
                    image: "https://i.imgur.com/8WZ8I2N.jpg",
                    affiliation: "Piratas de Donquixote",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Trafalgar Law",
                    image: "https://i.imgur.com/5WZ9J3O.jpg",
                    affiliation: "Piratas Heart",
                    devilFruit: "Ope Ope no Mi (Fruta Ope Ope)"
                }
            ]
        },
        {
            id: "dressrosa",
            name: "Dressrosa Arc",
            description: "La batalla contra Doflamingo",
            characters: [
                {
                    name: "Donquixote Doflamingo",
                    image: "https://i.imgur.com/7WZ0K4P.jpg",
                    affiliation: "Piratas de Donquixote",
                    devilFruit: "Ito Ito no Mi (Fruta Ito Ito)"
                },
                {
                    name: "Sabo",
                    image: "https://i.imgur.com/4WZ1L5Q.jpg",
                    affiliation: "Ejército Revolucionario",
                    devilFruit: "Mera Mera no Mi (Fruta Mera Mera)"
                },
                {
                    name: "Kyros",
                    image: "https://i.imgur.com/9WZ2M6R.jpg",
                    affiliation: "Reino de Dressrosa",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Rebecca",
                    image: "https://i.imgur.com/6WZ3N7S.jpg",
                    affiliation: "Reino de Dressrosa",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Viola",
                    image: "https://i.imgur.com/3WZ4O8T.jpg",
                    affiliation: "Reino de Dressrosa",
                    devilFruit: "Giro Giro no Mi (Fruta Giro Giro)"
                },
                {
                    name: "Trebol",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Trebol_Anime_Infobox.png",
                    affiliation: "Piratas de Donquixote",
                    devilFruit: "Beta Beta no Mi (Fruta Beta Beta)"
                },
                {
                    name: "Diamante",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Diamante_Anime_Infobox.png",
                    affiliation: "Piratas de Donquixote",
                    devilFruit: "Hira Hira no Mi (Fruta Hira Hira)"
                },
                {
                    name: "Pica",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Pica_Anime_Infobox.png",
                    affiliation: "Piratas de Donquixote",
                    devilFruit: "Ishi Ishi no Mi (Fruta Ishi Ishi)"
                },
                {
                    name: "Bartolomeo",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7f/Bartolomeo_Anime_Infobox.png",
                    affiliation: "Piratas de Barto",
                    devilFruit: "Bari Bari no Mi (Fruta Bari Bari)"
                },
                {
                    name: "Cavendish",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Cavendish_Anime_Infobox.png",
                    affiliation: "Piratas de Cavendish",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Leo",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Leo_Anime_Infobox.png",
                    affiliation: "Ejército Tontatta",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Fujitora (Issho)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Fujitora_Anime_Infobox.png",
                    affiliation: "Marina",
                    devilFruit: "Zushi Zushi no Mi (Fruta Zushi Zushi)"
                },
                {
                    name: "Sai",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7f/Sai_Anime_Infobox.png",
                    affiliation: "Ejército Happo",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "zou",
            name: "Zou Arc",
            description: "La isla elefante",
            characters: [
                {
                    name: "Inuarashi",
                    image: "https://i.imgur.com/8WZ5P9U.jpg",
                    affiliation: "Tribu Mink",
                    devilFruit: "Ninguna (mink)"
                },
                {
                    name: "Nekomamushi",
                    image: "https://i.imgur.com/5WZ6Q0V.jpg",
                    affiliation: "Tribu Mink",
                    devilFruit: "Ninguna (mink)"
                },
                {
                    name: "Pedro",
                    image: "https://i.imgur.com/7WZ7R1W.jpg",
                    affiliation: "Tribu Mink",
                    devilFruit: "Ninguna (mink)"
                },
                {
                    name: "Carrot",
                    image: "https://i.imgur.com/4WZ8S2X.jpg",
                    affiliation: "Tribu Mink",
                    devilFruit: "Ninguna (mink)"
                }
            ]
        },
        {
            id: "whole-cake-island",
            name: "Whole Cake Island Arc",
            description: "El rescate de Sanji",
            characters: [
                {
                    name: "Charlotte Linlin (Big Mom)",
                    image: "https://i.imgur.com/9WZ9T3Y.jpg",
                    affiliation: "Piratas de Big Mom",
                    devilFruit: "Soru Soru no Mi (Fruta Soru Soru)"
                },
                {
                    name: "Charlotte Katakuri",
                    image: "https://i.imgur.com/6WZ0U4Z.jpg",
                    affiliation: "Piratas de Big Mom",
                    devilFruit: "Mochi Mochi no Mi (Fruta Mochi Mochi)"
                },
                {
                    name: "Charlotte Pudding",
                    image: "https://i.imgur.com/3WZ1V5A.jpg",
                    affiliation: "Familia Charlotte",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Charlotte Cracker",
                    image: "https://i.imgur.com/8WZ2W6B.jpg",
                    affiliation: "Piratas de Big Mom",
                    devilFruit: "Bisu Bisu no Mi (Fruta Bisu Bisu)"
                },
                {
                    name: "Charlotte Smoothie",
                    image: "https://i.imgur.com/5WZ3X7C.jpg",
                    affiliation: "Piratas de Big Mom",
                    devilFruit: "Shibo Shibo no Mi (Fruta Shibo Shibo)"
                },
                {
                    name: "Perospero",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Perospero_Anime_Infobox.png",
                    affiliation: "Piratas de Big Mom",
                    devilFruit: "Pero Pero no Mi (Fruta Pero Pero)"
                },
                {
                    name: "Vinsmoke Judge",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Vinsmoke_Judge_Anime_Infobox.png",
                    affiliation: "Germa 66",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Vinsmoke Reiju",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Vinsmoke_Reiju_Anime_Infobox.png",
                    affiliation: "Germa 66",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Vinsmoke Ichiji",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7f/Vinsmoke_Ichiji_Anime_Infobox.png",
                    affiliation: "Germa 66",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Vinsmoke Niji",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/87/Vinsmoke_Niji_Anime_Infobox.png",
                    affiliation: "Germa 66",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Vinsmoke Yonji",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Vinsmoke_Yonji_Anime_Infobox.png",
                    affiliation: "Germa 66",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Daifuku",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Daifuku_Anime_Infobox.png",
                    affiliation: "Piratas de Big Mom",
                    devilFruit: "Hoya Hoya no Mi (Fruta Hoya Hoya)"
                },
                {
                    name: "Oven",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Oven_Anime_Infobox.png",
                    affiliation: "Piratas de Big Mom",
                    devilFruit: "Netsu Netsu no Mi (Fruta Netsu Netsu)"
                }
            ]
        },
        {
            id: "reverie",
            name: "Reverie Arc",
            description: "La reunión de los reyes",
            characters: [
                {
                    name: "Nefertari Cobra",
                    image: "https://i.imgur.com/7WZ4Y8D.jpg",
                    affiliation: "Reino de Alabasta",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Riku Dold III",
                    image: "https://i.imgur.com/4WZ5Z9E.jpg",
                    affiliation: "Reino de Dressrosa",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Shirahoshi",
                    image: "https://i.imgur.com/9WZ6A0F.jpg",
                    affiliation: "Reino Gyojin",
                    devilFruit: "Ninguna (Poseidón)"
                },
                {
                    name: "Stelly",
                    image: "https://i.imgur.com/6WZ7B1G.jpg",
                    affiliation: "Reino de Goa",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "wano-country",
            name: "Wano Country Arc",
            description: "La tierra de los samuráis",
            characters: [
                {
                    name: "Kaido",
                    image: "https://i.imgur.com/3WZ8C2H.jpg",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Uo Uo no Mi, modelo: Seiryu (Fruta Uo Uo, modelo Dragón Azul)"
                },
                {
                    name: "Kurozumi Orochi",
                    image: "https://i.imgur.com/8WZ9D3I.jpg",
                    affiliation: "Shogun de Wano",
                    devilFruit: "Hebi Hebi no Mi, modelo: Yamata no Orochi (Fruta Hebi Hebi, modelo Orochi)"
                },
                {
                    name: "Yamato",
                    image: "https://i.imgur.com/5WZ0E4J.jpg",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Inu Inu no Mi, modelo: Okuchi no Makami (Fruta Inu Inu, modelo Lobo Divino)"
                },
                {
                    name: "Kin'emon",
                    image: "https://i.imgur.com/7WZ1F5K.jpg",
                    affiliation: "Samuráis de Kozuki",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Raizo",
                    image: "https://i.imgur.com/4WZ2G6L.jpg",
                    affiliation: "Samuráis de Kozuki",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kiku",
                    image: "https://i.imgur.com/9WZ3H7M.jpg",
                    affiliation: "Samuráis de Kozuki",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Momonosuke",
                    image: "https://i.imgur.com/6WZ4I8N.jpg",
                    affiliation: "Clan Kozuki",
                    devilFruit: "Uo Uo no Mi (copia artificial, Fruta Uo Uo artificial)"
                },
                {
                    name: "Big Mom",
                    image: "https://i.imgur.com/3WZ5J9O.jpg",
                    affiliation: "Piratas de Big Mom",
                    devilFruit: "Soru Soru no Mi (Fruta Soru Soru)"
                },
                {
                    name: "King (Alber)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/King_Anime_Infobox.png",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Ryu Ryu no Mi, modelo: Pteranodon (Fruta Ryu Ryu, modelo Pteranodon)"
                },
                {
                    name: "Queen (The plague)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Queen_Anime_Infobox.png",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Ryu Ryu no Mi, modelo: Braquiosaurio (Fruta Ryu Ryu, modelo Braquiosaurio)"
                },
                {
                    name: "Jack",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Jack_Anime_Infobox.png",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Zoan (Mamut)"
                },
                {
                    name: "Who's Who",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7f/Whos_Who_Anime_Infobox.png",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Neko Neko no Mi, modelo: Sabre Tiger (Fruta Neko Neko, modelo Tigre Dientes de Sable)"
                },
                {
                    name: "Sasaki",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/87/Sasaki_Anime_Infobox.png",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Ryu Ryu no Mi, modelo: Triceratops (Fruta Ryu Ryu, modelo Triceratops)"
                },
                {
                    name: "Ulti",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Ulti_Anime_Infobox.png",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Ryu Ryu no Mi, modelo: Pachycephalosaurus (Fruta Ryu Ryu, modelo Paquicefalosaurio)"
                },
                {
                    name: "Page One",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Page_One_Anime_Infobox.png",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Ryu Ryu no Mi, modelo: Spinosaurus (Fruta Ryu Ryu, modelo Espinosaurio)"
                },
                {
                    name: "Black Maria",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Black_Maria_Anime_Infobox.png",
                    affiliation: "Piratas de las Bestias",
                    devilFruit: "Kumo Kumo no Mi, modelo: Rosamygale Grauvogeli (Fruta Kumo Kumo, modelo Araña)"
                },
                {
                    name: "Denjiro",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7f/Denjiro_Anime_Infobox.png",
                    affiliation: "Samuráis de Kozuki",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Ashura Doji",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/87/Ashura_Doji_Anime_Infobox.png",
                    affiliation: "Samuráis de Kozuki",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kawamatsu",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/68/Kawamatsu_Anime_Infobox.png",
                    affiliation: "Samuráis de Kozuki",
                    devilFruit: "Ninguna (hombre-pez koi)"
                },
                {
                    name: "Izo",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Izo_Anime_Infobox.png",
                    affiliation: "Samuráis de Kozuki / ex-Piratas de Barbablanca",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "egghead",
            name: "Egghead Arc",
            description: "La isla del futuro",
            characters: [
                {
                    name: "Dr. Vegapunk",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/8a/Vegapunk_en_los_recuerdos_de_Kuma.png/revision/latest/scale-to-width-down/1000?cb=20220920145312&path-prefix=es",
                    affiliation: "Marina / Científico",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Stussy",
                    image: "https://i.imgur.com/5WZ7L1Q.jpg",
                    affiliation: "CP-0",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Sentomaru",
                    image: "https://i.imgur.com/7WZ8M2R.jpg",
                    affiliation: "Marina",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kizaru",
                    image: "https://i.imgur.com/4WZ9N3S.jpg",
                    affiliation: "Marina",
                    devilFruit: "Pika Pika no Mi (Fruta Pika Pika)"
                },
                {
                    name: "York",
                    image: "https://i.imgur.com/9WZ0O4T.jpg",
                    affiliation: "Satélite de Vegapunk",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Lilith",
                    image: "https://i.imgur.com/6WZ1P5U.jpg",
                    affiliation: "Satélite de Vegapunk",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Shaka",
                    image: "https://i.imgur.com/3WZ2Q6V.jpg",
                    affiliation: "Satélite de Vegapunk",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Edison",
                    image: "https://i.imgur.com/8WZ3R7W.jpg",
                    affiliation: "Satélite de Vegapunk",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Pythagoras",
                    image: "https://i.imgur.com/5WZ4S8X.jpg",
                    affiliation: "Satélite de Vegapunk",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Jewelry Bonney",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6d/Jewelry_Bonney_Anime_Infobox.png",
                    affiliation: "Piratas de Bonney",
                    devilFruit: "Toshi Toshi no Mi (Fruta Toshi Toshi)"
                }
            ]
        },
        {
            id: "otros",
            name: "Otros",
            description: "Personajes especiales y adicionales independientes de los arcos principales",
            characters: [
                {
                    name: "Gol D. Roger",
                    image: "https://static.wikia.nocookie.net/onepiece/images/2/24/Gol_D._Roger_Anime_Infobox.png/revision/latest?cb=20240928202410&path-prefix=es",
                    affiliation: "Piratas de Roger",
                    devilFruit: "Desconocido"
                },
                {
                    name: "Sengoku",
                    image: "https://static.wikia.nocookie.net/onepiece/images/1/1a/Sengoku_Anime_Debut_Infobox.png/revision/latest?cb=20160818110216&path-prefix=es",
                    affiliation: "Marina",
                    devilFruit: "Desconocido"
                },
                {
                    name: "Donquixote Doflamingo",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7e/Donquixote_Doflamingo_Anime_Infobox.png/revision/latest?cb=20220521220453&path-prefix=es",
                    affiliation: "Siete Guerreros del Mar (ex)",
                    devilFruit: "Desconocido"
                },
                {
                    name: "Bartholomew Kuma",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/8d/Bartholomew_Kuma_Anime_Infobox.png/revision/latest?cb=20220612143841&path-prefix=es",
                    affiliation: "Siete Guerreros del Mar (ex)",
                    devilFruit: "Desconocido"
                },
                {
                    name: "Edward Newgate (Shirohige)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/b7/Edward_Newgate_Anime_Infobox.png/revision/latest?cb=20130602201437&path-prefix=es",
                    affiliation: "Piratas de Barbablanca",
                    devilFruit: "Desconocido"
                },
                {
                    name: "Marco",
                    image: "https://static.wikia.nocookie.net/onepiece/images/1/16/Marco_Anime_Debut_Infobox.png/revision/latest?cb=20160401181925&path-prefix=es",
                    affiliation: "Piratas de Barbablanca",
                    devilFruit: "Desconocido"
                },
                {
                    name: "5 Ancianos / Gorosei",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/e0/Ethanbaron_V._Nusjuro_Anime_Infobox.png/revision/latest?cb=20230611184652&path-prefix=es",
                    affiliation: "Gobierno Mundial",
                    devilFruit: "Desconocido"
                },
                {
                    name: "5 Ancianos / Gorosei",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/b6/Shepherd_Ju_Peter_Anime_Infobox.png/revision/latest?cb=20230611184912&path-prefix=es",
                    affiliation: "Gobierno Mundial",
                    devilFruit: "Desconocido"
                },
                {
                    name: "5 Ancianos / Gorosei",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/b4/Topman_Warcury_Anime_Infobox.png/revision/latest?cb=20240915181111&path-prefix=es",
                    affiliation: "Gobierno Mundial",
                    devilFruit: "Desconocido"
                },
                {
                    name: "5 Ancianos / Gorosei",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/ea/Marcus_Mars_Anime_Infobox.png/revision/latest?cb=20230611172953&path-prefix=es",
                    affiliation: "Gobierno Mundial",
                    devilFruit: "Desconocido"
                },
                {
                    name: "5 Ancianos / Gorosei",
                    image: "https://static.wikia.nocookie.net/onepiece/images/a/ae/Jaygarcia_Saturn_Anime_Infobox.png/revision/latest?cb=20230211160616&path-prefix=es",
                    affiliation: "Gobierno Mundial",
                    devilFruit: "Desconocido"
                },
                {
                    name: "Vegapunk",
                    image: "https://static.wikia.nocookie.net/onepiece/images/c/c5/Vegapunk_Anime_Infobox.png/revision/latest?cb=20240906094516&path-prefix=es",
                    affiliation: "Gobierno Mundial",
                    devilFruit: "Desconocido"
                }
            ]
        }
    ]
};

// Cargar configuración desde JSON
let CONFIG = {};

// Función para cargar la configuración
async function loadConfig() {
    try {
        const response = await fetch('config.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        CONFIG = await response.json();
        console.log('Configuración cargada:', CONFIG);
    } catch (error) {
        console.error('Error cargando configuración, usando valores por defecto:', error);
        // Configuración por defecto
        CONFIG = {
            maxVisibleArc: 'thriller-bark',
            settings: {
                enableImageModal: true,
                enableCharacterFilter: false,
                showArcCounts: true
            }
        };
    }
}

// Función para filtrar arcos visibles
function filterVisibleArcs() {
    // Si CONFIG no está cargado o maxVisibleArc no existe, mostrar todos
    if (!CONFIG || !CONFIG.maxVisibleArc) {
        console.log('CONFIG no cargado, mostrando todos los arcos');
        return onePieceData.arcs;
    }
    
    const maxIndex = onePieceData.arcs.findIndex(arc => arc.id === CONFIG.maxVisibleArc);
    if (maxIndex === -1) {
        console.log(`Arco '${CONFIG.maxVisibleArc}' no encontrado, mostrando todos los arcos`);
        return onePieceData.arcs;
    }
    
    console.log(`Mostrando arcos hasta '${CONFIG.maxVisibleArc}' (índice ${maxIndex})`);
    
    // Siempre incluir la categoría "Otros" al final
    const filteredArcs = onePieceData.arcs.slice(0, maxIndex + 1);
    const otrosArc = onePieceData.arcs.find(arc => arc.id === 'otros');
    if (otrosArc) {
        filteredArcs.push(otrosArc);
    }
    
    return filteredArcs;
}

// Función para inicializar la aplicación
async function initApp() {
    await loadConfig(); // Cargar configuración primero
    renderArcs();
    setupEventListeners();
}

// Función para renderizar los arcos
function renderArcs() {
    const arcsGrid = document.getElementById('arcs-grid');
    arcsGrid.innerHTML = '';

    const visibleArcs = filterVisibleArcs();
    console.log('Arcos visibles:', visibleArcs.length);
    
    visibleArcs.forEach(arc => {
        const arcCard = document.createElement('div');
        arcCard.className = 'arc-card';
        arcCard.innerHTML = `
            <h3>${arc.name}</h3>
            <p>${arc.description}</p>
        `;
        arcCard.addEventListener('click', () => showCharacters(arc));
        arcsGrid.appendChild(arcCard);
    });
}

// Función para renderizar personajes
function showCharacters(arc) {
    const arcsContainer = document.getElementById('arcs-container');
    const charactersContainer = document.getElementById('characters-container');
    const arcTitle = document.getElementById('arc-title');
    const charactersGrid = document.getElementById('characters-grid');

    // Ocultar contenedor de arcos y mostrar contenedor de personajes
    arcsContainer.classList.add('hidden');
    charactersContainer.classList.remove('hidden');

    // Establecer título del arco
    arcTitle.textContent = arc.name;

    // Renderizar personajes
    charactersGrid.innerHTML = '';
    arc.characters.forEach((character, index) => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';
        
        // Usar la imagen real de la base de datos del personaje
        const imageUrl = character.image;
        
        characterCard.innerHTML = `
            <img src="${imageUrl}" alt="${character.name}" class="character-image" data-character="${character.name}" onerror="this.src='${getCharacterImage(character.name, index)}'">
            <div class="character-info">
                <div class="character-name">${character.name}</div>
                <div class="character-details">
                    <div class="detail-item">
                        <span class="detail-label">Afiliación:</span>
                        <span class="affiliation">${character.affiliation}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Fruta del Diablo:</span>
                        <span class="devil-fruit">${character.devilFruit}</span>
                    </div>
                </div>
            </div>
        `;
        charactersGrid.appendChild(characterCard);
    });
    
    // Configurar event listeners para las imágenes
    setupImageModalListeners();
}

// Función para configurar el modal de imágenes
function setupImageModalListeners() {
    if (!CONFIG.settings.enableImageModal) return; // Verificar configuración
    
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.getElementsByClassName('modal-close')[0];
    
    // Eliminar todos los event listeners anteriores
    const newModal = modal.cloneNode(true);
    modal.parentNode.replaceChild(newModal, modal);
    
    // Reasignar variables
    const updatedModal = document.getElementById('image-modal');
    const updatedCloseBtn = updatedModal.getElementsByClassName('modal-close')[0];
    
    // Añadir event listeners a todas las imágenes de personajes
    const characterImages = document.querySelectorAll('.character-image');
    characterImages.forEach(img => {
        img.addEventListener('click', function() {
            updatedModal.style.display = 'block';
            modalImg.src = this.src;
            modalCaption.innerHTML = this.dataset.character;
        });
    });
    
    // Configurar event listeners universales del modal
    // Cerrar modal al hacer clic en la X
    updatedCloseBtn.addEventListener('click', function() {
        updatedModal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera de la imagen
    updatedModal.addEventListener('click', function(event) {
        if (event.target === updatedModal) {
            updatedModal.style.display = 'none';
        }
    });
    
    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && updatedModal.style.display === 'block') {
            updatedModal.style.display = 'none';
        }
    });
}

// Variables globales para la trivia
let triviaState = {
    currentQuestion: 0,
    score: 0,
    questions: [],
    allCharacters: []
};

// Función para obtener todos los personajes de todos los arcos (respetando el límite del config)
function getAllCharacters() {
    const allChars = [];
    const maxArcId = CONFIG.maxVisibleArc;
    
    // Encontrar el índice del arco máximo permitido
    const maxArcIndex = onePieceData.arcs.findIndex(arc => arc.id === maxArcId);
    
    // Solo incluir personajes hasta el arco permitido
    const arcsToShow = maxArcIndex >= 0 ? onePieceData.arcs.slice(0, maxArcIndex + 1) : onePieceData.arcs;
    
    // Siempre incluir la categoría "Otros" al final
    const otrosArc = onePieceData.arcs.find(arc => arc.id === 'otros');
    if (otrosArc) {
        arcsToShow.push(otrosArc);
    }
    
    arcsToShow.forEach(arc => {
        arc.characters.forEach(character => {
            allChars.push({
                name: character.name,
                image: character.image,
                affiliation: character.affiliation,
                devilFruit: character.devilFruit,
                arc: arc.name
            });
        });
    });
    return allChars;
}

// Función para generar preguntas aleatorias de trivia
function generateTriviaQuestions() {
    const questions = [];
    const characters = [...getAllCharacters()];
    const usedCharacters = [];
    
    // Generar 10 preguntas aleatorias
    for (let i = 0; i < 10 && characters.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const correctCharacter = characters.splice(randomIndex, 1)[0];
        usedCharacters.push(correctCharacter);
        
        // Generar 3 opciones incorrectas
        const wrongOptions = [];
        const tempCharacters = [...getAllCharacters()].filter(c => c.name !== correctCharacter.name);
        
        for (let j = 0; j < 3 && tempCharacters.length > 0; j++) {
            const wrongIndex = Math.floor(Math.random() * tempCharacters.length);
            wrongOptions.push(tempCharacters.splice(wrongIndex, 1)[0].name);
        }
        
        // Mezclar todas las opciones
        const allOptions = [correctCharacter.name, ...wrongOptions];
        const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
        
        questions.push({
            image: correctCharacter.image,
            correctAnswer: correctCharacter.name,
            options: shuffledOptions
        });
    }
    
    return questions;
}

// Función para configurar el modal de imágenes de trivia
function setupTriviaImageModal() {
    if (!CONFIG.settings.enableImageModal) return; // Verificar configuración
    
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const triviaImage = document.getElementById('trivia-character-image');
    
    // Eliminar event listeners anteriores para evitar duplicados
    const newTriviaImage = triviaImage.cloneNode(true);
    triviaImage.parentNode.replaceChild(newTriviaImage, triviaImage);
    
    // Añadir event listener para la imagen de trivia
    newTriviaImage.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        modalCaption.innerHTML = this.dataset.character || 'Personaje de One Piece';
    });
}

// Función para mostrar la pregunta actual
function showTriviaQuestion() {
    const question = triviaState.questions[triviaState.currentQuestion];
    const questionImage = document.getElementById('trivia-character-image');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionSpan = document.getElementById('current-question');
    
    // Actualizar contador
    currentQuestionSpan.textContent = triviaState.currentQuestion + 1;
    
    // Mostrar imagen con el mismo formato que en las otras secciones
    questionImage.src = question.image;
    questionImage.alt = "Personaje";
    questionImage.setAttribute('data-character', 'Personaje de One Piece');
    questionImage.onerror = function() {
        this.src = getCharacterImage('Personaje', triviaState.currentQuestion);
    };
    
    // Limpiar y mostrar opciones
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => selectAnswer(option, optionBtn));
        optionsContainer.appendChild(optionBtn);
    });
    
    // Configurar el modal para la imagen de trivia
    setupTriviaImageModal();
}

// Función para manejar la selección de respuesta
function selectAnswer(selectedOption, buttonElement) {
    const question = triviaState.questions[triviaState.currentQuestion];
    const allButtons = document.querySelectorAll('.option-btn');
    
    // Deshabilitar todos los botones
    allButtons.forEach(btn => btn.disabled = true);
    
    // Marcar respuesta correcta e incorrecta
    if (selectedOption === question.correctAnswer) {
        buttonElement.classList.add('correct');
        triviaState.score++;
    } else {
        buttonElement.classList.add('incorrect');
        // Marcar la respuesta correcta
        allButtons.forEach(btn => {
            if (btn.textContent === question.correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Avanzar a la siguiente pregunta después de un delay
    setTimeout(() => {
        triviaState.currentQuestion++;
        if (triviaState.currentQuestion < 10) {
            showTriviaQuestion();
        } else {
            showTriviaResults();
        }
    }, 2000);
}

// Función para mostrar los resultados
function showTriviaResults() {
    const quizDiv = document.getElementById('trivia-quiz');
    const resultsDiv = document.getElementById('trivia-results');
    const correctAnswersSpan = document.getElementById('correct-answers');
    const scorePercentageSpan = document.getElementById('score-percentage-text');
    const resultMessageDiv = document.getElementById('result-message');
    
    quizDiv.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
    
    correctAnswersSpan.textContent = triviaState.score;
    const percentage = (triviaState.score / 10) * 100;
    scorePercentageSpan.textContent = percentage + '%';
    
    // Mensaje según el puntaje
    let message = '';
    if (percentage === 100) {
        message = '¡Perfecto! ¡Eres un verdadero experto en One Piece! 🏆';
    } else if (percentage >= 80) {
        message = '¡Excelente! Conoces muy bien a los personajes de One Piece! ⭐';
    } else if (percentage >= 60) {
        message = '¡Bien hecho! Tienes buenos conocimientos de One Piece! 👍';
    } else if (percentage >= 40) {
        message = '¡No está mal! Sigue viendo One Piece para mejorar! 📚';
    } else {
        message = '¡Sigue practicando! El mundo de One Piece es muy grande! 🌊';
    }
    
    resultMessageDiv.textContent = message;
}

// Función para iniciar la trivia
function startTrivia() {
    triviaState = {
        currentQuestion: 0,
        score: 0,
        questions: generateTriviaQuestions(),
        allCharacters: getAllCharacters()
    };
    
    const startDiv = document.getElementById('trivia-start');
    const quizDiv = document.getElementById('trivia-quiz');
    
    startDiv.classList.add('hidden');
    quizDiv.classList.remove('hidden');
    
    // Configurar el modal antes de mostrar la primera pregunta
    setupImageModalListeners();
    showTriviaQuestion();
}

// Función para reiniciar la trivia
function restartTrivia() {
    const startDiv = document.getElementById('trivia-start');
    const quizDiv = document.getElementById('trivia-quiz');
    const resultsDiv = document.getElementById('trivia-results');
    
    resultsDiv.classList.add('hidden');
    startDiv.classList.remove('hidden');
    quizDiv.classList.add('hidden');
}

// Función para abandonar la trivia
function quitTrivia() {
    const startDiv = document.getElementById('trivia-start');
    const quizDiv = document.getElementById('trivia-quiz');
    
    quizDiv.classList.add('hidden');
    startDiv.classList.remove('hidden');
}

// Función para mostrar la base de datos de personajes
function showDatabase() {
    const arcsContainer = document.getElementById('arcs-container');
    const charactersContainer = document.getElementById('characters-container');
    const databaseContainer = document.getElementById('database-container');
    const triviaContainer = document.getElementById('trivia-container');
    
    // Ocultar todas las secciones
    arcsContainer.classList.add('hidden');
    charactersContainer.classList.add('hidden');
    triviaContainer.classList.add('hidden');
    
    // Mostrar base de datos
    databaseContainer.classList.remove('hidden');
    
    // Cargar todos los personajes
    loadAllCharacters();
    
    // Configurar filtros
    setupDatabaseFilters();
}

// Función para cargar todos los personajes en la base de datos
function loadAllCharacters() {
    const databaseGrid = document.getElementById('database-grid');
    const allCharacters = getAllCharacters();
    
    databaseGrid.innerHTML = '';
    
    allCharacters.forEach((character, index) => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';
        characterCard.dataset.name = character.name.toLowerCase();
        characterCard.dataset.arc = character.arc;
        
        characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}" class="character-image" data-character="${character.name}" onerror="this.src='${getCharacterImage(character.name, index)}'">
            <div class="character-info">
                <div class="character-name">${character.name}</div>
                <div class="character-details">
                    <div class="detail-item">
                        <span class="detail-label">Afiliación:</span>
                        <span class="affiliation">${character.affiliation}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Arco:</span>
                        <span>${character.arc}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Fruta del Diablo:</span>
                        <span class="devil-fruit">${character.devilFruit}</span>
                    </div>
                </div>
            </div>
        `;
        
        databaseGrid.appendChild(characterCard);
    });
    
    // Configurar modal de imágenes
    setupImageModalListeners();
}

// Función para configurar los filtros de la base de datos
function setupDatabaseFilters() {
    const searchInput = document.getElementById('character-search');
    const arcFilter = document.getElementById('arc-filter');
    const databaseGrid = document.getElementById('database-grid');
    
    // Llenar el filtro de arcos (solo hasta el límite del config + "Otros")
    const arcFilterSelect = document.getElementById('arc-filter');
    arcFilterSelect.innerHTML = '<option value="">Todos los arcos</option>';
    
    const maxArcId = CONFIG.maxVisibleArc;
    const maxArcIndex = onePieceData.arcs.findIndex(arc => arc.id === maxArcId);
    let arcsToShow = maxArcIndex >= 0 ? onePieceData.arcs.slice(0, maxArcIndex + 1) : onePieceData.arcs;
    
    // Siempre incluir la categoría "Otros" al final
    const otrosArc = onePieceData.arcs.find(arc => arc.id === 'otros');
    if (otrosArc) {
        arcsToShow.push(otrosArc);
    }
    
    arcsToShow.forEach(arc => {
        const option = document.createElement('option');
        option.value = arc.name;
        option.textContent = arc.name;
        arcFilterSelect.appendChild(option);
    });
    
    // Función de filtrado
    function filterCharacters() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedArc = arcFilter.value;
        const characterCards = databaseGrid.querySelectorAll('.character-card');
        
        characterCards.forEach(card => {
            const name = card.dataset.name;
            const arc = card.dataset.arc;
            
            const matchesSearch = name.includes(searchTerm);
            const matchesArc = !selectedArc || arc === selectedArc;
            
            if (matchesSearch && matchesArc) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Event listeners
    searchInput.addEventListener('input', filterCharacters);
    arcFilter.addEventListener('change', filterCharacters);
}

// Función para mostrar la trivia
function showTrivia() {
    const arcsContainer = document.getElementById('arcs-container');
    const charactersContainer = document.getElementById('characters-container');
    const databaseContainer = document.getElementById('database-container');
    const triviaContainer = document.getElementById('trivia-container');
    
    // Ocultar todas las secciones
    arcsContainer.classList.add('hidden');
    charactersContainer.classList.add('hidden');
    databaseContainer.classList.add('hidden');
    
    // Mostrar trivia
    triviaContainer.classList.remove('hidden');
}

// Función para mostrar los arcos (vista principal)
function showArcs() {
    const arcsContainer = document.getElementById('arcs-container');
    const charactersContainer = document.getElementById('characters-container');
    const databaseContainer = document.getElementById('database-container');
    const triviaContainer = document.getElementById('trivia-container');
    
    // Ocultar todas las secciones
    charactersContainer.classList.add('hidden');
    databaseContainer.classList.add('hidden');
    triviaContainer.classList.add('hidden');
    
    // Mostrar arcos
    arcsContainer.classList.remove('hidden');
}

// Función para actualizar los botones de navegación activos
function updateActiveNav(activeBtn) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Función para configurar los event listeners
function setupEventListeners() {
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', () => {
        showArcs();
        updateActiveNav(document.getElementById('arcs-btn'));
    });
    
    // Navegación principal
    const arcsBtn = document.getElementById('arcs-btn');
    const charactersBtn = document.getElementById('characters-btn');
    const triviaBtn = document.getElementById('trivia-btn');
    
    arcsBtn.addEventListener('click', () => {
        showArcs();
        updateActiveNav(arcsBtn);
    });
    
    charactersBtn.addEventListener('click', () => {
        showDatabase();
        updateActiveNav(charactersBtn);
    });
    
    triviaBtn.addEventListener('click', () => {
        showTrivia();
        updateActiveNav(triviaBtn);
    });
    
    // Event listeners de la trivia
    const startTriviaBtn = document.getElementById('start-trivia-btn');
    const quitTriviaBtn = document.getElementById('quit-trivia-btn');
    const restartTriviaBtn = document.getElementById('restart-trivia-btn');
    
    startTriviaBtn.addEventListener('click', startTrivia);
    quitTriviaBtn.addEventListener('click', quitTrivia);
    restartTriviaBtn.addEventListener('click', restartTrivia);
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initApp);
