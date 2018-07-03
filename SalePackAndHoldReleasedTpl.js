/**
 * SalePackAndHoldReleasedTpl.js
 * @description :: Email template will be used when a Pack & Hold is released to ship.
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
 *       brand: 'Big Brand';
 *       user_released: 'symson',
 *       link_to_sale: 'https:www.github.com'
 *   }
 */
module.exports = {
    subject: `{{portal_name}} Sales Order has been released to Ship {{warehouse_name}} - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales order {{order_no}} for {{customer}} has been released to Ship</article>

        <article style='padding: 5px 10px 5px 10px'>Released from pack & hold by - {{user_released}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to sales order
            <a href="{{link_to_sale}}" target='_blank'>here</a>
        </article>
    </section>
    `
}
    