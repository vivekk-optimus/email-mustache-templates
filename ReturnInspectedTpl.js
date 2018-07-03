/**
 * ReturnInspectedTpl.js
 * @description :: Email template will be used when a Return is inspected.
 * 
 * @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       return_id: 34567,
 *       warehouse: 'Optimus',
 *       brand: 'Vkstore'
 *  }
 *  
 * @contentParam example data
 *   content = {
 *       return_id: 345678,
 *       customer: 'Aditya Goyal'
 *       warehouse: 'Vivek Kumar',
 *       items: [
 *          {
 *            sku: 'LMN078349',
 *            description: 'mobile set',
 *            quality: '',
 *            expected_quantity: 23,
 *            inspected_quantity: 21,
 *            variance: -2
 *          }
 *       ]
 *       link_to_return: 'https://www.exampleinboundshipment.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Return {{return_id}} has been inspected at {{warehouse}} - ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Return ID {{return_id}} for {{customer}} has been inspected at {{warehouse}} and can now be put away & closed.
        </article>
    </section>
    <section class='email-body'>
        <article style='padding: 5px 10px 5px 10px'>Return includes the following items:
        </article>
        <table border="1" cellpadding="0" cellspacing="0" style='margin-left: 10px'>
        <tr class='table-header'>
            <th style='padding: 10px 20px 10px 10px; text-align: left'>SKU</th>
            <th style='padding: 10px 20px 10px 10px; text-align: left'>Description</th>
            <th style='padding: 10px 20px 10px 10px; text-align: left'>Quality</th>
            <th style='padding: 10px 20px 10px 10px; text-align: left'>Expected Quantity</th>
            <th style='padding: 10px 20px 10px 10px; text-align: left'>Inspected Quantity</th>
            <th style='padding: 10px 20px 10px 10px; text-align: left'>Variance</th>
        </tr>
        {{#items}}
            <tr class='table-item'>
            <td style='padding: 5px 10px;'>{{sku}}</td>
            <td style='padding: 5px 10px;'>{{description}}</td>
            <td style='padding: 5px 10px;'>{{quality}}</td>
            <td style='padding: 5px 10px;'>{{expected_quantity}}</td>
            <td style='padding: 5px 10px;'>{{inspected_quantity}}</td>
            <td style='padding: 5px 10px;'>{{variance}}</td>
            </tr>
        {{/items}}
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to return
            <a href="{{link_to_return}}" target='_blank'>here</a>
        </article>
    </section>
    `
}