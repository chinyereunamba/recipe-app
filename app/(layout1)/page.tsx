import ByCategory from "@/components/home/ByCategory";
import Intro from "@/components/home/Intro";
import LatestRecipes from "@/components/home/LatestRecipes";
import TrendingRecipes from "@/components/home/TrendingRecipes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <LatestRecipes />
      <ByCategory />
      <TrendingRecipes />
    </main>
    // <div className="home-page">
      

    //   {/* Featured Recipes */}
    //   <section className="featured-recipes p-8">
    //     <h2 className="text-2xl font-bold mb-4">Featured Recipes</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //       {/* Example Recipe Card */}
    //       <div className="recipe-card bg-white shadow-md rounded overflow-hidden">
    //         <img
    //           src="/path-to-recipe-image.jpg"
    //           alt="Recipe"
    //           className="w-full h-48 object-cover"
    //         />
    //         <div className="p-4">
    //           <h3 className="text-xl font-bold">Recipe Title</h3>
    //           <p className="text-gray-700 mt-2">
    //             A brief description of the recipe.
    //           </p>
    //         </div>
    //       </div>
    //       {/* Repeat Recipe Cards */}
    //     </div>
    //   </section>

    //   {/* Latest Recipes */}
    //   <section className="latest-recipes p-8 bg-gray-100">
    //     <h2 className="text-2xl font-bold mb-4">Latest Recipes</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //       {/* Example Recipe Card */}
    //       <div className="recipe-card bg-white shadow-md rounded overflow-hidden">
    //         <img
    //           src="/path-to-recipe-image.jpg"
    //           alt="Recipe"
    //           className="w-full h-48 object-cover"
    //         />
    //         <div className="p-4">
    //           <h3 className="text-xl font-bold">Recipe Title</h3>
    //           <p className="text-gray-700 mt-2">
    //             A brief description of the recipe.
    //           </p>
    //         </div>
    //       </div>
    //       {/* Repeat Recipe Cards */}
    //     </div>
    //   </section>

    //   {/* Popular Categories */}
    //   <section className="categories p-8">
    //     <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    //       {/* Example Category Card */}
    //       <div className="category-card bg-white shadow-md rounded overflow-hidden">
    //         <img
    //           src="/path-to-category-image.jpg"
    //           alt="Category"
    //           className="w-full h-48 object-cover"
    //         />
    //         <div className="p-4 text-center">
    //           <h3 className="text-xl font-bold">Category Name</h3>
    //         </div>
    //       </div>
    //       {/* Repeat Category Cards */}
    //     </div>
    //   </section>

    //   {/* Testimonials */}
    //   <section className="testimonials p-8 bg-gray-100">
    //     <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
    //     <div className="flex space-x-4">
    //       {/* Example Testimonial */}
    //       <div className="testimonial bg-white shadow-md rounded p-4">
    //         <p className="text-gray-700">
    //           "This app has changed the way I cook! So many great recipes."
    //         </p>
    //         <p className="mt-2 text-right text-gray-500">- User Name</p>
    //       </div>
    //       {/* Repeat Testimonials */}
    //     </div>
    //   </section>

    //   {/* Footer */}
      
    // </div>
  )
}
