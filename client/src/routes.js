import Admin from "./pages/Admin"
import Authentication from "./pages/Authentication"
import Cart from "./pages/Cart"
import DevicePage from "./pages/DevicePage"
import StorePage from "./pages/StorePage"
import { ADMIN_ROUTE, CART_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE } from "./utils/pagenames"

export const authRoutes = [
{
  path: ADMIN_ROUTE,
  Component: Admin
},
{
  path: CART_ROUTE,
  Component: Cart
}
]
export const publicRoutes = 
[
  {
    path: SHOP_ROUTE,
    Component: StorePage
  },
  {
    path: LOGIN_ROUTE,
    Component: Authentication
  },
  {
    path: REG_ROUTE,
    Component: Authentication
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  }
]