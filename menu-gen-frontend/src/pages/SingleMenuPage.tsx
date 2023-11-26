import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Menu, FoodItem }  from './MenusPage';


const SingleMenuPage = () => {
    const { menuId } = useParams();
    const [menu, setMenu] = useState<Menu | null>(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(import.meta.env["BACKEND_URI"] + `/menu/${menuId}`, {
                    method: 'GET',
                    headers: {
                        'x-access-token': localStorage.token,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setMenu(data);
                } else {
                    console.error('Failed to fetch menu');
                }
            } catch (error) {
                console.error('There was an error fetching the menu', error);
            }
        };

        if (menuId) {
            fetchMenu();
        }
    }, [menuId]);


    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Menus {menuId} </h1>


        </div>
    );
};

export default SingleMenuPage;