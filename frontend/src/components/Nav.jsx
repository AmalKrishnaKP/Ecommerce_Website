import React, { useState } from 'react'
import {
  Search,
  LogOut,
  ShoppingCart,
  UserRoundCog,
  Store,
  Info,
  LifeBuoy,
  Package,
  Settings,
  Menu,
  X
} from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { authStore } from '../store/authStore.js'
import logo from '../assets/logo.png'

const Nav = () => {
  const { authUser, logout } = authStore()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const baseNavItem =
    'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5'
  const activeNavItem =
    'text-black border-b-2 border-black rounded-b-none'

  const navClass = ({ isActive }) =>
    `${baseNavItem} ${isActive ? activeNavItem : 'text-neutral-700'}`

  return (
    <div className="bg-white/90 backdrop-blur border-b shadow-sm w-[100vw] fixed top-0 z-20">
      <div className="w-full flex flex-row items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 min-w-[30vw] max-sm:min-w-0">
          <img src={logo} alt="Pixelcrate logo" className="w-9 h-9 rounded shadow-sm" />
          <span className="font-[Poppins] font-semibold tracking-wide text-2xl max-sm:text-[18px]">
            Pixelcrate
          </span>
        </Link>

        {/* Mobile menu button (<=1112px) */}
        <button
          type="button"
          aria-label="Toggle navigation"
          className="hidden max-[1112px]:inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5"
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="flex max-[1112px]:hidden flex-1 items-center justify-center">
          <nav className="flex items-center gap-1 max-w-[60vw] overflow-x-auto">
            {authUser && authUser.role === 'user' && (
              <NavLink to="/shop" className={navClass} aria-label="Shop">
                <Store size={18} />
                <span className="max-sm:text-[15px]">Shop</span>
              </NavLink>
            )}

            {authUser && authUser.role === 'seller' && (
              <>
                <NavLink to="/sell" className={navClass} aria-label="Sell">
                  <Store size={18} />
                  <span className="max-sm:text-[15px]">Sell</span>
                </NavLink>
                <NavLink to="/shipping" className={navClass} aria-label="Shipping">
                  <Package size={18} />
                  <span className="max-sm:text-[15px]">Shipping</span>
                </NavLink>
              </>
            )}

            {authUser && (
              <>
                <NavLink to="/" end className={navClass} aria-label="About">
                  <Info size={18} />
                  <span className="max-sm:text-[15px]">About</span>
                </NavLink>
                <NavLink to="/support" className={navClass} aria-label="Support">
                  <LifeBuoy size={18} />
                  <span className="max-sm:text-[15px]">Support</span>
                </NavLink>
              </>
            )}
          </nav>
                </div>

        <div className="flex max-[1112px]:hidden items-center gap-1 min-w-[30vw] justify-end px-1">
          {/* <div className="hidden md:flex items-center gap-2 bg-black/5 rounded-md px-3 py-2 mr-1">
            <Search size={18} className="text-neutral-600" />
            <input
              aria-label="Search"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-[14rem] placeholder:text-neutral-400"
            />
          </div> */}

          {authUser && authUser.role === 'user' && (
            <NavLink to="/cart" className={navClass} aria-label="Cart">
              <ShoppingCart size={20} className="max-sm:w-[20px]" />
              <span className="max-md:hidden">Cart</span>
            </NavLink>
          )}

          {authUser && authUser.role === 'user' && (
            <NavLink to="/profile" className={navClass} aria-label="Profile">
              <UserRoundCog size={20} className="max-sm:w-[20px]" />
              <span className="max-md:hidden">Profile</span>
            </NavLink>
          )}

          {authUser && authUser.role === 'user' && (
            <NavLink to="/orders" className={navClass} aria-label="My Orders">
              <Package size={18} />
              <span className="max-sm:text-[15px]">Orders</span>
            </NavLink>
          )}

          {authUser && (
            <NavLink to="/settings" className={navClass} aria-label="Settings">
              <Settings size={18} />
              <span className="max-sm:text-[15px]">Settings</span>
            </NavLink>
          )}

          {authUser && (
                  <button
              type="button"
              onClick={() => logout('user')}
              className={`${baseNavItem} text-neutral-700`}
              aria-label="Log out"
              title="Log out"
            >
              <LogOut size={20} className="max-sm:w-[20px]" />
              <span className="max-md:hidden">Logout</span>
                  </button>
          )}
        </div>
      </div>
      {/* Mobile dropdown panel */}
      {isMobileOpen && (
        <div className="hidden max-[1112px]:block w-full px-4 pb-3 border-t bg-white/95 backdrop-blur">
          <nav className="flex flex-col gap-1 pt-2">
            {authUser && authUser.role === 'user' && (
              <NavLink onClick={() => setIsMobileOpen(false)} to="/shop" className={navClass} aria-label="Shop">
                <Store size={18} />
                <span>Shop</span>
              </NavLink>
            )}

            {authUser && authUser.role === 'seller' && (
              <>
                <NavLink onClick={() => setIsMobileOpen(false)} to="/sell" className={navClass} aria-label="Sell">
                  <Store size={18} />
                  <span>Sell</span>
                </NavLink>
                <NavLink onClick={() => setIsMobileOpen(false)} to="/shipping" className={navClass} aria-label="Shipping">
                  <Package size={18} />
                  <span>Shipping</span>
                </NavLink>
              </>
            )}

            {authUser && (
              <>
                <NavLink onClick={() => setIsMobileOpen(false)} to="/" end className={navClass} aria-label="About">
                  <Info size={18} />
                  <span>About</span>
                </NavLink>
                <NavLink onClick={() => setIsMobileOpen(false)} to="/support" className={navClass} aria-label="Support">
                  <LifeBuoy size={18} />
                  <span>Support</span>
                </NavLink>
              </>
            )}

            {authUser && authUser.role === 'user' && (
              <NavLink onClick={() => setIsMobileOpen(false)} to="/cart" className={navClass} aria-label="Cart">
                <ShoppingCart size={18} />
                <span>Cart</span>
              </NavLink>
            )}

            {authUser && authUser.role === 'user' && (
              <NavLink onClick={() => setIsMobileOpen(false)} to="/profile" className={navClass} aria-label="Profile">
                <UserRoundCog size={18} />
                <span>Profile</span>
              </NavLink>
            )}

            {authUser && authUser.role === 'user' && (
              <NavLink onClick={() => setIsMobileOpen(false)} to="/orders" className={navClass} aria-label="My Orders">
                <Package size={18} />
                <span>Orders</span>
              </NavLink>
            )}

            {authUser && (
              <NavLink onClick={() => setIsMobileOpen(false)} to="/settings" className={navClass} aria-label="Settings">
                <Settings size={18} />
                <span>Settings</span>
              </NavLink>
            )}

            {authUser && (
              <button
                type="button"
                onClick={() => { setIsMobileOpen(false); logout('user') }}
                className={`${baseNavItem} text-neutral-700`}
                aria-label="Log out"
                title="Log out"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </div>
  )
}

export default Nav
