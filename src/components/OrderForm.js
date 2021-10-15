import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import schema from '../validation/schema'
import { POST_URL } from '../config'

// initial form values
const initialValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  glutenFree: false,
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
  // form values, errors, and submit button state
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)
  const [submissionError, setSubmissionError] = useState(false)

  // react-router-dom history to push to /configmation on submit
  const history = useHistory()

  // use yup and schema to validate entry on input
  // set and unset errors based on validation
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

  // updated values state on change
  // validates input using validate function
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    const valueToUse = type === 'checkbox' ? checked : value

    validate(name, valueToUse)

    setValues((prev) => ({
      ...prev,
      [name]: valueToUse,
    }))
  }

  // push to router history confirmation page for id
  const routeToConfirmation = (id) => {
    history.push(`/confirmation?order-id=${id}`)
  }

  // post order data to POST_URL defined in ~/src/config
  const postOrder = async (order) => {
    try {
      const res = await axios.post(POST_URL, order)
      return res.data
    } catch (err) {
      setSubmissionError(() => true)
      return false
    }
  }

  // construct order data
  // post order to server
  // reset form values
  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmissionError(() => false) // reset back to false if trying to resubmit

    const orderData = {
      name: values.name.trim(),
      size: values.size,

      // toppings
      pepperoni: values.pepperoni,
      sausage: values.sausage,
      canadianBacon: values.canadianBacon,
      spicyItalianSausage: values.spicyItalianSausage,
      grilledChicken: values.grilledChicken,

      glutenFree: values.glutenFree,
      special: values.special,
      quantity: values.quantity,
    }

    // post order, get back db record, route to confirmation page sending db record id
    const databaseRecord = await postOrder(orderData)
    if (databaseRecord) routeToConfirmation(databaseRecord.id)
  }

  // checks if button can be enabled every time an input is changed
  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

  return (
    <form onSubmit={handleSubmit} id='pizza-form'>
      <h2>Build Your Own Pizza</h2>

      <section>
        <h3>Order Details</h3>
        <span>Required</span>
        <span id='errors-name'>{errors.name}</span>
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
        <span id='errors-size'>{errors.size}</span>
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
        <span id='errors-toppings'>{errors.toppings}</span>
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
            name='canadianBacon'
            checked={values.canadianBacon}
            onChange={handleChange}
          />
        </label>
        <label>
          Spicy Italian Sausage
          <input
            type='checkbox'
            name='spicyItalianSausage'
            checked={values.spicyItalianSausage}
            onChange={handleChange}
          />
        </label>
        <label>
          Grilled Chicken
          <input
            type='checkbox'
            name='grilledChicken'
            checked={values.grilledChicken}
            onChange={handleChange}
          />
        </label>
      </section>

      <section>
        <h3>Other Options</h3>
        <label>
          Gluten Free
          <input
            type='checkbox'
            name='glutenFree'
            checked={values.glutenFree}
            onChange={handleChange}
          />
        </label>
      </section>

      <section>
        <div>
          <h3>Order Details</h3>
          <label>
            Special Instructions
            <textarea
              name='special'
              rows='4'
              cols='50'
              value={values.special}
              onChange={handleChange}
              id='special-text'
            />
          </label>
          <span id='errors-special'>{errors.special}</span>
        </div>

        <div>
          <label>
            Quantity
            <input type='number' name='quantity' value={values.quantity} onChange={handleChange} />
          </label>
          <span id='errors-quantity'>{errors.quantity}</span>
        </div>

        <div>
          <button disabled={disabled} id='order-button'>
            Place Order
          </button>
        </div>
      </section>

      {submissionError && <p>Submission Error!</p>}
    </form>
  )
}
