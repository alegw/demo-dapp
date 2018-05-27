import Network from './network'
import contract from 'truffle-contract'

const provider = Network.provider();

function getContract(name) {
  const C = contract(require('../build/contracts/' + name + '.json'));
  C.setProvider(provider);
  return C;
}

const Jurisdiction = getContract('Jurisdiction');
const Validator = getContract('DummyValidator');

export {
  Jurisdiction,
  Validator
}
