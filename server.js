require('dotenv').config();
const express=require('express'), cors=require('cors'), connectDB=require('./config/db');
const app=express();
app.use(cors({origin:process.env.CLIENT_URL||'http://localhost:5173'}));
app.use(express.json());
app.use('/api/auth',require('./routes/authRoutes'));
app.use('/api/complaints',require('./routes/complaintRoutes'));
app.get('/',(_req,res)=>res.json({message:'CleanCity API is running'}));
connectDB().then(()=>app.listen(process.env.PORT||5000,()=>console.log('CleanCity API running on port '+(process.env.PORT||5000))));
