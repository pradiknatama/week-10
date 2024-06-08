const request = require("supertest");
const app = require("./app");


const request_user_register ={
    email:"Test@gmail.com",
    password:"admin",
    name:"tes"
}
let user_id=6;
describe("GET /user/register",()=>{
    test("Should register a user", async()=>{
        return request(app).post("/user/register")
        .send(request_user_register)
        .expect(201)
        .then(({body})=>{
            user_id=body.id
        })
    })
})

describe("GET /user/:id",()=>{
    test("Should return one user", async()=>{
        return request(app).get(`/user/${user_id}`)
        .expect(200)
        .expect('content-type',/application\/json/)
    })
})