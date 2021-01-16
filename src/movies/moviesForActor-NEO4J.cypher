/* With Neo4j, you can write the movies for actor query more efficiently, as follows */

MATCH (actor:Person {name: $name})
WITH actor, [(actor)-[:ACTED_IN]-(movie:Movie) | movie {.title, .tagline, .released}] as movies, [(actor)-[actedIn:ACTED_IN]-() | actedIn {.roles, .star}] as actedIn
RETURN {
         actor:  actor,
         actedIn: actedIn,
         movies: movies
       }
