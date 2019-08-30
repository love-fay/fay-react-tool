const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

describe('test', () => {
  it('should pass this canary test', () => {
    expect(true).toEqual(true);
  })
});

