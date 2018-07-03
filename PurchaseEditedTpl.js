/**
 * PurchaseEditedTpl.js
 * @description :: Email template will be used when a purchase order is edited.
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
 *       user_updated: 'symson',
 *       edit_note: 'Optimus Information Inc Pinnacle tower noida sector 62',
 *       link_to_purchase: 'https://www.examplepurchase.com'
 *   }
 */

module.exports = {
    subject: `
    {{portal_name}} Purchase Order has been edited - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Purchase order {{order_no}} for {{vendor}} has been edited.
        </article>
        <article style='padding: 5px 10px 5px 10px'>Updated By - {{user_updated}}
        <article style='padding: 5px 10px 5px 10px'>Edit Note - {{edit_note}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to purchase order
            <a href="{{link_to_purchase}}" target='_blank'>here</a>
        </article>
    </section>
    `
}