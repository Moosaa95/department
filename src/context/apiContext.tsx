// apiContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
    id: number;
    name: string;
    price: number;
    [key: string]: string | number;
}

interface ApiContextType {
    fetchProducts: (supplier: string, first: number, last: number) => Promise<Product[]>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};

interface ApiProviderProps {
    children: React.ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const apiUrl = 'http://3.88.1.181:8000/products/public/catalog';

    const fetchProducts = async (supplier: string, first: number = 0, last: number = 20) => {
        try {
            const url = `${apiUrl}?supplier=${supplier}&first=${first}&last=${last}`;
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error; 
        }
    };

    const apiContextValue: ApiContextType = {
        fetchProducts,
    };

    return (
        <ApiContext.Provider value={apiContextValue}>
            {children}
        </ApiContext.Provider>
    );
};
