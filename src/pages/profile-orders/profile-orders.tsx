import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { Preloader } from '@ui';
import { useSelector, useDispatch } from '../../services/store';
import { getUserOrders } from '../../services/userSlice';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const { userOrders: orders, request } = useSelector(
    (store) => store.userData
  );
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  if (request) {
    return <Preloader />;
  }

  return <ProfileOrdersUI orders={orders} />;
};
