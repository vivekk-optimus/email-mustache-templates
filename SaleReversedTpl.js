/**
 * SaleReversedTpl.js
 * @description :: Email template will be used when an order is de-allocated/reversed.
 *
 *  @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 *  @contentParam example data 
 *    content = {
 *       order_no: 345678,
 *       customer: 'Vivek Kumar',
 *       warehouse_name: 'Big Warehouse';
 *       user_reversed: 'symson',
 *       link_to_sale: 'https://www.examplesales.com'
 *   }
 */
module.exports = {
    subject: `{{portal_name}} Sales Order has been reversed - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales order {{order_no}} for {{customer}} has been reversed. Please remove pick ticket from {{warehouse_name}} floor and destroy or give to management.</article>

        <article style='padding: 5px 10px 5px 10px'>Released By - {{user_reversed}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to sales order
            <a href="{{link_to_sale}}" target='_blank'>here</a>
        </article>
    </section>
    `
}