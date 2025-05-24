"use client";
import style from "./userMenu.module.scss";
import Avatar from "../../Elements/Icons/AvatarSVG";
import LogoSVG from "@/components/Elements/Icons/LogoSVG";
import HamburgerSVG from "@/components/Elements/Icons/HamburgerSVG";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

import { get_categories, get_products_by_cat } from "@/utils/query";
import { productsStore } from "@/store/store";

type Category = { title: string };

export default function UserMenu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [hamburger, setHamburger] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [jwt, setJwt] = useState<string | undefined>();

  const selectedCategories = productsStore((state) => state.selectedCategories);

  useEffect(() => {
    // Mark as client-rendered
    setIsClient(true);
    setJwt(Cookies.get("jwt"));

    async function loadCategories() {
      const data = await get_categories();
      if (data?.categories) {
        setCategories(data.categories);
      }
    }

    loadCategories();
  }, []);

  const categoryPosts = async (cat: string) => {
    setHamburger(false);

    const { categorizedProducts } = productsStore.getState();
    productsStore.getState().setSelectedCategory(cat);

    const isAlreadySelected = selectedCategories.includes(cat);
    const isAlreadyFetched = categorizedProducts.some(
      (item) => item.cat === cat
    );

    if (isAlreadySelected || isAlreadyFetched) return;

    const data = await get_products_by_cat(cat);
    if (data?.products) {
      productsStore.getState().addCategorizedProducts(cat, data.products);
    }
  };

  return (
    <div className={`${style.userMenu} flex`}>
      {/* Logo */}
      <div className={style.userMenuLogo}>
        <Link href="/">
          <LogoSVG />
        </Link>
      </div>

      {/* Category Buttons */}
      <div className={style.userMenuCategories}>
        {categories.map((cat, key) => {
          const isActive = selectedCategories.includes(cat.title);
          return (
            <button
              key={key}
              onClick={() => categoryPosts(cat.title)}
              className={isActive ? style.active : ""}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Avatar and Hamburger */}
      <div className={style.userMenuAvatar}>
        {isClient && (
          <Link href={jwt ? "/user" : "/login"}>
            <Avatar />
          </Link>
        )}
        <div className={style.userMenuHamburger}>
          <div className="row">
            <button onClick={() => setHamburger(!hamburger)}>
              <HamburgerSVG />
            </button>
          </div>
          <div className="row" />
        </div>
      </div>

      {/* Hamburger Menu Categories */}
      {hamburger && (
        <div className={style.cat_hamburger_container}>
          <div className={style.cat_hamburger_container_buttons}>
            {categories.map((cat, key) => {
              const isActive = selectedCategories.includes(cat.title);
              return (
                <button
                  key={key}
                  onClick={() => categoryPosts(cat.title)}
                  className={isActive ? style.active : ""}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
