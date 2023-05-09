import ReactDom from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import router from './public/router/router'

ReactDom.createRoot(document.getElementById('app')).render(

<RouterProvider router={ router }  />

)