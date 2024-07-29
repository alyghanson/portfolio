interface SubmenuItemsProps {
    title: string;
    url: string;
};

interface DropdownProps {
    submenus: SubmenuItemsProps[];
};

const Dropdown: React.FC<DropdownProps>= ({ submenus }) => {
    return (
      <ul className="dropdown">
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;
