import CartdownIcon from "../components/icons/CartdownIcon";
import CircleDollerIcon from "../components/icons/CircleDollerIcon";
import DollerIcon from "../components/icons/DollerIcon";
import ShopIcon from "../components/icons/ShopIcon";

const adminTotal = [
  {
    id: 1,
    title: "Total Revenue",
    rate: 971.22,
    days: "(Last 30 Days)",
    icon: <DollerIcon width={30} height={30} />,
  },
  {
    id: 2,
    title: "Total Order",
    rate: 10,
    days: "(Last 30 Days)",
    icon: <CartdownIcon width={50} height={50} />,
  },
  {
    id: 3,
    title: "Todays Revenue",
    rate: 0.0,
    days: "",
    icon: <CircleDollerIcon width={50} height={50} />,
  },
  {
    id: 4,
    title: "Total Shops",
    rate: 82,
    days: "",
    icon: <ShopIcon width={30} height={30} />,
  },
];

export { adminTotal };
