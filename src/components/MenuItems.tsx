import Dropdown from './Dropdown';
  
interface SubmenuItemsProps {
    title: string;
    url: string;
}

interface MenuItemsProps{
    title: string;
    url: string;
    submenu?: SubmenuItemsProps[];
}
interface ItemProps{
  item: MenuItemsProps;
}
const MenuItems: React.FC<ItemProps> = ({ item }) => {
    return (
      <li className="menu-items">
        {item.submenu ? (
          <>
            <button type="button" aria-haspopup="menu">
              {item.title}{' '}
            </button>
            <Dropdown submenus={item.submenu} />
          </>
        ) : (
          <a href={item.url}>{item.title}</a>
        )}
      </li>
    );
  };
  
  export default MenuItems;