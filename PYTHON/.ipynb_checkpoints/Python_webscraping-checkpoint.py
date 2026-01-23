# Start point URL
start_url = 'https://en.wikipedia.org/wiki/Tesla,_Inc.'

# Download HTML from url
downloaded_html = requests.get(start_url)

# Parse HTML with beautifulSoup and creat a soup obj
soup = BeautifulSoup(downloaded_html.text)

# Save local copy
with open('downloaded_html', 'w') as file:
    file.write(soup.prettify())
