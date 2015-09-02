var should= require('should-http'),
    request= require('supertest');

describe ('student', function() {
    var url= "http://localhost:5000";
    
    describe ("find()", function(){
        it('should retreive all student records', function(done) {
            request(url)
            .get('/students')
            //.send(studrec)
            .end(function(err, res){
                if(err) throw err;
                res.should.have.status(200);
                res.body.should.be.an.instanceOf(Array);
                done();
            });
        });
        
     });
     
    describe ("findOne()", function(){
         it('should retreive a specific student record', function(done) {
             request(url)
             .get('/students/2')
             //.send(studrec)
             .end(function(err, res){
             if(err) throw err;
             res.should.have.status(200);
             done();
             });
          });
     }); 

    describe ("insert()", function(){
          var studrec = 
            {'name': 'Vision', 'studno': '2013-89898'};
          
          it('should put a student record', function(done) {
            request(url)
            .post('/students')
             .send(studrec)
            .end(function(err, res){
            if(err) throw err;
             res.should.have.status(200);
             done();
            });
          });
     });

});