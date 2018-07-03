
/**
 * PurchaseCancelledTpl.js
 * @description :: Email template will be used when a purchase order is cancelled.
 *
 *  @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 *  
 *  @contentParam example data
 *   content = {
 *       order_no: 345678,
 *       vendor: 'Vivek Kumar',
 *       user_cancelled: 'symson',
 *       cancellation_reason: 'Product is not needed anymore',
 *       link_to_purchase: 'https://www.examplepurchase.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Purchase Order has been cancelled - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Purchase order {{order_no}} for {{vendor}} has been cancelled.
        </article>
        <article style='padding: 5px 10px 5px 10px'>Completed By - {{user_cancelled}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Cancellation Reason - {{cancellation_reason}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to purchase order
            <a href="{{link_to_purchase}}" target='_blank'>here</a>
        </article>
    </section>
    `
}