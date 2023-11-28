import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Menu } from "./MenusPage";

const MenuPage = () => {
  const [menu, setMenu] = useState<Menu | null>(null);
  const { id } = useParams<{ id: string }>();
  const startersRef = useRef<HTMLDivElement>(null);
  const breakfastRef = useRef<HTMLDivElement>(null);
  const dinnerRef = useRef<HTMLDivElement>(null);
  const drinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      fetchMenu(id);
    }
  }, [id]);

  const fetchMenu = async (id: string) => {
    try {
      const response = await fetch(
        `${import.meta.env["VITE_BACKEND_URI"]}/menu/${id}`,
        {
          method: "GET",
          headers: {
            "x-access-token": localStorage.token,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMenu(data);
      } else {
        console.error("Failed to fetch menu");
      }
    } catch (error) {
      console.error("There was an error fetching the menu", error);
    }
  };

  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-5 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Menus</h1>
      <div ref={startersRef} className="w-full px-[10px]">
        <h2 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Starters
        </h2>
        {menu.food_items.map((item) => (
          <div
            style={{
              border:
                item.title === "3" ? `1px solid #FACE8D` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.title}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            {/* <Image
              src={menu.restaurant_logo_url}
              alt={menu.restaurant_name}
              width={256}
              height={256}
              className="mb-4"
            /> */}
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.title}</h1>
                <p className="mb-1">{item.description}</p>
                <p>{"$" + (item.price ? item.price : 0)}</p>
                <p className="mb-1">{item.dietary_restrictions}</p>
                <p className="mb-1">{item.vegetarian ? "Vegetarian" : ""}</p>
                <p className="mb-1">{item.spicy ? "Spicy" : ""}</p>
                <p className="mb-1">{item.gluten_free ? "Gluten-Free" : ""}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
            <Image
              src={item.picture_url}
              alt={item.title}
              width={128}
              height={128}
            />
          </div>
        ))}
      </div>

      <div ref={breakfastRef} className="w-full px-[10px]">
        <h2 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          breakfast
        </h2>
        {menu.food_items.map((item) => (
          <div
            style={{
              border:
                item.title === "3" ? `1px solid #FACE8D` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.title}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            {/* <Image
              src={menu.restaurant_logo_url}
              alt={menu.restaurant_name}
              width={256}
              height={256}
              className="mb-4"
            /> */}
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.title}</h1>
                <p className="mb-1">{item.description}</p>
                <p>{"$" + (item.price ? item.price : 0)}</p>
                <p className="mb-1">{item.dietary_restrictions}</p>
                <p className="mb-1">{item.vegetarian ? "Vegetarian" : ""}</p>
                <p className="mb-1">{item.spicy ? "Spicy" : ""}</p>
                <p className="mb-1">{item.gluten_free ? "Gluten-Free" : ""}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
            <Image
              src={item.picture_url}
              alt={item.title}
              width={128}
              height={128}
            />
          </div>
        ))}
      </div>

      <div ref={dinnerRef} className="w-full px-[10px]">
        <h2 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Dinner
        </h2>
        {menu.food_items.map((item) => (
          <div
            style={{
              border:
                item.title === "3" ? `1px solid #FACE8D` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.title}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            {/* <Image
              src={menu.restaurant_logo_url}
              alt={menu.restaurant_name}
              width={256}
              height={256}
              className="mb-4"
            /> */}
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.title}</h1>
                <p className="mb-1">{item.description}</p>
                <p>{"$" + (item.price ? item.price : 0)}</p>
                <p className="mb-1">{item.dietary_restrictions}</p>
                <p className="mb-1">{item.vegetarian ? "Vegetarian" : ""}</p>
                <p className="mb-1">{item.spicy ? "Spicy" : ""}</p>
                <p className="mb-1">{item.gluten_free ? "Gluten-Free" : ""}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
            <Image
              src={item.picture_url}
              alt={item.title}
              width={128}
              height={128}
            />
          </div>
        ))}
      </div>

      <div ref={drinksRef} className="w-full px-[10px]">
        <h2 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Drinks
        </h2>
        {menu.food_items.map((item) => (
          <div
            style={{
              border:
                item.title === "3" ? `1px solid #FACE8D` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.title}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            {/* <Image
              src={menu.restaurant_logo_url}
              alt={menu.restaurant_name}
              width={256}
              height={256}
              className="mb-4"
            /> */}
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.title}</h1>
                <p className="mb-1">{item.description}</p>
                <p>{"$" + (item.price ? item.price : 0)}</p>
                <p className="mb-1">{item.dietary_restrictions}</p>
                <p className="mb-1">{item.vegetarian ? "Vegetarian" : ""}</p>
                <p className="mb-1">{item.spicy ? "Spicy" : ""}</p>
                <p className="mb-1">{item.gluten_free ? "Gluten-Free" : ""}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
            <Image
              src={item.picture_url}
              alt={item.title}
              width={128}
              height={128}
            />
          </div>
        ))}
      </div>
      </div>
  );
};
export default MenuPage;
      {/* <Card shadow-sm className="max-w-[400px] pb-9"> */}
      {/* <CardHeader className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold mb-4">{menu.restaurant_name}</h1>
          <p className="mb-2">{menu.restaurant_slogan}</p>
          <Image
            src={menu.restaurant_logo_url}
            alt={menu.restaurant_name}
            width={256}
            height={256}
            className="mb-4"
          />
        </CardHeader> */}
      {/* <CardBody className="flex flex-col gap-3 items-center mb-2">
          {menu.food_items.map((item) => (
            <Card key={item.title} className="mb-4 flex flex-col items-center min-w-[256px] pb-4">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="mb-1">{item.description}</p>
              <p>{'$' + (item.price ? item.price : 0)}</p>
              <p className="mb-1">{item.dietary_restrictions}</p>
              <p className="mb-1">{item.vegetarian ? 'Vegetarian' : ''}</p>
              <p className="mb-1">{item.spicy ? 'Spicy' : ''}</p>
              <p className="mb-1">{item.gluten_free ? 'Gluten-Free' : ''}</p>
              <Image
                src={item.picture_url}
                alt={item.title}
                width={128}
                height={128}
              />
            </Card>
          ))}
        </CardBody> */}
      {/* </Card> */}


