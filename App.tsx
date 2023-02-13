import React,{useState,useEffect} from 'react';

const Q = [{question: '¿En qué película de Disney una joven se enamora de un príncipe encantado después de conocerlo en un baile?',
options: ['La Cenicienta', 'La Bella Durmiente', 'La Sirenita'],
answer_short: 'La Cenicienta',
answer_extended: 'En la película "La Cenicienta" de Disney, una joven se enamora de un príncipe encantado después de conocerlo en un baile. La película se estrenó en 1950 y fue un gran éxito de taquilla.'},

{question: '¿En qué película de Disney un niño se adentra en un mundo mágico de fantasía donde tiene que enfrentarse a una reina malvada?',
options: ['La Sirenita', 'Alicia en el País de las Maravillas', 'Blancanieves y los siete enanitos'],
answer_short: 'Alicia en el País de las Maravillas',
answer_extended: 'En la película "Alicia en el País de las Maravillas" de Disney, un niño se adentra en un mundo mágico de fantasía donde tiene que enfrentarse a una reina malvada. La película se basa en la novela de Lewis Carroll y se estrenó en 1951.'},

{question: '¿Cómo se llama el gato en la película "Aristogatos" de Disney?',
options: ['Gato', 'Oliver', 'Toulouse'],
answer_short: 'Toulouse',
answer_extended: 'En la película "Aristogatos" de Disney, el gato se llama Toulouse. La película se estrenó en 1970 y cuenta la historia de una familia de gatos que vive en París.'},

{question: '¿En qué película de Disney un león joven debe asumir su lugar como rey después de la muerte de su padre?',
options: ['El Rey León', 'Bambi', 'Dumbo'],
answer_short: 'El Rey León',
answer_extended: 'En la película "El Rey León" de Disney, un león joven llamado Simba debe asumir su lugar como rey después de la muerte de su padre. La película se estrenó en 1994 y se convirtió en un gran éxito de taquilla.'},

{question: '¿En qué película de Disney una niña se adentra en un mundo mágico donde se encuentra con personajes como el Sombrerero Loco y el Gato de Cheshire?',
options: ['Blancanieves y los siete enanitos', 'Peter Pan', 'Alicia en el País de las Maravillas'],
answer_short: 'Alicia en el País de las Maravillas',
answer_extended: 'En la película "Alicia en el País de las Maravillas" de Disney, una niña se adentra en un mundo mágico donde se encuentra con personajes como el Sombrerero Loco y el Gato de Cheshire. La película se estrenó en 1951 y se convirtió en un clásico instantáneo.'},

{question: '¿En qué película de Disney una niña es llevada a un mundo mágico por una nana y tiene que enfrentarse a la malvada Reina de Corazones?',
options: ['La Sirenita', 'Mary Poppins', 'Alicia en el País de las Maravillas'],
answer_short: 'Mary Poppins',
answer_extended: 'En la película "Mary Poppins" de Disney, una niña es llevada a un mundo mágico por una nana y tiene que enfrentarse a la malvada Reina de Corazones. La película se estrenó en 1964 y combina actores reales con animación.'},

{question: '¿En qué película de Disney un muñeco de madera cobra vida y sueña con convertirse en un niño de verdad?',
options: ['Bambi', 'Dumbo', 'Pinocho'],
answer_short: 'Pinocho',
answer_extended: 'En la película "Pinocho" de Disney, un muñeco de madera cobra vida y sueña con convertirse en un niño de verdad. La película se estrenó en 1940 y se convirtió en un clásico instantáneo.'},

{question: '¿Cómo se llama el zorro astuto en la película "Robin Hood" de Disney?',
options: ['Baloo', 'Tod', 'Robin Hood'],
answer_short: 'Robin Hood',
answer_extended: 'En la película "Robin Hood" de Disney, el zorro astuto se llama Robin Hood. La película se estrenó en 1973 y cuenta la historia del famoso ladrón que roba a los ricos para dárselo a los pobres.'},

{question: '¿En qué película de Disney una princesa es envenenada por una bruja y es despertada por el beso de un príncipe?',
options: ['Cenicienta', 'La Bella Durmiente', 'La Cenicienta'],
answer_short: 'La Bella Durmiente',
answer_extended: 'En la película "La Bella Durmiente" de Disney, una princesa es envenenada por una bruja y es despertada por el beso de un príncipe. La película se estrenó en 1959 y se basa en el cuento de hadas del mismo nombre.'},

{question: '¿En qué película de Disney un joven campesino se convierte en un caballero y salva a Inglaterra de la invasión?',
options: ['La Espada en la Piedra', 'Los Tres Caballeros', 'Merlín el Encantador'],
answer_short: 'La Espada en la Piedra',
answer_extended: 'En la película "La Espada en la Piedra" de Disney, un joven campesino llamado Arturo se convierte en un caballero y salva a Inglaterra de la invasión. La película se estrenó en 1963 y se basa en el libro "The Sword in the Stone" de T.H. White.'},

{question: '¿En qué película de Disney una niña con un gran corazón ayuda a un grupo de perros callejeros a escapar de la perrera y encontrar un hogar?',
options: ['La Dama y el Vagabundo', '101 Dálmatas', 'Los Aristogatos'],
answer_short: 'La Dama y el Vagabundo',
answer_extended: 'En la película "La Dama y el Vagabundo" de Disney, una niña con un gran corazón ayuda a un grupo de perros callejeros a escapar de la perrera y encontrar un hogar. La película se estrenó en 1955 y cuenta la historia de amor entre una perra de raza y un perro callejero.'},
{question: '¿En qué película de Disney una joven india y un aventurero inglés luchan contra una compañía minera para proteger la naturaleza?',
options: ['Pocahontas', 'Tarzán', 'Hércules'],
answer_short: 'Pocahontas',
answer_extended: 'En la película "Pocahontas" de Disney, una joven india y un aventurero inglés luchan contra una compañía minera para proteger la naturaleza. La película se estrenó en 1995 y está basada en la historia real de la princesa Pocahontas y el colono inglés John Smith.'},

{question: '¿En qué película de Disney una joven huérfana vive con su malvada madrastra y sus hermanastras hasta que conoce a un apuesto príncipe?',
options: ['La Cenicienta', 'La Bella Durmiente', 'Blancanieves y los siete enanitos'],
answer_short: 'La Cenicienta',
answer_extended: 'En la película "La Cenicienta" de Disney, una joven huérfana vive con su malvada madrastra y sus hermanastras hasta que conoce a un apuesto príncipe. La película se estrenó en 1950 y se convirtió en un clásico instantáneo.'},

{question: '¿En qué película de Disney un elefante con orejas gigantes aprende a volar con la ayuda de un ratón y se convierte en una estrella del circo?',
options: ['Dumbo', 'Bambi', 'La Cenicienta'],
answer_short: 'Dumbo',
answer_extended: 'En la película "Dumbo" de Disney, un elefante con orejas gigantes aprende a volar con la ayuda de un ratón y se convierte en una estrella del circo. La película se estrenó en 1941 y es conocida por su emotiva historia y su inolvidable canción "Baby Mine".'},

{question: '¿En qué película de Disney un gato astuto ayuda a su dueña a evitar que su casa sea vendida a un avaricioso millonario?',
options: ['Los Aristogatos', 'La Dama y el Vagabundo', 'Oliver y su Pandilla'],
answer_short: 'Los Aristogatos',
answer_extended: 'En la película "Los Aristogatos" de Disney, un gato astuto ayuda a su dueña a evitar que su casa sea vendida a un avaricioso millonario. La película se estrenó en 1970 y es conocida por sus divertidos personajes y su memorable banda sonora.'},
{question: '¿En qué película de Disney un león joven lucha por recuperar su lugar en el trono después de que su padre sea asesinado?',
options: ['El Rey León', 'Aladdín', 'La Sirenita'],
answer_short: 'El Rey León',
answer_extended: 'En la película "El Rey León" de Disney, un león joven llamado Simba lucha por recuperar su lugar en el trono después de que su padre sea asesinado. La película se estrenó en 1994 y se convirtió en un clásico instantáneo.'},

{question: '¿En qué película de Disney una joven campesina se une a un dragón y un grupo de guerreros para salvar a China de una invasión mongola?',
options: ['Mulan', 'La Bella y la Bestia', 'La Sirenita'],
answer_short: 'Mulan',
answer_extended: 'En la película "Mulan" de Disney, una joven campesina llamada Mulan se une a un dragón y un grupo de guerreros para salvar a China de una invasión mongola. La película se estrenó en 1998 y es conocida por su mensaje de empoderamiento femenino.'},

{question: '¿En qué película de Disney un hombre es transportado a un mundo mágico habitado por criaturas fantásticas y se convierte en un héroe inesperado?',
options: ['La Historia Interminable', 'El Regreso de la Bruja', 'El Secreto de la Montaña'],
answer_short: 'La Historia Interminable',
answer_extended: 'En la película "La Historia Interminable" de Disney, un hombre es transportado a un mundo mágico habitado por criaturas fantásticas y se convierte en un héroe inesperado. La película se estrenó en 1984 y se basa en el libro de Michael Ende.'},

{question: '¿En qué película de Disney una niña es transportada a un mundo mágico poblado por seres extraños y ayuda a un joven a luchar contra un malvado rey?',
options: ['Taron y el Caldero Mágico', 'Fantasía', 'Los Cachorros de la Película'],
answer_short: 'Taron y el Caldero Mágico',
answer_extended: 'En la película "Taron y el Caldero Mágico" de Disney, una niña es transportada a un mundo mágico poblado por seres extraños y ayuda a un joven a luchar contra un malvado rey. La película se estrenó en 1985 y es conocida por ser la primera película de Disney en utilizar animación asistida por computadora.'},

{question: '¿Cómo se llama el perro de la película "La Dama y el Vagabundo" de Disney?',
options: ['Canelo', 'Goofy', 'Golfo'],
answer_short: 'Golfo',
answer_extended: 'El perro de la película "La Dama y el Vagabundo" de Disney se llama Golfo. Es conocido por ser el protagonista masculino y por su famosa escena compartiendo un plato de pasta con la dama.'},

{question: '¿Cómo se llama la princesa en la película "La Bella Durmiente" de Disney?',
options: ['Elsa', 'Aurora', 'Blancanieves'],
answer_short: 'Aurora',
answer_extended: 'La princesa en la película "La Bella Durmiente" de Disney se llama Aurora. Es conocida por su belleza y su canción "Once Upon a Dream". La película se estrenó en 1959 y es considerada uno de los clásicos más icónicos de Disney.'},

{question: '¿Cómo se llama la princesa de la película "La Sirenita" de Disney?',
options: ['Ariel', 'Bella', 'Cenicienta'],
answer_short: 'Ariel',
answer_extended: 'La princesa de la película "La Sirenita" de Disney se llama Ariel. Es conocida por su gran voz y por su amor por el mundo humano. La película se estrenó en 1989 y es considerada un clásico de la animación.'},

{question: '¿Cómo se llama el personaje principal de la película "El Jorobado de Notre Dame" de Disney?',
options: ['Frollo', 'Esmeralda', 'Quasimodo'],
answer_short: 'Quasimodo',
answer_extended: 'El personaje principal de la película "El Jorobado de Notre Dame" de Disney se llama Quasimodo. Es conocido por su deformidad física y por su canción "Corazón de Campana". La película se estrenó en 1996 y es una de las más oscuras de la era de Disney Renacimiento.'},

{question: '¿Cómo se llama el personaje principal de la película "El Zorro y el Sabueso" de Disney?',
options: ['Tod', 'Vixey', 'Copper'],
answer_short: 'Copper',
answer_extended: 'El personaje principal de la película "El Zorro y el Sabueso" de Disney se llama Copper. Es conocido por su amistad con el zorro Tod y por su lucha contra la adversidad. La película se estrenó en 1981 y es considerada un clásico de la animación.'},

{question: '¿Cómo se llama la princesa en la película "La Princesa y el Sapo" de Disney?',
options: ['Tiana', 'Charlotte', 'Naveen'],
answer_short: 'Tiana',
answer_extended: 'La princesa en la película "La Princesa y el Sapo" de Disney se llama Tiana. Es conocida por su trabajo duro y por su famosa canción "Casi llego allí". La película se estrenó en 2009 y es considerada una de las últimas de la era de Disney Renacimiento.'},

{question: '¿Cómo se llama la villana en la película "101 Dálmatas" de Disney?',
options: ['Maléfica', 'Úrsula', 'Cruella de Vil'],
answer_short: 'Cruella de Vil',
answer_extended: 'La villana en la película "101 Dálmatas" de Disney se llama Cruella de Vil. Es conocida por su obsesión con los abrigos de piel de dálmatas y por su famosa canción "Cruella de Vil". La película se estrenó en 1961 y es considerada un clásico de la animación.'},

{question: '¿Cómo se llama la princesa en la película "La Bella Durmiente" de Disney?',
options: ['Aurora', 'Blanca Nieves', 'Cenicienta'],
answer_short: 'Aurora',
answer_extended: 'La princesa en la película "La Bella Durmiente" de Disney se llama Aurora. Es conocida por su belleza y por ser víctima de un hechizo de sueño. La película se estrenó en 1959 y es considerada un clásico de la animación.'},

{question: '¿Cómo se llama la villana en la película "La Bella Durmiente" de Disney?',
options: ['Maléfica', 'Reina Malvada', 'Madrastra'],
answer_short: 'Maléfica',
answer_extended: 'La villana en la película "La Bella Durmiente" de Disney se llama Maléfica. Es conocida por su maldición sobre la princesa Aurora y su transformación en dragón. La película se estrenó en 1959 y es considerada un clásico de la animación.'},

{question: '¿Cómo se llama el villano principal en la película "El Libro de la Selva" de Disney?',
options: ['Kaa', 'Shere Khan', 'Rey Louie'],
answer_short: 'Shere Khan',
answer_extended: 'El villano principal en la película "El Libro de la Selva" de Disney se llama Shere Khan. Es conocido por su odio hacia los humanos y su lucha contra Mowgli. La película se estrenó en 1967 y es considerada un clásico de la animación.'},

{question: '¿Cómo se llama la villana en la película "101 Dálmatas" de Disney?',
options: ['Maléfica', 'Úrsula', 'Cruella de Vil'],
answer_short: 'Cruella de Vil',
answer_extended: 'La villana en la película "101 Dálmatas" de Disney se llama Cruella de Vil. Es conocida por su obsesión con la piel de los dálmatas y su villanía en general. La película se estrenó en 1961 y es considerada un clásico de la animación.'},

{question: '¿Cómo se llama el villano principal en la película "Hércules" de Disney?',
options: ['Hades', 'Titán', 'Cerbero'],
answer_short: 'Hades',
answer_extended: 'El villano principal en la película "Hércules" de Disney se llama Hades. Es conocido por su plan para conquistar el Olimpo y su lucha contra el héroe Hércules. La película se estrenó en 1997 y es considerada un clásico moderno de la animación.'},
{question: '¿Cómo se llama el villano en la película "Peter Pan" de Disney?',
options: ['Capitán Garfio', 'Sr. Smee', 'Tigre'],
answer_short: 'Capitán Garfio',
answer_extended: 'El villano en la película "Peter Pan" de Disney se llama Capitán Garfio. Es conocido por su odio hacia Peter Pan y su constante lucha contra él y los Niños Perdidos. La película se estrenó en 1953 y es considerada un clásico de la animación.'},

{question: '¿Cómo se llama el villano principal en la película "La Sirenita" de Disney?',
options: ['Urulsa', 'Tritón', 'Sebastián'],
answer_short: 'Urulsa',
answer_extended: 'El villano principal en la película "La Sirenita" de Disney se llama Úrsula. Es conocida por su plan para usurpar el trono del rey Tritón y su obsesión por convertirse en una diosa del mar. La película se estrenó en 1989 y es considerada un clásico moderno de la animación.'},

{question: '¿Cómo se llama el villano en la película "Aladdín" de Disney?',
options: ['Yafar', 'Jafar', 'Gafar'],
answer_short: 'Jafar',
answer_extended: 'El villano en la película "Aladdín" de Disney se llama Jafar. Es conocido por su plan para convertirse en el sultán de Agrabah y su lucha contra Aladdín y sus amigos. La película se estrenó en 1992 y es considerada un clásico moderno de la animación.'},

{question: '¿Cómo se llama el villano principal en la película "Mulan" de Disney?',
options: ['Shan Yu', 'Li Shang', 'Emperador'],
answer_short: 'Shan Yu',
answer_extended: 'El villano principal en la película "Mulan" de Disney se llama Shan Yu. Es conocido por su invasión a China y su lucha contra Mulan y el ejército chino. La película se estrenó en 1998 y es considerada un clásico moderno de la animación.'},
{question: '¿Cómo se llama el villano principal en la película "El Rey León" de Disney?',
options: ['Scar', 'Mufasa', 'Simba'],
answer_short: 'Scar',
answer_extended: 'El villano principal en la película "El Rey León" de Disney se llama Scar. Es el hermano de Mufasa y tío de Simba, y es conocido por su traición y usurpación del trono de Mufasa. La película se estrenó en 1994 y es considerada un clásico moderno de la animación.'},

{question: '¿Cómo se llama la villana en la película "La Bella Durmiente" de Disney?',
options: ['Maléfica', 'Reina', 'Bruja'],
answer_short: 'Maléfica',
answer_extended: 'La villana en la película "La Bella Durmiente" de Disney se llama Maléfica. Es conocida por su maldición a la princesa Aurora y su lucha contra el Príncipe Felipe. La película se estrenó en 1959 y es considerada un clásico de la animación.'},

{question: '¿Cómo se llama el villano principal en la película "Hércules" de Disney?',
options: ['Hades', 'Zeus', 'Poseidón'],
answer_short: 'Hades',
answer_extended: 'El villano principal en la película "Hércules" de Disney se llama Hades. Es conocido por su plan para derrotar a Zeus y gobernar el Olimpo, y su lucha contra Hércules y sus amigos. La película se estrenó en 1997 y es considerada un clásico moderno de la animación.'},

{question: '¿Cómo se llama el villano en la película "101 Dálmatas" de Disney?',
options: ['Malvado', 'Gruñón', 'Cruella de Vil'],
answer_short: 'Cruella de Vil',
answer_extended: 'El villano en la película "101 Dálmatas" de Disney se llama Cruella de Vil. Es conocida por su plan para convertir a los cachorros dálmatas en un abrigo de piel, y su lucha contra los padres de los cachorros y sus amigos. La película se estrenó en 1961 y es considerada un clásico de la animación.'},
{question: '¿Cómo se llama el villano en la película "La Sirenita" de Disney?',
options: ['Rey Tritón', 'Úrsula', 'Príncipe Eric'],
answer_short: 'Úrsula',
answer_extended: 'El villano en la película "La Sirenita" de Disney se llama Úrsula. Es conocida por su plan para apoderarse del reino de Tritón y su lucha contra Ariel y el Príncipe Eric. La película se estrenó en 1989 y es considerada un clásico moderno de la animación.'},

{question: '¿Cómo se llama el villano principal en la película "Aladdín" de Disney?',
options: ['Yafar', 'Jasmine', 'Aladdín'],
answer_short: 'Yafar',
answer_extended: 'El villano principal en la película "Aladdín" de Disney se llama Yafar. Es conocido por su plan para apoderarse del trono de Agrabah y su lucha contra Aladdín y sus amigos. La película se estrenó en 1992 y es considerada un clásico moderno de la animación.'},

{question: '¿Cómo se llama la villana en la película "Enredados" de Disney?',
options: ['Madre Gothel', 'Flynn Rider', 'Rapunzel'],
answer_short: 'Madre Gothel',
answer_extended: 'La villana en la película "Enredados" de Disney se llama Madre Gothel. Es conocida por su plan para mantener a Rapunzel en la torre para que no descubra la verdad sobre su pasado, y su lucha contra Flynn Rider y los amigos de Rapunzel. La película se estrenó en 2010 y es considerada un clásico moderno de la animación.'},

{question: '¿Cómo se llama el villano en la película "El Jorobado de Notre Dame" de Disney?',
options: ['Quasimodo', 'Frollo', 'Esmeralda'],
answer_short: 'Frollo',
answer_extended: 'El villano en la película "El Jorobado de Notre Dame" de Disney se llama Frollo. Es conocido por su odio hacia los gitanos y su lucha contra Quasimodo, Esmeralda y sus amigos. La película se estrenó en 1996 y es considerada un clásico moderno de la animación.'},
{question: '¿En qué película de Disney aparece la canción "Hakuna Matata"?',
options: ['El Rey León', 'Aladdín', 'La Sirenita'],
answer_short: 'El Rey León',
answer_extended: 'La canción "Hakuna Matata" aparece en la película "El Rey León" de Disney. Es interpretada por Timón y Pumba, y se ha convertido en una de las canciones más populares de Disney. La película se estrenó en 1994 y es considerada un clásico moderno de la animación.'},

{question: '¿En qué película de Disney aparece la canción "Supercalifragilisticoespialidoso"?',
options: ['Mary Poppins', 'La Bella y la Bestia', 'Pinocho'],
answer_short: 'Mary Poppins',
answer_extended: 'La canción "Supercalifragilisticoespialidoso" aparece en la película "Mary Poppins" de Disney. Es interpretada por Julie Andrews y Dick Van Dyke, y se ha convertido en una de las canciones más icónicas de la historia del cine. La película se estrenó en 1964 y ha sido considerada un clásico de la animación.'},

{question: '¿En qué película de Disney aparece la canción "Parte de Él"?',
options: ['La Bella y la Bestia', 'La Sirenita', 'Mulan'],
answer_short: 'La Bella y la Bestia',
answer_extended: 'La canción "Parte de Él" aparece en la película "La Bella y la Bestia" de Disney. Es interpretada por Angela Lansbury y se ha convertido en una de las canciones más emotivas de la historia de Disney. La película se estrenó en 1991 y es considerada un clásico de la animación.'},

{question: '¿En qué película de Disney aparece la canción "Let It Go"?',
options: ['Frozen', 'Moana', 'Vaiana'],
answer_short: 'Frozen',
answer_extended: 'La canción "Let It Go" aparece en la película "Frozen" de Disney. Es interpretada por Idina Menzel y se ha convertido en una de las canciones más exitosas y populares de Disney. La película se estrenó en 2013 y es considerada un clásico moderno de la animación.'},
{question: '¿En qué película de Disney aparece la canción "Circle of Life"?',
options: ['El Rey León', 'La Sirenita', 'Mulan'],
answer_short: 'El Rey León',
answer_extended: 'La canción "Circle of Life" aparece en la película "El Rey León" de Disney. Es interpretada por Carmen Twillie y Lebo M, y es una de las canciones más emblemáticas de la película. La película se estrenó en 1994 y es considerada uno de los clásicos más exitosos de Disney.'},

{question: '¿En qué película de Disney aparece la canción "Colors of the Wind"?',
options: ['Pocahontas', 'Mulan', 'La Bella y la Bestia'],
answer_short: 'Pocahontas',
answer_extended: 'La canción "Colors of the Wind" aparece en la película "Pocahontas" de Disney. Es interpretada por Judy Kuhn y se ha convertido en una de las canciones más emblemáticas de Disney. La película se estrenó en 1995 y es considerada un clásico moderno de la animación.'},

{question: '¿En qué película de Disney aparece la canción "Bajo el Mar"?',
options: ['La Sirenita', 'Mulan', 'Aladdín'],
answer_short: 'La Sirenita',
answer_extended: 'La canción "Bajo el Mar" aparece en la película "La Sirenita" de Disney. Es interpretada por Samuel E. Wright y es una de las canciones más populares de la película. La película se estrenó en 1989 y es considerada uno de los clásicos más exitosos de Disney.'},

{question: '¿En qué película de Disney aparece la canción "A Whole New World"?',
options: ['Aladdín', 'La Bella y la Bestia', 'Mulan'],
answer_short: 'Aladdín',
answer_extended: 'La canción "A Whole New World" aparece en la película "Aladdín" de Disney. Es interpretada por Brad Kane y Lea Salonga, y es una de las canciones más populares y románticas de Disney. La película se estrenó en 1992 y es considerada uno de los clásicos más exitosos de la animación.'},
{question: '¿En qué película de Disney aparece la canción "Hakuna Matata"?',
options: ['El Rey León', 'Pocahontas', 'Mulan'],
answer_short: 'El Rey León',
answer_extended: 'La canción "Hakuna Matata" aparece en la película "El Rey León" de Disney. Es interpretada por Nathan Lane, Ernie Sabella y Jason Weaver, y se ha convertido en una de las canciones más populares de Disney. La película se estrenó en 1994 y es considerada uno de los clásicos más exitosos de la animación.'},

{question: '¿En qué película de Disney aparece la canción "Let It Go"?',
options: ['Frozen', 'Moana', 'Enredados'],
answer_short: 'Frozen',
answer_extended: 'La canción "Let It Go" aparece en la película "Frozen" de Disney. Es interpretada por Idina Menzel y se ha convertido en una de las canciones más populares de Disney. La película se estrenó en 2013 y es considerada un clásico moderno de la animación.'},

{question: '¿En qué película de Disney aparece la canción "Hércules"?',
options: ['Hércules', 'Tarzán', 'Hermano Oso'],
answer_short: 'Hércules',
answer_extended: 'La canción "Hércules" aparece en la película homónima de Disney. Es interpretada por Roger Bart y se ha convertido en una de las canciones más emblemáticas de la película. La película se estrenó en 1997 y es considerada un clásico moderno de la animación.'},

{question: '¿En qué película de Disney aparece la canción "Un Mundo Ideal"?',
options: ['Aladdín', 'La Sirenita', 'El Rey León'],
answer_short: 'Aladdín',
answer_extended: 'La canción "Un Mundo Ideal" aparece en la película "Aladdín" de Disney. Es interpretada por Brad Kane y Lea Salonga, y se ha convertido en una de las canciones más románticas de Disney. La película se estrenó en 1992 y es considerada uno de los clásicos más exitosos de la animación.'},
{question: '¿En qué película de Disney aparece la canción "Bajo el mar"?',
options: ['La Sirenita', 'El Rey León', 'La Bella y la Bestia'],
answer_short: 'La Sirenita',
answer_extended: 'La canción "Bajo el mar" aparece en la película "La Sirenita" de Disney. Es interpretada por Samuel E. Wright y se ha convertido en una de las canciones más alegres de Disney. La película se estrenó en 1989 y es considerada uno de los clásicos más exitosos de la animación.'},

{question: '¿En qué película de Disney aparece la canción "Yo soy tu amigo fiel"?',
options: ['Toy Story', 'Monsters Inc.', 'La Dama y el Vagabundo'],
answer_short: 'Toy Story',
answer_extended: 'La canción "Yo soy tu amigo fiel" aparece en la película "Toy Story" de Disney/Pixar. Es interpretada por Randy Newman y se ha convertido en una de las canciones más emotivas de Disney. La película se estrenó en 1995 y es considerada una de las películas más importantes de la animación por ordenador.'},

{question: '¿En qué película de Disney aparece la canción "Reflejo"?',
options: ['Mulan', 'Hércules', 'Pocahontas'],
answer_short: 'Mulan',
answer_extended: 'La canción "Reflejo" aparece en la película "Mulan" de Disney. Es interpretada por Christina Aguilera y se ha convertido en una de las canciones más reconocidas de Disney. La película se estrenó en 1998 y es considerada un clásico moderno de la animación.'},

{question: '¿En qué película de Disney aparece la canción "Un mundo ideal"?',
options: ['Aladdín', 'La Sirenita', 'La Bella y la Bestia'],
answer_short: 'Aladdín',
answer_extended: 'La canción "Un mundo ideal" aparece en la película "Aladdín" de Disney. Es interpretada por Peabo Bryson y Regina Belle, y se ha convertido en una de las canciones más románticas de Disney. La película se estrenó en 1992 y es considerada uno de los clásicos más exitosos de la animación.'},
{question: '¿Qué objeto de la película "La Sirenita" aparece en varias películas de Disney?',
options: ['La lámpara mágica', 'El espejo mágico', 'El tridente'],
answer_short: 'El espejo mágico',
answer_extended: 'El espejo mágico de la película "La Sirenita" aparece en varias películas de Disney, como "La Bella y la Bestia" y "Aladdín". Los animadores de Disney utilizaban objetos y personajes de otras películas para hacer referencias cruzadas y conectar sus universos de ficción.'},

{question: '¿En qué película de Disney aparece un personaje que fue borrado de la mayoría de las versiones posteriores?',
options: ['Dumbo', 'Blancanieves y los siete enanitos', 'Pinocho'],
answer_short: 'Blancanieves y los siete enanitos',
answer_extended: 'En la película "Blancanieves y los siete enanitos", el personaje de la Reina Malvada tenía un final alternativo en el que era castigada por los enanitos y obligada a bailar hasta la muerte. Este final fue eliminado de la mayoría de las versiones posteriores de la película, pero se ha mantenido en algunas versiones extranjeras.'},

{question: '¿Qué error de continuidad hay en la película "Hércules" de Disney?',
options: ['Hércules pierde su brazo izquierdo', 'Hércules pierde su cabello rubio', 'Hércules pierde su escudo'],
answer_short: 'Hércules pierde su cabello rubio',
answer_extended: 'En la película "Hércules" de Disney, hay un error de continuidad en el que Hércules pierde su cabello rubio en una escena y lo tiene de nuevo en la siguiente escena. Los animadores de Disney suelen tener que trabajar con escenas que se animan fuera de orden, lo que puede llevar a errores como este.'},

{question: '¿Qué objeto aparece en todas las películas animadas de Disney?',
options: ['Una manzana', 'Una lámpara mágica', 'Un ratón'],
answer_short: 'Un ratón',
answer_extended: 'Un ratón aparece en todas las películas animadas de Disney como un homenaje a Mickey Mouse, el personaje que catapultó a la compañía a la fama. Mickey Mouse aparece en el logo de Disney y se ha convertido en una de las imágenes más icónicas de la cultura popular.'},
{question: '¿Cuál es la conexión entre la película "La Sirenita" de Disney y la película "La Bella y la Bestia"?',
options: ['Ambas películas tienen lugar en el mismo mundo', 'Ambas películas tienen la misma princesa', 'Ambas películas tienen la misma canción'],
answer_short: 'Ambas películas tienen la misma canción',
answer_extended: 'La canción "Bella Notte" de la película "La Dama y el Vagabundo" se puede escuchar en la escena en la que Ariel visita el mercado en "La Sirenita". Esta misma canción también aparece en la película "La Bella y la Bestia" en una de las escenas iniciales.'},

{question: '¿Cuál es el error de continuidad en la película "Hércules" de Disney?',
options: ['El color de los zapatos de Hércules cambia', 'Hércules tiene dos padres diferentes', 'El tamaño del escudo de Hércules cambia'],
answer_short: 'El tamaño del escudo de Hércules cambia',
answer_extended: 'En la película "Hércules" de Disney, hay un error de continuidad en el que el tamaño del escudo de Hércules cambia en diferentes escenas. En algunas escenas, el escudo es lo suficientemente grande como para cubrir todo su cuerpo, mientras que en otras es mucho más pequeño.'},

{question: '¿En qué película de Disney aparece una de las primeras referencias a "Star Wars"?',
options: ['"Aladdín"', '"Hércules"', '"Hermano Oso"'],
answer_short: '"Hércules"',
answer_extended: 'En la película de Disney "Hércules", hay una escena en la que Hércules lucha contra un monstruo en el espacio. Durante la pelea, Hércules agarra al monstruo y lo hace girar alrededor de su cabeza, similar a un movimiento que el personaje de Luke Skywalker hace en la película "Star Wars: Una nueva esperanza".'},

{question: '¿En qué película de Disney hay un personaje que tiene la misma voz que el Genio de "Aladdín"?',
options: ['"La Bella y la Bestia"', '"Hércules"', '"Tarzán"'],
answer_short: '"Tarzán"',
answer_extended: 'En la película de Disney "Tarzán", el personaje de Terk, el gorila, tiene la misma voz que el Genio de "Aladdín". Ambos personajes fueron interpretados por el actor de voz estadounidense, Jim Cummings.'},
{question: '¿Qué objeto aparece en todas las películas de Disney de Pixar?',
options: ['Una pelota', 'Un coche', 'Una lata de refresco'],
answer_short: 'Una pelota',
answer_extended: 'En todas las películas de Disney de Pixar, aparece una pelota con estrellas en ella. La pelota, que es conocida como la "pelota Pixar", ha aparecido en películas como "Toy Story", "Monsters, Inc." y "Up".'},

{question: '¿Qué error de continuidad hay en la película "La Bella y la Bestia" de Disney?',
options: ['El vestido de Bella cambia de color', 'La Bestia cambia de tamaño', 'La vela de Lumière cambia de mano'],
answer_short: 'El vestido de Bella cambia de color',
answer_extended: 'En la película "La Bella y la Bestia" de Disney, hay un error de continuidad en el que el vestido de Bella cambia de color en diferentes escenas. En algunas escenas, el vestido es rosa, mientras que en otras es amarillo. Este error se debe a la falta de comunicación entre los animadores que trabajaron en diferentes escenas.'},

{question: '¿En qué película de Disney aparece un personaje de una película de otro estudio de animación?',
options: ['"Ralph, el demoledor"', '"Frozen"', '"Moana"'],
answer_short: '"Ralph, el demoledor"',
answer_extended: 'En la película de Disney "Ralph, el demoledor", aparece el personaje de Sonic the Hedgehog, que es propiedad de SEGA, un estudio de animación diferente. La aparición de Sonic se debe a un acuerdo entre Disney y SEGA que permitió que el personaje hiciera un cameo en la película.'},
{question: '¿Cuál es el error de animación en la película "La Sirenita" de Disney?',
options: ['Se le olvida dibujarle un ojo a uno de los personajes', 'Aparecen autos en el fondo de una escena bajo el mar', 'El vestido de Ariel cambia de color', 'El tamaño de la nariz del Rey Tritón cambia'],
answer_short: 'Aparecen autos en el fondo de una escena bajo el mar',
answer_extended: 'En la película "La Sirenita" de Disney, hay una escena en la que un carruaje cae al mar y desencadena una ola. En el fondo de esta escena, se puede ver la silueta de lo que parecen ser dos autos. Este error de animación pasó desapercibido durante años hasta que alguien lo notó en una versión remasterizada de la película.'},

{question: '¿Cuál es el error de animación en la película "Pocahontas" de Disney?',
options: ['John Smith tiene seis dedos en una mano', 'La pintura facial de Pocahontas cambia de escena en escena', 'El pelo de Pocahontas se vuelve negro por accidente', 'El collar de Meeko cambia de tamaño en diferentes escenas'],
answer_short: 'John Smith tiene seis dedos en una mano',
answer_extended: 'En la película "Pocahontas" de Disney, hay una escena en la que John Smith levanta la mano y se puede ver que tiene seis dedos en una de ellas. Este error de animación fue corregido en versiones posteriores de la película, pero todavía se puede ver en algunas copias antiguas.'},

{question: '¿Cuál es el error de continuidad en la película "La Bella y la Bestia" de Disney?',
options: ['La longitud del vestido de Bella cambia en diferentes escenas', 'La cantidad de platos en la mesa cambia de escena en escena', 'La altura de la Bestia cambia durante la película', 'El color del cabello de Gastón cambia de escena en escena'],
answer_short: 'La longitud del vestido de Bella cambia en diferentes escenas',
answer_extended: 'En la película "La Bella y la Bestia" de Disney, hay una escena en la que Bella baila con la Bestia y su vestido cambia de longitud en diferentes escenas. En algunas escenas, el vestido llega hasta el suelo, mientras que en otras se eleva por encima de sus zapatos.'},
{question: 'En qué película de Disney aparece el personaje de Olaf, el muñeco de nieve gracioso?',
options: ['Frozen', 'Coco', 'Toy Story'],
answer_short: 'Frozen',
answer_extended: 'Olaf es el personaje de un muñeco de nieve en la película de Disney "Frozen" que se hace amigo de Anna y Elsa.'},
{question: 'Cuál es el nombre del personaje divertido en la película "Aladdín" de Disney?',
options: ['Jafar', 'Abu', 'Genio'],
answer_short: 'Genio',
answer_extended: 'El Genio es un personaje muy divertido en la película de Disney "Aladdín". Fue interpretado por el comediante Robin Williams, quien hizo un excelente trabajo dando voz al personaje.'},
{question: 'En qué película de Disney aparece el personaje del dragón cómico llamado Mushu?',
options: ['La Bella y la Bestia', 'Mulan', 'Pocahontas'],
answer_short: 'Mulan',
answer_extended: 'Mushu es un personaje divertido y gracioso en la película de Disney "Mulan". Fue interpretado por el actor Eddie Murphy, quien aportó su propio estilo de comedia al personaje.'},
{question: 'En qué película de Disney aparece el personaje de Timón, el suricato gracioso?',
options: ['El Rey León', 'Hércules', 'La Sirenita'],
answer_short: 'El Rey León',
answer_extended: 'Timón es un personaje divertido y gracioso en la película de Disney "El Rey León". Junto a su amigo Pumba, Timón protagoniza algunos de los momentos más divertidos de la película.'},
{question: 'Cuál es el nombre del personaje divertido en la película "Hércules" de Disney?',
options: ['Phil', 'Hades', 'Pegasus'],
answer_short: 'Phil',
answer_extended: 'Phil es un personaje muy gracioso en la película de Disney "Hércules". Es el entrenador de Hércules y tiene algunas de las mejores líneas cómicas de la película.'},
{question: 'En qué película de Disney aparece el personaje del genio azul con poderes mágicos?',
options: ['La Sirenita', 'La Bella Durmiente', 'Aladdín'],
answer_short: 'Aladdín',
answer_extended: 'El Genio es un personaje divertido y gracioso en la película de Disney "Aladdín". Fue interpretado por el comediante Robin Williams, quien hizo un excelente trabajo dando voz al personaje.'},
{question: 'Cuál es el nombre del personaje divertido en la película "La Bella y la Bestia" de Disney?',
options: ['Lumière', 'Chip', 'Gastón'],
answer_short: 'Lumière',
answer_extended: 'Lumière es un personaje divertido y gracioso en la película de Disney "La Bella y la Bestia". Es el mayordomo de la Bestia y tiene una personalidad muy extravagante y divertida.'},
{question: 'En qué película de Disney aparece el personaje del mono divertido llamado Abu?',
options: ['El Rey León', 'Aladdín', 'Tarzán'],
answer_short: 'Aladdín',
answer_extended: 'Abu es un personaje divertido y gracioso en la película de Disney "Aladdín". Es el mejor amigo de Aladdín y a menudo se mete en problemas por su amor por las cosas brillantes.'},
{question: 'En qué película de Disney aparece el personaje del cangrejo divertido llamado Sebastián?',
options: ['La Sirenita', 'Pocahontas', 'Mulan'],
answer_short: 'La Sirenita',
answer_extended: 'Sebastián es un personaje divertido y gracioso en la película de Disney "La Sirenita". Es el consejero real del rey Tritón y tiene algunos de los momentos más divertidos de la película.'},
{question: 'En qué película de Disney aparece el personaje del pájaro divertido llamado Zazu?',
options: ['El Rey León', 'Tarzán', 'Bambi'],
answer_short: 'El Rey León',
answer_extended: 'Zazu es un personaje divertido y gracioso en la película de Disney "El Rey León". Es el mayordomo del rey Mufasa y siempre está tratando de mantener el orden en la sabana.'},
{question: 'Cuál es el nombre del personaje divertido en la película "Mulan" de Disney?',
options: ['Mushu', 'Khan', 'Shan Yu'],
answer_short: 'Mushu',
answer_extended: 'Mushu es un personaje divertido y gracioso en la película de Disney "Mulan". Es el guardián del honor de la familia Fa y a menudo se mete en problemas por su comportamiento divertido e imprudente.'},
{question: 'En qué película de Disney aparece el personaje del conejo divertido llamado Tambor?',
options: ['La Cenicienta', 'La Dama y el Vagabundo', 'Bambi'],
answer_short: 'Bambi',
answer_extended: 'Tambor es un personaje divertido y gracioso en la película de Disney "Bambi". Es el mejor amigo de Bambi y siempre está tratando de enseñarle cómo ser un buen ciervo.'},
{question: '¿En qué película de Disney Pixar aparece el personaje principal llamado Marlin, que se dedica a buscar a su hijo desaparecido?',
options: ['Toy Story', 'Buscando a Nemo', 'Ratatouille'],
answer_short: 'Buscando a Nemo',
answer_extended: 'Marlin es el personaje principal de la película de Disney Pixar "Buscando a Nemo". Es un pez payaso que se dedica a buscar a su hijo desaparecido llamado Nemo.'},
{question: '¿Cuál es el nombre del personaje principal en la película de Disney Pixar "Up"?',
options: ['Carl Fredricksen', 'Russell', 'Dug'],
answer_short: 'Carl Fredricksen',
answer_extended: 'Carl Fredricksen es el personaje principal y protagonista de la película de Disney Pixar "Up". Es un viudo y vendedor de globos retirado que decide emprender un viaje épico en su casa flotante hacia América del Sur.'},
{question: '¿En qué película de Disney Pixar aparece el personaje principal llamado Miguel, un niño que quiere ser músico?',
options: ['Coco', 'Intensamente', 'Brave'],
answer_short: 'Coco',
answer_extended: 'Miguel es el personaje principal de la película de Disney Pixar "Coco". Es un niño mexicano que quiere ser músico a pesar de que su familia tiene prohibido tocar música.'},
{question: '¿En qué película de Disney Pixar aparece el personaje principal llamado Flik, un hormiga que trata de salvar a su colonia de los saltamontes?',
options: ['Bichos', 'Los Increíbles', 'Monsters, Inc.'],
answer_short: 'Bichos',
answer_extended: 'Flik es el personaje principal de la película de Disney Pixar "Bichos". Es una hormiga trabajadora que trata de salvar a su colonia de los saltamontes y busca ayuda en un grupo de insectos fuera de lo común.'},
{question: '¿En qué ciudad se desarrolla la película "Up" de Disney Pixar?',
options: ['Nueva York', 'Londres', 'Ciudad del Este'],
answer_short: 'Ciudad del Este',
answer_extended: 'La ciudad ficticia de Ciudad del Este es el escenario principal de la película "Up" de Disney Pixar, la cual se inspira en la región de tepui en Venezuela.'},
{question: '¿Cuál es la comida favorita del personaje principal de "Ratatouille" de Disney Pixar?',
options: ['Queso', 'Pan', 'Ratatouille'],
answer_short: 'Ratatouille',
answer_extended: 'La comida favorita del personaje principal, Remy, en la película "Ratatouille" de Disney Pixar es precisamente el plato de ratatouille.'},
{question: '¿Cuál es el juguete favorito del personaje principal de "Toy Story" de Disney Pixar?',
options: ['Buzz Lightyear', 'Slinky', 'Sr. Cara de Papa'],
answer_short: 'Buzz Lightyear',
answer_extended: 'El juguete favorito del personaje principal, Woody, en la película "Toy Story" de Disney Pixar es Buzz Lightyear, el astronauta de juguete.'},
{question: '¿Qué objeto se usa como medio de transporte en la película "Wall-E" de Disney Pixar?',
options: ['Coche', 'Bicicleta', 'Nave espacial'],
answer_short: 'Nave espacial',
answer_extended: 'El objeto utilizado como medio de transporte en la película "Wall-E" de Disney Pixar es una nave espacial.'},{
  question: '¿De qué reino es la princesa Aurora en la película "La Bella Durmiente" de Disney?',
  options: ['Arendelle', 'Agrabah', 'Avalon', 'Aurora no es princesa de un reino'],
  answer_short: 'Aurora no es princesa de un reino',
  answer_extended: 'Aurora no es una princesa de un reino específico en la película "La Bella Durmiente" de Disney. Su padre es el rey Stefan y su madre nunca se menciona en la película. Aurora se considera una princesa por su linaje real.'
  },
  {
  question: '¿Cuál es el nombre del príncipe en la película "La Sirenita" de Disney?',
  options: ['Eric', 'Adam', 'John', 'Ninguno de los anteriores'],
  answer_short: 'Eric',
  answer_extended: 'El príncipe en la película "La Sirenita" de Disney se llama Eric. Aunque nunca se menciona su apellido, el sitio web oficial de Disney lo nombra como el príncipe Eric.'
  },
  {
  question: '¿Cuál es el nombre del príncipe en la película "Blancanieves y los Siete Enanitos" de Disney?',
  options: ['Fernando', 'Phillip', 'Henry', 'Florian'],
  answer_short: 'Florian',
  answer_extended: 'El príncipe en la película "Blancanieves y los Siete Enanitos" de Disney se llama Florian. Aunque nunca se menciona su nombre en la película, se le da el nombre de Florian en los créditos finales.'
  },
  {
  question: '¿Cuál es el nombre de la princesa en la película "La Sirenita" de Disney?',
  options: ['Ariel', 'Melody', 'Ursula', 'Ninguno de los anteriores'],
  answer_short: 'Ariel',
  answer_extended: 'La princesa en la película "La Sirenita" de Disney se llama Ariel. Es la hija más joven del rey Tritón y hermana de seis hermanas mayores. Ariel es conocida por su amor por el mundo humano y su colección de objetos humanos.'
  },
{question: '¿En qué año se estrenó la película "Una Nueva Esperanza" de Star Wars?',
options: ['1977', '1980', '1983'],
answer_short: '1977',
answer_extended: 'La película "Una Nueva Esperanza" de Star Wars se estrenó en 1977.'},
{question: '¿Cuál es el nombre del droide que aparece en todas las películas de Star Wars?',
options: ['R2-D2', 'C-3PO', 'BB-8'],
answer_short: 'R2-D2',
answer_extended: 'R2-D2 es un droide astromecánico y uno de los personajes más icónicos de Star Wars.'},
{question: '¿Quién es el personaje principal de la trilogía original de Star Wars?',
options: ['Luke Skywalker', 'Han Solo', 'Princesa Leia'],
answer_short: 'Luke Skywalker',
answer_extended: 'Luke Skywalker es el protagonista de la trilogía original de Star Wars.'},
{question: '¿Cuál es el nombre del villano principal en la trilogía original de Star Wars?',
options: ['Darth Vader', 'Emperador Palpatine', 'Gran Moff Tarkin'],
answer_short: 'Darth Vader',
answer_extended: 'Darth Vader es el villano principal y uno de los personajes más icónicos de Star Wars.'}, 
{
  question: '¿Quién es el protagonista de la película "Iron Man"?',
  options: ['Tony Stark', 'Bruce Wayne', 'Peter Parker'],
  answer_short: 'Tony Stark',
  answer_extended: 'Tony Stark, también conocido como Iron Man, es un multimillonario excéntrico que construye un traje de alta tecnología para luchar contra el mal y proteger al mundo. Es interpretado por el actor Robert Downey Jr.'
},
{
  question: '¿Qué personaje del Universo Marvel es conocido como el "Dios del Trueno"?',
  options: ['Spider-Man', 'Iron Man', 'Thor'],
  answer_short: 'Thor',
  answer_extended: 'Thor es un personaje ficticio de Marvel Comics, que es conocido por ser el "Dios del Trueno". Es interpretado por el actor Chris Hemsworth en las películas de Marvel.'
},
{
  question: '¿Cuál es el verdadero nombre del superhéroe "Capitán América"?',
  options: ['Steve Rogers', 'Bruce Banner', 'Peter Parker'],
  answer_short: 'Steve Rogers',
  answer_extended: 'El verdadero nombre del superhéroe "Capitán América" es Steve Rogers. Fue creado como parte de un experimento para crear a un súper soldado, y es conocido por su escudo icónico. Es interpretado por el actor Chris Evans en las películas de Marvel.'
},
{
  question: '¿Qué personaje de Marvel se llama también "el Hombre Araña"?',
  options: ['Peter Parker', 'Tony Stark', 'Bruce Wayne'],
  answer_short: 'Peter Parker',
  answer_extended: 'Peter Parker es el alter ego del superhéroe conocido como "el Hombre Araña". Después de ser mordido por una araña radioactiva, adquiere habilidades sobrehumanas que le permiten escalar paredes y lanzar telarañas. Es interpretado por el actor Tom Holland en las películas de Marvel.'
},
{
  question: '¿Cuál es el nombre del villano de la película "The Avengers" de Marvel en Disney?',
  options: ['Loki', 'Thanos', 'Ultron'],
  answer_short: 'Loki',
  answer_extended: 'Loki es el hermano adoptivo de Thor y uno de los principales villanos en la película "The Avengers" de Marvel en Disney.'
  },
  {
  question: '¿Quién es el héroe principal en la película "Captain America: The First Avenger" de Marvel en Disney?',
  options: ['Steve Rogers', 'Tony Stark', 'Bruce Banner'],
  answer_short: 'Steve Rogers',
  answer_extended: 'Steve Rogers, también conocido como Captain America, es el héroe principal y protagonista en la película "Captain America: The First Avenger" de Marvel en Disney.'
  },
  {
  question: '¿En qué película de Marvel en Disney aparece el personaje de Black Panther por primera vez?',
  options: ['Captain America: Civil War', 'Avengers: Age of Ultron', 'Iron Man 3'],
  answer_short: 'Captain America: Civil War',
  answer_extended: 'Black Panther hace su primera aparición en la película de Marvel en Disney "Captain America: Civil War", donde busca venganza contra el soldado Winter Soldier por la muerte de su padre.'
  },
  {
  question: '¿Cómo se llama el villano en la película "Guardians of the Galaxy" de Marvel en Disney?',
  options: ['Ronan', 'Nebula', 'Yondu'],
  answer_short: 'Ronan',
  answer_extended: 'Ronan el Acusador es el principal villano en la película "Guardians of the Galaxy" de Marvel en Disney, y busca utilizar el poder de una gema del infinito para destruir a sus enemigos y conquistar la galaxia.'
  },
];


function App(){
    const [qI, sQI] = useState(0);
    const [p1, sP1] = useState(0);
    const [p2, sP2] = useState(0);
    const [t, sT] = useState(Math.round(Math.random()) + 1);
    const [ansE, sAE] = useState(false);
    const [c, sC] = useState(false);
    const [r, sR] = useState('');
    const [numPlayers, setNumPlayers] = useState(2);
    const [playerNames, setPlayerNames] = useState([]);

    useEffect(() => {
        if (qI >= Q.length) {
            sQI(0);
        }
        if (p1 >= 10 || p2 >= 10) {
            const w = p1 > p2 ? "Oli" : "Vane";
            alert(`¡Felicidades ${w}, eres la ganadora!`);
            if (window.confirm("¿Quieres jugar otra partida?")) {
                sP1(0);
                sP2(0);
                sT(Math.round(Math.random()) + 1);
            }
        }
    }, [qI, p1, p2]);

    const q = Q[qI] || { question: '', options: [], answer_short: '', answer_extended: '' };

    const a = (a) => {
        const isCorrect = a === q.answer_short;
        if (isCorrect) {
            t === 1 ? sP1(p1 + 1) : sP2(p2 + 1);
        } else {
            const score = t === 1 ? p1 : p2;
            if (score > 0) {
                t === 1 ? sP1(score - 0.5) : sP2(score - 0.5);
            }
            sT(t === 1 ? 2 : 1);
        }
        sC(isCorrect);
        sAE(true);
        sR(a);
    };

    const s = () => {
        sR('');
        sC(false);
        sAE(false);
        sQI(Math.floor(Math.random() * Q.length));
    };

    return (
        <div className="App">
            <h1>OlVa Disney Quiz</h1>
            {ansE && (
                <>
                    <p>Su Respuesta fue "{r}"</p>
                    <p className={c ? "correct" : "incorrect"}>Su respuesta es {c ? "Correcta!" : "Incorrecta!"}</p>
                    <p>La respuesta correcta era "{q.answer_extended}"</p>
                    <button onClick={s}>Siguiente</button>
                </>
            )}
            {!ansE && (
                <>
                    <p>Turno de {t === 1 ? "Oli" : "Vane"}</p>
                    <h2>{q.question}</h2>
                    {q.options.map((o) => (
                        <button key={o} onClick={() => a(o)} className={c ? (o === q.answer_short ? "correct" : "incorrect") : ""}>
                            {o}
                        </button>
                    ))}
                    <p>Puntuación: Oli: {p1}, Vane: {p2}</p>
                </>
            )}
        </div>
    );
}

export default App;
