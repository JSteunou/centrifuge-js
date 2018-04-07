/* global describe, it, before */

import chai from 'chai';
import {Centrifuge} from '../dist/centrifuge.js';
import {CentrifugeProtobuf} from '../dist/centrifuge.js';

chai.expect();

const expect = chai.expect;

let centrifuge;
let centrifugeProtobuf;

describe('Given an instance of Centrifuge', () => {
  before(() => {
    centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket');
  });
  describe('when I need the url', () => {
    it('should return the url', () => {
      expect(centrifuge._url).to.be.equal('ws://localhost:8000/connection/websocket');
    });
  });
});

describe('Given an instance of CentrifugeProtobuf', () => {
  before(() => {
    centrifugeProtobuf = new CentrifugeProtobuf('ws://localhost:8000/connection/websocket');
  });
  describe('when I need the url', () => {
    it('should return the url', () => {
      expect(centrifugeProtobuf._url).to.be.equal('ws://localhost:8000/connection/websocket');
    });
  });
});
