import CategoryIcon from "../components/icons/CategoryIcon";
import DashboardIcon from "../components/icons/DashboardIcon";
import LayoutIcon from "../components/icons/LayoutIcon";
import MyShopIcon from "../components/icons/MyShopIcon";
import OrderIcon from "../components/icons/OrderIcon";
import ProductIcon from "../components/icons/ProductIcon";
import ShopIcon from "../components/icons/ShopIcon";
import TagIcon from "../components/icons/TagIcon";
import OrderlineIcon from "../components/icons/OrderlineIcon";
import BoxTrueIcon from "../components/icons/BoxTrueIcon";
import UserIcon from "../components/icons/UserIcon";
import TaxIcon from "../components/icons/TaxIcon";
import WithdrawIcon from "../components/icons/WithdrawIcon";
import QuestionIcon from "../components/icons/QuestionIcon";
import ReviewIcon from "../components/icons/ReviewIcon";
import SettingIcon from "../components/icons/SettingIcon";

const userRoutes = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: <DashboardIcon width={20} height={20} />,
  },
  {
    id: 2,
    name: "Shops",
    path: "shops",
    icon: <ShopIcon width={20} height={20} />,
  },
  {
    id: 3,
    name: "My Shops",
    icon: <MyShopIcon width={20} height={20} />,
  },
  {
    id: 4,
    name: "Products",
    icon: <ProductIcon width={20} height={20} />,
  },
  {
    id: 5,
    name: "Layouts Type",
    icon: <LayoutIcon width={20} height={20} />,
  },
  {
    id: 6,
    name: "Categories",
    icon: <CategoryIcon width={20} height={20} />,
  },
  {
    id: 7,
    name: "Tags",
    icon: <TagIcon width={20} height={20} />,
  },
  {
    id: 8,
    name: "Orders",
    icon: <BoxTrueIcon width={20} height={20} />,
  },
  {
    id: 9,
    name: "Order Status",
    icon: <OrderIcon width={20} height={20} />,
  },
  {
    id: 10,
    name: "Create Order",
    icon: <OrderlineIcon width={20} height={20} />,
  },
  {
    id: 11,
    name: "Users",
    icon: <UserIcon width={20} height={20} />,
  },
  {
    id: 12,
    name: "Taxes",
    icon: <TaxIcon width={20} height={20} />,
  },
  {
    id: 13,
    name: "Withdrawals",
    icon: <WithdrawIcon width={20} height={20} />,
  },
  {
    id: 14,
    name: "Questions",
    icon: <QuestionIcon width={20} height={20} />,
  },
  {
    id: 15,
    name: "Reviews",
    icon: <ReviewIcon width={20} height={20} />,
  },
  {
    id: 16,
    name: "Settings",
    icon: <SettingIcon width={20} height={20} />,
  },
];

export { userRoutes };
