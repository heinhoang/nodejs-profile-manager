const request = require('supertest');
const {should} = require('chai');
const app = require('../app');

describe('GET /', () => {
    it('should return 200 OK', () => {
        request(app)
            .get('/')
            .expect(200)
            .end((req, res) => {
                res.title.should.equal('Home Page')
            });
    });
});

describe('GET /login', () => {
    it('should return 200 OK', () => {
        request(app)
            .get('/login')
            .expect(200);
    });
});

describe('GET /register', () => {
    it('should return 200 OK', () => {
        request(app)
            .get('/register')
            .expect(200);
    });
});

describe('POST /register', function () {
    it('should register valid user', function (done) {
        request(app)
            .post('/register')
            .send({
                email: "test@example.com",
                password: "test"
            })
            .expect(302)
            .end(function (err, res) {
                done(err);
            });
    });
});