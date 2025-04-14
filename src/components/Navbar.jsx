import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
			<nav className="flex w-full screen-max-width">
				<img src={appleImg} alt="Apple" width={16} height={18} />
				<div className="flex flex-1 justify-center max-sm:hidden gap-7">
					{navLists.map((item) => (
						<div key={item} className='px-5 text-sm cursor-pointer 
							text-gray hover:text-white transition-all'
						>
							{item}
						</div>
					))}
				</div>
				<div className='flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="Search" width={18} height={18} className="cursor-pointer" />
					<img src={bagImg} alt="Bag" width={18} height={18} className='cursor-pointer' />
        </div>
			</nav>
    </header>
  )
}

export default Navbar
