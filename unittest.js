var assert = require('assert')

 describe('Unit Test',function(){
    describe('multiplication',function(){
        it("should equal 15 when 5 is multiplied by 3",function(){
            var result = 5*3
            assert.equal(result,15)
        })
    })
    describe('division',function(){
        it("should not equal to 2 when 15 is divided by 5",function(){
            var value=2
            var result=15/5
            assert.notEqual(result, value)
        })
    })

    describe('comparision',function(){
        it("4 is greater than 3 ", function(){
            assert(4>3)
        })
    })
    
 })