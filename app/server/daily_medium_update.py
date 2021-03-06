from scrape_utils.scrape import scrape_articles, get_top_n_articles
from datetime import datetime, timedelta
import json
from mail_handling.mail_handler import send_email, get_email_list

def generate_html_content(articles, topic):


    content = "<ol>"

    for article_info in articles:
        author_url = article_info["author_url"]
        article_url = article_info["article_url"]
        article_title = article_info["article_title"]
        article_claps = article_info["article_claps"]
        article_readtime = article_info["article_readtime"]
        article_date = article_info["article_date"]
        article_author = article_info["article_author"]

        content += f'<li><h2><a href="{article_url}">{article_title}</a></h2>\
            <h4>The article is written by <a href="{author_url}">{article_author}</a>,\
            got {article_claps} {"claps" if article_claps != 1 else "clap"} and has a reading time of {article_readtime} {"minutes" if article_readtime != 1 else "minute"}.</h4></li>'

    
    content += "</ol>"
    
    subject = f"Top {len(articles)} medium articles for {topic} ({article_date.split('T')[0].replace('-', '/')})"
    
    email_html = {"subject": subject, "content": content}

    print(email_html)
    
    return email_html

def retired_main():

    
    yesterday = datetime.now() - timedelta(1)

    yesterday = datetime.strftime(yesterday, '%Y/%m/%d')

    topic = "machine-learning"

    email_list = get_email_list()

    for email_info in email_list:
        topic = email_info["topic"]
        email = email_info["email"]
        n = int(email_info["n"])

        scrape_url = "https://medium.com/tag/" + topic + "/archive/" + yesterday

        articles = scrape_articles(scrape_url, webdriver_path, n)

        print(articles)

        email_html = generate_html_content(json.loads(articles), topic)

        send_email(email, email_html)


def get_all_articles():

    yesterday = datetime.now() - timedelta(1)

    yesterday = datetime.strftime(yesterday, '%Y/%m/%d')

    topic = "machine-learning"

    scrape_url = "https://medium.com/tag/" + topic + "/archive/" + yesterday

    return scrape_articles(scrape_url, count=2)