import { useState } from "react";

const menu: string[] = [
  "Courses",
  "Campuses",
  "Partner institutions",
  "student testimonials",
  "stories",
];

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState<string>("Courses");
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 mb-12">
      <div className="flex gap-3 border border-accent-hotpink w-full md:w-fit max-w-4xl mx-auto px-4 sm:px-6 py-4 overflow-x-auto no-scrollbar">
        {menu.map((item, index) => (
          <button
            onClick={() => setActiveTab(item)}
            key={index}
            className={`text-sm uppercase whitespace-nowrap cursor-pointer ${
              item === activeTab ? "font-bold " : "font-[200] "
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
