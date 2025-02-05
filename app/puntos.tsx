"use client";

import React, { useState, useEffect } from 'react';
import { connectToDatabase } from '../lib/mongodb';

export default function PointsPage() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [dataMap, setDataMap] = useState<Map<string, string>>(new Map());
    const [redeemedCodes, setRedeemedCodes] = useState<Set<string>>(new Set());

    useEffect(() => {
        const fetchData = async () => {
            const client = await connectToDatabase();
            const db = client.db(process.env.MONGODB_DB);
            const collection = db.collection('codes');
            const data = await collection.find({}).toArray();
            const map = new Map<string, string>();
            data.forEach((item: { code: string; value: string }) => {
                map.set(item.code, item.value);
            });
            setDataMap(map);
        };

        fetchData();

        const redeemedCodes = document.cookie.split('; ').find(row => row.startsWith('redeemedCodes='));
        if (redeemedCodes) {
            const codes = redeemedCodes.split('=')[1].split(',');
            setRedeemedCodes(new Set(codes));
        }
    }, []);

    const handleButtonClick = async () => {
        if (redeemedCodes.has(inputValue)) {
            setResult('El código ha sido usado.');
            return;
        }

        const queryResult = dataMap.get(inputValue) || 'Código inválido.';
        if (queryResult == '1'){
            setResult("1 unidad en cualquier indicador de cualquier materia");
        } else if (queryResult == '2'){
            setResult("7 en nota del 30% o 2 unidades en cualquier nota.");
        } else if (queryResult == '1ero'){
            setResult("1 indicador en 7 y 7 en nota del 30% o 2 unidades en cualquier nota.");
        } else if (queryResult == '2ndo') {
            setResult("1 Nota en 7 y 7 en nota del 30% o 2 unidades en cualquier nota.");
        } else if (queryResult == '3ero'){
            setResult("+3 Unidades y 7 en nota del 30% o 2 unidades en cualquier nota.");
        } else {
            setResult(queryResult);
        }

        redeemedCodes.add(inputValue);
        setRedeemedCodes(new Set(redeemedCodes));
        document.cookie = `redeemedCodes=${Array.from(redeemedCodes).join(',')}; path=/;`;
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
                <button onClick={handleButtonClick} className="ml-2 p-2 bg-blue-500 text-black">
                    Buscar
                </button>
            </div>
            {result && <p className="mt-4 text-black">Resultado: {result}</p>}
        </div>
    );
}
