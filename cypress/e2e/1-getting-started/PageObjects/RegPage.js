class RegPage
{

visit()
{
    cy.visit("https://www.tutorialspoint.com/selenium/practice/register.php")
}

fillfirstName(value)
{
    const field=cy.get("#firstname")
    field.clear()
    field.type(value)
    return this
}
filllastname(value)
{
    const field=cy.get("#lastname")
    field.clear()
    field.type(value)
    return this
}

fillusername(value)
{
    const field=cy.get("#username")
    field.clear()
    field.type(value)
    return this
}
fillpassword(value)
{
    const field=cy.get("#password")
    field.clear()
    field.type(value)
    return this
}
register(value)
{
    const button=cy.get("input[value='Register']")
    button.click()
}
    
}

export default RegPage



