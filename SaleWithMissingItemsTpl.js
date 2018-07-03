/**
 * SaleWithMissingItemsTpl.js
 * @description :: Email template will be used when an order is completed with product missing.
 *
 *  @subjectParam example data 
 *   subject = {
 *      portal_name: 'my shopify',
 *      order_no: 34567,
 *      brand: 'Addidas'
 *  }
 *  @contentParam example data 
 *   content = {
 *       order_no: 345678,
 *       customer: 'Vivek Kumar',
 *       user_created: 'symson',
 *       brand: 'Addidas',
 *       total_value_before_adjustment: '$98',
 *       total_value_after_adjustment:  '$45',
 *       total_units_before_adjustment: 10, //Array of products
 *       total_units_after_adjustment: 5,
 *       link_to_sale: 'https:www.github.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Sales Order has been adjusted with missing items  - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales order {{order_no}} for {{customer}} was finalized with missing items.</article>

        <article style='padding: 5px 10px 5px 10px'>Created By - {{user_created}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Brand(s) - {{brand}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Value before Adjustment - {{total_value_before_adjustment}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Value after Adjustment - {{total_value_after_adjustment}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Units before Adjustment - {{total_units_before_adjustment}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Units before Adjustment - {{total_units_after_adjustment}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Click
            <a href="{{link_to_sale}}" target='_blank'>here</a>
            for link to sales order.
        </article>
    </section>
    `
}