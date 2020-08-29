import express, { Application, Request, Response } from 'express'

const app: Application = express()

const PORT = process.env.PORT || 5000

app.get('/hello', (req: Request, res: Response) => {
	res.send('Hello')
})

app.listen(PORT, () => console.log('Listening'))
