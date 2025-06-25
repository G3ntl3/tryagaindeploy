const express = require('express')
// trigger express 
const app = express()
const port = 3000
// prescribe your port Number. note that the 'app.' is the initial app var  we declared
// app.listen(3000, () => {
//     console.log('app is running on port 3000');
    
// })
// or save the port number in a var and put 


app.get('/', (req, res) => {
    res.send('welcome to node js class')

})
app.get('/dashboard', (req, res) => {
    res.send('welcome to node dashboard')

})

app.listen(port, () => {
    console.log("app is running on port 3000");
})