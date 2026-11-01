# Hogwarts API

Et lille backend-projekt lavet med Node, Express og PostgreSQL. 
Man kan hente, oprette, rette og slette elever, lærere og fag. Husene kan man kun hente.

## Sådan kommer du i gang

1. Kør `npm install`
2. Lav en `.env`-fil ud fra `.envexample` og skriv dine egne database-oplysninger ind
3. Kør SQL-filen i pgAdmin eller DataGrip, så tabellerne og eksempeldataene bliver oprettet
4. Start serveren med `npm run dev`. Den kører på http://localhost:3000

## Endpoints

### Houses
| Method | Route | Hvad gør den |

| GET | /houses | Henter alle huse |
| GET | /houses/:id | Henter ét hus |

### Students
| Method | Route | Hvad gør den |

| GET | /students | Henter alle elever |
| GET | /students/:id | Henter én elev |
| POST | /students | Opretter en ny elev |
| PUT | /students/:id | Retter en elev |
| DELETE | /students/:id | Sletter en elev |

### Teachers
| Method | Route | Hvad gør den |

| GET | /teacher | Henter alle lærere |
| GET | /teacher/:id | Henter én lærer |
| POST | /teacher | Opretter en ny lærer |
| PUT | /teacher/:id | Retter en lærer |
| DELETE | /teacher/:id | Sletter en lærer |

### Courses
| Method | Route | Hvad gør den |

| GET | /courses | Henter alle fag |
| GET | /courses/:id | Henter ét fag |
| POST | /courses | Opretter et nyt fag |
| PUT | /courses/:id | Retter et fag (navn og lærer) |
| DELETE | /courses/:id | Sletter et fag |

## Sådan bruger du testene

Testene ligger i mappen `hogwarts-API-test` og er lavet i Bruno.

1. Åbn Bruno og vælg "Open Collection"
2. Vælg mappen `hogwarts-API-test`
3. Sørg for at serveren kører
4. Klik på en test og tryk "Send"

Ved tests med `:id` skal du skrive et id ind under "Params", før du sender. 
Ved POST og PUT skal du sende JSON i body, fx:

{ "name": "Harry Potter", "house": 1 }

## Database

- Elever og lærere hører til ét hus. Det er lavet med en foreign key (`house_id`) til `houses`.
- Et fag har én lærer. Det er lavet med en foreign key (`teacher_id`) til `teachers`.
- Et fag kan have mange elever, og en elev kan tage mange fag. Det er lavet med junction table `courses_students`, der har `course_id` og `student_id`.

## Det virker ikke helt endnu

Jeg nåede ikke at blive helt færdig. Disse mangler jeg stadig:

- Nogle af kolonnenavnene er ikke ens i koden. Nogle steder står der `house` og andre steder `house_id`, og det samme gælder `teacher` og `teacher_id`. Derfor kan opret og ret give fejl.
- Nogle tests i Bruno mangler et id eller en body, så man skal selv skrive det ind, før man sender.
- Routen til lærere hedder `/teacher`, men nogle tests bruger `/teachers`.
- "Hent alle"-endpoints sender svaret to gange, så der kommer en fejl i terminalen, selvom man får data tilbage.
- Tilføjer man en elev eller et fag, der ikke findes, kommer der 500 i stedet for 404.
- `GET /courses/:id` viser ikke fagets elever endnu.