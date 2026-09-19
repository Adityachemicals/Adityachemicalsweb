"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerNavItems } from "@/data/navigation";
import { productCategories, products } from "@/data/products";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-gutter py-4 bg-white/70 backdrop-blur-xl border border-glass-stroke rounded-full mt-3 md:mt-4 mx-auto w-[90%] max-w-container-max shadow-sm transition-all duration-300 ease-in-out">
      {/* Brand Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/LOGO.png"
            alt="Aditya Chemicals"
            title="Aditya Chemicals"
            width={240}
            height={66}
            className="h-9 md:h-10 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden xl:flex gap-6 items-center">
        {headerNavItems.map((item) => {
          const isActive = pathname === item.href;
          if (item.name === "Products") {
            return (
              <div key={item.name} className="relative group py-2">
                <Link
                  href={item.href}
                  className={`font-button text-button uppercase transition-all duration-300 pb-1 text-sm flex items-center gap-1 ${isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                    }`}
                >
                  {item.name}
                  <span className="material-symbols-outlined text-base select-none transition-transform duration-200 group-hover:rotate-180">
                    keyboard_arrow_down
                  </span>
                </Link>
                {/* Hover Dropdown Menu */}
                <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                  <div className="bg-white border border-surface-container-highest shadow-2xl rounded-2xl p-3 w-80 flex flex-col gap-1 text-left">
                    {productCategories.filter(c => !c.parentCategorySlug).map((pcat) => {
                      const subcats = productCategories.filter(c => c.parentCategorySlug === pcat.slug);
                      const directProds = subcats.length === 0 ? products.filter(p => p.parentCategorySlug === pcat.slug) : [];

                      return (
                        <div key={pcat.slug} className="group/level2 relative py-2 px-3 rounded-xl hover:bg-surface-container-low transition-colors">
                          <Link
                            href={`/product-category/${pcat.slug}`}
                            className="flex items-center justify-between font-button text-xs tracking-wider text-deep-navy font-extrabold hover:text-primary transition-colors uppercase w-full"
                          >
                            <span>{pcat.name}</span>
                            {(subcats.length > 0 || directProds.length > 0) && (
                              <span className="material-symbols-outlined text-sm select-none ml-2 text-on-surface-variant/70">
                                chevron_right
                              </span>
                            )}
                          </Link>

                          {/* Level 2 Flyout (Subcategories or Products) */}
                          {(subcats.length > 0 || directProds.length > 0) && (
                            <div className="absolute left-full top-0 pl-2 opacity-0 pointer-events-none group-hover/level2:opacity-100 group-hover/level2:pointer-events-auto transition-all duration-200 z-50">
                              <div className="bg-white border border-surface-container-highest shadow-2xl rounded-2xl p-3 w-64 flex flex-col gap-1 text-left">
                                {subcats.length > 0 ? (
                                  // Render Subcategories
                                  subcats.map((subcat) => {
                                    const subcatProds = products.filter(p => p.subCategorySlug === subcat.slug);
                                    return (
                                      <div key={subcat.slug} className="group/level3 relative py-2 px-3 rounded-xl hover:bg-surface-container-low transition-colors">
                                        <Link
                                          href={`/product-category/${subcat.slug}`}
                                          className="flex items-center justify-between font-button text-[11px] tracking-wider text-deep-navy font-bold hover:text-primary transition-colors uppercase w-full"
                                        >
                                          <span>{subcat.name}</span>
                                          {subcatProds.length > 0 && (
                                            <span className="material-symbols-outlined text-[12px] select-none ml-2 text-on-surface-variant/60">
                                              chevron_right
                                            </span>
                                          )}
                                        </Link>

                                        {/* Level 3 Flyout (Products under Subcategory) */}
                                        {subcatProds.length > 0 && (
                                          <div className="absolute left-full top-0 pl-2 opacity-0 pointer-events-none group-hover/level3:opacity-100 group-hover/level3:pointer-events-auto transition-all duration-200 z-50">
                                            <div className="bg-white border border-surface-container-highest shadow-2xl rounded-2xl p-3 w-72 max-h-[320px] overflow-y-auto flex flex-col gap-1 text-left scrollbar-thin">
                                              {subcatProds.map((prod) => (
                                                <Link
                                                  key={prod.slug}
                                                  href={`/products/${prod.slug}`}
                                                  className="font-button text-[10px] tracking-wider text-on-surface-variant hover:text-primary transition-colors uppercase block py-2 px-3 rounded-lg hover:bg-surface-container-low"
                                                >
                                                  {prod.name}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })
                                ) : (
                                  // Render Direct Products
                                  directProds.map((prod) => (
                                    <Link
                                      key={prod.slug}
                                      href={`/products/${prod.slug}`}
                                      className="font-button text-[10px] tracking-wider text-on-surface-variant hover:text-primary transition-colors uppercase block py-2 px-3 rounded-lg hover:bg-surface-container-low"
                                    >
                                      {prod.name}
                                    </Link>
                                  ))
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`font-button text-button uppercase transition-all duration-300 pb-1 text-sm ${isActive
                ? "text-primary border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Brochure */}
      <div className="hidden xl:flex items-center gap-4">
        <a href="/IFT_Brochure.pdf" download="IFT_Brochure.pdf" target="_blank">
          <button className="font-button text-button uppercase px-8 py-3 bg-primary text-white rounded-full hover:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer tracking-wider font-bold">
            Brochure
          </button>
        </a>
      </div>

      {/* Mobile Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden text-on-surface flex items-center justify-center p-2 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Nav dropdown */}
      {isOpen && (
        <div className="absolute top-[75px] left-0 right-0 mx-auto w-full bg-white border border-glass-stroke rounded-2xl shadow-xl p-6 flex flex-col gap-4 xl:hidden z-50">
          {headerNavItems.map((item) => {
            const isActive = pathname === item.href;
            if (item.name === "Products") {
              return (
                <div key={item.name} className="flex flex-col gap-2 border-b border-surface-container-highest pb-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-button text-button uppercase transition-all duration-300 py-2 ${isActive ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                      }`}
                  >
                    {item.name}
                  </Link>
                  {/* Nested Sub-links on mobile */}
                  <div className="pl-4 flex flex-col gap-3 pb-2 pt-1">
                    {productCategories.filter(c => !c.parentCategorySlug).map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={`/product-category/${subItem.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="font-button text-xs tracking-wider text-deep-navy font-extrabold hover:text-primary uppercase block"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-button text-button uppercase transition-all duration-300 py-2 border-b border-surface-container-highest ${isActive
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
          <a href="/IFT_Brochure.pdf" download="IFT_Brochure.pdf" target="_blank" onClick={() => setIsOpen(false)} className="w-full mt-2 block">
            <button className="w-full font-button text-button uppercase px-8 py-4 bg-primary text-white rounded-full shadow-md cursor-pointer text-center tracking-wider font-bold">
              Brochure
            </button>
          </a>
        </div>
      )}
    </header>
  );
}
