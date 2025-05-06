export default function handler(req, res) {
    // res: 200 接続成功を表すステータスコード
    res.status(200).json({ text: 'Hello' });
}