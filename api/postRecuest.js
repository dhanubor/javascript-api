fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'POST', 
    header : {
         'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'My Post',
        dody: 'This is my frist post',
        userId: 1
    })
})







.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(error => console.error('Error:', error)); 
