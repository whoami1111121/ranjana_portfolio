import React from "react";

const SmallCard = () => {
  return (
    <div className="group relative w-64 h-40 rounded-xl p-[2px]">
      <div
        className="
          absolute inset-0 rounded-xl opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          bg-[linear-gradient(135deg,#13fdfd_0%,#06131b_45%,#06131b_55%,#13fdfd_100%)]
        "
      />

      <div className="relative z-10 h-full w-full rounded-[10px] bg-[#06131b] p-4">
        <h1 className="text-white text-sm">fsaasf asdfsadf asdf sadf</h1>
        <div className="mt-2 bg-[#13fdfd] text-black px-2 py-1 inline-block rounded">
          dafd
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
