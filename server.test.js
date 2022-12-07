
const request = require("supertest");
var expect = require('expect');

const app = require('./server').app;


it('should return hello world',(done)=>{
    
    request(app)
    .get('/')
    .expect(404)   // request.expect, is status code 200?
    .expect('Content-Type', /json/)    // request.expect, does content-type match regex /json/?
    /*.expect((res)=>{  // request.expect, does this user-provided function throw?
    // user-provided function can include Chai assertions
            
            expect(res.body).to.have.property('name','jyothi');
    })*/
    .end(done);
    
    })

    
    
    //.expect("Hello world")
    

            
    
    
    

