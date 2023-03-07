import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from 'STORE/cart/cart.selector';
import { setIsCartOpen } from 'STORE/cart/cart.reducer';
import { ReactComponent as ShoppingIcon } from 'ASSETS/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
