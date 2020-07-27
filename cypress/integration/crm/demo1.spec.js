/// <reference types="cypress" />

describe('The Login Page', function () {
  beforeEach(function () {
    cy.request({
      url: 'https://daily-crm-test.hzxituan.com/login',
      method: 'POST',
      form: true,
      body: 'username=admin&password=123456'
    }).then((res) => {
      const data = res.body.data
      console.log(data)
      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('token', JSON.stringify(data.token))
    })
    cy.visit('http://daily-xt-crmadmin.hzxituan.com/#/goods/virtual/-1')
    cy.get('input').eq(0).type('测试商品')
    cy.get('.ant-form-item-control-wrapper').eq(1).click()
    cy.get('li[title=地推专区]').click()
    cy.get('li[title=地推采购]').click()
    cy.get('li[title=采购商品]').click()
    cy.get('#productType').click()
    cy.get('li[title=充值话费]').click()
    // .eq(0).type('admin')
    // cy.get('input').eq(1).type('123456')
    // cy.get('button').click()
    // cy.get('.ant-menu').children().eq(1).click()
    // cy.get('.ant-menu').children().eq(1).children().eq(1).children().eq(0).click()
    // cy.get('tr[data-row-key="1613"]').last().find('div[class=href]').eq(1).click()
  })
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})