/**
 * SaleTermsEditedTpl.js
 * @description :: Email template will be used when the Order Terms are edited on a released order.
 *  
 * @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 *  @contentParam example data
 *   content = {
 *       order_no: 345678,
 *       customer: 'Vivek Kumar',
 *       user_updated: 'symson',
 *       link_to_sale: 'https://www.examplesale.com'
 *   }
 */
module.exports = {
    subject: `{{protal_name}} Sales Order has edited order terms - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales order {{order_no}} for {{customer}} has new order terms.</article>

        <article style='padding: 5px 10px 5px 10px'>Updated By - {{user_updated}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to sales order
            <a href="{{link_to_sale}}" target='_blank'>here</a>
        </article>
    </section>
    `
}
    