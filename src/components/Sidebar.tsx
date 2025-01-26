import { useState } from 'react';

const Sidebar = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="bg-gray-800 text-white transition-all duration-300 w-64 p-4">
      <ul className="space-y-4">
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            대시보드
          </a>
        </li>
        <li>
          <button
            onClick={toggleSubMenu}
            className="w-full text-left block py-2 px-4 hover:bg-gray-700 rounded-md"
          >
            메뉴 1
          </button>
          <ul
            className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${isSubMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                하위 메뉴 1
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                하위 메뉴 2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
            메뉴 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
