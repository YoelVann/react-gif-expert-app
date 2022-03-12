import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {

    test('debe de retornar el estado incial', async() => {

       const { result, waitForNextUpdate } =  renderHook(() => useFetchGifs('Black Clover'));
       const { data, loading } = result.current;
       await waitForNextUpdate();
       // const { data, loading } = useFetchGifs( category );
       expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });
    
    test('debe de reotornar un arreglo de imagenes y loading false', async() => {
        
        const { result, waitForNextUpdate } =  renderHook(() => useFetchGifs('Black Clover'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        
        expect( data.length ).toEqual(10);
        expect( loading ).toBe( false );
    });
});