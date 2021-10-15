export default function OrderForm() {
  return (
    <form id='pizza-form'>
      <h2>Build Your Own Pizza</h2>

      <section>
        <div>
          <h3>Choice of Size</h3>
          <p>Required</p>
        </div>
        <div>
          <select name='size' id='size-dropdown'>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </div>
      </section>

      <section>
        <div>
          <h3>Choice of Sauce</h3>
          <p>Required</p>
        </div>
        <div>{/* radio buttons */}</div>
      </section>

      <section>
        <div>
          <h3>Add Toppings</h3>
          <p>Choose up to 10</p>
        </div>
        <div>{/* checkboxes */}</div>
      </section>

      <section>
        <div>
          <h3>Choice of Substitute</h3>
          <p>Choose up to 1</p>
        </div>
        <div>{/* toggle button */}</div>
      </section>

      <section>
        <div>
          <h3>Special Instructions</h3>
        </div>
        <div>{/* text box */}</div>
      </section>

      <section>
        <div>
          <h3>Order Details</h3>
          <p>Required</p>
        </div>
        <div>
          <input type='text' name='name' id='name-input' />
        </div>
      </section>

      <section>
        <div>{/* quantity input */}</div>
        <div>
          <button>Place Order</button>
        </div>
      </section>
    </form>
  )
}
