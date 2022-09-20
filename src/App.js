import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect , useState} from 'react';
import { uiAction } from './store/ui-slice';
import Notification from './components/UI/Notification';

let inital = true
function App() {
  const isShowCart = useSelector((state) => state.ui.isShowCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    const sendHttpData = async () => {
      dispatch(uiAction.showNotification({
        status :'sending',
        title : "sending...",
        message: 'please wait'
      }));

      const response = await fetch('https://react-http-request-bfe69-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        throw new Error('sending data is faild')
      }
      dispatch(uiAction.showNotification({
        status :'success',
        title : "success...",
        message: 'sending cart is successfully!'
      }))
    }
    if(inital) {
      inital =false;
      return;
    }
    sendHttpData().catch((error) => {
      dispatch(uiAction.showNotification({
        status :'error',
        title : "error...",
        message: 'sending cart data is faild'
      }))
    })
  }, [cart ,dispatch])
  return (
    <Fragment>
      {notification && <Notification 
      status = {notification.status} 
      title = {notification.title}
       message = {notification.message}  
       />}
      
  <Layout>
      {isShowCart && <Cart />}
      <Products />

    </Layout>
    </Fragment>
  
  );
}

export default App;
