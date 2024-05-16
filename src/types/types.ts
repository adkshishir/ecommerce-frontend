export type homeDataResponseType =
  | {
      success: true;
      data: {
        popularProducts: Array<productType>;
        latestProducts: Array<productType>;
        categories: Array<categoryType>;
        menuData: Array<menuWithParentCategory | menuWithoutParentCategory>;
        parentCategories: Array<parentCategoryType>;
        specialOffer: Array<categoryType>;
      };
    }
  | {
      success: false;
      data: [];
    };

export type menuWithParentCategory = {
  id: number;
  name: string;
  slug: string;
  parentId: number;
};

export type menuWithoutParentCategory = {
  id: number;
  name: string;
  slug: string;
};
export type productType = {
  id: number;
  name: string;
  description: string;
  price: number;
  slug: string;
  discount: number;
  markedPrice: number;
  totalStock: number;
  categoryId: number;
  media: {
    url: string;
    alt: string;
  };
};

export type categoryType = {
  id: number;
  name: string;
  slug: string;
  parentId: number;
  product: Array<productType>;
  media: {
    url: string;
    alt: string;
  };
};

export type parentCategoryType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  media: {
    url: string;
    alt: string;
  };
};
