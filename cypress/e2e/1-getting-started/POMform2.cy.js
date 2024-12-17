import RegForm2 from '../1-getting-started/PageObjects/RegForm2'

describe('POM form 2', () => {
  it('Reg form', () => {
    const Rf = new RegForm2()

    Rf.visit()
    Rf.fillfirstName('Soundarya')
    Rf.filllastName('Subramaniyan')
    Rf.selectGender('Female')
    Rf.selectHobbies('Reading')
    Rf.selectDepartment('Department of Engineering')
    Rf.fillUsername('Soundarya')
    Rf.fillPassword('password123')
    Rf.fillConfirmPassword('password123')
    Rf.fillEmail('Soundarya@example.com')
    Rf.fillMobileNumber('916374789826')
    Rf.submit();

    cy.title().should('be.equal','Bootstrap Template')
  })
})
