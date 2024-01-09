import userimg from "../assets/user-sidebar-image.png";
import home from "../assets/home.svg";
import order from "../assets/order.svg";
import product from "../assets/product.svg";
import delivery from '../assets/delivery.svg';
import marketing from '../assets/marketing.svg';
import analytics from '../assets/analytics.svg';
import discount from '../assets/discount.svg';
import plugins from '../assets/plugins.svg';
import audience from '../assets/audience.svg';
import appearance from '../assets/appearance.svg';
import payout from '../assets/payout.svg';
import credit from '../assets/credit.svg';

const menuItems = [
  { icon: home, label: 'Home' },
  { icon: order, label: 'Orders' },
  { icon: product, label: 'Products' },
  { icon: delivery, label: 'Delivery' },
  { icon: marketing, label: 'Marketing' },
  { icon: analytics, label: 'Analytics' },
  { icon: payout, label: 'Payouts' },
  { icon: discount, label: 'Discounts' },
  { icon: audience, label: 'Audience' },
  { icon: appearance, label: 'Appearance' },
  { icon: plugins, label: 'Plugins' },
];

const Sidebar = () => {
  return (
    <div>

      <div className="max-w-56 h-[882px] px-2.5 py-4 bg-slate-800 flex-col justify-start items-center gap-4 inline-flex">
        <div className="w-52 grow shrink basis-0 flex-col justify-start items-center gap-6 flex">
        <div className="w-48 justify-start items-center gap-3 inline-flex">
            <img className="w-[39px] h-[39px] rounded" src={userimg} />
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
              <div className="self-stretch text-white text-[15px] font-medium font-Inter leading-snug">
                Nishyan
              </div>
              <div className="self-stretch opacity-80 text-white text-[13px] font-normal font-Roboto underline leading-none">
                Visit store
              </div>
            </div>
            <div className="w-5 h-5 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="w-52 grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex hover:bg-slate-700 ${
                  item.label === 'Payouts' ? 'bg-white bg-opacity-10' : ''
                }`}
              >
                <div className="w-5 h-5 relative opacity-80">
                  <img src={item.icon} alt={`${item.label} icon`} />
                </div>
                <div className={`opacity-80 text-white text-sm font-medium font-Inter leading-tight ${item.label === 'Payouts' ? 'font-Roboto' : ''}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[54px] px-3 py-1.5 bg-slate-700 rounded flex-col justify-start items-start gap-2.5 flex">
        <div className="justify-start items-center gap-3 inline-flex">
            <div className="p-1.5 bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img
                  className="w-[23.65px] h-[19.60px] left-[0.20px] top-[2.20px] absolute"
                  src={credit}
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="opacity-80 text-white text-[13px] font-normal font-Inter leading-none">
                Available credits
              </div>
              <div className="text-white text-base font-medium font-Inter leading-normal">
                222.10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

