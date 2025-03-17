import Image from "next/image";
import ErrorImage from "@/assets/images/decorations/NotFound.webp";
import Link from "next/link";

//404 page when user goes to an invalid link
export default function NotFound(){
  return (
    <div className="error-page">
      <Image src={ErrorImage} alt="404 image"></Image>
      <h1>404 - Page not found!</h1>
      <p>The page you are looking for might have been removed, had its address changed, or dosent exist</p>
      <Link href={"/"}><button className="btn btn-primary">Go to home</button></Link>
    </div>
  )
}