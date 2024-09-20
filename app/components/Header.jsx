import Image from "next/image";
import SmallHeader from "./SmallHeader";

export default function Header(){
    return (
        <header className="container">
            <SmallHeader />
            {/* <div>
                <img src="./airbnb.png" alt="" />
                <p>airbnb</p>
            </div>
            <div>

            </div> */}
        </header>
    )
}