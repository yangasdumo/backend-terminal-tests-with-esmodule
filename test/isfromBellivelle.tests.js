import assert from "assert";
import isFromBellville from "../isfromBellivelle.js";


describe('test my Bellivelle function' , function(){
    
    it('should return true if the registration numbers starts with CY', function(){
        assert.equal(isFromBellville("CY 123"), true);
    });
    it('should return false if the registration numbers is not from bellville', function(){
        assert.equal(isFromBellville("CJ 123"),false);
    });
    it('should return invalid registration if an empty string passed', function(){
        assert.equal(isFromBellville(""), "invalid registration");
    });
});