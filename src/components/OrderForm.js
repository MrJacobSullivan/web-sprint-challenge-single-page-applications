import { useState } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import schema from '../validation/schema'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  'canadian-bacon': false,
  'spicy-italian-sausage': false,
  'grilled-chicken': false,
  glutenFree: false,
  instructions: '',
  quantity: 1,
}

const initialErrors = {
  name: '', // required and greater than 2
  size: '', // required
  toppings: '', // no more than 3
  instructions: '', // no longer than 120
}

export default function OrderForm() {
  const [formValue, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)

  return (
    <form id='pizza-form'>
      <h2>Build Your Own Pizza</h2>

      <section>
        <h3>Order Details</h3>
        <span>Required</span>
        <span>{errors.name}</span>
        <label>
          Name
          <input type='text' name='name' id='name-input' />
        </label>
      </section>

      <section>
        <h3>Choice of Size</h3>
        <span>Required</span>
        <span>{errors.size}</span>
        <label>
          Size
          <select name='size' id='size-dropdown'>
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
          <input type='checkbox' name='pepperoni' />
        </label>
        <label>
          Sausage
          <input type='checkbox' name='sausage' />
        </label>
        <label>
          Canadian Bacon
          <input type='checkbox' name='canadian-bacon' />
        </label>
        <label>
          Spicy Italian Sausage
          <input type='checkbox' name='spicy-italian-sausage' />
        </label>
        <label>
          Grilled Chicken
          <input type='checkbox' name='grilled-chicken' />
        </label>
      </section>

      <section>
        <h3>Other Options</h3>
        <span>Not Required</span>
        <label>
          Gluten-Free
          <input type='checkbox' />
        </label>
      </section>

      <section>
        <div>
          <h3>Order Details</h3>
          <label>
            Special Instructions
            <input type='text' id='special-text' />
          </label>
        </div>

        <div>
          <label>
            Quantity
            <input type='number' name='quantity' />
          </label>
        </div>

        <div>
          <button>Place Order</button>
        </div>
      </section>
    </form>
  )
}
