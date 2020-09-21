const supertest = require('supertest')

const server = require('./server')
const db = require('../data/dbConfig')


describe("server", () => {

    describe('/api/auth/register', () => {
        beforeEach(async () => {
            await db('users')
        })

        it('should return 201 when passed correct data', () => {
            return supertest(server)
                .post('/api/auth/register')
                .send({ username: 'test6', password: 'testing', role: 'tester' })
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })

        it('should fail if either username or password are missing', () => {
            return supertest(server)
                .post('/api/auth/register')
                .send({})
                .then(res => {
                    expect(res.status).toBe(400)
                })
        })

    })


    describe('/api/auth/login', () => {

        it('should return 201 when user logs in', () => {
            return supertest(server)
                .post('/api/auth/login')
                .send({ username: 'test6', password: 'testing' })
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should fail if no username or password entered on login', () => {
            return supertest(server)
                .post('/api/auth/login')
                .send({})
                .then(res => {
                    expect(res.status).toBe(400)
                })
        })
    })

    // describe('/api/users', () => {
    //     beforeAll(async (done) => {
    //     supertest(server)
    //     .post('/api/auth/login')
    //     .send({
    //         username: 'test6',
    //         password: 'testing',
    //     })
    //     })

    //     it('should return a list of users when logged in', () => {
    //         return supertest(server)
    //             .get('/api/users')
    //             .then(res => {
    //                 expect(res.status).toBe(200)
    //             })
    //     })
    // })

})