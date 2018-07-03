/**
 * SaleLateReleasedTpl.js
 * @description :: Email template will be used when a released order has not shipped within <insert hours selected by client> hours.
 * 
 *  @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       hours_selected: 12,
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 *  @contentParam example data needed to display this template
 *    content = {
 *       order_no: 345678,
 *       customer: 'Vivek Kumar',
 *       insert_hours: 23,
 *       user_released: 'symson',
 *       link_to_sale: 'https:www.github.com'
 *   }
 */
module.exports = {
    subject: `{{portal_name}} Released Sales Order has not shipped within {{hours_selected}} hours - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales order {{order_no}} for {{customer}} was released over {{insert_hours}} hours ago and has not been updated.</article>

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
    