import { shallow } from 'enzyme';
import React from 'react';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => { 
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>)
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>)
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const value = 'hola';
        const input = wrapper.find('input');
        input.simulate('change', { target:{value} });
        
        expect(wrapper.find('h1').text()).toBe(value)
    });

    test('No debe de postear la información on submit', () => { 
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja detexto', () => { 
        const value = 'simona la mona';
        // const input = wrapper.find('input');
        // const form = wrapper.find('form');

        wrapper.find('input').simulate('change', { target:{value}} );
        wrapper.find('form').simulate('submit', { preventDefault(){}});

       expect( setCategories ).toHaveBeenCalled();
       expect(wrapper.find('input').prop('value')).toBe('');
    });
});