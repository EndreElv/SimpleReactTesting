//Din Kode












/*
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

//describe beskriver en gruppe med tester
describe('Clock', ()=> {
  //it beskriver en test. Den kan inneholde flere assertions/expect statements
  it('Should exist', ()=> {
    expect(Clock).toExist();
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      //For å teste formaterinegn av det som faktisk vises til brukeren bruker vi TestUtils
      var clock = TestUtils.renderIntoDocument(<Clock/>);  //Clock holder nå den faktiske koden som puttes i DOM (Document Object Model i nettleseren)
      var seconds = 615; //Argumentet som sendes inn
      var expected = '10:15'; //Hva vi forventes at puttes i DOM for denne testen med argumentet over
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected); //Vi kaller expect med den faktiske verdien koden vår returnerer og tester at den er lik det vi forventer.
    });

    it('should format seconds when min/sec are less than 10', () => {
      //For å teste formaterinegn av det som faktisk vises til brukeren bruker vi TestUtils
      var clock = TestUtils.renderIntoDocument(<Clock/>); //Clock holder nå den faktiske koden som puttes i DOM (Document Object Model i nettleseren)
      var seconds = 61; //Argumentet som sendes inn
      var expected = '01:01'; //Hva vi forventes at puttes i DOM for denne testen med argumentet over
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected); //Vi kaller expect med den faktiske verdien koden vår returnerer og tester at den er lik det vi forventer.
    });
  });
});
*/
