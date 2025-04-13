import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faBell, faXmark } from '@fortawesome/free-solid-svg-icons';
import img1 from './assets/Image/like.png';
import img2 from './assets/react.svg';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const navigation = [
    { name: 'Dashboard', to: '/' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {

    const [dmenu, setdmenu] = useState(false)
    const [navhover, setnavhover] = useState(false)

    return (
        <Disclosure as="nav" className="bg-gray-100 shadow sticky top-0 z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <FontAwesomeIcon icon={open ? faXmark : faBars} className="size-6" />
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex shrink-0 items-center">
                                    <img alt="Company" src={img2} className="h-8 w-auto" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink key={item.name} to={item.to} className={({ isActive }) => classNames(isActive ? 'text-black border-b-3 border-[#615ff8]' : 'text-gray-500 hover:border-b-3 border-[#615ff8] hover:text-black', 'py-5 mx-3 text-base font-medium transition delay-150 duration-300 ease-in-out')} onClick={() => setnavhover(false)}>
                                                {item.name}
                                            </NavLink>
                                        ))}
                                        <div className={`${navhover ? 'text-black border-b-2 border-[#615ff8]' : 'text-gray-500 hover:border-b-3 border-[#615ff8] hover:text-black'} hover:border-b-3 border-[#615ff8] hover:text-black py-5 mx-3 text-base font-medium transition delay-150 duration-300 ease-in-out relative inline-block`} onMouseEnter={() => setdmenu(true)} onMouseLeave={() => setdmenu(false)}>
                                            <button>
                                                Projects
                                                <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
                                            </button>

                                            {dmenu && (
                                                <div className="absolute left-[-5] z-10 mt-5.5 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                                                    <div className="py-1" role="none">
                                                        <NavLink to='/todo' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setnavhover(true)}>Todo List</NavLink>
                                                        <NavLink to='/faq' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setnavhover(true)}>Faq</NavLink>
                                                        <NavLink to='/pass' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setnavhover(true)}>Password Generator</NavLink>
                                                        <NavLink to='/weather' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => setnavhover(true)}>Weather Report</NavLink>
                                                    </div>
                                                </div>
                                            )}

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button type="button" aria-label="Notifications" className="relative rounded-full p-1 text-gray-400 hover:text-black focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800 focus:outline-hidden">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <FontAwesomeIcon icon={faBell} className="text-lg" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex rounded-full border border-[#615ff8] text-sm focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800 focus:outline-hidden cursor-pointer">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img alt="profile" src={img1} className="size-8 rounded-full" />
                                        </MenuButton>
                                    </div>
                                    <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 -leave:ease-in">
                                        <MenuItem>
                                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Your Profile</Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Settings</Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">Sign out</Link>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden z-150">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    as={NavLink}
                                    key={item.name}
                                    to={item.to}
                                    className="block rounded-md px-3 py-2 text-base font-medium active:bg-black active:text-white">
                                    {item.name}
                                </DisclosureButton>
                            ))}
                            <DisclosureButton
                                as={NavLink}
                                className="block rounded-md px-3 py-2 text-base font-medium">

                                <Menu as="div" className="relative inline-block text-left w-full">
                                    <div className=''>
                                        <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                            Projects
                                            <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className="z-10 mt-2 w-full transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <NavLink to='/todo' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Todo List</NavLink>
                                            </MenuItem>
                                            <MenuItem>
                                                <NavLink to='/faq' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Faq</NavLink>
                                            </MenuItem>
                                            <MenuItem>
                                                <NavLink to='/pass' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Password Generator</NavLink>
                                            </MenuItem>
                                            <MenuItem>
                                                <NavLink to='/weather' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Weather Report</NavLink>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </Menu>

                            </DisclosureButton>
                        </motion.div>
                    </DisclosurePanel>

                </>
            )}
        </Disclosure>
    );
}