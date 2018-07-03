/**
 * ReturnPastExpiryDateTpl.js
 * @description :: Email template will be used when a Return has not been closed by expiry date.
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
 *       user_created: 'Vivek Kumar',
 *       expiry_date: '12/12/2018'
 *       link_to_return: 'https://www.examplereturn.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Return {{return_id}} has not been closed and is now past expiry date - ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Return ID {{return_id}} for {{customer}} is now past expiry date.
        </article>
        <article style='padding: 5px 10px 5px 10px'>Created by - {{user_created}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Expiry date - {{expiry_date}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to return
            <a href="{{link_to_return}}" target='_blank'>here</a>
        </article>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Cancel return
        <a href="{{link_to_cancel}}" target='_blank'>here</a>
    </article>
    </section>
    `
}