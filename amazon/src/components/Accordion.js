import { useState } from "react";

// 아코디언 컨텐츠
const DATA = [
  { id: "a0", name: "Features", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem dolor, laboriosam alias magni maiores repellendus aut temporibus!" },
  { id: "a1", name: "Details", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem dolor, laboriosam alias magni maiores repellendus aut temporibus!" },
  { id: "a2", name: "Measurements", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];

export default function Accordion() {
  const accordions = DATA.map(info => (
    <Tab name={info.name} content={info.content} />
  ))

  return (
    <>
      <h3 className="my-4 font-semibold">
        Product information
      </h3>

      <ul>
        {accordions}
      </ul>  
    </>
  )
}

// 아코디언의 각각의 탭
function Tab({ name, content }) {
  // 탭의 활성화 관리
  const [active, setActive] = useState(false);

  return (
    <li className="mb-1">
      {/* Button */}
      <button
        className="w-full px-4 py-2 bg-gray-100 flex justify-between"
        onClick={() => setActive(!active)}
      >
        <p>{name}</p>
        <span>{active ? "-" : "+"}</span>
      </button>
      
      {/* Contents */}
      <div
        className="overflow-hidden transition-all"
        style={{ maxHeight: active ? "200px" : "0px" }}
      >
        <p className="p-2">
          {content}
        </p>
      </div>
    </li>  
  )
}