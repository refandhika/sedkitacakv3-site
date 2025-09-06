"use client"

import { useEffect, useState } from "react";
import { fetchHobbyList } from "@/app/lib/fetch";
//import Image from "next/image";

const HobbyList = () => {
    //const [loading, setLoading] = useState(true);
    const [hobbies, setHobbies] = useState([]);

	useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedData = await fetchHobbyList(1, 20, "");
            setHobbies(fetchedData);
          } catch (err) {
            console.error('Failed to fetch hobbies:', err);
          } finally {
            //setLoading(false);
          }
        }
    
        fetchData();
	}, []);

    return (
        <>
            <div className="my-8 grid grid-cols-1">
            {hobbies?.map((hobby: any, index: number) => (
                <div className="py-4 flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-6" key={hobby.id}>
                  <div className={`w-full ${index % 2 ? "order-1" : "order-2"}`}>
                    <img
                      className="w-full h-full"
                      src={process.env.NEXT_PUBLIC_API_URL + hobby.image}
                      alt={`hobby-${index}`}
                    />
                  </div>
                  <div className={`flex flex-col justify-center gap-2 ${index % 2 ? "order-2" : "order-1"}`}>
                    <h2 className="text-2xl lg:text-4xl font-bold">{hobby.title}</h2>
                    <div className="text-xl lg:text-2xl flex flex-col gap-4 rich-text" dangerouslySetInnerHTML={{ __html: hobby.content }}></div>
                  </div>
                </div>
            ))}
            </div>
            <div className="pagination"></div>
        </>
    );
};

export default HobbyList;
