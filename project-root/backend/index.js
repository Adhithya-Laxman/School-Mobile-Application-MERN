const app = require('./app');
const db = require('./src/config/db');
const Student = require('./src/models/student.model');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {   
    res.send('Hello, World!');
  });
  
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
