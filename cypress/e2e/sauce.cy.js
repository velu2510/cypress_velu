describe('E commerce project test',()=>{
    let tdata;
    before(()=>{
        cy.fixture('example').then((testdata)=>{
            tdata=testdata;
        })
    })
    it('validate each functionality expected',()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.addingproducttocart(tdata.items)
        // cy.get('#inventory_container .inventory_item').each(($results)=>{
        //     if($results.text().includes('Backpack')){
        //         cy.wrap($results).find('[class="btn_primary btn_inventory"]').click()
        //     }
    
        // })
        cy.get('#shopping_cart_container a').click()
        cy.url().should('include','cart')
        // cy.get('.cart_item',{timeout:4000}).should('have.length',3)
        cy.get('[class="btn_action checkout_button"]').should('be.visible').click()
        cy.get('#first-name').type('rakesh')
        cy.get('#last-name').type('rakey')
        cy.get('#postal-code').type('60000')
        cy.get('[class="btn_primary cart_button"]').click()
        let sum=0;
        cy.get('.cart_list .cart_item .inventory_item_price').each(($prices)=>{
        let productprice=$prices.text()
        let splitted=productprice.split('$')
        let takeprice=splitted[1]
        let wholeprice=takeprice.trim()
        sum=Number(sum)+Number(wholeprice)
        }).then(()=>{
            cy.log(sum)
        })
        cy.get('.summary_subtotal_label').then(($sub)=>{
          let subt=$sub.text()
          let splitted=subt.split('$')
          let takeprice=splitted[1];
          let subtotal=takeprice.trim()
          expect(sum).to.eq(Number(subtotal))            
        })
    })
})