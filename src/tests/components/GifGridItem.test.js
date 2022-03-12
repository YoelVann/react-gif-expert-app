import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => { 
    const title = 'title';
    const url = 'www.joel.com' 
    const wrapper = shallow( <GifGridItem  title={title} url={url}/>);

    test('Debe de mostrar el componente', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => { 
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe(title);
     });

    test('Debe de tener la imagen igual al url y alt de los props', () => { 
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    }); 

    test('Debe tener animate__fadeIn', () => { 
        const div = wrapper.find('div');

        // console.log(div.hasClass('animate__fadeIn'))
        expect(div.hasClass('animate__fadeIn')).toBe( true );
    });
 });
