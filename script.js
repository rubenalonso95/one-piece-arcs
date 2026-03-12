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
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/d3/Makino_Anime_Debut_Infobox.png/revision/latest?cb=20230410134248&path-prefix=es",
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
                },
                {
                    name: "Alvida",
                    image: "https://static.wikia.nocookie.net/onepiece/images/c/cd/Alvida_Anime_Infobox.png/revision/latest?cb=20130715212930&path-prefix=es",
                    affiliation: "Piratas de Alvida",
                    devilFruit: "Sube Sube no Mi (Fruta Liso Liso)"
                }
            ]
        },
        {
            id: "reverse-mountain",
            name: "Reverse Mountain Arc",
            description: "La entrada a la Grand Line y el encuentro con Vivi",
            characters: [
                {
                    name: "Nefertari Vivi (Miss Wednesday)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/99/Nefertari_Vivi_Anime_Debut_Infobox.png/revision/latest?cb=20200719214601&path-prefix=es",
                    affiliation: "Baroque Works (encubierta)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Nico Robin (Miss All Sunday)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/92/Nico_Robin_Anime_Debut_Infobox.png/revision/latest?cb=20140407170142&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Hana Hana no Mi (Fruta Hana Hana)"
                },
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
                    image: "https://static.wikia.nocookie.net/onepiece/images/3/34/Crocus_Anime_Infobox.png/revision/latest?cb=20250808231637&path-prefix=es",
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
            id: "alabasta",
            name: "Alabasta Arc",
            description: "La batalla contra Crocodile por Alabasta",
            characters: [
                {
                    name: "Crocodile",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/86/Sir_Crocodile_Anime_Post_Timeskip_Infobox.png",
                    affiliation: "Baroque Works",
                    devilFruit: "Suna Suna no Mi (Fruta Suna Suna)"
                },
                {
                    name: "Nefertari Vivi",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/99/Nefertari_Vivi_Anime_Debut_Infobox.png/revision/latest?cb=20200719214601&path-prefix=es",
                    affiliation: "Reino de Alabasta",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Pell",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/78/Pell_Anime_Infobox.png",
                    affiliation: "Reino de Alabasta",
                    devilFruit: "Tori Tori no Mi, modelo: Halcón (Fruta Tori Tori, modelo Halcón)"
                },
                {
                    name: "Chaka",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Chaka_Anime_Infobox.png",
                    affiliation: "Reino de Alabasta",
                    devilFruit: "Inu Inu no Mi, modelo: Chacal (Fruta Inu Inu, modelo Chacal)"
                },
                {
                    name: "Portgas D. Ace",
                    image: "https://static.wikia.nocookie.net/onepiece/images/4/4f/Portgas_D._Ace_Anime_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20220330162003&path-prefix=es",
                    affiliation: "Piratas de Barbablanca",
                    devilFruit: "Mera Mera no Mi (Fruta Mera Mera)"
                },
                {
                    name: "Koza",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Koza_Anime_Infobox.png",
                    affiliation: "Ejército Rebelde",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Nico Robin",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/e7/Nico_Robin_Anime_Post_Timeskip_Infobox.png",
                    affiliation: "Baroque Works (luego Piratas de Sombrero de Paja)",
                    devilFruit: "Hana Hana no Mi (Fruta Hana Hana)"
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
                    name: "Zala (Miss Doublefinger)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/60/Zala_Anime_Infobox.png/revision/latest?cb=20160924182606&path-prefix=es",
                    affiliation: "Baroque Works",
                    devilFruit: "Toge Toge no Mi (Fruta Toge Toge)"
                },
                {
                    name: "Miss Merry Christmas",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/07/Miss_Merry_Christmas_Anime_Infobox.png",
                    affiliation: "Baroque Works",
                    devilFruit: "Mogu Mogu no Mi (Fruta Mogu Mogu)"
                },
                {
                    name: "Mr. 7",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7e/Mr._7_Anime_Infobox.png",
                    affiliation: "Baroque Works",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Miss Father's Day",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/9e/Miss_Father's_Day_Anime_Infobox.png",
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
                    name: "Marshall D. Teach",
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
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6d/Enel_Anime_Infobox.png",
                    affiliation: "Auto-proclamado Dios de Skypiea",
                    devilFruit: "Goro Goro no Mi (Fruta Goro Goro)"
                },
                {
                    name: "Gan Fall",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/9e/Gan_Fall_Anime_Infobox.png",
                    affiliation: "Antiguo Dios de Skypiea",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Conis",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/62/Conis_Anime_Infobox.png",
                    affiliation: "Skypiea",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Wyper",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/0b/Wyper_Anime_Infobox.png",
                    affiliation: "Guerreros Shandia",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Noland",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/81/Noland_Anime_Infobox.png",
                    affiliation: "Explorador (flashback)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Satori",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7c/Satori_Anime_Infobox.png",
                    affiliation: "Sacerdote de Enel",
                    devilFruit: "Ninguna (usa Mantra)"
                },
                {
                    name: "Shura",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/89/Shura_Anime_Infobox.png",
                    affiliation: "Sacerdote de Enel",
                    devilFruit: "Ninguna (usa Mantra)"
                },
                {
                    name: "Gedatsu",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/68/Gedatsu_Anime_Infobox.png",
                    affiliation: "Sacerdote de Enel",
                    devilFruit: "Ninguna (usa Mantra)"
                },
                {
                    name: "Ohm",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/0f/Ohm_Anime_Infobox.png",
                    affiliation: "Sacerdote de Enel",
                    devilFruit: "Ninguna (usa Mantra)"
                },
                {
                    name: "Aisa",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Aisa_Anime_Infobox.png",
                    affiliation: "Shandia",
                    devilFruit: "Ninguna (posee Mantra)"
                },
                {
                    name: "Kamakiri",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7a/Kamakiri_Anime_Infobox.png",
                    affiliation: "Guerrero Shandia",
                    devilFruit: "Ninguna"
                }
            ]
        },
        {
            id: "water-7-enies-lobby",
            name: "Water 7 / Enies Lobby Arc",
            description: "La traición de Robin, el rescate y la llegada de Franky",
            characters: [
                {
                    name: "Franky",
                    image: "https://static.wikia.nocookie.net/onepiece/images/5/5b/Franky_Anime_Post_Timeskip_Infobox.png",
                    affiliation: "Franky Family (luego Piratas de Sombrero de Paja)",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Foxy",
                    image: "https://static.wikia.nocookie.net/onepiece/images/2/28/Foxy_Anime_Infobox.png",
                    affiliation: "Piratas de Foxy",
                    devilFruit: "Noro Noro no Mi (Fruta Noro Noro)"
                },
                {
                    name: "Kuzan (Aokiji)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/d/dc/Aokiji_Anime_Infobox.png",
                    affiliation: "Marina",
                    devilFruit: "Hie Hie no Mi (Fruta Hie Hie)"
                },
                {
                    name: "Iceburg",
                    image: "https://static.wikia.nocookie.net/onepiece/images/b/b4/Iceburg_Anime_Infobox.png",
                    affiliation: "Galley-La Company",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Paulie",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/83/Paulie_Anime_Infobox.png",
                    affiliation: "Galley-La Company",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kaku",
                    image: "https://static.wikia.nocookie.net/onepiece/images/4/46/Kaku_Anime_Infobox.png",
                    affiliation: "CP9",
                    devilFruit: "Ushi Ushi no Mi, modelo: Jirafa (Fruta Ushi Ushi, modelo Jirafa)"
                },
                {
                    name: "Jabura",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/90/Jabura_Anime_Infobox.png",
                    affiliation: "CP9",
                    devilFruit: "Inu Inu no Mi, modelo: Lobo (Fruta Inu Inu, modelo Lobo)"
                },
                {
                    name: "Blueno",
                    image: "https://static.wikia.nocookie.net/onepiece/images/e/e2/Blueno_Anime_Infobox.png",
                    affiliation: "CP9",
                    devilFruit: "Doa Doa no Mi (Fruta Doa Doa)"
                },
                {
                    name: "Kalifa",
                    image: "https://static.wikia.nocookie.net/onepiece/images/2/2e/Kalifa_Anime_Infobox.png",
                    affiliation: "CP9",
                    devilFruit: "Awa Awa no Mi (Fruta Awa Awa)"
                },
                {
                    name: "Kumadori",
                    image: "https://static.wikia.nocookie.net/onepiece/images/1/13/Kumadori_Anime_Infobox.png",
                    affiliation: "CP9",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Fukuro",
                    image: "https://static.wikia.nocookie.net/onepiece/images/7/7e/Fukuro_Anime_Infobox.png",
                    affiliation: "CP9",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Spandam",
                    image: "https://static.wikia.nocookie.net/onepiece/images/0/0d/Spandam_Anime_Infobox.png",
                    affiliation: "CP9",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Kokoro",
                    image: "https://static.wikia.nocookie.net/onepiece/images/9/96/Kokoro_Anime_Infobox.png",
                    affiliation: "Water 7",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Chimney",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/67/Chimney_Anime_Infobox.png",
                    affiliation: "Water 7",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Gonbe",
                    image: "https://static.wikia.nocookie.net/onepiece/images/8/87/Gonbe_Anime_Infobox.png",
                    affiliation: "Water 7",
                    devilFruit: "Ninguna (nutria)"
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
                    image: "https://i.imgur.com/3WZ2Y6D.jpg",
                    affiliation: "Piratas de Gecko Moria",
                    devilFruit: "Kage Kage no Mi (Fruta Kage Kage)"
                },
                {
                    name: "Brook",
                    image: "https://i.imgur.com/8WZ3Z7E.jpg",
                    affiliation: "Piratas de Sombrero de Paja",
                    devilFruit: "Yomi Yomi no Mi (Fruta Yomi Yomi)"
                },
                {
                    name: "Perona",
                    image: "https://i.imgur.com/5WZ4A8F.jpg",
                    affiliation: "Piratas de Gecko Moria",
                    devilFruit: "Horo Horo no Mi (Fruta Horo Horo)"
                },
                {
                    name: "Absalom",
                    image: "https://i.imgur.com/7WZ5B9G.jpg",
                    affiliation: "Piratas de Gecko Moria",
                    devilFruit: "Suke Suke no Mi (Fruta Suke Suke)"
                },
                {
                    name: "Hogback",
                    image: "https://i.imgur.com/4WZ6C0H.jpg",
                    affiliation: "Piratas de Gecko Moria",
                    devilFruit: "Ninguna"
                },
                {
                    name: "Lola",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6c/Lola_Anime_Infobox.png/revision/latest?cb=20130715212930&path-prefix=es",
                    affiliation: "Piratas de Rolling (aliada)",
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
                    image: "https://i.imgur.com/8WZ6K0P.jpg",
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
    return onePieceData.arcs.slice(0, maxIndex + 1);
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
    
    // Añadir event listeners a todas las imágenes de personajes
    const characterImages = document.querySelectorAll('.character-image');
    characterImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalCaption.innerHTML = this.dataset.character;
        });
    });
    
    // Cerrar modal al hacer clic en la X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Función para configurar los event listeners
function setupEventListeners() {
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', () => {
        const arcsContainer = document.getElementById('arcs-container');
        const charactersContainer = document.getElementById('characters-container');
        
        charactersContainer.classList.add('hidden');
        arcsContainer.classList.remove('hidden');
    });
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initApp);
