/**
 * PurchasePastCancelNotCompletedTpl.js
 * @description :: Email template will be used when a purchase order is past cancel date but not completed or cancelled.
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
 *       user_created: 'symson',
 *       total_value: '$345',
 *       total_units: 4,
 *       expiry_date: '12/08/2018' 
 *       link_to_purchase: 'https://www.examplepurchase.com',
 *       link_to_cancel: 'https://www.examplecancel.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Purchase Order {{order_no}} has not been completed and is now past expiry date - ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Purchase Order {{order_no}} for {{vendor}} is now past expiry date and has not been completed or cancelled.
        </article>
        <article style='padding: 5px 10px 5px 10px'>Created By - {{user_created}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Value - {{total_value}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Units - {{total_units}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Expiry date - {{expiry_date}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to purchase order
            <a href="{{link_to_purchase}}" target='_blank'>here</a>
        </article>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Cancel purchase order
            <a href="{{link_to_cancel}}" target='_blank'>here</a>
        </article>
    </section>
    `
}