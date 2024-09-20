"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function SmallHeader(){
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const handleMouseWheel = (event) => {
        if (event.deltaY > 0) {
          // Aşağı kaydırıldığında gizle
          setIsVisible(false);
        } else {
          // Yukarı kaydırıldığında göster
          setIsVisible(true);
        }
      };
  
      // Tarayıcıda çalıştığı için window objesini burada kullanıyoruz
      if (typeof window !== 'undefined') {
        window.addEventListener('wheel', handleMouseWheel);
      }
  
      // Olay dinleyicisini kaldırma
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('wheel', handleMouseWheel);
        }
      };
    }, []);

    return (
        <div className="d-md-none d-flex flex-row align-items-center gap-3 smallHeader">
            <Image
                src="/search.png" 
                alt="search"
                width={20}               
                height={20}               
            />
            <div >
                <h5>Nereye?</h5>
                <div className="d-flex flex-row align-items-center gap-2">
                    <p>Herhangi bir yer</p>
                    <span className="point">.</span>
                    <p>Herhangi hafta</p>
                    <span className="point">.</span>
                    <p>Misafir ekleyin</p>
                </div>
            </div>
            <div className={`search-bar ${isVisible ? '' : 'hidden'} d-flex align-items-center justify-content-center gap-5`}>
                <p>yazi</p>
                <p>yazi</p>
                <p>yazi</p>
            </div>
        </div>
    )
}