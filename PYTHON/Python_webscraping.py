import requests
import pandas as pd
import numpy as np
import re
from bs4 import BeautifulSoup

# Start point URL
start_url = 'https://en.wikipedia.org/wiki/Tesla,_Inc.'

# Download HTML from url
downloaded_html = requests.get(start_url)

# Parse HTML with beautifulSoup and creat a soup obj
soup = BeautifulSoup(downloaded_html.text, features='html.parser')

# Save local copy
with open('downloaded.html', 'w') as file:
    file.write(soup.prettify())
    
# Get table data
full_table = soup.select('table.wikitable tbody')[3]
print(full_table)
    
table_rows = full_table.select('tr')

# Extract the table column headings
# End result: A list with all the column headings 

regex = re.compile('_\[\w\]')

table_head = full_table.select('tr th')
table_columns = []

for element in table_head:
    column_label = element.get_text(separator=' ', strip=True)
    column_label = column_label.replace(' ', '_')
    column_label = regex.sub('', column_label)
    table_columns.append(column_label)

print('------------------------------')
for element in table_head:
    print(element.text)
    
print('------------------------------')
print(table_columns)

#print(table_rows)
table_data = []
for index, element in enumerate(table_rows):
    if index > 0:
        row_list = []
        values = element.select('td')
        for value in values:
            row_list.append(value.text.strip())
        table_data.append(row_list)
print(table_data)

df = pd.DataFrame(table_data, columns=table_columns)
print(df)
