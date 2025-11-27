import { Request, Response } from 'express';
import axios from 'axios';

export const testApi = async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        return res.json(response.data);
    } catch (error) {
        console.error('APIリクエストエラー:', error);
        return res.status(500).json({ error: 'APIリクエストに失敗しました'});
    }
};

//コントローラーーで関数を定義
/*
export const requestAuth = async (req , res ) => {

}

export const handleCallback = async ( req , res ) => {

}
*/

