import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  selectIsLoading,
} from 'STORE/categories/category.selector';

import CategoryPreview from 'COMPONENTS/category-preview/category-preview.component';
import Spinner from 'COMPONENTS/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
