const request = require('request');
const expect = require("chai").expect;

const baseUrl = "http://api.population.io/";
const version = "1.0";
const endpoint = "population";
const country = "Brazil"; // Example
const url = `${baseUrl}/${version}/${endpoint}/${country}/today-and-tomorrow/`;

describe('World Population API', () => {
  describe('Get a country', () => {
    it('1) returns status 200', (done) => {
      request.get(url).on('response', (response) => {
        expect(response.statusCode).to.equal(200);
        done();
      })
    });
    it('2) gets today\'s date', (done) => {
      request.get(url).on('data', (data) => {
        const json = JSON.parse(data);
        const today = new Date().toISOString().slice(0, 10);
        expect(json.total_population[0].date).to.equal(today);
        done();
      })
    });
    it('3) gets today\'s population', (done) => {
      request.get(url).on('data', (data) => {
        const json = JSON.parse(data);
        expect(typeof(json.total_population[0].population)).to.equal("number");
        done();
      })
    });
  });
});
