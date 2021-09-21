import express from "express";
import path from 'path';
const app =express();
import Template from '../template';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import MainRouter from '../client/MainRouter';
import cors from 'cors';
import bodyParser from 'body-parser';
const CURRENT_WORKING_DIR =process.cwd();
import devBundle from './devBundle';

// Middlewares

devBundle.compile(app);

app.use(cors());
app.use(bodyParser());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/path',(req,res)=>{
  res.send(Template({markup:"hello i ame qasim"}))
})


app.get('*', (req, res) => {
    const sheets = new ServerStyleSheets()
    const context = {}
    const markup = ReactDOMServer.renderToString(
      sheets.collect(
        <StaticRouter location={req.url} context={context}>
                 <MainRouter/>
        </StaticRouter>
       )
    )
      if (context.url) { 
        return res.redirect(303, "wrong path");
      }
      // const css = sheets.toString();
      res.status(200).send(Template({
        markup: markup
        // css: css
      }))
  })

  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }else if (err) {
      res.status(400).json({"error" : err.name + ": " + err.message})
      console.log(err)
    }
  })
  
  export default app