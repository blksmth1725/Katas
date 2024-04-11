import requests
import json
import os
from secrets import google_translate_sk


url = "https://google-translator9.p.rapidapi.com/v2"

languages = {
  'ENGLISH': 'en',
  'SPANISH': 'es',
  'FRENCH': 'fr',
  'ITALIAN': 'it',
  'GERMAN': 'de',
  'PORTUGUESE': 'pt'
}

headers = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': google_translate_sk,
    'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com'
}

lang_key_list = ['-' + lang for lang, code in languages.items()]
available_langs_str = '\n'.join(lang_key_list)

def clear_screen():
    if os.name == 'nt':
        _ = os.system('cls')  
    else:
        _ = os.system('clear')  
        
        
def check_lang_availability(lang):
    if lang in languages:
        clear_screen()
        return lang  
    else:
        print(f'Sorry the language you selected is not valid.\nPlease select one of the following:\n{available_langs_str}')
        return None  


current_language = None
while current_language is None:
    current_language = check_lang_availability(input('What language is this?\n').upper())

target_language = None
while target_language is None:
    target_language = check_lang_availability(input('What language would you like it translated to?\n').upper())

sentence_to_translate = input('What would you like to translate?\n')
  
data = {
  'q': sentence_to_translate,
  'source': '',
  'target': '',
  'format': 'text'
}


for language, language_code in languages.items():
  if language == current_language:
    data['source'] = language_code
    from_language = language.upper()
  if language == target_language:
    data['target'] = language_code
    to_language = language.upper()
    


try:
    response = requests.post(url, headers=headers, json=data)
    json_data = response.json()
    fromatted_data = json.dumps(json_data, indent=4)
    translation = json_data['data']['translations'][0]['translatedText']
    clear_screen()
    response.raise_for_status()
    
except requests.exceptions.RequestException as e:
    print("Error:", e)
    
print(f"TRANSLATION FROM {from_language} TO {to_language}:\nORGINAL SENTENCE: {sentence_to_translate}\nTRANSLATED SENTENCE: {translation}")