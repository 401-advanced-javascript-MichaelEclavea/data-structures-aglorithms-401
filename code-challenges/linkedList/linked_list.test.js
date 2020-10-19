'use strict';

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}





class LinkedList {
    constructor(){
        this.head = null; 
    }

    isEmpty(value){
        if(this.head === null){
            return true; 
        } 
        else{
            return false;
        }
    }

    insert(value){
        if(this.isEmpty() === true){
        let newNode = new Node(value);
        this.head = newNode;
        return value;
    }
    else {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    }

    includes(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                console.log(current.value);
                return true; 
            } 
            else{
                current = current.next; 
            }
            if(!current.next){
                return false;
            }
        }
    }

    toString(){
        let listText = '';
        let listItem = this.head;
        while(listItem){ 
            listText += `{${listItem.value}} -> `;
            listItem = listItem.next;
            
        } 

        listText += 'NULL';
        return listText;
    }

}



describe('Test should instantiate an empty linked list', () =>{
    test('Should successfully add an item to list', () =>{
        let list = new LinkedList();
        list.insert('a');
        list.insert('b');
        list.insert('c');
        expect(list.head.value).toStrictEqual('c');
    })
    test('test will point to the first node in linked list', () =>{
        let list = new LinkedList();
        list.insert('a');
        list.insert('b');
        expect(list.includes('b')).toStrictEqual(true);
        expect(list.includes('x')).toStrictEqual(false);
    })
    test('test will return a collection of all the values that exist', () =>{
        let list = new LinkedList();
        list.insert('a');
        list.insert('b');
        list.insert('c');
        expect(list.toString()).toStrictEqual(`{c} -> {b} -> {a} -> NULL`);
    })
    
});

