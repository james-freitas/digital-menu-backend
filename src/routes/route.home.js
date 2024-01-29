import { Router } from "express";

const routeHome = Router();

routeHome.get('/', function(req, res){
  res.send('Home page');
});

export default routeHome;