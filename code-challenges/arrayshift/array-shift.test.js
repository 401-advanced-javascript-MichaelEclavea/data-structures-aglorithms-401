'use shift';





describe('This will determine if the value that was give was inserted to the middle of the array', () =>{
    it('testing the number inserted is correct', () =>{
        let testArray = [1,2,3,4,5,6,7,8,9,10];
        expect(insertShiftArray(testArray, 'Apple')).toStrictEqual([1,2,3,4,5, 'Apple', 6,7,8,9,10])
    })
})

function insertShiftArray(array, value) {

    if(array.length % 2 !== 0){
        const middle = array.length / 2; 
       let num = Math.floor(middle) + 1;
       array.splice(num, 0,  value); 
        
    } else {
        const middle = array.length / 2; 
        array.splice(middle, 0,  value); 
    }

   
    return array; 
}

