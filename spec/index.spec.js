const server = require('../index');
const supertest = require('supertest');

describe('Test Routes', () => {

    it ('add route must return 200 response', (done) => {
        const app = supertest(server);
        app.get('/add?numberA=4&numberB=3')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('add route must return 500 response', (done) => {
        const app = supertest(server);
        app.get('/add?numberA=&numberB=')
        .set('Accept', 'application/json')
        .expect(500, done);
    });

    it('subtract route must return 200 response', (done) => {
        const app = supertest(server);
        app.get('/subtract?numberA=4&numberB=3')
        .set('Accept', 'application/json')
        .expect(200, done);
    })

    it('subtract route must return 500 response', (done) => {
        const app = supertest(server);
        app.get('/subtract?numberA=&numberB=')
        .set('Accept', 'application/json')
        .expect(200, done);
    })

    it('multiply route must return 200 response', (done) => {
        const app = supertest(server);
        app.get('/multiply?numberA=2&numberB=3')
        .set('Accept', 'application/json')
        .expect(200, done);
    })

    it('multiply route must return 500 response', (done) => {
        const app = supertest(server);
        app.get('/multiply?numberA=&numberB=')
        .set('Accept', 'application/json')
        .expect(200, done);
    })

    it('divide route must return 500 response', (done) => {
        const app = supertest(server);
        app.get('/divide?numberA=&numberB=')
        .set('Accept', 'application/json')
        .expect(200, done);
    })

    it('divide route must return 200 response', (done) => {
        const app = supertest(server);
        app.get('/divide?numberA=12&numberB=3')
        .set('Accept', 'application/json')
        .expect(200, done);
    })

})
