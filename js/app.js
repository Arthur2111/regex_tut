document.getElementById('phoneNum').addEventListener('input', (event) => {
    // the pattern consist of at the beginning optionally if there are '(' group the first 3 digit
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g
    const input = document.getElementById("phoneNum")
    //select by class
    const format= document.querySelector('.phoneFormat')
    const phone= input.value
    const found = regex.test(phone); //this will return true or false
    if(!found && phone.length!=0) {
        input.classList.add('invalid'); // when number not found and phone length is not equal to 0 include the class invalid which has a style of red 
        format.classList.add("block");
    }else {
        input.classList.remove("invalid");
        input.classList.remove("block");
    }
})

document.getElementById("phoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum")
    const regex = /[()-. ]/g
    //your input phone number will be saved without any of the regex items
    const savedPhoneNum= input.value.replaceAll(regex,'')
    console.log(savedPhoneNum)
})

document.getElementById('textForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.getElementById('textEntry') 
    const regex = / {2,}/g //this will find any occurance of 2 spaces or more
    const newText = input.value.replaceAll(regex, ' ').trim() //removes white space at beginning and end
    console.log(newText)
    const encodedInputText = encodeURI(input.value)
    const encodedCleanText = encodedURI(newText)
    console.log(encodedInputText)
    console.log(encodedCleanText)

})


// let a= {}

// a.name= new RegExp('bob', 'i')

// console.log(a), this returns an object with name: /bob/i