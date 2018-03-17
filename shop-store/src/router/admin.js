import Index from '@/pages/Admin/Index'
import New from '@/pages/Admin/New'
import Products from '@/pages/Admin/Products'
import Edit from '@/pages/Admin/Edit'

export default {
  path: '/admin',
  component: Index,
  children: [
    {
      path: 'new',
      name: 'New',
      component: New
    },
    {
      path: '',
      name: 'Products',
      component: Products
    },
    {
      path: 'edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
}
