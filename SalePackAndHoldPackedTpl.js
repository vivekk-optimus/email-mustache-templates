/**
 * SalePackAndHoldPackedTpl.js
 * @description :: Email template will be used when a Pack & Hold order is packed.
 *
 *  @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       warehouse_name: 'Household warehouse'
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 *  @contentParam example data
 *    content = {
 *       order_no: 345678,
 *       customer: 'Vivek Kumar',
 *       user_packed: 'symson',
 *       link_to_sale: 'https:www.github.com'
 *   }
 */
module.exports = {
    subject: `{{portal_name}} Sales Order is awaiting release from Pack & Hold in {{warehouse_name}} - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales order {{order_no}} for {{customer}}  has been packed and is ready to release from pack & hold.
        </article>
        <article style='padding: 5px 10px 5px 10px'>Packed By - {{user_packed}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to sales order
            <a href="{{link_to_sale}}" target='_blank'>here</a>
        </article>
    </section>
    `
}   