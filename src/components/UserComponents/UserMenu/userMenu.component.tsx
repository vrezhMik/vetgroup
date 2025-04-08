"use client";
import style from "./userMenu.module.scss";
import Avatar from "../../Elements/Icons/AvatarSVG";
import LogoSVG from "@/components/Elements/Icons/LogoSVG";
import { get_categories } from "@/utils/query";
import Link from "next/link";
import { useEffect, useState } from "react";
import { productsStore } from "@/store/store";
import { get_products_by_cat } from "@/utils/query";
export default function UserMenu() {
  const [categories, setCategories] = useState({ categories: [] });

  useEffect(() => {
    async function loadCategories() {
      const data = await get_categories();
      setCategories(data);
    }
    loadCategories();
  }, []);

  async function categoryPosts(cat: string) {
    const { categorizedProducts } = productsStore.getState();

    productsStore.getState().setSelectedCategory(cat);

    const stillSelected = productsStore
      .getState()
      .selectedCategories.includes(cat);
    const alreadyFetched = categorizedProducts.find((item) => item.cat === cat);

    if (!stillSelected || alreadyFetched) return;

    const data = await get_products_by_cat(cat);
    if (data && data.products) {
      productsStore.getState().addCategorizedProducts(cat, data.products);
    }
  }

  return (
    <div className={`${style.userMenu} flex`}>
      <div className={style.userMenuLogo}>
        <Link href={"/"}>
          <LogoSVG />
        </Link>
      </div>
      <div className={style.userMenuCategories}>
        {categories &&
          categories.categories.map((cat: { title: string }, key: number) => (
            <button key={key} onClick={() => categoryPosts(cat.title)}>
              {cat.title}
            </button>
          ))}
      </div>
      <div className={style.userMenuAvatar}>
        <Link href={"/user"}>
          <Avatar />
        </Link>
      </div>
    </div>
  );
}
