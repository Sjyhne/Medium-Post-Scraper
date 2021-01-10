from scrape_utils.scrape import scrape_articles

def main():

    webdriver_path = "/home/sjyhne/projects/python/scraping/Medium-Post-Scraper/chromedriver"

    articles = scrape_articles("https://medium.com/tag/machine-learning/archive/2021/01/08", 5, webdriver_path)

if __name__ == "__main__":
    main()