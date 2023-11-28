import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Menu } from "./MenusPage";

const MenuPage = () => {
  const [menu, setMenu] = useState<Menu | null>(null);
  const { id } = useParams<{ id: string }>();
  const startersRef = useRef<HTMLDivElement>(null);
  // const breakfastRef = useRef<HTMLDivElement>(null);
  // const dinnerRef = useRef<HTMLDivElement>(null);
  const drinksRef = useRef<HTMLDivElement>(null);
  const [showFood, setShowFood] = useState<boolean>(true);
  const [showDrinks, setShowDrinks] = useState<boolean>(true);
  const handleFoodCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowFood(event.target.checked);
  };
  const handleDrinksCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowDrinks(event.target.checked);
  };

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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{menu.restaurant_name}</h1>
      <p className="mb-2">{menu.restaurant_slogan}</p>
      <div className="mb-4">
        <Image
          src={menu.restaurant_logo_url}
          alt={menu.restaurant_name}
          width={256}
          height={256}
        />
      </div>


     <div>
      {menu.food_items.map((item) => (
        <div ref={startersRef} className="w-full px-[10px]">
          <h4 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
            Food
          </h4>
          <div
            style={{
              border:
                item.title === "3" ? `1px solid #FACE8D` : "1px solid black",
              borderRadius: 10,
            }}
            key={item.title}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-100"
          >
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[30px]">{item.title}</h1>
                <h4 className="text-[20px]">{item.description}</h4>
                <h4>{"$" + (item.price ? item.price : 0)}</h4>
                <p className="text-[20px]">{item.dietary_restrictions}</p>
                <p className="text-[20px]">
                  {item.vegetarian ? "Vegetarian" : ""}
                </p>
                <p className="text-[20px]">{item.spicy ? "Spicy" : ""}</p>
                <p className="text-[20px]">
                  {item.gluten_free ? "Gluten-Free" : ""}
                </p>
                <p className="text-[20px]">
                  {item.breakfast ? "Breakfast" : ""}
                </p>
                <p className="text-[20px]">{item.dinner ? "Dinner" : ""}</p>
                <p className="text-[20px]">{item.drinks ? "Drinks" : ""}</p>
              </div>
            </div>
            <Image
              src={item.picture_url}
              alt={item.title}
              width={128}
              height={128}
            />
          </div>
        </div>
      ))}

      </div>
      <div>
      <div ref={drinksRef} className="w-full px-[10px]">
        <h4 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Drinks
        </h4>
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
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[30px]">{item.title}</h1>
                <h4 className="text-[20px]">{item.description}</h4>
                <h4>{"$" + (item.price ? item.price : 0)}</h4>
                <p className="text-[20px]">{item.dietary_restrictions}</p>
                <p className="text-[20px]">
                  {item.vegetarian ? "Vegetarian" : ""}
                </p>
                <p className="text-[20px]">{item.spicy ? "Spicy" : ""}</p>
                <p className="text-[20px]">
                  {item.gluten_free ? "Gluten-Free" : ""}
                </p>
                <p className="text-[20px]">
                  {item.breakfast ? "Breakfast" : ""}
                </p>
                <p className="text-[20px]">{item.dinner ? "Dinner" : ""}</p>
                <p className="text-[20px]">{item.drinks ? "Drinks" : ""}</p>
              </div>
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
      {/* 
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
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.title}</h1>
                <p className="mb-1">{item.description}</p>
                <p>{"$" + (item.price ? item.price : 0)}</p>
                <p className="mb-1">{item.dietary_restrictions}</p>
                <p className="mb-1">{item.vegetarian ? "Vegetarian" : ""}</p>
                <p className="mb-1">{item.spicy ? "Spicy" : ""}</p>
                <p className="mb-1">{item.gluten_free ? "Gluten-Free" : ""}</p>
                <p className="mb-1">{item.breakfast ? "breakfast" : ""}</p>
                <p className="mb-1">{item.dinner ? "dinner" : ""}</p>
                <p className="mb-1">{item.drinks ? "drinks" : ""}</p>
              </div>
            </div>
            <Image
              src={item.picture_url}
              alt={item.title}
              width={128}
              height={128}
            />
          </div>
        ))} */}
      {/* </div> */}

      {/* <div ref={dinnerRef} className="w-full px-[10px]">
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
          > */}
      {/* <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.title}</h1>
                <p className="mb-1">{item.description}</p>
                <p>{"$" + (item.price ? item.price : 0)}</p>
                <p className="mb-1">{item.dietary_restrictions}</p>
                <p className="mb-1">{item.vegetarian ? "Vegetarian" : ""}</p>
                <p className="mb-1">{item.spicy ? "Spicy" : ""}</p>
                <p className="mb-1">{item.gluten_free ? "Gluten-Free" : ""}</p>
                <p className="mb-1">{item.breakfast ? "breakfast" : ""}</p>
                <p className="mb-1">{item.dinner ? "dinner" : ""}</p>
                <p className="mb-1">{item.drinks ? "drinks" : ""}</p>
              </div>
            </div>
            <Image
              src={item.picture_url}
              alt={item.title}
              width={128}
              height={128}
            />
          </div>
        ))}
      </div> */}
      {/* <Card shadow-sm className="max-w-[400px] pb-9">
        <CardHeader className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold mb-4">{menu.restaurant_name}</h1>
          <p className="mb-2">{menu.restaurant_slogan}</p>
          <Image
            src={menu.restaurant_logo_url}
            alt={menu.restaurant_name}
            width={256}
            height={256}
            className="mb-4"
          />
        </CardHeader>
        <CardBody className="flex flex-col gap-3 items-center mb-2">
          {menu.food_items.map((item) => (
            <Card
              key={item.title}
              className="mb-4 flex flex-col items-center min-w-[256px] pb-4"
            >
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="mb-1">{item.description}</p>
              <p>{"$" + (item.price ? item.price : 0)}</p>
              <p className="mb-1">{item.dietary_restrictions}</p>
              <p className="mb-1">{item.vegetarian ? "Vegetarian" : ""}</p>
              <p className="mb-1">{item.spicy ? "Spicy" : ""}</p>
              <p className="mb-1">{item.gluten_free ? "Gluten-Free" : ""}</p>
              <Image
                src={item.picture_url}
                alt={item.title}
                width={128}
                height={128}
              />
            </Card>
          ))}
        </CardBody>
      </Card> */}
    </div>
  );
};
export default MenuPage;
