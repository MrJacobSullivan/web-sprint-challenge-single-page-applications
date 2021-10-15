import { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import schema from '../validation/schema'

const initialValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  'canadian-bacon': false,
  'spicy-italian-sausage': false,
  'grilled-chicken': false,
  'gluten-free': false,
  special: '',
  quantity: 1,
}

const initialErrors = {
  name: '', // required and greater than 2
  size: '', // required
  toppings: '', // no more than 3
  special: '', // no longer than 120
  quantity: '', // not less than 1
}

export default function OrderForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors((prev) => ({ ...prev, [name]: '' }))
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, [name]: err.errors[0] }))
      })
  }

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    const valueToUse = type === 'checkbox' ? checked : value

    validate(name, valueToUse)

    setValues((prev) => ({
      ...prev,
      [name]: valueToUse,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const orderData = {
      name: values.name.trim(),
      size: values.size,

      // toppings
      pepperoni: values.pepperoni,
      sausage: values.sausage,
      'canadian-bacon': values['canadian-bacon'],
      'spicy-italian-sausage': values['spicy-italian-sausage'],
      'grilled-chicken': values['grilled-chicken'],

      'gluten-free': values['gluten-free'],
      special: values.special,
      quantity: values.quantity,
    }

    console.log(orderData)

    setValues(() => initialValues)
  }

  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

  return (
    <form onSubmit={handleSubmit} id='pizza-form'>
      <h2>Build Your Own Pizza</h2>

      <section>
        <h3>Order Details</h3>
        <span>Required</span>
        <span>{errors.name}</span>
        <label>
          Name
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
            id='name-input'
          />
        </label>
      </section>

      <section>
        <h3>Choice of Size</h3>
        <span>Required</span>
        <span>{errors.size}</span>
        <label>
          Size
          <select name='size' value={values.size} onChange={handleChange} id='size-dropdown'>
            <option value=''>-- Select an option --</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>
      </section>

      <section>
        <h3>Add Toppings</h3>
        <span>Choose up to 3</span>
        <span>{errors.toppings}</span>
        <label>
          Pepperoni
          <input
            type='checkbox'
            name='pepperoni'
            checked={values.pepperoni}
            onChange={handleChange}
          />
        </label>
        <label>
          Sausage
          <input type='checkbox' name='sausage' checked={values.sausage} onChange={handleChange} />
        </label>
        <label>
          Canadian Bacon
          <input
            type='checkbox'
            name='canadian-bacon'
            checked={values['canadian-bacon']}
            onChange={handleChange}
          />
        </label>
        <label>
          Spicy Italian Sausage
          <input
            type='checkbox'
            name='spicy-italian-sausage'
            checked={values['spicy-italian-sausage']}
            onChange={handleChange}
          />
        </label>
        <label>
          Grilled Chicken
          <input
            type='checkbox'
            name='grilled-chicken'
            checked={values['grilled-chicken']}
            onChange={handleChange}
          />
        </label>
      </section>

      <section>
        <h3>Other Options</h3>
        <span>Not Required</span>
        <label>
          Gluten-Free
          <input
            type='checkbox'
            name='gluten-free'
            checked={values['gluten-free']}
            onChange={handleChange}
          />
        </label>
      </section>

      <section>
        <div>
          <h3>Order Details</h3>
          <label>
            Special Instructions
            <input
              type='text'
              name='special'
              value={values.special}
              onChange={handleChange}
              id='special-text'
            />
          </label>
          <span>{errors.special}</span>
        </div>

        <div>
          <label>
            Quantity
            <input type='number' name='quantity' value={values.quantity} onChange={handleChange} />
          </label>
          <span>{errors.quantity}</span>
        </div>

        <div>
          <button disabled={disabled}>Place Order</button>
        </div>
      </section>
    </form>
  )
}
