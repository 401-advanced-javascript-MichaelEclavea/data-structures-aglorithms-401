# Hashtables
<!-- Short summary or background information -->
Hashing takes a value and produces another value that can be used for storage. Specifically its a index that points to a bucket. 
## Challenge
<!-- Description of the challenge -->
add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Create a class function. 
creates sub functions: add, get, contains and hash. 
This essentially providing an algorithm to obtain a hash/value with a index provided or an index with a value provided. 
Create a algorithm that multiplies to, for our specific function. 
Use the Es6 .Map method


BigO(1);

Handling collision. 
## API

[UML](./uml/uml.jpeg)