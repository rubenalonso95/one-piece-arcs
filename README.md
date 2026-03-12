# One Piece - Arcos y Personajes

Una aplicación web interactiva para explorar todos los arcos de One Piece y sus personajes importantes.

## 🚀 Publicar en GitHub Pages

### Método 1: Automático con GitHub Actions (Recomendado)

1. **Sube tu proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```

2. **Activa GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: "GitHub Actions"

3. **El workflow se ejecutará automáticamente** y publicará tu web en:
   `https://TU-USUARIO.github.io/TU-REPOSITORIO/`

### Método 2: Manual

1. **Sube a GitHub** (como arriba)

2. **Activa Pages manualmente:**
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/root`
   - Save

## 📁 Estructura del Proyecto

```
one-piece-arcs/
├── index.html              # Página principal
├── styles.css              # Estilos
├── script.js               # Lógica y datos
├── config.json             # Configuración
├── README.md               # Documentación
└── .github/workflows/      # GitHub Actions
    └── deploy.yml
```

## ⚙️ Configuración

Edita `config.json` para personalizar:

```json
{
  "maxVisibleArc": "thriller-bark",
  "settings": {
    "enableImageModal": true,
    "enableCharacterFilter": false,
    "showArcCounts": true
  }
}
```

### Opciones de `maxVisibleArc`:
- `"thriller-bark"` - Hasta Thriller Bark
- `"sabaody-archipelago"` - Hasta Sabaody
- `"marineford"` - Hasta Marineford
- `"wano"` - Hasta Wano
- `"egghead"` - Todos los arcos

## 🎯 Características

- ✅ **Arcos filtrables** - Controla qué arcos mostrar
- ✅ **Modal de imágenes** - Previsualización al hacer clic
- ✅ **Configuración JSON** - Fácil personalización
- ✅ **Responsive** - Funciona en móviles y desktop
- ✅ **Datos oficiales** - Imágenes de One Piece Wiki

## 🔧 Solución de Problemas

### Si no carga la configuración:
- Verifica que `config.json` esté en la raíz
- Revisa la consola para errores CORS
- La web usará configuración por defecto si falla

### Si las imágenes no cargan:
- Algunas imágenes pueden ser bloqueadas por CORS
- La web funciona aunque fallen algunas imágenes

---

## 📸 **Personajes con Imágenes Actualizadas (URLs proporcionadas por usuario):**

### ✅ **Tripulación principal:**
- **Monkey D. Luffy** - Piratas de Sombrero de Paja - Gomu Gomu no Mi (Fruta Gomu Gomu)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/c/c3/Monkey_D._Luffy_Anime_Debut_Infobox.png/revision/latest?cb=20260214082949&path-prefix=es`
- **Roronoa Zoro** - Piratas de Sombrero de Paja - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/c/ca/Roronoa_Zoro_Anime_Debut_Infobox.png/revision/latest?cb=20240826010559&path-prefix=es`
- **Nami** - Piratas de Sombrero de Paja (aliada temporal) - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/2/28/Nami_Anime_Debut_Infobox.png/revision/latest?cb=20230902133513&path-prefix=es`
- **Nefertari Vivi** - Reino de Alabasta - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/9/99/Nefertari_Vivi_Anime_Debut_Infobox.png/revision/latest?cb=20200719214601&path-prefix=es`
- **Sanji** - Piratas de Sombrero de Paja - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/b/bd/Sanji_Anime_Debut_Infobox.png/revision/latest?cb=20191029181139&path-prefix=es`
- **Usopp** - Piratas de Sombrero de Paja - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/f/f3/Usopp_Anime_Debut_Infobox.png/revision/latest?cb=20221223144930&path-prefix=es`
- **Tony Tony Chopper** - Piratas de Sombrero de Paja - Hito Hito no Mi (Fruta Hito Hito)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/e/ea/Tony_Tony_Chopper_Anime_Debut_Infobox.png/revision/latest?cb=20240924204408&path-prefix=es`

### ✅ **Personajes importantes:**
- **Alvida** - Piratas de Alvida - Sube Sube no Mi (Fruta Liso Liso)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/c/cd/Alvida_Anime_Infobox.png/revision/latest?cb=20130715212930&path-prefix=es`
- **Coby** - Marina - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/c/c3/Koby_Anime_Debut_Infobox.png/revision/latest?cb=20131027040701&path-prefix=es`
- **Monkey D. Garp** - Marina - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/e/e1/Monkey_D._Garp_Anime_Infobox.png/revision/latest?cb=20160922221412&path-prefix=es`
- **Portgas D. Ace** - Piratas de Barbablanca - Mera Mera no Mi (Fruta Mera Mera)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/4/4f/Portgas_D._Ace_Anime_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20220330162003&path-prefix=es`
- **Sabo** - Ejército Revolucionario - Mera Mera no Mi (Fruta Mera Mera)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/c/c2/Sabo_Anime_Infobox.png/revision/latest?cb=20210831134019&path-prefix=es`
- **Monkey D. Dragon** - Ejército Revolucionario - Desconocida
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/f/f5/Monkey_D._Dragon_Anime_Infobox.png/revision/latest?cb=20190705140157&path-prefix=es`
- **Buggy el Payaso** - Piratas de Buggy - Bara Bara no Mi (Fruta Bara Bara)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/8/80/Buggy_Anime_Debut_Infobox.png/revision/latest?cb=20130811205903&path-prefix=es`
- **Kaido** - Piratas de las Bestias - Uo Uo no Mi (Fruta Uo Uo)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/2/2d/Kaidou_Anime_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20230626154403&path-prefix=es`
- **Charlotte Linlin (Big Mom)** - Piratas de Big Mom - Soru Soru no Mi (Fruta Soru Soru)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/d/d8/Charlotte_Linlin_Anime_Infobox.png/revision/latest?cb=20241007095424&path-prefix=es`
- **Mohji** - Piratas de Buggy - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/6/63/Mohji_Anime_Debut_Infobox.png/revision/latest?cb=20140217165658&path-prefix=es`
- **Cabaji** - Piratas de Buggy - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/6/6c/Cabaji_Anime_Infobox.png/revision/latest?cb=20211023104451&path-prefix=es`
- **Dracule Mihawk** - Siete Guerreros del Mar - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/b/bf/Dracule_Mihawk_Anime_Infobox.png/revision/latest?cb=20220612102336&path-prefix=es`
- **Bartholomew Kuma** - Piratas de Barbablanca - Nikyu Nikyu no Mi (Fruta Nikyu Nikyu)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/8/8d/Bartholomew_Kuma_Anime_Infobox.png/revision/latest?cb=20220612143841&path-prefix=es`
- **Boa Hancock** - Piratas Kuja - Mero Mero no Mi (Fruta Mero Mero)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/f/f0/Boa_Hancock_Anime_Infobox.png/revision/latest?cb=20220707114317&path-prefix=es`
- **Edward Weevil** - Piratas de Barbablanca (auto-proclamado) - Desconocida
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/b/be/Edward_Weevil_Anime_Infobox.png/revision/latest?cb=20161003180820&path-prefix=es`
- **Crocodile** - Baroque Works - Suna Suna no Mi (Fruta Suna Suna)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/f/fd/Crocodile_Anime_Infobox.png/revision/latest?cb=20161216184552&path-prefix=es`
- **Gecko Moria** - Piratas de Thriller Bark - Kage Kage no Mi (Fruta Kage Kage)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/b/be/Gecko_Moria_Anime_Infobox.png/revision/latest?cb=20160218215318&path-prefix=es`
- **Trafalgar Law** - Piratas Heart - Ope Ope no Mi (Fruta Ope Ope)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/2/20/Trafalgar_D._Water_Law_Anime_Dos_A%C3%B1os_Despu%C3%A9s_Infobox.png/revision/latest?cb=20131208122908&path-prefix=es`
- **Donquixote Doflamingo** - Piratas de Donquixote - Ito Ito no Mi (Fruta Ito Ito)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/7/7e/Donquixote_Doflamingo_Anime_Infobox.png/revision/latest?cb=20220521220453&path-prefix=es`
- **Marshall D. Teach** - Piratas de Blackbeard - Yami Yami no Mi (Fruta Yami Yami)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/6/6b/Marshall_D._Teach_Anime_Debut_Infobox.png/revision/latest?cb=20201020133237&path-prefix=es`
- **Jinbe** - Piratas de Sombrero de Paja - Ninguna (Hombre-Tiburón)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/8/81/Jinbe_Anime_Infobox.png/revision/latest?cb=20170521165842&path-prefix=es`
- **Richie** - Piratas de Buggy - Ninguna (león)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/2/2d/Richie_Anime_Debut_Infobox.png/revision/latest?cb=20201101232857&path-prefix=es`
- **Kuro** - Piratas Gato - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/7/7e/Kuro_Anime_Infobox.png/revision/latest?cb=20170827012437&path-prefix=es`
- **Jango** - Piratas Gato - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/d/de/Jango_Anime_Infobox.png/revision/latest?cb=20241006144045&path-prefix=es`
- **Kaya** - Civil - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/f/fa/Kaya_Anime_Debut_Infobox.png/revision/latest?cb=20160924201848&path-prefix=es`
- **Zeff** - Restaurante Baratie - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/d/d9/Zeff_Anime_Infobox.png/revision/latest?cb=20130627113626&path-prefix=es`
- **Don Krieg** - Piratas de Krieg - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/b/bb/Krieg_Anime_Infobox.png/revision/latest?cb=20170827021202&path-prefix=es`
- **Hatchan** - Piratas de Arlong - Ninguna (hombre-pulpo)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/3/3d/Hatchan_Anime_Infobox.png/revision/latest?cb=20130929180436&path-prefix=es`
- **Arlong** - Piratas de Arlong - Ninguna (hombre-pez tiburón)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/0/01/Arlong_Anime_Infobox.png/revision/latest?cb=20130428125753&path-prefix=es`
- **Nojiko** - Aldea Cocoyashi - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/0/06/Nojiko_Anime_Debut_Infobox.png/revision/latest?cb=20160924185422&path-prefix=es`
- **Belmere** - Aldea Cocoyashi - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/3/3f/Bell-m%C3%A8re_Anime_Infobox.png/revision/latest?cb=20160924172433&path-prefix=es`
- **Genzo** - Aldea Cocoyashi - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/e/eb/Genzo_Anime_Debut_Infobox.png/revision/latest?cb=20160923213848&path-prefix=es`
- **Smoker** - Marina - Moku Moku no Mi (Fruta Moku Moku)
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/6/65/Smoker_Anime_Debut_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20210203143045&path-prefix=es`
- **Tashigi** - Marina - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/3/31/Tashigi_Anime_Debut_Infobox.png/revision/latest?cb=20160924170738&path-prefix=es`
- **Shanks** - Piratas de Pelirroja - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/6/66/Shanks_Anime_Infobox.png/revision/latest?cb=20240920081450&path-prefix=es`
- **Makino** - Piratas de Pelirroja - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/d/d3/Makino_Anime_Debut_Infobox.png/revision/latest?cb=20230410134248&path-prefix=es`
- **Dadan** - Banda de Dadan - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/b/b4/Curly_Dadan_Anime_Infobox.png/revision/latest?cb=20160924183933&path-prefix=es`
- **Benn Beckman** - Piratas de Pelirroja - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/1/12/Benn_Beckman_Anime_Infobox.png/revision/latest?cb=20240924032441&path-prefix=es`
- **Lucky Roux** - Piratas de Pelirroja - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/9/97/Lucky_Roux_Anime_Dos_A%C3%B1os_Despu%C3%A9s_Infobox.png/revision/latest?cb=20230411005926&path-prefix=es`
- **Yasopp** - Piratas de Pelirroja - Ninguna
  - 📸 Imagen: `https://static.wikia.nocookie.net/onepiece/images/1/15/Yasopp_Anime_Infobox.png/revision/latest?cb=20240924033159&path-prefix=es`

## 📝 **Personajes Añadidos (Nuevos personajes principales por arco):**

### **Romance Dawn Arc:**
- **Morgan** - Marina (Capitán) - Ninguna
- **Helmeppo** - Marina (Hijo de Morgan) - Ninguna

### **Alabasta Arc:**
- **Daz Bones (Mr. 1)** - Baroque Works - Supa Supa no Mi (Fruta Supa Supa)
- **Bon Clay (Mr. 2)** - Baroque Works - Mane Mane no Mi (Fruta Mane Mane)
- **Mr. 4** - Baroque Works - Ninguna (usa perro con fruta)
- **Miss Merry Christmas** - Baroque Works - Mogu Mogu no Mi (Fruta Mogu Mogu)
- **Mr. 7** - Baroque Works - Ninguna
- **Miss Father's Day** - Baroque Works - Ninguna

### **Skypiea Arc:**
- **Satori** - Sacerdote de Enel - Ninguna (usa Mantra)
- **Shura** - Sacerdote de Enel - Ninguna (usa Mantra)
- **Gedatsu** - Sacerdote de Enel - Ninguna (usa Mantra)
- **Ohm** - Sacerdote de Enel - Ninguna (usa Mantra)
- **Aisa** - Shandia - Ninguna (posee Mantra)
- **Kamakiri** - Guerrero Shandia - Ninguna

### **Water 7 Arc:**
- **Paulie** - Galley-La Company - Ninguna
- **Lulu** - Galley-La Company - Ninguna
- **Tilestone** - Galley-La Company - Ninguna
- **Chimney** - Water 7 - Ninguna
- **Gonbe** - Water 7 - Ninguna (nutria)

### **Sabaody Archipelago Arc:**
- **Eustass Kid** - Piratas de Kid - Ninguna
- **Killer** - Piratas de Kid - Ninguna
- **Basil Hawkins** - Piratas de Hawkins - Ninguna
- **X Drake** - Piratas de Drake - Ryu Ryu no Mi, modelo: Alosaurio (Fruta Ryu Ryu, modelo Alosaurio)
- **Capone Bege** - Piratas de Fire Tank - Shiro Shiro no Mi (Fruta Shiro Shiro)
- **Jewelry Bonney** - Piratas de Bonney - Desconocida
- **Urouge** - Piratas de Urouge - Ninguna
- **Scratchmen Apoo** - Piratas de Apoo - Oto Oto no Mi (Fruta Oto Oto)
- **Camie** - Isla de los Hombres-Pez - Ninguna
- **Shakky** - Bar Shakky's - Ninguna

### **Impel Down Arc:**
- **Shiryu** - Guardia Jefe de Impel Down - Ninguna
- **Sadi-chan** - Guardia de Impel Down - Ninguna
- **Inazuma** - Ejército Revolucionario - Choki Choki no Mi (Fruta Choki Choki)
- **Minotaurus** - Guardia de Impel Down - Zoan (toro)

### **Marineford Arc:**
- **Jozu** - Piratas de Barbablanca - Kira Kira no Mi (Fruta Kira Kira, diamante)
- **Vista** - Piratas de Barbablanca - Ninguna (espadachín)

### **Fishman Island Arc:**
- **Fukaboshi** - Reino Gyojin - Ninguna (hombre-pez tiburón)
- **Ryuboshi** - Reino Gyojin - Ninguna (hombre-pez)
- **Manboshi** - Reino Gyojin - Ninguna (hombre-pez)
- **Daruma** - Nuevo Ejército Hombre-Pez - Ninguna (hombre-pez topo)
- **Ikaros** - Nuevo Ejército Hombre-Pez - Ninguna (hombre-pez calamar)
- **Hyouzou** - Nuevo Ejército Hombre-Pez - Ninguna (hombre-pez)

### **Dressrosa Arc:**
- **Trebol** - Piratas de Donquixote - Beta Beta no Mi (Fruta Beta Beta)
- **Diamante** - Piratas de Donquixote - Hira Hira no Mi (Fruta Hira Hira)
- **Pica** - Piratas de Donquixote - Ishi Ishi no Mi (Fruta Ishi Ishi)
- **Bartolomeo** - Piratas de Barto - Bari Bari no Mi (Fruta Bari Bari)
- **Cavendish** - Piratas de Cavendish - Ninguna
- **Leo** - Ejército Tontatta - Ninguna
- **Fujitora (Issho)** - Marina - Zushi Zushi no Mi (Fruta Zushi Zushi)
- **Sai** - Ejército Happo - Ninguna

### **Whole Cake Island Arc:**
- **Perospero** - Piratas de Big Mom - Pero Pero no Mi (Fruta Pero Pero)
- **Vinsmoke Judge** - Germa 66 - Ninguna
- **Vinsmoke Reiju** - Germa 66 - Ninguna
- **Vinsmoke Ichiji** - Germa 66 - Ninguna
- **Vinsmoke Niji** - Germa 66 - Ninguna
- **Vinsmoke Yonji** - Germa 66 - Ninguna
- **Daifuku** - Piratas de Big Mom - Hoya Hoya no Mi (Fruta Hoya Hoya)
- **Oven** - Piratas de Big Mom - Netsu Netsu no Mi (Fruta Netsu Netsu)

### **Wano Country Arc:**
- **King (Alber)** - Piratas de las Bestias - Ryu Ryu no Mi, modelo: Pteranodon (Fruta Ryu Ryu, modelo Pteranodon)
- **Queen (The plague)** - Piratas de las Bestias - Ryu Ryu no Mi, modelo: Braquiosaurio (Fruta Ryu Ryu, modelo Braquiosaurio)
- **Jack** - Piratas de las Bestias - Zoan (Mamut)
- **Who's Who** - Piratas de las Bestias - Neko Neko no Mi, modelo: Sabre Tiger (Fruta Neko Neko, modelo Tigre Dientes de Sable)
- **Sasaki** - Piratas de las Bestias - Ryu Ryu no Mi, modelo: Triceratops (Fruta Ryu Ryu, modelo Triceratops)
- **Ulti** - Piratas de las Bestias - Ryu Ryu no Mi, modelo: Pachycephalosaurus (Fruta Ryu Ryu, modelo Paquicefalosaurio)
- **Page One** - Piratas de las Bestias - Ryu Ryu no Mi, modelo: Spinosaurus (Fruta Ryu Ryu, modelo Espinosaurio)
- **Black Maria** - Piratas de las Bestias - Kumo Kumo no Mi, modelo: Rosamygale Grauvogeli (Fruta Kumo Kumo, modelo Araña)
- **Denjiro** - Samuráis de Kozuki - Ninguna
- **Ashura Doji** - Samuráis de Kozuki - Ninguna
- **Kawamatsu** - Samuráis de Kozuki - Ninguna (hombre-pez koi)
- **Izo** - Samuráis de Kozuki / ex-Piratas de Barbablanca - Ninguna

### **Egghead Arc:**
- **Jewelry Bonney** - Piratas de Bonney - Toshi Toshi no Mi (Fruta Toshi Toshi)

## 📊 **Estadísticas Actualizadas:**
- **Total personajes:** ~165+
- **Personajes con imágenes actualizadas:** 51
- **Nuevos personajes añadidos:** 6 (Benn Beckman, Lucky Roo, Yasopp + Shanks, Makino, Dadan)
- **Personajes eliminados:** 6 (Sham, Buchi, Pearl, Gin, Kuroobi, Choo - personajes secundarios)
- **Sin duplicados:** Cada personaje aparece solo en su primer arco
- **Formato:** Español de España (castellano)

## 🔄 **Cómo actualizar nuevos personajes:**
1. **Añadir al script.js:** Insertar el personaje en su primer arco de aparición
2. **Añadir al README.md:** Incluir en la sección correspondiente con formato:
   ```
   - **Nombre** - Afiliación - Fruta del Diablo
     - 📸 Imagen: `URL_de_la_imagen`
   ```
3. **Verificar duplicados:** Asegurarse que el personaje no aparece en arcos anteriores

## 📋 **Información del Proyecto:**
- **Título:** One Piece Arcs Web Project
- **Descripción:** Aplicación web interactiva que muestra todos los arcos de One Piece hasta Egghead
- **Características:**
  - Navegación por arcos
  - Lista de personajes importantes por arco
  - Imágenes de personajes
  - Información de afiliación y frutas del diablo
  - Diseño responsive
  - Sin duplicados (cada personaje aparece solo una vez)

## 🚀 **Tecnologías utilizadas:**
- HTML5
- CSS3 (con diseño responsive)
- JavaScript (ES6+)
- One Piece Wiki (para imágenes)

## 📖 **Notas importantes:**
- Los nombres de las frutas están adaptados al español de España
- Cada personaje aparece solo en su primer arco para facilitar el aprendizaje
- Las imágenes utilizan URLs de la One Piece Wiki para mayor consistencia
- El proyecto incluye todos los arcos hasta Egghead
