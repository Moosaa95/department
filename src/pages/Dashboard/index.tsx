// Dashboard.tsx

import { TableBody, TableHeader } from "components";
import { Product, useApi } from "context/apiContext";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const { fetchProducts } = useApi();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts('FragranceX', 0, 20);
                setProducts(data);
            } catch (error) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const tableHeaders = [
        "image",
        "SKU",
        "Name",
        "Title",
        "Description",
        "Brand",
        "Cost Price",
        "Quantity",
        "Size"
    ];

    const tableBodyHeader = [
        "Image_1",
        "SKU",
        "Name",
        "Title",
        "Description",
        "Brand",
        "Cost Price",
        "Quantity",
        "size"
    ];

    return (
        <div className="w-full">
            <div className="pl-[83px]">
                <h1>Department List</h1>
            </div>
            <div className="space-y-[18px]">
                <TableHeader headers={tableHeaders} />
                <TableBody headers={tableBodyHeader} rows={products} />
            </div>
        </div>
    );
}
