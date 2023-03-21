import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../components/details';

describe('Details', () => {
  it('should render the component', () => {
    const detail = renderer.create(
      <Provider store={store}>
        <Details />
      </Provider>,
    ).toJSON();
    expect(detail).toMatchSnapshot();
  });
});
