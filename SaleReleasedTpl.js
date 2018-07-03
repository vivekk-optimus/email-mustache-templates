/**
 * SaleReleasedTpl.js
 * @description :: Email template will be used when an order is released to the DC for picking.
 *
 *  @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       warehouse_name: 'Big warehouse',
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 *  @contentParam example data needed to display this template
 *    content = {
 *       order_no: 345678,
 *       customer: 'Vivek Kumar',
 *       warehouse_name: 'Big Warehouse';
 *       user_released: 'symson',
 *       link_to_sale: 'https:www.github.com'
 *   }
 */
module.exports = {
    subject: `{{portal_name}} Sales Order has been released to DC {{warehouse_name}} - {{order_name}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales order {{order_no}} for {{customer}} has been released to {{warehouse_name}}.</article>
        <article style='padding: 5px 10px 5px 10px'>Released By - {{user_released}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to sales order
            <a href="{{link_to_sale}}" target='_blank'>here</a>
        </article>
    </section>
    `
}
    