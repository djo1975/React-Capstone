import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Country from '../components/country';

describe('Country', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Country
          name="Canada"
          flagEmoji="🇨🇦"
          continent="North America"
        />
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
