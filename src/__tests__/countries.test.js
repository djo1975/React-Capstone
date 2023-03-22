import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Countries from '../components/countries';

describe('', () => {
  it('testing render component', () => {
    const count = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(count).toMatchSnapshot();
  });
});
