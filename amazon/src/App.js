import { useState, useEffect, useRef } from "react";
import Accordion from "./components/Accordion";
import Gallery from "./components/Gallery";

// 제품 정보
const PRODUCT = {
  productId: "g0",
  name: "Galaxy S24 512GB Amber Yellow",
  manufacturer: "SAMSUNG",
  price: 799,
  catalog: "https://tvvmvn.github.io/blackboard/images/catalog.png"
}

export default function App() {
  // 장바구니 버튼 비활성화 관리
  const [added, setAdded] = useState(localStorage.getItem("cart"));  
  // 탑 버튼 활성화 관리
  const [active, setActive] = useState(false);

  // 장바구니 추가 처리
  function addToCart() {
    alert("추가되었습니다");
    // 버튼 비활성화
    setAdded(PRODUCT.productId);
    // 로컬스토리지 동기화
    localStorage.setItem("cart", PRODUCT.productId);
  };

  // 문서 탑으로 이동 처리
  function toTop() {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    // 문서 타이틀 업데이트
    document.title = `Amazon - ${PRODUCT.name}`;

    // 스크롤 이벤트 처리
    document.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      
      if (scrollTop > 1000) {
        setActive(true);
      } else {
        setActive(false);
      }
    })
  }, []);

  return (
    <div id="app">
      {/* Header */}
      <header className="border-b fixed top-0 left-0 z-10 w-full bg-white">
        <div className="flex justify-center items-center h-12">
          <img 
            className="h-6"
            src="https://tvvmvn.github.io/blackboard/images/logo.png"
            alt="logo" 
          />
        </div>
      </header>

      <main className="mt-16 max-w-md mx-auto px-4 pb-8">
        <small className="text-xs text-blue-400 font-semibold">
          {PRODUCT.manufacturer}
        </small>
        <h3 className="mb-4 text-gray-800">{PRODUCT.name}</h3>

        {/* 제품 사진 */}
        <Gallery />

        <div className="text-4xl font-semibold my-8">
          ${PRODUCT.price}
        </div>

        {/* 장바구니 버튼 */}
        <button 
          type="button" 
          className="w-full p-3 bg-yellow-400 font-semibold rounded-full disabled:opacity-50"
          onClick={addToCart}
          disabled={added}
        >
          Add To Cart
        </button>

        {/* 제품 카탈로그 */}
        <h3 className="my-4 font-semibold">
          From the manufacturer
        </h3>
        <img 
          src={PRODUCT.catalog} 
          alt={PRODUCT.catalog} 
        />

        {/* 아코디언 */}
        <Accordion />

        {/* 탑 버튼 */}
        <svg 
          className="fixed w-8 right-4 bottom-8 opacity-50"
          onClick={toTop}
          style={{ display: active ? "block" : "none" }}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"/>
        </svg>
      </main>
    </div>
  )
}