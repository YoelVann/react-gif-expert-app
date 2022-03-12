import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGridItem', () => { 

    const category = "Black Clover"

    test('Debe de mostrar el componente', () => { 
        
       useFetchGifs.mockReturnValue({
        data:[],
        loading: true
       });
        const wrapper = shallow( <GifGrid  category={category}/>);
        expect( wrapper ).toMatchSnapshot();
    });
   
    
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => { 
        
        const images = [{
            id: 'ABC',
            url: 'https:localhost/hola/hola.jpg',
            title: 'title'
        }];

        useFetchGifs.mockReturnValue({
            data: images,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid  category={category}/>);
       
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(images.length)
    });
 });
