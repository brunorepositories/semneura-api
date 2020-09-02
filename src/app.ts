import express from 'express'
import cors from 'cors'

class App {
  public express: express.Application

  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes () : void {
    this.express.get('/', (req, res) => {
      return res.send('Hello Word')
    })
  }
}

export default new App().express
