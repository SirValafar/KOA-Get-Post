const PORT = 4000;

const Koa = require('koa');
        Router = require('koa-router');
const app = new Koa(),
      router = new Router();

let users = [
    {
        name: 'Jacab',
        email: 'asvvd@example.net'
      },
      {
        name: 'pedro',
        email: 'aaasd@example.net'
      },
      {
        name: 'juan',
        email: 'asffd@example.net'
      },
      {
        name: 'diego',
        email: 'asssd@example.net'
      }

  ];
///GET localhost:4000/user/id
router.get('/user/:id', ctx =>{
  ctx.body = users[ctx.params.id];
});

///POST
router.post('/user/:id', ctx =>{
  ctx.body = Object.assign(users[ctx.params.id], ctx.request.body);
});

app
  .use(require('koa-body')())
  .use(router.allowedMethods())
  .use(router.routes());



app.listen(PORT);
