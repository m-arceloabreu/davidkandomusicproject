import Link from "next/link";
export default function NotFound(){
    return(
        <div className="">
            <div className="font-ranga text-4xl">404 - page not found</div>
            <div className="font-roboto text-2xl">Try going to <Link className="link" href='/'>Home Page</Link></div>
        </div>
    );
}