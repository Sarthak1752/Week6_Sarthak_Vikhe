import express from 'express';
import bookRoutes from './routes/book_routes';
import authorRoutes from './routes/author_routes';
import userRoutes from './routes/user_routes';
import reviewRoutes from './routes/review_routes';
import ratingRoutes from './routes/rating_routes';
import paymentRoutes from './routes/payment_routes';

const app = express();
app.use(express.json());

app.use('/book',bookRoutes);
app.use('/author',authorRoutes);
app.use('/user',userRoutes);
app.use('/review',reviewRoutes);
app.use('/rating',ratingRoutes);
app.use('/payment',paymentRoutes);


app.listen(process.env.PORT,()=>{
    console.log("Server Listening on port",process.env.PORT)
})


// export default app;
