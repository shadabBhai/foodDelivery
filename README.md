# Food delivery Web App

# Web App structure

*Applayout
*Header
*logo
*nav items
*body (home page)
*restaurant card-container
*restaurant card
*body(restaurant card detail)
*card conatins - reastaurant details
*card conatins - list of items in restuarant
*body(about Us)
*card conatins - details related to developer

# Bundler

-parcel

# Hooks

- usestate()
- useEffect()

# custome hooks

- useFilteredRestaurantList()
- useOnlineSatus()
- useRestaurantMenu()

# class based components - life cycle

\*There are two pahses
1)Render phase
2)commit Phase

_life cycle
1)Mounting
_ Contructor called
_ Render called
_ componentDidMount Called
2)Update
*Render with updated data
3)Un-mounting
*Termination

# Lazy loding / chunnking / on demand loading /dynamic bundling

- It is used to split bundel in small bundels .
- import {lazy} from "react"
  *const dummy = lazy(()=>import("directory"))
  *Use Suspense were we use lazy()
- we used lazy loading on About Component

# CORS(Cross-Origin Resource Sharing)
