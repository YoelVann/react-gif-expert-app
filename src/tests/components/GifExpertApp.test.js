import React from 'react';
import { shallow } from 'enzyme'
import  GifExpertApp  from '../../components/GifExpertApp';

describe('Pruebas en GifExpertApp', () => { 

    test('Debe de hacer match con el snapshot', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['Naruto', 'Bleach'];
        
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length)
    });
})