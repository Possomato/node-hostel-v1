import { Request, Response } from 'express'

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    hero: {
      title: 'Todos os hostels',
      background: '',
    },
  })
}

export const sp = (req: Request, res: Response) => {
  res.render('pages/page', {
    hero: {
      title: 'São Paulo',
      background: '',
    },
  })
}

export const rj = (req: Request, res: Response) => {
  res.render('pages/page', {
    hero: {
      title: 'Rio de Janeiro',
      background: '',
    },
  })
}

export const ba = (req: Request, res: Response) => {
  res.render('pages/page', {
    hero: {
      title: 'Bahia',
      background: '',
    },
  })
}
