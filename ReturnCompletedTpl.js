/**
 * ReturnCompletedTpl.js
 * @description :: Email template will be used when a Return is completed.
 * 
 * @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       return_id: 34567,
 *       brand: 'Vkstore'
 *  }
 *  
 * @contentParam example data
 *   content = {
 *       return_id: 345678,
 *       customer: 'Aditya Goyal',
 *       warehouse: 'Vivek Kumar',
 *       link_to_return: 'https://www.examplereturn.com'
 *       link_to_credit_memo: 'https"//www.examplecreditmemo.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Return {{return_id}} has been completed - ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Return ID {{return_id}} for {{customer}} has been completed at {{warehouse}}.
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to return
            <a href="{{link_to_return}}" target='_blank'>here</a>
        </article>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to credit memo
            <a href="{{link_to_credit_memo}}" target='_blank'>here</a>
        </article>
    </section>
    `
}