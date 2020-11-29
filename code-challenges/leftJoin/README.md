
# Challenge Summary
This challenge was to take in two hashTables and check the first key in both tables. If the key matches in both tables, take the key and the value for both and add them together. (key, leftTableValue, rightTableValue). 


## Challenge Description
Write a function that LEFT JOINs two hashmaps into a single data structure.
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
Avoid utilizing any of the library methods available to your language.

## Approach & Efficiency
My approach was to take in the tables and iterate through the keys first. So I made a for loop on the left table. Then iterated the right table with the first index of the left table key. Find a match or not. Then move to the next key of the left table and iterate through the right table again. Continue the process till the end of both tables. 

## Solution

[UML Image](./uml/image.png)