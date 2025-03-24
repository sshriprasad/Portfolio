import image from "../assets/react.svg";
import resume from "../assets/resume.pdf"
export const Navbar = () => {
    return(
        <>
        <header className="bg-gray-600"> 
            <nav className="flex item-center sm:justify-between justify-start gap-5 py-5 px-10
             fixed w-full bg-gray-800 mb-15">
               <div>
                <img src={image} alt="logo"/>

               </div>
               <div>
               <ul className="flex item-center justify-center gap-5 text-white">
                <li className="py-2 px-3  rounded-xl cursor-pointer">  
                 <a href="#"> Home </a>
                 </li>
                <li className="py-2 px-3  rounded-xl cursor-pointer">
                    <a href={resume} type="download"> Resume </a>
                </li>
                <li className="py-2 px-3  rounded-xl cursor-pointer">
                    <a href={'mailto:sshriprasad537@gmail.com?subject=${encodeURIComponent("subject")}&body=${encodeURIComponent("body")}'}>
                         Hire me </a>
                </li>
               </ul>
               </div>

            </nav>     
          
        </header>
        </>
    );
};