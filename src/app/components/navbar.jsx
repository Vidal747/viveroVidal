import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-lime-950 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
            
          <img src="images/LOGO.png " className='w-12 h-12'  />
        </Link>

        <div className="flex space-x-4 text-white">
          <Link href="/">
            Home
          </Link>
          <Link href="/plantas">
            Plantas
          </Link>
          <Link href="/productos">
            Productos
          </Link>
          <Link href="/tips">
            Tips
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/shopingCart">
            [ ]/
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
