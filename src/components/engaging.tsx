import Image from "next/image"
import engaging from "@/app/assets/engaging.webp"
export const Engaging = ()=>{
    return(
        <div>
            <div>
                <Image src={engaging}className="w-full" alt={""} />
            </div>
        </div>
    )
}