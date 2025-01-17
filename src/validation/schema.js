import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(2, 'name must be at least 2 characters'),
  size: yup.string().required('Size is required'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  canadianBacon: yup.boolean(),
  spicyItalianSausage: yup.boolean(),
  grilledChicken: yup.boolean(),
  glutenFree: yup.boolean(),
  special: yup.string().max(120, 'instructions must be less than 120 characters'),
  quantity: yup.number().min(1, 'quantity must be at least 1'),
})

export default schema
