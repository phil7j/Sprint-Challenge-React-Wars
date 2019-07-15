import React from 'react';
import Character from './components/Character';
import renderer from 'react-test-renderer';

describe('<Character />', ()=> {

    it('should match snapshot', () => {
      const tree = renderer.create(<Character />).toJSON();

      expect(tree).toMatchSnapshot();
    });

})