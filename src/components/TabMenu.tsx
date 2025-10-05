import { useState } from "react";

const menu: string[] = [
  "courses",
  "campuses",
  "partner-institutions",
  "student-testimonials",
  "stories",
];

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState<string>("courses");
  const formatLabel = (str: string) => {
    return str.replace(/-/g, " ");
  };
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 mb-12">
      <div className="flex gap-3 border border-accent-hotpink w-full md:w-fit max-w-4xl mx-auto px-4 sm:px-6 py-4 overflow-x-auto no-scrollbar">
        {menu.map((item, index) => (
          <a
            href={`#${item}`}
            onClick={() => setActiveTab(item)}
            key={index}
            className={`text-sm uppercase whitespace-nowrap cursor-pointer ${
              item === activeTab ? "font-bold " : "font-[200] "
            }`}
          >
            {formatLabel(item)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
