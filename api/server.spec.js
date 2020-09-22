const supertest = require('supertest')

const server = require('./server')
const db = require('../data/dbConfig')

let token;

describe("server", () => {

    describe('/api/auth/register', () => {
        beforeEach(async () => {
            await db('users')
        })

        it('should return 201 when passed correct data', () => {
            return supertest(server)
                .post('/api/auth/register')
                .send({ username: 'testauth22', password: 'testing', role: 'tester' })
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
                .send({ username: 'testauth22', password: 'testing' })
               
                .then(res => {
                    expect(res.status).toBe(200)
                    token = res.body.token
                    console.log(res.body.token)
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

    describe('/api/users', () => {
        beforeEach(async () => {
            await db('users')
        })


        it("should return a list of users", async () => {
            return supertest(server)
            .get('/api/users')
            .set('Authorization', `${token}`)
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

    })

    describe('/api/profile', () => {
        beforeEach(async () => {
            await db('users')
        })

        it('should return a list of profiles', async () => {
            return supertest(server)
            .get('/api/profile')
            .set('Authorization', `${token}`)
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    })

    describe('/api/potluck', () => {
        beforeEach(async () => {
            await db('users')
        })

        it('should return a list of potluckss', async () => {
            return supertest(server)
            .get('/api/potluck')
            .set('Authorization', `${token}`)
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    })
})

