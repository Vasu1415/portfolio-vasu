import Link from "next/link";

const NavLink = ({href, title}) => {
    return (<Link 
        href={href}
        className="block py-2 pl-3 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-white sm:text-xl rounded md:p-0"
    >
        {title}
    </Link>);
};

export default NavLink;