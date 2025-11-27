//メインファイルでRouterを使用
import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();
const PORT = process.env.PORT || 4000; 
app.use('api/zaim', authRoutes); //ベースパスを設定

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });