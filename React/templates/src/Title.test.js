import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';


import Title from './Title';

Enzyme.configure({adapter: new Adapter()});

test("checking header tag", () =>{

  const wrapper = shallow( <Title></Title>);
  
  //expect( wrapper.find('h1').text()).toContain('Welcome')
  expect(  wrapper.find('h2').text()).toContain("2022")
})
