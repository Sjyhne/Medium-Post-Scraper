import requests
from bs4 import BeautifulSoup as bs
from selenium import webdriver
import time
import json
import os

def get_article_info(article):

    article_info = {}
    
    try:
        article_info["article_author"] = article.find(class_="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken").text
    except:
        article_info["article_author"] = "NaN"
    
    try:
        article_info["author_url"] = article.find(class_="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken").get("href") \
            .split("?source=")[0]
    except:
        article_info["author_url"] = "NaN"

    try:
        article_info["article_date"] = article.find("time").get("datetime")
    except:
        article_info["article_date"] = "NaN"
    
    try:
        article_info["article_claps"] = int(article.find(class_="button button--chromeless u-baseColor--buttonNormal js-multirecommendCountButton u-disablePointerEvents").text)
    except:
        article_info["article_claps"] = 0

    try:
        article_info["article_readtime"] = article.find(class_="readingTime").get("title").split(" ")[0]
    except:
        article_info["article_readtime"] = -1

    try:
        article_info["article_url"] = article.find(class_="postArticle-readMore").find("a").get("href").split("?source=")[0]
    except:
        article_info["article_url"] = "NaN"

    try:
        article_info["article_title"] = article.find("h3").text.replace("\xa0", " ").replace("\u2019", "\'")
    except:
        article_info["article_title"] = "NaN"

    return article_info


def initialize_webdriver(webdriver_path):
    options = webdriver.ChromeOptions()
    options.add_experimental_option("excludeSwitches", ['enable-automation'])
    driver = webdriver.Chrome(executable_path=webdriver_path, options=options)

    return driver

def get_articles(driver, url):
    driver.get(url)
    time.sleep(2)
    content = driver.page_source
    driver.quit()
    soup = bs(content, "html.parser")
    articles = soup.findAll(class_="streamItem streamItem--postPreview js-streamItem")

    return articles

def print_article_info(article_info):
    print("----", article_info["article_title"], "----")
    print("\t Author:", article_info["article_author"])
    print("\t Claps:", article_info["article_claps"])
    print("\t Readtime:", article_info["article_readtime"])
    print("\t Date:", article_info["article_date"])
    print("\t Article URL:", article_info["article_url"])
    print("\t Author URL:", article_info["author_url"])


def get_top_n_articles(articles, n):

    sorted_articles = sorted(articles, key=lambda item: item["article_claps"], reverse=True)
    top_n_articles = [article for article in sorted_articles[:n]]
    
    return top_n_articles

def scrape_articles(url, count=0):

    webdriver_path = os.path.dirname(__file__) + "/chromedriver"

    driver = initialize_webdriver(webdriver_path)

    soup_articles = get_articles(driver, url)

    print("Found " + str(len(soup_articles)) + " articles")

    articles = []

    for article in soup_articles:
        articles.append(get_article_info(article))

    if count != 0:
        articles = get_top_n_articles(articles, count)

    articles_json = json.dumps(articles, indent=4, sort_keys=True)
    print("Returns " + str(len(json.loads(articles_json))) + " articles")
    print(articles_json)

    return articles_json