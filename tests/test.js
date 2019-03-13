'use strict';

const supertest = require('supertest'); 
const test = require('unit.js');
const app = require('../app.js');

const request = supertest(app);

describe('Tests app', function() {
  it('Tests connection to web page', function(done) {
    request.get('/').expect(200).end(function(err, result) {
      test.string(result.text).contains('Contact List App');
      test.value(result).hasHeader('content-type', 'text/html; charset=UTF-8');
      done(err);
    });
  });

  it('Tests get command to database', function(done) {
    request.get('/api/contacts').expect(200).end(function(err, result) {
      console.log(result);
      done(err);
    });
  });

  it('Tests headers of table is correct', function(done) {
    request.get('/').expect(200).end(function(err, result) {
      console.log(result);
    });
  });
});
