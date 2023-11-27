Feature("login");

Scenario("open my website", ({ I }) => {
    I.amOnPage("http://localhost:3000/");
    I.seeElement('.header_div');
    I.seeElement('.dummy_image')
    I.see('Car Website Content', 'h3');
    I.see(`In the fast-paced world of online marketing, visibility is a key component of making your website work. One of the easiest ways to be seen is through search engine results. While there are paid advertising options available, you can get a jump-start on your competition by adding organic results as well. Car Website Content with Content Motive capitalizes on organic search results by using topics that fit in line with your existing strategies while also helping to better populate a web search for your products and services. Having unique content helps your website in multiple ways. First, with engaging content that’s actually relevant to your business and specialized for you, your customers learn to turn to your website as an authority. Additionally, having website content helping your dealer site rank in search engines organically as opposed to just through paid advertising helps you better dominate results (especially when not all competitors utilize SEO content). So you gain a foothold in relevant searches and unique content helps increase your overall web authority, both in terms of your site’s Google ranking and with your customers.`, 'p')
    I.fillField('UserName', 'miles@davis.com');
    I.fillField('Password',secret('123456'));
    I.click('Submit');

    pause();
});