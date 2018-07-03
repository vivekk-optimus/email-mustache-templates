/**
 * PurchaseCompletedTpl.js
 * @description :: Email template will be used when a purchase order is completed.
 * 
 * @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 *  
 * @contentParam example data
 *   content = {
 *       order_no: 345678,
 *       vendor: 'Vivek Kumar',
 *       user_completed: 'symson',
 *       link_to_purchase: 'https://www.examplepurchase.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Purchase Order has been completed -{{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Purchase order {{order_no}} for {{vendor}} has been completed.
        </article>
        <article style='padding: 5px 10px 5px 10px'>Completed By - {{user_completed}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to purchase order
            <a href="{{link_to_purchase}}" target='_blank'>here</a>
        </article>
    </section>
    `
}