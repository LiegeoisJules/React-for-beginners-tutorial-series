import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useTransition, animated} from "react-spring";
import Menu from "./menu";
function Nav() {

	const [showMenu, setShowMenu] = useState(false);

	const maskTransitions = useTransition(showMenu, null, {
		from: {position: 'absolute', opacity: 0},
		enter: {opacity: 1},
		leave: {opacity: 0}
	});

	const menuTransitions = useTransition(showMenu, null, {
		from: {opacity: 0, transform: 'translateX(-100%)'},
		enter: {opacity: 1, transform: 'translateX(0%)'},
		leave: {opacity: 0, transform: 'translateX(-100%)'}
	});

	const menuClass = 'fixed bg-white top-0 left-0 w-2/5 h-full z-50 shadow p-3';
	const menuMaskClass = 'bg-black-t-50 fixed top-0 left-0 w-full h-full z-50';

	return (
		<nav className=''>
			<span onClick={() => setShowMenu(!showMenu)} className='text-xl cursor-pointer'>
				<FontAwesomeIcon icon={faBars}/>
			</span>

			{
				maskTransitions.map(({item, key, props}) =>
					item &&
					<animated.div
						key={key}
						style={props}
						className={menuMaskClass}
						onClick={() => setShowMenu(false)}
					/>
				)
			}

			{
				menuTransitions.map(({item, key, props}) =>
					item &&
					<animated.div
						key={key}
						style={props}
						className={menuClass}
					>
						<Menu
							closeMenu={() => setShowMenu(false)}
						/>
					</animated.div>
				)
			}
		</nav>
	);
}

export default Nav;
