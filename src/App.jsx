// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import Hero from "./pages/hero/Hero";
// import CategoriesBar from "./Component/categoriesBar/CategoriesBar";
// import MenuItemsSection from "./Component/menuItemsSection/MenuItemsSection";

// // سكيلتون لودرز
// import CategoriesBarSkeleton from "./Component/categoriesBar/CategoriesBarSkeleton";
// import MenuItemsSectionSkeleton from "./Component/menuItemsSection/MenuItemsSectionSkeleton";

// function App() {
//   const [categories, setCategories] = useState([]);
//   const [items, setItems] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [categoriesRes, itemsRes] = await Promise.all([
//           axios.get(`${import.meta.env.VITE_API_URL}/categories`),
//           axios.get(`${import.meta.env.VITE_API_URL}/items`)
//         ]);
//         setCategories(categoriesRes.data.data);
//         setItems(
//           itemsRes.data.data.filter((item) => item.isAvailable !== false)
//         );
//       } catch (err) {
//         console.error("فشل جلب البيانات", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSelectCategory = (categoryId) => setSelectedCategory(categoryId);
//   const handleSearch = (query) => setSearchQuery(query);

//   return (
//     <>
//       <Hero onSearch={handleSearch} />

//       {loading ? (
//         <>
//           <div className="Box">
//             <CategoriesBarSkeleton />
//           </div>
//           <MenuItemsSectionSkeleton />
//         </>
//       ) : (
//         <>
//           <div className="Box">
//             <CategoriesBar
//               categories={categories}
//               selectedCategory={selectedCategory}
//               onSelectCategory={handleSelectCategory}
//             />
//           </div>
//           <MenuItemsSection
//             items={items}
//             categories={categories}
//             selectedCategory={selectedCategory}
//             searchQuery={searchQuery}
//           />
//         </>
//       )}
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async"; // ✅ جديد
import axios from "axios";
import "./App.css";
import Hero from "./pages/hero/Hero";
import CategoriesBar from "./Component/categoriesBar/CategoriesBar";
import MenuItemsSection from "./Component/menuItemsSection/MenuItemsSection";
import SEOMeta from "./Component/SEOMeta"; // ✅ جديد

// سكيلتون لودرز
import CategoriesBarSkeleton from "./Component/categoriesBar/CategoriesBarSkeleton";
import MenuItemsSectionSkeleton from "./Component/menuItemsSection/MenuItemsSectionSkeleton";

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, itemsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/categories`),
          axios.get(`${import.meta.env.VITE_API_URL}/items`)
        ]);
        setCategories(categoriesRes.data.data);
        setItems(
          itemsRes.data.data.filter((item) => item.isAvailable !== false)
        );
      } catch (err) {
        console.error("فشل جلب البيانات", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSelectCategory = (categoryId) => setSelectedCategory(categoryId);
  const handleSearch = (query) => setSearchQuery(query);

  return (
    <HelmetProvider>
      {" "}
      {/* ✅ تغليف التطبيق */}
      <SEOMeta /> {/* ✅ مكون SEO */}
      <Hero onSearch={handleSearch} />
      {loading ? (
        <>
          <div className="Box">
            <CategoriesBarSkeleton />
          </div>
          <MenuItemsSectionSkeleton />
        </>
      ) : (
        <>
          <div className="Box">
            <CategoriesBar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />
          </div>
          <MenuItemsSection
            items={items}
            categories={categories}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </>
      )}
    </HelmetProvider>
  );
}

export default App;