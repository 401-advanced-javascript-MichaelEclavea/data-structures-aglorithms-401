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

    append(value){
        let current = this.head;
        while (current){
            if(current.next !== null){
                current = current.next;
            } else{
                current.next = new Node(value);
                break;
            }
        }
    }
       insertBefore(value, newVal){
            let current = this.head;
            while(current){
                if(current.next.value !== value){
                    current = current.next;
                }
             else{
                let newNode = new Node(newVal);
                newNode.next = current.next;
                current.next = newNode;
                break;
            }
       } 

    }
    insertAfter(value, newVal){
        let current = this.head;
        while(current){
            if(current.value !== value){
                current = current.next;
            }
            else{
                let newNode = new Node(newVal);
                newNode.next = current.next;
                current.next = newNode;
                break;
            }
        }
    }
}

module.exports = { LinkedList: LinkedList, Node: Node };




