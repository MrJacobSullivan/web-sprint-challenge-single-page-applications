describe('Order Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/order')
  })

  const nameInput = () => cy.get('input[name=name]')
  const sizeSelect = () => cy.get('select[name=size]')
  const pepperoniInput = () => cy.get('input[name=pepperoni]')
  const sausageInput = () => cy.get('input[name=sausage]')
  const canadianBaconInput = () => cy.get('input[name=canadianBacon]')
  const spicyItalianSausageInput = () => cy.get('input[name=spicyItalianSausage]')
  const grilledChickenInput = () => cy.get('input[name=grilledChicken]')
  const glutenFreeInput = () => cy.get('input[name=glutenFree]')
  const specialInput = () => cy.get('textarea[name=special]')
  const quantityInput = () => cy.get('input[name=quantity]')
  const submitButton = () => cy.get('button')

  it('should show the proper elements', () => {
    nameInput().should('exist')
    sizeSelect().should('exist')
    pepperoniInput().should('exist')
    sausageInput().should('exist')
    canadianBaconInput().should('exist')
    spicyItalianSausageInput().should('exist')
    grilledChickenInput().should('exist')
    glutenFreeInput().should('exist')
    specialInput().should('exist')
    quantityInput().should('exist')
    submitButton().should('exist')
  })

  describe('Initial form state', () => {
    it('should initialize form values with proper initial state', () => {
      nameInput().should('have.value', '')
      sizeSelect().should('have.value', '')
      pepperoniInput().should('not.be.checked')
      sausageInput().should('not.be.checked')
      canadianBaconInput().should('not.be.checked')
      spicyItalianSausageInput().should('not.be.checked')
      grilledChickenInput().should('not.be.checked')
      glutenFreeInput().should('not.be.checked')
      specialInput().should('have.value', '')
      quantityInput().should('have.value', '1')
      submitButton().should('exist')
    })

    it('should initialize with submit button disabled', () => {
      submitButton().should('be.disabled')
    })
  })

  describe('Form input', () => {
    it('should allow for input', () => {
      nameInput().type('Test').should('have.value', 'Test')
      sizeSelect().select('small').should('have.value', 'small')
      pepperoniInput().check().should('be.checked')
      sausageInput().check().should('be.checked')
      canadianBaconInput().check().should('be.checked')
      spicyItalianSausageInput().check().should('be.checked')
      grilledChickenInput().check().should('be.checked')
      glutenFreeInput().check().should('be.checked')
      specialInput().type('Test').should('have.value', 'Test')
      quantityInput().clear().type('2').should('have.value', '2')
    })
  })
})
