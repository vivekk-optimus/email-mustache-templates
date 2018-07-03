/**
 * SalePastCancelNotReleasedTpl.js
 * @description :: Email template will be used when a sales order is past cancel date and has not been released.
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
 *       user_created: 'symson',
 *       brand: 'Addidas',
 *       sales_order_notes: 'Optimus Information Inc Pinnacle tower noida sector 62',
 *       sales_order_po: 'LP3435674',
 *       total_units: 2,
 *       total_value: 345,
 *       link_to_sale: 'https://www.sale.com',
 *       link_to_release: 'https://www.release.com'
 *       link_to_cancel: 'https://www.cancel.com'
 *   }
 */
module.exports = {
    subject: `{{portal_name}} Sales order {{order_no}} has not been released or cancelled and is now past cancel date - ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales Order ID {{order_no}} for {{customer}} is unreleased and now past cancel date.
        </article>
        <article style='padding: 5px 10px 5px 10px'>Created By - {{user_created}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Brand(s) - {{brand}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Value - {{total_value}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Units - {{total_units}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Sales Order Notes - {{sales_order_notes}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>PO# - {{sales_order_po}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to sales order
            <a href="{{link_to_sale}}" target='_blank'>here</a>
        </article>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Release sales order
            <a href="{{link_to_release}}" target='_blank'>here</a>
        </article>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Cancel sales order 
            <a href="{{link_to_cancel}}" target='_blank'>here</a>
        </article>
    </section>
    `
}