"use client";

import React, { useState } from 'react';

export default function Component() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const dataMap = new Map<string, string>([
        ['f22f6f2c', '1'],
        ['11a6b966', '1'],
        ['db721668', '2'],
        ['e402c6b0', '1'],
        ['d1d9acb3', '1'],
        ['3fa0c52b', '1'],
        ['698fcdfa', '2'],
        ['f2ca527c', '1'],
        ['a47b7e6d', '1'],
        ['9088fc75', '1'],
        ['3ca05fa8', '2'],
        ['c2fcee3f', '1'],
        ['32a7631f', '1'],
        ['bda705a3', '3ero'],
        ['9202a6ad', '2'],
        ['b7e161f0', '1'],
        ['d07977de', '1'],
        ['80bb4a6b', '1'],
        ['3566f691', '1'],
        ['dfcf37fd', '2'],
        ['40b14628', '1'],
        ['c51e46e3', '1'],
        ['c2636fed', '2'],
        ['5631e13c', '1'],
        ['e2ada0ec', '2'],
        ['6286fa5d', '2'],
        ['2181b2a3', '1'],
        ['455cd7f8', '1'],
        ['12a97e14', '1'],
        ['3ecd5557', '1'],
        ['18462745', '2'],
        ['797ac04b', '2'],
        ['0992d053', '1'],
        ['7d1bbfd5', '1'],
        ['03c48012', '1'],
        ['736283fc', '1'],
        ['99492c7e', '1'],
        ['444c92aa', '2'],
        ['51cbe75c', '2'],
        ['b2e8294d', '1'],
        ['2e2426b6', '1'],
        ['218ba81f', '1'],
        ['070af2bb', '2'],
        ['e4004572', '1'],
        ['157be5a8', '2'],
        ['1c2ab55d', '1'],
        ['9eb30010', '1'],
        ['7b3089a1', '1'],
        ['230ba042', '1ero'],
        ['3276d2df', '2'],
        ['914cab2a', '1'],
        ['e33ca668', '1'],
        ['f0c9f3dc', '1'],
        ['0cc763c4', '2'],
        ['b22fdb6d', '2'],
        ['f37fea61', '1'],
        ['35b88efd', '1'],
        ['db90501e', '2'],
        ['d56ffd29', '1'],
        ['1772bd39', '1'],
        ['c71d3744', '2ndo'],

    ]);


    const handleButtonClick = () => {
        const queryResult = dataMap.get(inputValue) || 'Código inválido.';
        if (queryResult == '1'){
            setResult("1 unidad en cualquier indicador de cualquier materia")
            return
        }
        if (queryResult == '2'){
            setResult("7 en nota del 30% o 2 unidades en cualquier nota.")
            return
        }
        if (queryResult == '1ero'){
            setResult("1 indicador en 7 y 7 en nota del 30% o 2 unidades en cualquier nota.")
            return
        }
        if (queryResult == '2ndo') {
            setResult("1 Nota en 7 y 7 en nota del 30% o 2 unidades en cualquier nota.")
            return
        }
        if (queryResult == '3ero'){
            setResult("+3 Unidades y 7 en nota del 30% o 2 unidades en cualquier nota.")
            return
        }
        setResult(queryResult);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Código del estudiante"
                    className="border p-2 text-black"
                />
                <button onClick={handleButtonClick} className="ml-2 p-2 bg-blue-500 text-white">
                    Buscar
                </button>
            </div>
            {result && <p className="mt-4">Resultado: {result}</p>}
        </div>
    );
}